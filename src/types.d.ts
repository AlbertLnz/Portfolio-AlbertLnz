import tools from './data/tools'

export interface Tool {
  title: string
  description: string
  link: string
  logo: typeof tools.logo
}

export interface Techs {
  javascript: boolean
  react: boolean
  typescript: boolean
  astro: boolean
  nextjs: boolean
  angular: boolean
  svelte: boolean
  reactnative: boolean
  laravel: boolean
  node: boolean
  express: boolean
  fastapi: boolean
  rust: boolean
  nestjs: boolean
  sql: boolean
  mongodb: boolean
  python: boolean
}

export interface CheckboxLanguage {
  javascript: boolean
  php: boolean
  python: boolean
}

export type Tech =
  | 'javascript'
  | 'react'
  | 'typescript'
  | 'astro'
  | 'nextjs'
  | 'angular'
  | 'svelte'
  | 'reactnative'
  | 'laravel'
  | 'node'
  | 'express'
  | 'fastapi'
  | 'rust'
  | 'nestjs'
  | 'sql'
  | 'mongodb'
  | 'python'

export type Language = 'javascript' | 'php' | 'python'

export interface PageStore {
  currentPage: number
  setCurrentPage: (page: number) => void
}

export interface ThemeStore {
  currentTheme: string
  setCurrentTheme: (theme: string) => void
}
