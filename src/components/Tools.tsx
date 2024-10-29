import IconSetup from '@/assets/tools/IconSetup'
import type { Tool } from '@/types'
import { useState } from 'react'
import './tools.css'

type Props = {
  tools: Tool[]
}

const Tools = ({ tools }: Props) => {
  const [clickSelected, setClickSelected] = useState<null | string>(null)
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null)
  const [hoverSelectedTitle, setHoverSelectedTitle] = useState('')
  const [hoverSelectedDescription, setHoverSelectedDescription] = useState('')
  const [hoverSelectedLink, setHoverSelectedLink] = useState('')

  const handleClickSelected = (index: number, title: string) => {
    if (selectedIndex === null) {
      setSelectedIndex(index)
      clickSelected === title ? setClickSelected(null) : setClickSelected(title)
    }

    if (clickSelected === title) {
      setSelectedIndex(null)
      setClickSelected(null)
    }
  }

  const handleHoverSelected = (
    title: string,
    description: string,
    link: string
  ) => {
    if (!clickSelected) {
      setHoverSelectedTitle(title)
      setHoverSelectedDescription(description)
      setHoverSelectedLink(link)
    }
  }

  return (
    <div className="flex flex-col items-center max-h-[80%]  justify-center w-[80%]">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-8 w-full text-center overflow-y-auto overflow-x-hidden place-items-center align-top">
        {tools.map((tool, index) => {
          return (
            <li
              key={index}
              className={` dark:bg-[#23272F] rounded-lg hover:cursor-pointer size-20 z-10 ${
                clickSelected && selectedIndex === index
                  ? 'border-4 border-blue-600'
                  : ''
              }`}
              onMouseEnter={() =>
                handleHoverSelected(tool.title, tool.description, tool.link)
              }
              onClick={() => handleClickSelected(index, tool.title)}
            >
              <IconSetup
                tool={tool.logo}
                className="flex flex-1 w-full justify-center items-center h-full p-4"
              />
            </li>
          )
        })}
      </ul>

      <footer className="bg-white dark:bg-[#23272F] flex justify-between px-10 text-sm items-center py-4 mx-auto w-full rounded-lg gap-x-4 mt-10">
        <p>
          <span className="font-bold text-xl">{hoverSelectedTitle}</span>:{' '}
          {hoverSelectedDescription}
        </p>
        <a href={hoverSelectedLink} target="_blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white dark:text-black"
          >
            <path
              d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59699 21.9548 8.33397 21.9434 7.02299C21.932 5.71201 21.4061 4.45794 20.4791 3.5309C19.5521 2.60386 18.298 2.07802 16.987 2.06663C15.676 2.05523 14.413 2.55921 13.47 3.47L11.75 5.18"
              stroke="currentColor"
              className="stroke-black dark:stroke-white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              />
            <path
              d="M14 11C13.5705 10.4259 13.0226 9.95081 12.3934 9.60706C11.7642 9.2633 11.0684 9.05888 10.3533 9.00766C9.63816 8.95645 8.92037 9.05963 8.24861 9.31021C7.57685 9.5608 6.96684 9.95293 6.45996 10.46L3.45996 13.46C2.54917 14.403 2.04519 15.666 2.05659 16.977C2.06798 18.288 2.59382 19.542 3.52086 20.4691C4.4479 21.3961 5.70197 21.922 7.01295 21.9334C8.32393 21.9448 9.58694 21.4408 10.53 20.53L12.24 18.82"
              stroke="currentColor"
              className="stroke-black dark:stroke-white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </footer>
    </div>
  )
}

export default Tools
