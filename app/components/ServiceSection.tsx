import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  BoxesStacked, 
  CreditCard, 
  Store, 
  Shirt, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="group bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="mb-4 text-zinc-700 dark:text-zinc-400">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto">
          <Button 
            variant="ghost" 
            className="text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 px-0 flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
            asChild
          >
            <Link href={link}>
              자세히 알아보기
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ServiceSectionProps {
  id?: string;
  className?: string;
}

export function ServiceSection({ id, className = '' }: ServiceSectionProps) {
  const services = [
    {
      icon: <BoxesStacked className="h-8 w-8" />,
      title: '재고 매입 및 브랜드 양도양수',
      description: '기업의 과잉/악성 재고를 시세보다 높은 가격에 일괄 매입하고, 쇼핑몰 및 브랜드까지 함께 매각하여 경영 부담을 한번에 해결합니다. 24시간 내 100% 현금 지급으로 유동성을 즉시 확보할 수 있습니다.',
      link: '/services/inventory'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: '동산 담보 자금',
      description: '보유 재고를 담보로 긴급 운영 자금을 확보할 수 있는 서비스입니다. 홈쇼핑 스케줄 차질, 생산비용 확보 등 예상치 못한 자금 수요에 유연하게 대응하며, 기업 상황에 맞는 맞춤형 상환 계획을 제공합니다.',
      link: '/services/finance'
    },
    {
      icon: <Store className="h-8 w-8" />,
      title: '오프라인 위탁 판매',
      description: '온라인 가격 노출 없이 브랜드 가치를 지키며 재고를 판매합니다. 백화점, 아울렛, 폐쇄몰 등 다양한 오프라인 채널을 통해 기존 고객층과 겹치지 않게 판매하여 브랜드 이미지 손상 없이 매출을 증대시킵니다.',
      link: '/services/consignment'
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: '해외 의류 생산',
      description: '글로벌 네트워크를 통해 고품질의 의류 생산을 합리적인 가격에 진행합니다. 소량 생산부터 대량 생산까지 브랜드의 요구 사항에 맞는 맞춤형 생산 솔루션을 제공하여 비용 절감과 품질 향상을 동시에 실현합니다.',
      link: '/services/production'
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: '상품 소싱 및 도매',
      description: '국내외 제조사와의 강력한 네트워크를 통해 경쟁력 있는 가격의 고품질 상품을 소싱합니다. 시장 트렌드를 반영한 다양한 제품 카테고리를 제공하여 리테일러의 매출 증대와 경쟁력 강화를 지원합니다.',
      link: '/services/sourcing'
    }
  ];

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center bg-zinc-100 dark:bg-zinc-800 px-4 py-1.5 rounded-full text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-4">
            <span className="text-zinc-700 dark:text-zinc-400 mr-2">•</span> 서비스
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
            오렌지팩토리 서비스
          </h2>
          
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            모든 패션 기업의 재고 문제 해결을 위한 맞춤형 솔루션을 제공합니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 