// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customTeal: {
          100: '#ccf2e9', // 亮色4階
          200: '#99e5d3', // 亮色3階
          300: '#66d7bd', // 亮色2階
          400: '#32caa7', // 亮色1階
          500: '#32ccbc', // 基礎顏色
          600: '#29a397', // 暗色1階
          700: '#1f7a72', // 暗色2階
          800: '#14524d', // 暗色3階
          900: '#0a2929', // 暗色4階
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /text-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|gray|zinc|neutral|stone)-500/,
      variants: ['responsive', 'hover', 'focus'],
    },
    {
      pattern: /text-((xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl))/,
      variants: ['responsive'],
    },
  ],
}
