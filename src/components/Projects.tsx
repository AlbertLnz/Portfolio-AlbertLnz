import { useTechsStore } from '@/store/store'
import React from 'react'
import ProjectItem from './ProjectItem'

interface Project {
  title: string
  description: string
  image: string
  link_github?: string
  link_demo?: string
}

const PROJECTS: Project[] = [
  {
    title: 'SVGL - A beautiful library with SVG logos',
    description:
      'Una biblioteca de logos SVG de las marcas más populares. +10k de visitas al mes. +2k svgs descargados. Creado desde 0 usando la librería de React con el framework Next.js y Tailwind.',
    image: '../../../src/assets/projects/svgl.png',
    link_github: undefined,
    link_demo: undefined
  },
  {
    title: 'SVGL - A beautiful library with SVG logos',
    description:
      'Una biblioteca de logos SVG de las marcas más populares. +10k de visitas al mes. +2k svgs descargados. Creado desde 0 usando la librería de React con el framework Next.js y Tailwind.',
    image: '../../../src/assets/projects/svgl.png',
    link_github: 'http://github.com',
    link_demo: ''
  },
  {
    title: 'SVGL - A beautiful library with SVG logos',
    description:
      'Una biblioteca de logos SVG de las marcas más populares. +10k de visitas al mes. +2k svgs descargados. Creado desde 0 usando la librería de React con el framework Next.js y Tailwind.',
    image: '../../../src/assets/projects/svgl.png',
    link_github: 'http://github.com',
    link_demo: ''
  },
  {
    title: 'SVGL - A beautiful library with SVG logos',
    description:
      'Una biblioteca de logos SVG de las marcas más populares. +10k de visitas al mes. +2k svgs descargados. Creado desde 0 usando la librería de React con el framework Next.js y Tailwind.',
    image: '../../../src/assets/projects/svgl.png',
    link_github: 'http://github.com',
    link_demo: ''
  },
]

const containsTech = (description: string, techs: string[]): boolean => {
  return techs.some((tech) =>
    description.toLowerCase().includes(tech.toLowerCase())
  )
}

const Projects: React.FC = () => {
  const techs = useTechsStore((state) => state.techs)

  const activeTechs: string[] = Object.keys(techs).filter((tech) => techs[tech])

  // Filtrar los proyectos que contienen alguna de las tecnologías activas
  const filteredProjects = PROJECTS.filter((project) =>
    containsTech(project.description, activeTechs)
  )

  return (
      <div className='h-lvh flex items-center pt-14 sm:pt-8 sm:px-10'>
        <ul className='space-y-4 overflow-y-scroll h-[80%]'>
          {filteredProjects.map((project, index) => (
            <li key={index}>
              <ProjectItem
                title={project.title}
                description={project.description}
                image={project.image}
                link_github={project.link_github}
                link_demo={project.link_demo}
              />
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Projects
