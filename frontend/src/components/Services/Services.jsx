import { useState, useEffect } from 'react'
import * as LucideIcons from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { ServiceCardSkeleton } from '../UI/Skeleton'
import './Services.css'

function ServiceCard({ icon, title, description, index, visible }) {
  const Icon = LucideIcons[icon] || LucideIcons.Star

  return (
    <div
      className={`service-card reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="service-card__icon">
        <Icon size={24} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </div>
  )
}

export default function Services({ services }) {
  const [ref, inView] = useInView()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="services" id="services">
      <div className="container">
        <div className={`section-header reveal ${inView ? 'reveal--visible' : ''}`} ref={ref}>
          <span className="section-label">Ce que nous faisons</span>
          <h2 className="section-title">Nos services</h2>
          <p className="section-subtitle">
            Des solutions complètes adaptées à vos besoins pour vous accompagner vers la réussite.
          </p>
        </div>

        <div className="services__grid">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <ServiceCardSkeleton key={i} />)
            : services.map((service, i) => (
                <ServiceCard key={i} {...service} index={i} visible={inView} />
              ))}
        </div>
      </div>
    </section>
  )
}
