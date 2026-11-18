/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#FBF7FF',
          500: '#6C47FF',
          700: '#5835E8',
          950: '#0A0125',
        },
        primary: {
          DEFAULT: '#11023B',
          dark: '#0A0125',
          medium: '#1E0A5C',
          light: '#2D1470',
          tint: '#FBF7FF',
          'gradient-end': '#321675', // Gradient/Heading Gradient end stop
        },
        accent: {
          DEFAULT: '#6C47FF',
          hover: '#5835E8',
          light: '#EDE8FF',
        },
        neutral: {
          white: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          400: '#A1A1AA',
          600: '#52525B',
          900: '#18181B',
        },
        semantic: {
          success: '#22C55E',
          successLight: '#DCFCE7',
          error: '#EF4444',
          errorLight: '#FEE2E2',
          warning: '#F59E0B',
          warningLight: '#FEF3C7',
        },
        text: {
          heading: '#11023B',
          body: '#262556',
          highlight: '#FF5500',
          footer: '#FFFFFF',
        },
        surface: {
          card: '#F6F6FB',       // marquee & stats card gradient end
          'card-border': '#E3E3FE', // card border colour
          'card-divider': '#D4D4F7', // 2x2 grid divider colour
        },
      },
      fontSize: {
        h1: ['70px', { lineHeight: '115%' }],
        h2: ['50px', { lineHeight: '120%', fontWeight: '600' }],
        h3: ['40px', { lineHeight: '130%', fontWeight: '600' }],
        h4: ['20px', { lineHeight: '140%', fontWeight: '600' }],
        // Body tokens — Regular / Medium / SemiBold / Bold share the same scale
        'body-12': ['12px', { lineHeight: '150%' }],
        'body-14': ['14px', { lineHeight: '150%' }],
        'body-16': ['16px', { lineHeight: '150%' }],
        'body-18': ['18px', { lineHeight: '150%' }],
        'body-20': ['20px', { lineHeight: '150%' }],
        // Display token for stat numbers
        stat: ['40px', { lineHeight: '1', fontWeight: '700' }],
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        'icon-lg': '50px',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        card: '20px', // marquee service cards
      },
      letterSpacing: {
        tagline: '0.50em', // FACTS / section tagline labels
      },
      transitionDuration: {
        instant: '80ms',
        fast: '150ms',
        base: '250ms',
        moderate: '350ms',
        slow: '500ms',
        crawl: '700ms',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
