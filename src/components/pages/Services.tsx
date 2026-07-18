import { SERVICES } from '../../data';
import { Truck, Shield, Search, ArrowRight, Zap, Scale, Plane, Mail, Clock, Award, Users } from 'lucide-react';
import { useState } from 'react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Helper to map string icon name to Lucide Component
  const renderIcon = (name: string, size = 20) => {
    switch (name) {
      case 'Activity': return <Shield className={`w-${size} h-${size}`} />;
      case 'FlaskConical': return <Clock className={`w-${size} h-${size}`} />;
      case 'Pills': return <Award className={`w-${size} h-${size}`} />;
      case 'Scale': return <Scale className={`w-${size} h-${size}`} />;
      case 'Zap': return <Zap className={`w-${size} h-${size}`} />;
      case 'Plane': return <Plane className={`w-${size} h-${size}`} />;
      case 'Mail': return <Mail className={`w-${size} h-${size}`} />;
      default: return <Truck className={`w-${size} h-${size}`} />;
    }
  };

  const filteredServices = SERVICES.filter((serv) =>
    serv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    serv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400">Our Specialty Services</span>
        <h1 className="font-display text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Specialty Logistics Lines
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Boltpoint Logistics operates dedicated corporate routes and on-demand courier fleets built around the regulatory standards of Florida's leading firms.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search specialty courier lines (e.g. medical, court)..."
          className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-white"
        />
      </div>

      {/* Grid of services */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((serv) => (
            <div
              key={serv.id}
              className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 rounded-2xl flex items-center justify-center mb-6">
                  {renderIcon(serv.iconName, 6)}
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                  {serv.title}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                  {serv.shortDesc}
                </p>

                {/* Bullets preview */}
                <ul className="mt-5 space-y-1.5 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  {serv.benefits.slice(0, 2).map((b, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-50 dark:border-charcoal-800/40 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`service/${serv.id}`)}
                  className="text-xs font-bold text-brand-800 dark:text-brand-400 hover:underline flex items-center gap-1 cursor-pointer group-hover:translate-x-1 transition-transform"
                >
                  Explore Capabilities
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 max-w-md mx-auto">
          <p className="text-sm text-slate-400">
            No matching specialty logistics lines found. Check your spelling or search for another sector, or contact our dispatch team.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-charcoal-800 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl"
          >
            Reset Search Filter
          </button>
        </div>
      )}

      {/* Support / Help card */}
      <div className="bg-brand-50/50 dark:bg-brand-950/20 border border-brand-100/50 dark:border-brand-900/30 p-6 rounded-3xl max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="font-display text-base font-bold text-brand-950 dark:text-white">
            Need a Completely Customized Logistics Route?
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Our logistics planning coordinators specialize in optimizing recurring branch routes, medical sweep loops, and complex supply-chain transfers.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 bg-brand-900 text-white dark:bg-brand-600 hover:bg-brand-950 text-xs font-bold rounded-xl whitespace-nowrap cursor-pointer"
        >
          Consult Route Planners
        </button>
      </div>

    </div>
  );
}
