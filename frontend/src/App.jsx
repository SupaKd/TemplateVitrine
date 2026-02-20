import './App.css'
import { site, nav, hero, about, services, portfolio, testimonials, faq, contact, footer } from './data/siteData'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { PageLoader } from './components/UI/Skeleton'
import BackToTop from './components/UI/BackToTop'

export default function App() {
  return (
    <>
      {/* Skip link : navigation clavier rapide vers le contenu principal */}
      <a href="#accueil" className="skip-link">Aller au contenu principal</a>
      <PageLoader />
      <Navbar site={site} nav={nav} />
      <main>
        <Hero hero={hero} site={site} />
        <About about={about} />
        <Services services={services} />
        <Portfolio portfolio={portfolio} />
        <Testimonials testimonials={testimonials} />
        <FAQ faq={faq} />
        <Contact contact={contact} />
      </main>
      <Footer site={site} nav={nav} footer={footer} contact={contact} />
      <BackToTop />
    </>
  )
}
