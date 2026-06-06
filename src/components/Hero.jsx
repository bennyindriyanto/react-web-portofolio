import { memo } from 'react'
import { personal } from '../data/portfolio'

function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero-bg" />
      <img src="/images/bg.jpg" alt="" className="hero-bg-img" loading="lazy" />
      <div className="hero-overlay" />
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-status">
            <span className="hero-status-dot" />
            SYSTEM STATUS
          </div>

          <img
            src="/images/profile.jpg"
            alt={personal.name}
            className="avatar-img"
            width={120}
            height={120}
            loading="eager"
          />

          <div className="hero-title-wrapper">
            <span className="hero-title-prompt">$&gt;</span>
            <h1 className="hero-title">{personal.name}</h1>
          </div>

          <p className="hero-subtitle-line">
            <span className="highlight">{personal.title}</span>
            {' '}— Building Robust &amp; Scalable Systems
          </p>

          <p className="hero-location-line">{personal.location}</p>

          <div className="hero-actions">
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="hero-btn">
              LINKEDIN
            </a>
            <a href={personal.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hero-btn">
              WHATSAPP
            </a>
            <a href={personal.social.email} className="hero-btn">
              EMAIL
            </a>
            <a href="#contact" className="hero-btn hero-btn-primary">
              HIRE_ME
            </a>
          </div>

          <a href="#about" className="hero-scroll" aria-label="Scroll down">
            <span>SCROLL</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}

export default memo(Hero)
