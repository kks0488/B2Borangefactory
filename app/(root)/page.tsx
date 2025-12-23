import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, ShoppingBag, Globe, Truck, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function EnglishHomePage() {
  const services = [
    { icon: <Package className="w-7 h-7" />, title: "Wholesale Sourcing", desc: "Access premium Korean fashion brands at competitive wholesale prices.", href: "/wholesale" },
    { icon: <ShoppingBag className="w-7 h-7" />, title: "Brand Inventory", desc: "Quality overstock and previous season items from top Korean brands.", href: "/inventory" },
    { icon: <Globe className="w-7 h-7" />, title: "K-Fashion Export", desc: "Complete export solutions including documentation and logistics.", href: "/export" },
    { icon: <Truck className="w-7 h-7" />, title: "Global Shipping", desc: "Reliable worldwide shipping with full tracking.", href: "/contact" },
  ];

  const reasons = [
    { title: "40+ Years", desc: "Decades of fashion industry expertise" },
    { title: "1,200+ Brands", desc: "Extensive partner network in Korea" },
    { title: "Global Reach", desc: "Export to 30+ countries worldwide" },
    { title: "Quality First", desc: "100% authentic Korean products" },
  ];

  const testimonials = [
    { company: "Fashion Retailer, UAE", quote: "Orange Factory has been our trusted Korean fashion supplier for 3 years." },
    { company: "Boutique Owner, Vietnam", quote: "The best source for authentic Korean fashion. Fast shipping." },
    { company: "Distributor, Indonesia", quote: "Professional service from inquiry to delivery." },
    { company: "Online Store, Thailand", quote: "Great variety of Korean brands at competitive prices." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">SINCE 1985</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Korean Fashion<br />Wholesale & Export
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
            Your gateway to premium K-Fashion. 40 years of expertise connecting global buyers 
            with Korea&apos;s best fashion brands at wholesale prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-14 px-8 rounded-lg font-semibold text-base" asChild>
              <Link href="/contact" className="flex items-center gap-2">Request Quote <ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button variant="outline" className="h-14 px-8 border-slate-300 rounded-lg font-semibold text-base" asChild>
              <Link href="/about">About Us</Link>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-10 border-t border-slate-200">
            <div><p className="text-3xl font-black text-[#FF8C00]">40+</p><p className="text-sm text-slate-500">Years</p></div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div><p className="text-3xl font-black text-[#FF8C00]">1,200+</p><p className="text-sm text-slate-500">Brands</p></div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div><p className="text-3xl font-black text-[#FF8C00]">30+</p><p className="text-sm text-slate-500">Countries</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 text-center">Our Services</h2>
          <p className="text-slate-600 text-center mb-10">Complete solutions for international fashion buyers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-[#FF8C00] hover:shadow-md transition-all">
                <div className="p-2.5 bg-orange-50 rounded-lg text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-white transition-colors flex-shrink-0">{s.icon}</div>
                <div><h3 className="text-base font-bold text-slate-900 group-hover:text-[#FF8C00] mb-1">{s.title}</h3><p className="text-sm text-slate-600">{s.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="p-5 border border-slate-200 rounded-xl text-center">
                <CheckCircle2 className="w-6 h-6 text-[#FF8C00] mx-auto mb-3" />
                <h3 className="text-sm font-bold text-slate-900 mb-1">{r.title}</h3>
                <p className="text-xs text-slate-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl">
                <p className="text-[#FF8C00] font-bold text-sm mb-3">{t.company}</p>
                <p className="text-slate-700 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Start Sourcing K-Fashion</h2>
          <p className="text-slate-600 mb-8">Contact us for wholesale inquiries</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-5 h-5 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-5 h-5 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-14 px-10 rounded-lg font-semibold text-base" asChild>
            <Link href="/contact">Request Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
