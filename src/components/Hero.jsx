import { memo } from 'react'
import { personal } from '../data/portfolio'

function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero-bg-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {personal.title}
          </div>

          <h1 className="hero-name">
            {personal.name.split(' ')[0]}
            <br />
            <span className="hero-name-accent">{personal.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="hero-tagline">{personal.tagline}</p>

          <p className="hero-location">
            <i className="fas fa-map-marker-alt" aria-hidden="true" />
            {personal.location}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn-primary">
              View Projects
            </a>
            <a href="#contact" className="hero-btn">
              Get in Touch
            </a>
          </div>

          <div className="hero-cv-actions">
            <a href={personal.cvView} className="hero-cv-btn" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-eye" aria-hidden="true" />
              View CV
            </a>
            <a href={personal.cvDownload} className="hero-cv-btn" download>
              <i className="fas fa-download" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
            <a href={personal.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github" aria-hidden="true" />
            </a>
            <a href={personal.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp" aria-hidden="true" />
            </a>
            <a href={personal.social.email} aria-label="Email">
              <i className="fas fa-envelope" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo">
            <img
              src="/images/profile.jpg"
              alt={personal.name}
              width={280}
              height={280}
              loading="eager"
            />
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll down">
        <span>Scroll</span>
        <svg className="scroll-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </a>
    </header>
  )
}

export default memo(Hero)
