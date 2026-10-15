import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  services,
  serviceAreas,
  whatsappBookingUrl,
  whatsappDisplayPhone,
  whatsappPhone,
} from "@/lib/constants";

const heroImage = "/images/vellora-hero.webp";
const bathroomImage = "/images/vellora-bathroom.webp";
const resetImage = "/images/vellora-reset.webp";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingUrl, setBookingUrl] = useState("");
  const [showFloatingBooking, setShowFloatingBooking] = useState(false);

  useEffect(() => {
    const updateFloatingBooking = () => {
      const heroBottom = document
        .querySelector(".hero-section")
        ?.getBoundingClientRect().bottom;
      setShowFloatingBooking(
        typeof heroBottom === "number" && heroBottom < window.innerHeight * 0.62
      );
    };
    updateFloatingBooking();
    window.addEventListener("scroll", updateFloatingBooking, { passive: true });
    window.addEventListener("resize", updateFloatingBooking);
    return () => {
      window.removeEventListener("scroll", updateFloatingBooking);
      window.removeEventListener("resize", updateFloatingBooking);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => element.classList.add("is-revealed"));
      return;
    }
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    elements.forEach(element => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = [
      ["Name", formData.get("name")],
      ["Phone", formData.get("phone")],
      ["Area / postcode", formData.get("area")],
      ["Property", formData.get("property")],
      ["Bedrooms", formData.get("bedrooms")],
      ["Bathrooms", formData.get("bathrooms")],
      ["Service", formData.get("service")],
      ["Frequency", formData.get("frequency")],
      ["Preferred date", formData.get("date")],
      ["Notes", formData.get("message")],
    ].filter(([, value]) => typeof value === "string" && value.trim());
    const message = [
      "Hello Vellora Clean, I'd like to enquire about a cleaning booking.",
      ...values.map(([label, value]) => `${label}: ${String(value).trim()}`),
      "Please let me know availability and the next steps.",
    ].join("\n");
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    setBookingUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const navigation = [
    ["services", "Services"],
    ["how-it-works", "Our approach"],
    ["areas", "Areas"],
    ["faq", "FAQs"],
  ];

  return (
    <div
      className={`min-h-screen overflow-x-hidden bg-[#f8fbfe] text-[#263442] selection:bg-[#B69AE8]/30${showFloatingBooking ? " show-floating-booking" : ""}`}
    >
      <header className="site-header">
        <div className="shell header-inner">
          <a
            href="#top"
            className="brand-lockup"
            aria-label="Vellora Clean home"
          >
            <span className="brand-mark-wrap">
              <img
                className="brand-mark"
                src="/images/vellora-mark.png"
                alt=""
              />
            </span>
            <span className="wordmark">
              <strong>VELLORA</strong>
              <em>CLEAN</em>
              <small>Cleaner Spaces. Better Places.</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
            <a href="/blog">Journal</a>
          </nav>
          <div className="header-actions">
            <a
              className="header-email"
              href="mailto:hello.velloraclean@gmail.com"
            >
              Get in touch
            </a>
            <a
              className="nav-cta"
              href={whatsappBookingUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Book on WhatsApp <MessageCircle size={15} />
            </a>
            <button
              className="menu-trigger"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={23} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu-top">
            <span className="brand-mark-wrap">
              <img
                className="brand-mark"
                src="/images/vellora-mark.png"
                alt=""
              />
            </span>
            <span className="wordmark">
              <strong>VELLORA</strong>
              <em>CLEAN</em>
              <small>Cleaner Spaces. Better Places.</small>
            </span>
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <X size={27} />
            </button>
          </div>
          <nav>
            {navigation.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}>
                {label}
                <ChevronRight size={20} />
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/blog";
              }}
            >
              Journal
              <ChevronRight size={20} />
            </button>
            <button onClick={() => scrollTo("quote")}>
              Request a quote
              <ChevronRight size={20} />
            </button>
            <a
              className="mobile-whatsapp-link"
              href={whatsappBookingUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setMenuOpen(false)}
            >
              Book on WhatsApp <MessageCircle size={18} />
            </a>
          </nav>
          <p>
            Thoughtful cleaning for homes, rentals and businesses across the
            Midlands.
          </p>
        </div>
      )}

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="sparkle">✳</span> Thoughtful home care · The
                Midlands
              </div>
              <h1>
                A little more
                <br />
                <em>room to breathe.</em>
              </h1>
              <p className="hero-lede">
                A considered clean can change the feeling of a whole space.
                Vellora brings calm, detailed care to homes, rentals and local
                businesses.
              </p>
              <div className="hero-buttons">
                <a
                  className="button-mint whatsapp-booking-button"
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Book on WhatsApp <MessageCircle size={16} />
                </a>
                <button
                  className="text-link"
                  onClick={() => scrollTo("services")}
                >
                  Explore our services <ChevronDown size={16} />
                </button>
              </div>
              <div className="hero-trust">
                <span>
                  <Check size={14} /> Tailored quotes
                </span>
                <span>
                  <Check size={14} /> Local service
                </span>
                <span>
                  <Check size={14} /> Care in the details
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src={heroImage}
                alt="Sunlit, freshly cared-for living space in a calm modern home"
                fetchPriority="high"
              />
              <div className="hero-media-meta">
                <div className="hero-caption">
                  <Sparkles size={17} />
                  <span>
                    Come home to a space
                    <br />
                    <strong>that feels like yours again.</strong>
                  </span>
                </div>
                <div className="hero-media-proof">
                  <div className="hero-location">
                    Proudly serving the Midlands
                  </div>
                  <span className="hero-image-index">
                    01 / 03 · Vellora Clean
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll shell">
            <span>Take a look around</span>
            <ArrowDown size={15} />
          </div>
        </section>

        <section className="intro-strip">
          <div className="shell intro-grid" data-reveal>
            <div className="section-label">
              <span>01</span>
              <i /> A more considered clean
            </div>
            <div>
              <h2>
                Not just tidy.
                <br />
                <em>At ease.</em>
              </h2>
            </div>
            <div className="intro-copy">
              <p>
                From the weekly rhythm to a fresh start between homes, we bring
                a thoughtful approach to the spaces that matter to you.
              </p>
              <button
                className="text-link"
                onClick={() => scrollTo("how-it-works")}
              >
                Our approach <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        <section id="services" className="section-block services-section">
          <div className="shell">
            <div className="section-heading-row" data-reveal>
              <div>
                <div className="eyebrow">
                  <span className="sparkle">✳</span> Care shaped around you
                </div>
                <h2>
                  Find your kind
                  <br />
                  <em>of clean.</em>
                </h2>
              </div>
              <p>
                No two spaces need quite the same thing. Tell us what you are
                looking for and we will help you find the right next step.
              </p>
            </div>
            <div className="services-editorial-grid" data-reveal>
              <article className="feature-service-card">
                <img
                  src={bathroomImage}
                  alt="Bright, freshly cleaned bathroom with calm natural light"
                  loading="lazy"
                />
                <div className="feature-service-overlay">
                  <span>A fresh feeling, room by room</span>
                  <h3>
                    Care in every
                    <br />
                    corner.
                  </h3>
                  <button
                    className="feature-service-link"
                    onClick={() => scrollTo("quote")}
                  >
                    Let us help <ArrowRight size={15} />
                  </button>
                </div>
              </article>
              <div className="service-list">
                {services.map((service, index) => (
                  <button
                    className="service-item"
                    key={service.title}
                    onClick={() => scrollTo("quote")}
                  >
                    <span className="service-number">0{index + 1}</span>
                    <span className="service-item-copy">
                      <strong>{service.title}</strong>
                      <small>{service.description}</small>
                    </span>
                    <ChevronRight size={18} />
                  </button>
                ))}
                <button
                  className="services-contact-link"
                  onClick={() => scrollTo("quote")}
                >
                  Ask us about your space <ArrowRight size={15} />
                </button>
              </div>
            </div>
            <div className="cleaning-checklist" data-reveal>
              <div className="cleaning-checklist-heading">
                <span className="section-label">
                  <i /> A clearer idea of the clean
                </span>
                <h3>Room by room, with care.</h3>
                <p>
                  Typical focus areas to help you plan. The exact checklist
                  depends on the service and is confirmed with your quote.
                </p>
              </div>
              <div className="cleaning-checklist-grid">
                <article>
                  <span className="checklist-icon">01</span>
                  <h4>Kitchen</h4>
                  <ul>
                    <li>
                      <Check size={15} /> Worktops and accessible surfaces
                    </li>
                    <li>
                      <Check size={15} /> Sink, taps and hob area
                    </li>
                    <li>
                      <Check size={15} /> Appliance exteriors, when agreed
                    </li>
                    <li>
                      <Check size={15} /> Floor vacuum and mop
                    </li>
                  </ul>
                </article>
                <article>
                  <span className="checklist-icon">02</span>
                  <h4>Bathroom</h4>
                  <ul>
                    <li>
                      <Check size={15} /> Basin, taps and toilet
                    </li>
                    <li>
                      <Check size={15} /> Bath or shower surfaces
                    </li>
                    <li>
                      <Check size={15} /> Mirrors and accessible surfaces
                    </li>
                    <li>
                      <Check size={15} /> Floor vacuum and mop
                    </li>
                  </ul>
                </article>
                <article>
                  <span className="checklist-icon">03</span>
                  <h4>Living & bedrooms</h4>
                  <ul>
                    <li>
                      <Check size={15} /> Dusting accessible surfaces
                    </li>
                    <li>
                      <Check size={15} /> Tidy finishing touches
                    </li>
                    <li>
                      <Check size={15} /> Mirrors and interior glass, if agreed
                    </li>
                    <li>
                      <Check size={15} /> Carpets vacuumed and hard floors
                      mopped
                    </li>
                  </ul>
                </article>
              </div>
              <p className="checklist-note">
                Inside cupboards, ovens, fridges and other add-ons should be
                requested so they can be included in the quote.
              </p>
            </div>
          </div>
        </section>

        <section className="approach-band">
          <div className="shell approach-grid" data-reveal>
            <div className="approach-photo">
              <img
                src={resetImage}
                alt="Illustrative light-filled rental living room ready for a fresh start"
                loading="lazy"
              />
              <span>Illustrative imagery · spaces shown are examples.</span>
            </div>
            <div className="approach-copy" id="how-it-works">
              <div className="section-label">
                <span>02</span>
                <i /> A simple way forward
              </div>
              <h2>
                Easy from
                <br />
                <em>the first hello.</em>
              </h2>
              <p>
                Getting the right help should feel straightforward. Share a
                little about your space and we will take it from there.
              </p>
              <div className="steps">
                {[
                  [
                    "01",
                    "Tell us about your space",
                    "Share your area, service and preferred timing.",
                  ],
                  [
                    "02",
                    "Receive a tailored quote",
                    "We will come back with clear next steps.",
                  ],
                  [
                    "03",
                    "Enjoy the reset",
                    "A considered clean, finished with care.",
                  ],
                ].map(([n, title, copy]) => (
                  <div className="step" key={n}>
                    <span>{n}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="areas" className="areas-section">
          <div className="shell areas-grid" data-reveal>
            <div>
              <div className="eyebrow">
                <span className="sparkle">✳</span> Close to home
              </div>
              <h2>
                Across the
                <br />
                <span>Midlands.</span>
              </h2>
            </div>
            <div>
              <p>
                We care for homes, rental properties and local workplaces across
                the region.
              </p>
              <div className="area-tags">
                {serviceAreas.map(area => (
                  <span key={area}>{area}</span>
                ))}
              </div>
              <button className="text-link" onClick={() => scrollTo("quote")}>
                Ask about your area <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        <section className="care-promise">
          <div className="shell care-promise-grid" data-reveal>
            <div>
              <div className="eyebrow">
                <span className="sparkle">✳</span> The little things matter
              </div>
              <h2>
                Good care feels
                <br />
                <em>like being noticed.</em>
              </h2>
            </div>
            <div className="care-points">
              <article>
                <span>01</span>
                <div>
                  <h3>A clear conversation</h3>
                  <p>
                    We start by understanding your space and what you would like
                    help with.
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Details worth noticing</h3>
                  <p>
                    We take a considered approach to the everyday surfaces and
                    finishing touches.
                  </p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>A plan that fits</h3>
                  <p>
                    Your quote starts with your property, service and preferred
                    timing—not a one-size-fits-all price.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="section-block faq-section">
          <div className="shell faq-grid" data-reveal>
            <div>
              <div className="section-label">
                <span>03</span>
                <i /> Good to know
              </div>
              <h2>
                Questions,
                <br />
                <em>answered.</em>
              </h2>
              <p>
                Not sure where to start? Send us a note and we will help you
                choose.
              </p>
              <a
                className="text-link"
                href="mailto:hello.velloraclean@gmail.com"
              >
                Email the team <ArrowRight size={15} />
              </a>
            </div>
            <div className="faq-list">
              {[
                [
                  "Do you offer one-off deep cleans?",
                  "Yes. One-off deep cleaning is available for homes, refreshes and move-related moments.",
                ],
                [
                  "Can you clean rental or Airbnb properties?",
                  "Yes. We offer end-of-tenancy and serviced-accommodation cleaning, subject to availability.",
                ],
                [
                  "How do I get a quote?",
                  "Send your area, property type, service and preferred date through the quote form.",
                ],
                [
                  "When is my booking confirmed?",
                  "The WhatsApp form sends an enquiry, not an instant reservation. Vellora will confirm availability and the agreed quote with you before your clean is booked.",
                ],
                [
                  "Can I ask for a particular cleaning checklist?",
                  "Yes. Add priorities or requested extras in the notes. The exact scope will be discussed and confirmed with your quote.",
                ],
                [
                  "Which areas do you cover?",
                  "We serve West Midlands, Northamptonshire, Leicestershire, Nottinghamshire and Derbyshire.",
                ],
              ].map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span>+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="journal" className="journal-invite">
          <div className="shell journal-invite-inner" data-reveal>
            <div>
              <div className="eyebrow">
                <span className="sparkle">✳</span> From the Vellora journal
              </div>
              <h2>
                Notes for a<br />
                <em>lighter home.</em>
              </h2>
            </div>
            <div>
              <p>
                Practical cleaning ideas, calm routines and useful guidance for
                homes, rentals and local workspaces.
              </p>
              <a href="/blog" className="text-link">
                Explore the journal <ArrowRight size={15} />
              </a>
            </div>
            <div className="journal-mark">
              <span>V</span>
              <small>VELLORA NOTES · EST. 2026</small>
            </div>
          </div>
        </section>

        <section id="quote" className="quote-section">
          <div className="shell quote-grid" data-reveal>
            <div className="quote-intro">
              <div className="eyebrow">
                <span className="sparkle">✳</span> Whenever you are ready
              </div>
              <h2>
                Let us make a little <em>space for better.</em>
              </h2>
              <p>
                Share a few details and we will be in touch with availability
                and the next step for your tailored quote.
              </p>
              <div className="quote-contact">
                <Mail size={17} />
                <a href="mailto:hello.velloraclean@gmail.com">
                  hello.velloraclean@gmail.com
                </a>
              </div>
              <div className="quote-contact whatsapp-contact">
                <MessageCircle size={17} />
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  WhatsApp · {whatsappDisplayPhone}
                </a>
              </div>
              <div className="quote-note">
                <Clock3 size={15} /> Tell us what works for you. We will take it
                from there.
              </div>
            </div>
            <form className="quote-form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <MessageCircle size={24} />
                  </div>
                  <h3>Your enquiry is ready in WhatsApp.</h3>
                  <p>
                    Review the details in WhatsApp and tap send. Your cleaning
                    is not booked until Vellora confirms availability with you.
                  </p>
                  <a
                    className="button-mint"
                    href={bookingUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Continue to WhatsApp <ArrowRight size={16} />
                  </a>
                </div>
              ) : (
                <>
                  <div className="quote-form-heading">
                    <span className="booking-step">
                      01 <i /> YOUR CLEANING ENQUIRY
                    </span>
                    <h3>Tell us about your space.</h3>
                    <p>
                      Share a few details for a tailored quote and availability
                      check.
                    </p>
                  </div>
                  <div className="booking-fields">
                    <label>
                      Full name <span className="field-required">Required</span>
                      <input
                        required
                        name="name"
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </label>
                    <label>
                      Phone number{" "}
                      <span className="field-required">Required</span>
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="e.g. +44 7700 900000"
                        autoComplete="tel"
                      />
                    </label>
                    <label>
                      Town / postcode{" "}
                      <span className="field-required">Required</span>
                      <input
                        required
                        name="area"
                        placeholder="e.g. Birmingham, B1"
                        autoComplete="postal-code"
                      />
                    </label>
                    <label>
                      Property type
                      <select name="property" defaultValue="Home">
                        <option>Home</option>
                        <option>Flat / apartment</option>
                        <option>Rental / holiday let</option>
                        <option>Office / business</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label>
                      Bedrooms
                      <select name="bedrooms" defaultValue="">
                        <option value="">Choose if relevant</option>
                        <option>Studio</option>
                        <option>1 bedroom</option>
                        <option>2 bedrooms</option>
                        <option>3 bedrooms</option>
                        <option>4 bedrooms</option>
                        <option>5+ bedrooms</option>
                      </select>
                    </label>
                    <label>
                      Bathrooms
                      <select name="bathrooms" defaultValue="">
                        <option value="">Choose if relevant</option>
                        <option>1 bathroom</option>
                        <option>2 bathrooms</option>
                        <option>3 bathrooms</option>
                        <option>4+ bathrooms</option>
                      </select>
                    </label>
                    <label>
                      Cleaning service{" "}
                      <span className="field-required">Required</span>
                      <select required name="service" defaultValue="">
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map(service => (
                          <option key={service.title}>{service.title}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      How often?
                      <select name="frequency" defaultValue="One-off">
                        <option>One-off</option>
                        <option>Weekly</option>
                        <option>Fortnightly</option>
                        <option>Monthly</option>
                        <option>Flexible / not sure</option>
                      </select>
                    </label>
                    <label className="booking-date-field">
                      Preferred date{" "}
                      <span className="field-optional">Optional</span>
                      <input name="date" type="date" />
                    </label>
                    <label className="booking-notes-field">
                      Anything we should know?{" "}
                      <span className="field-optional">Optional</span>
                      <textarea
                        name="message"
                        placeholder="Property details, priorities or access notes…"
                        rows={3}
                      />
                    </label>
                  </div>
                  <Button type="submit" className="form-button">
                    Continue with WhatsApp <MessageCircle size={17} />
                  </Button>
                  <small className="booking-disclaimer">
                    WhatsApp opens with your enquiry ready to send. No slot is
                    reserved until Vellora confirms availability and the quote
                    with you.
                  </small>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <a
              href="#top"
              className="brand-lockup footer-brand"
              aria-label="Vellora Clean home"
            >
              <span className="brand-mark-wrap">
                <img
                  className="brand-mark"
                  src="/images/vellora-mark.png"
                  alt=""
                />
              </span>
              <span className="wordmark">
                <strong>VELLORA</strong>
                <em>CLEAN</em>
              </span>
            </a>
            <p>
              Cleaner Spaces. Better Places.
              <br />
              Thoughtful cleaning across the Midlands.
            </p>
          </div>
          <div>
            <span className="footer-label">Explore</span>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("how-it-works")}>
              Our approach
            </button>
            <a href="/blog">Journal</a>
            <button onClick={() => scrollTo("quote")}>Request a quote</button>
          </div>
          <div>
            <span className="footer-label">Connect</span>
            <a href="mailto:hello.velloraclean@gmail.com">
              <Mail size={15} /> Email us
            </a>
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <MessageCircle size={15} /> WhatsApp · {whatsappDisplayPhone}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={15} /> Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61593993243458"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Vellora Clean</span>
          <span>
            West Midlands · Northamptonshire · Leicestershire · Nottinghamshire
            · Derbyshire
          </span>
        </div>
      </footer>
      <a
        className="floating-message whatsapp-float"
        href={whatsappBookingUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Book a cleaning service on WhatsApp"
      >
        <MessageCircle size={17} /> <span>Book on WhatsApp</span>
      </a>
    </div>
  );
}
