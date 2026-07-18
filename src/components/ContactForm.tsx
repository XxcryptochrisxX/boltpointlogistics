import React, { useState } from 'react';
import { ContactMessageData } from '../types';
import { Mail, CheckCircle, AlertCircle, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactMessageData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactMessageData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactMessageData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write a message';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactMessageData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Boltpoint Contact - ${formData.subject} - ${formData.name}`);
    const body = encodeURIComponent(
`BOLTPOINT LOGISTICS - CONTACT FORM MESSAGE

Sender Information:
-------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}

Inquiry Details:
----------------
Subject: ${formData.subject}

Message:
--------
${formData.message}

--
Generated via Boltpoint Logistics Contact Page.`
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
          Message Prepared!
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm leading-relaxed max-w-md mx-auto">
          Thank you for reaching out, <strong className="text-brand-900 dark:text-brand-300">{formData.name}</strong>. We have opened your default email application to send your inquiry directly to <strong className="text-brand-900 dark:text-brand-400">boltpointlogistics@gmail.com</strong>.
        </p>

        <div className="mt-6 p-5 bg-slate-50 dark:bg-charcoal-950/40 border border-slate-100 dark:border-charcoal-800/60 rounded-2xl">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            If your email composer did not open automatically, click below to send the message details:
          </p>
          <a
            href={getMailtoUrl()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-900 hover:bg-brand-950 dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
          >
            Send Message via Email Client
          </a>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              subject: 'General Inquiry',
              message: '',
            });
          }}
          className="mt-6 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-charcoal-800 dark:hover:bg-charcoal-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase rounded-xl transition-all cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-charcoal-900 border border-slate-100 dark:border-charcoal-800 rounded-3xl p-6 lg:p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-charcoal-800/80 pb-4">
          <div className="p-2 bg-brand-50 dark:bg-brand-950/40 rounded-lg text-brand-600 dark:text-brand-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Send an Online Message
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              For general inquiries, logistics solutions, or billing.
            </p>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
              errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500 dark:border-charcoal-800'
            } focus:outline-none focus:ring-2 dark:bg-charcoal-950 dark:text-white`}
            placeholder="John Doe"
          />
          {errors.name && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</span>}
        </div>

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
              placeholder="john@example.com"
            />
            {errors.email && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
              placeholder="(813) 555-0199"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
            Inquiry Subject
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm border border-slate-200 dark:border-charcoal-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-charcoal-950 dark:text-white"
          >
            <option value="General Inquiry">General Logistics Inquiry</option>
            <option value="Corporate Solution">Corporate & Multi-site Solutions</option>
            <option value="Billing Support">Billing & Invoicing Support</option>
            <option value="Partner Opportunities">Partner/Brokerage Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
              errors.message ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-brand-500 dark:border-charcoal-800'
            } focus:outline-none focus:ring-2 dark:bg-charcoal-950 dark:text-white`}
            placeholder="Tell us about your courier needs..."
          />
          {errors.message && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-brand-900 hover:bg-brand-950 dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-medium text-sm rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
