import { SERVICES, INDUSTRIES, TESTIMONIALS, GLOBAL_FAQS } from '../../data';
import { ActivePage } from '../../types';
import InteractiveMap from '../InteractiveMap';
import { Zap, Shield, Clock, MapPin, Award, CheckCircle2, ChevronRight, UserCheck, Star, Users, PhoneCall, HelpCircle, Truck, ClipboardCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Helper to map string icon name to Lucide Component
  const renderIcon = (name: string, size = 20) => {
    switch (name) {
      case 'Activity': return <Shield className={`w-${size} h-${size}`} />; // standard enterprise secure
      case 'FlaskConical': return <Clock className={`w-${size} h-${size}`} />;
      case 'Pills': return <Award className={`w-${size} h-${size}`} />;
      case 'Scale': return <Users className={`w-${size} h-${size}`} />;
      case 'Zap': return <Zap className={`w-${size} h-${size}`} />;
      default: return <Truck className={`w-${size} h-${size}`} />;
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white dark:from-charcoal-950 dark:to-charcoal-900 pt-12 pb-20 lg:py-28" id="hero-boltpoint-logistics">
        {/* Visual Background Grids */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block (7 columns) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-100 text-brand-900 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-200/40 dark:border-brand-800/20 shadow-sm">
              <Award className="w-3.5 h-3.5 text-accent-500 animate-pulse" />
              Florida's Leading Enterprise & Medical Courier Agency
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-950 dark:text-white leading-[1.08]">
              Critical Logistics.<br />
              <span className="text-brand-700 dark:text-brand-400 bg-gradient-to-r from-brand-800 to-brand-500 dark:from-brand-300 dark:to-brand-500 bg-clip-text text-transparent">Boltpoint Precision.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              When standard transit won't suffice. We provide secure, HIPAA-compliant medical specimen handling, time-critical legal routing, and direct-drive Same-Day courier solutions across the Tampa and Orlando corridors.
            </p>

            {/* Core assurances badge strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300 py-2">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> HIPAA / OSHA Compliant</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> TSA Airport Cleared</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 24/7/365 Active Dispatch</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={() => onNavigate('quote')}
                className="px-8 py-4 bg-brand-800 hover:bg-brand-950 dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-bold text-sm rounded-2xl shadow-lg shadow-brand-950/10 transition-all duration-200 group cursor-pointer flex items-center justify-center gap-2"
                id="hero-cta-quote"
              >
                Request a Quote
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => onNavigate('driver')}
                className="px-8 py-4 bg-white hover:bg-slate-50 dark:bg-charcoal-800 dark:hover:bg-charcoal-750 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-charcoal-700 font-bold text-sm rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                id="hero-cta-driver"
              >
                <Truck className="w-4 h-4 text-accent-500" />
                Become a Driver
              </button>
            </div>
          </div>

          {/* Right visual graphics panel (5 columns) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Elegant multi-layer card representation demonstrating secure chain-of-custody */}
            <div className="relative z-10 bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 rounded-3xl shadow-xl space-y-6 max-w-sm mx-auto">
              <div className="flex items-center justify-between border-b border-slate-50 dark:border-charcoal-800/50 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 flex items-center justify-center">
                    <Zap className="w-4 h-4 fill-brand-700 dark:fill-brand-300" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Active Manifest</span>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-white leading-none">BOLT-8842-TAMPA</h4>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold text-[9px] uppercase tracking-wider">
                  In Transit
                </span>
              </div>

              {/* Steps timeline representation */}
              <div className="space-y-4">
                <div className="flex gap-3 relative">
                  <div className="w-1.5 h-12 bg-brand-100 dark:bg-brand-950 absolute left-[11px] top-4 rounded" />
                  <div className="w-6 h-6 rounded-full bg-brand-600 border-4 border-brand-50 dark:border-charcoal-950 text-white flex items-center justify-center text-[10px] font-bold z-10">
                    1
                  </div>
                  <div className="text-xs">
                    <h5 className="font-bold text-slate-800 dark:text-white">Tampa Diagnostic Lab (Hub 1)</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">Picked up Specimen: Cryo-Tote (HIPAA Verified)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-500 border-4 border-accent-50 dark:border-charcoal-950 text-white flex items-center justify-center text-[10px] font-bold z-10 animate-pulse">
                    2
                  </div>
                  <div className="text-xs">
                    <h5 className="font-bold text-slate-800 dark:text-white">En Route: I-4 Corridor</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">ETA Orlando Lab Center: 11:45 AM (STAT Drive)</p>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="p-3 bg-slate-50 dark:bg-charcoal-950/60 rounded-xl border border-slate-100 dark:border-charcoal-800/40 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 font-semibold text-slate-600 dark:text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                  Chain of Custody Scanned
                </div>
                <span className="font-mono text-slate-400 font-bold">100% VERIFIED</span>
              </div>
            </div>

            {/* Absolute accent decorative cards floating */}
            <div className="absolute -left-6 bottom-4 z-20 bg-brand-900 text-white p-4 rounded-2xl shadow-lg border border-brand-800 max-w-[180px] hidden sm:block">
              <div className="text-2xl font-black font-display text-accent-400">45 Min</div>
              <div className="text-[10px] font-semibold text-brand-200 mt-1 uppercase tracking-wider">Avg. Tampa STAT Specimen Collection Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">Operating Excellence</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Designed for Zero-Tolerance Industries
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hospitals, labs, corporate law firms, and industrial clients rely on Boltpoint Logistics because our operations focus on accountability and absolute reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Item 1: HIPAA/OSHA compliance */}
          <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-50 dark:bg-brand-950/40 rounded-2xl flex items-center justify-center text-brand-700 dark:text-brand-400 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Strict HIPAA & OSHA Compliance
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5">
              Every driver undergoes certified background checks and annual training to safely handle biological samples, laboratory specimens, pharmacy products, and highly secure confidential files.
            </p>
          </div>

          {/* Item 2: Real-time telemetry */}
          <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-50 dark:bg-brand-950/40 rounded-2xl flex items-center justify-center text-brand-700 dark:text-brand-400 mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              24/7/365 On-Demand Dispatch
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5">
              Logistics does not sleep. Our live Florida dispatch operations center is staffed constantly to coordinate emergency STAT pickups, airport air-freight recovers, and late-night pharmacy deliveries.
            </p>
          </div>

          {/* Item 3: Chain-of-custody */}
          <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-50 dark:bg-brand-950/40 rounded-2xl flex items-center justify-center text-brand-700 dark:text-brand-400 mb-6">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Complete Chain of Custody
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5">
              Secure barcode scanning at every transition point. Real-time digital signature and geolocation tracking confirm deliveries, with automated proof-of-delivery receipts sent straight to your email.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Grid Section */}
      <section className="bg-slate-50 dark:bg-charcoal-950/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">Our Specialty Services</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Enterprise Logistics Lines
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
                We design custom logistics schedules and express on-demand delivery for corporate, medical, and legal networks across our Florida hub grids.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-charcoal-800 hover:bg-slate-100 dark:hover:bg-charcoal-800 bg-white dark:bg-charcoal-900 text-slate-700 dark:text-slate-200 rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5 shrink-0"
            >
              Explore All Specialty Lines
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Grid list of SERVICES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((serv) => (
              <div
                key={serv.id}
                className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all group relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 flex items-center justify-center mb-5 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition-colors">
                    {renderIcon(serv.iconName, 5)}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5">
                    {serv.shortDesc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-50 dark:border-charcoal-800/40">
                  <button
                    onClick={() => onNavigate(`service/${serv.id}`)}
                    className="text-xs font-bold text-brand-800 dark:text-brand-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    View Operational Details &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industries Served Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">Enterprise Clients</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Who We Deliver For
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            We establish specialized operations for highly regulated industries requiring stringent safety protocols and absolute delivery timing.
          </p>
        </div>

        {/* Bento grid showcase of industries */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12 items-stretch">
          
          {/* Healthcare card (Big, 7 cols) */}
          <div className="md:col-span-7 bg-brand-900 text-white rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[280px]">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-300">Dominant Specialty</span>
              <h3 className="font-display text-2xl font-extrabold text-white mt-2">
                Hospitals, Labs & Clinical Diagnostics
              </h3>
              <p className="text-xs text-brand-100 leading-relaxed mt-3 max-w-md">
                Connecting multi-site health networks, diagnostic labs, independent clinics, and blood centers daily. We operate dedicated climate-controlled loops to safely carry specimens under full HIPAA compliance.
              </p>
            </div>
            
            <button
              onClick={() => onNavigate('industries')}
              className="w-fit text-xs font-bold text-accent-400 hover:text-accent-300 transition-colors inline-flex items-center gap-1 cursor-pointer mt-6 z-10"
            >
              Explore Medical Capabilities &rarr;
            </button>
          </div>

          {/* Legal / Finance card (5 cols) */}
          <div className="md:col-span-5 bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between min-h-[280px]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Professional Services</span>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-2">
                Law Firms & Corporate Financials
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                Handling critical court briefs, original contracts, and bank deposit bags. Our couriers are vetted, bonded, and trained on filing protocols.
              </p>
            </div>

            <button
              onClick={() => onNavigate('industries')}
              className="w-fit text-xs font-bold text-brand-800 dark:text-brand-400 hover:underline inline-flex items-center gap-1 cursor-pointer mt-6"
            >
              Learn More &rarr;
            </button>
          </div>

          {/* Manufacturing / E-commerce card (5 cols) */}
          <div className="md:col-span-5 bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between min-h-[280px]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Industrial Logistics</span>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-2">
                Manufacturing, Aviation & Parts
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                Supporting supply chains with same-day emergency parts delivery (AOG and line-down situations) to keep operations active.
              </p>
            </div>

            <button
              onClick={() => onNavigate('industries')}
              className="w-fit text-xs font-bold text-brand-800 dark:text-brand-400 hover:underline inline-flex items-center gap-1 cursor-pointer mt-6"
            >
              Learn More &rarr;
            </button>
          </div>

          {/* National Accounts (7 cols) */}
          <div className="md:col-span-7 bg-slate-900 text-white rounded-3xl p-8 shadow-sm flex flex-col justify-between min-h-[280px] relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Large Volume Enterprise</span>
              <h3 className="font-display text-2xl font-extrabold text-white mt-2">
                Custom Corporate Accounts & APIs
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mt-3 max-w-md">
                We provide custom route-optimization planning and monthly audit reports for multi-site enterprise clients. Inquire about future direct API configurations for custom billing and order dispatching.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="w-fit text-xs font-bold text-white hover:text-slate-200 transition-colors inline-flex items-center gap-1 cursor-pointer mt-6 z-10"
            >
              Inquire with Sales &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* 5. Coverage Area (Interactive Florida Map) Section */}
      <section className="bg-slate-50 dark:bg-charcoal-950/20 py-16" id="coverage-area-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">Our Florida Hub Network</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Tampa & Orlando Service Coverage
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              We operate central logistics and dispatch centers across Hillsborough, Pinellas, Orange, Polk, Sarasota, and Manatee counties.
            </p>
          </div>

          {/* Interactive SVG Florida Map Component */}
          <InteractiveMap onNavigate={onNavigate} />

        </div>
      </section>

      {/* 6. Customer Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">Vouched Integrity</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Trusted by Elite Florida Directors
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hear from surgical laboratory supervisors, senior legal counselors, and industrial operations directors who rely on our fleet daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {TESTIMONIALS.slice(0, 4).map((test, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{test.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-50 dark:border-charcoal-800/40 flex items-center justify-between">
                <div>
                  <cite className="not-italic text-sm font-bold text-slate-950 dark:text-white block">
                    {test.author}
                  </cite>
                  <span className="text-[11px] text-slate-400 font-semibold block mt-0.5">
                    {test.title}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-2 py-0.5 rounded">
                  {test.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Frequently Asked Questions Section (Accordion) */}
      <section className="bg-slate-50 dark:bg-charcoal-950/20 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">Got Questions?</span>
            <h2 className="font-display text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Clear answers regarding biological transit compliance, urgent same-day speed, tracking telemetry, and fleet sizing.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-3">
            {GLOBAL_FAQS.slice(0, 5).map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800/80 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-slate-800 dark:text-slate-200 font-semibold text-sm cursor-pointer hover:bg-slate-50/50 dark:hover:bg-charcoal-850"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                      {faq.q}
                    </span>
                    <span className="text-slate-400 font-bold ml-4">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-charcoal-850">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('faq')}
              className="text-xs font-bold text-brand-800 dark:text-brand-400 hover:underline flex items-center gap-1 mx-auto cursor-pointer"
            >
              Read the Full Frequently Asked Questions Portal &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 8. Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-900 to-brand-700 text-white rounded-[32px] p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Background visuals */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="space-y-4 max-w-xl text-center lg:text-left relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-300 bg-brand-950/50 px-3 py-1 rounded-full border border-brand-800/30">
              Corporate Onboarding
            </span>
            <h3 className="font-display text-3xl lg:text-4xl font-extrabold leading-tight">
              Ready to Upgrade Your Corporate Supply Chain?
            </h3>
            <p className="text-xs text-brand-100 leading-relaxed font-normal">
              Talk to a logistics manager today to configure multi-site routes, arrange biological specimen sweeps, or set up legal courier schedules.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative z-10">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center shrink-0 shadow-lg shadow-accent-600/15"
            >
              Request Rates Now
            </button>
            <a
              href="tel:+18134219894"
              className="px-6 py-3.5 bg-brand-950/60 hover:bg-brand-950 border border-brand-800/50 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center shrink-0 flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-accent-500" />
              Call Central Dispatch
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
