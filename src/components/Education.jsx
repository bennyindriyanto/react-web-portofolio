import { memo } from 'react'
import { education } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Education() {
  const ref = useScrollReveal()

  return (
    <section className="section" id="education" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-code">// education</span>
          <h2 className="section-title">Education</h2>
          <div className="section-rule" />
        </div>
        <div className="edu-card">
          <div className="edu-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="edu-info">
            <h3>{education.degree}</h3>
            <p className="edu-school">{education.school} · {education.period}</p>
            <p className="edu-detail"><strong>GPA:</strong> {education.gpa}</p>
            <p className="edu-detail"><strong>Organization:</strong> {education.organization}</p>
            <p className="edu-detail"><strong>Focus:</strong> {education.focus}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Education)
