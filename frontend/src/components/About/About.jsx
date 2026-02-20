import * as LucideIcons from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import './About.css'

function ValueCard({ icon, title, description, index, visible }) {
  const Icon = LucideIcons[icon] || LucideIcons.Star
  return (
    <div
      className={`about__value-card reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="about__value-icon">
        <Icon size={20} />
      </div>
      <h4 className="about__value-title">{title}</h4>
      <p className="about__value-description">{description}</p>
    </div>
  )
}

function TeamCard({ name, role, avatar, color, index, visible }) {
  return (
    <div
      className={`about__team-card reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
    >
      <div className="about__team-avatar" style={{ background: color }}>
        {avatar}
      </div>
      <p className="about__team-name">{name}</p>
      <p className="about__team-role">{role}</p>
    </div>
  )
}

export default function About({ about }) {
  const [contentRef, contentInView] = useInView()
  const [teamRef, teamInView] = useInView()

  return (
    <section className="about" id="apropos">
      <div className="container">
        {/* Intro : texte + valeurs */}
        <div className="about__layout" ref={contentRef}>
          <div className={`about__text reveal--left ${contentInView ? 'reveal--visible' : ''}`}>
            <span className="section-label">{about.label}</span>
            <h2 className="about__title">{about.title}</h2>
            <p className="about__description">{about.description}</p>

            <div className="about__badge-row">
              <div className="about__badge">
                <span className="about__badge-number">10+</span>
                <span className="about__badge-label">Ans d'expérience</span>
              </div>
              <div className="about__badge">
                <span className="about__badge-number">150+</span>
                <span className="about__badge-label">Projets livrés</span>
              </div>
              <div className="about__badge">
                <span className="about__badge-number">40+</span>
                <span className="about__badge-label">Experts</span>
              </div>
            </div>
          </div>

          <div className="about__values">
            {about.values.map((v, i) => (
              <ValueCard key={i} {...v} index={i} visible={contentInView} />
            ))}
          </div>
        </div>

        {/* Équipe */}
        <div className="about__team-section" ref={teamRef}>
          <div className={`section-header reveal ${teamInView ? 'reveal--visible' : ''}`}>
            <span className="section-label">L'équipe</span>
            <h3 className="section-title">Ceux qui donnent vie à vos projets</h3>
          </div>
          <div className="about__team-grid">
            {about.team.map((member, i) => (
              <TeamCard key={i} {...member} index={i} visible={teamInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
