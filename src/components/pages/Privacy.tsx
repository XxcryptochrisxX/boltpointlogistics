import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-charcoal-800 pb-4">
        <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-emerald-600 dark:text-emerald-400">
          <Shield className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Privacy Policy & HIPAA Statement
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: July 18, 2026 &bull; Boltpoint Logistics HIPAA Compliance Policy
          </p>
        </div>
      </div>

      <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed space-y-6">
        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">1. Regulatory Overview</h3>
          <p>
            Boltpoint Logistics LLC ("Boltpoint", "we", "us", or "our") operates highly secured logistics routing networks across Florida. We are dedicated to maintaining strict confidentiality for all electronic data, clinical files, and sensitive specimens in transit.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">2. HIPAA Protected Health Information (PHI)</h3>
          <p>
            In conducting medical courier, laboratory diagnostics, and specialty pharmacy delivery lines, we operate as a "Business Associate" under the Health Insurance Portability and Accountability Act (HIPAA). We strictly enforce physical shielding, tamper-evident secure transit bags, and immediate digital chain-of-custody logging. No Protected Health Information (PHI) is stored or cached on our public servers.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">3. Information Collected & Sharing</h3>
          <p>
            We collect standard name, email, phone, and delivery address coordinates through our Quote Request and Driver Onboarding forms. This information is utilized solely to coordinate fleet dispatching and driver vetting. We never sell, trade, or transfer your contact information to third-party marketing companies.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">4. Contact Privacy Officer</h3>
          <p>
            For any inquiries regarding biological logistics audits, HIPAA disclosures, or database safety records, contact our Compliance Office at compliance@boltpointlogistics.com.
          </p>
        </section>
      </div>

    </div>
  );
}
