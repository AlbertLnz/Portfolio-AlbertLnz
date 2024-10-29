import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useEffect, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from './Shadcn/ToggleGroup'

import { currentPageStore, currentThemeStore } from '@/store/store'
import './navbar.css'

const TABS_NAMES_MD = [
  { key: "0", title: "Contacto" },
  { key: "1", title: "Proyectos" },
  { key: "2", title: "Experiencia" },
  { key: "3", title: "Herramientas" },
];

const TABS_NAMES_SM = [
  { key: "0", title: "📞" },
  { key: "1", title: "📂" },
  { key: "2", title: "💼" },
  { key: "3", title: "🛠️" },
];

const Navbar2 = () => {
  const setCurrentTheme = currentThemeStore((state) => state.setCurrentTheme)

  const useCurrentPage = currentPageStore((state) => state.currentPage)
  const setCurrentPageStore = currentPageStore((state) => state.setCurrentPage)
  const [alwaysThemeValue, setAlwaysThemeValue] = useState('system')
  const [alwaysLanguageValue, setAlwaysLanguageValue] = useState('ENG')
  const [actualTab, setActualTab] = useState('0')
  const [tabs, setTabs] = useState(TABS_NAMES_MD);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTabs(TABS_NAMES_SM);
      } else {
        setTabs(TABS_NAMES_MD);
      }
    };

    // Check the screen size on initial load
    handleResize();

    // Add event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // useEffect to control the navigation
  useEffect(() => {
    setActualTab(String(useCurrentPage))
  }, [useCurrentPage])

  function handleTabSelected(key: React.Key) {
    if (key !== '99') setCurrentPageStore(Number(key))
    setActualTab(String(key))
  }

  // useEffect to control the themeColor & language
  useEffect(() => {
    setCurrentTheme(alwaysThemeValue)
    // setLanguage
  }, [alwaysThemeValue, alwaysLanguageValue])

  // Handle theme
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }

    if (alwaysThemeValue === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }

    if (alwaysThemeValue === 'light') {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [alwaysThemeValue])

  // console.log('CURRENT', useCurrentPage)
  // console.log('TAB', actualTab)
  // console.log('theme', alwaysThemeValue)
  // console.log('language', alwaysLanguageValue)

  return (
    <div className="flex justify-center items-center mx-auto fixed w-full mt-6 z-20">
      <Accordion
        className="absolute top-0 m-0 rounded-xl z-10 items-center h-10 max-w-fit px-8"
        hideIndicator={true}
        defaultExpandedKeys={['settings']}
      >
        <AccordionItem
          key="settings"
          aria-label="settings_accordion"
          className={`settings_accordion pt-7 sm:pt-0 h-full ${
            actualTab === '99' ? 'block' : 'hidden'
          }`}
        >
          {actualTab === '99' && (
            <div className="flex justify-center sm:justify-around items-center gap-x-2">
              <ToggleGroup
                size={'sm'}
                type="single"
                variant="outline"
                className="toggle z-20"
                defaultValue="system"
                value={alwaysThemeValue}
                onValueChange={(value) => {
                  if (value) setAlwaysThemeValue(value)
                }}
              >
                <ToggleGroupItem
                  id="darkTheme"
                  value="dark"
                  aria-label="Toggle italic"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_767_77)">
                      <path
                        d="M8 2.00002C8.088 2.00002 8.17534 2.00002 8.262 2.00002C7.40556 2.79583 6.85506 3.86659 6.7062 5.02617C6.55733 6.18576 6.81951 7.36084 7.44716 8.34718C8.07481 9.33351 9.02825 10.0687 10.1417 10.425C11.2552 10.7813 12.4584 10.7361 13.542 10.2974C13.1252 11.3004 12.4439 12.1714 11.5708 12.8175C10.6977 13.4637 9.66563 13.8607 8.58461 13.9663C7.50358 14.0719 6.41418 13.882 5.4326 13.417C4.45101 12.9519 3.61408 12.2292 3.01106 11.3258C2.40804 10.4224 2.06157 9.37221 2.00859 8.28734C1.95561 7.20246 2.19812 6.12355 2.71025 5.1657C3.22238 4.20784 3.98491 3.40697 4.91651 2.84851C5.84811 2.29005 6.91384 1.99495 8 1.99469V2.00002Z"
                        stroke="#D4D4D4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_767_77">
                        <rect width="16" height="16" fill="#FFFFFF" />
                      </clipPath>
                    </defs>
                  </svg>
                </ToggleGroupItem>
                <ToggleGroupItem
                  id="lightTheme"
                  value="light"
                  aria-label="Toggle strikethrough"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_766_73)">
                      <path
                        d="M5.33334 7.99998C5.33334 8.70722 5.61429 9.3855 6.11438 9.8856C6.61448 10.3857 7.29276 10.6666 8 10.6666C8.70725 10.6666 9.38552 10.3857 9.88562 9.8856C10.3857 9.3855 10.6667 8.70722 10.6667 7.99998C10.6667 7.29274 10.3857 6.61446 9.88562 6.11436C9.38552 5.61426 8.70725 5.33331 8 5.33331C7.29276 5.33331 6.61448 5.61426 6.11438 6.11436C5.61429 6.61446 5.33334 7.29274 5.33334 7.99998Z"
                        stroke="#D4D4D4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 8H2.66667M8 2V2.66667M13.3333 8H14M8 13.3333V14M3.73333 3.73333L4.2 4.2M12.2667 3.73333L11.8 4.2M11.8 11.8L12.2667 12.2667M4.2 11.8L3.73333 12.2667"
                        stroke="#D4D4D4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_766_73">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </ToggleGroupItem>
                <ToggleGroupItem
                  id="systemTheme"
                  value="system"
                  aria-label="Toggle bold"
                  defaultChecked={true}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 2H2.66667C1.93029 2 1.33334 2.59695 1.33334 3.33333V10C1.33334 10.7364 1.93029 11.3333 2.66667 11.3333H13.3333C14.0697 11.3333 14.6667 10.7364 14.6667 10V3.33333C14.6667 2.59695 14.0697 2 13.3333 2Z"
                      stroke="#D4D4D4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.33334 14H10.6667"
                      stroke="#D4D4D4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 11.3333V14"
                      stroke="#D4D4D4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ToggleGroupItem>
              </ToggleGroup>

              <div className="hidden sm:block">|</div>

              <ToggleGroup
                size={'sm'}
                type="single"
                variant="outline"
                className="toggle z-10"
                defaultValue="ENG"
                value={alwaysLanguageValue}
                onValueChange={(value) => {
                  if (value) setAlwaysLanguageValue(value)
                }}
              >
                <ToggleGroupItem
                  id="englishLanguage"
                  value="ENG"
                  aria-label="Toggle bold"
                  defaultChecked={true}
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1.87338V3.69231H2.50133L0 1.87338ZM2.07289 12H5.77778V9.306L2.07289 12ZM10.2222 9.30646V12H13.9267L10.2222 9.30646ZM0 8.30769V10.1266L2.50222 8.30769H0ZM13.9276 0H10.2222V2.694L13.9276 0ZM16 10.1271V8.30769H13.4973L16 10.1271ZM16 3.69231V1.87338L13.4982 3.69231H16ZM5.77778 0H2.07289L5.77778 2.694V0Z"
                      fill="#00247D"
                    />
                    <path
                      d="M11.1733 8.30769L15.4898 11.4466C15.7006 11.2211 15.8521 10.9431 15.9298 10.6394L12.7231 8.30769H11.1733ZM5.77778 8.30769H4.82622L0.510222 11.4462C0.741778 11.6908 1.03867 11.8657 1.37156 11.9469L5.77778 8.74292V8.30769ZM10.2222 3.69231H11.1738L15.4898 0.553846C15.2542 0.305665 14.9557 0.132012 14.6289 0.0530768L10.2222 3.25708V3.69231ZM4.82622 3.69231L0.510222 0.553846C0.299535 0.779526 0.147918 1.0574 0.0697778 1.36108L3.27644 3.69231H4.82622Z"
                      fill="#CF1B2B"
                    />
                    <path
                      d="M16 7.38462H9.33333V12H10.2222V9.30646L13.9267 12H14.2222C14.4583 12 14.6921 11.9511 14.9098 11.8561C15.1274 11.7611 15.3246 11.6218 15.4898 11.4466L11.1733 8.30769H12.7231L15.9298 10.6394C15.9711 10.4838 16 10.3228 16 10.1538V10.1271L13.4973 8.30769H16V7.38462ZM0 7.38462V8.30769H2.50222L0 10.1266V10.1538C0 10.6574 0.195111 11.1129 0.510222 11.4462L4.82622 8.30769H5.77778V8.74292L1.37156 11.9469C1.50222 11.9792 1.63733 12 1.77778 12H2.07289L5.77778 9.306V12H6.66667V7.38462H0ZM16 1.84615C16.0003 1.36245 15.817 0.898132 15.4898 0.553846L11.1738 3.69231H10.2222V3.25708L14.6289 0.0530768C14.4958 0.0191663 14.3593 0.00135603 14.2222 1.74636e-07L13.9276 0L10.2222 2.694V0L9.33333 1.74636e-07V4.61538H16V3.69231H13.4982L16 1.87338V1.84615ZM5.77778 0V2.694L2.07289 0L1.77778 1.74636e-07C1.54161 -0.000106695 1.30781 0.048837 1.09012 0.143952C0.87244 0.239066 0.675273 0.378431 0.510222 0.553846L4.82622 3.69231H3.27644L0.0697778 1.36108C0.0256801 1.51879 0.00221041 1.68194 0 1.84615V1.87338L2.50133 3.69231H0V4.61538H6.66667V1.74636e-07L5.77778 0Z"
                      fill="#EEEEEE"
                    />
                    <path
                      d="M9.33333 4.61538V1.74636e-07H6.66667V4.61538H0V7.38462H6.66667V12H9.33333V7.38462H16V4.61538H9.33333Z"
                      fill="#CF1B2B"
                    />
                  </svg>
                </ToggleGroupItem>
                <ToggleGroupItem
                  id="spanishLanguage"
                  value="ESP"
                  aria-label="Toggle italic"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V9C16 10.6569 14.6569 12 13 12H3C1.34315 12 0 10.6569 0 9V3Z"
                      fill="#FFD018"
                    />
                    <path
                      d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3H0Z"
                      fill="#DC251C"
                    />
                    <path
                      d="M0 9H16C16 10.6569 14.6569 12 13 12H3C1.34315 12 0 10.6569 0 9Z"
                      fill="#DC251C"
                    />
                    <rect x="3" y="4" width="2" height="2" fill="#DC251C" />
                    <path
                      d="M3 6H5V8H4C3.44772 8 3 7.55228 3 7V6Z"
                      fill="#FF8718"
                    />
                    <path
                      d="M5 6H7V7C7 7.55228 6.55228 8 6 8H5V6Z"
                      fill="#DC251C"
                    />
                    <rect x="5" y="4" width="2" height="2" fill="#A6A6A6" />
                    <circle cx="5" cy="6" r="0.5" fill="#2E4E9D" />
                  </svg>
                </ToggleGroupItem>
                <ToggleGroupItem
                  id="catalanLanguage"
                  value="CAT"
                  aria-label="Toggle strikethrough"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 10.1538C16 10.6435 15.8127 11.1131 15.4793 11.4593C15.1459 11.8055 14.6937 12 14.2222 12H1.77778C1.30628 12 0.854097 11.8055 0.520699 11.4593C0.187301 11.1131 0 10.6435 0 10.1538V1.84615C0 1.35652 0.187301 0.886947 0.520699 0.540726C0.854097 0.194505 1.30628 0 1.77778 0H14.2222C14.6937 0 15.1459 0.194505 15.4793 0.540726C15.8127 0.886947 16 1.35652 16 1.84615V10.1538Z"
                      fill="#FFD018"
                    />
                    <path d="M0 1.09091H16V2.18182H0V1.09091Z" fill="#DC251C" />
                    <path d="M0 3.27273H16V4.36364H0V3.27273Z" fill="#DC251C" />
                    <path d="M0 5.45455H16V6.54545H0V5.45455Z" fill="#DC251C" />
                    <path d="M0 9.81818H16V10.9091H0V9.81818Z" fill="#DC251C" />
                    <path d="M0 7.63636H16V8.72727H0V7.63636Z" fill="#DC251C" />
                  </svg>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          )}
        </AccordionItem>
      </Accordion>
      <Tabs
        aria-label="Options"
        className="flex items-center justify-center z-20 max-w-full px-8"
        selectedKey={actualTab}
        defaultSelectedKey="0"
        onSelectionChange={(key: React.Key) => handleTabSelected(key)}
        classNames={{
          base: '',
          tab: '',
          tabList: 'bg-[#EAEBEF] dark:bg-neutral-200',
          tabContent: 'text-black/90 dark:text-gray-900',
        }}
      >
        <Tab key="99" title="⚙️" />
        {tabs.map((tab) => (
          <Tab key={tab.key} title={tab.title} />
        ))}
      </Tabs>
    </div>
  )
}

export default Navbar2
