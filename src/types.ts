export type ActivePage =
  | 'home'
  | 'services'
  | 'about'
  | 'coverage'
  | 'industries'
  | 'quote'
  | 'driver'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'terms'
  | string; // For dynamic paths like service/:id or city/:id

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  benefits: string[];
  features: string[];
  faqs: { q: string; a: string }[];
}

export interface IndustryItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  requirements: string[];
}

export interface CityItem {
  id: string;
  name: string;
  slug: string;
  county: string;
  metaDesc: string;
  tagline: string;
  intro: string;
  keyServices: string[];
  keyIndustries: string[];
  localFaqs: { q: string; a: string }[];
  coordinates: { lat: number; lng: number };
}

export interface QuoteRequestData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  serviceType: string;
  pickupAddress: string;
  pickupCity: string;
  deliveryAddress: string;
  deliveryCity: string;
  urgency: 'immediate' | 'same-day' | 'scheduled' | 'economy';
  cargoType: string;
  weight: string;
  dimensions: string;
  specialInstructions: string;
}

export interface DriverApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  vehicleType: string;
  hasInsurance: boolean;
  cleanMVR: boolean;
  experienceYears: string;
  additionalInfo: string;
}

export interface ContactMessageData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
