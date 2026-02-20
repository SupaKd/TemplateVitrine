import { useState, useEffect } from 'react'
import { ExternalLink } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { PortfolioCardSkeleton } from '../UI/Skeleton'
import './Portfolio.css'

export default function Portfolio({ portfolio }) {
  const categories = ['Tous', ...new Set(portfolio.map((p) => p.category))]
  const [active, setActive] = useState('Tous')
  const [animating, setAnimating] = useState(false)
  const [displayed, setDisplayed] = useState(portfolio)
  const [loading, setLoading] = useState(true)
  const [headerRef, headerInView] = useInView()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])

  const handleFilter = (cat) => {
    if (cat === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(cat)
      setDisplayed(cat === 'Tous' ? portfolio : portfolio.filter((p) => p.category === cat))
      setAnimating(false)
    }, 220)
  }

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerInView ? 'reveal--visible' : ''}`}
        >
          <span className="section-label">Nos réalisations</span>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            Découvrez une sélection de nos projets et les résultats obtenus pour nos clients.
          </p>
        </div>

        <div className="portfolio__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio__filter ${active === cat ? 'portfolio__filter--active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={`portfolio__grid ${animating ? 'portfolio__grid--exit' : 'portfolio__grid--enter'}`}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <PortfolioCardSkeleton key={i} />)
            : displayed.map((item, i) => (
                <div
                  key={`${active}-${i}`}
                  className="portfolio-card"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="portfolio-card__image" style={{ background: item.color }}>
                    <span className="portfolio-card__category">{item.category}</span>
                    <button className="portfolio-card__link" aria-label="Voir le projet">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                  <div className="portfolio-card__content">
                    <h3 className="portfolio-card__title">{item.title}</h3>
                    <p className="portfolio-card__description">{item.description}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}
