import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, ShoppingBag, Globe, Truck, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function ChineseHomePage() {
  const services = [
    { icon: <Package className="w-7 h-7" />, title: "批发采购", desc: "以批发价格获取韩国顶级时尚品牌。", href: "/zh/wholesale" },
    { icon: <ShoppingBag className="w-7 h-7" />, title: "品牌库存", desc: "韩国品牌库存商品，特价优惠。", href: "/zh/inventory" },
    { icon: <Globe className="w-7 h-7" />, title: "K-Fashion出口", desc: "完整的出口解决方案，包括文件和物流。", href: "/zh/export" },
    { icon: <Truck className="w-7 h-7" />, title: "全球配送", desc: "可靠的国际物流，全程追踪。", href: "/zh/contact" },
  ];

  const reasons = [
    { title: "40+年", desc: "时尚行业丰富经验" },
    { title: "1,200+品牌", desc: "韩国品牌广泛网络" },
    { title: "30+国家", desc: "全球出口覆盖" },
    { title: "品质保证", desc: "100%正品保障" },
  ];

  const testimonials = [
    { company: "时装零售商, 上海", quote: "与Orange Factory合作3年，品质和可靠性无与伦比。" },
    { company: "精品店老板, 北京", quote: "采购正宗韩国时尚的最佳来源。发货迅速。" },
    { company: "经销商, 广州", quote: "从询价到交货，服务专业高效。" },
    { company: "网店, 深圳", quote: "韩国品牌种类丰富，价格有竞争力。" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#FF8C00]"></span><span className="text-sm font-bold tracking-widest text-[#FF8C00]">始于1985年</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">韩国时尚<br />批发与出口</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">通往K-Fashion的大门。40年专业经验，为您连接韩国顶级时尚品牌。</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-14 px-8 rounded-lg font-semibold text-base" asChild><Link href="/zh/contact" className="flex items-center gap-2">获取报价 <ArrowRight className="w-5 h-5" /></Link></Button>
            <Button variant="outline" className="h-14 px-8 border-slate-300 rounded-lg font-semibold text-base" asChild><Link href="/zh/about">关于我们</Link></Button>
          </div>
          <div className="flex items-center gap-6 pt-10 border-t border-slate-200">
            <div><p className="text-3xl font-black text-[#FF8C00]">40+</p><p className="text-sm text-slate-500">年</p></div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div><p className="text-3xl font-black text-[#FF8C00]">1,200+</p><p className="text-sm text-slate-500">品牌</p></div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div><p className="text-3xl font-black text-[#FF8C00]">30+</p><p className="text-sm text-slate-500">出口国家</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 text-center">我们的服务</h2>
          <p className="text-slate-600 text-center mb-10">为国际买家提供完整解决方案</p>
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
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center">为什么选择我们</h2>
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
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center">客户评价</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl">
                <p className="text-[#FF8C00] font-bold text-sm mb-3">{t.company}</p>
                <p className="text-slate-700 text-sm leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">开始采购K-Fashion</h2>
          <p className="text-slate-600 mb-8">批发咨询请联系我们</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-5 h-5 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-5 h-5 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-14 px-10 rounded-lg font-semibold text-base" asChild><Link href="/zh/contact">获取报价</Link></Button>
        </div>
      </section>
    </div>
  );
}
