import { useState, useEffect } from 'react';
import { ActivePage } from './types';
import { SERVICES, CITIES } from './data';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import SEOHead from './components/SEOHead';

// Page Imports
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import ServiceDetail from './components/pages/ServiceDetail';
import Industries from './components/pages/Industries';
import About from './components/pages/About';
import Coverage from './components/pages/Coverage';
import CityLanding from './components/pages/CityLanding';
import Quote from './components/pages/Quote';
import Driver from './components/pages/Driver';
import FAQ from './components/pages/FAQ';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';
import NotFound from './components/pages/NotFound';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  // Lightweight native hash router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    // Initialize
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    setActivePage(page);
  };

  // Helper: Get active SEO settings
  const getPageSEO = () => {
    const isDynamicService = activePage.startsWith('service/');
    const isDynamicCity = activePage.startsWith('city/');

    if (isDynamicService) {
      const serviceId = activePage.split('/')[1];
      const service = SERVICES.find((s) => s.id === serviceId);
      return {
        title: service ? `${service.title} Courier` : 'Specialty Courier Service',
        description: service ? service.shortDesc : 'Highly secure, compliant, and on-time specialty transport lines across Florida.',
        canonical: `/${activePage}`,
      };
    }

    if (isDynamicCity) {
      const citySlug = activePage.split('/')[1];
      const city = CITIES.find((c) => c.slug === citySlug);
      return {
        title: city ? `${city.name} FL Same-Day Courier` : 'Local Same-Day Courier Hub',
        description: city ? city.metaDesc : 'Fast, reliable, HIPAA-compliant courier and Same-Day express shipping services in Florida.',
        canonical: `/${activePage}`,
      };
    }

    switch (activePage) {
      case 'home':
        return {
          title: 'Tampa & Orlando 24/7 Enterprise Medical Courier',
          description: "Boltpoint Logistics is Florida's premier 24/7 medical courier and enterprise logistics agency. HIPAA/OSHA specimen certified, same-day STAT courier, and airside airport cargo.",
          canonical: '/',
        };
      case 'services':
        return {
          title: 'Specialty Courier Logistics Lines',
          description: "Explore Boltpoint Logistics' 9 core logistics divisions including medical specimens, laboratory, legal filings, scheduled routes, and white-glove setup.",
          canonical: '/services',
        };
      case 'about':
        return {
          title: 'About Our Firm & Compliance Vetting',
          description: "About Boltpoint Logistics LLC. Explore our HIPAA/OSHA compliance audits, elite independent driver network, and Florida logistics hub coordinates.",
          canonical: '/about',
        };
      case 'coverage':
        return {
          title: 'Active Florida Coverage Area Hubs',
          description: "Boltpoint Logistics services Hillsborough, Pinellas, Orange, Polk, Sarasota, and Manatee counties with 24/7 dispatch center routing.",
          canonical: '/coverage',
        };
      case 'industries':
        return {
          title: 'Sectors & Industries Serviced',
          description: "We provide compliance-vetted same-day courier solutions for hospital networks, pharmacies, lawyers, banking centers, and industrial manufacturers.",
          canonical: '/industries',
        };
      case 'quote':
        return {
          title: 'Request Courier Shipping Rates',
          description: "Provide your pickup and delivery hubs to request a custom courier routing quote and live dispatch setup.",
          canonical: '/quote',
        };
      case 'driver':
        return {
          title: 'Become a Driver Partner',
          description: "Apply to join our Florida courier fleet. Elite scheduled routes, competitive contract rates, and week-over-week direct deposits.",
          canonical: '/driver',
        };
      case 'faq':
        return {
          title: 'Operational Support & FAQ Desk',
          description: "Get clear answers regarding biological specimen transit compliance, same-day delivery speeds, tracking telemetry, and fleet sizing.",
          canonical: '/faq',
        };
      case 'contact':
        return {
          title: 'Connect with Central Dispatch Desk',
          description: "Contact our 24/7 Florida central dispatch operations desk. Open constant for STAT medical courier collections and route adjustments.",
          canonical: '/contact',
        };
      case 'privacy':
        return {
          title: 'Privacy Policy & HIPAA Statement',
          description: "Boltpoint Logistics HIPAA statement and client database confidentiality protections.",
          canonical: '/privacy',
        };
      case 'terms':
        return {
          title: 'Terms of Service & Carriage Regulations',
          description: "Read standard carriage regulations, vehicle requirements, and contract credit details.",
          canonical: '/terms',
        };
      default:
        return {
          title: 'Link Not Located',
          description: "We couldn't locate that specific link. Return to the homepage of Boltpoint Logistics.",
          canonical: '/404',
        };
    }
  };

  const seo = getPageSEO();

  // Dynamic Page Content Renderer
  const renderPageContent = () => {
    const isDynamicService = activePage.startsWith('service/');
    const isDynamicCity = activePage.startsWith('city/');

    if (isDynamicService) {
      const serviceId = activePage.split('/')[1];
      return <ServiceDetail serviceId={serviceId} onNavigate={handleNavigate} />;
    }

    if (isDynamicCity) {
      const citySlug = activePage.split('/')[1];
      return <CityLanding citySlug={citySlug} onNavigate={handleNavigate} />;
    }

    switch (activePage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'coverage':
        return <Coverage onNavigate={handleNavigate} />;
      case 'industries':
        return <Industries onNavigate={handleNavigate} />;
      case 'quote':
        return <Quote />;
      case 'driver':
        return <Driver />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      default:
        return <NotFound onNavigate={handleNavigate} />;
    }
  };

  // Helper variables for Breadcrumbs formatting
  const getActiveServiceTitle = () => {
    if (activePage.startsWith('service/')) {
      const serviceId = activePage.split('/')[1];
      return SERVICES.find((s) => s.id === serviceId)?.title;
    }
    return undefined;
  };

  const getActiveCityTitle = () => {
    if (activePage.startsWith('city/')) {
      const citySlug = activePage.split('/')[1];
      return CITIES.find((c) => c.slug === citySlug)?.name;
    }
    return undefined;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 dark:bg-charcoal-950 dark:text-slate-100 selection:bg-brand-500/30">
      {/* 1. Technical SEO Tag Injections */}
      <SEOHead title={seo.title} description={seo.description} canonicalPath={seo.canonical} />

      {/* 2. Global Sticky Header & Navigation */}
      <Header activePage={activePage} onNavigate={handleNavigate} />

      {/* 3. Main Content Container */}
      <main className="flex-grow">
        
        {/* Dynamic Breadcrumbs Section (not displayed on Home page) */}
        {activePage !== 'home' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <Breadcrumbs
              activePage={activePage}
              onNavigate={handleNavigate}
              serviceTitle={getActiveServiceTitle()}
              cityTitle={getActiveCityTitle()}
            />
          </div>
        )}

        {/* Dynamic Inner Page Renderer */}
        <div className="relative">
          {renderPageContent()}
        </div>
      </main>

      {/* 4. Corporate Footnote Directory */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
