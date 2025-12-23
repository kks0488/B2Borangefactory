import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Orange Factory',
  description: 'Since 1985, Orange Factory has been Korea\'s leading fashion distribution company.',
};

export default function AboutPage() {
  const milestones = [
    { year: "1985", title: "Foundation", desc: "Started as a fashion distribution business in Gyeonggi-do, Korea." },
    { year: "2009", title: "Growth", desc: "Reached ₩100 billion annual revenue with 20 retail locations and 200,000 members." },
    { year: "2014", title: "Expansion", desc: "Operated 70+ stores nationwide, becoming Korea's largest fashion outlet network." },
    { year: "2019", title: "New Chapter", desc: "Acquired by Greenworld Holdings, focusing on B2B and international markets." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">ABOUT US</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Our Story
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            For 40 years, Orange Factory has been at the heart of Korea's fashion industry. 
            Today, we connect global buyers with premium Korean fashion brands.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl">
                <span className="text-3xl font-black text-[#FF8C00]">{item.year}</span>
                <h3 className="text-base font-bold text-slate-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Why Work With Us</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">40 Years of Expertise:</strong> We've built relationships 
                with over 1,200 Korean fashion brands, giving you unparalleled access to K-Fashion.
              </p>
              <p>
                <strong className="text-slate-900">Quality First:</strong> Every product is inspected before 
                shipping. We guarantee 100% authentic Korean fashion products.
              </p>
              <p>
                <strong className="text-slate-900">Global Experience:</strong> We've exported to 30+ countries 
                and understand the needs of international buyers.
              </p>
              <p>
                <strong className="text-slate-900">Complete Support:</strong> From sourcing to shipping, 
                we handle everything so you can focus on your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Partner With Us</h2>
          <p className="text-slate-600 mb-8">40 years of Korean fashion expertise at your service</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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
