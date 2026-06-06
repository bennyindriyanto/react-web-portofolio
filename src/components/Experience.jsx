import { memo } from 'react'
import { experience } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

function TimelineItem({ item, index }) {
  const ref = useScrollReveal(0.15)
  const delay = index * 100

  return (
    <div className="timeline-item" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="timeline-marker">
        <div className={`timeline-dot${item.current ? ' current' : ''}`} />
        <div className="timeline-line" />
      </div>
      <div className="timeline-card">
        <div className="t-card-header">
          <div>
            <h3>{item.role}</h3>
            <span className="company">{item.company}</span>
            {item.type && <span className="company-type"> · {item.type}</span>}
          </div>
          <span className="period">{item.period}</span>
        </div>
        <ul>
          {item.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const TimelineItemMemo = memo(TimelineItem)

function Experience() {
  const ref = useScrollReveal()

  return (
    <section className="section section-alt" id="experience" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career</span>
          <h2>Work Experience</h2>
          <div className="section-divider" />
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <TimelineItemMemo key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Experience)
