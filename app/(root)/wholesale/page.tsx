import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, TrendingUp, ShieldCheck, Phone, Mail, ChevronDown } from 'lucide-react';

export const metadata: Metadata = { title: 'Wholesale Sourcing | Orange Factory', description: 'Access premium Korean fashion brands at competitive wholesale prices.' };

export default function WholesalePage() {
  const features = [
    { icon: <Package className="w-6 h-6" />, title: "Premium Brands", desc: "Access to 1,200+ Korean fashion brands including streetwear, casual, and luxury." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Competitive Pricing", desc: "Direct sourcing means better margins. Up to 70% below retail." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Quality Guaranteed", desc: "100% authentic products with quality inspection before shipping." }
  ];
  const steps = [
    { num: "1", title: "Submit Inquiry", desc: "Tell us what you're looking for" },
    { num: "2", title: "Receive Quote", desc: "Get pricing and catalog" },
    { num: "3", title: "Place Order", desc: "Confirm and ship" },
  ];
  const faqs = [
    { q: "What is the minimum order quantity?", a: "MOQ varies by brand. We work with orders from $5,000 USD." },
    { q: "Do you offer samples?", a: "Yes, sample costs are deducted from bulk orders." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#FF8C00]"></span><span className="text-sm font-bold tracking-widest text-[#FF8C00]">WHOLESALE</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">Korean Fashion Wholesale</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Source premium Korean fashion brands directly. 40 years of industry connections.</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Why Source From Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((f, i) => (<div key={i} className="p-5 bg-white border border-slate-200 rounded-xl hover:border-[#FF8C00] transition-colors"><div className="text-[#FF8C00] mb-3">{f.icon}</div><h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3><p className="text-sm text-slate-600">{f.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((s) => (<div key={s.num} className="p-5 border border-slate-200 rounded-xl text-center"><div className="w-10 h-10 rounded-full bg-[#FF8C00] text-white flex items-center justify-center mx-auto mb-3 font-bold">{s.num}</div><h3 className="font-bold text-slate-900 mb-1">{s.title}</h3><p className="text-sm text-slate-600">{s.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (<details key={i} className="group p-4 bg-white border border-slate-200 rounded-xl"><summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-slate-900">{f.q}<ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" /></summary><p className="mt-3 text-sm text-slate-600">{f.a}</p></details>))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Start Sourcing</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-4 h-4 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild><Link href="/contact" className="flex items-center gap-2">Request Quote <ArrowRight className="w-4 h-4" /></Link></Button>
        </div>
      </section>
    </div>
  );
}
