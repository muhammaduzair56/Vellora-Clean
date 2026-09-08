# Vellora Clean Website Direction

## Stylistic Approaches

### Theme Name: Quiet Luxury Service
A refined, spacious cleaning-service identity built around deep navy, fresh mint and soft lavender. It communicates reliability and premium care without looking corporate or generic.

**Probability:** 0.07

### Theme Name: Fresh Editorial Utility
A bright, editorial layout with crisp white space, service-led typography and confident information blocks. It feels practical, clear and highly scannable on mobile.

**Probability:** 0.04

### Theme Name: Modern Home Ritual
A warmer, more tactile direction using natural room imagery, gentle texture and calm transitions. It makes cleaning feel like a considered lifestyle service rather than a commodity.

**Probability:** 0.08

## Selected Direction: Quiet Luxury Service

### Design Movement
Contemporary quiet luxury with editorial service design: restrained, confident and premium, using asymmetry, tactile imagery and precise typography instead of generic gradients or excessive rounded cards.

### Core Principles
1. **Trust before decoration:** every visual decision should make the service feel dependable and considered.
2. **Calm contrast:** deep navy creates authority, mint provides freshness and lavender acts as a restrained signature accent.
3. **Editorial rhythm:** use strong type scale, generous whitespace and asymmetric section compositions.
4. **Proof through detail:** show the work through service specificity, clean imagery and process-driven copy.

### Color Philosophy
The deep navy background (#062B63) anchors the brand with confidence and professionalism. Fresh mint (#39D6B4) carries the emotional promise of freshness and clean results. Soft lavender (#B98BE8) is used sparingly for the sparkle mark, highlights and secondary emphasis so the brand stays premium rather than playful. Mist (#F3F6F8) and white give the site breathing room and support readable content.

### Layout Paradigm
The homepage uses offset editorial compositions: a split hero with the offer on one side and a bright residential interior on the other, angled or curved boundaries that echo the Vellora mark, a horizontal service rail, and alternating proof sections. Content is not placed in one centered stack; it moves between anchored columns and full-bleed moments while remaining mobile-first.

### Signature Elements
1. A mint sweeping curve that references the approved V mark and separates navy from light content.
2. Thin lavender sparkle rules used as quiet section markers.
3. Large editorial headings paired with small uppercase service labels and short, direct copy.

### Interaction Philosophy
Interactions should feel like a polished concierge service: fast, clear and reassuring. Buttons respond with a subtle press scale, service cards lift slightly on hover, the mobile menu opens as a calm full-height panel, and the quote form provides immediate feedback without pretending to submit to a backend.

### Animation
Use short 180–260ms ease-out transitions for buttons, cards and menu states. Hero content enters with a small opacity/translate reveal and the room image remains still, creating a calm sense of arrival. Stagger service items by 40ms where appropriate. Respect prefers-reduced-motion and never animate layout dimensions.

### Typography System
Use **DM Sans** for body copy and UI controls because it is open, friendly and highly legible. Pair it with **Manrope** for display headings, using heavier weights for confident editorial contrast. Headings are tight and expressive; body text stays 16–18px with generous line height. Uppercase labels use letter spacing and mint or lavender accents.

### Brand Essence
Vellora Clean is a premium regional cleaning service for homeowners, landlords, hosts and local businesses who want dependable results with a more thoughtful standard of care. Personality: **composed, attentive, bright**.

### Brand Voice
Headlines are confident and specific. CTAs are helpful rather than aggressive. Microcopy is warm, direct and British English. Avoid filler such as “Welcome to our website.”

Example headline: **A brighter standard of clean.**  
Example CTA: **Tell us what needs refreshing.**

### Wordmark & Logo
Use the approved Vellora Clean mark: a bold mint V-shaped symbol with a small lavender sparkle, paired with a spaced uppercase wordmark. The symbol should be prominent in the header, hero and footer; use the circular lockup for social proof moments.

### Signature Brand Color
**Vellora Mint — #39D6B4.** It is ownable, energetic and immediately connects the brand to freshness without leaning into cliché green cleaning imagery.

## Website Architecture

- `/` — Single-page marketing homepage with hero, services, process, service area, FAQ, quote CTA and footer.
- Shared components: `Header`, `MobileMenu`, `Button`, `ServiceCard`, `ProcessStep`, `SectionLabel`, `QuoteForm`, `Footer`.
- Static content constants live in `client/src/lib/constants.ts`.
- TypeScript interfaces live in `client/src/types/index.ts`.
- Public-facing interactions use in-page anchors and a local quote form with a success state; no backend or API calls are included.
- Asset originals stay outside the project in `/home/ubuntu/webdev-static-assets/` and are referenced by uploaded webdev storage URLs.

## Style Decisions

- Use light content surfaces with navy hero/footer moments.
- Avoid purple gradients, generic SaaS cards, fake reviews and unverified claims.
- Do not use placeholder address, phone number, insurance claims or customer testimonials.
- Use “Serving the Midlands” and list the confirmed counties without inventing a physical office.
