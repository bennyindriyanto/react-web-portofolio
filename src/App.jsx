import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function sanitize(str) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;' }
  return String(str).replace(/[&<>"']/g, c => map[c])
}

function App() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  function validate() {
    const errs = {}
    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()
    if (!name || name.length < 2) errs.name = 'Name is required (min 2 characters)'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Valid email is required'
    if (!message || message.length < 10) errs.message = 'Message is required (min 10 characters)'
    if (name.length > 200) errs.name = 'Name is too long'
    if (message.length > 5000) errs.message = 'Message is too long'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error-config')
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
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
  }

  return (
    <div className="app">
      <input type="text" name="_hp" className="hp" tabIndex={-1} autoComplete="off" />

      <header className="hero">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-content">
            <div className="avatar">BI</div>
            <h1>Benny Indriyanto</h1>
            <p className="subtitle">Senior Backend Engineer | Building Robust &amp; Scalable Systems</p>
            <p className="location"><i className="fas fa-map-marker-alt"></i> South Jakarta, Jakarta, Indonesia</p>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/benny-indriyanto" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
              <a href="https://wa.me/6281392928197" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp</a>
              <a href="mailto:neobenny1@gmail.com"><i className="fas fa-envelope"></i> Email</a>
              <a href="#contact"><i className="fas fa-paper-plane"></i> Hire Me</a>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About</span>
            <h2>Professional Profile</h2>
          </div>
          <div className="about-card">
            <p>
              Seorang <strong>Senior Backend Engineer</strong> berpengalaman dengan keahlian khusus di sistem
              core loan (kartu kredit), sistem pembayaran QRIS, dan merchant. Memiliki rekam jejak
              dalam membangun microservices yang skalabel, integrasi dengan Elasticsearch, serta
              mengamankan aplikasi menggunakan protokol enkripsi yang kuat. Terbiasa menangani
              RESTful API, JDBC untuk manajemen data, serta memiliki latar belakang kuat dalam
              deployment berbasis Cloud dan server Linux.
            </p>
            <div className="about-stats">
              <div className="stat"><span className="stat-num">4+</span><span className="stat-label">Years Experience</span></div>
              <div className="stat"><span className="stat-num">10+</span><span className="stat-label">Projects Delivered</span></div>
              <div className="stat"><span className="stat-num">Finance</span><span className="stat-label">Industry Focus</span></div>
              <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Delivery Rate</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Career</span>
            <h2>Work Experience</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot current" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-card">
                <div className="t-card-header">
                  <div>
                    <h3>Back End Developer</h3>
                    <span className="company">PT EDI Indonesia &middot; Full-time (On-site)</span>
                  </div>
                  <span className="period"><i className="far fa-calendar-alt"></i> Oct 2025 – Present</span>
                </div>
                <ul>
                  <li>Fokus pada pengembangan sistem menggunakan ekosistem Java Development</li>
                  <li>Membangun arsitektur backend yang kokoh dan scalable</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-card">
                <div className="t-card-header">
                  <div>
                    <h3>Software Developer</h3>
                    <span className="company">Bank Mega &middot; Full-time (On-site)</span>
                  </div>
                  <span className="period"><i className="far fa-calendar-alt"></i> May 2024 – Oct 2025 &middot; 1 yr 6 mos</span>
                </div>
                <ul>
                  <li>Bertanggung jawab dalam pengembangan sistem core loan untuk kartu kredit</li>
                  <li>Mengembangkan solusi pembayaran QRIS dan sistem merchant</li>
                  <li>Mengimplementasikan arsitektur Microservices, Spring Boot, dan Elasticsearch untuk memastikan performa aplikasi yang tinggi</li>
                  <li>Mengamankan transaksi dengan enkripsi dan protokol keamanan</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-card">
                <div className="t-card-header">
                  <div>
                    <h3>Quality Assurance Engineer</h3>
                    <span className="company">PT Mitra Transaksi Indonesia &middot; Contract</span>
                  </div>
                  <span className="period"><i className="far fa-calendar-alt"></i> Sep 2021 – Feb 2024 &middot; 2 yrs 6 mos</span>
                </div>
                <ul>
                  <li>Melakukan analisis data (Data Analysis) dan pengujian API menggunakan Postman API</li>
                  <li>Memastikan kualitas dan standar fungsionalitas software sebelum rilis ke produksi</li>
                  <li>Mengembangkan automation testing untuk meningkatkan efisiensi QA process</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-card">
                <div className="t-card-header">
                  <div>
                    <h3>Web Developer</h3>
                    <span className="company">Freelance</span>
                  </div>
                  <span className="period"><i className="far fa-calendar-alt"></i> Apr 2021 – Dec 2021 &middot; 9 mos</span>
                </div>
                <ul>
                  <li>Membangun dan mengembangkan aplikasi berbasis web dengan fokus optimalisasi SQL database</li>
                  <li>Delivered end-to-end web solutions for multiple clients</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2>Featured Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon"><i className="fas fa-credit-card"></i></div>
              <h3>Core Loan System</h3>
              <p className="project-desc">Sistem core loan untuk kartu kredit di Bank Mega, menangani ribuan transaksi harian dengan arsitektur microservices.</p>
              <div className="project-tech">
                <span className="tag mini">Java</span>
                <span className="tag mini">Spring Boot</span>
                <span className="tag mini">Elasticsearch</span>
                <span className="tag mini">Microservices</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon"><i className="fas fa-qrcode"></i></div>
              <h3>QRIS Payment System</h3>
              <p className="project-desc">Solusi pembayaran QRIS yang terintegrasi dengan merchant dan sistem perbankan, mendukung transaksi real-time.</p>
              <div className="project-tech">
                <span className="tag mini">Java</span>
                <span className="tag mini">REST APIs</span>
                <span className="tag mini">JDBC</span>
                <span className="tag mini">SQL</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon"><i className="fas fa-store"></i></div>
              <h3>Merchant Management Platform</h3>
              <p className="project-desc">Platform manajemen merchant terintegrasi dengan sistem EDC, enabling seamless payment processing.</p>
              <div className="project-tech">
                <span className="tag mini">Spring Boot</span>
                <span className="tag mini">Microservices</span>
                <span className="tag mini">Docker</span>
                <span className="tag mini">Linux</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Secure Payment Gateway</h3>
              <p className="project-desc">Payment gateway dengan enkripsi end-to-end, mendukung Visa, Mastercard, dan berbagai metode pembayaran.</p>
              <div className="project-tech">
                <span className="tag mini">Java</span>
                <span className="tag mini">Spring Security</span>
                <span className="tag mini">OAuth 2.0</span>
                <span className="tag mini">JWT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="expertise">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Approach</span>
            <h2>Engineering Excellence</h2>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="exp-icon"><i className="fas fa-sitemap"></i></div>
              <h3>Architecture & Design</h3>
              <p>Merancang arsitektur microservices yang scalable, maintainable, dan resilient menggunakan SOLID principles, Clean Architecture, dan Domain-Driven Design.</p>
            </div>
            <div className="expertise-card">
              <div className="exp-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Security First</h3>
              <p>Menerapkan Spring Security (JWT, OAuth 2.0), enkripsi data, OWASP best practices, dan secure coding untuk melindungi sistem dan data pengguna.</p>
            </div>
            <div className="expertise-card">
              <div className="exp-icon"><i className="fas fa-tachometer-alt"></i></div>
              <h3>Performance Optimization</h3>
              <p>Optimasi query database, caching dengan Redis/Memcached, indexing Elasticsearch, dan load balancing untuk performa aplikasi yang tinggi.</p>
            </div>
            <div className="expertise-card">
              <div className="exp-icon"><i className="fas fa-cogs"></i></div>
              <h3>CI/CD & DevOps</h3>
              <p>Pipeline CI/CD otomatis dengan Docker, Kubernetes, Jenkins/GitHub Actions untuk deployment yang cepat, konsisten, dan reliable.</p>
            </div>
            <div className="expertise-card">
              <div className="exp-icon"><i className="fas fa-microscope"></i></div>
              <h3>Testing & Quality</h3>
              <p>Unit testing (JUnit, Mockito), integration testing, API testing (Postman), dan automation testing (Selenium) untuk menjamin kualitas software.</p>
            </div>
            <div className="expertise-card">
              <div className="exp-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Monitoring & Observability</h3>
              <p>Implementasi logging (ELK Stack), monitoring (Prometheus/Grafana), dan distributed tracing untuk observability sistem secara real-time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Expertise</span>
            <h2>Technical Skills</h2>
          </div>
          <div className="skills-wrapper">
            <div className="skill-group">
              <h4><i className="fas fa-code"></i> Programming Languages</h4>
              <div className="tags">
                <span className="tag"><i className="fab fa-java"></i> Java <span className="tag-level advanced">Advanced</span></span>
                <span className="tag"><i className="fab fa-js"></i> JavaScript <span className="tag-level intermediate">Intermediate</span></span>
                <span className="tag"><i className="fab fa-python"></i> Python <span className="tag-level intermediate">Intermediate</span></span>
                <span className="tag"><i className="fas fa-flask"></i> C++ <span className="tag-level beginner">Beginner</span></span>
              </div>
            </div>
            <div className="skill-group">
              <h4><i className="fas fa-layer-group"></i> Frameworks & Libraries</h4>
              <div className="tags">
                <span className="tag"><i className="fas fa-leaf"></i> Spring Boot</span>
                <span className="tag"><i className="fas fa-cogs"></i> Microservices</span>
                <span className="tag"><i className="fas fa-network-wired"></i> REST APIs</span>
                <span className="tag"><i className="fas fa-database"></i> JDBC / JPA</span>
                <span className="tag"><i className="fas fa-lock"></i> Spring Security</span>
                <span className="tag"><i className="fas fa-file-alt"></i> Swagger / OpenAPI</span>
                <span className="tag"><i className="fas fa-vial"></i> JUnit / Mockito</span>
              </div>
            </div>
            <div className="skill-group">
              <h4><i className="fas fa-database"></i> Databases & Search</h4>
              <div className="tags">
                <span className="tag"><i className="fas fa-database"></i> MySQL</span>
                <span className="tag"><i className="fas fa-database"></i> PostgreSQL</span>
                <span className="tag"><i className="fas fa-database"></i> MS SQL Server</span>
                <span className="tag"><i className="fas fa-leaf"></i> MongoDB</span>
                <span className="tag"><i className="fas fa-bolt"></i> Redis</span>
                <span className="tag"><i className="fas fa-search"></i> Elasticsearch</span>
                <span className="tag"><i className="fas fa-stream"></i> Kafka</span>
              </div>
            </div>
            <div className="skill-group">
              <h4><i className="fas fa-cloud-upload-alt"></i> DevOps & Infrastructure</h4>
              <div className="tags">
                <span className="tag"><i className="fab fa-docker"></i> Docker</span>
                <span className="tag"><i className="fas fa-box"></i> Kubernetes</span>
                <span className="tag"><i className="fab fa-linux"></i> Linux Server</span>
                <span className="tag"><i className="fas fa-server"></i> Tomcat</span>
                <span className="tag"><i className="fas fa-cloud"></i> Cloud (AWS / GCP)</span>
                <span className="tag"><i className="fas fa-code-branch"></i> Jenkins / GitHub Actions</span>
                <span className="tag"><i className="fas fa-chart-pie"></i> Prometheus / Grafana</span>
                <span className="tag"><i className="fas fa-file-code"></i> ELK Stack</span>
              </div>
            </div>
            <div className="skill-group">
              <h4><i className="fas fa-tools"></i> Tools & Platforms</h4>
              <div className="tags">
                <span className="tag"><i className="fab fa-git-alt"></i> Git / GitHub</span>
                <span className="tag"><i className="fas fa-paper-plane"></i> Postman API</span>
                <span className="tag"><i className="fas fa-chart-bar"></i> Data Analysis</span>
                <span className="tag"><i className="fas fa-tasks"></i> Jira / Confluence</span>
                <span className="tag"><i className="fas fa-sync-alt"></i> Agile / Scrum</span>
                <span className="tag"><i className="fas fa-puzzle-piece"></i> Maven / Gradle</span>
                <span className="tag"><i className="fas fa-terminal"></i> IntelliJ IDEA</span>
                <span className="tag"><i className="fas fa-feather-alt"></i> Swagger / Postman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="certifications">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Credentials</span>
            <h2>Licenses & Certifications</h2>
          </div>
          <div className="certs-grid">
            <div className="cert-card">
              <div className="cert-icon"><i className="fas fa-certificate"></i></div>
              <div className="cert-info">
                <h3>Certified Software Engineer</h3>
                <p className="cert-issuer">HackerRank</p>
                <div className="cert-tags">
                  <span className="tag mini">Java</span>
                  <span className="tag mini">C++</span>
                </div>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon"><i className="fas fa-certificate"></i></div>
              <div className="cert-info">
                <h3>REST API (Intermediate) Certificate</h3>
                <p className="cert-issuer">HackerRank</p>
                <div className="cert-tags">
                  <span className="tag mini">Java</span>
                  <span className="tag mini">REST APIs</span>
                </div>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon"><i className="fas fa-certificate"></i></div>
              <div className="cert-info">
                <h3>Responsive Web Design Course</h3>
                <p className="cert-issuer">Online Course</p>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon"><i className="fas fa-certificate"></i></div>
              <div className="cert-info">
                <h3>Python and Machine Learning for Financial Analysis</h3>
                <p className="cert-issuer">Online Course</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Education</span>
            <h2>Academic Background</h2>
          </div>
          <div className="edu-card">
            <div className="edu-icon"><i className="fas fa-graduation-cap"></i></div>
            <div className="edu-info">
              <h3>S1 Information Technology</h3>
              <p className="edu-school">Universitas Dian Nuswantoro &middot; 2014 – 2019</p>
              <p className="edu-detail"><strong>GPA:</strong> 2.85</p>
              <p className="edu-detail"><strong>Organization:</strong> Dian Nuswantoro Computer Club (DNCC) 2014</p>
              <p className="edu-detail"><strong>Focus:</strong> Software Development, JavaScript, Web Development, SQL</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Contact</span>
            <h2>Get In Touch</h2>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Let&apos;s work together</h3>
              <p>Have a project in mind or just want to say hello? Drop me a message and I&apos;ll get back to you as soon as possible.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>neobenny1@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="fab fa-linkedin"></i>
                  <span>linkedin.com/in/benny-indriyanto</span>
                </div>
                <div className="contact-item">
                  <i className="fab fa-whatsapp"></i>
                  <span>+62 813-9292-8197</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>South Jakarta, Indonesia</span>
                </div>
              </div>
              <a href="#" className="btn-download-cv" onClick={(e) => { e.preventDefault(); alert('CV download akan segera tersedia. Silakan hubungi saya langsung.'); }}>
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
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
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  maxLength={5000}
                  className={errors.message ? 'input-error' : ''}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>
              <button type="submit" className="btn-submit" disabled={sending}>
                {sending ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
              </button>
              {status === 'success' && (
                <div className="form-status success">
                  <i className="fas fa-check-circle"></i> Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  <i className="fas fa-exclamation-circle"></i> Failed to send message. Please try again later.
                </div>
              )}
              {status === 'error-config' && (
                <div className="form-status error">
                  <i className="fas fa-exclamation-triangle"></i> Email service not configured. Please set VITE_EMAILJS_* environment variables.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Benny Indriyanto. Built with React &amp; Vite.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/benny-indriyanto" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://wa.me/6281392928197" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              <a href="mailto:neobenny1@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
