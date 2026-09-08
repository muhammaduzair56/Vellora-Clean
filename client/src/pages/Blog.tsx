import { ArrowRight, CalendarDays, ChevronRight, Clock3, Mail } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/lib/blog";

const brandMark = "/manus-storage/vellora-clean-mark_c199c87e.png";
const blogHeroImage = "/manus-storage/vellora-blog-hero_03151bd4.png";

// Vellora Clean style reminder: editorial quiet luxury, practical local content, navy/mint/lavender hierarchy.
export default function Blog() {
  return (
    <div className="page-shell blog-page">
      <header className="site-header blog-header">
        <div className="shell header-inner">
          <Link href="/" className="brand-lockup" aria-label="Vellora Clean home">
            <span className="brand-mark-wrap"><img src={brandMark} alt="" className="brand-mark" /></span>
            <span><strong>VELLORA</strong><em>CLEAN</em></span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link><Link href="/#services">Services</Link><Link href="/#how-it-works">How it works</Link><Link href="/blog" className="active">Journal</Link><Link href="/#quote">Contact</Link>
          </nav>
          <div className="header-actions"><a className="header-email" href="mailto:hello.velloraclean@gmail.com">hello.velloraclean@gmail.com</a><a className="nav-cta" href="/#quote">Request a quote <ArrowRight size={16} /></a></div>
        </div>
      </header>

      <main>
        <section className="blog-hero">
          <div className="shell blog-hero-grid">
            <div><div className="eyebrow"><span className="sparkle">✦</span> The Vellora journal</div><h1>Small details.<br /><span>Better spaces.</span></h1><p>Practical cleaning notes, calm routines and useful guidance for homes, rentals and local businesses across the Midlands.</p><a className="button-mint" href="#latest">Explore the journal <ArrowRight size={17} /></a></div>
            <div className="blog-hero-image"><img src={blogHeroImage} alt="Sunlit contemporary kitchen and living space" /><span>Notes for a brighter everyday.</span></div>
          </div>
        </section>

        <section id="latest" className="blog-listing section-block">
          <div className="shell">
            <div className="section-heading-row"><div><div className="section-label"><span>01</span><i /> Latest notes</div><h2>Useful by<br /><em>design.</em></h2></div><p>Our journal is here to make cleaning feel clearer. No pressure, no perfectionism—just practical ideas that help your space work better.</p></div>
            <div className="blog-grid">{blogPosts.map((post) => <article className="blog-card" key={post.slug}><Link href={`/blog/${post.slug}`} className="blog-card-image"><img src={post.image} alt="" /><span className="blog-card-arrow"><ArrowRight size={17} /></span></Link><div className="blog-card-meta"><span>{post.category}</span><span><CalendarDays size={13} /> {post.date}</span></div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="blog-read-link" href={`/blog/${post.slug}`}>Read the note <ChevronRight size={15} /></Link></article>)}</div>
          </div>
        </section>

        <section className="blog-cta"><div className="shell blog-cta-inner"><div><div className="eyebrow"><span className="sparkle">✦</span> Need a hand with the real thing?</div><h2>Let the space<br /><em>feel lighter.</em></h2></div><div><p>From regular home cleaning to end-of-tenancy resets, tell us what needs refreshing and we will help with the next step.</p><a className="button-mint" href="/#quote">Request a tailored quote <ArrowRight size={17} /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="shell footer-grid"><div><Link href="/" className="brand-lockup footer-brand"><span className="brand-mark-wrap"><img src={brandMark} alt="" className="brand-mark" /></span><span><strong>VELLORA</strong><em>CLEAN</em></span></Link><p>A brighter standard of clean.<br />Thoughtful service across the Midlands.</p></div><div><span className="footer-label">Explore</span><Link href="/">Home</Link><Link href="/#services">Services</Link><Link href="/blog">Journal</Link></div><div><span className="footer-label">Connect</span><a href="mailto:hello.velloraclean@gmail.com"><Mail size={15} /> Email us</a><a href="/#quote">Request a quote</a></div></div><div className="shell footer-bottom"><span>© 2026 Vellora Clean</span><span>West Midlands · Northamptonshire · Leicestershire · Nottinghamshire · Derbyshire</span></div></footer>
    </div>
  );
}
