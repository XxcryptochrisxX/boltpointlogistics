import { Award } from 'lucide-react';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-charcoal-800 pb-4">
        <div className="p-2.5 bg-brand-50 dark:bg-brand-950/40 rounded-xl text-brand-700 dark:text-brand-300">
          <Award className="w-5 h-5 animate-spin-slow" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Terms of Service & Carriage
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: July 18, 2026 &bull; Boltpoint Logistics Shipping Regulations
          </p>
        </div>
      </div>

      <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed space-y-6">
        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">1. Agreement of Carriage</h3>
          <p>
            By booking a shipment or route contract through our Quote Portal or Dispatch Desk, you agree to comply with the standard courier, shipping, and liability guidelines set forth herein. Boltpoint Logistics LLC reserves the right to refuse transport for cargo deemed unsafe, inadequately packaged, or violating federal environmental guidelines.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">2. Liability Limits & Value Declaration</h3>
          <p>
            Our standard shipping liability is capped at $100.00 per individual parcel unless higher cargo valuation is declared in writing during order confirmation and booking. White-glove high-value assets and biological lab specimen lines are covered under separate enterprise-level commercial liability declarations.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">3. Independent Contractor Relationships</h3>
          <p>
            Drivers onboarding through our Driver Portal operate as self-employed independent contractors (1099 partners) and must maintain active, uncompromised automobile liability coverage meeting or exceeding local Florida commercial thresholds.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">4. Settlement & Payments</h3>
          <p>
            Invoices for on-demand same-day orders are settled immediately during booking. Recurring monthly routes and sweeps operate under net-15 or net-30 credit terms as approved by our credit clearing house.
          </p>
        </section>
      </div>

    </div>
  );
}
