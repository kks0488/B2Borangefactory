import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Tag, Calendar, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = { title: '品牌库存 | Orange Factory', description: '韩国品牌库存特惠价。' };

export default function InventoryPage() {
  const features = [
    { icon: <Tag className="w-6 h-6" />, title: "大幅折扣", desc: "批发价基础上再享40-70%折扣。" },
    { icon: <Package className="w-6 h-6" />, title: "大量库存", desc: "可即时购买的大量库存。" },
    { icon: <Calendar className="w-6 h-6" />, title: "过季商品", desc: "仍受欢迎的上季商品。" }
  ];
  const steps = [
    { num: "1", title: "查看库存", desc: "获取库存清单" },
    { num: "2", title: "选择商品", desc: "选择适合您市场的商品" },
    { num: "3", title: "批量采购", desc: "确认价格后发货" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#FF8C00]"></span><span className="text-sm font-bold tracking-widest text-[#FF8C00]">库存</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">品牌库存与清仓</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">韩国品牌库存商品，特惠价格。</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">我们提供</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((f, i) => (<div key={i} className="p-5 bg-white border border-slate-200 rounded-xl"><div className="text-[#FF8C00] mb-3">{f.icon}</div><h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3><p className="text-sm text-slate-600">{f.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">购买流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((s) => (<div key={s.num} className="p-5 border border-slate-200 rounded-xl text-center"><div className="w-10 h-10 rounded-full bg-[#FF8C00] text-white flex items-center justify-center mx-auto mb-3 font-bold">{s.num}</div><h3 className="font-bold text-slate-900 mb-1">{s.title}</h3><p className="text-sm text-slate-600">{s.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">获取库存清单</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-4 h-4 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild><Link href="/zh/contact" className="flex items-center gap-2">联系我们 <ArrowRight className="w-4 h-4" /></Link></Button>
        </div>
      </section>
    </div>
  );
}
