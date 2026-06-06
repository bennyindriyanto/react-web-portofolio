import { memo } from 'react'
import { certifications } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

function CertCard({ cert, index }) {
  const ref = useScrollReveal(0.1)
  const delay = index * 100

  return (
    <div className="cert-card" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="cert-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <div className="cert-info">
        <h3>{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
        {cert.tags.length > 0 && (
          <div className="cert-tags">
            {cert.tags.map((tag) => (
              <span className="tag mini" key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const CertCardMemo = memo(CertCard)

function Certifications() {
  const ref = useScrollReveal()

  return (
    <section className="section section-alt" id="certifications" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2>Licenses & Certifications</h2>
          <div className="section-divider" />
        </div>
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <CertCardMemo key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Certifications)
