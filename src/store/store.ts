import type { PageStore, Tech, Techs, ThemeStore } from '@/types'
import { create } from 'zustand'

// Typing for TS
type TechsStore = {
  techs: Techs
  setTechs: (techs: Techs) => void
  changeTechStatus: (tech: Tech) => void
  changeTechsStatus: (techs: Tech[], state: boolean) => void
}

export const useTechsStore = create<TechsStore>((set) => ({
  techs: {
    javascript: true,
    react: true,
    typescript: true,
    astro: true,
    nextjs: true,
    angular: true,
    svelte: true,
    reactnative: true,
    laravel: true,
    node: true,
    express: true,
    fastapi: true,
    rust: true,
    nestjs: true,
    sql: true,
    mongodb: true,
    python: true,
  },
  setTechs: (techs: Techs) => {
    set(() => ({ techs }))
  },
  changeTechStatus: (tech: Tech) => {
    set((state) => ({
      techs: {
        ...state.techs,
        [tech]: !state.techs[tech],
      },
    }))
  },
  changeTechsStatus: async (techs: Tech[], status: boolean): Promise<void> =>
    new Promise<void>((resolve) => {
      set((prevState) => {
        const updatedTechs = { ...prevState.techs }
        techs.forEach((tech) => {
          updatedTechs[tech] = status
        })
        resolve()
        return { techs: updatedTechs }
      })
    }),
}))

export const currentPageStore = create<PageStore>((set) => ({
  currentPage: 0,
  setCurrentPage: (page: number) => {
    set(() => ({ currentPage: page }))
  },
}))

export const currentThemeStore = create<ThemeStore>((set) => ({
  currentTheme: 'system',
  setCurrentTheme: (theme: string) => {
    set(() => ({ currentTheme: theme }))
  },
}))
