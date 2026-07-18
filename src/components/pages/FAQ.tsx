import { GLOBAL_FAQS } from '../../data';
import { HelpCircle, ChevronDown, Award, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Categorizing the FAQ content
  const complianceFaqs = [
    { q: 'Are your operations HIPAA and OSHA compliant?', a: 'Yes. All couriers undergo comprehensive annual testing and hold active certifications for HIPAA privacy and OSHA bloodborne pathogen safe handling.' },
    { q: 'Are your couriers vetted and drug-screened?', a: 'Strictly. Every driver undergoes standard 10-panel drug screenings, detailed national background checks, and active DMV driving record (MVR) reviews.' }
  ];

  const operationalFaqs = [
    { q: 'How fast is a biological STAT courier pickup?', a: 'Our medical STAT collections are dispatched immediately. Typical pickup times across Tampa, Orlando, and St. Pete are between 45 and 60 minutes from order confirmation.' },
    { q: 'What types of vehicles are available in your fleet?', a: 'We operate fuel-efficient compact sedans (best for clinical letters, labs, and folders), mid-size SUVs, high-capacity cargo Transit/Sprinters, and liftgate box trucks.' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header section */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">Help & Support</span>
        <h1 className="font-display text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Help & Frequently Asked Questions
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Clear answers regarding biological transit compliance, courier speed, tracking telemetry, and fleet sizing.
        </p>
      </div>

      {/* Accordion Categories */}
      <div className="space-y-10">
        
        {/* Category 1: Compliance */}
        <div className="space-y-4">
          <h3 className="font-display text-lg font-bold text-brand-900 dark:text-brand-400 border-b border-slate-50 dark:border-charcoal-800/60 pb-2">
            Safety, Vetting & Regulatory Compliance
          </h3>
          <div className="space-y-3">
            {complianceFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800/80 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-slate-800 dark:text-slate-200 font-semibold text-sm cursor-pointer hover:bg-slate-50/50"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                      {faq.q}
                    </span>
                    <span>{isOpen ? '−' : '+'}</span>
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
        </div>

        {/* Category 2: Operations */}
        <div className="space-y-4">
          <h3 className="font-display text-lg font-bold text-brand-900 dark:text-brand-400 border-b border-slate-50 dark:border-charcoal-800/60 pb-2">
            Fleet Capabilities & Delivery Speeds
          </h3>
          <div className="space-y-3">
            {operationalFaqs.map((faq, idx) => {
              const adjustedIdx = idx + 10; // offset index
              const isOpen = openIdx === adjustedIdx;
              return (
                <div key={idx} className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800/80 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : adjustedIdx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-slate-800 dark:text-slate-200 font-semibold text-sm cursor-pointer hover:bg-slate-50/50"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                      {faq.q}
                    </span>
                    <span>{isOpen ? '−' : '+'}</span>
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
        </div>

        {/* Category 3: Global FAQs list */}
        <div className="space-y-4">
          <h3 className="font-display text-lg font-bold text-brand-900 dark:text-brand-400 border-b border-slate-50 dark:border-charcoal-800/60 pb-2">
            General Account & Billing Support
          </h3>
          <div className="space-y-3">
            {GLOBAL_FAQS.map((faq, idx) => {
              const adjustedIdx = idx + 20; // offset index
              const isOpen = openIdx === adjustedIdx;
              return (
                <div key={idx} className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800/80 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : adjustedIdx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-slate-800 dark:text-slate-200 font-semibold text-sm cursor-pointer hover:bg-slate-50/50"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                      {faq.q}
                    </span>
                    <span>{isOpen ? '−' : '+'}</span>
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
        </div>

      </div>

      {/* Support help footer */}
      <div className="bg-slate-100 dark:bg-charcoal-900 p-6 rounded-2xl text-center space-y-3 border border-slate-200/40 dark:border-charcoal-800">
        <h4 className="font-display text-sm font-bold text-slate-800 dark:text-white">
          Still Have Unresolved Operational Questions?
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
          Our dispatch desk is open 24/7/365 to handle your service calls and support inquiries directly.
        </p>
        <div className="flex justify-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-accent-500" /> 813-421-9894</span>
          <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-brand-500" /> dispatch@boltpointlogistics.com</span>
        </div>
      </div>

    </div>
  );
}
