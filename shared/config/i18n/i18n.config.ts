import type { DetectBrowserLanguageOptions, ModuleOptions } from '@nuxtjs/i18n'
import { langConfig } from './lang.config'

const detectBrowserLanguageOptions: DetectBrowserLanguageOptions = {
  redirectOn: 'root',
  useCookie: true,
  alwaysRedirect: false,
  cookieCrossOrigin: false,
}

export const i18nConfig: Partial<ModuleOptions> = {
  baseUrl: process.env.HOST_URL,
  vueI18n: './shared/config/i18n/vueI18n.config.ts',
  defaultLocale: langConfig.defaultLocale,
  locales: langConfig.locales,
  strategy: 'prefix',
  detectBrowserLanguage: detectBrowserLanguageOptions,
}
