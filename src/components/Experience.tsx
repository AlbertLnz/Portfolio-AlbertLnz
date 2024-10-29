const NUMBERS_WORKS = 3 // ITAcademy, ----, En busca de un nuevo reto, contactar

const Experience = () => {
  return (
    <section
      className={`grid sm:grid-cols-${NUMBERS_WORKS} h-[75%] gap-x-8 gap-y-4 overflow-y-auto max-w-full overflow-hidden mx-10 text-neutral-900/90 dark:text-white/90`}
    >
      <article className="bg-[#6e8dd4] dark:bg-[#172138] p-2 sm:px-6 border-4 hover:border-t-8 hover:border-l-8 transition-all duration-300 ease-in-out">
        <h2 className="text-4xl mb-2">Desarrollador Web FullStack</h2>
        <div className="ml-2 space-y-4">
          <h4 className="text-2xl">ITAcademy</h4>
          <span className="text-lg flex">Sept 20 - Jul 23</span>
          <p className="text-medium">
            Divulgo sobre programación y desarrollo web en diferentes
            plataformas. Galardonado como mejor creador de contenido de habla
            no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
          </p>
        </div>
      </article>
      <article className="bg-[#6e8dd4] dark:bg-[#172138] p-2 sm:px-6 border-4 hover:border-t-8 hover:border-l-8 transition-all duration-300 ease-in-out">
        <h2 className="text-4xl mb-2">Desarrollador Web FullStack</h2>
        <div className="ml-2 space-y-4">
          <h4 className="text-2xl">Twitch</h4>
          <span className="text-lg flex">Sept 20 - Jul 23</span>
          <p className="text-medium">
            Divulgo sobre programación y desarrollo web en diferentes
            plataformas. Galardonado como mejor creador de contenido de habla
            no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
          </p>
        </div>
      </article>
      <article className="order-first sm:order-none flex flex-col items-center justify-center text-4xl p-2 sm:px-6 border-4 border-dashed border-spacing-8 text-center transition-all duration-400 hover:scale-95">
        <p className="max-w-full">
          Actualmente en busca de nuevos retos,{' '}
          <span>
            <a
              href="https://www.linkedin.com/in/albert-lanza-rio/"
              target="_blank"
              className="underline underline-offset-4"
            >
              contactar
            </a>
            .
          </span>
        </p>
      </article>
    </section>
  )
}

export default Experience
