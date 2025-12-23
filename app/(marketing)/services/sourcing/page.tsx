import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Users, Tags, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '상품 소싱 및 도매 | 오렌지팩토리',
  description: '이월상품, 브랜드 의류 상품을 찾아 고객사에 연결해드립니다.',
};

export default function SourcingPage() {
  const features = [
    {
      icon: <Tags className="w-6 h-6" />,
      title: "이월상품 연결",
      desc: "유명 브랜드의 이월상품 2~3개년치를 매입해 저렴한 가격에 공급합니다."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "맞춤 상품 수배",
      desc: "고객사의 이미지와 타겟에 맞는 브랜드 의류 상품을 찾아드립니다."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "네트워크 연결",
      desc: "30년간 구축한 패션 업계 네트워크를 통해 필요한 상품과 파트너를 연결합니다."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-slate-50">
        <div className="section-container">
          <p className="text-sm font-semibold text-[#FF8C00] mb-2">상품 소싱 및 도매</p>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            특정 상품이나 브랜드를<br />찾고 계신가요?
          </h1>
          <p className="text-base text-slate-600 max-w-xl leading-relaxed">
            고객사의 이미지에 맞는 상품이나 브랜드 의류를 찾아드립니다. 
            30년간 구축한 네트워크로 필요한 상품을 연결해드립니다.
          </p>
        </div>
      </section>

      {/* 핵심 3개 */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((item, i) => (
              <div key={i} className="p-5 border border-slate-200 rounded-xl">
                <div className="text-[#FF8C00] mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">소싱 상담</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <a href="tel:010-4464-0345" className="flex items-center gap-2 text-white text-sm">
              <Phone className="w-4 h-4 text-[#FF8C00]" /> 010-4464-0345
            </a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-white text-sm">
              <Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com
            </a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-11 px-6 rounded-lg font-semibold" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              상담 신청 <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
