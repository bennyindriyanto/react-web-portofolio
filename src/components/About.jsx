import { memo } from 'react'
import { about } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const ref = useScrollReveal()

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-code">// about</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-rule" />
        </div>
        <div className="about-layout">
          <div className="about-card">
            <p className="about-bio">{about.bio}</p>
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
      </div>
    </section>
  )
}

export default memo(About)
