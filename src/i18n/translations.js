import { getLangFromUrl, useTranslations } from '@/i18n/utils'

export const homepagePersonalTranslations = (url) => {
  const lang = getLangFromUrl(url)
  const t = useTranslations(lang)
  // return t('homepage_personal')

  const {
    text_intro,
    title_one,
    title_two,
    title_three,
    github_title_one,
    github_title_two,
    github_note,
    magic_title,
    magic_note,
    apologise_one,
    apologise_two,
  } = t('homepage_personal')

  return {
    text_intro,
    title_one,
    title_two,
    title_three,
    github_title_one,
    github_title_two,
    github_note,
    magic_title,
    magic_note,
    apologise_one,
    apologise_two,
  }
}

export const homePageProjectsTranslations = (url) => {
  const lang = getLangFromUrl(url)
  const t = useTranslations(lang)

  const { title, all } = t('homepage_projects')

  return { title, all }
}

export const homePageWorksTranslations = (url) => {
  const lang = getLangFromUrl(url)
  const t = useTranslations(lang)

  const { title, works } = t('homepage_works')

  return { title, works }
}

export const homePageToolsTranslations = (url) => {
  const lang = getLangFromUrl(url)
  const t = useTranslations(lang)

  const {
    tool_note,
    astro,
    python,
    react,
    docker,
    laravel,
    express,
    git,
    figma,
    nextjs,
    rust,
    notion,
    angular,
    fastapi,
    tailwind,
    mysql,
    mongodb,
    postgresql,
  } = t('homepage_tools')

  return {
    tool_note,
    astro,
    python,
    react,
    docker,
    laravel,
    express,
    git,
    figma,
    nextjs,
    rust,
    notion,
    angular,
    fastapi,
    tailwind,
    mysql,
    mongodb,
    postgresql,
  }
}

export const homePagePortfolioTranslations = (url) => {
  const lang = getLangFromUrl(url)
  const t = useTranslations(lang)

  const { text_one, text_two, text_three, text_four } = t('homepage_portfolio')

  return { text_one, text_two, text_three, text_four }
}
