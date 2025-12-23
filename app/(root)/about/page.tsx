import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Orange Factory',
  description: 'Since 1985, Orange Factory has been Korea&apos;s leading fashion inventory solution provider.',
};

export default function AboutPage() {
  const timeline = [
    {
      num: '1',
      title: 'Beginning',
      content: [
        'Founded in 1985 in a small event venue in Gyeonggi Province, starting as a wholesale inventory business.',
        'Grew by believing in the power of customer experience, quality, and scale.',
      ]
    },
    {
      num: '2',
      title: 'Growth',
      content: [
        'Inspired by US Tiger Factory Outlets, aimed to become Korea&apos;s largest warehouse outlet.',
        'Through &quot;complete cash purchase&quot; method, secured partnerships with 40+ famous brands.',
        'Expanded to 70 directly-operated stores nationwide with trust built on quality and price.',
      ]
    },
    {
      num: '3',
      title: 'Transformation',
      content: [
        'Overcame challenges through new acquisition and recruitment of young talent.',
        'Adapted to rapidly changing environment by focusing on online and B2B services.',
      ]
    },
    {
      num: '4',
      title: 'Present',
      content: [
        'Now focused on lean operations and high-quality products rather than aggressive expansion.',
        'Continuing to evolve with the spirit of resilience, innovation, and quality pursuit.',
      ]
    }
  ];

  const newsItems = [
    {
      title: "Orange Factory acquired by Greenworld Holdings",
      source: "Chosun Biz",
      date: "2019.07",
      desc: "Greenworld Holdings, a fashion IT company, acquired Orange Factory, marking a new chapter.",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+그린월드홀딩스+인수"
    },
    {
      title: "Orange Factory targets 100 stores by 2022",
      source: "Apparel News",
      date: "2019.07",
      desc: "After acquisition, plans to open 10 stores this year, aiming for 100 stores by 2022.",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+100개+매장"
    },
    {
      title: "Korean SPA Orange Factory continues to grow",
      source: "Fashion Insight",
      date: "2014",
      desc: "Achieved 10% growth year-over-year despite competition from foreign SPA brands.",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+SPA+성장"
    },
    {
      title: "Orange Factory reaches ₩100B annual revenue",
      source: "Korea Economic Daily",
      date: "2009",
      desc: "Achieved ₩100 billion in annual sales with 20 stores and 200,000 members.",
      url: "https://search.naver.com/search.naver?where=news&query=오렌지팩토리+1000억"
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">ABOUT US</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our Story</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Since 1985, Orange Factory has been Korea&apos;s leading fashion inventory solution provider.</p>
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
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Press Coverage</h2>
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
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Partner with Orange Factory</h2>
          <p className="text-slate-600 mb-8">40 years of experience and network supporting your business growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold"><Phone className="w-4 h-4 text-[#FF8C00]" /> +82-10-4464-0345</a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold"><Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com</a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild>
            <Link href="/contact" className="flex items-center gap-2">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
