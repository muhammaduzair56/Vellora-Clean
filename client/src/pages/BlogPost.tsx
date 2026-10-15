import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Link, useRoute } from "wouter";
import { blogPosts } from "@/lib/blog";
import { whatsappBookingUrl, whatsappDisplayPhone } from "@/lib/constants";

// Vellora Clean style reminder: readable editorial article layout with generous rhythm and soft paper surfaces.
export default function BlogPost() {
  const [, params] = useRoute<{ slug: string }>("/blog/:slug");
  const post =
    blogPosts.find(item => item.slug === params?.slug) ?? blogPosts[0];

  return (
    <div className="page-shell blog-post-page">
      <header className="site-header blog-header">
        <div className="shell header-inner">
          <Link
            href="/"
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
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/blog" className="active">
              Journal
            </Link>
            <Link href="/#quote">Contact</Link>
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
            <a
              className="blog-whatsapp-cta"
              href={whatsappBookingUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`WhatsApp Vellora Clean at ${whatsappDisplayPhone}`}
            >
              <MessageCircle size={19} />
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="article-hero">
          <div className="shell article-hero-inner">
            <Link href="/blog" className="back-link">
              <ArrowLeft size={15} /> Back to the journal
            </Link>
            <div className="article-kicker">
              <span>{post.category}</span>
              <span>
                <CalendarDays size={13} /> {post.date}
              </span>
              <span>
                <Clock3 size={13} /> {post.readTime}
              </span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.intro}</p>
          </div>
        </section>
        <section className="article-body">
          <div className="shell article-layout">
            <article>
              <img className="article-cover" src={post.image} alt="" />
              {post.sections.map(section => (
                <section className="article-section" key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
              <div className="article-end">
                <span className="sparkle">✦</span>
                <p>
                  Every space has its own rhythm. The right clean is the one
                  that helps yours feel easier.
                </p>
              </div>
            </article>
            <aside className="article-aside">
              <div className="article-aside-card">
                <span className="section-label">
                  <i /> Need a tailored clean?
                </span>
                <h2>Make space for better.</h2>
                <p>
                  Tell us what needs refreshing and we will help you find the
                  right next step.
                </p>
                <a className="button-mint" href="/#quote">
                  Request a quote <ArrowRight size={16} />
                </a>
              </div>
              <Link href="/blog" className="aside-journal-link">
                <ArrowLeft size={15} /> Explore all notes
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <Link href="/" className="brand-lockup footer-brand">
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
            </Link>
            <p>
              A brighter feeling at home.
              <br />
              Thoughtful cleaning across the Midlands.
            </p>
          </div>
          <div>
            <span className="footer-label">Explore</span>
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/blog">Journal</Link>
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
    </div>
  );
}
