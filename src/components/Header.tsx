import { useState, useEffect } from 'react';
import { SERVICES, INDUSTRIES } from '../data';
import { ActivePage } from '../types';
import { Zap, MapPin, Sun, Moon, Menu, X, ChevronDown, Award, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: string) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize theme from system preference or localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('boltpoint-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Monitor page scroll to add frosted-glass backdrop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('boltpoint-theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('boltpoint-theme', 'light');
    }
  };

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Alert */}
      <div className="bg-brand-950 text-white text-[11px] py-1.5 px-4 flex justify-between items-center border-b border-brand-900/40 relative z-50">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full font-medium">
          <span className="bg-accent-500 text-white font-extrabold px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider shrink-0">STAT</span>
          <span className="truncate">Florida's Premium 24/7 Medical & Enterprise Logistics Network — Direct Dispatch Desk Active</span>
          <div className="hidden md:flex items-center gap-4 ml-auto font-semibold">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-400" /> HIPAA / OSHA Compliant
            </span>
            <a href="tel:+18134219894" className="flex items-center gap-1 text-amber-400 hover:underline">
              <Phone className="w-3 h-3" /> 813-421-9894
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-charcoal-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-charcoal-800/80 py-3'
            : 'bg-white dark:bg-charcoal-900 py-4 border-b border-slate-50 dark:border-charcoal-900/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand: Image logo */}
          <div
            className="flex items-center cursor-pointer select-none group"
            onClick={() => handleNavClick('home')}
            id="header-brand-logo-main"
          >
            <div className="bg-white dark:bg-white px-2 py-0.5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-200/50 flex items-center justify-center h-16 transition-transform group-hover:scale-[1.02]">
              <img
                src="/boltpoint_logo.jpg"
                alt="Boltpoint Logistics"
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                activePage === 'home'
                  ? 'text-brand-800 bg-brand-50/50 dark:text-brand-300 dark:bg-brand-950/20'
                  : 'text-slate-600 hover:text-brand-800 dark:text-slate-300 dark:hover:text-brand-400'
              } cursor-pointer`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-1 ${
                  activePage.startsWith('service')
                    ? 'text-brand-800 bg-brand-50/50 dark:text-brand-300 dark:bg-brand-950/20'
                    : 'text-slate-600 hover:text-brand-800 dark:text-slate-300 dark:hover:text-brand-400'
                } cursor-pointer`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Card */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-80 bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-2xl p-3 shadow-xl z-50 grid grid-cols-1 gap-1"
                >
                  <div className="px-3 py-1.5 border-b border-slate-50 dark:border-charcoal-800/50 mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Courier Specialties</span>
                  </div>
                  {SERVICES.map((serv) => (
                    <button
                      key={serv.id}
                      onClick={() => handleNavClick(`service/${serv.id}`)}
                      className="text-left w-full px-3 py-2 text-xs font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-charcoal-850 text-slate-700 dark:text-slate-200 flex flex-col cursor-pointer"
                    >
                      <span className="font-semibold text-brand-900 dark:text-brand-300">{serv.title}</span>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500 truncate">{serv.shortDesc}</span>
                    </button>
                  ))}
                  <div className="border-t border-slate-50 dark:border-charcoal-800/50 mt-1 pt-1.5 px-3">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-xs font-bold text-brand-800 dark:text-brand-400 hover:underline flex items-center gap-1 w-full"
                    >
                      View All Logistics Services &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIndustriesDropdownOpen(true)}
                onClick={() => setIndustriesDropdownOpen(!industriesDropdownOpen)}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-1 ${
                  activePage === 'industries'
                    ? 'text-brand-800 bg-brand-50/50 dark:text-brand-300 dark:bg-brand-950/20'
                    : 'text-slate-600 hover:text-brand-800 dark:text-slate-300 dark:hover:text-brand-400'
                } cursor-pointer`}
              >
                Industries
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Card */}
              {industriesDropdownOpen && (
                <div
                  onMouseLeave={() => setIndustriesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-72 bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-2xl p-3 shadow-xl z-50 grid grid-cols-1 gap-1"
                >
                  <div className="px-3 py-1.5 border-b border-slate-50 dark:border-charcoal-800/50 mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sectors Serviced</span>
                  </div>
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => handleNavClick('industries')}
                      className="text-left w-full px-3 py-2 text-xs font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-charcoal-850 text-slate-700 dark:text-slate-200 flex flex-col cursor-pointer"
                    >
                      <span className="font-semibold text-brand-900 dark:text-brand-300">{ind.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('coverage')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                activePage === 'coverage'
                  ? 'text-brand-800 bg-brand-50/50 dark:text-brand-300 dark:bg-brand-950/20'
                  : 'text-slate-600 hover:text-brand-800 dark:text-slate-300 dark:hover:text-brand-400'
              } cursor-pointer`}
            >
              Coverage Map
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                activePage === 'about'
                  ? 'text-brand-800 bg-brand-50/50 dark:text-brand-300 dark:bg-brand-950/20'
                  : 'text-slate-600 hover:text-brand-800 dark:text-slate-300 dark:hover:text-brand-400'
              } cursor-pointer`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                activePage === 'faq'
                  ? 'text-brand-800 bg-brand-50/50 dark:text-brand-300 dark:bg-brand-950/20'
                  : 'text-slate-600 hover:text-brand-800 dark:text-slate-300 dark:hover:text-brand-400'
              } cursor-pointer`}
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                activePage === 'contact'
                  ? 'text-brand-800 bg-brand-50/50 dark:text-brand-300 dark:bg-brand-950/20'
                  : 'text-slate-600 hover:text-brand-800 dark:text-slate-300 dark:hover:text-brand-400'
              } cursor-pointer`}
            >
              Contact
            </button>
          </nav>

          {/* Action Box: Toggles & CTAs */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-100 dark:border-charcoal-800/80 hover:bg-slate-50 dark:hover:bg-charcoal-800 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
              aria-label="Toggle Dark/Light Mode"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Dispatch Call CTA */}
            <button
              onClick={() => handleNavClick('quote')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 bg-brand-900 hover:bg-brand-950 dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Request a Quote
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-slate-100 dark:border-charcoal-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-charcoal-800 transition-all cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-[96px] bg-white dark:bg-charcoal-900 border-b border-slate-100 dark:border-charcoal-800/80 shadow-lg z-30 overflow-y-auto max-h-[calc(100vh-100px)] p-6 space-y-6"
          >
            {/* Nav list */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left w-full px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-charcoal-800 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="text-left w-full px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-charcoal-800 cursor-pointer"
              >
                Specialty Services
              </button>
              <button
                onClick={() => handleNavClick('industries')}
                className="text-left w-full px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-charcoal-800 cursor-pointer"
              >
                Sectors Served
              </button>
              <button
                onClick={() => handleNavClick('coverage')}
                className="text-left w-full px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-charcoal-800 cursor-pointer"
              >
                Coverage Area
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left w-full px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-charcoal-800 cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="text-left w-full px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-charcoal-800 cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left w-full px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-charcoal-800 cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            {/* Quick Actions inside mobile menu */}
            <div className="border-t border-slate-100 dark:border-charcoal-800/80 pt-6 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('quote')}
                className="w-full py-3 bg-brand-900 text-white dark:bg-brand-600 font-semibold text-xs rounded-xl shadow-md text-center cursor-pointer"
              >
                Request a Quote
              </button>
              <button
                onClick={() => handleNavClick('driver')}
                className="w-full py-3 bg-slate-50 dark:bg-charcoal-800 text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-charcoal-700 font-semibold text-xs rounded-xl text-center cursor-pointer"
              >
                Become a Driver
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
