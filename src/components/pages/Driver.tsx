import DriverForm from '../DriverForm';
import { HelpCircle, Star, Sparkles, AlertCircle, ShieldAlert } from 'lucide-react';

export default function Driver() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Column: Driver Onboarding Perks & Details (5 columns) */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-900 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-200/40">
          <Sparkles className="w-4 h-4 text-amber-500" />
          Join Florida's Elite Fleet
        </span>

        <h1 className="font-display text-4xl font-black text-brand-950 dark:text-white tracking-tight leading-none">
          Become an Independent Driver Partner
        </h1>

        <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-normal">
          Grow your courier business as an independent contractor or owner-operator. Boltpoint Logistics offers optimized scheduled routes, weekly direct deposit payments, and 24/7 dispatcher support.
        </p>

        {/* Perks Grid */}
        <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-5 rounded-2xl space-y-4 shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-50 dark:border-charcoal-800/50 pb-2">
            Why Partner with Boltpoint?
          </h4>
          
          <div className="space-y-3">
            <div>
              <h5 className="text-xs font-bold text-slate-800 dark:text-white">Consistent Daily Routing</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Secure regular, predictable morning and evening routes linking hospitals, law offices, or pharmacies.</p>
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-800 dark:text-white">Competitive Contract Rates</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Enjoy lucrative mileage-based fees and fuel modifiers for long-distance intercity drives.</p>
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-800 dark:text-white">Professional Support Desk</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Work directly with supportive, highly organized dispatchers who coordinate bookings efficiently.</p>
            </div>
          </div>
        </div>

        {/* Minimal Requirements */}
        <div className="p-4 bg-slate-50 dark:bg-charcoal-950/40 border border-slate-100/50 dark:border-charcoal-800/40 rounded-2xl">
          <h5 className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 mb-2">
            <ShieldAlert className="w-4 h-4 text-accent-500" />
            Minimum Driver Criteria
          </h5>
          <ul className="space-y-1 text-[11px] text-slate-400 font-medium list-disc list-inside">
            <li>Minimum age: 21 years old</li>
            <li>Valid Florida Driver's License</li>
            <li>Clean background, drug screening, & MVR</li>
            <li>Reliable, clean vehicle (2015 or newer preferred)</li>
          </ul>
        </div>
      </div>

      {/* Right Column: Driver Form (7 columns) */}
      <div className="lg:col-span-7">
        <DriverForm />
      </div>

    </div>
  );
}
