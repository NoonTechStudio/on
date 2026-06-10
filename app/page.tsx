"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm, SubmitHandler } from "react-hook-form";
import { Phone, Mail, CheckCircle, Menu, X, MessageSquare, ArrowRight, CreditCard, Gavel, ShoppingBag, Construction, HeartPulse, Coffee, MessageCircle } from "lucide-react";

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

export default function Home() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form submission:", data);
    reset();
  };

  // Mobile menu state
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Helper for animated sections
  const Section = ({ id, children }: { id: string; children: React.ReactNode }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
      <section id={id} ref={ref} className="my-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </section>
    );
  };

  return (
    <html className={inter.variable} lang="en">
      <head>
        <title>Oceannova – Elite UK Software & AI Agency</title>
        <meta name="description" content="Premium software engineering, AI agents, and ISO27001 cloud infrastructure for UK enterprises." />
      </head>
      <body className="bg-white font-primary">
        {/* Sticky Glass Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-glass backdrop-blur-md border border-slate-200/80 rounded-b-2xl shadow-sm py-4 px-8 flex items-center justify-between hover-scale">
          <div className="flex items-center gap-4">
            <Image src="/Logo.png" alt="Oceannova logo" height={40} width={120} className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#hero" className="hover:text-slate-600">Hero</Link>
            <Link href="#services" className="hover:text-slate-600">Services</Link>
            <Link href="#solutions" className="hover:text-slate-600">Solutions</Link>
            <Link href="#sectors" className="hover:text-slate-600">Sectors</Link>
            <Link href="#insights" className="hover:text-slate-600">Insights</Link>
            <Link href="#contact" className="hover:text-slate-600">Contact</Link>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden sm:inline text-slate-700">UK: +44 20 1234 5678</span>
            <button className="bg-black text-white rounded-full px-4 py-2 text-sm hover:scale-105 transition" onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' })}>Book Discovery Call</button>
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={toggleMenu} />
        )}
        <aside className={`fixed top-0 left-0 h-full w-64 bg-glass transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 p-6`}>
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <Link href="#hero" onClick={toggleMenu}>Hero</Link>
            <Link href="#services" onClick={toggleMenu}>Services</Link>
            <Link href="#solutions" onClick={toggleMenu}>Solutions</Link>
            <Link href="#sectors" onClick={toggleMenu}>Sectors</Link>
            <Link href="#insights" onClick={toggleMenu}>Insights</Link>
            <Link href="#contact" onClick={toggleMenu}>Contact</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="pt-24 max-w-7xl mx-auto px-6">
          {/* HERO */}
          <Section id="hero">
            <div className="text-center py-16">
              <h1 className="text-5xl font-bold leading-tight text-slate-900 mb-6">Future‑Proof Your UK Enterprise. Elite Software, AI Agents & ISO27001 Cloud Infrastructure.</h1>
              <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
                Oceannova builds scalable fintech‑grade platforms, legacy modernisation, and 24/7 managed DevOps for British businesses.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <button className="bg-black text-white rounded-full px-6 py-3 font-medium hover:scale-105 transition">
                  Schedule Consultation
                </button>
                <button className="border border-black rounded-full px-6 py-3 font-medium hover:bg-black hover:text-white transition">
                  Our Capabilities
                </button>
              </div>
            </div>
            {/* Live Metrics Hub */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-glass p-4 rounded-2xl hover-scale">
                <p className="text-2xl font-semibold">£42M+</p>
                <p className="text-sm text-slate-600">Client Enterprise Value Unlocked</p>
              </div>
              <div className="bg-glass p-4 rounded-2xl hover-scale">
                <p className="text-2xl font-semibold">1.2B+</p>
                <p className="text-sm text-slate-600">API Requests Secured/Month</p>
              </div>
              <div className="bg-glass p-4 rounded-2xl hover-scale">
                <p className="text-2xl font-semibold">100%</p>
                <p className="text-sm text-slate-600">UK Sovereign Data Compliance</p>
              </div>
              <div className="bg-glass p-4 rounded-2xl hover-scale">
                <p className="text-2xl font-semibold">0%</p>
                <p className="text-sm text-slate-600">Legacy Migration Downtime Guarantee</p>
              </div>
            </div>
          </Section>

          {/* LEGACY TO MODERN PROMISE */}
          <Section id="solutions">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold mb-4">Sluggish Legacy Software is costing you 40% market share.</h2>
                <p className="text-slate-700">Modernise .NET, PHP, or Angular stacks with next‑generation architecture.</p>
              </div>
              <div className="grid gap-6">
                <div className="bg-glass p-6 rounded-2xl hover-scale">
                  <h3 className="font-semibold mb-2">Bespoke Codebase Modernisation</h3>
                  <p className="text-slate-600">Migrate monolithic apps to Next.js + micro‑frontends. Radical SEO gains and developer velocity.</p>
                </div>
                <div className="bg-glass p-6 rounded-2xl hover-scale">
                  <h3 className="font-semibold mb-2">Proactive Managed Support</h3>
                  <p className="text-slate-600">SOC2‑aligned monitoring, dependency vulnerability patching, and zero‑downtime deployment pipelines.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* SERVICE MATRIX */}
          <Section id="services">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-underline">Our 7‑Pillar Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Large Box */}
              <div className="col-span-2 row-span-2 bg-glass p-8 rounded-2xl hover-scale">
                <h3 className="text-2xl font-semibold mb-3">AI‑First Automation</h3>
                <p className="text-slate-600">Production‑ready LLM pipelines, RAG frameworks for internal wikis, autonomous Xero/Sage integrations.</p>
              </div>
              {/* Small Boxes */}
              <div className="bg-glass p-6 rounded-2xl hover-scale">
                <h4 className="font-medium">Headless & Unified Commerce</h4>
                <p className="text-slate-600 text-sm">Stripe Connect, Shopify Hydrogen, bespoke checkout with Royal Mail API.</p>
              </div>
              <div className="bg-glass p-6 rounded-2xl hover-scale">
                <h4 className="font-medium">UK Sovereign Cloud</h4>
                <p className="text-slate-600 text-sm">Landing Zones, Well‑Architected reviews, FinOps optimisation.</p>
              </div>
              <div className="bg-glass p-6 rounded-2xl hover-scale">
                <h4 className="font-medium">Zero‑Trust Cyber Resilience</h4>
                <p className="text-slate-600 text-sm">Pen testing, ISO27001 support, NHS DSPT alignment.</p>
              </div>
              <div className="bg-glass p-6 rounded-2xl hover-scale">
                <h4 className="font-medium">AppSheet & Internal Tools</h4>
                <p className="text-slate-600 text-sm">Logistics, field management, CRM in under 2 weeks.</p>
              </div>
              <div className="bg-glass p-6 rounded-2xl hover-scale">
                <h4 className="font-medium">Google Workspace Elite Reseller</h4>
                <p className="text-slate-600 text-sm">Migrate from O365, Vault, MDM, 24/7 UK support.</p>
              </div>
              <div className="bg-glass p-6 rounded-2xl hover-scale">
                <h4 className="font-medium">Bespoke SaaS Engineering</h4>
                <p className="text-slate-600 text-sm">Full product lifecycle from MVP to Series‑A scale.</p>
              </div>
            </div>
          </Section>

          {/* SECTOR MATRIX */}
          <Section id="sectors">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-underline">Sectors We Empower</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-glass p-4 rounded-2xl flex items-start gap-3 hover-scale">
                <CreditCard className="stroke-2" size={24} />
                <div>
                  <h4 className="font-medium">Financial Services & Fintech</h4>
                  <p className="text-sm text-slate-600">FCA handbook compliance, Open Banking APIs, PCI‑DSS Level 1 hosting.</p>
                </div>
              </div>
              <div className="bg-glass p-4 rounded-2xl flex items-start gap-3 hover-scale">
                <Gavel className="stroke-2" size={24} />
                <div>
                  <h4 className="font-medium">Legal & Professional Services</h4>
                  <p className="text-sm text-slate-600">SRA data privacy locks, secure client portals, time‑recording automation.</p>
                </div>
              </div>
              <div className="bg-glass p-4 rounded-2xl flex items-start gap-3 hover-scale">
                <ShoppingBag className="stroke-2" size={24} />
                <div>
                  <h4 className="font-medium">Retail & E‑commerce</h4>
                  <p className="text-sm text-slate-600">Multi‑channel inventory sync, VAT engine, headless Shopify.</p>
                </div>
              </div>
              <div className="bg-glass p-4 rounded-2xl flex items-start gap-3 hover-scale">
                <Construction className="stroke-2" size={24} />
                <div>
                  <h4 className="font-medium">Construction, Property & Logistics</h4>
                  <p className="text-sm text-slate-600">Remote asset tracking, Jira for construction, drone telemetry pipelines.</p>
                </div>
              </div>
              <div className="bg-glass p-4 rounded-2xl flex items-start gap-3 hover-scale">
                <HeartPulse className="stroke-2" size={24} />
                <div>
                  <h4 className="font-medium">Healthcare & MedTech</h4>
                  <p className="text-sm text-slate-600">NHS Digital alignment, scheduling engines, DTAC compliance.</p>
                </div>
              </div>
              <div className="bg-glass p-4 rounded-2xl flex items-start gap-3 hover-scale">
                <Coffee className="stroke-2" size={24} />
                <div>
                  <h4 className="font-medium">Hospitality & Leisure</h4>
                  <p className="text-sm text-slate-600">Custom POS, dynamic pricing, guest Wi‑Fi analytics.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* ACCELERATOR TIMELINE */}
          <Section id="process">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-underline">6‑Week Accelerator</h2>
            <div className="overflow-x-auto">
              <ul className="flex md:space-x-8 space-x-4 md:overflow-visible overflow-x-scroll whitespace-nowrap py-4">
                <li className="bg-glass p-4 rounded-xl min-w-[250px] hover-scale">
                  <h4 className="font-semibold">Week 1 – Discovery & Audit</h4>
                  <p className="text-sm">Codebase & cloud‑cost assessment.</p>
                </li>
                <li className="bg-glass p-4 rounded-xl min-w-[250px] hover-scale">
                  <h4 className="font-semibold">Week 2 – Architecture Blueprint</h4>
                  <p className="text-sm">HLD, security controls, tech‑stack sign‑off.</p>
                </li>
                <li className="bg-glass p-4 rounded-xl min-w-[250px] hover-scale">
                  <h4 className="font-semibold">Weeks 3‑5 – Agile Sprint</h4>
                  <p className="text-sm">Bi‑weekly stakeholder demos.</p>
                </li>
                <li className="bg-glass p-4 rounded-xl min-w-[250px] hover-scale">
                  <h4 className="font-semibold">Week 6 – Hardening & Launch</h4>
                  <p className="text-sm">Pen test, load test, go‑live + 30‑day warranty.</p>
                </li>
              </ul>
            </div>
          </Section>

          {/* INSIGHTS HUB */}
          <Section id="insights">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-glass p-6 rounded-2xl hover-scale">
                <h3 className="font-bold mb-3">The UK Tech Brief</h3>
                <p className="text-sm text-slate-600">New: AI Procurement Framework for Public Sector</p>
              </div>
              <div className="bg-glass p-6 rounded-2xl hover-scale flex flex-col gap-4">
                <h3 className="font-bold">Compliance & Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded">ISO27001</span>
                  <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded">Cyber Essentials Plus</span>
                  <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded">SOC2 Type II</span>
                  <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded">Google Cloud Partner</span>
                </div>
              </div>
            </div>
          </Section>

          {/* FAQ + CONTACT */}
          <Section id="contact">
            <div className="grid md:grid-cols-2 gap-8">
              {/* FAQ Accordion */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
                {[{ q: "How do you handle GDPR and UK data sovereignty?", a: "All data stays within UK‑based cloud regions with ISO27001‑aligned controls." },
                  { q: "Can you maintain my existing .NET/PHP app?", a: "Yes – we provide managed support and gradual migration paths." },
                  { q: "What is your SLA for critical incident response?", a: "15 minutes for P1 incidents, 1 hour for P2." },
                  { q: "Do you offer retainer‑based DevOps?", a: "Our Managed Support plans include 24/7 retainer DevOps services." }].map((item, i) => (
                  <details key={i} className="bg-glass p-4 rounded-xl hover-scale" open={i===0}>
                    <summary className="font-medium cursor-pointer">{item.q}</summary>
                    <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                  </details>
                ))}
              </div>
              {/* Contact Form */}
              <div className="bg-glass p-8 rounded-2xl hover-scale">
                <h3 className="text-2xl font-bold mb-4">Enquire Today</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input {...register("fullName", { required: true })} placeholder="Full Name" className="border rounded px-3 py-2" />
                    <input {...register("corporateEmail", { required: true })} type="email" placeholder="Corporate Email" className="border rounded px-3 py-2" />
                  </div>
                  <input {...register("phone")} placeholder="Phone" className="border rounded w-full px-3 py-2" />
                  <input {...register("companyName")} placeholder="Company Name" className="border rounded w-full px-3 py-2" />
                  <select {...register("industry")} className="border rounded w-full px-3 py-2">
                    <option value="">Select Industry</option>
                    <option>Finance</option>
                    <option>Legal</option>
                    <option>Retail</option>
                    <option>Healthcare</option>
                    <option>Logistics</option>
                  </select>
                  <select {...register("budget")} className="border rounded w-full px-3 py-2">
                    <option value="">Select Budget Range</option>
                    <option>£10k‑£25k</option>
                    <option>£25k‑£50k</option>
                    <option>£50k+</option>
                  </select>
                  <textarea {...register("projectScope")} placeholder="Project Scope" rows={3} className="border rounded w-full px-3 py-2" />
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" {...register("optIn")} />
                    <span className="text-sm">Opt‑in to receive the Oceannova UK Tech Strategy Whitepaper</span>
                  </label>
                  <button type="submit" className="bg-black text-white rounded-full px-6 py-2 font-medium hover:scale-105 transition">
                    Submit Enquiry →
                  </button>
                </form>
              </div>
            </div>
          </Section>

          {/* FOOTER */}
          <footer className="bg-[#F8FAFC] py-12 mt-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Image src="/Logo.png" alt="Oceannova logo" height={40} width={120} />
                <p className="mt-2 text-sm text-slate-600">© 2025 Oceannova. Registered in England & Wales. Company No. 12345678. VAT: GB123456789.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Services</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>AI‑First Automation</li>
                  <li>Headless Commerce</li>
                  <li>UK Sovereign Cloud</li>
                  <li>Zero‑Trust Resilience</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Sectors</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>Financial Services</li>
                  <li>Legal</li>
                  <li>Retail</li>
                  <li>Healthcare</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Legal</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>Modern Slavery Act</li>
                  <li>Carbon Reduction Plan</li>
                </ul>
                <h4 className="font-semibold mt-4 mb-2">Contact</h4>
                <p className="text-sm text-slate-700">UK: +44 20 1234 5678</p>
              </div>
            </div>
          </footer>

          {/* WhatsApp Floating Button */}
          <a href="https://wa.me/442012345678" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:scale-105 transition" title="Talk to a UK Architect">
            <MessageCircle size={24} />
          </a>
        </main>
      </body>
    </html>
  );
}
