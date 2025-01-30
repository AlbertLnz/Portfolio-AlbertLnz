import { workItemsEN, workItemsES, workItemsCA } from '@/data/works'

export const languages = {
  en: 'English',
  es: 'Español',
  ca: 'Català',
}

export const defaultLang = 'en'

export const ui = {
  en: {
    lang: 'en',
    nextLang: 'es',
    homepage_personal: {
      text_intro: 'Welcome',
      title_one: "I'm",
      title_two: 'Albert Lanza',
      title_three:
        ', a fullstack web developer from Barcelona with +2 years of experience. Passionate about databases, UI/UX design and building open-source software.',
      github_title_one: 'My GitHub',
      github_title_two: 'stats',
      github_note: 'Using Astro Server Islands',
      magic_title: '✨ Magic Trick',
      magic_note: 'Using Astro View Transitions',
      apologise_one: '*This portfolio is still in development',
      apologise_two: 'Thanks for your patience! 🫠',
    },
    homepage_projects: {
      title: 'Projects',
      all: 'View all projects',
    },
    homepage_works: {
      title: "Let's Work",
      works: workItemsEN,
    },
    homepage_tools: {
      tool_note: 'Tools I use daily as a programmer',
      astro:
        'Astro is a new kind of static site builder for the modern web. It combines the power of Vue components with the flexibility of React-like libraries.',
      python:
        'Python is a high-level, interpreted programming language. It is a general-purpose language used in a wide variety of applications.',
      react:
        'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
      docker:
        'Docker is a platform for developing, shipping, and running applications. It is a containerization platform that automates the deployment of applications inside software containers.',
      laravel:
        'Laravel is a PHP web application framework. It is designed to help developers build web applications quickly and efficiently.',
      express:
        'Express is a JavaScript web application framework. It is designed to help developers build web applications quickly and efficiently.',
      git: 'Git is a version control system. It is designed to help developers track changes to their code and collaborate with others.',
      figma:
        'Figma is a vector graphics editor. It is designed to help developers create and collaborate on designs.',
      nextjs:
        'NextJS is a JavaScript web application framework. It is designed to help developers build web applications quickly and efficiently.',
      rust: 'Rust is a systems programming language. It is designed to help developers build fast, safe, and reliable software.',
      notion:
        'Notion is a note-taking application. It is designed to help developers organize and collaborate on their ideas.',
      angular:
        'Angular is a JavaScript web application framework. It is designed to help developers build web applications quickly and efficiently.',
      fastapi:
        'FastAPI is a Python web application framework. It is designed to help developers build web applications quickly and efficiently.',
      tailwind:
        'Tailwind CSS is a utility-first CSS framework. It is designed to help developers build fast, responsive, and accessible web applications.',
      mysql:
        'MySQL is a relational database management system. It is designed to help developers store and retrieve data quickly and efficiently.',
      mongodb:
        'MongoDB is a document-oriented database management system. It is designed to help developers store and retrieve data quickly and efficiently.',
      postgresql:
        'PostgreSQL is a relational database management system. It is designed to help developers store and retrieve data quickly and efficiently.',
    },
    homepage_portfolio: {
      text_one: 'Before start to coding,',
      text_two: 'design',
      text_three: 'Then, make it',
      text_four: 'real',
    },
    projects_page: {
      deploy_tooltip: '❌ Not deployed yet',
      info_readme: 'See more info in',
      techs_title: 'Technologies',
    },
    projects_aside: {
      sorting: 'Asc / Desc',
      all: 'View all',
    },
    error_page: {
      title: '404 - Page not found',
      text: 'The page you are looking for does not exist.',
      go_back: 'Go back to the',
      homepage: 'homepage',
    },
  },
  es: {
    lang: 'es',
    nextLang: 'ca',
    homepage_personal: {
      text_intro: 'Bienvenido',
      title_one: 'Soy',
      title_two: 'Albert Lanza',
      title_three:
        ', un desarrollador web fullstack de Barcelona con más de 2 años de experiencia. Apasionado por las bases de datos, el diseño UI/UX y la creación de software de código abierto.',
      github_title_one: 'Mi GitHub',
      github_title_two: ', estadísticas',
      github_note: 'Utilzando Astro Server Islands',
      magic_title: '✨ Truco de mágia',
      magic_note: 'Utilizando Astro View Transitions',
      apologise_one: '*Este portafolio está en desarrollo',
      apologise_two: 'Gracias por su paciencia! 🫠',
    },
    homepage_projects: {
      title: 'Proyectos',
      all: 'Ver todos los proyectos',
    },
    homepage_works: {
      title: '¡Vamos a trabajar!',
      works: workItemsES,
    },
    homepage_tools: {
      tool_note: 'Herramientas que uso diariamente como programador',
      astro:
        'Astro es un nuevo tipo de generador de sitios estáticos para la web moderna. Combina el poder de los componentes de Vue con la flexibilidad de bibliotecas similares a React.',
      python:
        'Python es un lenguaje de programación interpretado y de alto nivel. Es un lenguaje de propósito general utilizado en una amplia variedad de aplicaciones.',
      react:
        'React es una biblioteca de JavaScript para construir interfaces de usuario. Es mantenida por Facebook y una comunidad de desarrolladores y empresas individuales.',
      docker:
        'Docker es una plataforma para desarrollar, enviar y ejecutar aplicaciones. Es una plataforma de contenedores que automatiza el despliegue de aplicaciones dentro de contenedores de software.',
      laravel:
        'Laravel es un marco de aplicación web en PHP. Está diseñado para ayudar a los desarrolladores a construir aplicaciones web de manera rápida y eficiente.',
      express:
        'Express es un marco de aplicación web de JavaScript. Está diseñado para ayudar a los desarrolladores a construir aplicaciones web de manera rápida y eficiente.',
      git: 'Git es un sistema de control de versiones. Está diseñado para ayudar a los desarrolladores a rastrear cambios en su código y colaborar con otros.',
      figma:
        'Figma es un editor de gráficos vectoriales. Está diseñado para ayudar a los desarrolladores a crear y colaborar en diseños.',
      nextjs:
        'NextJS es un marco de aplicación web de JavaScript. Está diseñado para ayudar a los desarrolladores a construir aplicaciones web de manera rápida y eficiente.',
      rust: 'Rust es un lenguaje de programación de sistemas. Está diseñado para ayudar a los desarrolladores a construir software rápido, seguro y fiable.',
      notion:
        'Notion es una aplicación para tomar notas. Está diseñada para ayudar a los desarrolladores a organizarse y colaborar en sus ideas.',
      angular:
        'Angular es un marco de aplicación web de JavaScript. Está diseñado para ayudar a los desarrolladores a construir aplicaciones web de manera rápida y eficiente.',
      fastapi:
        'FastAPI es un marco de aplicación web en Python. Está diseñado para ayudar a los desarrolladores a construir aplicaciones web de manera rápida y eficiente.',
      tailwind:
        'Tailwind CSS es un marco CSS orientado a utilidades. Está diseñado para ayudar a los desarrolladores a construir aplicaciones web rápidas, responsivas y accesibles.',
      mysql:
        'MySQL es un sistema de gestión de bases de datos relacionales. Está diseñado para ayudar a los desarrolladores a almacenar y recuperar datos de manera rápida y eficiente.',
      mongodb:
        'MongoDB es un sistema de gestión de bases de datos orientado a documentos. Está diseñado para ayudar a los desarrolladores a almacenar y recuperar datos de manera rápida y eficiente.',
      postgresql:
        'PostgreSQL es un sistema de gestión de bases de datos relacionales. Está diseñado para ayudar a los desarrolladores a almacenar y recuperar datos de manera rápida y eficiente.',
    },
    homepage_portfolio: {
      text_one: 'Antes de programar,',
      text_two: 'diseña',
      text_three: 'Después, házlo',
      text_four: 'realidad',
    },
    projects_page: {
      deploy_tooltip: '❌ Aún no desplegado',
      info_readme: 'Ver más información en el',
      techs_title: 'Tecnologías',
    },
    projects_aside: {
      sorting: 'Asc / Desc',
      all: 'Ver todos',
    },
    error_page: {
      title: '404 - Página no encontrada',
      text: 'La página que estás buscando no existe.',
      go_back: 'Volver a la',
      homepage: 'página de inicio',
    },
  },
  ca: {
    lang: 'ca',
    nextLang: 'en',
    homepage_personal: {
      text_intro: 'Benvingut',
      title_one: 'Soc',
      title_two: 'Albert Lanza',
      title_three:
        ", un desenvolupador web fullstack de Barcelona amb més de 2 anys d'experiència. Apasionat per les bases de dades, el disseny UI/UX i la creació de software de codi obert.",
      github_title_one: 'El meu GitHub',
      github_title_two: ', estadístiques',
      github_note: 'Utilitzant Astro Server Islands',
      magic_title: '✨ Truc de màgia',
      magic_note: 'Utilitzant Astro View Transitions',
      apologise_one: '*Aquest portfoli està en desenvolupament',
      apologise_two: 'Gràcies per la seva paciència! 🫠',
    },
    homepage_projects: {
      title: 'Projectes',
      all: 'Veure tots els projectes',
    },
    homepage_works: {
      title: 'Anem a treballar!',
      works: workItemsCA,
    },
    homepage_tools: {
      tool_note: 'Eines que faig servir diàriament com a programador',
      astro:
        'Astro és un nou tipus de generador de llocs estàtics per a la web moderna. Combina la potència dels components de Vue amb la flexibilitat de biblioteques semblants a React.',
      python:
        "Python és un llenguatge de programació interpretat i de nivell alt. És un llenguatge de propòsit general utilitzat en una àmplia varietat d'aplicacions.",
      react:
        "React és una biblioteca de JavaScript per a la creació d'interfícies d'usuari. És mantinguda per Facebook i una comunitat de desenvolupadors i empreses individuals.",
      docker:
        "Docker és una plataforma per desenvolupar, enviar i executar aplicacions. És una plataforma de contenidors que automatitza el desplegament d'aplicacions dins de contenidors de programari.",
      laravel:
        "Laravel és un marc d'aplicacions web en PHP. Està dissenyat per ajudar els desenvolupadors a construir aplicacions web de manera ràpida i eficient.",
      express:
        "Express és un marc d'aplicacions web de JavaScript. Està dissenyat per ajudar els desenvolupadors a construir aplicacions web de manera ràpida i eficient.",
      git: 'Git és un sistema de control de versions. Està dissenyat per ajudar els desenvolupadors a fer un seguiment dels canvis en el seu codi i col·laborar amb altres.',
      figma:
        'Figma és un editor de gràfics vectorials. Està dissenyat per ajudar els desenvolupadors a crear i col·laborar en dissenys.',
      nextjs:
        "NextJS és un marc d'aplicacions web de JavaScript. Està dissenyat per ajudar els desenvolupadors a construir aplicacions web de manera ràpida i eficient.",
      rust: 'Rust és un llenguatge de programació de sistemes. Està dissenyat per ajudar els desenvolupadors a construir programari ràpid, segur i fiable.',
      notion:
        'Notion és una aplicació per prendre notes. Està dissenyada per ajudar els desenvolupadors a organitzar-se i col·laborar en les seves idees.',
      angular:
        "Angular és un marc d'aplicacions web de JavaScript. Està dissenyat per ajudar els desenvolupadors a construir aplicacions web de manera ràpida i eficient.",
      fastapi:
        "FastAPI és un marc d'aplicacions web en Python. Està dissenyat per ajudar els desenvolupadors a construir aplicacions web de manera ràpida i eficient.",
      tailwind:
        'Tailwind CSS és un marc CSS orientat a utilitats. Està dissenyat per ajudar els desenvolupadors a construir aplicacions web ràpides, responsives i accessibles.',
      mysql:
        'MySQL és un sistema de gestió de bases de dades relacionals. Està dissenyat per ajudar els desenvolupadors a emmagatzemar i recuperar dades de manera ràpida i eficient.',
      mongodb:
        'MongoDB és un sistema de gestió de bases de dades orientat a documents. Està dissenyat per ajudar els desenvolupadors a emmagatzemar i recuperar dades de manera ràpida i eficient.',
      postgresql:
        'PostgreSQL és un sistema de gestió de bases de dades relacionals. Està dissenyat per ajudar els desenvolupadors a emmagatzemar i recuperar dades de manera ràpida i eficient.',
    },
    homepage_portfolio: {
      text_one: 'Abans de programar,',
      text_two: 'dissenya',
      text_three: 'Després, fes-ho',
      text_four: 'realitat',
    },
    projects_page: {
      deploy_tooltip: '❌ Encara no desplegat',
      info_readme: 'Veure més informació en el',
      techs_title: 'Tecnologies',
    },
    projects_aside: {
      sorting: 'Asc / Desc',
      all: 'Veure tots',
    },
    error_page: {
      title: '404 - Pàgina no trobada',
      text: 'La pàgina que estàs buscant no existeix.',
      go_back: 'Tornar a la',
      homepage: "pàgina d'inici",
    },
  },
} as const
