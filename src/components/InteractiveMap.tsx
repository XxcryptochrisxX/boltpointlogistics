import { useState } from 'react';
import { CITIES } from '../data';
import { CityItem } from '../types';
import { MapPin, Shield, CheckCircle, Navigation, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveMapProps {
  onNavigate: (page: string) => void;
}

export default function InteractiveMap({ onNavigate }: InteractiveMapProps) {
  const [selectedCity, setSelectedCity] = useState<CityItem>(CITIES[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="service-map-interactive">
      {/* Map visualizer: 7 columns */}
      <div className="lg:col-span-7 bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[450px]">
        {/* Background grid accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />
        
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300 border border-brand-100/50 dark:border-brand-900/30 mb-3">
            <Shield className="w-3.5 h-3.5 text-accent-500" />
            Active Coverage Area
          </span>
          <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
            Florida Logistics Hubs
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md">
            Click on any metropolitan logistics hub to view localized same-day courier coverage, key industries, and service details.
          </p>
        </div>

        {/* Dynamic Stylized Florida SVG */}
        <div className="flex-1 flex items-center justify-center py-6 relative">
          <svg
            viewBox="0 0 500 400"
            className="w-full max-w-[420px] h-auto drop-shadow-md select-none"
            aria-label="Map of Boltpoint Logistics Florida Service Coverage"
          >
            {/* Outline of Florida Peninsula (Stylized Vector) */}
            <path
              d="M 120 40 C 130 40, 180 45, 240 50 C 270 52, 330 60, 360 62 C 370 70, 375 80, 380 90 C 375 100, 350 110, 335 125 C 330 140, 335 160, 345 180 C 355 200, 368 220, 380 240 C 390 260, 400 280, 402 295 C 404 310, 395 320, 385 325 C 370 322, 360 310, 350 300 C 335 280, 310 250, 290 230 C 275 220, 255 210, 240 200 C 220 190, 200 185, 180 180 C 175 170, 180 160, 185 150 C 175 145, 160 155, 150 165 C 145 155, 150 145, 155 135 C 140 130, 130 135, 120 140 C 115 130, 120 120, 125 110 C 115 100, 100 105, 90 110 L 90 40 Z"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
              className="dark:stroke-charcoal-700 opacity-20"
            />
            
            {/* Colored Active Region (Gulf Coast + Central Florida Corridor) */}
            <path
              d="M 140 100 Q 180 110, 200 120 T 260 130 Q 300 140, 330 145 L 340 180 Q 320 190, 280 195 T 230 190 Q 200 180, 180 180 T 150 165 Z"
              className="fill-brand-50/40 dark:fill-brand-950/20 stroke-brand-200 dark:stroke-brand-900/40"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            
            {/* Coastal Connector path (Tampa to Sarasota corridor) */}
            <path
              d="M 155 135 Q 160 170, 175 210 Q 180 230, 185 250"
              className="fill-none stroke-brand-500/25 dark:stroke-brand-400/20"
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* I-4 Corridor Path (Tampa to Orlando) */}
            <path
              d="M 155 135 Q 220 130, 290 120"
              className="fill-none stroke-brand-500/25 dark:stroke-brand-400/20"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* City pins / targets */}
            {CITIES.map((city) => {
              // Map Coordinates (custom visual scale for SVG container 500x400)
              let x = 150;
              let y = 140;

              if (city.id === 'tampa') { x = 175; y = 145; }
              else if (city.id === 'orlando') { x = 290; y = 120; }
              else if (city.id === 'st-petersburg') { x = 148; y = 155; }
              else if (city.id === 'clearwater') { x = 142; y = 135; }
              else if (city.id === 'lakeland') { x = 225; y = 138; }
              else if (city.id === 'sarasota') { x = 188; y = 215; }
              else if (city.id === 'bradenton') { x = 180; y = 185; }

              const isSelected = selectedCity.id === city.id;

              return (
                <g key={city.id} className="cursor-pointer" onClick={() => setSelectedCity(city)}>
                  {/* Glowing outer animation for selected pin */}
                  {isSelected && (
                    <circle
                      cx={x}
                      cy={y}
                      r="16"
                      className="fill-brand-500/20 animate-ping"
                    />
                  )}
                  {/* Pin Base Hover/Click Circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? "9" : "6"}
                    className={`${
                      isSelected
                        ? 'fill-brand-600 dark:fill-brand-400'
                        : 'fill-slate-400/80 hover:fill-brand-400 dark:fill-charcoal-600 dark:hover:fill-brand-500'
                    } transition-all duration-300`}
                  />
                  
                  {/* Inner orange core for active hub */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? "4.5" : "2.5"}
                    className="fill-accent-500"
                  />
                  
                  {/* Styled label container on hover or if selected */}
                  <g transform={`translate(${x + 10}, ${y - 4})`}>
                    <rect
                      x="-4"
                      y="-11"
                      width={city.name.length * 7.5 + 12}
                      height="18"
                      rx="4"
                      className={`${
                        isSelected
                          ? 'fill-brand-900 text-white dark:fill-brand-500'
                          : 'fill-slate-100 dark:fill-charcoal-800'
                      } opacity-90 transition-all duration-200`}
                    />
                    <text
                      x="2"
                      y="2"
                      fontSize="9.5"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      className={`${
                        isSelected ? 'fill-white' : 'fill-slate-800 dark:fill-slate-200'
                      }`}
                    >
                      {city.name}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="border-t border-slate-100 dark:border-charcoal-800/80 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-brand-600 dark:bg-brand-400 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            </span>
            <span className="text-slate-600 dark:text-slate-300 font-medium">Metropolitan Logistics Hub</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-6 border-t-2 border-dashed border-brand-300 dark:border-brand-800" />
            <span className="text-slate-500 dark:text-slate-400">Regular Logistics Corridor</span>
          </div>
        </div>
      </div>

      {/* Selected City Details: 5 columns */}
      <div className="lg:col-span-5 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCity.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 shadow-sm flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display text-3xl font-extrabold text-brand-900 dark:text-brand-300">
                    {selectedCity.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mt-0.5">
                    {selectedCity.county}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-950/40 flex items-center justify-center text-brand-600 dark:text-brand-400">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm mt-4 leading-relaxed">
                {selectedCity.intro}
              </p>

              {/* Local key services list */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Key Local Logistics Solutions
                </h5>
                <ul className="space-y-2">
                  {selectedCity.keyServices.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Local sectors served */}
              <div className="mt-5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Sectors Serviced
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCity.keyIndustries.map((ind, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-charcoal-800 text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-charcoal-700/40"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-charcoal-800/80 flex flex-col gap-3">
              <button
                id={`btn-quote-map-${selectedCity.id}`}
                onClick={() => onNavigate(`quote`)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-800 hover:bg-brand-900 text-white dark:bg-brand-600 dark:hover:bg-brand-700 font-medium rounded-xl shadow-md transition-all duration-200 group cursor-pointer"
              >
                Request Quote in {selectedCity.name}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                id={`btn-landing-map-${selectedCity.id}`}
                onClick={() => onNavigate(`city/${selectedCity.slug}`)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-50 hover:bg-slate-100 dark:bg-charcoal-800/50 dark:hover:bg-charcoal-800 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-charcoal-700 font-medium rounded-xl transition-all duration-200 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                View Tampa Bay Area Landing Page
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
