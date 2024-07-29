import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.vue',
    './entities/**/*.vue',
    './features/**/*.vue',
    './shared/**/*.vue',
    './widgets/**/*.vue',
    './app.vue',
  ],
} satisfies Config
