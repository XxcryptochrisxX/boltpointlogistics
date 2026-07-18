import ContactForm from '../ContactForm';
import { PhoneCall, Mail, MapPin, Clock, Award, Shield } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Column: Office info & channels (5 columns) */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-900 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-200/40">
          <Clock className="w-4 h-4 text-accent-500" />
          Always Open &bull; 24/7/365
        </span>

        <h1 className="font-display text-4xl font-black text-brand-950 dark:text-white tracking-tight leading-none">
          Contact Our Dispatch Desk
        </h1>

        <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-normal">
          Connect directly with our 24/7 centralized Florida logistics and dispatch operations desk. We coordinate emergency STAT collections, route scheduling adjustments, and custom enterprise accounts.
        </p>

        {/* Channels details */}
        <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 rounded-2xl space-y-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider leading-none">Central Dispatch Desk</h4>
              <a href="tel:+18134219894" className="text-sm font-semibold text-brand-900 dark:text-brand-400 hover:underline block mt-1.5">813-421-9894</a>
              <span className="text-[10px] text-slate-400 block mt-0.5">Direct operational support & STAT orders.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider leading-none">Electronic Correspondence</h4>
              <a href="mailto:dispatch@boltpointlogistics.com" className="text-sm font-semibold text-brand-900 dark:text-brand-400 hover:underline block mt-1.5">dispatch@boltpointlogistics.com</a>
              <span className="text-[10px] text-slate-400 block mt-0.5">For route setups, billing audits, and contract documentation.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider leading-none">Corporate Headquarters</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                100 N Tampa St, Suite 2500, Tampa, FL 33602
              </p>
              <span className="text-[10px] text-slate-400 block mt-0.5">Hillsborough County Central Corridor.</span>
            </div>
          </div>
        </div>

        {/* Credentials badge strip */}
        <div className="flex gap-4 items-center justify-center md:justify-start pt-2">
          <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-400"><Shield className="w-4 h-4 text-emerald-500" /> HIPAA Secure</span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-400"><Award className="w-4 h-4 text-brand-500" /> OSHA Specimen Certified</span>
        </div>
      </div>

      {/* Right Column: Contact form visual (7 columns) */}
      <div className="lg:col-span-7">
        <ContactForm />
      </div>

    </div>
  );
}
