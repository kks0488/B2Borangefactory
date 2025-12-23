import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '关于我们 | Orange Factory',
  description: '始于1985年，韩国时尚库存解决方案的领导者。',
};

export default function AboutPage() {
  const timeline = [
    {
      num: '1',
      title: '创立',
      content: [
        '1985年在京畿道一个小型活动场地起步，以库存处理批发业务开始。',
        '坚信以客户体验为中心的分销模式，凭借品质和规模的力量不断成长。',
      ]
    },
    {
      num: '2',
      title: '发展',
      content: [
        '受美国Tiger Factory Outlets启发，立志成为韩国最大的仓储式奥特莱斯。',
        '通过"全款现金采购"方式，与40多个知名品牌建立合作，比竞争对手更快获取库存。',
        '全国扩展至70家直营店，以品质和价格赢得客户信任。',
      ]
    },
    {
      num: '3',
      title: '转型',
      content: [
        '通过新的收购和年轻人才的引进克服了经营困难。',
        '专注于线上和B2B服务，适应快速变化的环境。',
      ]
    },
    {
      num: '4',
      title: '现在',
      content: [
        '收缩过度扩张，专注于精细运营和高品质产品。',
        '秉持克服、创新、追求品质的精神，与韩国时尚产业共同发展。',
      ]
    }
  ];

  const newsItems = [
    {
      title: "Orange Factory被Greenworld Holdings收购",
      source: "朝鲜商业等",
      date: "2019.07",
      desc: "时尚IT系统公司Greenworld Holdings收购Orange Factory，开启新篇章。",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+그린월드홀딩스+인수"
    },
    {
      title: "Orange Factory目标2022年100家门店",
      source: "服装新闻等",
      date: "2019.07",
      desc: "收购后，计划年内开设10家门店，2022年前达到100家。",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+100개+매장"
    },
    {
      title: "韩国式SPA Orange Factory持续增长",
      source: "时尚洞察等",
      date: "2014",
      desc: "在海外SPA品牌竞争中仍实现同比10%增长，捍卫韩国SPA品牌的尊严。",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+SPA+성장"
    },
    {
      title: "Orange Factory年营收突破1000亿韩元",
      source: "韩国经济日报等",
      date: "2009",
      desc: "20家门店实现年营收1000亿韩元，拥有20万会员，快速增长。",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+1000억"
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">关于我们</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">我们的故事</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">始于1985年，Orange Factory一直是韩国时尚库存解决方案的领导者。</p>
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
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">媒体报道</h2>
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
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">成为合作伙伴</h2>
          <p className="text-slate-600 mb-8">40年的经验和网络，助力您的业务增长。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-4 h-4 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild>
            <Link href="/zh/contact" className="flex items-center gap-2">联系我们 <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
