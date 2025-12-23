import { SpacingGuide } from '@/components/ui/spacing-guide';
import { themeConfig } from '@/app/theme.config';
import { Button } from '@/components/ui/button';
import { 
  Box, 
  AlertCircle, 
  CheckCircle, 
  AlertTriangle, 
  Info
} from 'lucide-react';

export default function DesignGuidePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">오렌지팩토리 디자인 가이드</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            이 페이지는 오렌지팩토리 웹사이트의 UI 일관성과 완성도를 유지하기 위한 디자인 가이드입니다. 개발자와 디자이너가 참조할 수 있는 디자인 시스템 요소와 사용 예시를 제공합니다.
          </p>
        </div>

        {/* 색상 팔레트 섹션 */}
        <section className="mb-12 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">색상 팔레트</h2>
          
          <div className="space-y-6">
            {/* 주요 색상 */}
            <div>
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">주요 색상</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: themeConfig.colors.primary }}>
                  <div className="flex justify-between items-center text-white mb-8">
                    <span className="font-medium">Primary</span>
                    <span className="text-sm opacity-80">{themeConfig.colors.primary}</span>
                  </div>
                  <div className="h-10"></div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: themeConfig.colors.primaryHover }}>
                  <div className="flex justify-between items-center text-white mb-8">
                    <span className="font-medium">Hover</span>
                    <span className="text-sm opacity-80">{themeConfig.colors.primaryHover}</span>
                  </div>
                  <div className="h-10"></div>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700">
                  <div className="flex justify-between items-center text-zinc-900 dark:text-zinc-50 mb-8">
                    <span className="font-medium">Primary Light</span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">{themeConfig.colors.primaryLight}</span>
                  </div>
                  <div className="h-10 rounded" style={{ backgroundColor: themeConfig.colors.primaryLight }}></div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: themeConfig.colors.secondary }}>
                  <div className="flex justify-between items-center text-white mb-8">
                    <span className="font-medium">Secondary</span>
                    <span className="text-sm opacity-80">{themeConfig.colors.secondary}</span>
                  </div>
                  <div className="h-10"></div>
                </div>
              </div>
            </div>
            
            {/* 중립 색상 */}
            <div>
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">중립 색상</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {Object.entries(themeConfig.colors.neutral).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-3 rounded-lg flex flex-col justify-between"
                    style={{ 
                      backgroundColor: value as string, 
                      color: parseInt(key) > 500 ? 'white' : 'black',
                      height: '100px'
                    }}
                  >
                    <span className="font-medium">Zinc-{key}</span>
                    <span className="text-sm opacity-80">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 상태 색상 */}
            <div>
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">상태 색상</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg flex items-center" style={{ backgroundColor: themeConfig.colors.success }}>
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <div className="flex justify-between items-center text-white flex-grow">
                    <span className="font-medium">Success</span>
                    <span className="text-sm opacity-80">{themeConfig.colors.success}</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg flex items-center" style={{ backgroundColor: themeConfig.colors.warning }}>
                  <AlertTriangle className="w-5 h-5 text-white mr-3" />
                  <div className="flex justify-between items-center text-white flex-grow">
                    <span className="font-medium">Warning</span>
                    <span className="text-sm opacity-80">{themeConfig.colors.warning}</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg flex items-center" style={{ backgroundColor: themeConfig.colors.error }}>
                  <AlertCircle className="w-5 h-5 text-white mr-3" />
                  <div className="flex justify-between items-center text-white flex-grow">
                    <span className="font-medium">Error</span>
                    <span className="text-sm opacity-80">{themeConfig.colors.error}</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg flex items-center" style={{ backgroundColor: themeConfig.colors.info }}>
                  <Info className="w-5 h-5 text-white mr-3" />
                  <div className="flex justify-between items-center text-white flex-grow">
                    <span className="font-medium">Info</span>
                    <span className="text-sm opacity-80">{themeConfig.colors.info}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 타이포그래피 섹션 */}
        <section className="mb-12 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">타이포그래피</h2>
          
          <div className="space-y-6">
            {/* 제목 타이포그래피 */}
            <div>
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-4">제목</h3>
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50">H1 제목</h1>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    font-size: {themeConfig.typography.fontSize['5xl']} / font-weight: {themeConfig.typography.fontWeight.bold} / line-height: tight
                  </p>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">H2 제목</h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    font-size: {themeConfig.typography.fontSize['4xl']} / font-weight: {themeConfig.typography.fontWeight.bold} / line-height: tight
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">H3 제목</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    font-size: {themeConfig.typography.fontSize['3xl']} / font-weight: {themeConfig.typography.fontWeight.semibold} / line-height: snug
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">H4 제목</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    font-size: {themeConfig.typography.fontSize['2xl']} / font-weight: {themeConfig.typography.fontWeight.semibold} / line-height: snug
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-medium text-zinc-900 dark:text-zinc-50">H5 제목</h5>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    font-size: {themeConfig.typography.fontSize.xl} / font-weight: {themeConfig.typography.fontWeight.medium} / line-height: normal
                  </p>
                </div>
              </div>
            </div>
            
            {/* 본문 타이포그래피 */}
            <div>
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-4">본문</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    대형 본문 텍스트 - 오렌지팩토리는 패션 재고 처리 분야에서 30년 이상의 전문성과 노하우를 바탕으로 클라이언트에게 최적의 솔루션을 제공하고 있습니다.
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    font-size: {themeConfig.typography.fontSize.lg} / line-height: relaxed
                  </p>
                </div>
                <div>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    기본 본문 텍스트 - 오렌지팩토리는 패션 재고 처리 분야에서 30년 이상의 전문성과 노하우를 바탕으로 클라이언트에게 최적의 솔루션을 제공하고 있습니다.
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    font-size: {themeConfig.typography.fontSize.base} / line-height: normal
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    작은 본문 텍스트 - 오렌지팩토리는 패션 재고 처리 분야에서 30년 이상의 전문성과 노하우를 바탕으로 클라이언트에게 최적의 솔루션을 제공하고 있습니다.
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    font-size: {themeConfig.typography.fontSize.sm} / line-height: normal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 버튼 컴포넌트 */}
        <section className="mb-12 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">버튼 컴포넌트</h2>
          
          <div className="space-y-8">
            {/* 기본 버튼 */}
            <div>
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-4">기본 버튼</h3>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                  기본 버튼
                </Button>
                <Button variant="outline" className="border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00]/10">
                  아웃라인 버튼
                </Button>
                <Button variant="ghost" className="text-[#FF8C00] hover:bg-[#FF8C00]/10">
                  고스트 버튼
                </Button>
                <Button variant="secondary">
                  보조 버튼
                </Button>
                <Button variant="destructive">
                  경고 버튼
                </Button>
                <Button variant="link" className="text-[#FF8C00]">
                  링크 버튼
                </Button>
              </div>
            </div>
            
            {/* 버튼 크기 */}
            <div>
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-4">버튼 크기</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                  대형 버튼
                </Button>
                <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                  중형 버튼
                </Button>
                <Button size="sm" className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                  소형 버튼
                </Button>
              </div>
            </div>
            
            {/* 아이콘 버튼 */}
            <div>
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-4">아이콘 버튼</h3>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                  <Box className="w-4 h-4 mr-2" />
                  아이콘 왼쪽
                </Button>
                <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                  아이콘 오른쪽
                  <Box className="w-4 h-4 ml-2" />
                </Button>
                <Button size="icon" className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                  <Box className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* 버튼 상태 */}
            <div>
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-4">버튼 상태</h3>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                  기본 상태
                </Button>
                <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white" disabled>
                  비활성화
                </Button>
                <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white" variant="outline" disabled>
                  비활성화 아웃라인
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* 간격 가이드 */}
        <SpacingGuide />
      </div>
    </div>
  );
} 