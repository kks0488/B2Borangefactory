import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = { title: 'About Us | Orange Factory', description: "Korea&apos;s leading fashion distribution company since 1985." };

export default function AboutPage() {
  const milestones = [
    { year: "1985", title: "Foundation", desc: "Started fashion distribution in Korea." },
    { year: "2009", title: "Growth", desc: "Reached ₩100B annual revenue with 20 locations." },
    { year: "2014", title: "Expansion", desc: "70+ stores nationwide as Korea&apos;s largest outlet." },
    { year: "2019", title: "New Chapter", desc: "Acquired by Greenworld, focusing on B2B and global markets." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#FF8C00]"></span><span className="text-sm font-bold tracking-widest text-[#FF8C00]">ABOUT US</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our Story</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">For 40 years, Orange Factory has been at the heart of Korea&apos;s fashion industry.</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (<div key={i} className="p-5 bg-white border border-slate-200 rounded-xl"><span className="text-3xl font-black text-[#FF8C00]">{m.year}</span><h3 className="text-base font-bold text-slate-900 mt-2 mb-2">{m.title}</h3><p className="text-sm text-slate-600">{m.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Why Work With Us</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p><strong className="text-slate-900">40 Years of Expertise:</strong> Relationships with 1,200+ Korean fashion brands.</p>
            <p><strong className="text-slate-900">Quality First:</strong> Every product inspected. 100% authentic.</p>
            <p><strong className="text-slate-900">Global Experience:</strong> Exported to 30+ countries.</p>
            <p><strong className="text-slate-900">Complete Support:</strong> Sourcing to shipping, we handle everything.</p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Partner With Us</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-4 h-4 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild><Link href="/contact" className="flex items-center gap-2">Contact Us <ArrowRight className="w-4 h-4" /></Link></Button>
        </div>
      </section>
    </div>
  );
}
