import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Store,
  Package,
  Eye,
  BarChart3,
  Phone,
  Mail,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: '오프라인 위탁판매 | 브랜드 가치 보호형 판매',
  description: '오렌지팩토리는 재고 매각 대신 수익창출이 가능한 위탁판매 솔루션을 제공합니다.',
};

export default function ConsignmentPage() {
  const advantages = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "1. 효율적인 재고 관리",
      desc: "위탁 판매 서비스를 통해 고객사는 과잉 재고 관리를 오렌지팩토리에 맡길 수 있습니다. 고객사는 핵심 영역에 집중하면서 오프라인 채널을 통해 재고를 효과적으로 관리하고 판매할 수 있습니다."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "2. 가격 노출 최소화",
      desc: "오렌지팩토리와 협력하여 광범위한 오프라인 판매 채널을 활용해 고객사의 고객이 쉽게 알아볼 수 있는 온라인에서는 가격 노출을 최소화하고 제품을 가능한 한 최고의 가격으로 판매합니다."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "3. 마케팅 지원 및 판매 추적",
      desc: "오렌지팩토리의 마케팅 전문가 팀은 수익을 극대화하기 위해 적절한 오프라인 판매 채널과 고객 부문에 맞는 맞춤형 마케팅 전략을 지원하고 주기적인 오프라인 판매 실적에 대한 보고를 합니다. 이를 통해 고객사가 재고 관리 전략을 연구해 향후 생산 및 재고조절의 의사 결정을 내릴 수 있습니다."
    }
  ];

  const services = [
    { title: "1. 재고 평가 및 계획", desc: "우리 팀은 귀사의 과잉 재고에 대한 철저한 평가를 통해 오프라인 위탁 판매에 가장 적합한 제품을 파악하고, 수익 극대화를 위한 맞춤형 판매 계획을 수립할 것입니다." },
    { title: "2. 오프라인 판매 채널 선택", desc: "우리는 백화점, 아울렛 몰, 폐쇄몰을 포함한 광범위한 오프라인 판매 채널 네트워크를 가지고 있습니다. 고객사의 제품에 가장 적합한 채널을 엄선하여 최적의 판매 실적을 달성할 것입니다." },
    { title: "3. 마케팅 및 홍보", desc: "당사의 마케팅 전문가들은 전통적인 광고, 매장 내 프로모션 및 기타 오프라인 마케팅 기법을 활용하여 귀사 제품에 대한 맞춤형 마케팅 캠페인을 개발, 판매를 촉진하고 브랜드 인지도를 높일 것입니다." },
    { title: "4. 판매 추적 및 보고", desc: "당사의 위탁 판매 서비스에는 실시간 판매 추적 및 상세 보고 기능이 포함되어 있어 오프라인 판매 실적에 대한 데이터를 제공하고 데이터 중심의 의사 결정을 통해 재고 관리 전략을 최적화할 수 있습니다." },
    { title: "5. 지속적인 지원 및 컨설팅", desc: "당사는 위탁 프로세스 전반에 걸쳐 지속적인 지원 및 컨설팅을 제공하여 발생할 수 있는 모든 문제를 해결하고 필요에 따라 전략을 조정할 수 있도록 지원합니다." }
  ];

  const faqs = [
    { q: "오프라인 위탁 판매는 무엇입니까?", a: "오프라인 위탁 판매는 고객사가 재고 관리를 처리할 필요 없이 오렌지팩토리를 통해 백화점이나 아울렛 몰과 같은 오프라인 판매 채널을 통해 제품을 판매하는 솔루션 입니다." },
    { q: "오프라인 위탁 판매가 비즈니스에 어떻게 도움이 됩니까?", a: "오프라인 위탁 판매는 과잉 재고를 효율적으로 관리하고, 가격 노출을 최소화하며, 판매 추적 및 보고를 제공받음으로써 비즈니스 발전에 도움이 될 수 있습니다." },
    { q: "오프라인 위탁판매에 적합한 제품은 무엇입니까?", a: "오렌지팩토리를 통해 전 상품을 위탁판매를 통해 판매할 수 있습니다. 중요한 것은 당사와 같은 지식이 풍부한 파트너와 협력하여 고객사의 특정 상황에 가장 적합한 제품을 선별하는 것입니다." },
    { q: "오렌지팩토리는 어떻게 제품에 적합한 오프라인 세일즈 채널을 선택합니까?", a: "당사는 소매점, 아울렛 몰, 전문 부티크 등 광범위한 오프라인 판매 채널 네트워크를 보유하고 있습니다. 최적의 판매 실적을 달성하기 위해 제품 유형, 대상 고객, 시장 상황 등의 요소를 바탕으로 고객사의 제품에 가장 적합한 채널을 신중하게 선택합니다." },
    { q: "오렌지팩토리는 어떤 종류의 지속적인 지원을 제공합니까?", a: "오렌지팩토리는 위탁 프로세스 전반에 걸쳐 지속적인 지원 및 컨설팅을 제공하기 위해 최선을 다하고 있습니다. 당사는 발생할 수 있는 모든 문제를 해결하고 필요에 따라 전략을 조정하며 원활하고 수익성이 높은 비즈니스 환경을 보장합니다." }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">오프라인 위탁판매</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            오프라인 위탁판매를<br />찾으시나요?
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
            오렌지팩토리는 재고 매각 대신 수익창출이 가능한 위탁판매 솔루션을 제공합니다.
          </p>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            불경기와 무한 경쟁 시장에서 기업은 재고 관리를 간소화하고 수익을 극대화할 수 있는 창의적인 방법을 찾아야 합니다. 
            고객사의 기존 고객과 겹치는 온라인에서의 가격 노출을 최소화하고 백화점, 백화점 아울렛, 대형 마트 등에서 
            과잉 재고를 효율적으로 처리할 수 있는 솔루션입니다.
          </p>
        </div>
      </section>

      {/* 장점 */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">오프라인 위탁 판매의 장점</h2>
          <p className="text-slate-600 mb-12">비즈니스가 발전하는 데 도움이 될 수 있는 위탁판매</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((item, i) => (
              <div key={i} className="p-8 border border-slate-200 rounded-xl">
                <div className="text-[#FF8C00] mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 서비스 */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12">오프라인 위탁판매 주요 서비스</h2>
          
          <div className="space-y-6">
            {services.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12">자주 묻는 질문</h2>
          
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group p-6 border border-slate-200 rounded-xl">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-bold text-slate-900">{i + 1}. {item.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
            오프라인 위탁판매 상담
          </h2>
          <p className="text-slate-400 mb-10">
            브랜드 가치를 보호하면서 재고를 처리하는 방법을 상담받으세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <div className="flex items-center gap-3 text-white">
              <Phone className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-bold">김경수 이사: 010-4464-0345</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Mail className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-bold">orangefactory@kakao.com</span>
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
