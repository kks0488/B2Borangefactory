import { themeConfig } from '@/app/theme.config';

/**
 * 간격 가이드 컴포넌트 - 개발 중에만 사용
 * UI 요소 간의 일관된 간격과 정렬을 유지하기 위한 참조용 컴포넌트입니다.
 * 이 컴포넌트는 디자인 시스템의 간격 규칙을 시각화하여 보여줍니다.
 */
export function SpacingGuide() {
  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">간격 및 정렬 가이드</h2>
      
      <div className="space-y-8">
        {/* 수평 간격 가이드 */}
        <div>
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">수평 간격</h3>
          <div className="flex items-center">
            {Object.entries(themeConfig.spacing).map(([key, value]) => (
              <div key={key} className="flex flex-col items-center">
                <div className="bg-[#FF8C00] h-12" style={{ width: value }}></div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{key}: {value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 수직 간격 가이드 */}
        <div>
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">수직 간격</h3>
          <div className="flex">
            {Object.entries(themeConfig.spacing).map(([key, value]) => (
              <div key={key} className="flex flex-col items-center mr-4">
                <div className="bg-[#FF8C00] w-12" style={{ height: value }}></div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{key}: {value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 텍스트 간격 가이드 */}
        <div>
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">텍스트 간격</h3>
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500 dark:text-zinc-400">기본 문단 행간 (line-height: normal)</span>
              <p className="mt-1 p-2 border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded">
                오렌지팩토리는 패션 재고 처리 분야에서 30년 이상의 전문성과 노하우를 바탕으로 클라이언트에게 최적의 솔루션을 제공하고 있습니다.
                브랜드 가치를 보호하면서 재고 처리 문제를 효과적으로 해결하는 것이 우리의 핵심 가치입니다.
              </p>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500 dark:text-zinc-400">넓은 행간 (line-height: relaxed)</span>
              <p className="mt-1 p-2 border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded leading-relaxed">
                오렌지팩토리는 패션 재고 처리 분야에서 30년 이상의 전문성과 노하우를 바탕으로 클라이언트에게 최적의 솔루션을 제공하고 있습니다.
                브랜드 가치를 보호하면서 재고 처리 문제를 효과적으로 해결하는 것이 우리의 핵심 가치입니다.
              </p>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-zinc-500 dark:text-zinc-400">좁은 행간 (line-height: tight)</span>
              <p className="mt-1 p-2 border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded leading-tight">
                오렌지팩토리는 패션 재고 처리 분야에서 30년 이상의 전문성과 노하우를 바탕으로 클라이언트에게 최적의 솔루션을 제공하고 있습니다.
                브랜드 가치를 보호하면서 재고 처리 문제를 효과적으로 해결하는 것이 우리의 핵심 가치입니다.
              </p>
            </div>
          </div>
        </div>
        
        {/* 텍스트 크기 가이드 */}
        <div>
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">타이포그래피 크기</h3>
          <div className="space-y-2">
            {Object.entries(themeConfig.typography.fontSize).map(([key, value]) => (
              <div key={key} className="flex items-center">
                <span className="w-12 text-sm text-zinc-500 dark:text-zinc-400">{key}:</span>
                <span style={{ fontSize: value }}>오렌지팩토리 (Orange Factory)</span>
                <span className="ml-4 text-xs text-zinc-500 dark:text-zinc-400">{value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 여백 적용 가이드 */}
        <div>
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">여백 적용 예시</h3>
          <div className="p-4 border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded">
            <div className="p-4 bg-[#FF8C00]/10 border border-[#FF8C00] rounded-lg">
              <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-2">카드 컴포넌트 내부 여백</h4>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">p-4(1rem) 내부 여백을 가진 카드 컴포넌트 예시입니다.</p>
              <div className="space-y-2">
                <div className="flex items-center p-2 bg-white dark:bg-zinc-800 rounded">
                  <div className="w-8 h-8 bg-[#FF8C00] rounded-full mr-3"></div>
                  <span>아이콘과 텍스트 사이 mr-3 (0.75rem)</span>
                </div>
                <div className="flex items-center p-2 bg-white dark:bg-zinc-800 rounded">
                  <div className="w-8 h-8 bg-[#FF8C00] rounded-full mr-4"></div>
                  <span>아이콘과 텍스트 사이 mr-4 (1rem)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 정렬 가이드 */}
        <div>
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">정렬 가이드</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded text-center">
              <p className="mb-2 text-zinc-500 dark:text-zinc-400">text-center</p>
              <div className="p-2 bg-white dark:bg-zinc-800 rounded">
                <p>가운데 정렬된 텍스트입니다.</p>
              </div>
            </div>
            <div className="p-4 border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded text-left">
              <p className="mb-2 text-zinc-500 dark:text-zinc-400">text-left</p>
              <div className="p-2 bg-white dark:bg-zinc-800 rounded">
                <p>왼쪽 정렬된 텍스트입니다.</p>
              </div>
            </div>
            <div className="p-4 border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded text-right">
              <p className="mb-2 text-zinc-500 dark:text-zinc-400">text-right</p>
              <div className="p-2 bg-white dark:bg-zinc-800 rounded">
                <p>오른쪽 정렬된 텍스트입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
        <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-2">UI 완성도를 위한 체크리스트</h3>
        <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>모든 여백과 간격이 일관되게 적용되었는지 확인</li>
          <li>텍스트 크기와 스타일이 계층 구조에 맞게 적용되었는지 확인</li>
          <li>정렬이 일관되게 유지되는지 확인 (특히 모바일 뷰에서)</li>
          <li>액센트 컬러(#FF8C00)가 적절하게 사용되었는지 확인</li>
          <li>다크 모드에서도 모든 요소가 적절하게 표시되는지 확인</li>
          <li>한글 텍스트가 다양한 길이에서도 적절하게 표시되는지 확인</li>
          <li>상호작용 요소(버튼, 링크 등)에 적절한 호버/포커스 효과가 적용되었는지 확인</li>
        </ul>
      </div>
    </div>
  );
} 