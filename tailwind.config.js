/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(moreh|gray)-./,
      variants: ['hover, focus']
    }
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1440px'
    },
    extend: {
      height: {
        header: 'var(--header-height)',
        content: 'calc(100vh - var(--header-height) - var(--footer-height))',
        footer: 'var(--footer-height)'
      },
      // fontFamily: {
      //   pretendard: ['var(--font-pretendard)'],
      //   museosans: ['var(--font-museosans)'],
      //   museoslab: ['var(--font-museoslab)'],
      //   notosans: ['var(--font-notosans)']
      // },
      fontSize: {
        xt: ['8px', '1.5'],
        tt: ['9px', '1.5'],
        ti: ['10px', '1.5'],
        ts: ['11px', '1.5'],
        xs: ['12px', '1.5'],
        ss: ['13px', '1.5'],
        sm: ['14px', '1.5'],
        md: ['15px', '1.5'],
        base: ['16px', '1.5'],
        lg: ['18px', '1.5'],
        xl: ['20px', '1.5'],
        '2xl': ['24px', '1.5'],
        '4xl': ['32px', '1.5']
      },
      boxShadow: {
        depth0: '0px 4px 16px 0px #00000008',
        depth1: ['0px 1px 2px 0px #6061701F', '0px 0px 1px 0px #28293D14'],
        depth2: ['0px 2px 4px 0px #60617029', '0px 0px 1px 0px #28293D0A'],
        // depth3: ['0px 6px 8px 0px #60617029', '0px 2px 4px 0px #28293D0A', '0px -1px 3px 0px #28293D05'],
        depth3: '0px 4px 16px 0px #00000029',
        depth4: ['0px 12px 16px 0px #60617033', '0px 4px 6px 0px #28293D14', '0px -1px 3px 0px #28293D0A'],
        depth5: ['0px 16px 24px 0px #6061703D', '0px 8px 12px 0px #28293D1F', '0px -2px 8px 0px #28293D0A']
      },
      dropShadow: {
        text: ['1px 0 0 #393939', '-1px 0 0 #393939', '0 1px 0 #393939', '0 -1px 0 #393939']
      },
      transitionProperty: {
        height: 'height, min-height, max-height',
        padding: 'padding',
        margin: 'margin',
        left: 'left'
      },
      animation: {
        'ping-double': 'ping-double 2s cubic-bezier(0, 0.3, 0.6, 1) infinite',
        appear: 'appear 0.8s ease 0s 1 normal none running',
        slideup: 'slideup 0.5s linear'
      },
      keyframes: {
        'ping-double': {
          '0%': {
            'box-shadow': '0 0 0 0 var(--color-dot), 0 0 0 0 var(--color-dot)'
          },
          '25%': {
            'box-shadow': '0 0 0 3px var(--color-pulse), 0 0 0 0 var(--color-dot)'
          },
          '50%': {
            'box-shadow': '0 0 0 6px transparent, 0 0 0 3px var(--color-pulse)'
          },
          '75%': {
            'box-shadow': '0 0 0 6px transparent, 0 0 0 6px transparent'
          }
        },
        appear: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        slideup: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: 0
          },
          '90%': {
            transform: 'translateY(-20%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: 1
          }
        }
      },
      // https://tailwindcss.com/docs/customizing-colors
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        main: colors.indigo
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('notlastafter', '&:not(:last-child)::after')
    })
  ]
}
