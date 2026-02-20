import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle, Loader } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import './Contact.css'

export default function Contact({ contact }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [headerRef, headerInView] = useInView()
  const [formRef, formInView] = useInView()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // TODO: connecter à un service d'envoi d'email (EmailJS, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerInView ? 'reveal--visible' : ''}`}
        >
          <span className="section-label">Travaillons ensemble</span>
          <h2 className="section-title">{contact.title}</h2>
          <p className="section-subtitle">{contact.subtitle}</p>
        </div>

        <div className="contact__layout">
          <div className={`contact__info reveal--left ${headerInView ? 'reveal--visible' : ''}`}>
            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact__info-label">Email</p>
                  <a href={`mailto:${contact.email}`} className="contact__info-value">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="contact__info-label">Téléphone</p>
                  <a href={`tel:${contact.phone}`} className="contact__info-value">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="contact__info-label">Adresse</p>
                  <p className="contact__info-value">{contact.address}</p>
                </div>
              </div>
            </div>

            {contact.social && contact.social.length > 0 && (
              <div className="contact__social">
                <p className="contact__social-label">Réseaux sociaux</p>
                <div className="contact__social-links">
                  {contact.social.map((s, i) => (
                    <a key={i} href={s.href} className="contact__social-link" aria-label={s.platform}>
                      {s.platform}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form
            ref={formRef}
            className={`contact__form reveal--right ${formInView ? 'reveal--visible' : ''}`}
            onSubmit={handleSubmit}
          >
            {status === 'success' && (
              <div className="contact__toast contact__toast--success">
                <CheckCircle size={18} />
                <span>Message envoyé ! Nous vous répondrons sous 24h.</span>
              </div>
            )}

            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Nom complet</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jean Dupont"
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jean@exemple.fr"
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Décrivez votre projet ou votre besoin..."
                value={form.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary contact__submit ${status === 'loading' ? 'contact__submit--loading' : ''}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader size={16} className="contact__spinner" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  Envoyer le message
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
