import { createI18n } from 'vue-i18n'
import { en } from './en'
import { zh } from './zh'
import { fr } from './fr'

const messages = {
  en,
  zh,
  fr
}

export const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: localStorage.getItem('language') || 'en',
  fallbackLocale: 'en',
  messages
}) 