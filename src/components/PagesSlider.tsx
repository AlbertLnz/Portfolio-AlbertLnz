import EmblaCarousel, {
  type EmblaCarouselType,
  type EmblaOptionsType,
} from 'embla-carousel';
import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';
import '../components/carousel_css/base.css';
import '../components/carousel_css/embla.css';

import tools from '@/data/tools';
import { currentPageStore } from '@/store/store';
import Contact from './Contact';
const Projects = lazy(() => import('./Projects')); // lazy load to improve performance
const Experience = lazy(() => import('./Experience')); // lazy load to improve performance
const Tools = lazy(() => import('./Tools')); // lazy load to improve performance

const addPrevNextBtnsClickHandlers = (
  emblaApi: EmblaCarouselType,
  prevBtn: HTMLElement,
  nextBtn: HTMLElement
): (() => void) => {
  const scrollPrev = (): void => {
    emblaApi.scrollPrev()
  }
  const scrollNext = (): void => {
    emblaApi.scrollNext()
  }
  prevBtn.addEventListener('click', scrollPrev, false)
  nextBtn.addEventListener('click', scrollNext, false)

  return (): void => {
    prevBtn.removeEventListener('click', scrollPrev, false)
    nextBtn.removeEventListener('click', scrollNext, false)
  }
}

const PagesSlider: React.FC = () => {
  const useCurrentPage = currentPageStore((state) => state.currentPage)
  const setCurrentPage = currentPageStore((state) => state.setCurrentPage)
  const emblaNodeRef = useRef<HTMLDivElement>(null)
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null)
  const [keyOpenModal, setKeyOpenModal] = useState(false)

  // <ProjectsModal2 openModal={keyOpenModal} />


  const slides = [
    <Contact key="slide-0" />,
    <Suspense fallback={<div>Loading...</div>} key="slide-1"><Projects /></Suspense>,
    <Suspense fallback={<div>Loading...</div>} key="slide-2"><Experience /></Suspense>,
    <Suspense fallback={<div>Loading...</div>} key="slide-3"><Tools tools={tools} /></Suspense>
  ]

  useEffect(() => {
    if (!emblaNodeRef.current) return

    const emblaNode = emblaNodeRef.current
    const viewportNode = emblaNode.querySelector(
      '.embla__viewport'
    ) as HTMLElement
    const prevBtnNode = emblaNode.querySelector(
      '.embla__button--prev'
    ) as HTMLElement
    const nextBtnNode = emblaNode.querySelector(
      '.embla__button--next'
    ) as HTMLElement

    const OPTIONS: EmblaOptionsType = { loop: true }
    const emblaApi = EmblaCarousel(viewportNode, OPTIONS)
    setEmblaApi(emblaApi)

    const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
      emblaApi,
      prevBtnNode,
      nextBtnNode
    )
    emblaApi.on('destroy', removePrevNextBtnsClickHandlers)

    const onSelect = () => {
      setCurrentPage(emblaApi.selectedScrollSnap())
    }
    emblaApi.on('select', onSelect)

    return () => {
      removePrevNextBtnsClickHandlers()
      emblaApi.off('select', onSelect)
      emblaApi.destroy()
    }
  }, [])

  // ScrollTo
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(useCurrentPage)
    }
  }, [useCurrentPage, emblaApi])

  // Manage HadleKeyDown
  const handleKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      const currentPage = currentPageStore.getState().currentPage

      if (evt.key === 'ArrowRight') {
        setCurrentPage(currentPage + 1)
        setKeyOpenModal(false)
      } else if (evt.key === 'ArrowLeft') {
        setCurrentPage(currentPage - 1)
        setKeyOpenModal(false)
      }

      if (currentPage === 1 && evt.key === 'ArrowUp') {
        setKeyOpenModal(true)
      } else if (currentPage === 1 && evt.key === 'ArrowDown') {
        setKeyOpenModal(false)
      }
    },
    [setCurrentPage]
  )
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <section className="embla" ref={emblaNodeRef}>
      <div className="embla__viewport overflow-hidden">
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div
                className={`embla__slide__number border-2 bg-[#F5F5F5] border-neutral-600 dark:border-white dark:bg-[#131418] overflow-hidden ${
                  index === useCurrentPage ? 'border-0' : 'opacity-15'
                }`}
                id={`slide-${index.toString()}`}
              >
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-full flex justify-between z-50 px-2 sm:px-5">
        <button className="embla__button embla__button--prev" type="button">
          <svg className="embla__button__svg" viewBox="0 0 532 532">
            <path
              fill="black dark:white"
              d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            ></path>
          </svg>
        </button>

        <button className="embla__button embla__button--next" type="button">
          <svg className="embla__button__svg" viewBox="0 0 532 532">
            <path
              fill="black dark:white"
              d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default PagesSlider
