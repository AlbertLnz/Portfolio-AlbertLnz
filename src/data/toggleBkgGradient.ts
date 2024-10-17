export const toggleBkgGradient = (
  domElement: 'class' | 'id',
  elts: string,
  object: any,
  gradients: {
    dark: string
    light: string
  }
) => {
  const applyTheme = () => {
    let domElts
    if (domElement === 'class') {
      domElts = document.querySelectorAll(`.${elts}`)
    }

    if (domElement === 'id') {
      domElts = document.querySelectorAll(`#${elts}`)
    }

    domElts?.forEach((domElt) => {
      const tag = domElt.getAttribute('data-tag')
      const clearedTag = tag?.replace('post-', '')

      if (clearedTag && object) {
        const { border, backgroundPosts, backgroundPost } = object[clearedTag]
        const theme = localStorage.getItem('theme')

        const gradientsMap = {
          class: {
            dark: `${gradients.dark} ${backgroundPosts} ${border}`,
            light: `${gradients.light} ${backgroundPosts} ${border}`,
          },
          id: {
            dark: `${gradients.dark} ${backgroundPost} ${border}`,
            light: `${gradients.light} ${backgroundPost} ${border}`,
          },
        }

        const currentGradient = gradientsMap[domElement]
        if (currentGradient) {
          domElt.classList.remove(
            ...currentGradient.dark.split(' '),
            ...currentGradient.light.split(' ')
          )

          const selectedGradient =
            theme === 'dark' ? currentGradient.dark : currentGradient.light
          domElt.classList.add(...selectedGradient.split(' '))
        }
      }
    })
  }

  const initTheme = () => {
    applyTheme()

    window.addEventListener('storage', (event) => {
      if (event.key === 'theme') {
        applyTheme()
      }
    })

    const observer = new MutationObserver(() => {
      const storedTheme = localStorage.getItem('theme')
      applyTheme()
    })

    observer.observe(document.body, { attributes: true })

    window.addEventListener('beforeunload', () => {
      observer.disconnect()
    })
  }

  document.addEventListener('astro:page-load', initTheme)
  return applyTheme
}
