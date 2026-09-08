import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Home as HomeIcon,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, serviceAreas } from "@/lib/constants";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const heroImage = "/manus-storage/vellora-hero-interior_7844e28a.png";
const serviceImage = "/manus-storage/vellora-service-detail_6f37688d.png";
const processImage = "/manus-storage/vellora-process-detail_e45738de.png";
const brandMark = "/manus-storage/vellora-clean-mark_c199c87e.png";
const beforeKitchen = "/manus-storage/vellora-before-kitchen_8092324d.png";
const afterKitchen = "/manus-storage/vellora-after-kitchen_f5be3759.png";
const beforeBathroom = "/manus-storage/vellora-before-bathroom_c24f3407.png";
const afterBathroom = "/manus-storage/vellora-after-bathroom_8e4e84e6.png";

// Vellora Clean style reminder: asymmetric editorial layouts, navy/mint/lavender, calm motion, precise service copy.
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f8f8] text-[#062b63] selection:bg-[#39d6b4]/30">
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#top" className="brand-lockup" aria-label="Vellora Clean home">
            <span className="brand-mark-wrap"><img src={brandMark} alt="" className="brand-mark" /></span>
            <span><strong>VELLORA</strong><em>CLEAN</em></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("how-it-works")}>How it works</button>
            <button onClick={() => scrollTo("areas")}>Service areas</button>
            <button onClick={() => scrollTo("faq")}>FAQ</button><a href="/blog">Journal</a>
          </nav>
          <div className="header-actions">
            <a className="header-email" href="mailto:hello.velloraclean@gmail.com">hello.velloraclean@gmail.com</a>
            <Button className="nav-cta" onClick={() => scrollTo("quote")}>Request a quote <ArrowRight size={16} /></Button>
            <button className="menu-trigger" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={24} /></button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-menu-top">
            <span className="eyebrow">Vellora Clean</span>
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={28} /></button>
          </div>
          <nav>
            {[['services', 'Services'], ['how-it-works', 'How it works'], ['areas', 'Service areas'], ['faq', 'FAQ'], ['quote', 'Request a quote']].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}>{label}<ChevronRight size={22} /></button>
            ))}
            <button onClick={() => { setMenuOpen(false); window.location.href = '/blog'; }}>Journal <ChevronRight size={22} /></button>
          </nav>
          <p>Professional cleaning for homes, rentals and businesses across the Midlands.</p>
        </div>
      )}

      <main id="top">
        <section className="hero-section">
          <div className="hero-arc" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="sparkle">✦</span> Midlands cleaning, considered</div>
              <h1>A brighter<br /><span>standard</span> of clean.</h1>
              <p className="hero-lede">Detail-focused cleaning for homes, rentals and businesses that deserve to feel beautifully looked after.</p>
              <div className="hero-buttons">
                <Button className="button-mint" onClick={() => scrollTo("quote")}>Tell us what needs refreshing <ArrowRight size={17} /></Button>
                <button className="text-link" onClick={() => scrollTo("services")}>Explore services <ChevronDown size={17} /></button>
              </div>
              <div className="hero-trust"><span><Check size={15} /> Tailored quotes</span><span><Check size={15} /> Thoughtful details</span><span><Check size={15} /> Local service</span></div>
            </div>
            <div className="hero-visual">
              <img src={heroImage} alt="Bright, beautifully clean modern kitchen and living space" />
              <div className="hero-caption"><Sparkles size={18} /><span>Clean feels different<br /><strong>when every detail is cared for.</strong></span></div>
              <div className="hero-location">Serving the Midlands <span>•</span> UK</div>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="shell intro-grid">
            <div className="section-label"><span>01</span><i /> The Vellora way</div>
            <div><h2>More than a clean.<br /><em>A considered reset.</em></h2></div>
            <div className="intro-copy"><p>Whether it is a weekly rhythm, a new chapter or a space ready for guests, Vellora brings a calm, detailed approach to the work.</p><button className="text-link" onClick={() => scrollTo("how-it-works")}>See how it works <ArrowRight size={16} /></button></div>
          </div>
        </section>

        <section id="services" className="section-block services-section">
          <div className="shell">
            <div className="section-heading-row"><div><div className="eyebrow"><span className="sparkle">✦</span> Made around your space</div><h2>Cleaning that fits<br /><em>real life.</em></h2></div><p>From a focused reset to a reliable recurring rhythm, choose the kind of care your space is asking for.</p></div>
            <div className="services-layout">
              <div className="service-image-card"><img src={serviceImage} alt="Spotless kitchen surface with refined details" /><div className="image-note">A quiet kind of <span>care</span>.</div></div>
              <div className="service-list">{services.map((service, index) => <article className="service-item" key={service.title}><span className="service-number">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><ChevronRight size={20} /></article>)}</div>
            </div>
          </div>
        </section>

        <section id="results" className="section-block results-section">
          <div className="shell">
            <div className="section-heading-row results-heading"><div><div className="eyebrow"><span className="sparkle">✦</span> The difference is in the detail</div><h2>From lived-in<br /><em>to lovely.</em></h2></div><p>See the kind of thoughtful transformation Vellora Clean is built around—from high-use kitchens to the details that make a bathroom feel fresh again.</p></div>
            <div className="results-grid">
              <article className="result-card"><div className="result-card-top"><span>Kitchen reset</span><span>Illustrative example</span></div><BeforeAfterSlider before={beforeKitchen} after={afterKitchen} beforeAlt="Illustrative kitchen before a professional clean" afterAlt="Illustrative kitchen after a professional clean" /><div className="result-card-footer"><h3>Everyday surfaces, considered.</h3><p>Worktops, fixtures and the small touchpoints that change how a kitchen feels.</p></div></article>
              <article className="result-card"><div className="result-card-top"><span>Bathroom detail</span><span>Illustrative example</span></div><BeforeAfterSlider before={beforeBathroom} after={afterBathroom} beforeAlt="Illustrative bathroom before a professional clean" afterAlt="Illustrative bathroom after a professional clean" /><div className="result-card-footer"><h3>A clearer kind of calm.</h3><p>Polished surfaces, bright glass and a finish that feels cared for.</p></div></article>
            </div>
            <div className="results-disclaimer"><span className="sparkle">✦</span><p>These are illustrative visuals for the website. We will replace them with original Vellora Clean project photography as your results library grows.</p><button className="text-link" onClick={() => scrollTo("quote")}>Start your project <ArrowRight size={16} /></button></div>
          </div>
        </section>

        <section id="how-it-works" className="section-block process-section">
          <div className="shell process-grid">
            <div className="process-copy"><div className="section-label"><span>02</span><i /> How it works</div><h2>Simple from<br /><em>first hello.</em></h2><p>Good service should feel easy. Tell us what you need, we will shape the details, and you can get back to the things that matter.</p><div className="steps">{[['01', 'Tell us about your space', 'Share your area, service and preferred timing.'], ['02', 'Receive a tailored quote', 'We will come back with clear next steps.'], ['03', 'Enjoy the reset', 'A considered clean, finished with care.']].map(([n, title, copy]) => <div className="step" key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div>
            <div className="process-visual"><img src={processImage} alt="Sunlight through a freshly cleaned window" /><div className="process-badge"><Clock3 size={18} /><span>Thoughtful<br /><strong>by design.</strong></span></div></div>
          </div>
        </section>

        <section id="areas" className="areas-section"><div className="shell areas-grid"><div><div className="eyebrow"><span className="sparkle">✦</span> Local, by design</div><h2>Across the<br /><span>Midlands.</span></h2></div><div><p>Vellora Clean serves homes, landlords, tenants, hosts and local businesses across the region.</p><div className="area-tags">{serviceAreas.map((area) => <span key={area}>{area}</span>)}</div></div></div></section>

        <section id="faq" className="section-block faq-section"><div className="shell faq-grid"><div><div className="section-label"><span>03</span><i /> Good to know</div><h2>Questions,<br /><em>answered.</em></h2><p>Still deciding what kind of clean you need? Send us a message and we will help you choose.</p><a className="text-link" href="mailto:hello.velloraclean@gmail.com">Email the team <ArrowRight size={16} /></a></div><div className="faq-list">{[['Do you offer one-off deep cleans?', 'Yes. One-off deep cleaning is available for homes, refreshes and move-related moments.'], ['Can you clean rental or Airbnb properties?', 'Yes. We offer end-of-tenancy and serviced-accommodation cleaning, subject to availability.'], ['How do I get a quote?', 'Send your area, property type, service and preferred date through the quote form.'], ['Which areas do you cover?', 'We serve West Midlands, Northamptonshire, Leicestershire, Nottinghamshire and Derbyshire.']].map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

        <section id="quote" className="quote-section"><div className="shell quote-grid"><div className="quote-intro"><div className="eyebrow"><span className="sparkle">✦</span> Let us make space for better</div><h2>Tell us what needs <em>refreshing.</em></h2><p>Share a few details and we will be in touch with availability and the next step for your tailored quote.</p><div className="quote-contact"><Mail size={18} /><a href="mailto:hello.velloraclean@gmail.com">hello.velloraclean@gmail.com</a></div></div><form className="quote-form" onSubmit={handleSubmit}>{submitted ? <div className="form-success"><div className="success-icon"><Check size={28} /></div><h3>Your note is ready to go.</h3><p>Thank you. For now, please email the details directly and we will reply with the next step.</p><a className="button-mint" href="mailto:hello.velloraclean@gmail.com?subject=Vellora%20Clean%20quote%20request">Open email <ArrowRight size={17} /></a></div> : <><label>Your name<input required name="name" placeholder="How should we address you?" /></label><label>Your area / postcode<input required name="area" placeholder="e.g. Birmingham, B1" /></label><label>What can we help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label>Anything else? <textarea name="message" placeholder="Tell us a little about the space..." rows={3} /></label><Button type="submit" className="form-button">Request a tailored quote <ArrowRight size={17} /></Button><small>We will only use these details to respond to your enquiry.</small></>}</form></div></section>
      </main>

      <footer className="site-footer"><div className="shell footer-grid"><div><a href="#top" className="brand-lockup footer-brand"><span className="brand-mark-wrap"><img src={brandMark} alt="" className="brand-mark" /></span><span><strong>VELLORA</strong><em>CLEAN</em></span></a><p>A brighter standard of clean.<br />Thoughtful service across the Midlands.</p></div><div><span className="footer-label">Explore</span><button onClick={() => scrollTo("services")}>Services</button><button onClick={() => scrollTo("how-it-works")}>How it works</button><button onClick={() => scrollTo("quote")}>Request a quote</button></div><div><span className="footer-label">Connect</span><a href="mailto:hello.velloraclean@gmail.com">Email us</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><a href="https://www.facebook.com/profile.php?id=61593993243458" target="_blank" rel="noreferrer">Facebook</a></div></div><div className="shell footer-bottom"><span>© 2026 Vellora Clean</span><span>West Midlands · Northamptonshire · Leicestershire · Nottinghamshire · Derbyshire</span></div></footer>
      <a className="floating-message" href="mailto:hello.velloraclean@gmail.com?subject=Vellora%20Clean%20enquiry"><MessageCircle size={19} /> <span>Message us</span></a>
    </div>
  );
}
