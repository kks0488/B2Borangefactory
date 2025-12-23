import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Tag, Users, Handshake, Phone, Mail, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: '상품 소싱 및 도매',
  description: '경쟁력 있는 가격과 독점 거래로 사업을 강화하세요.',
};

export default function SourcingPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">상품 소싱 및 도매</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">상품을 찾고 계신가요?</h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
            경쟁력 있는 가격과 독점 거래로 사업을 강화하세요! 다년간의 전문적인 경험을 바탕으로 
            이월상품, 브랜드 상품 등 광범위한 제품 카테고리에 연결하는 B2B 서비스를 제공합니다.
          </p>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            오렌지팩토리는 고객사가 경쟁력 있는 가격으로 상품을 조달 및 구매할 수 있는 연결고리를 제공하여 
            상품 소싱채널을 개선하고 수익을 높이며 시장에서 두각을 나타낼 수 있도록 지원합니다.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <h2 className="text-2xl font-black text-slate-900 mb-12">상품 소싱 서비스의 장점</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 rounded-xl">
              <Tag className="w-8 h-8 text-[#FF8C00] mb-4" />
              <h3 className="text-xl font-bold mb-4">1. 이월상품 소싱</h3>
              <p className="text-slate-600">이전 시즌 판매하지 못한 이월상품은 고품질 제품을 할인된 가격에 제공하고자 하는 기업에게 좋은 기회를 제공합니다.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-xl">
              <ShoppingBag className="w-8 h-8 text-[#FF8C00] mb-4" />
              <h3 className="text-xl font-bold mb-4">2. 최저가 경쟁 회피</h3>
              <p className="text-slate-600">브랜드 혹은 공급업체와 독점 거래를 확보함으로써 고객사의 비즈니스를 향상시키고 수익을 높이는 데 핵심적인 역할을 합니다.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-xl">
              <Users className="w-8 h-8 text-[#FF8C00] mb-4" />
              <h3 className="text-xl font-bold mb-4">3. 네트워킹 연결</h3>
              <p className="text-slate-600">기업이 새로운 제품과 공급업체를 찾아 시장에서 경쟁력을 높이고 제품의 범위를 넓히는 데 도움이 됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl font-black text-slate-900 mb-12">주요 서비스</h2>
          <div className="space-y-6">
            {[
              { title: "1. 연속적인 이월상품 소싱", desc: "고품질 제품을 좋은 가격에 구매할 수 있도록 연속성 있는 제품 혹은 이월상품 등을 연결합니다." },
              { title: "2. 도매 서비스", desc: "다양한 제조업체 및 공급업체 네트워크와 협력하여 경쟁력 있는 가격으로 다양한 도매 제품을 제공합니다." },
              { title: "3. 공급 업체 협상", desc: "가장 유리한 조건을 받을 수 있도록 공급업체와 최상의 거래를 협상할 수 있도록 도와드립니다." },
              { title: "4. 광범위한 네트워킹", desc: "광범위한 네트워크를 통해 비즈니스에 도움이 되는 전략적 파트너십 및 제휴를 구축할 수 있습니다." },
              { title: "5. 지속적인 지원 및 상담", desc: "제품 소싱 및 도매 프로세스 전반에 걸쳐 지속적인 지원과 컨설팅을 제공합니다." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-2xl font-black text-white mb-6">상품 소싱 상담</h2>
          <p className="text-slate-400 mb-10">경쟁이 치열한 패션 산업에서 고객사의 비즈니스가 성공적으로 지원받을 수 있습니다.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <div className="flex items-center gap-3 text-white">
              <Phone className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-bold">김경수 이사: 010-4464-0345</span>
            </div>
          </div>
          <Button size="lg" className="cta-primary h-14 px-10 rounded-lg text-lg" asChild>
            <Link href="/contact">상담 신청하기 <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
