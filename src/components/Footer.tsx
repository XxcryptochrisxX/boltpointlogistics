import { SERVICES, CITIES } from '../data';
import { MapPin, Phone, Mail, Award, Shield, Zap, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-slate-300 border-t border-charcoal-900/50 pt-16 pb-8 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Brand Column: 4 width */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('home')}>
            <div className="bg-white px-2 py-0.5 rounded-xl shadow-md border border-slate-200/20 flex items-center justify-center h-20 transition-transform group-hover:scale-[1.02]">
              <img
                src="/boltpoint_logo.jpg"
                alt="Boltpoint Logistics"
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Florida's premier 24/7/365 enterprise logistics and medical courier partner. Delivering strict HIPAA and OSHA biological compliance alongside on-time same-day shipping speed.
          </p>

          <div className="space-y-3 pt-2 text-xs">
            <div className="flex items-center gap-2.5 text-slate-400">
              <MapPin className="w-4 h-4 text-brand-500" />
              <span>100 N Tampa St, Suite 2500, Tampa, FL 33602</span>
            </div>
            <a href="tel:+18134219894" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors w-fit">
              <Phone className="w-4 h-4 text-brand-500" />
              <span>813-421-9894 (Direct Dispatch Desk)</span>
            </a>
            <a href="mailto:dispatch@boltpointlogistics.com" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors w-fit">
              <Mail className="w-4 h-4 text-brand-500" />
              <span>dispatch@boltpointlogistics.com</span>
            </a>
          </div>
        </div>

        {/* Directory Column 1: Services (3 width) */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 border-l-2 border-brand-500 pl-2.5">
            Specialty Logistics
          </h4>
          <ul className="space-y-2 text-xs font-medium">
            {SERVICES.slice(0, 6).map((serv) => (
              <li key={serv.id}>
                <button
                  onClick={() => handleNavClick(`service/${serv.id}`)}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {serv.title}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick('services')}
                className="text-brand-400 hover:text-brand-300 transition-colors font-bold flex items-center gap-1 mt-1 cursor-pointer"
              >
                View All Specialty Lines &rarr;
              </button>
            </li>
          </ul>
        </div>

        {/* Directory Column 2: Hub Locations (3 width) */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 border-l-2 border-accent-500 pl-2.5">
            Active Florida Hubs
          </h4>
          <ul className="space-y-2 text-xs font-medium">
            {CITIES.map((city) => (
              <li key={city.id}>
                <button
                  onClick={() => handleNavClick(`city/${city.slug}`)}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span className="w-1 h-1 rounded-full bg-accent-500" />
                  Courier Services in {city.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Directory Column 3: Corporate/Drivers (2 width) */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 border-l-2 border-slate-600 pl-2.5">
            Corporate Center
          </h4>
          <ul className="space-y-2 text-xs font-medium">
            <li>
              <button onClick={() => handleNavClick('about')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                About Our Firm
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('driver')} className="text-slate-400 hover:text-white transition-colors font-semibold text-amber-400 hover:text-amber-300 cursor-pointer">
                Become a Driver
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('faq')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                Help & FAQ
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                Dispatch Desk
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('privacy')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('terms')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Compliance / Certification logos footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-charcoal-900/60 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-xs">
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
          <span className="flex items-center gap-1.5 px-3 py-1 bg-charcoal-900/80 rounded-md border border-charcoal-800 text-slate-400 font-semibold">
            <Shield className="w-3.5 h-3.5 text-emerald-500" /> HIPAA Secure
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-charcoal-900/80 rounded-md border border-charcoal-800 text-slate-400 font-semibold">
            <Award className="w-3.5 h-3.5 text-brand-500" /> OSHA Specimen Certified
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-charcoal-900/80 rounded-md border border-charcoal-800 text-slate-400 font-semibold">
            <Globe className="w-3.5 h-3.5 text-accent-500" /> TSA Cleared Airside
          </span>
        </div>

        <div className="text-center md:text-right space-y-1 text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Boltpoint Logistics LLC. All Rights Reserved.</p>
          <p className="text-[10px]">
            WCAG AA Accessibility Compliant &bull; Highly Secured Static Secure Network (Cloudflare Protected)
          </p>
        </div>
      </div>
    </footer>
  );
}
