import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Factory, Scissors, Gem, Leaf, Phone, Mail, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: '의류 해외 생산',
  description: '유명 브랜드의 잔여 원단을 활용해 고품질 의류를 저렴하게 생산합니다.',
};

export default function ProductionPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">의류 해외 생산</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">생산원가를 낮추고 싶으신가요?</h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
            오렌지팩토리는 고객사가 고퀄리티의 상품을 저렴하게 생산할 수 있도록 해외 의류 생산을 지원합니다.
          </p>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            유명브랜드의 재고원단을 갖고 해당 브랜드를 직접 생산하는 전세계에서 가장 잘하는 공장에서 진행합니다.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <h2 className="text-2xl font-black text-slate-900 mb-12">잔여 원단 해외생산의 장점</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 rounded-xl">
              <Scissors className="w-8 h-8 text-[#FF8C00] mb-4" />
              <h3 className="text-xl font-bold mb-4">1. 비용 절감</h3>
              <p className="text-slate-600">유명 브랜드의 잔여 원단을 사용하면 프리미엄 품질의 소재를 저렴한 비용으로 구입할 수 있습니다.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-xl">
              <Gem className="w-8 h-8 text-[#FF8C00] mb-4" />
              <h3 className="text-xl font-bold mb-4">2. 고품질</h3>
              <p className="text-slate-600">최고급 원단들이라 오히려 새로 발주하는 것보다 원단 퀄리티는 좋습니다.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-xl">
              <Leaf className="w-8 h-8 text-[#FF8C00] mb-4" />
              <h3 className="text-xl font-bold mb-4">3. 지속 가능성</h3>
              <p className="text-slate-600">폐기물을 줄이고 지속 가능성을 유지하는 환경 친화적인 ESG 특화 비즈니스입니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl font-black text-slate-900 mb-12">주요 서비스</h2>
          <div className="space-y-6">
            {[
              { title: "1. 잔여원단 소싱", desc: "해외 공장 및 유명 브랜드와 강력한 관계를 구축하여 다양한 잔여원단을 사용할 수 있습니다." },
              { title: "2. 기본 스타일 + 로고플레이", desc: "기본 바람막이, 반팔티, 후드티 등 기본 디자인에 로고플레이를 원하시는 분들은 연락주세요." },
              { title: "3. 최적의 국가 선택 생산", desc: "중국, 베트남, 미얀마, 인도네시아, 방글라데시 공장마다 전문분야가 다릅니다." },
              { title: "4. 샘플만 갖고 오세요", desc: "1980년대 후반부터 경험이 풍부한 멤버들이 빠른 작업지시서 생성과 패턴작업이 가능합니다." },
              { title: "5. 정확한 납기 일자", desc: "고객사가 필요한 제품을 약속한 기일에 받을 수 있도록 진행합니다." }
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
          <h2 className="text-2xl font-black text-white mb-6">해외 생산 상담</h2>
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
