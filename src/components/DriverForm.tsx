import React, { useState } from 'react';
import { DriverApplicationData } from '../types';
import { FileBadge, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function DriverForm() {
  const [formData, setFormData] = useState<DriverApplicationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: 'Tampa',
    vehicleType: 'Cargo Sprinter',
    hasInsurance: false,
    cleanMVR: false,
    experienceYears: '1-3 Years',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DriverApplicationData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof DriverApplicationData, string>> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.hasInsurance) newErrors.hasInsurance = 'You must have commercial or minimum auto liability insurance to join';
    if (!formData.cleanMVR) newErrors.cleanMVR = 'You must confirm a clean driving record (MVR) to join';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof DriverApplicationData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Boltpoint Driver Application - ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
`BOLTPOINT LOGISTICS - INDEPENDENT DRIVER APPLICATION

Applicant Information:
----------------------
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Operating City: ${formData.city}

Vehicle & Verification Specs:
-----------------------------
Vehicle Classification: ${formData.vehicleType}
Active Commercial/Auto Insurance: ${formData.hasInsurance ? 'Yes' : 'No'}
Clean Motor Vehicle Record (MVR): ${formData.cleanMVR ? 'Yes' : 'No'}
Logistics Experience: ${formData.experienceYears}

Additional Background & Vehicle Notes:
--------------------------------------
${formData.additionalInfo || 'None provided'}

--
Generated via Boltpoint Logistics Driver Portal.`
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
      <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-8 shadow-sm text-center">
        <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/40 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6">
          <CheckCircle className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
          Application Prepared!
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm leading-relaxed max-w-lg mx-auto">
          Fantastic, <strong className="text-brand-900 dark:text-brand-300">{formData.firstName}</strong>! We have opened your default email application to send your driver onboarding details directly to <strong className="text-brand-900 dark:text-brand-400">boltpointlogistics@gmail.com</strong>.
        </p>

        <div className="mt-6 p-5 bg-slate-50 dark:bg-charcoal-950/40 border border-slate-100 dark:border-charcoal-800/60 rounded-2xl max-w-lg mx-auto">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            If your email composer did not open automatically, click below to submit your onboard profile details:
          </p>
          <a
            href={getMailtoUrl()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-900 hover:bg-brand-950 dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
          >
            Submit Application via Email Client
          </a>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              city: 'Tampa',
              vehicleType: 'Cargo Sprinter',
              hasInsurance: false,
              cleanMVR: false,
              experienceYears: '1-3 Years',
              additionalInfo: '',
            });
          }}
          className="mt-6 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-charcoal-800 dark:hover:bg-charcoal-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase rounded-xl transition-all cursor-pointer"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 lg:p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-charcoal-800/80 pb-4">
          <div className="p-2 bg-brand-50 dark:bg-brand-950/40 rounded-lg text-brand-600 dark:text-brand-400">
            <FileBadge className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Driver Onboarding Portal
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Apply to join our elite fleet of independent contract drivers in Florida.
            </p>
          </div>
        </div>

        {/* Section: Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                errors.firstName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500 dark:border-charcoal-800'
              } focus:outline-none focus:ring-2 dark:bg-charcoal-950 dark:text-white`}
              placeholder="e.g. David"
            />
            {errors.firstName && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.firstName}</span>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                errors.lastName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500 dark:border-charcoal-800'
              } focus:outline-none focus:ring-2 dark:bg-charcoal-950 dark:text-white`}
              placeholder="e.g. Miller"
            />
            {errors.lastName && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.lastName}</span>}
          </div>
        </div>

        {/* Section: Email/Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              placeholder="david@example.com"
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
              placeholder="(813) 555-0199"
            />
            {errors.phone && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</span>}
          </div>
        </div>

        {/* Section: Logistics/Vehicle details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Primary Hub Location
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
            >
              <option value="Tampa">Tampa Area</option>
              <option value="Orlando">Orlando Area</option>
              <option value="St. Petersburg">St. Petersburg Area</option>
              <option value="Clearwater">Clearwater Area</option>
              <option value="Lakeland">Lakeland Area</option>
              <option value="Sarasota">Sarasota Area</option>
              <option value="Bradenton">Bradenton Area</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Vehicle Type
            </label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
            >
              <option value="Sedan">Compact/Midsize Sedan (Economy)</option>
              <option value="SUV">SUV/Crossover (Midscale)</option>
              <option value="Cargo Sprinter">Cargo Sprinter / Transit Van</option>
              <option value="Box Truck">Box Truck (Liftgate Equipped)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Courier Experience
            </label>
            <select
              name="experienceYears"
              value={formData.experienceYears}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
            >
              <option value="No Experience">Entry Level (Will Train)</option>
              <option value="1-3 Years">1 to 3 Years Experience</option>
              <option value="3-5 Years">3 to 5 Years Experience</option>
              <option value="5+ Years">5+ Years Professional Courier</option>
            </select>
          </div>
        </div>

        {/* Section: Compliance check-marks */}
        <div className="bg-slate-50 dark:bg-charcoal-950/40 p-4 rounded-2xl border border-slate-200/40 dark:border-charcoal-800/60 space-y-3">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="hasInsurance"
              checked={formData.hasInsurance}
              onChange={handleChange}
              className="mt-1 w-4.5 h-4.5 accent-brand-800 rounded border-slate-300"
            />
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200">
                I hold an active Auto/Commercial Liability policy.
              </label>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Required: Independent contractors must maintain minimum standard vehicle liability insurance.
              </p>
              {errors.hasInsurance && <span className="text-[11px] text-red-500 mt-1 block font-medium">{errors.hasInsurance}</span>}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="cleanMVR"
              checked={formData.cleanMVR}
              onChange={handleChange}
              className="mt-1 w-4.5 h-4.5 accent-brand-800 rounded border-slate-300"
            />
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200">
                I have a clean Motor Vehicle Record (MVR) for the past 3 years.
              </label>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Required: No major moving violations, DUIs, or safety infractions within the last 36 months.
              </p>
              {errors.cleanMVR && <span className="text-[11px] text-red-500 mt-1 block font-medium">{errors.cleanMVR}</span>}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
            Tell us about your vehicle (Year, Make, Model) & any certifications (TSA, HIPAA, OSHA)
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
            placeholder="e.g. 2022 Ford Transit Sprinter. Active HIPAA & OSHA biohazard medical courier certificates."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 bg-brand-900 hover:bg-brand-950 dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Submit Application
              <Sparkles className="w-4 h-4 text-amber-400" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
