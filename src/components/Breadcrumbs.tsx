import React from 'react';
import { ActivePage } from '../types';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  activePage: ActivePage;
  onNavigate: (page: string) => void;
  serviceTitle?: string;
  cityTitle?: string;
}

export default function Breadcrumbs({ activePage, onNavigate, serviceTitle, cityTitle }: BreadcrumbsProps) {
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDynamicService = activePage.startsWith('service/');
  const isDynamicCity = activePage.startsWith('city/');

  let pageName = activePage;
  if (isDynamicService) pageName = 'Services';
  else if (isDynamicCity) pageName = 'Coverage Area';

  const formatTitle = (name: string) => {
    if (name === 'faq') return 'FAQ';
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <nav className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium py-3 px-4 bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-2xl w-fit shadow-sm" aria-label="Breadcrumb">
      <button
        onClick={handleHomeClick}
        className="flex items-center gap-1 text-slate-500 hover:text-brand-900 dark:text-slate-400 dark:hover:text-brand-300 transition-colors cursor-pointer"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      <ChevronRight className="w-3.5 h-3.5 shrink-0" />

      {isDynamicService ? (
        <>
          <button
            onClick={() => onNavigate('services')}
            className="text-slate-500 hover:text-brand-900 dark:text-slate-400 dark:hover:text-brand-300 transition-colors cursor-pointer"
          >
            Services
          </button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-brand-900 dark:text-brand-300 font-bold truncate">
            {serviceTitle || 'Service Detail'}
          </span>
        </>
      ) : isDynamicCity ? (
        <>
          <button
            onClick={() => onNavigate('coverage')}
            className="text-slate-500 hover:text-brand-900 dark:text-slate-400 dark:hover:text-brand-300 transition-colors cursor-pointer"
          >
            Coverage Area
          </button>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-brand-900 dark:text-brand-300 font-bold truncate">
            {cityTitle || 'City Detail'}
          </span>
        </>
      ) : (
        <span className="text-brand-900 dark:text-brand-300 font-bold">
          {formatTitle(pageName)}
        </span>
      )}
    </nav>
  );
}
