import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Landmark, 
  Clock,
  TrendingUp,
  Shield,
  FileCheck,
  Phone,
  Mail,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: '동산 담보자금 | 재고를 담보로 자금 확보',
  description: '재고자산을 기반으로 한 담보자금을 제공하여 기업의 단기 유동성 위기를 완화합니다.',
};

export default function FinancePage() {
  const advantages = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "1. 유동성 확보의 신속성",
      desc: "재고를 담보로 잡음으로써, 기업은 별도의 복잡한 절차 없이 상대적으로 빠르게 필요한 자금을 확보할 수 있습니다. 이는 홈쇼핑 스케줄 변동이나 긴급 발주 등의 비정상적 상황에 즉각적으로 대응할 수 있도록 돕습니다."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "2. 재고 활용 극대화",
      desc: "판매 시기를 놓친 재고나 당장 유통이 어려운 재고도 담보 자산으로 활용함으로써, 활용도를 극대화할 수 있습니다. 이는 단순히 재고를 보관하는 것이 아닌, 새로운 금융 자산으로 전환하여 기업의 재무 전략에 기여하게 합니다."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "3. 맞춤형 상환 계획 및 리스크 최소화",
      desc: "기업의 재무 상황, 재고 회전율, 시장 변동성을 고려한 맞춤형 상환 구조를 설계할 수 있어 부담을 최소화합니다. 동시에, 재고 전문 관리 및 유통 채널을 활용해 담보 자산의 가치를 안정적으로 유지하며 대출 상환 리스크를 낮춥니다."
    }
  ];

  const services = [
    { title: "1. 재고 가치 평가 및 맞춤 한도 산정", desc: "상품 카테고리, 브랜드 가치, 유통 가능성, 시장 수요 등을 종합적으로 검토하여 재고의 담보 가치를 객관적으로 산정합니다. 이를 바탕으로 기업에 적합한 자금융통 한도와 조건을 맞춤형으로 제안합니다." },
    { title: "2. 간편하고 신속한 심사 프로세스", desc: "재고 평가 프로세스를 통해 기업이 필요로 하는 시점에 자금을 원활하게 조달할 수 있도록 지원합니다. 서류 준비와 심사 기간을 최소화하여, 기업의 유동성 관리 부담을 줄입니다." },
    { title: "3. 리스크 관리 및 회수 전략 수립", desc: "담보 재고 품목에 대한 철저한 모니터링과 관리 전략을 수립합니다. 필요 시 재고 정리 전문 채널을 통해 유통 및 판매를 진행함으로써, 자금 정리와 재고 관리가 유기적으로 연계되어 리스크를 최소화합니다." },
    { title: "4. 유연한 상환 구조", desc: "기업의 재고 회전율, 판매 스케쥴, 자금 흐름 등을 고려한 상환 계획을 제안합니다. 홈쇼핑 방송 일정 조정, 긴급 생산·물류 비용 발생 등 다양한 상황에 탄력적으로 대응할 수 있습니다." },
    { title: "5. 지속적인 지원 및 컨설팅", desc: "당사는 위탁 프로세스 전반에 걸쳐 지속적인 지원 및 컨설팅을 제공하여 발생할 수 있는 모든 문제를 해결하고 필요에 따라 전략을 조정할 수 있도록 지원합니다." }
  ];

  const faqs = [
    { q: "동산 담보자금을 받기 위해 필요한 재고 자산의 기준은 무엇인가요?", a: "기업이 보유한 상품 재고의 브랜드 가치, 시장 수요, 유통 가능성 등을 평가하여 담보로 활용할 수 있습니다. 구체적 조건은 사전 상담 및 평가 과정을 통해 확정됩니다." },
    { q: "심사 및 승인까지 소요되는 기간은 어느 정도인가요?", a: "최소한의 서류 준비와 빠른 가치 산정을 통해 신속하게 심사를 진행합니다. 보통 기업 상황과 재고 규모에 따라 차이가 있으나, 최대한 단기간 내 자금 확보가 가능합니다." },
    { q: "한도와 조건은 어떻게 결정되나요?", a: "재고 자산 가치 평가, 기업의 재무 상태, 시장 환경 등을 종합적으로 고려하여 산출합니다. 이를 통해 기업 맞춤형 한도 및 조건을 제안합니다." },
    { q: "자금 상환 방식은 어떻게 조정할 수 있나요?", a: "기업의 매출 패턴, 재고 회전율, 홈쇼핑 스케줄 등을 반영하여 상환 계획을 유연하게 설정할 수 있습니다. 상황 변화에 따라 상환 구조를 재조정할 수도 있습니다." },
    { q: "자금 융통 이후 담보 재고 관리나 판매 전략에도 지원을 받을 수 있나요?", a: "재고 정리 및 유통 전문성을 기반으로, 대출 이후에도 필요한 경우 재고관리 컨설팅, 판매 전략 수립, 추가 유통 채널 제안 등 종합적인 지원을 제공합니다." }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">동산 담보자금</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            재고를 담보로<br />자금이 필요하신가요?
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
            해당 서비스는 기존 재고 관리 및 정리 서비스와 연계하여, 홈쇼핑 스케쥴 차질, 긴급 생산비용 확보 등 
            예상치 못한 자금 수요에 효과적으로 대응하도록 설계되었습니다.
          </p>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            기업 운영 과정에서 발생할 수 있는 단기 유동성 위기를 완화하기 위해, 재고자산을 기반으로 한 담보자금을 제공합니다. 
            이를 통해 기업은 필요 시점에 안정적이고 신속한 현금 확보가 가능하며, 불필요한 재고를 효율적으로 활용하여 재무적 안정성을 강화할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 장점 */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">동산 담보 자금의 장점</h2>
          <p className="text-slate-600 mb-12">비즈니스가 숨을 쉴 수 있도록 도움이 되는 자금 융통</p>
          
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
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12">동산 담보 자금융통 주요 서비스</h2>
          
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
            동산 담보 자금 상담
          </h2>
          <p className="text-slate-400 mb-10">
            재고 자산을 활용한 자금 조달에 대해 상담받으세요.
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
