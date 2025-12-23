import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = { title: '会社概要 | Orange Factory', description: '1985年創業、韓国ファッション流通のリーダー。' };

export default function AboutPage() {
  const milestones = [
    { year: "1985", title: "創業", desc: "韓国でファッション流通事業を開始。" },
    { year: "2009", title: "成長", desc: "年商1,000億ウォン、20店舗達成。" },
    { year: "2014", title: "拡大", desc: "韓国最大のアウトレットチェーンへ、70店舗以上。" },
    { year: "2019", title: "新章", desc: "Greenworld Holdingsに買収、B2Bと海外市場に注力。" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#FF8C00]"></span><span className="text-sm font-bold tracking-widest text-[#FF8C00]">会社概要</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">私たちについて</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">40年間、Orange Factoryは韓国ファッション業界の中心で活動してきました。</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">沿革</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (<div key={i} className="p-5 bg-white border border-slate-200 rounded-xl"><span className="text-3xl font-black text-[#FF8C00]">{m.year}</span><h3 className="text-base font-bold text-slate-900 mt-2 mb-2">{m.title}</h3><p className="text-sm text-slate-600">{m.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">選ばれる理由</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p><strong className="text-slate-900">40年の経験:</strong> 1,200以上の韓国ファッションブランドとのネットワーク。</p>
            <p><strong className="text-slate-900">品質重視:</strong> すべての商品を検品。100%正規品。</p>
            <p><strong className="text-slate-900">グローバル経験:</strong> 30カ国以上への輸出実績。</p>
            <p><strong className="text-slate-900">完全サポート:</strong> 仕入れから配送まで、すべてお任せください。</p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">パートナーになりませんか</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-4 h-4 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild><Link href="/ja/contact" className="flex items-center gap-2">お問い合わせ <ArrowRight className="w-4 h-4" /></Link></Button>
        </div>
      </section>
    </div>
  );
}
