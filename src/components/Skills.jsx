import { memo } from 'react'
import { skillGroups } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

const levelClass = {
  Advanced: 'advanced',
  Intermediate: 'intermediate',
  Beginner: 'beginner',
}

function SkillTag({ skill }) {
  return (
    <span className="tag">
      <i className={skill.icon} />
      {skill.name}
      {skill.level && (
        <span className={`tag-level ${levelClass[skill.level]}`}>{skill.level}</span>
      )}
    </span>
  )
}

const SkillTagMemo = memo(SkillTag)

function SkillGroup({ group }) {
  const ref = useScrollReveal(0.1)

  return (
    <div className="skill-group" ref={ref}>
      <h4><i className={`fas fa-${group.icon}`} /> {group.category}</h4>
      <div className="tags">
        {group.skills.map((skill) => (
          <SkillTagMemo key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

const SkillGroupMemo = memo(SkillGroup)

function Skills() {
  const ref = useScrollReveal()

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2>Technical Skills</h2>
          <div className="section-divider" />
        </div>
        <div className="skills-wrapper">
          {skillGroups.map((group) => (
            <SkillGroupMemo key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Skills)
