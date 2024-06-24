import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      midnight: '#0c0a1d',
      'midnight-alpha-0': '#0c0a1d00',
      white: '#fff',
      smokey: '#6f6d8a',
      lavender: '#8682b1',
      clay: '#36344b',
      steel: '#1f1d2f',
      'funky-start': '#ff00a8',
      'funky-end': '#00e0ff',
      'royal-start': '#6f4cff',
      'royal-end': '#432e99',
      'segmented-control-text-up': '#A6A3C8'
    },
    extend: {
      transitionTimingFunction: {
        'ease-out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    }
  }
}
export default config;