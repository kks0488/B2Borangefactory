export const themeConfig = {
  colors: {
    primary: '#FF8C00', // 오렌지 컬러
    primaryHover: '#E67E00',
    primaryLight: 'rgba(255, 140, 0, 0.1)',
    secondary: '#27272A', // 어두운 회색 (dark zinc-800)
    
    neutral: {
      50: '#FAFAFA',  // light
      100: '#F4F4F5', // zinc-100
      200: '#E4E4E7', // zinc-200
      300: '#D4D4D8', // zinc-300
      400: '#A1A1AA', // zinc-400
      500: '#71717A', // zinc-500
      600: '#52525B', // zinc-600
      700: '#3F3F46', // zinc-700
      800: '#27272A', // zinc-800
      900: '#18181B', // zinc-900
      950: '#09090B'  // zinc-950
    },
    
    success: '#10B981', // 성공 상태
    warning: '#F59E0B', // 경고 상태
    error: '#EF4444',   // 오류 상태
    info: '#3B82F6'     // 정보 상태
  },
  
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '2.5rem',// 40px
    '3xl': '3rem',  // 48px
    '4xl': '4rem',  // 64px
  },
  
  typography: {
    fontFamily: {
      body: '"Noto Sans KR", system-ui, sans-serif',
      heading: '"Noto Sans KR", system-ui, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem',// 36px
      '5xl': '3rem',   // 48px
      '6xl': '3.75rem',// 60px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  borders: {
    radius: {
      none: '0',
      xs: '0.125rem',  // 2px
      sm: '0.25rem',   // 4px
      md: '0.375rem',  // 6px
      lg: '0.5rem',    // 8px
      xl: '0.75rem',   // 12px
      '2xl': '1rem',   // 16px
      full: '9999px',  // 원형
    },
    width: {
      none: '0',
      xs: '1px',
      sm: '2px',
      md: '3px',
      lg: '4px',
    },
  },
  
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  animations: {
    transition: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easings: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)', // 기본 ease
      in: 'cubic-bezier(0.4, 0, 1, 1)',        // ease-in
      out: 'cubic-bezier(0, 0, 0.2, 1)',       // ease-out
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',   // ease-in-out
    },
  },
  
  breakpoints: {
    xs: '480px',   // 모바일 소형
    sm: '640px',   // 모바일 대형
    md: '768px',   // 태블릿
    lg: '1024px',  // 랩탑
    xl: '1280px',  // 데스크탑
    '2xl': '1536px' // 대형 화면
  },

  container: {
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
    maxWidth: {
      DEFAULT: '1280px'
    }
  },
  
  // Button 관련 설정
  // ButtonVariant를 미리 정의해 일관된 스타일 유지
  buttonVariants: {
    primary: {
      background: '#FF8C00',
      hoverBackground: '#E67E00',
      textColor: 'white',
      hoverTextColor: 'white',
      border: 'none',
    },
    secondary: {
      background: 'transparent',
      hoverBackground: 'rgba(255, 140, 0, 0.1)',
      textColor: '#FF8C00',
      hoverTextColor: '#FF8C00',
      border: '1px solid #FF8C00',
    },
    outline: {
      background: 'transparent',
      hoverBackground: 'rgba(255, 255, 255, 0.1)',
      textColor: 'white',
      hoverTextColor: 'white',
      border: '1px solid #52525B',
    },
    ghost: {
      background: 'transparent',
      hoverBackground: 'rgba(255, 140, 0, 0.1)',
      textColor: '#FF8C00',
      hoverTextColor: '#FF8C00',
      border: 'none',
    }
  },
  
  darkMode: {
    background: {
      primary: '#18181B', // zinc-900
      secondary: '#27272A', // zinc-800
      tertiary: '#3F3F46', // zinc-700
    },
    text: {
      primary: '#F4F4F5',  // zinc-100
      secondary: '#A1A1AA', // zinc-400
    },
    border: {
      primary: '#3F3F46',  // zinc-700
      secondary: '#52525B', // zinc-600
    }
  }
}; 