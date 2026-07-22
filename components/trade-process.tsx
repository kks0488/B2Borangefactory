import { CheckCircle2, FileSearch, Handshake, Search } from 'lucide-react';

const content = {
  en: {
    eyebrow: 'TRADE PROCESS', title: 'How we verify and coordinate a deal',
    steps: [
      ['Requirement review', 'We confirm product, quantity, target price, destination and timeline in writing.'],
      ['Sourcing & verification', 'We check the supplier, product information and commercial conditions before matching.'],
      ['Quotation & agreement', 'Samples, quotation basis, payment milestones and responsibilities are documented.'],
      ['Trade coordination', 'We coordinate documents, inspection and logistics without making unapproved commitments.']
    ]
  },
  ko: {
    eyebrow: '거래 절차', title: '검증 후 연결하고 서면으로 조율합니다',
    steps: [
      ['요건 확인', '품목, 수량, 목표가격, 납품지역, 일정을 서면으로 확인합니다.'],
      ['소싱·검증', '연결 전 공급사, 상품 정보, 거래 가능 조건을 확인합니다.'],
      ['견적·합의', '샘플, 견적 기준, 결제 단계와 책임 범위를 기록합니다.'],
      ['거래 조율', '확정되지 않은 약속 없이 서류, 검품, 물류를 조율합니다.']
    ]
  },
  ja: {
    eyebrow: '取引プロセス', title: '確認してからつなぎ、書面で調整します',
    steps: [
      ['要件確認', '商品、数量、目標価格、納品先、スケジュールを書面で確認します。'],
      ['調達・検証', 'マッチング前に仕入先、商品情報、取引条件を確認します。'],
      ['見積・合意', 'サンプル、見積条件、支払段階、責任範囲を記録します。'],
      ['取引調整', '未承認の約束をせず、書類、検品、物流を調整します。']
    ]
  },
  zh: {
    eyebrow: '交易流程', title: '核验后匹配，全程书面协调',
    steps: [
      ['确认需求', '以书面方式确认产品、数量、目标价格、目的地和时间。'],
      ['采购与核验', '匹配前核验供应商、商品资料和商务条件。'],
      ['报价与确认', '记录样品、报价基础、付款节点和责任范围。'],
      ['交易协调', '不做未经批准的承诺，协调单证、验货与物流。']
    ]
  }
} as const;

const icons = [FileSearch, Search, Handshake, CheckCircle2];

export function TradeProcess({ locale }: { locale: keyof typeof content }) {
  const t = content[locale];
  return (
    <section className="border-y border-slate-200 bg-white py-16 md:py-20">
      <div className="section-container">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold tracking-widest text-[#FF8C00]">{t.eyebrow}</p>
          <h2 className="text-2xl font-black text-slate-900 md:text-3xl">{t.title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {t.steps.map(([title, description], index) => {
            const Icon = icons[index];
            return <div key={title} className="rounded-xl border border-slate-200 p-5"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-[#FF8C00]"><Icon className="h-5 w-5" /></div><p className="mb-2 text-xs font-bold text-[#FF8C00]">0{index + 1}</p><h3 className="mb-2 font-bold text-slate-900">{title}</h3><p className="text-sm leading-relaxed text-slate-600">{description}</p></div>;
          })}
        </div>
      </div>
    </section>
  );
}
