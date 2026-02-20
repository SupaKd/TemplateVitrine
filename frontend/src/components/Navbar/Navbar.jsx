import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar({ site, nav }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      // Barre de progression
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)

      // Section active
      const sections = nav.map((item) => item.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [nav])

  const handleNavClick = (href) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Barre de progression de lecture */}
      <div className="navbar__progress" style={{ width: `${scrollProgress}%` }} />

      <div className="navbar__container container">
        <a
          href="#accueil"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#accueil') }}
        >
          <span className="navbar__logo-icon">{site.logo}</span>
          <span className="navbar__logo-name">{site.name}</span>
        </a>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
          {nav.map((item) => {
            const sectionId = item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                className={`navbar__link ${activeSection === sectionId ? 'navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
              >
                {item.label}
              </a>
            )
          })}
          <a
            href="#contact"
            className="btn btn-primary navbar__cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          >
            {site.cta}
          </a>
        </nav>

        <button
          className="navbar__burger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          <span className={`navbar__burger-icon ${isOpen ? 'navbar__burger-icon--open' : ''}`}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </div>
    </header>
  )
}
