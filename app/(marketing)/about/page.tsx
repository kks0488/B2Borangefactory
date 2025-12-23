import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '회사소개 | 우리의 이야기',
  description:
    '1985년에 시작된 오렌지팩토리는 대한민국의 패션 지형을 바꾸어 놓은 혁신적인 유통업체입니다.'
};

export default function AboutPage() {
  const timeline = [
    {
      num: '1',
      title: '시작',
      content: [
        '오렌지 팩토리는 1985년에 시작된 이래로 대한민국의 패션 지형을 바꾸어 놓은 혁신적인 유통업체 입니다.',
        '경기도의 작은 행사장에서 재고처리 도매업이 우리의 시작이었습니다. 그곳에서 신선하면서도 고객 경험 중심의 유통 비즈니스 모델을 선보였습니다.',
        '당사의 설립자들은 고객 쇼핑 경험을 수준 높게 높일 수 있는 잠재력을 보았고 품질과 참신함 그리고 규모의 힘을 믿었습니다. 이러한 정신은 오렌지팩토리의 기반이 되었고 단일 매장에서 시작해 전국적인 유통업체로 확장하는 데 도움이 되었습니다.'
      ]
    },
    {
      num: '2',
      title: '발전',
      content: [
        '그렇게 오렌지팩토리는 미국에 본사를 둔 타이거 팩토리 아울렛에서 영감을 받아, 저렴한 가격에 종합적인 패션을 제공하면서 한국에서 가장 큰 창고형 아울렛이 되는 미션에 착수했습니다.',
        '일반적인 소매 환경을 개선하기 위한 우리의 노력은 전통적인 유통방식에서 벗어나 이월 제품 재고에 집중하는 선구적인 유통 네트워크를 만들었습니다.',
        "혁신적인 '완전 현금 구매 방식'을 통해 약 40개의 유명 브랜드를 현금으로 대량 구매할 수 있어 경쟁사보다 이월제품을 더 많이, 더 빨리 확보할 수 있었습니다.",
        '오렌지팩토리는 매장에 맞는 최고의 제품만을 분류하고 진열함으로써 품질에 대한 우리의 목표를 유지해 왔습니다. 덕분에 수년에 걸쳐 전국 70개 직영점으로 확장하여 수준높은 쇼핑 경험과 품질, 가격에 대한 노력을 통해 고객의 마음을 사로잡았습니다.'
      ]
    },
    {
      num: '3',
      title: '위기',
      content: [
        '하지만, 좋은 날이 있으면 힘든 날도 있듯이 사업에 위기가 찾아왔습니다. 우리 회사는 이전 대표의 방만한 경영과, 나쁜 관행, 무리한 사업 확장으로 인해 어려움을 겪었습니다.',
        '회사의 위기를 공개하는 것은 힘든일이지만 그로 인해 기존 고객들이 신뢰해왔던 좋은 경험까지 안좋은 인식을 갖는 상황까지 이르렀기에 깊이 반성하고 있습니다.'
      ]
    },
    {
      num: '4',
      title: '변화',
      content: [
        '오렌지팩토리는 재고처리가 필요한 기업부터 남녀노소, 부자, 가난한사람까지 모두가 이용할 수 있는 서비스이고 이 서비스는 결국 사람이 제공합니다.',
        '다행히 우리 회사에는 오랫동안 청춘을 바쳐 열심히 일해온 능력있는 직원들이 있었습니다. 이를 아깝게 여긴 새로운 회사의 인수 과정과 함께 젊고 감각있는 새로운 인재들이 합류한 덕분에 위기를 이겨낼 수 있었고 더 단단해졌습니다.',
        '또한 오렌지팩토리는 온라인 서비스와 B2B 서비스에 초점을 맞추고 광범위한 네트워크를 활용하여 고객에게 더 많은 가치를 제공함으로써 급변하는 환경에 적응했습니다.'
      ]
    },
    {
      num: '5',
      title: '현재 그리고 미래',
      content: [
        '기존의 무리한 확장을 축소하는 한편, 고객들의 좋은 경험을 되살릴 수 있도록 짜임새 있고 단단한 쇼핑 경험과 고품질의 제품을 제공하는 데 주력하고 있습니다.',
        '우리의 이야기는 극복, 혁신, 그리고 끊임없는 품질 추구에 관한 것입니다.',
        '계속해서 변화하고 있는 대한민국 패션업계. 이 여정에 함께할 여러분을 초대합니다.'
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">
              회사소개
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            우리의 이야기
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            1985년부터 대한민국 패션 유통의 역사를 함께해온 오렌지팩토리의
            여정을 소개합니다.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="section-container">
          <div className="space-y-16">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="text-6xl font-black text-[#FF8C00]">
                      {item.num}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h2>
                  </div>
                </div>
                <div className="lg:col-span-9 space-y-4">
                  {item.content.map((paragraph, j) => (
                    <p key={j} className="text-slate-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-3xl font-black text-white mb-6">
            오렌지팩토리와 함께하세요
          </h2>
          <p className="text-slate-400 mb-10">
            30년 이상의 경험과 네트워크로 고객사의 성장을 지원합니다.
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

          <Button
            size="lg"
            className="cta-primary h-14 px-10 rounded-lg text-lg"
            asChild
          >
            <Link href="/contact">
              상담 신청하기 <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
