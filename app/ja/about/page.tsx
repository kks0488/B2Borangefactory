import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '会社概要 | Orange Factory',
  description: '1985年創業、韓国ファッション在庫ソリューションのリーダー。',
};

export default function AboutPage() {
  const timeline = [
    {
      num: '1',
      title: '創業',
      content: [
        '1985年、京畿道の小さなイベント会場で在庫処理卸売業としてスタート。',
        '顧客体験中心の流通モデルで、品質と規模の力を信じて成長。',
      ]
    },
    {
      num: '2',
      title: '発展',
      content: [
        '米国タイガーファクトリーアウトレットに触発され、韓国最大の倉庫型アウトレットを目指す。',
        '「完全現金買取方式」で40以上の有名ブランドと取引、競合他社より迅速に在庫を確保。',
        '全国70店舗に拡大、品質と価格で顧客の信頼を獲得。',
      ]
    },
    {
      num: '3',
      title: '変革',
      content: [
        '経営の困難を新しい買収と若い人材の採用で克服。',
        'オンラインとB2Bサービスに集中し、急変する環境に適応。',
      ]
    },
    {
      num: '4',
      title: '現在',
      content: [
        '無理な拡張を縮小し、きめ細やかなサービスと高品質製品に集中。',
        '克服、革新、品質追求の精神で韓国ファッション業界の変化とともに歩む。',
      ]
    }
  ];

  const newsItems = [
    {
      title: "オレンジファクトリー、グリーンワールドホールディングスが新オーナーに",
      source: "朝鮮ビズ他",
      date: "2019.07",
      desc: "ファッションITシステム会社グリーンワールドホールディングスがオレンジファクトリーを買収、新たな飛躍を開始。",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+그린월드홀딩스+인수"
    },
    {
      title: "オレンジファクトリー、2022年100店舗目標",
      source: "アパレルニュース他",
      date: "2019.07",
      desc: "買収後、年内10店舗オープン、2022年までに100店舗確保を目標に再飛躍。",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+100개+매장"
    },
    {
      title: "韓国型SPA オレンジファクトリー成長",
      source: "ファッションインサイト他",
      date: "2014",
      desc: "海外SPAブランドに押される中でも前年比10%成長、韓国SPAブランドの誇りを守る。",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+SPA+성장"
    },
    {
      title: "オレンジファクトリー、年商1000億ウォン達成",
      source: "韓国経済他",
      date: "2009",
      desc: "20店舗で年商1,000億ウォンを達成、20万会員を保有し急成長。",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+1000억"
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">会社概要</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">私たちについて</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">1985年から韓国ファッション在庫ソリューションをリードしてきたオレンジファクトリーです。</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                    <span className="text-5xl font-black text-[#FF8C00]">{item.num}</span>
                    <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
                  </div>
                </div>
                <div className="lg:col-span-10 space-y-3">
                  {item.content.map((paragraph, j) => (
                    <p key={j} className="text-slate-600 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">報道情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsItems.map((news, i) => (
              <a key={i} href={news.url} target="_blank" rel="noopener noreferrer" className="group p-5 border border-slate-200 rounded-xl hover:border-[#FF8C00] transition-colors">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#FF8C00]">{news.source}</span>
                  <span>·</span>
                  <span>{news.date}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#FF8C00] transition-colors mb-2 flex items-center gap-2">
                  {news.title}
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </h3>
                <p className="text-sm text-slate-600">{news.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">パートナーになりませんか</h2>
          <p className="text-slate-600 mb-8">40年の経験とネットワークで貴社の成長をサポートします。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-4 h-4 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild>
            <Link href="/ja/contact" className="flex items-center gap-2">お問い合わせ <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
