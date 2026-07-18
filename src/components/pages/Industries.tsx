import { INDUSTRIES } from '../../data';
import { ShieldAlert, CheckCircle2, Building, HeartPulse, Scale, Cpu, DollarSign, ArrowRight } from 'lucide-react';

interface IndustriesProps {
  onNavigate: (page: string) => void;
}

export default function Industries({ onNavigate }: IndustriesProps) {
  // Helper to map industry icon to Lucide component
  const getIndustryIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <HeartPulse className="w-6 h-6 text-brand-600 dark:text-brand-400" />;
      case 'Pills': return <ShieldAlert className="w-6 h-6 text-brand-600 dark:text-brand-400" />;
      case 'Scale': return <Scale className="w-6 h-6 text-brand-600 dark:text-brand-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-brand-600 dark:text-brand-400" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-brand-600 dark:text-brand-400" />;
      default: return <Building className="w-6 h-6 text-brand-600 dark:text-brand-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">Enterprise Sectors</span>
        <h1 className="font-display text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Industries We Serve
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          From hospital biological laboratories to federal courtroom filing clerks, we support businesses operating in strict, zero-variance environments.
        </p>
      </div>

      {/* Grid List of Industries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.id}
            className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-950/40 rounded-2xl flex items-center justify-center">
                  {getIndustryIcon(ind.iconName)}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {ind.title}
                  </h3>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Specialty Sector</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {ind.desc}
              </p>

              {/* Requirement standards */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Compliance & Quality Criteria
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                  {ind.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="truncate">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-50 dark:border-charcoal-800/40">
              <button
                onClick={() => onNavigate('quote')}
                className="text-xs font-bold text-brand-800 dark:text-brand-400 hover:underline flex items-center gap-1.5 cursor-pointer group"
              >
                Request Custom Industry Routing Plan
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
