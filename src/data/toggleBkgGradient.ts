export const toggleBkgGradient = (elts: string, object: any) => {
  const applyTheme = () => {
    const domElts = document.querySelectorAll(`.${elts}`)

    domElts.forEach((domElt) => {
      const tag = domElt.getAttribute('data-tag')
      const clearedTag = tag?.replace('post-', '')

      if (clearedTag && object) {
        const { border, backgroundPosts } = object[clearedTag]

        const isDark = `bg-gradient-to-b from-[#171717] via-30% via-[#171717] to-100% ${backgroundPosts} border ${border}`
        const isLight = `bg-gradient-to-b from-[#EBEBF2] via-30% via-[#f2f2f2] to-100% ${backgroundPosts} border ${border}`

        domElt.classList.remove(...isDark.split(' '), ...isLight.split(' '))

        if (localStorage.getItem('theme') === 'dark') {
          domElt.classList.add(...isDark.split(' '))
        } else if (localStorage.getItem('theme') === 'light') {
          domElt.classList.add(...isLight.split(' '))
        }
      }
    })
  }

  const initTheme = () => {
    applyTheme()

    const interval = setInterval(() => {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme !== null) {
        applyTheme()
      }
    }, 1)

    window.addEventListener('beforeunload', () => {
      clearInterval(interval)
    })
  }

  document.addEventListener('astro:page-load', initTheme)
  return applyTheme
}
