import { useEffect, useState } from 'react'

type Props = {
  title: string
  image: string
  description: string
  link_github?: string
  link_demo?: string
}

const ProjectItem = ({
  title,
  image,
  description,
  link_github,
  link_demo,
}: Props) => {
  const handleDescriptionStyle = (description: string) => {
    const wordsToHighlight = {
      React: 'text-blue-500 font-bold',
      SVG: 'text-yellow-500 font-bold',
      Tailwind: 'text-[#1EBDBB] font-bold',
    }
    let highlightedText = description

    for (const [word, classes] of Object.entries(wordsToHighlight)) {
      const highlightedWord = `<span class="${classes}">${word}</span>`
      const regex = new RegExp(`(${word})`, 'g')
      highlightedText = highlightedText.replace(regex, highlightedWord)
    }

    return highlightedText
  }

  const handleLinkOpacity = () => {
    if (link_github === undefined) setLinkGitHubOpacity(true)
    if (link_demo === undefined) setLinkDemoOpacity(true)
  }

  const [linkGitHubOpacity, setLinkGitHubOpacity] = useState(false)
  const [linkDemoOpacity, setLinkDemoOpacity] = useState(false)
  const styledDescription = handleDescriptionStyle(description)

  useEffect(() => {
    handleLinkOpacity()
  }, [])

  return (
    <article className="flex flex-col sm:flex-row justify-center gap-x-8 w-3/4 mx-auto">
      <div className="flex flex-col sm:flex-row bg-[#E6E6E6] dark:bg-[#0D0D0D] rounded-[40px]">
        <div className="h-full flex flex-col p-4 sm:p-6">
          <h2 className="font-semibold text-center sm:text-start text-lg sm:text-3xl mb-4">{title}</h2>
          <p
            className="text-xs text-center sm:text-start sm:text-medium leading-relaxed"
            dangerouslySetInnerHTML={{ __html: styledDescription }}
          />
        </div>
        <div className="flex sm:flex-col h-full place-content-center gap-x-6 sm:gap-y-6 sm:py-10 mb-2 sm:mb-0 mx-5 z-10">
          <a id="github" target="_blank" href={link_github} className={`${linkGitHubOpacity ? 'hover:cursor-not-allowed' : 'cursor:pointer'} text-black dark:text-white p-2 z-20`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${linkGitHubOpacity ? 'opacity-10' : ''} text-black dark:text-white`}
            >
              <g clipPath="url(#clip0_778_184)">
                <path
                  d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.5C19.9988 8.30496 19.5325 7.15731 18.7 6.3C19.0905 5.26196 19.0545 4.11162 18.6 3.1C18.6 3.1 17.5 2.8 15.1 4.4C13.0672 3.87058 10.9328 3.87058 8.9 4.4C6.5 2.8 5.4 3.1 5.4 3.1C4.94548 4.11162 4.90953 5.26196 5.3 6.3C4.46745 7.15731 4.00122 8.30496 4 9.5C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21"
                  stroke="currentColor"
                  className='dark:stroke-white'
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_778_184">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a id="link" target="_blank" href={link_demo} className={`${linkDemoOpacity ? 'hover:cursor-not-allowed' : 'cursor:pointer'} text-black dark:text-white p-2 z-20`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${linkDemoOpacity ? 'opacity-10' : ''} text-white dark:text-black`}
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
        </div>
      </div>
    </article>
  )
}

export default ProjectItem
