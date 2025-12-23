import { Metadata } from 'next';
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us | Orange Factory',
  description: 'Get in touch for wholesale inquiries, quotes, and partnership opportunities.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">CONTACT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Ready to source Korean fashion? Contact us for wholesale inquiries, 
            catalog requests, and partnership opportunities.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <a href="tel:+82-10-4464-0345" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white transition-colors -mx-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FF8C00]/10 flex items-center justify-center group-hover:bg-[#FF8C00] transition-colors">
                      <Phone className="w-5 h-5 text-[#FF8C00] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Phone (WhatsApp Available)</p>
                      <p className="text-xl font-bold text-slate-900">+82-10-4464-0345</p>
                      <p className="text-sm text-slate-600 mt-1">Mr. Kim, Sales Director</p>
                    </div>
                  </a>

                  <a href="mailto:orangefactory@kakao.com" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white transition-colors -mx-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                      <Mail className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Email</p>
                      <p className="text-lg font-bold text-slate-900">orangefactory@kakao.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#FF8C00]" />
                  <span className="text-sm font-bold text-slate-900">Business Hours (KST)</span>
                </div>
                <p className="text-slate-600 text-sm">Mon-Fri: 09:00 - 18:00</p>
                <p className="text-slate-600 text-sm">Sat-Sun: Closed (Email available)</p>
              </div>

              <div className="p-6 bg-slate-900 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-[#FF8C00]" />
                  <span className="text-sm font-bold text-white">Confidentiality</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  All inquiries are treated with strict confidentiality. 
                  Your business information will never be shared.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="p-6 md:p-10 bg-white rounded-2xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Send Inquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Your company name" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Contact person" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Country</label>
                    <input 
                      type="text" 
                      placeholder="Your country" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Interest</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all">
                    <option>Select your interest</option>
                    <option>Wholesale Sourcing</option>
                    <option>Brand Inventory / Overstock</option>
                    <option>Export Services</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea 
                    placeholder="Tell us about your business and what you're looking for" 
                    rows={4} 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full h-14 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-bold text-lg rounded-lg"
                >
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
