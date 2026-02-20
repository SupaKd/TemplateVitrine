import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import './Testimonials.css'

function StarRating({ rating }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'testimonial-star--filled' : 'testimonial-star--empty'}
        />
      ))}
    </div>
  )
}

export default function Testimonials({ testimonials }) {
  const [ref, inView] = useInView()
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <section className="testimonials" id="temoignages">
      <div className="container">
        <div
          ref={ref}
          className={`section-header reveal ${inView ? 'reveal--visible' : ''}`}
        >
          <span className="section-label">Ils nous font confiance</span>
          <h2 className="section-title">Témoignages clients</h2>
          <p className="section-subtitle">
            La satisfaction de nos clients est notre meilleure récompense.
          </p>
        </div>

        {/* Grid desktop */}
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card reveal ${inView ? 'reveal--visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="testimonial-card__quote-icon">
                <Quote size={20} />
              </div>
              <StarRating rating={t.rating} />
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.avatar}</div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carrousel tablette + mobile */}
        <div className="testimonials__carousel">
          <div className="testimonials__carousel-viewport">
          <div
            className="testimonials__carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card testimonial-card--slide">
                <div className="testimonial-card__quote-icon">
                  <Quote size={20} />
                </div>
                <StarRating rating={t.rating} />
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>

          <div className="testimonials__carousel-controls">
            <button className="testimonials__carousel-btn" onClick={prev} aria-label="Précédent">
              <ChevronLeft size={18} />
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonials__carousel-btn" onClick={next} aria-label="Suivant">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
