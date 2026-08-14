import { memo, useRef, useState, useCallback, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { personal } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const DAILY_LIMIT = 3
const STORAGE_KEY = 'portfolio_submissions'

function sanitize(str) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;' }
  return String(str).replace(/[&<>"']/g, (c) => map[c])
}

function getDailyCount() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return 0
    const data = JSON.parse(raw)
    const today = new Date().toDateString()
    if (data.date !== today) {
      localStorage.removeItem(STORAGE_KEY)
      return 0
    }
    return data.count || 0
  } catch {
    return 0
  }
}

function incrementDailyCount() {
  try {
    const today = new Date().toDateString()
    const current = getDailyCount()
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: today, count: current + 1 }))
  } catch {
    /* localStorage unavailable */
  }
}

function isSpamContent(text) {
  if (!text) return false
  const lower = text.toLowerCase()

  const urlPattern = /https?:\/\/|www\.\S+\.\S+/i
  if (urlPattern.test(lower)) return true

  const spamPhrases = [
    'buy now', 'click here', 'free money', 'act now', 'limited offer',
    'congratulations', 'you have won', 'casino', 'crypto', 'bitcoin',
    'seo service', 'guest post', 'backlink', 'traffic',
  ]
  if (spamPhrases.some(p => lower.includes(p))) return true

  const repeated = /(.)\1{8,}/
  if (repeated.test(text)) return true

  const charRatio = text.replace(/[a-z0-9\s]/gi, '').length / text.length
  if (charRatio > 0.4 && text.length > 20) return true

  return false
}

function FormStatus({ status }) {
  if (!status) return null

  const statusConfig = {
    success: { className: 'success', icon: 'check-circle', message: "Message sent successfully! I'll get back to you soon." },
    error: { className: 'error', icon: 'exclamation-circle', message: 'Failed to send message. Please try again later.' },
    'error-config': { className: 'error', icon: 'exclamation-triangle', message: 'Email service not configured.' },
    'rate-limit': { className: 'warn', icon: 'clock', message: 'Please wait 30 seconds before sending another message.' },
    'daily-limit': { className: 'warn', icon: 'clock', message: 'Daily message limit reached. Please try again tomorrow.' },
    spam: { className: 'warn', icon: 'robot', message: 'Message rejected by spam filter.' },
  }

  const cfg = statusConfig[status]
  if (!cfg) return null

  return (
    <div className={`form-status ${cfg.className}`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {status === 'success' && <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />}
        {status === 'success' && <polyline points="22 4 12 14.01 9 11.01" />}
        {(status === 'error' || status === 'error-config') && <circle cx="12" cy="12" r="10" />}
        {(status === 'error' || status === 'error-config') && <line x1="12" y1="8" x2="12" y2="12" />}
        {(status === 'error' || status === 'error-config') && <line x1="12" y1="16" x2="12.01" y2="16" />}
        {(status === 'rate-limit' || status === 'daily-limit' || status === 'spam') && <circle cx="12" cy="12" r="10" />}
        {(status === 'rate-limit' || status === 'daily-limit' || status === 'spam') && <polyline points="12 6 12 12 16 14" />}
      </svg>
      {cfg.message}
    </div>
  )
}

const FormStatusMemo = memo(FormStatus)

function Contact() {
  const sectionRef = useScrollReveal()
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const lastSubmit = useRef(0)
  const [formLoaded] = useState(() => Date.now())
  const tokenRef = useRef('')

  useEffect(() => {
    tokenRef.current = btoa(String(Date.now()))
  }, [])

  const validate = useCallback(() => {
    const errs = {}
    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()
    if (!name || name.length < 2) errs.name = 'Name is required (min 2 characters)'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Valid email is required'
    if (!message || message.length < 10) errs.message = 'Message is required (min 10 characters)'
    if (name.length > 200) errs.name = 'Name is too long'
    if (message.length > 5000) errs.message = 'Message is too long'
    if (isSpamContent(message)) errs.message = 'Message contains content not allowed'
    return errs
  }, [form])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      if (prev[name]) {
        const next = { ...prev }
        delete next[name]
        return next
      }
      return prev
    })
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error-config')
      return
    }

    const now = Date.now()

    if (now - lastSubmit.current < 30000) {
      setStatus('rate-limit')
      return
    }

    if (now - formLoaded < 3000) {
      setStatus('spam')
      return
    }

    const hp1 = document.querySelector('input[name="website"]')
    const hp2 = document.querySelector('input[name="company"]')
    const hp3 = document.querySelector('textarea[name="comments"]')
    if (hp1?.value || hp2?.value || hp3?.value) {
      setStatus('spam')
      return
    }

    if (getDailyCount() >= DAILY_LIMIT) {
      setStatus('daily-limit')
      return
    }

    if (isSpamContent(form.message)) {
      setStatus('spam')
      return
    }

    setSending(true)
    setStatus('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: sanitize(form.name.trim()),
          from_email: sanitize(form.email.trim()),
          message: sanitize(form.message.trim()),
          to_email: 'neobenny1@gmail.com',
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
          blockHeadless: true,
          limitRate: {
            id: 'portfolio-contact',
            throttle: 3600000,
          },
        }
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      incrementDailyCount()
      lastSubmit.current = Date.now()
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
    }
  }, [validate, form, formLoaded])

  return (
    <section className="section section-alt" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2>Get In Touch</h2>
          <div className="section-divider" />
        </div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let&apos;s work together</h3>
            <p className="contact-desc">Have a project in mind or just want to say hello? Drop me a message and I&apos;ll get back to you as soon as possible.</p>
            <div className="contact-details">
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>{personal.email}</span>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>linkedin.com/in/benny-indriyanto</span>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <span>{personal.phone}</span>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{personal.location}</span>
              </div>
            </div>
            <div className="contact-cv-actions">
              <a
                href={personal.cvView}
                className="btn-download-cv btn-view-cv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                View CV
              </a>
              <a
                href={personal.cvDownload}
                className="btn-download-cv"
                download
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0, zIndex: -1 }}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              <textarea name="comments" tabIndex={-1} autoComplete="off" readOnly />
              <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                maxLength={200}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                maxLength={254}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                maxLength={5000}
                className={errors.message ? 'input-error' : ''}
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>
            <button type="submit" className="btn-submit" disabled={sending}>
              {sending ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="spin">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
            <FormStatusMemo status={status} />
          </form>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)
