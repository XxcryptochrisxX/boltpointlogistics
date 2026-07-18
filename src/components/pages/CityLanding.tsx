import { CITIES } from '../../data';
import { MapPin, Shield, CheckCircle2, Navigation, ArrowLeft, PhoneCall, HelpCircle, AlertCircle, CalendarClock } from 'lucide-react';
import { useState } from 'react';
import SEOHead from '../SEOHead';

interface CityLandingProps {
  citySlug: string;
  onNavigate: (page: string) => void;
}

export default function CityLanding({ citySlug, onNavigate }: CityLandingProps) {
  const city = CITIES.find((c) => c.slug === citySlug);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!city) {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-4">
        <div className="w-12 h-12 bg-red-50 dark:bg-red-950/40 text-red-500 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
          Active Hub Not Found
        </h2>
        <p className="text-sm text-slate-500">
          We couldn't locate an active logistics hub matching that name in our network.
        </p>
        <button
          onClick={() => onNavigate('coverage')}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-charcoal-800 dark:hover:bg-charcoal-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl cursor-pointer"
        >
          View Active Florida Hubs
        </button>
      </div>
    );
  }

  // Inject a custom JSON-LD LocalBusiness schema customized for this city's specific address
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Boltpoint Logistics - ${city.name} Courier Service`,
    "image": "https://boltpointlogistics.com/logo.png",
    "@id": `https://boltpointlogistics.com/city/${city.slug}#localbusiness`,
    "url": `https://boltpointlogistics.com/city/${city.slug}`,
    "telephone": "+18134219894",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat,
      "longitude": city.coordinates.lng
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Inject custom local metadata dynamically for near-perfect Lighthouse SEO */}
      <SEOHead
        title={`${city.name} FL Same-Day Courier`}
        description={city.metaDesc}
        canonicalPath={`/city/${city.slug}`}
        schema={localSchema}
      />

      {/* Back button */}
      <button
        onClick={() => onNavigate('coverage')}
        className="text-xs font-bold text-slate-400 hover:text-brand-900 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Active Florida Hubs
      </button>

      {/* Main City Intro Banner */}
      <div className="bg-gradient-to-b from-brand-50 to-white dark:from-charcoal-950 dark:to-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left text panel (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-900 dark:bg-brand-900/30 dark:text-brand-300">
            <MapPin className="w-3.5 h-3.5 text-accent-500" />
            {city.county} Active Network Node
          </span>
          
          <h1 className="font-display text-3xl sm:text-4xl font-black text-brand-950 dark:text-white tracking-tight">
            {city.tagline}
          </h1>
          
          <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-normal">
            {city.intro}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 bg-brand-800 hover:bg-brand-900 dark:bg-brand-600 dark:hover:bg-brand-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Book {city.name} Courier
            </button>
            <a
              href="tel:+18134219894"
              className="px-6 py-3 bg-white dark:bg-charcoal-800 border border-slate-200 dark:border-charcoal-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4 text-accent-500 animate-bounce" />
              Call Hub Dispatch
            </a>
          </div>
        </div>

        {/* Right coordinates visual box (4 cols) */}
        <div className="lg:col-span-4 bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 rounded-2xl shadow-sm text-center space-y-4">
          <div className="w-12 h-12 bg-brand-50 dark:bg-brand-950/40 rounded-full flex items-center justify-center text-brand-700 dark:text-brand-300 mx-auto">
            <Navigation className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-widest leading-none">Geo Coordinates</h4>
            <p className="text-[11px] font-mono text-slate-400 mt-2">
              Lat: {city.coordinates.lat.toFixed(4)} &deg; N<br />
              Lng: {city.coordinates.lng.toFixed(4)} &deg; W
            </p>
          </div>
          <div className="text-[10px] text-slate-400 border-t border-slate-50 dark:border-charcoal-800/50 pt-3">
            Hillsborough Regional Dispatch active.
          </div>
        </div>
      </div>

      {/* Local Solutions lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left: Key local solutions */}
        <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 lg:p-8 rounded-3xl space-y-4 shadow-sm">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            Key Local Logistics Solutions
          </h3>
          <ul className="space-y-3 pt-2">
            {city.keyServices.map((service, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                <span>{service} in the {city.name} Metropolitan area</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Local sectors serviced */}
        <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 p-6 lg:p-8 rounded-3xl space-y-4 shadow-sm">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            Serviced Local Sectors
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {city.keyIndustries.map((ind, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-charcoal-950 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-charcoal-800"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Local landmark-specific FAQ */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Localized {city.name} FAQ
          </h3>
          <p className="text-xs text-slate-400">
            Specific operational details regarding key complexes and routes within {city.name}.
          </p>
        </div>

        <div className="space-y-3">
          {city.localFaqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx} className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-slate-800 dark:text-slate-200 font-semibold text-xs cursor-pointer hover:bg-slate-50/50"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                    {faq.q}
                  </span>
                  <span>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-charcoal-850">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
