import { memo } from 'react'
import { expertise } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

const iconMap = {
  sitemap: 'M8 5h8v2H8V5zm-3 6h14v2H5v-2zm0 6h8v2H5v-2zM3 3h4v4H3V3zm14 0h4v4h-4V3zM3 15h4v4H3v-4zm14 0h4v4h-4v-4z',
  'shield-alt': 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.55-3.07 8.62-7 9.82-3.93-1.2-7-5.27-7-9.82V6.3l7-3.12z',
  'tachometer-alt': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.88-11.71L10 14l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z',
  cogs: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.07.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z',
  microscope: 'M12 2a8 8 0 0 0-8 8c0 2.65 1.29 5 3.27 6.45l-.27 1.55H5v2h14v-2h-2l-.27-1.55A7.98 7.98 0 0 0 20 10a8 8 0 0 0-8-8zm0 2a6 6 0 0 1 6 6c0 1.97-.95 3.73-2.42 4.84L15 14.68l-1.08 1.08-.44.44C12.98 16.4 12.5 16.5 12 16.5s-.98-.1-1.48-.3l-.44-.44L9 14.68l-.58.16A5.96 5.96 0 0 1 6 10a6 6 0 0 1 6-6zM7 10h2v2H7v-2zm4-3h2v5h-2V7zm4 3h2v2h-2v-2z',
  'chart-line': 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
}

function ExpertiseCard({ item, index }) {
  const ref = useScrollReveal(0.1)
  const delay = index * 80

  return (
    <div className="expertise-card" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="exp-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d={iconMap[item.icon] || iconMap['sitemap']} />
        </svg>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}

const ExpertiseCardMemo = memo(ExpertiseCard)

function Expertise() {
  const ref = useScrollReveal()

  return (
    <section className="section" id="expertise" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-code">// expertise</span>
          <h2 className="section-title">Engineering Excellence</h2>
          <div className="section-rule" />
        </div>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <ExpertiseCardMemo key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Expertise)
