import { HelpCircle, ArrowRight } from 'lucide-react';

interface NotFoundProps {
  onNavigate: (page: string) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  return (
    <div className="max-w-md mx-auto py-24 text-center space-y-6">
      <div className="w-16 h-16 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 rounded-full flex items-center justify-center mx-auto">
        <HelpCircle className="w-8 h-8 text-accent-500" />
      </div>
      
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Page Not Located
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          We couldn't locate that specific link. It might have been updated, relocated, or deleted.
        </p>
      </div>

      <button
        onClick={() => onNavigate('home')}
        className="px-6 py-3 bg-brand-800 hover:bg-brand-900 text-white font-semibold text-xs uppercase tracking-wider rounded-xl cursor-pointer inline-flex items-center gap-1.5"
      >
        Return to Home Page
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
