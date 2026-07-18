import { ServiceItem, IndustryItem, CityItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'medical-courier',
    title: 'Medical Courier Services',
    shortDesc: 'HIPAA-compliant transport of medical equipment, devices, clinical files, and sensitive specimens.',
    longDesc: 'Boltpoint Logistics is a trusted leader in medical courier services across Florida. We understand that medical transport requires the highest level of care, speed, and strict compliance with state and federal regulations. Our drivers are fully trained in OSHA, HIPAA, and biological specimen handling procedures.',
    iconName: 'Activity',
    benefits: [
      'Strict HIPAA & OSHA Compliance',
      'Climate-controlled cargo environments',
      'Real-time chain of custody scanning',
      '24/7/365 availability for urgent medical requests'
    ],
    features: [
      'Specimen transport logs with digital signature captures',
      'Temperature-monitored cooler bags and transport compartments',
      'Spill-kit equipped vehicles',
      'Direct-to-lab rapid dispatch routing'
    ],
    faqs: [
      { q: 'Are your drivers trained for medical deliveries?', a: 'Yes, all medical courier drivers undergo mandatory HIPAA, OSHA, and biohazard transport training annually.' },
      { q: 'Do you provide climate-controlled transit?', a: 'Absolutely. We use temperature-controlled coolers and monitored transport chambers to maintain the integrity of blood, tissue, and pharmaceutical items.' }
    ]
  },
  {
    id: 'laboratory',
    title: 'Laboratory Specimen Logistics',
    shortDesc: 'Time-critical transport of blood specimens, pathology, biopsies, and lab results.',
    longDesc: 'When clinical decisions hang in the balance, every minute counts. Our laboratory logistics division provides specialized routing and STAT deliveries for pathology labs, diagnostics providers, and blood banks. We maintain a meticulous chain of custody to prevent pre-analytical errors.',
    iconName: 'FlaskConical',
    benefits: [
      'STAT and scheduled daily routing services',
      'Zero-variance temperature management (Ambient, Refrigerated, Frozen)',
      'Barcode tracking at every handoff point',
      'Direct integration with laboratory dispatch desks'
    ],
    features: [
      'Validated cold chain equipment and indicators',
      'Dual-containment specimen safety protocols',
      'Emergency backup courier dispatch systems',
      'Comprehensive audit trails for accreditation compliance'
    ],
    faqs: [
      { q: 'How do you handle frozen specimens?', a: 'We utilize dry-ice transport units and validated liquid nitrogen shippers for cryogenic or deeply frozen specimens to guarantee temperature preservation.' },
      { q: 'Can you set up recurring daily specimen collections?', a: 'Yes, we specialize in scheduled route courier service, picking up from clinical offices at designated times and delivering directly to your testing facilities.' }
    ]
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy & Home Infusion Delivery',
    shortDesc: 'Secure, reliable home delivery of prescriptions, specialty medications, and infusion equipment.',
    longDesc: 'We bridge the gap between pharmacies and patients by delivering life-saving specialty medications, home infusions, and long-term care pharmacy supplies. Our polite, professional couriers respect patient privacy and provide professional delivery directly to homes, clinics, and care facilities.',
    iconName: 'Pills',
    benefits: [
      'Direct-to-patient bedside or home delivery',
      'Confidential and secure handling (no drug indicators on packaging)',
      'Proof of delivery with patient or caregiver signatures',
      'Delivery window notifications to reduce missed handoffs'
    ],
    features: [
      'Coordinated scheduled home delivery slots',
      'Strict verification protocols for restricted substances',
      'Refrigerated storage options for biologics and insulin',
      'Dedicated support line for pharmaceutical partners'
    ],
    faqs: [
      { q: 'Do you deliver narcotics or restricted substances?', a: 'Yes, we are licensed to deliver controlled prescription drugs, utilizing double-verification, tamper-evident packaging, and strict identification validation at the destination.' },
      { q: 'What happens if a patient is not home?', a: 'We never leave medications unattended. If a patient is unavailable, we contact them/the pharmacy and safely return the package to the pharmacy or reschedule as directed.' }
    ]
  },
  {
    id: 'legal',
    title: 'Legal Courier & Court Filings',
    shortDesc: 'Highly confidential, on-time delivery of legal files, evidence, court filings, and contracts.',
    longDesc: 'Legal processes move on strict deadlines. Boltpoint Logistics offers dedicated couriers who understand court filing procedures, judge chamber protocols, and the absolute confidentiality required for legal correspondence. We ensure your briefs, evidence, and contracts arrive on time.',
    iconName: 'Scale',
    benefits: [
      'Absolute confidentiality and security',
      'Experienced couriers familiar with clerk of court systems',
      'Real-time electronic proof of filing returned to you instantly',
      'Emergency immediate filing dispatch'
    ],
    features: [
      'Secure lockbox transit containers',
      'Direct hand-to-hand signature chains',
      'Immediate return trip transport for signed counter-documents',
      'Stamping and filing verification at local courthouse desks'
    ],
    faqs: [
      { q: 'Can you handle courthouse filings in Florida?', a: 'Yes. Our couriers are well-versed in the specific local rules for filing documents in federal, state, and county clerk offices.' },
      { q: 'Is there a chain of custody record for legal documents?', a: 'Yes, every pickup and delivery is documented electronically with time-stamped location tags and digital signatures.' }
    ]
  },
  {
    id: 'same-day',
    title: 'Same-Day Urgent Courier',
    shortDesc: 'Immediate, door-to-door hot-shot delivery for critical parts, documents, and cargo.',
    longDesc: 'When the line is down or a deal is on the table, our same-day express service is the solution. We dispatch a dedicated courier immediately to collect your package and drive directly to the destination without any intermediate stops. This is the fastest shipping option available.',
    iconName: 'Zap',
    benefits: [
      'Direct, dedicated courier dispatch with no stops in between',
      'Pickup within 45 to 60 minutes across our coverage zones',
      'Ideal for manufacturing parts, IT hardware, and critical files',
      'Immediate notifications upon dispatch, pickup, and delivery'
    ],
    features: [
      'STAT single-custody vehicle routing',
      'Varying vehicle sizes from sedans to cargo vans',
      'Continuous GPS path tracking',
      'Direct communication channel with your courier'
    ],
    faqs: [
      { q: 'What is your average same-day delivery speed?', a: 'Our same-day urgent deliveries go directly from pickup to dropoff. Typical times range from 45 minutes to 3 hours depending on the driving distance.' },
      { q: 'Are there any size limitations for same-day delivery?', a: 'We accommodate anything from small envelopes to multi-box cargo van loads. Please specify load volume during booking.' }
    ]
  },
  {
    id: 'scheduled-routes',
    title: 'Scheduled Routes & Sweeps',
    shortDesc: 'Optimized recurring logistics for daily post office runs, bank deposits, and interoffice transfers.',
    longDesc: 'Keep your business running like clockwork with our scheduled routing. We establish pre-arranged, optimized route times to handle your daily mail pickup, recurring multi-site deliveries, bank runs, or laboratory collections. This helps you lower operational overhead and secure consistent service.',
    iconName: 'CalendarRange',
    benefits: [
      'Substantial cost savings over single-on-demand requests',
      'Dedicated couriers assigned to your route for familiarity',
      'Highly predictable pick-up and delivery schedules',
      'Customized reporting and monthly auditing logs'
    ],
    features: [
      'Route optimization software ensuring the fastest path',
      'Automated daily check-ins and check-outs',
      'Flexible scheduling adjustments for holidays',
      'Multi-stop, hub-and-spoke delivery designs'
    ],
    faqs: [
      { q: 'Can we change our route schedule?', a: 'Yes, route schedules are flexible and can be customized or scaled with our dispatch coordinators as your business needs change.' },
      { q: 'How is pricing calculated for scheduled routes?', a: 'Scheduled routes enjoy preferred flat-rate pricing based on frequency, stops, and distance, which is significantly lower than on-demand rates.' }
    ]
  },
  {
    id: 'white-glove',
    title: 'White-Glove Delivery Services',
    shortDesc: 'Premium handling, inside delivery, and setup for high-value equipment and luxury assets.',
    longDesc: 'For cargo that requires exceptional care, our white-glove service goes beyond the loading dock. We provide inside delivery, unpacking, placing, and clean-up of high-value items, medical equipment, servers, and high-end goods. We handle every detail so your recipient doesn’t have to lift a finger.',
    iconName: 'ShieldAlert',
    benefits: [
      'Inside placement, debris removal, and setup',
      'Enhanced cargo insurance options for expensive assets',
      'Two-man delivery teams available for heavy or complex pieces',
      'Trained in handling sensitive laboratory or IT racks'
    ],
    features: [
      'Liftgate-equipped box trucks and sprinters',
      'Padded blankets, straps, and protective padding',
      'Careful site inspections before unpacking',
      'Post-setup verification checklist completion'
    ],
    faqs: [
      { q: 'Do you assemble furniture or install medical gear?', a: 'We perform placement, basic assembly, and leveling. For technical clinical calibration, we work in tandem with your field engineers.' },
      { q: 'Are your vehicles climate-controlled for luxury items?', a: 'Yes, we have climate-controlled vans to protect fine wood, art, delicate electronics, or chemical compounds from extreme Florida heat.' }
    ]
  },
  {
    id: 'airport-cargo',
    title: 'Airport Cargo TSA Transport',
    shortDesc: 'TSA-cleared transport of cargo, next-flight-out (NFO) shipping, and airport tender services.',
    longDesc: 'Accelerate your supply chain nationally by combining our local couriers with air transit. We are TSA-certified to tender and retrieve cargo directly from airport cargo facilities across Florida. We handle all paperwork and security protocols, making air shipping seamless.',
    iconName: 'Plane',
    benefits: [
      'TSA-certified drivers for airport cargo access',
      'Next-Flight-Out (NFO) coordination and delivery',
      'Immediate recovery from airport cargo bays upon flight landing',
      'Customs documentation handoff support'
    ],
    features: [
      'Direct service to TPA, MCO, SRQ, and PIE airports',
      'Tender-to-flight tracking and documentation scans',
      'STA security cleared personnel',
      'Cross-dock cargo consolidation where needed'
    ],
    faqs: [
      { q: 'Are your drivers TSA-certified?', a: 'Yes, our airport division couriers hold active TSA Known Shipper certifications and STA credentials to access airside cargo hubs.' },
      { q: 'Which Florida airports do you service?', a: 'We service Tampa International (TPA), Orlando International (MCO), St. Pete-Clearwater (PIE), Sarasota-Bradenton (SRQ), and surrounding municipal hubs.' }
    ]
  },
  {
    id: 'interoffice-mail',
    title: 'Interoffice Mail & Document Exchange',
    shortDesc: 'Seamless transit of mail, documents, and inventory between multi-site corporate offices.',
    longDesc: 'Connect your corporate campus or branch offices with a secure document exchange. We provide scheduled internal mail deliveries, linking administrative offices with clinics, banks, or manufacturing hubs. This maintains internal workflow speed and security.',
    iconName: 'Mail',
    benefits: [
      'Links branch banks, clinics, and offices daily',
      'Secure transit bags with tamper-evident serial seals',
      'Reduces postage costs and internal sorting overhead',
      'Predictable daily mailroom dropoff schedules'
    ],
    features: [
      'Color-coded office routing bags',
      'Daily sorting, transport, and delivery loops',
      'Digital scanning showing arrival at each office',
      'Dedicated multi-site courier managers'
    ],
    faqs: [
      { q: 'How often can you exchange mail between our sites?', a: 'We can configure multiple sweeps daily (e.g., morning and afternoon runs) depending on how quickly you need files processed.' },
      { q: 'Is this service secure for human resource files?', a: 'Yes. We utilize locked security totes and trackable seal tags to ensure confidential human resource, financial, or student files remain uncompromised.' }
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    title: 'Healthcare & Hospital Networks',
    desc: 'Connecting hospitals, clinical labs, and physicians with seamless logistics. Fully compliant with HIPAA and biohazard regulations.',
    iconName: 'Activity',
    requirements: [
      'HIPAA and OSHA compliance certificate',
      'Biological specimen transport capability',
      '24/7/365 availability for emergent STAT cases',
      'Sub-zero cold-chain transport controls'
    ]
  },
  {
    id: 'pharmaceuticals',
    title: 'Pharmacies & Specialty Drug Distributors',
    desc: 'Reliable, secure home infusions and specialty drug transport, maintaining strict temperature protocols and verifying patient IDs.',
    iconName: 'Pills',
    requirements: [
      'DEA compliance and secure chain-of-custody controls',
      'Refrigerated storage units (2-8°C)',
      'Direct home delivery options with signature capture',
      'Restricted substance double-witness validation'
    ]
  },
  {
    id: 'legal-firms',
    title: 'Law Firms & Corporate Legal Departments',
    desc: 'Time-critical document delivery and courthouse filing sweeps. We ensure briefs, legal evidence, and client contracts are secured and processed.',
    iconName: 'Scale',
    requirements: [
      'Proof-of-filing court stamping confirmation',
      'Locked, fire-resistant security transport boxes',
      'Direct hand-to-hand signature chains',
      'Strict non-disclosure agreements for all couriers'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Aerospace Parts',
    desc: 'On-demand transport of critical machinery components, aircraft-on-ground (AOG) parts, and technology equipment.',
    iconName: 'Cpu',
    requirements: [
      'Cargo vans and heavy-load sprinters',
      'TSA airport cargo clearance for air shipment tender',
      'Immediate hot-shot delivery dispatching within 45 mins',
      'Continuous real-time GPS tracking for inventory'
    ]
  },
  {
    id: 'finance-banking',
    title: 'Banking & Financial Institutions',
    desc: 'Scheduled sweeps of lockboxes, deposit transport, interoffice mail, and critical document transfers with complete audit trails.',
    iconName: 'DollarSign',
    requirements: [
      'Bonded couriers with comprehensive background checks',
      'Tamper-evident, numbered security bag routing',
      'Consistent morning/evening route schedules',
      'Daily multi-branch cash/document logistics'
    ]
  }
];

export const CITIES: CityItem[] = [
  {
    id: 'tampa',
    name: 'Tampa',
    slug: 'tampa',
    county: 'Hillsborough County',
    metaDesc: 'Boltpoint Logistics offers rapid, HIPAA-compliant courier services in Tampa, FL. Same-day medical delivery, lab logistics, legal filing courier, and express cargo transport.',
    tagline: "Tampa's Premium 24/7 Enterprise Courier & Medical Logistics",
    intro: "As Tampa's premier logistics provider, Boltpoint Logistics keeps Hillsborough County connected with rapid medical courier services, legal hand-deliveries, and same-day express shipping. Strategically positioned near Tampa International Airport and major medical hubs, our couriers are minutes away from any corporate, clinical, or manufacturing site.",
    keyServices: ['Medical Specimen Transport', 'TSA Airport Cargo Tender', 'Same-Day Urgent Delivery', 'Scheduled Multi-site Sweeps'],
    keyIndustries: ['Healthcare Networks', 'Biotechnology Labs', 'National Aerospace Partners', 'Corporate Law Firms'],
    localFaqs: [
      { q: 'How fast is your STAT courier service in Tampa?', a: 'Our local Tampa STAT couriers pick up packages within 45-60 minutes and drive directly to the destination with no intermediary stops.' },
      { q: 'Do you deliver to the USF Health and Tampa General Hospital complexes?', a: 'Yes, we service the entire Tampa medical district multiple times daily with climate-controlled specimen and prescription transport.' }
    ],
    coordinates: { lat: 27.9506, lng: -82.4572 }
  },
  {
    id: 'orlando',
    name: 'Orlando',
    slug: 'orlando',
    county: 'Orange County',
    metaDesc: 'Looking for professional courier services in Orlando, FL? Boltpoint Logistics provides medical, pharmacy, legal, and airport transport across Central Florida.',
    tagline: "Orlando's Reliable Scheduled Routes & White-Glove Logistics Hub",
    intro: "Connecting Central Florida's massive tourism, technology, and health networks, our Orlando division provides flawless scheduled logistics, specialized pharmacy routing, and white-glove setup. Operating near the Orlando International (MCO) cargo corridor, we are perfectly integrated to manage national next-flight-out shipments.",
    keyServices: ['White-Glove High-Value Delivery', 'Pharmacy & Home Infusion Care', 'Interoffice Document Exchanges', 'Airport Cargo Sweeps'],
    keyIndustries: ['Specialty Pharmacy Networks', 'Hospital Systems', 'High-Tech Manufacturing', 'Legal & Financial Services'],
    localFaqs: [
      { q: 'Can you tender cargo at Orlando International Airport (MCO)?', a: 'Yes, all of our Orlando couriers are TSA-certified Known Shipper drivers authorized to tender and recover air cargo.' },
      { q: 'Do you offer courier services to Lake Nona Medical City?', a: 'Daily. We provide regular loops and on-demand STAT services to pharmacies, research labs, and clinics in Lake Nona.' }
    ],
    coordinates: { lat: 28.5383, lng: -81.3792 }
  },
  {
    id: 'st-petersburg',
    name: 'St. Petersburg',
    slug: 'st-petersburg',
    county: 'Pinellas County',
    metaDesc: 'Expedited same-day courier services in St. Petersburg, FL. Reliable laboratory specimen transfer, hospital supply loops, and legal courier solutions by Boltpoint Logistics.',
    tagline: 'On-Time Document Exchange & Laboratory Specimen Couriers in St. Pete',
    intro: "From downtown St. Petersburg's active professional corridors to Pinellas County's medical plazas, Boltpoint Logistics delivers reliability on a schedule. We provide time-stamped legal courier collections, courthouse filings, and temperature-controlled laboratory diagnostic transfers daily.",
    keyServices: ['Court Filing Stamping Services', 'Clinical Specimen Cold-Chain', 'Same-Day Retail & Parts Transport', 'Daily Business Sweeps'],
    keyIndustries: ['Pinellas Legal Counsel', 'Independent Laboratories', 'Local Health Clinics', 'Financial Advisors'],
    localFaqs: [
      { q: 'Are your legal couriers familiar with the Pinellas County Clerk of Court?', a: 'Yes, we make daily document deliveries and filings at the St. Petersburg courthouse, confirming stamps and signatures.' },
      { q: 'What cold chain capabilities do you have in St. Pete?', a: 'We carry biological transport containers holding validated ambient, refrigerated, or dry ice temperatures for blood and pathology specimens.' }
    ],
    coordinates: { lat: 27.7676, lng: -82.6403 }
  },
  {
    id: 'clearwater',
    name: 'Clearwater',
    slug: 'clearwater',
    county: 'Pinellas County',
    metaDesc: 'Get professional courier services in Clearwater, FL. HIPAA-compliant same-day medical courier, legal document exchange, and scheduled corporate routing.',
    tagline: "Clearwater's Expert Scheduled Courier Sweeps & Corporate Document Exchange",
    intro: 'Operating across Clearwater and Pinellas County, Boltpoint Logistics provides business-grade courier runs designed for modern medical offices, legal groups, and service companies. We support operations along the Gulf Coast, ensuring your documents, parts, and clinical packages transit securely.',
    keyServices: ['Scheduled Interoffice Routes', 'Tamper-Evident Medical Courier', 'Same-Day Expedited Services', 'Next-Flight-Out Recovery'],
    keyIndustries: ['Long-Term Care Pharmacies', 'Clinical Research Centers', 'Local Businesses', 'Attorneys & Legal Aid'],
    localFaqs: [
      { q: 'Do you provide daily scheduled mail pickup in Clearwater?', a: 'Yes, we configure daily mailroom loops and sweeps connecting Clearwater businesses, branch banks, or multi-site clinical practices.' },
      { q: 'How do I schedule a courier pickup in Clearwater?', a: 'You can use our online Quote Request form or call our central 24/7 dispatch desk to request immediate pickup or set up recurring routes.' }
    ],
    coordinates: { lat: 27.9659, lng: -82.8001 }
  },
  {
    id: 'lakeland',
    name: 'Lakeland',
    slug: 'lakeland',
    county: 'Polk County',
    metaDesc: 'Lakeland courier services by Boltpoint Logistics. Reliable same-day logistics, manufacturing parts hot-shot delivery, and medical courier services in Polk County.',
    tagline: "Polk County's Core Hub for Manufacturing Hot-Shots & Industrial Logistics",
    intro: 'Strategically located along the high-velocity I-4 corridor in Polk County, our Lakeland logistics team is a critical partner to manufacturing facilities, distribution centers, and local medical groups. We excel in heavy-cargo van logistics, emergency parts delivery, and clinical specimen sweeps.',
    keyServices: ['Expedited Industrial Parts Hot-Shot', 'Corporate Lockbox Courier Loops', 'Clinical Diagnostic Routing', 'TSA Air Cargo Transport'],
    keyIndustries: ['Industrial & Manufacturing', 'Supply Chain & Distribution', 'Polk County Medical Networks', 'Local Commercial Enterprises'],
    localFaqs: [
      { q: 'Do you have larger cargo vans available for parts delivery in Lakeland?', a: 'Yes, we operate fuel-efficient sprinters and high-capacity cargo vans designed to transport heavy parts, medical equipment, or palletized materials.' },
      { q: 'Can you connect Lakeland facilities with Tampa or Orlando airports?', a: 'Absolutely. We provide regular airport freight and air-freight recovery runs connecting Polk County with TPA and MCO cargo bays daily.' }
    ],
    coordinates: { lat: 28.0395, lng: -81.9498 }
  },
  {
    id: 'sarasota',
    name: 'Sarasota',
    slug: 'sarasota',
    county: 'Sarasota County',
    metaDesc: 'Secure courier services in Sarasota, FL. Boltpoint Logistics delivers premium medical specimens, legal document transport, and same-day delivery across Sarasota County.',
    tagline: "Sarasota's Luxury White-Glove Courier & Premium Medical Transport",
    intro: 'Boltpoint Logistics delivers white-glove professionalism to Sarasota County, combining high-care logistics with prompt timelines. From luxury asset delivery and secure interoffice transfers to medical specimen routes connecting local health networks, our couriers are trained to the highest standards.',
    keyServices: ['White-Glove Inside Delivery', 'HIPAA Specimen Logistics', 'Legal Document Express Filing', 'Scheduled Bank Deposit Sweeps'],
    keyIndustries: ['Sarasota Medical Centers', 'Retirement Communities', 'Financial Advisory Firms', 'Boutique Legal Counsel'],
    localFaqs: [
      { q: 'Do you offer home medical equipment delivery in Sarasota?', a: 'Yes, we provide medical delivery services to home-infusion patients and elder care facilities, focusing on dignity, care, and proof of delivery.' },
      { q: 'How do you ensure the safety of valuable legal documents?', a: 'We employ tamper-resistant courier bags, locked cargo spaces, and a continuous electronic signature logging system.' }
    ],
    coordinates: { lat: 27.3364, lng: -82.5307 }
  },
  {
    id: 'bradenton',
    name: 'Bradenton',
    slug: 'bradenton',
    county: 'Manatee County',
    metaDesc: 'Need a fast courier in Bradenton, FL? Boltpoint Logistics handles secure medical samples, legal deliveries, and commercial courier routes across Manatee County.',
    tagline: 'Manatee County Same-Day Courier & Laboratory Courier Logistics',
    intro: 'Connecting Manatee County with the wider Tampa Bay supply chain, our Bradenton division provides secure, time-critical logistics. We support local doctor clinics, corporate offices, and lawyers with fast same-day courier dispatch and scheduled loops.',
    keyServices: ['Daily Clinical Diagnostic Routes', 'Same-Day Commercial Transport', 'Interoffice Document Exchanges', 'Local Courthouse Sweeps'],
    keyIndustries: ['Manatee Hospital Networks', 'Professional Services', 'Local Commercial Retailers', 'Attorneys & Legal Desks'],
    localFaqs: [
      { q: 'How do you price courier deliveries from Bradenton to Tampa?', a: 'Our rates are based on the selected vehicle size, shipment urgency (STAT vs. standard), and the mileage distance. Request an instant quote online for specific figures.' }
    ],
    coordinates: { lat: 27.4989, lng: -82.5748 }
  }
];

export const TESTIMONIALS = [
  {
    quote: "Boltpoint Logistics has transformed our laboratory's operations. Our specimen pickup sweeps are perfectly on time, and the climate-controlled handling has eliminated our warm-specimen rate. They are a true partner.",
    author: "Dr. Sarah Miller",
    title: "Director of Laboratory Services, Florida Diagnostic Networks",
    location: "Tampa, FL"
  },
  {
    quote: "In the legal profession, a missed filing window is catastrophic. Boltpoint Logistics has never missed a courthouse deadline for us. Their couriers are clean-cut, polite, and understand courtroom filing procedures.",
    author: "Richard Vance, Esq.",
    title: "Senior Partner, Vance & Howell Law Group",
    location: "St. Petersburg, FL"
  },
  {
    quote: "Our specialty pharmacy depends on Boltpoint to deliver sensitive home infusions directly to patients. The drivers are professional, compassionate, and always complete signature checks. Absolute peace of mind.",
    author: "Elena Rodriguez, PharmD",
    title: "Lead Pharmacist, CareOne Infusion Services",
    location: "Orlando, FL"
  },
  {
    quote: "We had a critical line breakdown at our Lakeland factory. Boltpoint dispatched a cargo van, collected our replacement hydraulic parts from Tampa, and got them to our team within 90 minutes. Unbelievable response.",
    author: "Marcus Chen",
    title: "VP of Operations, Gulf Coast Manufacturing",
    location: "Lakeland, FL"
  }
];

export const GLOBAL_FAQS = [
  {
    q: "How do I request a quote or book a courier shipment?",
    a: "You can easily request a rate estimate or schedule a courier online through our 'Request a Quote' form, or contact our 24/7/365 Central Dispatch Desk to talk to an agent immediately."
  },
  {
    q: "Are you fully insured and bonded?",
    a: "Yes. Boltpoint Logistics is fully licensed, insured, and bonded. We carry comprehensive general liability, cargo insurance, and auto liability to protect high-value, confidential, or sensitive shipments."
  },
  {
    q: "What types of vehicles are in your fleet?",
    a: "Our fleet consists of modern, fuel-efficient sedans (ideal for medical labs and legal letters), spacious cargo sprinters (designed for cargo boxes and medical equipment), and liftgate box trucks for larger commercial freight."
  },
  {
    q: "Can you provide recurring, scheduled routes for my business?",
    a: "Yes, our specialty is route optimization. We can configure daily interoffice transfers, bank sweeps, pharmacy home-delivery schedules, or medical laboratory pickups customized around your hours."
  },
  {
    q: "How does your tracking and proof of delivery work?",
    a: "We utilize real-time electronic chain-of-custody tracking. Every shipment is scanned at pickup, transfer, and drop-off. You receive immediate email or text confirmations with GPS coordinates and digital signature captures."
  }
];

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Boltpoint Logistics",
  "image": "https://boltpointlogistics.com/logo.png",
  "@id": "https://boltpointlogistics.com/#localbusiness",
  "url": "https://boltpointlogistics.com",
  "telephone": "+18134219894",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 N Tampa St, Suite 2500",
    "addressLocality": "Tampa",
    "addressRegion": "FL",
    "postalCode": "33602",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.9478,
    "longitude": -82.4588
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/boltpointlogistics",
    "https://www.linkedin.com/company/boltpointlogistics",
    "https://twitter.com/boltpointlogistics"
  ]
};
