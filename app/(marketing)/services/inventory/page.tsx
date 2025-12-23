import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Package, 
  ShieldCheck, 
  Building2,
  Truck,
  Banknote,
  Users,
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  Handshake
} from 'lucide-react';

export const metadata: Metadata = {
  title: '재고매매 및 브랜드 양도양수',
  description: '대한민국 재고 정리 전문가, 오렌지팩토리는 다양한 산업 분야의 기업들이 직면한 재고 문제를 근본적으로 해결합니다.',
};

export default function InventoryPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">재고 정리 서비스</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            재고 및 쇼핑몰 정리를<br />원하신다면?
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
            대한민국 재고 정리 전문가, 오렌지팩토리는 다양한 산업 분야의 기업들이 직면한 
            재고 문제를 근본적으로 해결하는 데 특화되어 있습니다.
          </p>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            비효율적인 재고 관리로 인한 이익 손실, 판매 부진, 불필요한 보관비용, 유통기한 경과 등 
            재고가 초래하는 복잡한 문제들을 단기간에 해소하며, 고객사 비즈니스의 생산성을 극대화하는 데 집중하고 있습니다.
          </p>
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12">
            당사가 제공하는 서비스
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 rounded-xl">
              <div className="text-[#FF8C00] mb-4">
                <Package className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. 과잉 재고 전문 매입</h3>
              <p className="text-slate-600 leading-relaxed">
                브랜드별 특성, 시즌성, 시장 수요를 종합적으로 분석하여 귀사의 과잉 재고를 신속하고 공정한 가격으로 매입합니다. 
                이를 통해 불필요한 재고 소진으로 인한 재무적 부담을 경감시키고, 보관비 및 처리 비용을 절감할 수 있습니다.
              </p>
            </div>

            <div className="p-8 border border-slate-200 rounded-xl">
              <div className="text-[#FF8C00] mb-4">
                <Truck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. 유통 전략 제안</h3>
              <p className="text-slate-600 leading-relaxed">
                단순 매입을 넘어, 수요 맞춤형 유통 전략을 통해 재고를 효과적으로 소진할 수 있는 경로를 제안합니다. 
                대규모 온라인·오프라인 유통 네트워크를 활용하고, 소비자 패턴 분석에 기반한 프로모션 전략으로 시장 내 상품 가치를 극대화합니다.
              </p>
            </div>

            <div className="p-8 border border-slate-200 rounded-xl">
              <div className="text-[#FF8C00] mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. 맞춤형 컨설팅</h3>
              <p className="text-slate-600 leading-relaxed">
                단발성 재고 정리에 그치지 않고, 기업 규모와 업종 특성을 고려한 장기적 재고 관리 솔루션을 제안합니다. 
                재고 관리 시스템 고도화, 판매 데이터 분석, 재고 회전율 개선 전략 수립 등의 컨설팅을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 서비스 */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12">주요 서비스</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. 재고 처리",
                desc: "저희는 과잉 및 악성 재고로 인해 고객사가 겪고있는 문제를 이해하고 있습니다. 주문량이 갑자기 감소하거나 시장상황이 좋지 않은경우 저희 전문팀이 이러한 문제를 한 번에 해결할 수 있도록 지원합니다. 또한 모든 사업체의 규모에 맞춰 소량 구매와 대량 구매를 모두 진행하고 있습니다."
              },
              {
                title: "2. 브랜드 이미지 보호",
                desc: "과잉 재고 및 덤핑 제품을 처리할 때 고객사의 주요 관심사 중 하나는 브랜드 이미지에 미칠 수 있는 악영향입니다. 오렌지팩토리는 기존 고객들과 겹치지 않는 오프라인매장 혹은 해외수출로 신중하고 안전하게 처리하여 귀사의 브랜드가 손상되지 않도록 보장합니다."
              },
              {
                title: "3. 쇼핑몰 및 브랜드 양도",
                desc: "오렌지팩토리에서는 쇼핑몰과 상표, 브랜드까지 재고와 동시에 처리할 수 있습니다. 경험이 풍부한 전문가 팀이 쉽게 양도 양수를 지원하고 자산의 가치를 극대화합니다. 재고 뿐만아니라 쇼핑몰과 브랜드까지 양도 양수 매매로 한번에 정리하실 수 있습니다."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 선택 이유 */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12">
            오렌지팩토리를 선택해야하는 이유
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "30년간의 전문성", desc: "과잉 재고 매입에 특화된 30년 경력의 매입팀이 전문으로 진행합니다." },
              { title: "고객사에 맞는 유연성", desc: "소량 및 대량의 재고 정리에 모두 대응 가능해 1인기업부터 대기업까지 지원합니다." },
              { title: "빠른 당일 현금화", desc: "연중무휴로 경쟁력 있는 가격으로 만족스러운 현금 구매를 제공합니다." },
              { title: "쉬운 원스톱 솔루션", desc: "초기 상담부터 재고 확인, 현금 입금까지 전 과정을 한번에 제공합니다." },
              { title: "신뢰할 수 있는 서비스", desc: "최상의 계약과 성과를 받을 수 있도록 신뢰와 만족을 바탕으로 진행합니다." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 border border-slate-200 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-[#FF8C00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 고객사 효과 */}
      <section className="py-20 bg-slate-900">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-12 text-center">
            고객사가 얻게되는 긍정적 효과
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Truck className="w-8 h-8" />, title: "물류 보관비 절감", desc: "모든 재고를 매입과 동시에 자사 물류창고로 이전해, 물류 보관비용을 크게 줄일 수 있습니다." },
              { icon: <Banknote className="w-8 h-8" />, title: "현금 유동성 확보", desc: "24시간 현금 매입을 진행하여 긴급히 필요한 현금 및 사업 유동성 확보에 도움을 드립니다." },
              { icon: <Handshake className="w-8 h-8" />, title: "신규 네트워크 확보", desc: "해외생산, 해외수출, 브랜드 재고수배 등 오렌지팩토리와의 협업을 통해 사업영역을 넓히실 수 있습니다." },
            ].map((item, i) => (
              <div key={i} className="text-center p-8">
                <div className="text-[#FF8C00] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 절차 안내 */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12 text-center">절차 안내</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "상담 미팅 진행", desc: "24시간 연락 가능" },
              { step: "2", title: "상품 및 재고 확인", desc: "고객사와 일정조율 및 직접 방문" },
              { step: "3", title: "계약 및 거래 진행", desc: "당일 현금 입금 및 창고 정리" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 border border-slate-200 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
            비즈니스 협업 문의
          </h2>
          <p className="text-slate-600 mb-10">
            언제든지 전화 / 메신저로 연락 주시면 과잉 재고를 적절한 가격에 상호 만족스러운 방식으로 구매합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-bold text-slate-900">김경수 영업이사: 010-4464-0345</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-bold text-slate-900">orangefactory@kakao.com</span>
            </div>
          </div>
          
          <Button size="lg" className="cta-primary h-14 px-10 rounded-lg text-lg" asChild>
            <Link href="/contact">무료 상담 신청 <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
