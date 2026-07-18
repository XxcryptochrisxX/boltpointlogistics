import InteractiveMap from '../InteractiveMap';
import { CITIES } from '../../data';
import { Navigation, Compass, Globe, Route } from 'lucide-react';

interface CoverageProps {
  onNavigate: (page: string) => void;
}

export default function Coverage({ onNavigate }: CoverageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">Florida Service Network</span>
        <h1 className="font-display text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Active Service Coverage Area
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          We operate centralized dispatch centers linking Hillsborough, Pinellas, Orange, Polk, Sarasota, and Manatee counties with high-velocity courier solutions.
        </p>
      </div>

      {/* Interactive Florida Vector Map component */}
      <InteractiveMap onNavigate={onNavigate} />

      {/* Transit Corridors Detail Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        
        {/* Route 1: I-4 corridor */}
        <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 rounded-3xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 flex items-center justify-center">
              <Route className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                The I-4 Corridor High-Velocity Line
              </h3>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Tampa &bull; Lakeland &bull; Orlando</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Connecting Tampa Bay's biotechnology and clinical testing centers directly with Orlando's medical hubs and specialty medication networks. We run multiple scheduled sweeps daily along Interstate 4, allowing our clients to enjoy significant routing discounts.
          </p>
        </div>

        {/* Route 2: coastal corridor */}
        <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 rounded-3xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                The Coastal Gulf Coast Loop
              </h3>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Clearwater &bull; St. Pete &bull; Bradenton &bull; Sarasota</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Linking Pinellas, Manatee, and Sarasota county legal desks, local health clinics, independent labs, and corporate offices. Our Coastal Loop ensures same-day hand-deliveries, courthouse filing stamping runs, and lockbox deposit sweeps.
          </p>
        </div>

      </div>

    </div>
  );
}
