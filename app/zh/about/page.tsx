import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = { title: '关于我们 | Orange Factory', description: '始于1985年，韩国时尚分销的领导者。' };

export default function AboutPage() {
  const milestones = [
    { year: "1985", title: "创立", desc: "在韩国开始时尚分销业务。" },
    { year: "2009", title: "成长", desc: "年营收达到1000亿韩元，拥有20家门店。" },
    { year: "2014", title: "扩张", desc: "成为韩国最大的奥特莱斯连锁店，70多家门店。" },
    { year: "2019", title: "新篇章", desc: "被Greenworld Holdings收购，专注B2B和国际市场。" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#FF8C00]"></span><span className="text-sm font-bold tracking-widest text-[#FF8C00]">关于我们</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">我们的故事</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">40年来，Orange Factory一直是韩国时尚产业的核心。</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">发展历程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (<div key={i} className="p-5 bg-white border border-slate-200 rounded-xl"><span className="text-3xl font-black text-[#FF8C00]">{m.year}</span><h3 className="text-base font-bold text-slate-900 mt-2 mb-2">{m.title}</h3><p className="text-sm text-slate-600">{m.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">为什么选择我们</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p><strong className="text-slate-900">40年经验：</strong>与1200多个韩国时尚品牌建立了合作关系。</p>
            <p><strong className="text-slate-900">品质优先：</strong>每件产品都经过检验，100%正品保证。</p>
            <p><strong className="text-slate-900">全球经验：</strong>已出口到30多个国家。</p>
            <p><strong className="text-slate-900">全程支持：</strong>从采购到发货，我们全程负责。</p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">成为合作伙伴</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-4 h-4 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild><Link href="/zh/contact" className="flex items-center gap-2">联系我们 <ArrowRight className="w-4 h-4" /></Link></Button>
        </div>
      </section>
    </div>
  );
}
