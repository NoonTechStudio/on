"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Phone, Mail, CheckCircle, Menu, X, ArrowRight,
  CreditCard, Gavel, ShoppingBag, Construction, HeartPulse, Coffee,
  MessageCircle, Shield, Cloud, Bot, Store, Wrench, Layers, ChevronRight
} from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-primary" });

interface FormValues {
  fullName: string;
  corporateEmail: string;
  phone: string;
  companyName: string;
  industry: string;
  budget: string;
  projectScope: string;
  optIn: boolean;
}

function Section({ id, children, className = "", style }: { id: string; children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <section id={id} ref={ref} className={className} style={style}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

const services = [
  { icon: <Bot size={22} />, title: "AI‑First Automation", desc: "Production‑ready LLM pipelines, RAG frameworks for internal wikis, autonomous Xero/Sage integrations.", large: true },
  { icon: <Store size={22} />, title: "Headless Commerce", desc: "Stripe Connect, Shopify Hydrogen, bespoke checkout with Royal Mail API." },
  { icon: <Cloud size={22} />, title: "UK Sovereign Cloud", desc: "Landing Zones, Well‑Architected reviews, FinOps optimisation." },
  { icon: <Shield size={22} />, title: "Zero‑Trust Resilience", desc: "Pen testing, ISO27001 support, NHS DSPT alignment." },
  { icon: <Wrench size={22} />, title: "AppSheet & Internal Tools", desc: "Logistics, field management, CRM in under 2 weeks." },
  { icon: <Mail size={22} />, title: "Google Workspace Elite", desc: "Migrate from O365, Vault, MDM, 24/7 UK support." },
  { icon: <Layers size={22} />, title: "Bespoke SaaS Engineering", desc: "Full product lifecycle from MVP to Series‑A scale." },
];

const sectors = [
  { icon: <CreditCard size={20} />, title: "Financial Services & Fintech", desc: "FCA handbook compliance, Open Banking APIs, PCI‑DSS Level 1 hosting." },
  { icon: <Gavel size={20} />, title: "Legal & Professional Services", desc: "SRA data privacy locks, secure client portals, time‑recording automation." },
  { icon: <ShoppingBag size={20} />, title: "Retail & E‑commerce", desc: "Multi‑channel inventory sync, VAT engine, headless Shopify." },
  { icon: <Construction size={20} />, title: "Construction & Logistics", desc: "Remote asset tracking, Jira for construction, drone telemetry pipelines." },
  { icon: <HeartPulse size={20} />, title: "Healthcare & MedTech", desc: "NHS Digital alignment, scheduling engines, DTAC compliance." },
  { icon: <Coffee size={20} />, title: "Hospitality & Leisure", desc: "Custom POS, dynamic pricing, guest Wi‑Fi analytics." },
];

const faqs = [
  { q: "How do you handle GDPR and UK data sovereignty?", a: "All data stays within UK‑based cloud regions with ISO27001‑aligned controls." },
  { q: "Can you maintain my existing .NET/PHP app?", a: "Yes – we provide managed support and gradual migration paths." },
  { q: "What is your SLA for critical incident response?", a: "15 minutes for P1 incidents, 1 hour for P2." },
  { q: "Do you offer retainer‑based DevOps?", a: "Our Managed Support plans include 24/7 retainer DevOps services." },
];

export default function Home() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => { console.log(data); reset(); };
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <html className={inter.variable} lang="en">
      <head>
        <title>Oceannova – Elite UK Software & AI Agency</title>
        <meta name="description" content="Premium software engineering, AI agents, and ISO27001 cloud infrastructure for UK enterprises." />
      </head>
      <body className="font-primary antialiased">

        {/* ── NAV ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-white/60 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <Image src="/logo.svg" alt="Oceannova" height={36} width={160} className="h-9 w-auto" />

            <div className="hidden md:flex gap-7 text-sm font-medium text-slate-600">
              {["Services","Solutions","Sectors","Process","Insights","Contact"].map(s => (
                <Link key={s} href={`#${s.toLowerCase()}`} className="hover:text-indigo-600 transition-colors">{s}</Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="tel:+442012345678" className="hidden sm:flex items-center gap-1.5 text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                <Phone size={14} /><span>+44 20 1234 5678</span>
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-5 py-2 text-sm font-semibold transition-colors shadow-sm"
              >
                Book Discovery Call
              </button>
              <button className="md:hidden p-1 text-slate-600" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)} />
        )}
        <aside className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-8 shadow-2xl transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <Image src="/logo.svg" alt="Oceannova" height={32} width={140} className="mb-8" />
          <nav className="flex flex-col gap-5 text-base font-medium text-slate-700">
            {["Services","Solutions","Sectors","Process","Insights","Contact"].map(s => (
              <Link key={s} href={`#${s.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <ChevronRight size={14} className="text-indigo-400" />{s}
              </Link>
            ))}
          </nav>
        </aside>

        <main>

          {/* ── HERO ── */}
          <div className="hero-bg min-h-screen flex flex-col justify-center pt-20">
            <Section id="hero" className="max-w-7xl mx-auto px-6 py-24 text-center">
              <div>
                <span className="badge mb-6 inline-flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  Trusted by 40+ UK Enterprises
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto">
                  Future‑Proof Your<br />
                  <span className="gradient-text">UK Enterprise.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Elite Software, AI Agents & ISO27001 Cloud Infrastructure.<br />
                  Oceannova builds scalable fintech‑grade platforms for British businesses.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-3.5 font-semibold transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5"
                  >
                    Schedule Consultation <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    className="flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-indigo-400 bg-white rounded-full px-8 py-3.5 font-semibold text-slate-700 hover:text-indigo-600 transition-all"
                  >
                    Our Capabilities
                  </button>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { val: "£42M+", label: "Client Enterprise Value" },
                    { val: "1.2B+", label: "API Requests / Month" },
                    { val: "100%", label: "UK Sovereign Compliance" },
                    { val: "0%", label: "Migration Downtime" },
                  ].map(m => (
                    <div key={m.val} className="bg-glass rounded-2xl p-5 hover-lift text-center">
                      <p className="text-3xl font-bold text-slate-900">{m.val}</p>
                      <p className="text-sm text-slate-500 mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Section>
          </div>

          {/* ── SOLUTIONS (dark) ── */}
          <Section id="solutions" className="dark-section py-24">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge mb-4 inline-flex" style={{ background: "rgba(99,102,241,0.2)", borderColor: "rgba(99,102,241,0.35)", color: "#a5b4fc" }}>Legacy Modernisation</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Sluggish legacy software is costing you <span className="text-indigo-400">40% market share.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">Modernise .NET, PHP, or Angular stacks with next‑generation architecture — without disruption.</p>
              </div>
              <div className="grid gap-4">
                {[
                  { title: "Bespoke Codebase Modernisation", desc: "Migrate monolithic apps to Next.js + micro‑frontends. Radical SEO gains and developer velocity." },
                  { title: "Proactive Managed Support", desc: "SOC2‑aligned monitoring, dependency vulnerability patching, and zero‑downtime deployment pipelines." },
                ].map(c => (
                  <div key={c.title} className="rounded-2xl p-6 border border-white/10 bg-white/5 hover-lift">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={16} className="text-indigo-400 shrink-0" />
                      <h3 className="font-semibold text-white">{c.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed pl-6">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* ── SERVICES ── */}
          <Section id="services" className="py-24 max-w-7xl mx-auto px-6">
            <div>
              <div className="text-center mb-14">
                <span className="badge mb-4">7-Pillar Framework</span>
                <h2 className="text-4xl font-bold text-slate-900 gradient-underline inline-block">Our Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {services.map((s, i) => (
                  <div
                    key={s.title}
                    className={`bg-glass rounded-2xl p-7 hover-lift ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                      {s.icon}
                    </div>
                    <h3 className={`font-bold text-slate-900 mb-2 ${i === 0 ? "text-xl" : ""}`}>{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* ── SECTORS ── */}
          <Section id="sectors" className="py-24" style={{ background: "linear-gradient(180deg, #f0f4ff 0%, #f8faff 100%)" }}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-14">
                <span className="badge mb-4">Industry Expertise</span>
                <h2 className="text-4xl font-bold text-slate-900 gradient-underline inline-block">Sectors We Empower</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {sectors.map(s => (
                  <div key={s.title} className="bg-glass rounded-2xl p-6 flex items-start gap-4 hover-lift">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-sm">{s.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* ── PROCESS ── */}
          <Section id="process" className="py-24 max-w-7xl mx-auto px-6">
            <div>
              <div className="text-center mb-14">
                <span className="badge mb-4">How We Work</span>
                <h2 className="text-4xl font-bold text-slate-900 gradient-underline inline-block">6‑Week Accelerator</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  { week: "Week 1", title: "Discovery & Audit", desc: "Codebase & cloud‑cost assessment." },
                  { week: "Week 2", title: "Architecture Blueprint", desc: "HLD, security controls, tech‑stack sign‑off." },
                  { week: "Weeks 3–5", title: "Agile Sprint", desc: "Bi‑weekly stakeholder demos." },
                  { week: "Week 6", title: "Hardening & Launch", desc: "Pen test, load test, go‑live + 30‑day warranty." },
                ].map((s, i) => (
                  <div key={s.title} className="bg-glass rounded-2xl p-6 hover-lift relative overflow-hidden">
                    <span className="absolute top-4 right-4 text-5xl font-black text-indigo-50 select-none">{i + 1}</span>
                    <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-2">{s.week}</p>
                    <h4 className="font-bold text-slate-900 mb-1">{s.title}</h4>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* ── INSIGHTS ── */}
          <Section id="insights" className="py-24" style={{ background: "linear-gradient(180deg, #f8faff 0%, #f0f4ff 100%)" }}>
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
              <div className="bg-glass rounded-2xl p-8 hover-lift">
                <span className="badge mb-4">Latest</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The UK Tech Brief</h3>
                <p className="text-slate-500 text-sm mb-4">New: AI Procurement Framework for Public Sector — navigating the emerging compliance requirements for enterprise AI adoption.</p>
                <button className="text-indigo-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Read more <ArrowRight size={14} />
                </button>
              </div>
              <div className="bg-glass rounded-2xl p-8 hover-lift">
                <span className="badge mb-4">Certifications</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Compliance & Trust</h3>
                <div className="flex flex-wrap gap-2">
                  {["ISO27001", "Cyber Essentials Plus", "SOC2 Type II", "Google Cloud Partner", "PCI-DSS"].map(c => (
                    <span key={c} className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 rounded-full text-xs font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* ── CONTACT ── */}
          <Section id="contact" className="py-24 max-w-7xl mx-auto px-6">
            <div>
              <div className="text-center mb-14">
                <span className="badge mb-4">Get In Touch</span>
                <h2 className="text-4xl font-bold text-slate-900 gradient-underline inline-block">Start Your Project</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* FAQ */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 mb-5">Frequently Asked Questions</h3>
                  {faqs.map((item, i) => (
                    <details key={i} className="bg-glass rounded-xl overflow-hidden hover-lift" open={i === 0}>
                      <summary className="font-semibold text-slate-800 cursor-pointer px-5 py-4 flex items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                        {item.q}
                        <ChevronRight size={16} className="text-indigo-400 shrink-0 details-chevron" />
                      </summary>
                      <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>

                {/* Form */}
                <div className="bg-glass rounded-2xl p-8 hover-lift">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Enquire Today</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input {...register("fullName", { required: true })} placeholder="Full Name" className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm w-full bg-white/70" />
                      <input {...register("corporateEmail", { required: true })} type="email" placeholder="Corporate Email" className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm w-full bg-white/70" />
                    </div>
                    <input {...register("phone")} placeholder="Phone" className="border border-slate-200 rounded-lg w-full px-3.5 py-2.5 text-sm bg-white/70" />
                    <input {...register("companyName")} placeholder="Company Name" className="border border-slate-200 rounded-lg w-full px-3.5 py-2.5 text-sm bg-white/70" />
                    <select {...register("industry")} className="border border-slate-200 rounded-lg w-full px-3.5 py-2.5 text-sm bg-white/70 text-slate-600">
                      <option value="">Select Industry</option>
                      <option>Finance</option><option>Legal</option><option>Retail</option>
                      <option>Healthcare</option><option>Logistics</option>
                    </select>
                    <select {...register("budget")} className="border border-slate-200 rounded-lg w-full px-3.5 py-2.5 text-sm bg-white/70 text-slate-600">
                      <option value="">Select Budget Range</option>
                      <option>£10k–£25k</option><option>£25k–£50k</option><option>£50k+</option>
                    </select>
                    <textarea {...register("projectScope")} placeholder="Project Scope" rows={3} className="border border-slate-200 rounded-lg w-full px-3.5 py-2.5 text-sm bg-white/70 resize-none" />
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input type="checkbox" {...register("optIn")} className="mt-0.5 accent-indigo-600" />
                      <span className="text-xs text-slate-500">Opt‑in to receive the Oceannova UK Tech Strategy Whitepaper</span>
                    </label>
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-3 font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-100">
                      Submit Enquiry <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Section>

          {/* ── FOOTER ── */}
          <footer className="dark-section py-14">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
                <div>
                  <Image src="/logo.svg" alt="Oceannova" height={32} width={148} className="brightness-0 invert mb-3" />
                  <p className="text-sm text-slate-400 leading-relaxed">Registered in England & Wales.<br />Company No. 12345678.<br />VAT: GB123456789.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3 text-sm">Services</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {["AI‑First Automation","Headless Commerce","UK Sovereign Cloud","Zero‑Trust Resilience"].map(s => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3 text-sm">Sectors</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {["Financial Services","Legal","Retail","Healthcare"].map(s => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3 text-sm">Contact</h4>
                  <p className="text-sm text-slate-400 flex items-center gap-1.5 mb-1"><Phone size={13} /> +44 20 1234 5678</p>
                  <p className="text-sm text-slate-400 flex items-center gap-1.5"><Mail size={13} /> hello@oceannova.co.uk</p>
                  <h4 className="font-semibold text-white mt-5 mb-3 text-sm">Legal</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>Modern Slavery Act</li>
                    <li>Carbon Reduction Plan</li>
                  </ul>
                </div>
              </div>
              <p className="pt-6 text-center text-xs text-slate-500">© 2025 Oceannova Ltd. All rights reserved.</p>
            </div>
          </footer>

        </main>

        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/442012345678"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl hover:-translate-y-1 transition-all z-50"
        >
          <MessageCircle size={22} />
        </a>

      </body>
    </html>
  );
}
