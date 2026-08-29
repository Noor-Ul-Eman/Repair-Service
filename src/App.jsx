import { createElement, useEffect, useRef, useState } from 'react'
import { FaArrowUp, FaBars, FaCalendarCheck, FaCertificate, FaCheck, FaChevronDown, FaClock, FaCog, FaEnvelope, FaFacebookF, FaHandHoldingUsd, FaHeadset, FaInstagram, FaMapMarkerAlt, FaMoneyBillWave, FaPhoneAlt, FaShieldAlt, FaSmile, FaSnowflake, FaStar, FaTemperatureHigh, FaTimes, FaTint, FaTools, FaUserCheck, FaWater, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const phoneNumber = '+966596159935'

function CountUp({ value, duration = 1400 }) {
  const [count, setCount] = useState(0)
  const numberRef = useRef(null)

  useEffect(() => {
    const node = numberRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(value)
        return
      }

      const startedAt = performance.now()
      const animate = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(value * eased))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, { threshold: 0.35 })

    observer.observe(node)
    return () => observer.disconnect()
  }, [duration, value])

  return <span ref={numberRef}>{count}</span>
}

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Hasan Repair Service home">
      <img className="size-14 object-contain sm:size-16 lg:size-[70px]" src="/images/logo.png" alt="Hasan Repair Service logo" />
      <span>
        <strong className="block text-[clamp(1.05rem,1.55vw,1.65rem)] font-extrabold leading-tight text-black">Hasan Repair Service</strong>
        <span className="block text-sm font-semibold text-[#ef2029] sm:text-base" lang="ar">حسن صيانة غسالات ثلاجات</span>
      </span>
    </a>
  )
}

const navLinks = ['Home', 'Services', 'About', 'Why Us', 'FAQ', 'Contact']
const features = ['Same Day Service', 'Certified Engineers', 'Genuine Spare Parts', 'Warranty Included']
const services = [
  { title: 'Washing Machine Repair', arabic: 'صيانة غسالات أوتوماتيك', image: '/images/washing-machine.png', icon: FaCog },
  { title: 'Refrigerator Repair', arabic: 'صيانة ثلاجات متطورة', image: '/images/ref.png', icon: FaTint },
  { title: 'Air Conditioner Repair', arabic: 'صيانة مكيفات سبليت', image: '/images/air.png', icon: FaSnowflake },
  { title: 'Dryer Repair', arabic: 'صيانة مجففات حرارية', image: '/images/dryer.png', icon: FaTemperatureHigh },
  { title: 'Dishwasher Repair', arabic: 'صيانة غسالات أطباق', image: '/images/dishwasher.png', icon: FaWater },
]
const serviceDescriptions = {
  'Washing Machine Repair': 'Professional restoration for top-load and front-load washers. We resolve drum rotation failures, erratic spin cycles, and digital controller board issues.',
  'Refrigerator Repair': 'Expert diagnostics and restoration for dual-cooling refrigerators, digital inverter compressors, and internal ice-maker cycles.',
  'Air Conditioner Repair': 'Complete split and window unit solutions including deep chemical cleaning, precise Freon gas refilling, and compressor control troubleshooting.',
  'Dryer Repair': 'Specialist fixes for tumbling issues, faulty heating elements, broken belts, and thermal fuses across all major residential dryer setups.',
  'Dishwasher Repair': 'Dedicated troubleshooting for drainage blockages, broken spray arms, door latch leaks, and water circulation pump mechanics.',
}
const aboutPoints = ['Certified Technicians', 'Genuine Spare Parts', 'Same Day Service', 'Affordable Pricing']
const trustReasons = [
  { title: 'Certified Experts', description: 'Experienced technicians trained to handle all major appliance brands.', icon: FaUserCheck },
  { title: 'Fast Response', description: 'Same-day repair services available in most locations.', icon: FaClock },
  { title: 'Warranty Support', description: 'Service warranty for complete peace of mind.', icon: FaShieldAlt },
  { title: 'Affordable Pricing', description: 'Transparent pricing with no hidden charges.', icon: FaMoneyBillWave },
]
const workSteps = [
  { title: 'Book Service', description: 'Call us or fill out the online enquiry form to schedule your repair service.', icon: FaPhoneAlt },
  { title: 'Schedule Visit', description: 'Our customer support team confirms your preferred time and technician visit.', icon: FaCalendarCheck },
  { title: 'Inspection', description: 'Our certified engineer carefully diagnoses the appliance and explains the issue.', icon: FaTools },
  { title: 'Repair', description: 'Genuine spare parts are used to repair your appliance quickly and professionally.', icon: FaHandHoldingUsd },
  { title: 'Quality Check', description: 'Every appliance undergoes complete testing before handover to ensure perfect performance.', icon: FaCertificate },
  { title: 'Customer Satisfaction', description: 'Enjoy warranty-backed repair service with complete peace of mind and dedicated after-service support.', icon: FaSmile },
]
const stats = [
  { value: '25000', label: 'Happy Customers', icon: FaSmile },
  { value: '35000', label: 'Appliances Repaired', icon: FaTools },
  { value: '10', label: 'Years Experience', icon: FaCertificate },
  { value: '98', label: 'Customer Satisfaction %', icon: FaStar },
]
const serviceBenefits = [
  { title: 'Same Day Service', description: 'Fast response with same-day repair in major Saudi cities.', icon: FaClock },
  { title: 'Warranty', description: 'All repairs include service warranty for peace of mind.', icon: FaShieldAlt },
  { title: 'Genuine Parts', description: 'We only use original spare parts for better performance.', icon: FaCog },
  { title: '24/7 Support', description: 'Friendly customer support available whenever you need us.', icon: FaHeadset },
]
const testimonials = [
  { name: 'Mohammed Ali', city: 'Riyadh', image: '/images/32.jpg', review: 'Excellent washing machine repair service. Technician arrived on time and fixed the issue within an hour. Highly recommended.' },
  { name: 'Fatima Ahmed', city: 'Jeddah', image: '/images/44.jpg', review: 'My refrigerator stopped cooling. Hasan Repair Service solved it the same day.' },
  { name: 'Abdullah Khan', city: 'Dammam', image: '/images/56.jpg', review: 'Affordable pricing, genuine spare parts and professional technicians.' },
]
const faqs = [
  { question: 'Do you provide same-day repair service?', answer: 'Yes, we provide same-day appliance repair in most major Saudi cities, subject to technician availability.' },
  { question: 'Do you use genuine spare parts?', answer: 'Yes, our technicians use genuine and high-quality replacement parts to ensure reliable, long-lasting performance.' },
  { question: 'Is there any warranty?', answer: 'Yes, our repair services and installed spare parts include a service warranty for your peace of mind.' },
  { question: 'Which brands do you repair?', answer: 'We repair all major local and international brands of washing machines, refrigerators, air conditioners, dryers, and dishwashers.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#101827]">
      <div className="bg-[#111827] text-white">
        <div className="topbar-inner mx-auto flex min-h-12 max-w-[1540px] items-center justify-between gap-6 px-5 text-sm lg:px-8 lg:text-[17px]">
          <div className="topbar-contacts flex items-center gap-6">
            <a className="top-link" href={`tel:${phoneNumber}`}><FaPhoneAlt className="size-5 text-[#ffb800]" />{phoneNumber}</a>
            <a className="top-link hidden sm:flex" href="mailto:info@hasanrepairservice.com"><FaEnvelope className="size-5 text-[#ffb800]" />info@hasanrepairservice.com</a>
          </div>
          <p className="topbar-emergency hidden items-center gap-3 md:flex"><FaClock className="size-5 text-[#ffb800]" />Call 24/7 for Emergency Repair Service: {phoneNumber}</p>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="site-header-inner mx-auto flex min-h-[96px] max-w-[1540px] items-center justify-between gap-8 px-5 lg:px-8">
          <Logo />
          <nav className="primary-nav hidden items-center gap-8 xl:flex" aria-label="Primary navigation">
            {navLinks.map((link) => <a key={link} className="text-[15px] font-semibold text-black transition hover:text-[#e51b24]" href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a>)}
          </nav>
          <a className="hidden items-center gap-2 rounded-full bg-[#DC3545] px-7 py-3 text-[15px] font-bold text-white shadow-[0_12px_28px_rgba(220,53,69,.25)] transition hover:-translate-y-0.5 hover:bg-[#c42f3d] lg:flex" href={`tel:${phoneNumber}`}><FaPhoneAlt />{phoneNumber}</a>
          <button className="grid size-12 place-items-center rounded-lg bg-[#e51b24] text-white xl:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <FaTimes className="size-6" /> : <FaBars className="size-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="absolute inset-x-0 top-full border-t bg-white px-5 py-5 shadow-xl xl:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-[1640px] gap-1">
              {navLinks.map((link) => <a key={link} className="rounded-lg px-4 py-3 font-semibold hover:bg-red-50 hover:text-[#e51b24]" onClick={() => setMenuOpen(false)} href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a>)}
            </div>
          </nav>
        )}
      </header>

      <main id="home">
        <section className="hero relative isolate overflow-hidden text-white">
          <div className="hero-overlay absolute inset-0 -z-10" />
          <div className="hero-inner mx-auto flex min-h-[650px] max-w-[1540px] items-center px-5 py-12 lg:px-8 xl:min-h-[740px]">
            <div className="hero-content w-full max-w-[800px]">
              <p className="hero-kicker mb-5 inline-flex rounded-full bg-[#DC3545] px-6 py-2.5 text-[14px] font-bold">Saudi Arabia&apos;s Trusted Repair Experts</p>
              <h1 className="hero-title text-[clamp(2.45rem,4vw,4rem)] font-extrabold leading-[1.08] tracking-[-.035em]">
                Fast &amp; Reliable<br />Appliance Repair<br /><span className="text-[#e51b24]">At Your Doorstep</span>
              </h1>
              <p className="hero-description mt-5 max-w-[800px] text-base leading-7 text-white/90 sm:text-lg sm:leading-9">
                Professional repair services for Washing Machines, Refrigerators, Air Conditioners, Dryers, and Dishwashers with certified technicians and genuine spare parts.
              </p>

              <div className="feature-grid mt-6 grid max-w-[800px] gap-3 sm:grid-cols-2 sm:gap-x-5">
                {features.map((feature) => (
                  <div key={feature} className="feature-card flex min-h-14 items-center gap-4 rounded-2xl bg-white px-5 font-semibold text-[#38465a] shadow-lg sm:text-base">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#069b13] text-white"><FaCheck className="size-3" /></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="hero-actions mt-8 flex flex-wrap gap-4">
                <a className="hero-book rounded-full bg-[#DC3545] px-8 py-3.5 text-base font-bold shadow-[0_15px_35px_rgba(220,53,69,.28)] transition hover:bg-[#c42f3d]" href="#contact">Book Service</a>
                <a className="hero-call flex items-center gap-2 rounded-full border border-white px-8 py-3.5 text-base font-bold transition hover:bg-white hover:text-[#111827]" href={`tel:${phoneNumber}`}><FaPhoneAlt />Call Expert Now</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section bg-[#f5f6f8] px-5 py-12 sm:py-16 lg:px-10 lg:py-20">
          <div className="services-grid mx-auto max-w-[1640px]">
            {services.map(({ title, arabic, image, icon }) => (
              <article className="service-card" key={title}>
                <img className="service-image" src={image} alt={`${title} technician`} />
                <div className="service-shade" />
                <span className="service-icon" aria-hidden="true">{createElement(icon)}</span>
                <div className="service-copy">
                  <h2>{title}</h2>
                  <p lang="ar" dir="rtl">{arabic}</p>
                  <div className="service-hover-details">
                    <p className="service-description">{serviceDescriptions[title]}</p>
                    <div className="service-tags"><span>ON-SITE REPAIR</span><span>ORIGINAL PARTS</span></div>
                    <a href={`tel:${phoneNumber}`}><FaPhoneAlt />CALL EXPERT NOW</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section bg-[#f5f6f8] px-5 py-14 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1640px] items-center gap-14 xl:grid-cols-[1.05fr_.95fr] xl:gap-16">
            <div className="about-visual">
              <img src="/images/about.png" alt="Home appliances repaired by Hasan Repair Service" />
              <div className="experience-card">
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>
            </div>

            <div className="about-content">
              <p className="about-kicker">About Company</p>
              <h2><span className="whitespace-nowrap">Saudi Arabia&apos;s Trusted</span><br /><span className="whitespace-nowrap">Appliance Repair Partner</span></h2>
              <p>Hasan Repair Service has been delivering reliable appliance repair solutions across Saudi Arabia for more than a decade.</p>
              <p>Our experienced technicians repair all major appliance brands and use genuine replacement parts to ensure long-lasting performance.</p>

              <ul className="about-list">
                {aboutPoints.map((point) => (
                  <li key={point}>
                    <span aria-hidden="true"><FaCheck /></span>{point}
                  </li>
                ))}
              </ul>

              <a className="about-button" href="#contact">Contact Us</a>
            </div>
          </div>
        </section>

        <section id="why-us" className="why-section bg-white px-5 py-16 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1640px]">
            <div className="why-heading">
              <p>Why Choose Us</p>
              <h2>Reasons Customers Trust Us</h2>
            </div>

            <div className="why-grid">
              {trustReasons.map(({ title, description, icon }) => (
                <article className="why-card" key={title}>
                  <span className="why-icon" aria-hidden="true">{createElement(icon)}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section bg-white px-5 py-16 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1640px]">
            <div className="process-heading">
              <p>How We Work</p>
              <h2>Simple &amp; Hassle-Free Repair Process</h2>
              <span>Book your repair service in just a few steps. Our experienced technicians ensure fast<br className="hidden md:block" /> diagnosis, quality repair, and complete customer satisfaction.</span>
            </div>

            <div className="process-grid">
              {workSteps.map(({ title, description, icon }, index) => (
                <article className="process-step" key={title}>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <span className="process-icon" aria-hidden="true">{createElement(icon)}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid mx-auto max-w-[1640px]">
            {stats.map(({ value, label, icon }, index) => (
              <div className="stat-item" key={label}>
                <span aria-hidden="true">{createElement(icon)}</span>
                <strong>{index < 2 ? <CountUp value={Number(value)} /> : value}</strong>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="emergency-section">
          <div className="emergency-overlay" />
          <div className="emergency-content">
            <h2>Need Emergency Appliance Repair?</h2>
            <p>Our expert technicians are available throughout Saudi Arabia. Get same-day repair service<br className="hidden md:block" /> for Washing Machines, Refrigerators, Air Conditioners, Dryers, and Dishwashers.</p>
            <div className="emergency-actions">
              <a className="emergency-call" href={`tel:${phoneNumber}`}><FaPhoneAlt />Call Now</a>
              <a className="emergency-book" href="#contact">Book Appointment</a>
            </div>
          </div>
        </section>

        <section className="benefits-section bg-[#f5f6f8] px-5 py-16 sm:py-20 lg:px-10 lg:py-24">
          <div className="benefits-grid mx-auto max-w-[1640px]">
            {serviceBenefits.map(({ title, description, icon }) => (
              <article className="benefit-card" key={title}>
                <span aria-hidden="true">{createElement(icon)}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials-section bg-[#f5f6f8] px-5 pb-20 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-[1640px]">
            <div className="testimonials-heading">
              <p>Testimonials</p>
              <h2>What Our Customers Say</h2>
              <span>Thousands of satisfied customers trust Hasan Repair Service for fast and reliable<br className="hidden md:block" /> appliance repair across Saudi Arabia.</span>
            </div>

            <div className="testimonials-grid">
              {testimonials.map(({ name, city, image, review }) => (
                <article className="testimonial-card" key={name}>
                  <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <p>{review}</p>
                  <div className="customer">
                    <img src={image} alt={name} />
                    <div><h3>{name}</h3><span>{city}</span></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section bg-white px-5 py-16 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1640px]">
            <div className="faq-heading">
              <p>FAQ</p>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq-list">
              {faqs.map(({ question, answer }, index) => {
                const isOpen = activeFaq === index
                return (
                  <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={question}>
                    <button type="button" onClick={() => setActiveFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                      <span>{question}</span><FaChevronDown aria-hidden="true" />
                    </button>
                    <div className="faq-answer"><p>{answer}</p></div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section bg-[#f5f6f8] px-5 py-16 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1640px]">
            <div className="contact-heading">
              <p>Contact</p>
              <h2>Book Your Repair Today</h2>
            </div>

            <div className="contact-grid">
              <div className="contact-details">
                <a className="contact-row" href={`tel:${phoneNumber}`}>
                  <span><FaPhoneAlt /></span>
                  <div><h3>Phone</h3><p>{phoneNumber}</p></div>
                </a>
                <a className="contact-row" href="mailto:info@electronicsrepairsaudi.com">
                  <span><FaEnvelope /></span>
                  <div><h3>Email</h3><p>info@electronicsrepairsaudi.com</p></div>
                </a>
                <div className="contact-row">
                  <span><FaMapMarkerAlt /></span>
                  <div><h3>Service Area</h3><p>All Major Cities in Saudi Arabia</p></div>
                </div>
              </div>

              <div className="map-wrap">
                <iframe title="Hasan Repair Service area in Saudi Arabia" src="https://www.google.com/maps?q=Saudi%20Arabia&z=5&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid mx-auto max-w-[1640px]">
          <div className="footer-brand">
            <Logo />
            <p>Trusted appliance repair specialists providing fast, affordable and reliable repair services across Saudi Arabia.</p>
          </div>

          <div className="footer-services">
            <h2>Services</h2>
            {services.map(({ title }) => <a href="#services" key={title}>{title}</a>)}
          </div>

          <div className="footer-contact">
            <h2>Contact</h2>
            <a href={`tel:${phoneNumber}`}><FaPhoneAlt />{phoneNumber}</a>
            <a href="mailto:info@electronicsrepairsaudi.com"><FaEnvelope />info@electronicsrepairsaudi.com</a>
            <p><FaMapMarkerAlt />Al Sharbati, Yanbu, Saudi Arabia Pincode-46477</p>
            <div className="footer-socials">
              <a href="#home" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#home" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://wa.me/966596159935" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="#home" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom mx-auto max-w-[1640px]">© 2026 Hasan Repair Service. All Rights Reserved.</div>
      </footer>

      <div className="fixed bottom-6 left-5 z-40 grid gap-3">
        <a className="floating-call bg-[#e51b24]" href={`tel:${phoneNumber}`} aria-label="Call us"><FaPhoneAlt className="size-7" /></a>
        <a className="floating-call bg-[#16c968]" href="https://wa.me/966596159935" aria-label="WhatsApp us"><FaWhatsapp className="size-9" /></a>
      </div>
      <a className="back-to-top" href="#home" aria-label="Back to top"><FaArrowUp /></a>
    </div>
  )
}

export default App
