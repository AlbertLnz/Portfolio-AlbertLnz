import './contact.css'
import KeysAlert from './KeysAlert'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className="flex flex-col justify-center space-y-8 md:space-y-0 items-center md:flex-row p-0 sm:p-20 md:h-screen md:mx-auto md:max-w-screen-xl sm:mb-10 max-h-full">
      <img
        src="../../src/assets/contact/me2.png"
        alt=""
        className="size-[50vw] md:size-[20vw] rounded-full border-4 border-[#818cf8]"
      />
      <div className="flex flex-col h-full dark:text-white/90 justify-center items-center sm:items-start md:ml-10 space-y-6 md:space-y-10">
        <h1 className="text-3xl sm:text-6xl text-center sm:text-start text-neutral-900/90 dark:text-white/90">
          Hey, soy Albert
          <span className="text-[#818cf8] font-bold text-3xl sm:text-6xl">.</span>
        </h1>
        <h3 className="text-medium sm:text-xl max-w-[90%] text-center md:text-start text-balance leading-relaxed text-neutral-900/90 dark:text-white/90">
          A fullstack web developer from Barcelona with +2 years of experience.
          <br />
          I'm passionate about databases, UI/UX design and building open-source
          software.
        </h3>
        <a
          href="https://linkedin.com/in/albert-lanza-rio"
          target="_blank"
          rel="noopener"
        >
          <div className="flex items-center">
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
              <div className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-green-900/90 dark:text-white/90 backdrop-blur-3xl whitespace-nowrap">
                Disponible para trabajar
              </div>
            </span>
          </div>
        </a>
        <div className="flex flex-wrap w-[50%] sm:w-auto sm:flex-nowrap gap-y-2 sm:flex-col md:flex-row text-sm sm:text-xl place-content-between justify-center text-center items-center gap-x-8 text-neutral-900/90 dark:text-white/90">
          <a
            href="https://github.com/AlbertLnz"
            target="_blank"
            className="rrss underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/albert-lanza-rio"
            target="_blank"
            className="rrss underline-offset-4"
          >
            LinkedIn
          </a>
          <a href="" target="_blank" className="rrss underline-offset-4">
            CV
          </a>
          <a
            href="mailto:albert.lnz.rio@gmail.com"
            target="_blank"
            className="rrss underline-offset-4"
          >
            Gmail
          </a>
          <a
            href="https://discord.com/users/818193746872762388"
            target="_blank"
            className="rrss underline-offset-4"
          >
            Discord
          </a>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-0 pb-10">
        <KeysAlert />
      </div>
    </div>
  )
}

export default Contact
