import './Footer.css'

export default function Footer({ site, nav, footer, contact }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">{site.logo}</span>
              <span className="footer__logo-name">{site.name}</span>
            </div>
            <p className="footer__tagline">{site.tagline}</p>
            <div className="footer__social">
              {contact.social.map((s, i) => (
                <a key={i} href={s.href} className="footer__social-link" aria-label={s.platform}>
                  {s.platform[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__nav">
            <p className="footer__nav-title">Navigation</p>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="footer__nav-link"
                onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer__contact">
            <p className="footer__nav-title">Contact</p>
            <p className="footer__contact-item">{contact.email}</p>
            <p className="footer__contact-item">{contact.phone}</p>
            <p className="footer__contact-item">{contact.address}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{footer.copyright}</p>
          <div className="footer__legal">
            {footer.links.map((link, i) => (
              <a key={i} href={link.href} className="footer__legal-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
