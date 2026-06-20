import Image from "next/image";
import {
  Phone, Mail, MessageCircle, ArrowRight, CheckCircle2, MapPin,
  Code2, Globe, Smartphone, ShoppingCart, Bot, Cloud, ShieldCheck,
  BarChart3, Megaphone, Palette, Headphones, Workflow,
  CreditCard, Scale, Stethoscope, ShoppingBag, HardHat, Home as HomeIcon,
  GraduationCap, BedDouble, UtensilsCrossed, Truck, Factory, Users,
  HeartHandshake, Zap, Car, Plane, Sparkles, Dumbbell, CalendarDays,
  Wheat, Wrench, Calculator, Landmark, Rocket,
} from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { Badge } from "@/components/ui/badge";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";

/* ── Content ─────────────────────────────────────────────── */

const stats = [
  { val: "40+", label: "UK businesses served" },
  { val: "98%", label: "Client satisfaction" },
  { val: "24/7", label: "UK-based support" },
  { val: "100%", label: "GDPR-first delivery" },
];

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Bespoke platforms, client portals and internal tools engineered around your exact workflow — built to scale as you grow." },
  { icon: Globe, title: "Web Design & Development", desc: "Lightning-fast, SEO-ready websites that turn visitors into paying customers." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Polished iOS and Android apps — booking, loyalty, delivery and beyond." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Shopify, headless storefronts, payments, VAT handling and Royal Mail integration." },
  { icon: Bot, title: "AI & Intelligent Automation", desc: "Chatbots, document automation and AI workflows that save hours every week." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Migrations, UK-hosted infrastructure, CI/CD pipelines and cost optimisation." },
  { icon: ShieldCheck, title: "Cybersecurity & Compliance", desc: "Security reviews, Cyber Essentials support and GDPR-aligned data practices." },
  { icon: BarChart3, title: "Data & Analytics", desc: "Live dashboards, reporting and forecasting that turn your data into decisions." },
  { icon: Megaphone, title: "Digital Marketing & SEO", desc: "Local SEO, Google Ads and content strategies that put you ahead of competitors." },
  { icon: Palette, title: "Branding & UI/UX Design", desc: "Logos, brand identities and interfaces your customers will love to use." },
  { icon: Headphones, title: "IT Support & Managed Services", desc: "Friendly UK helpdesk, proactive monitoring, Microsoft 365 and Google Workspace." },
  { icon: Workflow, title: "CRM, ERP & Business Systems", desc: "HubSpot, Salesforce, Xero and Sage integrations — bookings, rotas and invoicing connected." },
];

const sectors = [
  { icon: CreditCard, title: "Finance & Fintech" },
  { icon: Scale, title: "Legal Services" },
  { icon: Stethoscope, title: "Healthcare & Clinics" },
  { icon: ShoppingBag, title: "Retail & E-commerce" },
  { icon: HardHat, title: "Construction" },
  { icon: HomeIcon, title: "Property & Lettings" },
  { icon: GraduationCap, title: "Education & Training" },
  { icon: BedDouble, title: "Hotels & Hospitality" },
  { icon: UtensilsCrossed, title: "Restaurants & Takeaways" },
  { icon: Truck, title: "Logistics & Transport" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Users, title: "Recruitment & HR" },
  { icon: HeartHandshake, title: "Charities & Non-profits" },
  { icon: Zap, title: "Energy & Utilities" },
  { icon: Car, title: "Automotive" },
  { icon: Plane, title: "Travel & Tourism" },
  { icon: Sparkles, title: "Beauty & Wellness" },
  { icon: Dumbbell, title: "Gyms & Fitness" },
  { icon: CalendarDays, title: "Events & Entertainment" },
  { icon: Wheat, title: "Agriculture & Farming" },
  { icon: Wrench, title: "Trades & Home Services" },
  { icon: Calculator, title: "Accountancy" },
  { icon: Landmark, title: "Public Sector" },
  { icon: Rocket, title: "Startups & Scale-ups" },
];

const whyUs = [
  { title: "UK-Based Team & Support", desc: "Real people in the UK who understand British business — same time zone, same standards, no language barriers." },
  { title: "Transparent Fixed Pricing", desc: "Clear proposals with fixed quotes before any work starts. No hidden fees, no surprise invoices." },
  { title: "GDPR & Security First", desc: "Every project is built with UK data protection law in mind, with your customers' data hosted securely in the UK." },
  { title: "Launch in Weeks, Not Months", desc: "Agile delivery with weekly demos — most websites launch within 3–6 weeks, apps within 8–12." },
  { title: "Partners Beyond Launch", desc: "We stay with you after go-live: support plans, updates, security patches and growth advice included." },
  { title: "Built to Win You Clients", desc: "Everything we ship is designed around one goal — bringing more customers and revenue to your business." },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "A free, no-obligation chat about your business, your customers and what success looks like." },
  { step: "02", title: "Strategy & Proposal", desc: "A clear plan with fixed pricing, timelines and the exact outcomes you'll get." },
  { step: "03", title: "Design & Build", desc: "Agile sprints with demos every week — you see progress constantly, never a black box." },
  { step: "04", title: "Launch & Handover", desc: "Thorough testing, smooth go-live and full training so your team is confident from day one." },
  { step: "05", title: "Grow & Support", desc: "Ongoing support, monitoring and improvements that keep you ahead of the competition." },
];

const faqs = [
  { q: "How much does a website or app cost?", a: "Every project is quoted individually, but as a guide: brochure websites typically start from £2,000, e-commerce stores from £5,000, and custom software or mobile apps from £10,000. You always receive a fixed written quote before any work begins — no hourly billing surprises." },
  { q: "How long will my project take?", a: "Most websites launch within 3–6 weeks. E-commerce stores typically take 6–10 weeks, and custom software or mobile apps 8–16 weeks depending on complexity. We agree a timeline up front and demo progress to you every week." },
  { q: "Do you work with small businesses or only large companies?", a: "Both. We work with sole traders, local trades and startups right through to regulated enterprises. Our packages scale to fit your budget — and we'll tell you honestly if something isn't worth spending money on yet." },
  { q: "How do you handle GDPR and data protection?", a: "All data is hosted in UK or EU cloud regions, processed in line with UK GDPR, and we'll supply a data processing agreement for your records. Security and privacy reviews are part of every build, not an optional extra." },
  { q: "Can you take over or improve my existing website or system?", a: "Yes. We regularly inherit existing WordPress, Shopify, .NET and PHP projects — we'll audit what you have for free, fix what's broken and modernise it gradually without disrupting your business." },
  { q: "What happens after my project launches?", a: "You're never left on your own. Every project includes a 30-day warranty, and our optional support plans cover hosting, security updates, content changes and a UK helpdesk that answers fast." },
];

/* ── Page ────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ── HERO ── */}
        <div className="hero-bg pt-32 md:pt-40 pb-20 md:pb-28">
          <Reveal className="max-w-7xl mx-auto px-5 md:px-8 text-center">
            <Badge variant="secondary" className="mb-8 rounded-full px-4 py-1.5 text-[0.8rem] font-semibold gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" aria-hidden />
              The digital partner for every UK business
            </Badge>
            <h1 className="text-[2.6rem] leading-[1.08] md:text-6xl lg:text-7xl font-bold mb-8 max-w-4xl mx-auto">
              Websites, Apps & AI That
              <br />
              <span className="gradient-text">Win You Clients.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Oceannova builds beautiful websites, mobile apps, online stores and
              AI automation for British businesses of every size — from local
              trades to national enterprises.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
              <a
                href="#contact"
                className="btn-ocean flex items-center justify-center gap-2 rounded-full px-9 py-4 font-semibold text-base"
              >
                Get a Free Consultation <ArrowRight size={17} aria-hidden />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 border-2 border-border hover:border-primary/40 bg-card rounded-full px-9 py-4 font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                Explore Our Services
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {stats.map((m) => (
                <div key={m.label} className="bg-glass rounded-2xl px-5 py-6 hover-lift text-center">
                  <p className="text-3xl md:text-4xl font-bold font-heading gradient-text">{m.val}</p>
                  <p className="text-sm text-muted-foreground mt-2">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── SERVICES ── */}
        <section id="services" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <Reveal className="text-center mb-16">
              <div>
                <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1.5 font-semibold">
                  Everything Under One Roof
                </Badge>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] font-bold gradient-underline">
                Our Services
              </h2>
              <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
                One trusted partner for every digital need your business will ever
                have — no juggling multiple agencies.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="bg-glass rounded-2xl p-7 md:p-8 hover-lift h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-5">
                      <s.icon size={24} aria-hidden />
                    </div>
                    <h3 className="font-bold mb-3 text-lg">{s.title}</h3>
                    <p className="text-muted-foreground text-[0.94rem] leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US (dark) ── */}
        <section id="why-us" className="dark-section py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <Reveal className="text-center mb-16">
              <Badge className="mb-5 rounded-full px-4 py-1.5 font-semibold bg-teal-400/15 text-teal-200 border-teal-300/25">
                Why Oceannova
              </Badge>
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-white">
                The Partner UK Businesses{" "}
                <span className="text-teal-300">Recommend</span>
              </h2>
              <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
                We measure our success by one thing only — how many new customers
                and how much time we win for yours.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {whyUs.map((c, i) => (
                <Reveal key={c.title} delay={Math.min(i * 0.05, 0.25)}>
                  <div className="rounded-2xl p-7 border border-white/10 bg-white/[0.06] hover-lift h-full">
                    <div className="flex items-center gap-2.5 mb-3">
                      <CheckCircle2 size={18} className="text-teal-300 shrink-0" aria-hidden />
                      <h3 className="font-bold text-white text-[1.05rem]">{c.title}</h3>
                    </div>
                    <p className="text-white/60 text-[0.94rem] leading-relaxed">{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTORS ── */}
        <section id="sectors" className="py-24 md:py-32 bg-gradient-to-b from-secondary/40 to-background">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <Reveal className="text-center mb-16">
              <div>
                <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1.5 font-semibold">
                  Industry Expertise
                </Badge>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] font-bold gradient-underline">
                Every Business. Every Sector.
              </h2>
              <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
                Whatever you do, we&apos;ve built for businesses like yours.
                If your sector isn&apos;t listed — it&apos;s still covered.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sectors.map((s, i) => (
                <Reveal key={s.title} delay={Math.min(i * 0.02, 0.25)}>
                  <div className="bg-glass rounded-xl px-4 py-4 flex items-center gap-3.5 hover-lift h-full">
                    <div className="w-10 h-10 rounded-lg bg-accent text-primary flex items-center justify-center shrink-0">
                      <s.icon size={19} aria-hidden />
                    </div>
                    <h4 className="font-semibold text-[0.92rem] leading-snug min-w-0 break-words">{s.title}</h4>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section id="process" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <Reveal className="text-center mb-16">
              <div>
                <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1.5 font-semibold">
                  How We Work
                </Badge>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] font-bold gradient-underline">
                From Idea to Launch
              </h2>
              <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
                A simple, transparent journey — you&apos;ll always know exactly
                where your project stands.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {process.map((s, i) => (
                <Reveal key={s.title} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="bg-glass rounded-2xl p-6 hover-lift relative overflow-hidden h-full">
                    <span className="absolute -top-2 right-3 text-6xl font-black font-heading text-primary/[0.07] select-none" aria-hidden>
                      {s.step}
                    </span>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                      Step {s.step}
                    </p>
                    <h4 className="font-bold mb-2">{s.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="px-5 md:px-8 pb-24 md:pb-32">
          <Reveal className="max-w-7xl mx-auto">
            <div className="dark-section rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-30"
                style={{ background: "radial-gradient(ellipse 60% 80% at 70% 20%, rgba(15,163,163,0.4) 0%, transparent 60%)" }}
                aria-hidden
              />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Grow Your Business?
                </h2>
                <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  Book a free 30-minute consultation. No jargon, no pressure —
                  just honest advice on what would move the needle for you.
                </p>
                <a
                  href="#contact"
                  className="btn-ocean inline-flex items-center gap-2 rounded-full px-10 py-4 font-semibold text-base"
                >
                  Book Your Free Call <ArrowRight size={17} aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-24 md:py-32 bg-gradient-to-b from-secondary/40 to-background">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <Reveal className="text-center mb-14">
              <div>
                <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1.5 font-semibold">
                  Good to Know
                </Badge>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] font-bold gradient-underline">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <Reveal>
              <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
                {faqs.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-glass rounded-xl px-5 border-none"
                  >
                    <AccordionTrigger className="font-semibold text-left text-[0.98rem] py-5 hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-[0.94rem] leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <Reveal className="text-center mb-16">
              <div>
                <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1.5 font-semibold">
                  Get in Touch
                </Badge>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] font-bold gradient-underline">
                Start Your Project Today
              </h2>
              <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
                Tell us what you need — we reply to every enquiry within one
                working day.
              </p>
            </Reveal>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <Reveal className="lg:col-span-2 space-y-5">
                {/* Phone contacts */}
                {[
                  { name: "Oceannova Enquiry", number: "+44 7859 210060", href: "tel:+447859210060" },
                  { name: "Oceannova Support", number: "+44 7833 444641", href: "tel:+447833444641" },
                  { name: "Oceannova Sales", number: "+44 7713 169882", href: "tel:+447713169882" },
                ].map((c) => (
                  <a key={c.name} href={c.href} className="block">
                    <div className="bg-glass rounded-2xl p-6 flex items-center gap-4 hover-lift">
                      <div className="w-11 h-11 rounded-xl bg-accent text-primary flex items-center justify-center shrink-0">
                        <Phone size={21} aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">{c.name}</p>
                        <p className="font-semibold">{c.number}</p>
                      </div>
                    </div>
                  </a>
                ))}

                {/* Other contact details */}
                {[
                  { icon: Mail, title: "Email us", line: "hello@oceannova.co.uk", href: "mailto:hello@oceannova.co.uk" },
                  { icon: MessageCircle, title: "WhatsApp", line: "Chat with us instantly", href: "https://wa.me/447859210060" },
                  { icon: MapPin, title: "Based in", line: "London, United Kingdom" },
                ].map((c) => {
                  const inner = (
                    <div className="bg-glass rounded-2xl p-6 flex items-center gap-4 hover-lift">
                      <div className="w-11 h-11 rounded-xl bg-accent text-primary flex items-center justify-center shrink-0">
                        <c.icon size={21} aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">{c.title}</p>
                        <p className="font-semibold">{c.line}</p>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.title} href={c.href} className="block" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div key={c.title}>{inner}</div>
                  );
                })}
              </Reveal>
              <Reveal className="lg:col-span-3" delay={0.1}>
                <div className="bg-glass rounded-2xl p-7 md:p-10">
                  <h3 className="text-xl font-bold mb-7">Request a Free Quote</h3>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="dark-section py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
              <div>
                <Image
                  src="/logo.png"
                  alt="Oceannova"
                  height={48}
                  width={169}
                  className="brightness-0 invert h-12 w-auto mb-5"
                />
                <p className="text-sm text-white/55 leading-relaxed">
                  The digital partner for every UK business — websites, apps,
                  AI and support, all under one roof.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
                <ul className="space-y-3 text-sm text-white/55">
                  {["Web Design & Development", "Mobile Apps", "E-Commerce", "AI & Automation", "IT Support", "Digital Marketing"].map((s) => (
                    <li key={s}>
                      <a href="#services" className="hover:text-teal-300 transition-colors">{s}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
                <ul className="space-y-3 text-sm text-white/55">
                  <li><a href="#why-us" className="hover:text-teal-300 transition-colors">Why Oceannova</a></li>
                  <li><a href="#sectors" className="hover:text-teal-300 transition-colors">Sectors We Serve</a></li>
                  <li><a href="#process" className="hover:text-teal-300 transition-colors">How We Work</a></li>
                  <li><a href="#faq" className="hover:text-teal-300 transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="hover:text-teal-300 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
                <ul className="space-y-3 text-sm text-white/55">
                  <li>
                    <a href="tel:+447859210060" className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                      <Phone size={14} aria-hidden /> +44 7859 210060
                    </a>
                  </li>
                  <li>
                    <a href="tel:+447833444641" className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                      <Phone size={14} aria-hidden /> +44 7833 444641
                    </a>
                  </li>
                  <li>
                    <a href="tel:+447713169882" className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                      <Phone size={14} aria-hidden /> +44 7713 169882
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@oceannova.co.uk" className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                      <Mail size={14} aria-hidden /> hello@oceannova.co.uk
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={14} aria-hidden /> London, United Kingdom
                  </li>
                </ul>
              </div>
            </div>
            <p className="pt-8 text-center text-xs text-white/40">
              © {new Date().getFullYear()} Oceannova Ltd. Registered in England &amp; Wales. All rights reserved.
            </p>
          </div>
        </footer>
      </main>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/447859210060"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl hover:-translate-y-1 transition-all z-50"
      >
        <MessageCircle size={22} aria-hidden />
      </a>
    </>
  );
}
