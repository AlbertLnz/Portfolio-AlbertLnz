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
    id: number
    title: string
    language: string
    author: string
    img: string
    shortDescription: string
    longDescription: string
    svg: string
    techs: string[]
    links: {
      github: string
      deploy: string
    }
  }
}
