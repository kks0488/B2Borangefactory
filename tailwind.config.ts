
import type { Config } from "tailwindcss" 

const config = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: {
        DEFAULT: '1.5rem',
        lg: '4rem',
      },
  		screens: {
  			'2xl': '1440px',
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'Inter',
  				'Pretendard',
  				'sans-serif'
  			],
        display: [
          'Plus Jakarta Sans',
          'Pretendard',
          'sans-serif'
        ]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: '#FF8C00', // ORANGE FACTORY BRAND COLOR
  				foreground: '#FFFFFF',
          dark: '#E67E00',
  			},
        brand: {
          navy: '#0F172A',
          slate: '#475569',
          light: '#F8FAFC',
        },
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  		},
  		borderRadius: {
  			lg: '0.5rem', // Sharp but slightly rounded for modern feel
  			md: '0.25rem',
  			sm: '0.125rem'
  		},
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.06)',
        'elevated': '0 10px 15px -3px rgba(0,0,0,0.04), 0 4px 6px -2px rgba(0,0,0,0.02)',
        'section': 'inset 0 1px 0 0 rgba(0,0,0,0.05)',
      },
  		keyframes: {
        'reveal': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
  		},
  		animation: {
        'reveal': 'reveal 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config