import React, { useState } from 'react';
import { QuoteRequestData } from '../types';
import { SERVICES } from '../data';
import { FileText, Truck, Navigation, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteRequestData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: SERVICES[0].id,
    pickupAddress: '',
    pickupCity: 'Tampa',
    deliveryAddress: '',
    deliveryCity: 'Orlando',
    urgency: 'same-day',
    cargoType: 'documents',
    weight: '',
    dimensions: '',
    specialInstructions: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteRequestData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate inputs
  const validate = () => {
    const newErrors: Partial<Record<keyof QuoteRequestData, string>> = {};
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.pickupAddress.trim()) newErrors.pickupAddress = 'Pickup address is required';
    if (!formData.deliveryAddress.trim()) newErrors.deliveryAddress = 'Delivery address is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof QuoteRequestData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`New Courier Quote Request - ${formData.contactName} (${formData.companyName || 'No Company'})`);
    const body = encodeURIComponent(
`BOLTPOINT LOGISTICS - COURIER QUOTE REQUEST

Contact Information:
--------------------
Contact Name: ${formData.contactName}
Company Name: ${formData.companyName || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone}

Routing Details:
----------------
Service Type: ${SERVICES.find(s => s.id === formData.serviceType)?.title || formData.serviceType}
Urgency Level: ${formData.urgency}

Pickup Location:
- City: ${formData.pickupCity}
- Address: ${formData.pickupAddress}

Delivery Location:
- City: ${formData.deliveryCity}
- Address: ${formData.deliveryAddress}

Cargo Specifications:
---------------------
Cargo Classification: ${formData.cargoType}
Approx. Weight: ${formData.weight || 'N/A'}
Cargo Dimensions: ${formData.dimensions || 'N/A'}

Special Instructions & Temperature Requirements:
----------------------------------------------
${formData.specialInstructions || 'None provided'}

--
Generated via Boltpoint Logistics Courier Portal.`
    );
    return `mailto:boltpointlogistics@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Trigger mailto composer
      window.location.href = getMailtoUrl();
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-8 shadow-md text-center max-w-xl mx-auto py-12">
        <div className="w-16 h-16 bg-brand-50 dark:bg-brand-950/40 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
          Quote Request Prepared!
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm leading-relaxed">
          Thank you, <strong className="text-brand-900 dark:text-brand-300">{formData.contactName}</strong>. Your logistics request details have been configured. We have opened your default email application to send these details to <strong className="text-brand-900 dark:text-brand-400">boltpointlogistics@gmail.com</strong>.
        </p>
        
        <div className="mt-6 p-5 bg-slate-50 dark:bg-charcoal-950/40 border border-slate-100 dark:border-charcoal-800/60 rounded-2xl">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            If your email composer didn't open automatically, please click below to send the pre-filled dispatch application:
          </p>
          <a
            href={getMailtoUrl()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 hover:bg-brand-950 dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
          >
            Send Quote via Email Client
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-charcoal-800/80 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                companyName: '',
                contactName: '',
                email: '',
                phone: '',
                serviceType: SERVICES[0].id,
                pickupAddress: '',
                pickupCity: 'Tampa',
                deliveryAddress: '',
                deliveryCity: 'Orlando',
                urgency: 'same-day',
                cargoType: 'documents',
                weight: '',
                dimensions: '',
                specialInstructions: '',
              });
            }}
            className="px-5 py-2.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-charcoal-800 dark:hover:bg-charcoal-700 text-slate-700 dark:text-slate-200 rounded-lg transition-all"
          >
            Submit Another Quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 lg:p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-charcoal-800/80 pb-4">
          <div className="p-2.5 bg-brand-50 dark:bg-brand-950/40 rounded-xl text-brand-700 dark:text-brand-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Courier Dispatch & Quote Request Form
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Provide pickup and delivery hubs to request a routing specialist dispatch to boltpointlogistics@gmail.com.
            </p>
          </div>
        </div>

        {/* Section: Contact details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Contact Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                errors.contactName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500 dark:border-charcoal-800'
              } focus:outline-none focus:ring-2 dark:bg-charcoal-950 dark:text-white`}
              placeholder="e.g. John Doe"
            />
            {errors.contactName && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.contactName}</span>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Company Name <span className="text-slate-400">(Optional)</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
              placeholder="e.g. Tampa Specialty Lab"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500 dark:border-charcoal-800'
              } focus:outline-none focus:ring-2 dark:bg-charcoal-950 dark:text-white`}
              placeholder="e.g. john@company.com"
            />
            {errors.email && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500 dark:border-charcoal-800'
              } focus:outline-none focus:ring-2 dark:bg-charcoal-950 dark:text-white`}
              placeholder="e.g. (813) 555-0199"
            />
            {errors.phone && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</span>}
          </div>
        </div>

        {/* Section: Logistics routing */}
        <div className="border-t border-slate-100 dark:border-charcoal-800/80 pt-6 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-800 dark:text-brand-400">
            Logistics & Address Manifest
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                Service Sector
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
              >
                {SERVICES.map((serv) => (
                  <option key={serv.id} value={serv.id}>
                    {serv.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                Urgency Level
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
              >
                <option value="immediate">STAT / Immediate Dispatch (Direct Drive)</option>
                <option value="same-day">Standard Same-Day (Delivered Today)</option>
                <option value="scheduled">Scheduled Routine Route (Next Day or Setup)</option>
                <option value="economy">Economy Saver (Within 24 Hours)</option>
              </select>
            </div>
          </div>

          {/* Pickup and Delivery address cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 dark:bg-charcoal-950/40 p-4 rounded-2xl border border-slate-200/40 dark:border-charcoal-800/60">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-slate-400 mb-2">
                <Navigation className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                Pickup Location
              </div>
              <div className="space-y-3">
                <select
                  name="pickupCity"
                  value={formData.pickupCity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs border border-slate-200 dark:border-charcoal-800 rounded-lg dark:bg-charcoal-900 dark:text-white"
                >
                  <option value="Tampa">Tampa Hub</option>
                  <option value="Orlando">Orlando Hub</option>
                  <option value="St. Petersburg">St. Petersburg Hub</option>
                  <option value="Clearwater">Clearwater Hub</option>
                  <option value="Lakeland">Lakeland Hub</option>
                  <option value="Sarasota">Sarasota Hub</option>
                  <option value="Bradenton">Bradenton Hub</option>
                </select>

                <input
                  type="text"
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-xs rounded-lg border ${
                    errors.pickupAddress ? 'border-red-400' : 'border-slate-200 dark:border-charcoal-800'
                  } dark:bg-charcoal-900 dark:text-white`}
                  placeholder="Street Address, Suite #"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-slate-400 mb-2">
                <Truck className="w-3.5 h-3.5 text-accent-500" />
                Delivery Destination
              </div>
              <div className="space-y-3">
                <select
                  name="deliveryCity"
                  value={formData.deliveryCity}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs border border-slate-200 dark:border-charcoal-800 rounded-lg dark:bg-charcoal-900 dark:text-white"
                >
                  <option value="Tampa">Tampa Hub</option>
                  <option value="Orlando">Orlando Hub</option>
                  <option value="St. Petersburg">St. Petersburg Hub</option>
                  <option value="Clearwater">Clearwater Hub</option>
                  <option value="Lakeland">Lakeland Hub</option>
                  <option value="Sarasota">Sarasota Hub</option>
                  <option value="Bradenton">Bradenton Hub</option>
                </select>

                <input
                  type="text"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-xs rounded-lg border ${
                    errors.deliveryAddress ? 'border-red-400' : 'border-slate-200 dark:border-charcoal-800'
                  } dark:bg-charcoal-900 dark:text-white`}
                  placeholder="Street Address, Suite #"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Cargo specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Cargo Classification
            </label>
            <select
              name="cargoType"
              value={formData.cargoType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
            >
              <option value="documents">Envelopes & Legal Correspondence</option>
              <option value="specimens">Medical Samples & Bio-specimens</option>
              <option value="pharmaceuticals">Specialty Pharmacy Cold-Chain</option>
              <option value="parts">Manufacturing Components & Parts</option>
              <option value="boxes">Standard Multi-box Pallets</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Approx. Weight <span className="text-slate-400">(lbs)</span>
            </label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
              placeholder="e.g. 5 lbs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Cargo Dimensions <span className="text-slate-400">(Optional)</span>
            </label>
            <input
              type="text"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
              placeholder="e.g. 12x12x12 in"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
            Special Instructions & Temperature Requirements
          </label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
            placeholder="e.g. Biological samples require frozen state (refrigerant included). Call upon arrival."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 bg-brand-900 hover:bg-brand-950 dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Request Courier Pickup
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
