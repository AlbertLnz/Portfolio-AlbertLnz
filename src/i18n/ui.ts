import { workItemsEN, workItemsES, workItemsCA } from '@/data/works'

export const languages = {
  en: 'English',
  es: 'Español',
  ca: 'Català',
}

export const defaultLang = 'en'

export const ui = {
  en: {
    lang: 'en',
    nextLang: 'es',
    'work.title': "Let's Work",
    works: workItemsEN,
  },
  es: {
    lang: 'es',
    nextLang: 'ca',
    'work.title': '¡Vamos a trabajar!',
    works: workItemsES,
  },
  ca: {
    lang: 'ca',
    nextLang: 'en',
    'work.title': 'Anem a treballar!',
    works: workItemsCA,
  },
} as const
