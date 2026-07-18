import QuoteForm from '../QuoteForm';
import { HelpCircle, PhoneCall, ShieldCheck } from 'lucide-react';

export default function Quote() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Column: Text & info (5 columns) */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-900 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-200/40">
          <ShieldCheck className="w-4 h-4 text-accent-500" />
          Secure Quoting Portal
        </span>
        
        <h1 className="font-display text-4xl font-black text-brand-950 dark:text-white tracking-tight leading-none">
          Request Shipping Rates
        </h1>
        
        <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-normal">
          Receive a detailed routing plan and custom courier quote from our team. Provide your pickup and delivery hubs to submit your logistics request directly to our dispatch desk.
        </p>

        {/* Dispatch line help card */}
        <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-5 rounded-2xl space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Urgent Dispatch Assistance
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Have an emergency biological shipment, aerospace part hot-shot, or immediate courtroom filing? Don't wait for email—call central dispatch directly.
          </p>
          <a
            href="tel:+18134219894"
            className="flex items-center gap-2 text-brand-900 dark:text-brand-400 hover:underline text-xs font-bold"
          >
            <PhoneCall className="w-4 h-4 text-accent-500" />
            813-421-9894 (Live Dispatch Agent)
          </a>
        </div>
      </div>

      {/* Right Column: Quote Form (7 columns) */}
      <div className="lg:col-span-7">
        <QuoteForm />
      </div>

    </div>
  );
}
