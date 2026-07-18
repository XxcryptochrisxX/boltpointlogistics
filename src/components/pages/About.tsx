import { ShieldCheck, Award, Users, MapPin, CheckCircle, Zap } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Brand Mission Hero */}
      <div className="bg-gradient-to-b from-brand-50 to-white dark:from-charcoal-950 dark:to-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-900 dark:bg-brand-900/30 dark:text-brand-300">
            <ShieldCheck className="w-4 h-4 text-accent-500" />
            Corporate Profile
          </span>
          <h1 className="font-display text-4xl font-black text-brand-950 dark:text-white tracking-tight leading-none">
            Boltpoint Logistics LLC
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-normal">
            Boltpoint Logistics is a recognized leader in secure biological, medical, legal, and same-day express supply chain logistics across the state of Florida. Founded on a simple principle—absolute timing requires deep specialization—we operate 24/7/365 to keep clinical diagnostics and corporate firms flowing flawlessly.
          </p>
        </div>

        {/* Brand metrics panel */}
        <div className="lg:col-span-5 bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 rounded-2xl shadow-sm grid grid-cols-2 gap-4">
          <div className="text-center p-3">
            <span className="font-display text-3xl font-black text-brand-800 dark:text-brand-400 block">24/7</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 block">Live Dispatch</span>
          </div>
          <div className="text-center p-3">
            <span className="font-display text-3xl font-black text-brand-800 dark:text-brand-400 block">100%</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 block">HIPAA Secure</span>
          </div>
          <div className="text-center p-3">
            <span className="font-display text-3xl font-black text-brand-800 dark:text-brand-400 block">45m</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 block">STAT Collection</span>
          </div>
          <div className="text-center p-3">
            <span className="font-display text-3xl font-black text-brand-800 dark:text-brand-400 block">99.9%</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 block">On-Time Rate</span>
          </div>
        </div>
      </div>

      {/* 2. Operational Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 lg:p-8 rounded-3xl space-y-4">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-brand-700" />
            Our Quality Commitments
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Standard couriers focus on volume. Boltpoint Logistics focuses on regulatory safety and clinical precision. We assign dedicated drivers to recurring medical and legal routes so that couriers develop high familiarity with client pickup desks, loading docks, clerk procedures, and specimen handling areas.
          </p>
          <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Certified OSHA Biohazard specimen handling</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Annual HIPAA privacy audits</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> TSA STA-approved security clearances</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 lg:p-8 rounded-3xl space-y-4">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-brand-700" />
            Elite Driver Network
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Our network consists of professional independent contractors and owner-operators carrying comprehensive vehicle and commercial liability insurance. Every candidate undergoes detailed backgrounds, MVR, and drug screening to maintain the integrity of our client operations.
          </p>
          <div className="p-4 bg-slate-50 dark:bg-charcoal-950/40 rounded-xl border border-slate-100/50 dark:border-charcoal-800/40 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block">Want to join our dispatch network?</span>
              <span className="text-[11px] text-slate-400 block">Apply online to partner as an owner-operator.</span>
            </div>
            <button
              onClick={() => onNavigate('driver')}
              className="px-4 py-2 bg-brand-900 text-white hover:bg-brand-950 text-[10px] font-bold uppercase rounded-lg cursor-pointer"
            >
              Apply Portal
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
