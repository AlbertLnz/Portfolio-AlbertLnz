export interface Post {
  data: {
    id: number
    title: string
    language: string
    date: string
    tag: string
    author: string
    img: string
    description: string
  }
}

export interface Project {
  data: {
    name: string
    author: string
    img: string
    shortDescription: string
    shortTechs: string[]
    links: {
      github: string
      deploy: string
    }
  }
}
