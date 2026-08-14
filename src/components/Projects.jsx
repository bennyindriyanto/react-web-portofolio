import { memo } from 'react'
import { projects } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

const iconMap = {
  'credit-card': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm2-6h8v2H8v-2zm0-3h8v2H8v-2zm0-3h5v2H8V8z',
  qrcode: 'M3 3h7v7H3V3zm1 1v5h5V4H4zm9-1h7v7h-7V3zm1 1v5h5V4h-5zM3 14h7v7H3v-7zm1 1v5h5v-5H4zm9-1h7v7h-7v-7zm1 1v5h5v-5h-5z',
  store: 'M22 21V7L12 2 2 7v14h20zM4 9l8-4 8 4v10H4V9zm4 2h8v2H8v-2zm0 4h8v2H8v-2z',
  'shield-alt': 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.55-3.07 8.62-7 9.82-3.93-1.2-7-5.27-7-9.82V6.3l7-3.12zM12 6l-4 4h3v4h2v-4h3l-4-4z',
  'chart-line': 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
}

function ProjectCard({ project, index }) {
  const ref = useScrollReveal(0.1)
  const delay = index * 80

  return (
    <div className="project-card" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="project-head">
        <div className="project-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={iconMap[project.icon] || iconMap['shield-alt']} />
          </svg>
        </div>
        <div className="project-head-right">
          {project.company && <span className="project-company">{project.company}</span>}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Open ${project.title} on GitHub`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <h3>{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tech">
        {project.tags.map((tag) => (
          <span className="tag mini" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

const ProjectCardMemo = memo(ProjectCard)

function Projects() {
  const ref = useScrollReveal()

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-code">// projects</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-rule" />
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCardMemo key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Projects)
