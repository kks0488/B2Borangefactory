import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Ship, FileText, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = { title: '輸出サービス | Orange Factory', description: 'K-Fashion輸出の完全ソリューション。' };

export default function ExportPage() {
  const features = [
    { icon: <Globe className="w-6 h-6" />, title: "グローバル対応", desc: "30カ国以上への輸出実績。" },
    { icon: <FileText className="w-6 h-6" />, title: "書類作成", desc: "輸出書類一式を完備。" },
    { icon: <Ship className="w-6 h-6" />, title: "物流", desc: "海上、航空、エクスプレス配送対応。" }
  ];
  const steps = [
    { num: "1", title: "注文確定", desc: "商品と数量の最終確認" },
    { num: "2", title: "準備", desc: "品質検査と輸出梱包" },
    { num: "3", title: "発送", desc: "通関手続きと配送" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#FF8C00]"></span><span className="text-sm font-bold tracking-widest text-[#FF8C00]">輸出</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">K-Fashion輸出ソリューション</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">韓国から世界へ。書類作成から配送まで完全サポート。</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">輸出サービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((f, i) => (<div key={i} className="p-5 bg-white border border-slate-200 rounded-xl"><div className="text-[#FF8C00] mb-3">{f.icon}</div><h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3><p className="text-sm text-slate-600">{f.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">輸出の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((s) => (<div key={s.num} className="p-5 border border-slate-200 rounded-xl text-center"><div className="w-10 h-10 rounded-full bg-[#FF8C00] text-white flex items-center justify-center mx-auto mb-3 font-bold">{s.num}</div><h3 className="font-bold text-slate-900 mb-1">{s.title}</h3><p className="text-sm text-slate-600">{s.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">輸出見積りを取得</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-4 h-4 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild><Link href="/ja/contact" className="flex items-center gap-2">お問い合わせ <ArrowRight className="w-4 h-4" /></Link></Button>
        </div>
      </section>
    </div>
  );
}
