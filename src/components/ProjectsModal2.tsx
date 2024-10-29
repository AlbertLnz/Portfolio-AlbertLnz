import { Divider } from '@nextui-org/divider'
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@nextui-org/modal'

import { Checkbox } from '@nextui-org/checkbox'
import { ToggleGroup, ToggleGroupItem } from './Shadcn/ToggleGroup'

import { useTechsStore } from '@/store/store'
import type { Language, Tech } from '@/types'
import { useEffect, useState } from 'react'
import './modal.css'

type Props = {
  openModal: boolean
}

const ProjectsModal2 = ({ openModal }: Props) => {
  const techs = useTechsStore((state) => state.techs)
  const changeTechStatus = useTechsStore((state) => state.changeTechStatus)
  const changeTechsStatus = useTechsStore((state) => state.changeTechsStatus)
  const [techsSelected, setTechsSelected] = useState<Tech[]>([])
  const [checkboxStatus, setCheckboxStatus] = useState<Boolean[]>([
    true,
    true,
    true,
  ]) // [0]: javascript, [1]: php, [2]: python
  // const [checkboxSelected, setCheckboxSelected] = useState<CheckboxLanguage>()
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  const handleLanguagesStatus = () => {
    ;(Object.keys(techs) as Array<Tech>).forEach((tech) => {
      const value = techs[tech]
      if (value) {
        setTechsSelected((prev) => [...prev, tech]) // string[] of techs
      }
    })
  }

  const handleLanguageStatus = (tech: Tech) => {
    changeTechStatus(tech)

    setTechsSelected((prevTechsSelected) => {
      if (prevTechsSelected.includes(tech)) {
        return prevTechsSelected.filter((selectedTech) => selectedTech !== tech)
      } else {
        return [...prevTechsSelected, tech]
      }
    })
  }

  const handleAllLanguageStatus = (language: Language, techs: Tech[]) => {
    const languageParser: { [key: string]: number } = {
      javascript: 0,
      php: 1,
      python: 2,
    }
    const languageIndex = languageParser[language]
    const newStatus = !checkboxStatus[languageIndex]
    changeTechsStatus(techs, newStatus)

    setCheckboxStatus((prevStatus) => {
      const newStatus = [...prevStatus]
      newStatus[languageIndex] = !prevStatus[languageIndex]
      return newStatus
    })
  }

  useEffect(() => {
    if (openModal) onOpen()
    if (!openModal) onClose()
  }, [openModal])

  useEffect(() => {
    setTechsSelected([])
    handleLanguagesStatus()
  }, [checkboxStatus])

  return (
    <div className="flex items-center flex-col justify-center">
      <button
        onClick={onOpen}
        className="absolute bottom-0 left-1/2 mb-2 rounded-full bg-gray-200 border-2 border-black z-50"
      >
        <svg
          viewBox="0 0 83 83"
          className="size-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.0546 32.1379C40.4052 30.7874 42.5949 30.7874 43.9454 32.1379L57.7788 45.9713C59.1293 47.3218 59.1293 49.5115 57.7788 50.8621C56.4282 52.2126 54.2385 52.2126 52.888 50.8621L41.5 39.4742L30.1121 50.8621C28.7616 52.2126 26.5719 52.2126 25.2213 50.8621C23.8707 49.5115 23.8707 47.3218 25.2213 45.9713L39.0546 32.1379Z"
            fill="#000000"
          />
        </svg>
      </button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom"
        className="hidden lg:block border-2 dark:border-white max-w-4xl"
        classNames={{
          wrapper: '',
          base: 'dark:border-[#292f46] dark:bg-[#19172c]',
          backdrop: 'bg-[#292f46]/50 backdrop-opacity-40',
          header: '',
          body: 'py-6',
          footer: '',
          closeButton: 'bg-red-400 text-black m-2',
        }}
        motionProps={{
          variants: {
            enter: {
              y: +5,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: 'easeOut',
              },
            },
            exit: {
              y: 500,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: 'easeIn',
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex items-center justify-center gap-x-10 mb-4">
                  <div className="flex items-center ">
                    <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                      <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                        <Checkbox
                          color="secondary"
                          defaultSelected={true}
                          onValueChange={() =>
                            handleAllLanguageStatus('javascript', [
                              'javascript',
                              'react',
                              'typescript',
                              'astro',
                              'nextjs',
                              'angular',
                              'svelte',
                              'reactnative',
                              'node',
                              'express',
                              'nestjs',
                              'mongodb',
                            ])
                          }
                          isSelected={checkboxStatus[0] as boolean}
                          size="md"
                          classNames={{
                            label: 'text-black dark:text-white',
                          }}
                        >
                          JavaScript
                        </Checkbox>
                      </div>
                    </span>
                  </div>{' '}
                  <div className="flex items-center ">
                    <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                      <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                        <Checkbox
                          color="secondary"
                          defaultSelected={true}
                          onValueChange={() =>
                            handleAllLanguageStatus('php', ['laravel'])
                          }
                          isSelected={checkboxStatus[1] as boolean}
                          size="md"
                          classNames={{
                            label: 'text-black dark:text-white',
                          }}
                        >
                          PHP
                        </Checkbox>
                      </div>
                    </span>
                  </div>
                  <div className="flex items-center ">
                    <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                      <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                        <Checkbox
                          color="secondary"
                          defaultSelected={true}
                          onValueChange={() =>
                            handleAllLanguageStatus('python', [
                              'fastapi',
                              'python',
                            ])
                          }
                          isSelected={checkboxStatus[2] as boolean}
                          size="md"
                          classNames={{
                            label: 'text-black dark:text-white',
                          }}
                        >
                          Python
                        </Checkbox>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 w-full">
                  <div className="flex w-full">
                    <Divider
                      orientation="vertical"
                      className="dark:bg-white mr-2 w-1"
                    />
                    <div className="flex flex-wrap">
                      <h3 className="text-neutral-900/90 dark:text-white ml-1 text-xl underline">
                        FrontEnd
                      </h3>
                      <ToggleGroup
                        size={'lg'}
                        type="multiple"
                        className="toggle toggleGroup z-10 flex flex-wrap justify-start gap-x-2 ml-2 mt-4"
                        defaultValue={techsSelected}
                        value={techsSelected}
                        onValueChange={
                          setTechsSelected as (value: string[]) => void
                        }
                      >
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="javascript"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('javascript')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2500"
                            height="2500"
                            viewBox="0 0 1052 1052"
                          >
                            <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                            <path
                              d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                              fill="#323330"
                            />
                          </svg>
                          <p className="text-sm">JavaScript</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="react"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('react')}
                        >
                          <svg
                            viewBox="0 0 256 228"
                            width="256"
                            height="228"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"
                              fill="#00D8FF"
                            />
                          </svg>
                          <p className="text-sm">React</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="typescript"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('typescript')}
                        >
                          <svg
                            viewBox="0 0 256 256"
                            width="256"
                            height="256"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
                              fill="#3178C6"
                            />
                            <path
                              d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
                              fill="#FFF"
                            />
                          </svg>
                          <p className="text-sm">TypeScript</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="astro"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('astro')}
                        >
                          <svg
                            viewBox="0 0 256 366"
                            xmlns="http://www.w3.org/2000/svg"
                            width="256"
                            height="366"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              fill="#fff"
                              d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"
                            />
                            <path
                              fill="#FF5D01"
                              d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"
                            />
                          </svg>
                          <p className="text-sm">Astro</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="nextjs"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('nextjs')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="180"
                            height="180"
                            viewBox="0 0 180 180"
                            fill="none"
                          >
                            <g mask="url(#mask0_408_139)">
                              <circle
                                cx="90"
                                cy="90"
                                r="87"
                                fill="black"
                                stroke="white"
                                strokeWidth="6"
                              />
                              <path
                                d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                                fill="url(#paint0_linear_408_139)"
                              />
                              <rect
                                x="115"
                                y="54"
                                width="12"
                                height="72"
                                fill="url(#paint1_linear_408_139)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_408_139"
                                x1="109"
                                y1="116.5"
                                x2="144.5"
                                y2="160.5"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" />
                                <stop
                                  offset="1"
                                  stopColor="white"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_408_139"
                                x1="121"
                                y1="54"
                                x2="120.799"
                                y2="106.875"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" />
                                <stop
                                  offset="1"
                                  stopColor="white"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          <p className="text-sm">NextJS</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="angular"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('angular')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 242 256"
                          >
                            <g clipPath="url(#a)">
                              <g mask="url(#b)">
                                <path
                                  fill="url(#c)"
                                  d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
                                />
                                <path
                                  fill="url(#d)"
                                  d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
                                />
                              </g>
                            </g>
                            <defs>
                              <linearGradient
                                id="c"
                                x1="53.2"
                                x2="245"
                                y1="231.9"
                                y2="140.7"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#E40035" />
                                <stop offset=".2" stopColor="#F60A48" />
                                <stop offset=".4" stopColor="#F20755" />
                                <stop offset=".5" stopColor="#DC087D" />
                                <stop offset=".7" stopColor="#9717E7" />
                                <stop offset="1" stopColor="#6C00F5" />
                              </linearGradient>{' '}
                              <linearGradient
                                id="d"
                                x1="44.5"
                                x2="170"
                                y1="30.7"
                                y2="174"
                                gradientUnits="userSpaceOnUse"
                              >
                                {' '}
                                <stop stopColor="#FF31D9" />
                                <stop
                                  offset="1"
                                  stopColor="#FF5BE1"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h242v256H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                          <p className="text-sm">Angular</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="svelte"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('svelte')}
                        >
                          <svg
                            viewBox="0 0 256 308"
                            width="256"
                            height="308"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
                              fill="#FF3E00"
                            />
                            <path
                              d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
                              fill="#FFF"
                            />
                          </svg>
                          <p className="text-sm">Svelte</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="reactnative"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('reactnative')}
                        >
                          <svg
                            viewBox="0 0 256 228"
                            width="256"
                            height="228"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"
                              fill="#087EA4"
                            />
                          </svg>
                          <p className="text-sm">React Native</p>
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <Divider
                      orientation="vertical"
                      className="dark:bg-white mr-2 w-1"
                    />
                    <div className="flex flex-wrap">
                      <h3 className="text-neutral-900/90 dark:text-white  ml-1 text-xl underline">
                        BackEnd
                      </h3>
                      <ToggleGroup
                        size={'lg'}
                        type="multiple"
                        className="toggle toggleGroup z-10 flex flex-wrap justify-start gap-x-2 ml-2 mt-4"
                        defaultValue={techsSelected}
                        value={techsSelected}
                        onValueChange={
                          setTechsSelected as (value: string[]) => void
                        }
                      >
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="laravel"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('laravel')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                            viewBox="0 0 256 264"
                          >
                            <path
                              d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z"
                              fill="#FF2D20"
                            />
                          </svg>
                          <p className="text-sm">Laravel</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="node"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('node')}
                        >
                          <svg
                            viewBox="0 0 256 228"
                            width="256"
                            height="228"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"
                              fill="#00D8FF"
                            />
                          </svg>
                          <p className="text-sm">Node</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="express"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('express')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            width="64"
                            height="64"
                          >
                            <path
                              fill="#fff"
                              d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"
                            />
                          </svg>
                          <p className="text-sm">Express</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="fastapi"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('fastapi')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                            viewBox="0 0 256 256"
                          >
                            <path
                              d="M128 0C57.33 0 0 57.33 0 128s57.33 128 128 128 128-57.33 128-128S198.67 0 128 0Zm-6.67 230.605v-80.288H76.699l64.128-124.922v80.288h42.966L121.33 230.605Z"
                              fill="#009688"
                            />
                          </svg>
                          <p className="text-sm">FastAPI</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="rust"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('rust')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 224 224"
                          >
                            <path
                              fill="#fff"
                              d="M218.46 109.358l-9.062-5.614c-.076-.882-.162-1.762-.258-2.642l7.803-7.265a3.107 3.107 0 00.933-2.89 3.093 3.093 0 00-1.967-2.312l-9.97-3.715c-.25-.863-.512-1.72-.781-2.58l6.214-8.628a3.114 3.114 0 00-.592-4.263 3.134 3.134 0 00-1.431-.637l-10.507-1.709a80.869 80.869 0 00-1.263-2.353l4.417-9.7a3.12 3.12 0 00-.243-3.035 3.106 3.106 0 00-2.705-1.385l-10.671.372a85.152 85.152 0 00-1.685-2.044l2.456-10.381a3.125 3.125 0 00-3.762-3.763l-10.384 2.456a88.996 88.996 0 00-2.047-1.684l.373-10.671a3.11 3.11 0 00-1.385-2.704 3.127 3.127 0 00-3.034-.246l-9.681 4.417c-.782-.429-1.567-.854-2.353-1.265l-1.713-10.506a3.098 3.098 0 00-1.887-2.373 3.108 3.108 0 00-3.014.35l-8.628 6.213c-.85-.27-1.703-.53-2.56-.778l-3.716-9.97a3.111 3.111 0 00-2.311-1.97 3.134 3.134 0 00-2.89.933l-7.266 7.802a93.746 93.746 0 00-2.643-.258l-5.614-9.082A3.125 3.125 0 00111.97 4c-1.09 0-2.085.56-2.642 1.478l-5.615 9.081a93.32 93.32 0 00-2.642.259l-7.266-7.802a3.13 3.13 0 00-2.89-.933 3.106 3.106 0 00-2.312 1.97l-3.715 9.97c-.857.247-1.71.506-2.56.778L73.7 12.588a3.101 3.101 0 00-3.014-.35A3.127 3.127 0 0068.8 14.61l-1.713 10.506c-.79.41-1.575.832-2.353 1.265l-9.681-4.417a3.125 3.125 0 00-4.42 2.95l.372 10.67c-.69.553-1.373 1.115-2.048 1.685l-10.383-2.456a3.143 3.143 0 00-2.93.832 3.124 3.124 0 00-.833 2.93l2.436 10.383a93.897 93.897 0 00-1.68 2.043l-10.672-.372a3.138 3.138 0 00-2.704 1.385 3.126 3.126 0 00-.246 3.035l4.418 9.7c-.43.779-.855 1.563-1.266 2.353l-10.507 1.71a3.097 3.097 0 00-2.373 1.886 3.117 3.117 0 00.35 3.013l6.214 8.628a89.12 89.12 0 00-.78 2.58l-9.97 3.715a3.117 3.117 0 00-1.035 5.202l7.803 7.265c-.098.879-.184 1.76-.258 2.642l-9.062 5.614A3.122 3.122 0 004 112.021c0 1.092.56 2.084 1.478 2.642l9.062 5.614c.074.882.16 1.762.258 2.642l-7.803 7.265a3.117 3.117 0 001.034 5.201l9.97 3.716a110 110 0 00.78 2.58l-6.212 8.627a3.112 3.112 0 00.6 4.27c.419.33.916.547 1.443.63l10.507 1.709c.407.792.83 1.576 1.265 2.353l-4.417 9.68a3.126 3.126 0 002.95 4.42l10.65-.374c.553.69 1.115 1.372 1.685 2.047l-2.435 10.383a3.09 3.09 0 00.831 2.91 3.117 3.117 0 002.931.83l10.384-2.436a82.268 82.268 0 002.047 1.68l-.371 10.671a3.11 3.11 0 001.385 2.704 3.125 3.125 0 003.034.241l9.681-4.416c.779.432 1.563.854 2.353 1.265l1.713 10.505a3.147 3.147 0 001.887 2.395 3.111 3.111 0 003.014-.349l8.628-6.213c.853.271 1.71.535 2.58.783l3.716 9.969a3.112 3.112 0 002.312 1.967 3.112 3.112 0 002.89-.933l7.266-7.802c.877.101 1.761.186 2.642.264l5.615 9.061a3.12 3.12 0 002.642 1.478 3.165 3.165 0 002.663-1.478l5.614-9.061c.884-.078 1.765-.163 2.643-.264l7.265 7.802a3.106 3.106 0 002.89.933 3.105 3.105 0 002.312-1.967l3.716-9.969c.863-.248 1.719-.512 2.58-.783l8.629 6.213a3.12 3.12 0 004.9-2.045l1.713-10.506c.793-.411 1.577-.838 2.353-1.265l9.681 4.416a3.13 3.13 0 003.035-.241 3.126 3.126 0 001.385-2.704l-.372-10.671a81.794 81.794 0 002.046-1.68l10.383 2.436a3.123 3.123 0 003.763-3.74l-2.436-10.382a84.588 84.588 0 001.68-2.048l10.672.374a3.104 3.104 0 002.704-1.385 3.118 3.118 0 00.244-3.035l-4.417-9.68c.43-.779.852-1.563 1.263-2.353l10.507-1.709a3.08 3.08 0 002.373-1.886 3.11 3.11 0 00-.35-3.014l-6.214-8.627c.272-.857.532-1.717.781-2.58l9.97-3.716a3.109 3.109 0 001.967-2.311 3.107 3.107 0 00-.933-2.89l-7.803-7.265c.096-.88.182-1.761.258-2.642l9.062-5.614a3.11 3.11 0 001.478-2.642 3.157 3.157 0 00-1.476-2.663h-.064zm-60.687 75.337c-3.468-.747-5.656-4.169-4.913-7.637a6.412 6.412 0 017.617-4.933c3.468.741 5.676 4.169 4.933 7.637a6.414 6.414 0 01-7.617 4.933h-.02zm-3.076-20.847c-3.158-.677-6.275 1.334-6.936 4.5l-3.22 15.026c-9.929 4.5-21.055 7.018-32.614 7.018-11.89 0-23.12-2.622-33.234-7.328l-3.22-15.026c-.677-3.158-3.778-5.18-6.936-4.499l-13.273 2.848a80.222 80.222 0 01-6.853-8.091h64.61c.731 0 1.218-.132 1.218-.797v-22.91c0-.665-.487-.797-1.218-.797H94.133v-14.469h20.415c1.864 0 9.97.533 12.551 10.898.811 3.179 2.601 13.54 3.818 16.863 1.214 3.715 6.152 11.146 11.415 11.146h32.202c.365 0 .755-.041 1.166-.116a80.56 80.56 0 01-7.307 8.587l-13.583-2.911-.113.058zm-89.38 20.537a6.407 6.407 0 01-7.617-4.933c-.74-3.467 1.462-6.894 4.934-7.637a6.417 6.417 0 017.617 4.933c.74 3.468-1.464 6.894-4.934 7.637zm-24.564-99.28a6.438 6.438 0 01-3.261 8.484c-3.241 1.438-7.019-.025-8.464-3.261-1.445-3.237.025-7.039 3.262-8.483a6.416 6.416 0 018.463 3.26zM33.22 102.94l13.83-6.15c2.952-1.311 4.294-4.769 2.972-7.72l-2.848-6.44H58.36v50.362h-22.5a79.158 79.158 0 01-3.014-21.672c0-2.869.155-5.697.452-8.483l-.08.103zm60.687-4.892v-14.86h26.629c1.376 0 9.722 1.59 9.722 7.822 0 5.18-6.399 7.038-11.663 7.038h-24.77.082zm96.811 13.375c0 1.973-.072 3.922-.216 5.862h-8.113c-.811 0-1.137.532-1.137 1.327v3.715c0 8.752-4.934 10.671-9.268 11.146-4.129.464-8.691-1.726-9.248-4.252-2.436-13.684-6.482-16.595-12.881-21.672 7.948-5.036 16.204-12.487 16.204-22.498 0-10.753-7.369-17.523-12.385-20.847-7.059-4.644-14.862-5.572-16.968-5.572H52.899c11.374-12.673 26.835-21.673 44.174-24.975l9.887 10.361a5.849 5.849 0 008.278.19l11.064-10.568c23.119 4.314 42.729 18.721 54.082 38.598l-7.576 17.09c-1.306 2.951.027 6.419 2.973 7.72l14.573 6.48c.255 2.607.383 5.224.384 7.843l-.021.052zM106.912 24.94a6.398 6.398 0 019.062.209 6.437 6.437 0 01-.213 9.082 6.396 6.396 0 01-9.062-.21 6.436 6.436 0 01.213-9.083v.002zm75.137 60.476a6.402 6.402 0 018.463-3.26 6.425 6.425 0 013.261 8.482 6.402 6.402 0 01-8.463 3.261 6.425 6.425 0 01-3.261-8.483z"
                            />
                          </svg>
                          <p className="text-sm">Rust</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="nestjs"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('nestjs')}
                        >
                          <svg
                            viewBox="0 0 264.6 255.6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M153.3 4.2c-1.8 0-3.5.4-5 1 3.3 2.1 5.1 5 6 8.3 0 .5.2.8.3 1.3l.1 1.1c.3 5.7-1.5 6.4-2.7 9.8-1.9 4.3-1.4 9 .9 12.7.2.5.4 1 .8 1.4-2.5-16.3 11.1-18.8 13.7-23.9.2-4.4-3.5-7.4-6.4-9.5a14.3 14.3 0 0 0-7.7-2.2zM174 8c-.3 1.5 0 1.1-.1 1.9l-.2 1.7-.4 1.5-.5 1.6-.8 1.5-.5.7-.4.6c-.3.5-.6 1-1 1.3-.3.4-.6.9-1 1.2l-1.3 1c-1.4 1.1-3 1.9-4.3 2.9-.5.3-1 .5-1.3 1-.5.2-.9.6-1.3 1l-1.1 1.2-1 1.3-.9 1.3-.7 1.5-.5 1.5a21 21 0 0 0-.5 1.6l-.1.9-.1.7-.1 1.7v1.1l.3 1.6c0 .6.1 1 .3 1.6l.5 1.5.4 1-14.8-5.8-7.5-2-4-1a120 120 0 0 0-11.8-1.7h-.4A115.5 115.5 0 0 0 87 34.9l-3 .6c-2 .3-3.9.8-5.7 1.2l-3 .8-2.7 1.2-2.2 1-.3.1-1.8 1-.5.1-2 1-1.2.7-.6.3-1.7 1-1.6 1-1.3.9-.1.1-1.3 1H58l-1 .8-.4.3-1 .8c0 .2-.1.2-.2.3l-1.2 1v.2c-.5.3-.9.7-1.2 1.1l-.2.1-1 1c0 .2-.3.3-.4.5l-1 1.1-.4.3-1.4 1.6-.2.2a38.1 38.1 0 0 1-7 6 48.9 48.9 0 0 1-12.1 6c-2.7.5-5.5 1.6-7.9 1.8l-1.6.2-1.6.4-1.6.6-1.5.7-1.4.9c-.5.3-1 .7-1.3 1.1-.5.3-1 .8-1.3 1.2l-1.1 1.3-1 1.4-.9 1.5-.7 1.7-.6 1.7-.3 1.5v.2L6 86.2v2.1a6.9 6.9 0 0 0 .7 2.4l.7 1.2.8 1.2a17.1 17.1 0 0 0 2.4 2c1.5 1.4 1.9 1.9 3.9 2.9l1 .5h.2v.4a13.3 13.3 0 0 0 1 3.1l.5 1.2.1.3a28.3 28.3 0 0 0 1.8 2.8l1 1.2 1.3 1.1h.1a14.2 14.2 0 0 0 5.4 3l.3.1.8.2c-.2 3.5-.3 6.8.3 8 .5 1.2 3.4-2.7 6.2-7.2-.4 4.4-.6 9.7 0 11.2.7 1.6 4.6-3.4 8-9a74.7 74.7 0 0 1 92 65.8c-.8-7-9.4-10.8-13.4-9.9-2 4.8-5.2 11-10.5 14.8.4-4.3.2-8.7-.7-13-1.4 6-4.2 11.5-8 16.3a18 18 0 0 1-15.5-7l-.5-.8-.5-1.4-.4-1.3V176c0-.5.1-1 .3-1.4 0-.4.2-.9.4-1.3l.8-1.4c1-3 1-5.6-1-7l-1.1-.7-.9-.3-.5-.2-1.4-.3a5 5 0 0 0-1.3-.2l-1.4-.1h-1l-1.4.2-1.4.3-1.3.4-1.3.6-1.3.7c-15 9.8-6 32.8 4.2 39.5-3.8.7-7.8 1.5-8.9 2.3l-.1.2a60.9 60.9 0 0 0 19.2 7.4 61.5 61.5 0 0 0 72.6-51.3l.4 1.7c.2 1.2.5 2.4.6 3.7l.2 1.7v.3l.2 1.6.1 2.2v5.4l-.1.8v1.5c-.2.2-.2.4-.2.5 0 .6 0 1-.2 1.5v.6c0 .7-.2 1.2-.3 1.9v.1l-.4 1.8v.2c0 .6-.2 1.2-.4 1.8v.2l-.5 1.8v.2l-.5 1.8v.1l-.6 2-.7 1.8-.8 1.9-.7 1.9c-.4.5-.6 1.2-1 1.8l-.1.4s0 .2-.2.2a61.2 61.2 0 0 1-18.1 21.7l-1.6 1.1c0 .2-.3.2-.4.4l-1.4 1 .2.3 2.7-.4h.1a137.7 137.7 0 0 0 6.5-1.2l.9-.2 1.3-.3 1.2-.3c6.4-1.5 12.7-3.7 18.7-6.2-10.2 14-24 25.3-40.1 32.8a103.2 103.2 0 0 0 83.1-52.6c-2.7 15-8.6 29.1-17.4 41.5a101.7 101.7 0 0 0 44.5-69.2c2.2 10.2 2.8 20.7 1.8 31.1 46.7-65 4-132.5-14-150.3l-.1-.3v.1l-.1-.1-.2 2.3a87 87 0 0 1-.6 4.3l-1.1 4.3a53.7 53.7 0 0 1-3.5 8 44 44 0 0 1-9.9 12l-1.5 1.4a36 36 0 0 1-7.4 4.7l-4 1.8a45.5 45.5 0 0 1-8.6 2.3l-4.4.6a49.7 49.7 0 0 1-11.9-.8l-4.3-1.1a48 48 0 0 0 20.7-6.8l3.6-2.6 3.3-2.9 3-3.2c1-1.1 1.9-2.3 2.7-3.5.2-.1.3-.4.4-.6l1.9-3.1a44.5 44.5 0 0 0 3.5-8c.4-1.4.8-2.9 1-4.3.3-1.5.6-2.9.7-4.3l.3-4.4-.1-3.1-.6-4.3c-.2-1.5-.5-3-1-4.4-.4-1.3-.8-2.7-1.4-4.1-.5-1.4-1.1-2.7-1.8-4l-2.2-3.8a71.3 71.3 0 0 0-5.5-6.9 40.4 40.4 0 0 0-12-8.6C178 9.3 176 8.6 174 8z"
                              fill="#e0234e"
                              fillRule="evenodd"
                            />
                          </svg>
                          <p className="text-sm">NestJS</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="sql"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('sql')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                            viewBox="0 0 256 252"
                          >
                            <path
                              d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z"
                              fill="#00546B"
                            />
                            <path
                              d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z"
                              fill="#00546B"
                            />
                          </svg>
                          <p className="text-sm">SQL</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="mongodb"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('mongodb')}
                        >
                          <svg
                            viewBox="0 0 256 549"
                            xmlns="http://www.w3.org/2000/svg"
                            width="256"
                            height="549"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              fill="#01EC64"
                              d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"
                            />
                          </svg>
                          <p className="text-sm">MongoDB</p>
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <Divider
                      orientation="vertical"
                      className="dark:bg-white mr-2 w-1"
                    />
                    <div className="flex flex-wrap">
                      <h3 className="text-neutral-900/90 dark:text-white ml-1 text-xl underline w-full h-fit">
                        Data Science
                      </h3>
                      <ToggleGroup
                        size={'lg'}
                        type="multiple"
                        className="toggle toggleGroup z-10 flex flex-wrap justify-start gap-x-2 ml-2 mt-4"
                        defaultValue={techsSelected}
                        value={techsSelected}
                        onValueChange={
                          setTechsSelected as (value: string[]) => void
                        }
                      >
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="python"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('python')}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2500"
                            height="2500"
                            fill="none"
                            viewBox="0 0 64 64"
                          >
                            <path
                              fill="url(#a)"
                              d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                            />
                            <path
                              fill="url(#b)"
                              d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"
                            />
                            <defs>
                              <linearGradient
                                id="a"
                                x1="19.075"
                                x2="34.898"
                                y1="18.782"
                                y2="34.658"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#387EB8" />
                                <stop offset="1" stopColor="#366994" />
                              </linearGradient>
                              <linearGradient
                                id="b"
                                x1="28.809"
                                x2="45.803"
                                y1="28.882"
                                y2="45.163"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#FFE052" />
                                <stop offset="1" stopColor="#FFC331" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <p className="text-sm">Python</p>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          className="ToggleGroupItem gap-x-2"
                          value="mongodb"
                          aria-label="Toggle italic"
                          onClick={() => handleLanguageStatus('mongodb')}
                        >
                          <svg
                            viewBox="0 0 256 549"
                            xmlns="http://www.w3.org/2000/svg"
                            width="256"
                            height="549"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              fill="#01EC64"
                              d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"
                            />
                          </svg>
                          <p className="text-sm">MongoDB</p>
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ProjectsModal2
