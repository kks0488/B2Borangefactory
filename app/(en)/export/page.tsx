import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Ship, FileText, Phone, Mail, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Export Services | Orange Factory',
  description: 'Complete K-Fashion export solutions. Documentation, logistics, and customs clearance.',
};

export default function ExportPage() {
  const features = [
    { icon: <Globe className="w-6 h-6" />, title: "Global Reach", desc: "We export to 30+ countries including Southeast Asia, Middle East, Europe, and Americas." },
    { icon: <FileText className="w-6 h-6" />, title: "Documentation", desc: "Complete export documentation including commercial invoices, packing lists, and certificates of origin." },
    { icon: <Ship className="w-6 h-6" />, title: "Logistics", desc: "Sea freight, air freight, and express shipping options. Door-to-door delivery available." }
  ];

  const steps = [
    { num: "1", title: "Order Confirmation", desc: "Finalize products and quantities" },
    { num: "2", title: "Preparation", desc: "Quality check and export packaging" },
    { num: "3", title: "Shipping", desc: "Customs clearance and delivery" },
  ];

  const faqs = [
    { q: "What countries do you ship to?", a: "We ship worldwide. Major destinations include Vietnam, Thailand, Indonesia, UAE, and European countries." },
    { q: "What are the shipping options?", a: "We offer sea freight (20-40 days), air freight (5-10 days), and express courier (3-5 days) depending on urgency and volume." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">EXPORT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            K-Fashion Export Solutions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            From Korea to the world. Complete export services including documentation, 
            logistics, and customs clearance for hassle-free delivery.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Export Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((item, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl hover:border-[#FF8C00] transition-colors">
                <div className="text-[#FF8C00] mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Export Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="p-5 border border-slate-200 rounded-xl text-center">
                <div className="w-10 h-10 rounded-full bg-[#FF8C00] text-white flex items-center justify-center mx-auto mb-3 font-bold">{step.num}</div>
                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-4 bg-white border border-slate-200 rounded-xl">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-slate-900">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Get Export Quote</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold">
              <Phone className="w-4 h-4 text-[#FF8C00]" /> +82-10-4464-0345
            </a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold">
              <Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com
            </a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild>
            <Link href="/en/contact" className="flex items-center gap-2">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
