import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Package, 
  Landmark, 
  Store, 
  Factory, 
  ShoppingBag, 
  ChevronRight,
  Phone,
  Mail,
  CheckCircle2
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* 1. HERO - 대한민국 재고처리 NO.1 */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-[#FF8C00]"></span>
              <span className="text-sm font-bold tracking-widest text-[#FF8C00]">Since 1985</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              대한민국<br />
              <span className="text-[#FF8C00]">재고처리 NO.1</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              오렌지팩토리는 지난 30년간 브랜드 재고처리 업계에서 
              독보적인 위치를 차지해 왔습니다. 오렌지팩토리와의 협업을 통해 
              여러분의 비즈니스를 쉽고 빠르게 정리하세요!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="cta-primary h-14 px-8 rounded-lg text-lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  무료 상담 신청 <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-slate-300 text-slate-700 font-bold hover:bg-slate-50" asChild>
                <Link href="/services">서비스 알아보기 <ChevronRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 주요 서비스 */}
      <section className="py-24 bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">주요 서비스</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              30여년간의 경험과 네트워크를 바탕으로 B2B 서비스를 통해 
              성공적으로 고객사의 고민을 함께 해결하고 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Package className="w-8 h-8" />,
                num: "1",
                title: "재고 및 브랜드 양도양수",
                subtitle: "오렌지팩토리의 메인서비스",
                desc: "고객사의 과잉 재고 및 현금유동성 문제 해결",
                href: "/services/inventory"
              },
              {
                icon: <Store className="w-8 h-8" />,
                num: "2",
                title: "오프라인 위탁판매",
                subtitle: "브랜드 가치 보호",
                desc: "온라인에 할인 가격이 공개되지 않으면서 브랜드 가치를 훼손하지 않는 위탁판매",
                href: "/services/consignment"
              },
              {
                icon: <Factory className="w-8 h-8" />,
                num: "3",
                title: "잔여 원단 해외 생산",
                subtitle: "원가 절감 생산",
                desc: "유명 브랜드에서 사용한 잔여원단을 활용해 가격 절감을 1순위로 하는 해외 공동 생산",
                href: "/services/production"
              },
              {
                icon: <ShoppingBag className="w-8 h-8" />,
                num: "4",
                title: "상품 소싱 대행",
                subtitle: "맞춤형 상품 연결",
                desc: "고객사의 이미지와 맞는 상품 혹은 브랜드 의류 상품을 찾아드립니다",
                href: "/services/sourcing"
              },
            ].map((service) => (
              <Link 
                key={service.num} 
                href={service.href} 
                className="group p-8 bg-white border border-slate-200 rounded-xl hover:border-[#FF8C00] hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="text-[#FF8C00] p-3 bg-orange-50 rounded-lg group-hover:bg-[#FF8C00] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-[#FF8C00]">{service.num}.</span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF8C00] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-slate-500 mb-2">{service.subtitle}</p>
                    <p className="text-slate-600">{service.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#FF8C00] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 왜 오렌지팩토리인가? */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">
            오렌지팩토리를 선택해야 하는 이유
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "30년간의 전문성", desc: "과잉 재고 매입에 특화된 30년 경력의 매입팀이 전문으로 진행합니다." },
              { title: "고객사에 맞는 유연성", desc: "소량 및 대량의 재고 정리에 모두 대응 가능해 1인기업부터 대기업까지 지원합니다." },
              { title: "빠른 당일 현금화", desc: "연중무휴로 경쟁력 있는 가격으로 만족스러운 현금 구매를 제공합니다." },
              { title: "쉬운 원스톱 솔루션", desc: "초기 상담부터 재고 확인, 현금 입금까지 전 과정을 한번에 제공합니다." },
              { title: "신뢰할 수 있는 서비스", desc: "고객사가 최상의 계약과 성과를 받을 수 있도록 신뢰와 만족을 바탕으로 진행합니다." },
              { title: "네트워크 확보", desc: "해외생산, 해외수출, 브랜드 재고수배 등 다양한 네트워크를 제공합니다." },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#FF8C00]" />
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 성공 사례 */}
      <section className="py-24 bg-slate-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center">
            성공 사례 및 고객사의 긍정적인 평가
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            다양한 상황의 고객사들이 오렌지팩토리를 통해 문제를 해결했습니다
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                brand: "A 브랜드", 
                type: "홈쇼핑 스케쥴을 맞추지 못한 고객사",
                quote: "홈쇼핑 스케쥴을 맞추지 못해 전혀 판매하지 못한 대량의 상품을 오렌지팩토리를 통해 쉽고 편하게 정리할 수 있었습니다. 정말 감사합니다."
              },
              { 
                brand: "B 브랜드", 
                type: "20대 타겟의 스케이트 스트릿 브랜드",
                quote: "무신사에 입점만 하면 잘 팔릴줄 알았는데.. 오프라인 채널을 통해 기존 고객과 겹치지 않게 브랜드 이미지를 보호하면서도 매출을 올릴 수 있었습니다"
              },
              { 
                brand: "C 브랜드", 
                type: "유명브랜드의 잔여원단으로 해외생산",
                quote: "명품 브랜드가 반팔티셔츠를 만들때 같이 얹어서 생산하니 수량 부담도 적고 수준높은 상품을 생산할 수 있었습니다"
              },
              { 
                brand: "D 플랫폼", 
                type: "유명브랜드의 재고를 연결해준 사례",
                quote: "이월상품 2개년치를 매입해 저희 고객들에게 저렴한 가격에 판매할 수 있게 되어 매출을 끌어올릴 수 있었습니다."
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200 rounded-xl">
                <div className="mb-4">
                  <span className="text-lg font-bold text-[#FF8C00]">{item.brand}</span>
                  <p className="text-sm text-slate-500">{item.type}</p>
                </div>
                <p className="text-slate-700 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            비즈니스 협업 문의
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            언제든지 전화 / 메신저로 연락주시면 과잉 재고를 적절한 가격에 상호 만족스러운 방식으로 구매합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-white">
              <Phone className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-bold">김경수 영업이사: 010-4464-0345</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Mail className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-bold">orangefactory@kakao.com</span>
            </div>
          </div>
          
          <Button size="lg" className="cta-primary h-16 px-12 rounded-lg text-xl" asChild>
            <Link href="/contact">무료 상담 신청하기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
