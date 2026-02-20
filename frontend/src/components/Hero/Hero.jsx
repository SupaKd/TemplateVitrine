import { ArrowRight, ChevronDown } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import './Hero.css'

function AnimatedStat({ number, suffix, label, started }) {
  const count = useCountUp(number, 1800, started)
  return (
    <div className="hero__stat">
      <span className="hero__stat-number">{count}{suffix}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  )
}

export default function Hero({ hero, site }) {
  const [ref, inView] = useInView({ threshold: 0.15 })

  const scrollToNext = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="accueil" ref={ref}>
      <div className="hero__container container">
        <div className={`hero__content reveal--left ${inView ? 'reveal--visible' : ''}`}>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>{site.tagline}</span>
          </div>

          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__actions">
            <a
              href={hero.ctaPrimary.href}
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(hero.ctaPrimary.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {hero.ctaPrimary.label}
              <ArrowRight size={18} />
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(hero.ctaSecondary.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {hero.ctaSecondary.label}
            </a>
          </div>

          <div className="hero__stats">
            <AnimatedStat number={150} suffix="+" label="Clients satisfaits" started={inView} />
            <div className="hero__stat-divider" />
            <AnimatedStat number={98} suffix="%" label="Taux de satisfaction" started={inView} />
            <div className="hero__stat-divider" />
            <AnimatedStat number={10} suffix=" ans" label="D'expérience" started={inView} />
          </div>
        </div>

        <div className={`hero__visual reveal--right ${inView ? 'reveal--visible' : ''}`}>
          <div className="hero__visual-card hero__visual-card--main">
            <div className="hero__visual-dot hero__visual-dot--green" />
            <p className="hero__visual-label">Projet livré</p>
            <p className="hero__visual-value">+45% de croissance</p>
          </div>
          <div className="hero__visual-card hero__visual-card--secondary">
            <div className="hero__visual-dot hero__visual-dot--blue" />
            <p className="hero__visual-label">Satisfaction client</p>
            <div className="hero__visual-stars">★★★★★</div>
          </div>
          <div className="hero__visual-bg" />
        </div>
      </div>

      <button className="hero__scroll" onClick={scrollToNext} aria-label="Défiler vers le bas">
        <ChevronDown size={22} />
      </button>
    </section>
  )
}
