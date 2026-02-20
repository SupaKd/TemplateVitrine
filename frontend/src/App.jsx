import './App.css'
import { site, nav, hero, services, portfolio, testimonials, contact, footer } from './data/siteData'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { PageLoader } from './components/UI/Skeleton'
import BackToTop from './components/UI/BackToTop'

export default function App() {
  return (
    <>
      <PageLoader />
      <Navbar site={site} nav={nav} />
      <main>
        <Hero hero={hero} site={site} />
        <Services services={services} />
        <Portfolio portfolio={portfolio} />
        <Testimonials testimonials={testimonials} />
        <Contact contact={contact} />
      </main>
      <Footer site={site} nav={nav} footer={footer} contact={contact} />
      <BackToTop />
    </>
  )
}
