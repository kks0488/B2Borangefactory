import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, ShoppingBag, Globe, Truck, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function JapaneseHomePage() {
  const services = [
    { icon: <Package className="w-7 h-7" />, title: "卸売り仕入れ", desc: "韓国の人気ブランドを卸売価格でご提供します。", href: "/ja/wholesale" },
    { icon: <ShoppingBag className="w-7 h-7" />, title: "ブランド在庫", desc: "韓国ブランドの在庫品を特別価格でご提供。", href: "/ja/inventory" },
    { icon: <Globe className="w-7 h-7" />, title: "K-Fashion輸出", desc: "輸出書類・物流・通関まで完全サポート。", href: "/ja/export" },
    { icon: <Truck className="w-7 h-7" />, title: "国際配送", desc: "追跡可能な確実な国際配送サービス。", href: "/ja/contact" },
  ];

  const reasons = [
    { title: "40年以上", desc: "ファッション業界での豊富な経験" },
    { title: "1,200+ブランド", desc: "韓国ブランドとの幅広いネットワーク" },
    { title: "30+カ国", desc: "世界中への輸出実績" },
    { title: "品質保証", desc: "100%正規品をお約束" },
  ];

  const testimonials = [
    { company: "アパレル小売業者, 東京", quote: "3年間Orange Factoryと取引していますが、品質と信頼性は抜群です。" },
    { company: "ブティックオーナー, 大阪", quote: "本物の韓国ファッションを仕入れるのに最適なパートナーです。" },
    { company: "ディストリビューター, 福岡", quote: "お問い合わせから納品まで、プロフェッショナルな対応でした。" },
    { company: "オンラインショップ, 名古屋", quote: "韓国ブランドの豊富な品揃えと競争力のある価格に満足しています。" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#FF8C00]"></span><span className="text-sm font-bold tracking-widest text-[#FF8C00]">1985年創業</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">韓国ファッション<br />卸売り＆輸出</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">K-Fashionへのゲートウェイ。40年の経験で、韓国トップブランドを卸売価格でお届けします。</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-14 px-8 rounded-lg font-semibold text-base" asChild><Link href="/ja/contact" className="flex items-center gap-2">お見積り依頼 <ArrowRight className="w-5 h-5" /></Link></Button>
            <Button variant="outline" className="h-14 px-8 border-slate-300 rounded-lg font-semibold text-base" asChild><Link href="/ja/about">会社概要</Link></Button>
          </div>
          <div className="flex items-center gap-6 pt-10 border-t border-slate-200">
            <div><p className="text-3xl font-black text-[#FF8C00]">40+</p><p className="text-sm text-slate-500">年</p></div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div><p className="text-3xl font-black text-[#FF8C00]">1,200+</p><p className="text-sm text-slate-500">ブランド</p></div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div><p className="text-3xl font-black text-[#FF8C00]">30+</p><p className="text-sm text-slate-500">輸出国</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 text-center">サービス</h2>
          <p className="text-slate-600 text-center mb-10">海外バイヤー向けの完全ソリューション</p>
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
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center">選ばれる理由</h2>
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
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center">お客様の声</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl">
                <p className="text-[#FF8C00] font-bold text-sm mb-3">{t.company}</p>
                <p className="text-slate-700 text-sm leading-relaxed">「{t.quote}」</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">K-Fashion仕入れを始めましょう</h2>
          <p className="text-slate-600 mb-8">卸売りのお問い合わせはこちら</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-5 h-5 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-5 h-5 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-14 px-10 rounded-lg font-semibold text-base" asChild><Link href="/ja/contact">お見積り依頼</Link></Button>
        </div>
      </section>
    </div>
  );
}
