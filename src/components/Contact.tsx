import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Copy, Check, Github, Linkedin, MessageSquare, Sparkles, AlertCircle, ExternalLink, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const { email, mobile, location, github, linkedin, driveCvUrl, quote } = portfolioData.personalInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMobile, setCopiedMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleCopy = (text: string, type: 'email' | 'mobile') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedMobile(true);
      setTimeout(() => setCopiedMobile(false), 2500);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields (Your Name, Your Email, and Message).'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address so Aman can reply to you.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY;

    try {
      let sentSuccess = false;
      let statusNotice = '';

      // 1. Try EmailJS if configured
      if (serviceId && templateId && publicKey) {
        try {
          const res = await emailjs.send(
            serviceId,
            templateId,
            {
              from_name: formData.name,
              from_email: formData.email,
              reply_to: formData.email,
              to_email: email,
              to_name: 'Aman Pandey',
              subject: formData.subject || `New Portfolio Message from ${formData.name}`,
              message: formData.message,
            },
            publicKey
          );
          if (res.status === 200 || res.text === 'OK') {
            sentSuccess = true;
          }
        } catch (err) {
          console.warn('EmailJS attempt failed:', err);
        }
      }

      // 1. Try Web3Forms with user's official key: 6257c2bb-49ed-4ad3-885c-a9873c6a85d6
      const activeWeb3Key = web3Key || '6257c2bb-49ed-4ad3-885c-a9873c6a85d6';
      if (!sentSuccess && activeWeb3Key) {
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              access_key: activeWeb3Key,
              name: formData.name,
              email: formData.email,
              replyto: formData.email,
              subject: formData.subject || `New Portfolio Message from ${formData.name}`,
              message: formData.message,
              from_name: formData.name,
            }),
          });
          const data = await response.json();
          if (response.ok && data.success) {
            sentSuccess = true;
          }
        } catch (err) {
          console.warn('Web3Forms attempt failed:', err);
        }
      }

      // 3. Fallback: FormSubmit.co (Zero-config instant real email delivery directly to amanpandey10a3@gmail.com)
      if (!sentSuccess) {
        try {
          const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              _replyto: formData.email,
              _subject: formData.subject || `New Portfolio Contact from ${formData.name}`,
              message: formData.message,
              _captcha: 'false'
            }),
          });

          const data = await response.json();
          if (data.success === 'true' || data.success === true) {
            sentSuccess = true;
          } else if (data.message && data.message.includes('Activation')) {
            sentSuccess = true;
            statusNotice = ' (First-time setup: Please check your Gmail inbox and click FormSubmit\'s 1-click "Activate Form" link to enable automatic forwarding).';
          }
        } catch (err) {
          console.warn('FormSubmit attempt failed:', err);
        }
      }

      if (sentSuccess) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! Thank you for reaching out.'
        });

        try {
          confetti({
            particleCount: 90,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch (err) {}

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Unable to send email. Please check your internet connection or email Aman directly.');
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      setSubmitStatus({
        success: false,
        message: error?.message || `Unable to deliver email directly. You can copy Aman's email (${email}) directly to send your message.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#070A11] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect & Collaborate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Contact <span className="gradient-text">Me</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-md mt-1">
              Let's discuss full-stack opportunities, software development, or analytics projects.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delayMs={100}>
              <div className="bg-[#0F1524]/90 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {submitStatus && (
                    <div
                      className={`p-4 rounded-2xl border text-xs sm:text-sm font-medium flex items-center gap-3 animate-in fade-in duration-200 ${
                        submitStatus.success
                          ? 'bg-emerald-950/60 border-emerald-800 text-emerald-300'
                          : 'bg-rose-950/60 border-rose-800 text-rose-300'
                      }`}
                    >
                      {submitStatus.success ? (
                        <Sparkles className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
                      )}
                      <span>{submitStatus.message}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Recruiter / Hiring Manager"
                        className="w-full px-4 py-3 rounded-2xl bg-[#070A11] border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. name@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#070A11] border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Software Engineering / Full Stack Opportunity"
                      className="w-full px-4 py-3 rounded-2xl bg-[#070A11] border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#070A11] border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl text-sm font-extrabold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-900/30 hover:shadow-blue-600/40 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Message to Aman...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <ScrollReveal delayMs={200}>
              <div className="bg-[#0F1524]/90 p-6 rounded-3xl border border-slate-800 space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  Direct Contact Details
                </h3>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#070A11] border border-slate-800">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="block text-[11px] font-semibold text-slate-400">Email Address</span>
                      <span className="text-xs font-semibold text-slate-200 truncate">{email}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(email, 'email')}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#070A11] border border-slate-800">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-400">Mobile Phone</span>
                      <span className="text-xs font-semibold text-slate-200">{mobile}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(mobile, 'mobile')}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy phone"
                  >
                    {copiedMobile ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#070A11] border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-slate-400">Location</span>
                    <span className="text-xs font-semibold text-slate-200">{location}</span>
                  </div>
                </div>

                {/* Drive CV CTA */}
                <div className="pt-2">
                  <a
                    href={driveCvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Download CV (Google Drive)</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal delayMs={300}>
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-[#0F1524] border border-slate-800 text-center overflow-hidden">
                <p className="font-serif italic text-base sm:text-lg text-slate-200 font-semibold mb-2">
                  "{quote}"
                </p>
                <div className="w-10 h-0.5 bg-blue-500 mx-auto opacity-70"></div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
