import { memo } from 'react'
import { about } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const ref = useScrollReveal()

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About</span>
          <h2>Professional Profile</h2>
          <div className="section-divider" />
        </div>
        <div className="about-card">
          <p>{about.bio}</p>
          <div className="about-stats">
            {about.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-num">
                  {stat.value}
                  {stat.label === 'Delivery Rate' && <span className="stat-percent">%</span>}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)
