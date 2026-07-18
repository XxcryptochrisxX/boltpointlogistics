import { SERVICES } from '../../data';
import { Truck, Shield, Check, Clock, ChevronRight, AlertCircle, ArrowLeft, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (page: string) => void;
}

export default function ServiceDetail({ serviceId, onNavigate }: ServiceDetailProps) {
  const service = SERVICES.find((s) => s.id === serviceId);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-4">
        <div className="w-12 h-12 bg-red-50 dark:bg-red-950/40 text-red-500 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
          Specialty Line Not Found
        </h2>
        <p className="text-sm text-slate-500">
          The requested courier logistics line does not exist or has been moved.
        </p>
        <button
          onClick={() => onNavigate('services')}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-charcoal-800 dark:hover:bg-charcoal-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl cursor-pointer"
        >
          View All Specialty Lines
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Back to services link */}
      <button
        onClick={() => onNavigate('services')}
        className="text-xs font-bold text-slate-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Specialty Lines
      </button>

      {/* Hero Header block */}
      <div className="bg-gradient-to-b from-brand-50 to-white dark:from-charcoal-950 dark:to-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left (7 columns) */}
        <div className="lg:col-span-7 space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-900 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-200/40">
            <Shield className="w-3.5 h-3.5 text-accent-500" />
            Vetted Logistics Division
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-brand-950 dark:text-white tracking-tight">
            {service.title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-normal">
            {service.longDesc}
          </p>
          <div className="flex gap-4 pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 bg-brand-800 hover:bg-brand-900 dark:bg-brand-600 dark:hover:bg-brand-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Get a Fast Estimate
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white dark:bg-charcoal-800 border border-slate-200 dark:border-charcoal-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Contact Dispatch Desk
            </button>
          </div>
        </div>

        {/* Right decoration representation (5 columns) */}
        <div className="lg:col-span-5 bg-white dark:bg-charcoal-900/40 border border-slate-100 dark:border-charcoal-800/80 p-6 rounded-2xl shadow-sm space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Standard Compliance Indicators
          </h4>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500">HIPAA Protected</span>
              <span className="text-emerald-500">100% Certified</span>
            </div>
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500">OSHA Specimen Vetted</span>
              <span className="text-emerald-500">100% Certified</span>
            </div>
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500">Electronic Proof-of-Delivery</span>
              <span className="text-emerald-500">Immediate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Split columns: Features & Benefits vs Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left side (8 columns): Operational Features & benefits */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Key Benefits */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              Primary Service Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((ben, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-4 bg-slate-50 dark:bg-charcoal-900/60 rounded-xl border border-slate-100/50 dark:border-charcoal-800/40"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                    {ben}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Features */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              Standard Fleet Capabilities
            </h3>
            <div className="space-y-2">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Specific FAQ */}
          <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-charcoal-800/80">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              Line Specific FAQ
            </h3>
            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-100 dark:border-charcoal-800/80 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full px-5 py-3 text-left flex items-center justify-between text-slate-800 dark:text-slate-200 font-semibold text-xs cursor-pointer hover:bg-slate-50/50 dark:hover:bg-charcoal-850"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                        {faq.q}
                      </span>
                      <span>{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-charcoal-850">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right side (4 columns): Quote Sidebar Callout */}
        <div className="lg:col-span-4 bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 rounded-3xl shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-2.5 py-1 rounded-full">
              Rate Requests
            </span>
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Direct Dispatch
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Establish a route contract or request custom courier rates for {service.title}.
            </p>
          </div>

          <button
            onClick={() => onNavigate('quote')}
            className="w-full py-3 bg-brand-900 hover:bg-brand-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center cursor-pointer shadow-md block"
          >
            Request Active Rates &rarr;
          </button>

          <div className="border-t border-slate-50 dark:border-charcoal-800/50 pt-4 space-y-3">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Other Specializations
            </h5>
            <div className="space-y-1 text-xs">
              {SERVICES.filter((s) => s.id !== serviceId).slice(0, 4).map((s) => (
                <button
                  key={s.id}
                  onClick={() => onNavigate(`service/${s.id}`)}
                  className="w-full text-left text-slate-500 hover:text-brand-800 dark:hover:text-brand-300 font-semibold py-1 block cursor-pointer"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
