/* empty css                          */
import 'html-escaper';
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead, l as renderTransition } from '../astro_JIMBsXrI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                          */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Astro$T = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$T, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$S = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$S, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const { currentLocale } = Astro2;
  return renderTemplate`<html${addAttribute(currentLocale, "lang")} class="dark"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})} </body></html>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/layouts/Layout.astro", void 0);

const $$Astro$R = createAstro();
const $$Photo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$R, $$props, $$slots);
  Astro2.self = $$Photo;
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-full flex justify-center items-center"> <img class="size-20 md:size-36 rounded-md" src="/imgs/linkedin_photo.webp" alt="profile"> </div>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Photo.astro", void 0);

const $$Astro$Q = createAstro();
const $$Name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$Name;
  return renderTemplate`${maybeRenderHead()}<h1 class="flex flex-grow text-2xl md:text-4xl md:pl-4 items-center justify-center">
Albert Lanza Rio
</h1>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Name.astro", void 0);

const $$Astro$P = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/LinkedIn.astro", void 0);

const $$Astro$O = createAstro();
const $$CV = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$CV;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`${Astro2.props.class} rounded-md`, "class")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 689 875" version="1.1"> <path id="path" d="M 37.585 1.119 C 24.707 4.139, 10.010 16.140, 3.840 28.673 L 0.500 35.458 0.500 440.979 L 0.500 846.500 3.431 852.478 C 7.333 860.438, 14.449 867.370, 22.759 871.307 L 29.500 874.500 340.978 874.755 C 624.152 874.986, 652.956 874.864, 657.965 873.408 C 665.253 871.289, 670.540 868.092, 676.331 862.301 C 681.143 857.489, 687.941 845.511, 688.070 841.616 C 688.139 839.547, 688.160 839.545, 689 841.500 C 689.481 842.619, 689.782 665.706, 689.683 440 C 689.586 218.075, 689.368 99.950, 689.198 177.500 C 688.889 318.408, 688.888 318.496, 686.959 312.500 C 685.898 309.200, 685.023 305.824, 685.015 304.999 C 684.997 303.192, 384.036 2, 382.249 2 C 381.562 2, 381 1.550, 381 1 C 381 -0.303, 43.150 -0.186, 37.585 1.119 M 0.495 441 C 0.495 662.925, 0.610 753.712, 0.750 642.750 C 0.890 531.787, 0.890 350.212, 0.750 239.250 C 0.610 128.287, 0.495 219.075, 0.495 441 M 227.500 421.399 C 213.784 424.077, 198.452 430.376, 185.925 438.480 C 177.903 443.669, 160.925 460.090, 153.671 469.676 C 138.715 489.439, 133.148 510.754, 134.276 543.931 C 134.885 561.826, 136.086 567.189, 142.453 580.455 C 153.156 602.756, 176.279 626.505, 198.801 638.329 C 209.082 643.727, 221.947 647.859, 232.745 649.229 C 243.701 650.621, 273.183 649.003, 284.318 646.400 C 297.997 643.202, 325.201 627.447, 337.713 615.478 L 344.333 609.144 341.006 605.322 C 339.176 603.220, 333.011 596.615, 327.306 590.644 L 316.934 579.788 308.717 587.650 C 290.772 604.822, 276.029 611, 253 611 C 238.409 611, 229.045 608.801, 216 602.311 C 207.995 598.328, 204.990 596.082, 196.909 588.042 C 188.427 579.602, 186.725 577.287, 182.178 568 C 173.807 550.900, 171.910 533.748, 176.483 516.500 C 183.157 491.328, 205.272 469.161, 232 460.852 C 242.808 457.493, 262.196 457.494, 273 460.854 C 284.542 464.443, 295 470.394, 305.948 479.602 C 311.440 484.221, 316.280 488, 316.704 488 C 317.128 488, 323.628 481.858, 331.149 474.351 L 344.825 460.702 335.662 452.729 C 314.645 434.439, 301.019 427.135, 280 422.893 C 267.270 420.323, 237.367 419.473, 227.500 421.399 M 354 423.477 C 354 423.739, 360.344 440.277, 368.098 460.227 C 375.852 480.177, 395.009 529.575, 410.669 570 C 426.328 610.425, 439.475 643.843, 439.883 644.262 C 440.291 644.681, 448.898 645.476, 459.011 646.028 C 473.580 646.823, 477.658 646.768, 478.650 645.765 C 479.800 644.604, 515.041 552.001, 542.686 477.500 C 560.978 428.203, 562.016 425.133, 560.684 424.268 C 560.033 423.846, 550.475 423.349, 539.444 423.164 C 523.577 422.898, 519.175 423.107, 518.370 424.164 C 517.811 424.899, 504.786 460.094, 489.427 502.376 C 474.067 544.657, 460.907 579.479, 460.183 579.758 C 459.458 580.037, 458.417 579.817, 457.870 579.270 C 457.322 578.722, 444.111 543.798, 428.511 501.661 C 412.911 459.524, 399.863 424.587, 399.515 424.024 C 398.888 423.010, 354 422.470, 354 423.477" fill-rule="evenodd" fill="currentColor"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/CV.astro", void 0);

const $$Astro$N = createAstro();
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="currentColor"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/GitHub.astro", void 0);

const $$Astro$M = createAstro();
const $$Discord = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$Discord;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 199" width="256" height="199" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Discord.astro", void 0);

const $$Astro$L = createAstro();
const $$Email = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$Email;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66"> <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"></path> <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"></path> <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"></path> <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"></path> <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Email.astro", void 0);

const $$Astro$K = createAstro();
const $$SocialMediaButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$SocialMediaButtons;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap h-full items-center justify-center md:justify-between mt-2 md:mt-0 gap-y-2"> <a href="https://www.linkedin.com/in/albert-lanza-rio/" target="_blank" class="mx-3 md:mx-4 hover:scale-125 ease-in-out duration-700" title="My LinkedIn page - Albert Lanza Rio"> ${renderComponent($$result, "LinkedInIcon", $$LinkedIn, { "class": "size-6" })} </a> <a href="/docs/CV - Albert Lanza.pdf" target="_blank" class="mx-3 md:mx-4 hover:scale-125 ease-in-out duration-700" title="Download CV - Albert Lanza Rio"> ${renderComponent($$result, "CVIcon", $$CV, { "class": "size-6" })} </a> <a href="https://discord.com/users/818193746872762388" target="_blank" class="mx-3 md:mx-4 hover:scale-125 ease-in-out duration-700" title="My Discord user - Albert Lanza Rio"> ${renderComponent($$result, "DiscordIcon", $$Discord, { "class": "size-6" })} </a> <a href="https://github.com/AlbertLnz" target="_blank" class="mx-3 md:mx-4 hover:scale-125 ease-in-out duration-700" title="My GitHub user - Albert Lanza Rio"> ${renderComponent($$result, "GitHubIcon", $$GitHub, { "class": "size-6" })} </a> <a href="mailto: albert.lnz.rio@gmail.com" class="mx-3 md:mx-4 hover:scale-125 ease-in-out duration-700" title="My eMail - Albert Lanza Rio"> ${renderComponent($$result, "EmailIcon", $$Email, { "class": "size-6" })} </a> </div>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/SocialMediaButtons.astro", void 0);

const SEO_TITLE_HOMEPAGE$2 = "Albert Lanza Rio Portfolio";
const SEO_DESCRIPTION_HOMEPAGE$2 = "Explore the portfolio of Albert Lanza Rio, a passionate web developer with a background in economics. Discover his technological skills and innovative approach to web development, merging technical expertise with a unique economic perspective. Explore exceptional projects that showcase his expertise in both disciplines, creating technological solutions with a strong economic focus. Learn more about how Albert combines the best of technology and economics to create impactful and functional web experiences!";
const SEO_TITLE_PORTFOLIO$2 = "Info Portfolio - Albert Lanza Rio";
const SEO_DESCRIPTION_PORTFOLIO$2 = "Uncover the choice behind my portfolio: Delve into the reasons that led me to select Astro as my primary framework. From its exceptional performance to its focus on speed and efficiency, I invite you to explore how Astro has empowered the creation of my portfolio in a unique way. Dive into the details on this informative page about my framework Astro 4 choice!";
const BENTO_TITLES$2 = {
	PROJECTS: "Projects",
	CHALLENGES: "Challenging me!",
	COURSES: "Courses",
	STUDIES: "Studies",
	JOBS: "Jobs",
	TOOLS: "Tools"
};
const OPEN_TO_WORK$2 = {
	TEXT1: "Open to",
	TEXT2: "work"
};
const SLOGAN$2 = {
	text1: "Web Developer",
	text2: "1 year of experience",
	text3: "Improving day by day",
	text4: "from Barcelona",
	abiliti1: "Co-Working",
	abiliti2: "Perseverance",
	abiliti3: "Ambitious",
	abiliti4: "Creativity",
	abiliti5: "Innovation",
	abiliti6: "Adaptability"
};
const PROJECTS$2 = {
	"1": {
		name: "API Dice",
		description: "The game involves rolling 2 dice; if the user rolls a 7, they win; otherwise, they lose. To play, you must register beforehand either as an anonymous user or using a username and email, with the advantage of being able to check your results (previous rolls and average). There is a ranking for the best player, the worst player and the overall ranking, which is restricted by the administrator user. All of this follows the MVC design pattern.",
		github: "https://github.com/AlbertLnz/dice-API",
		deploy: "",
		technologies: [
			"Laravel"
		]
	},
	"2": {
		name: "Football Managment App",
		description: "The application involves the management of a soccer league, allowing users to view and create teams, players and matches. All the data is interconnected through relationships among different tables configured in a SQL database. Any user can query the application's data, but only the administrator has the ability to create them.",
		github: "https://github.com/AlbertLnz/Football-managment-app",
		deploy: "",
		technologies: [
			"Laravel",
			"Blade"
		]
	},
	"3": {
		name: "CRUD Redux Toolkit",
		description: "A task application with React and Redux that allows the user to view, create, edit and delete tasks, helping them stay organized and productive in their daily activities.",
		github: "https://github.com/AlbertLnz/CRUD-Redux-Toolkit",
		deploy: "",
		technologies: [
			"React",
			"Redux"
		]
	},
	"4": {
		name: "ITA Landing",
		description: "Information page about the ITAcademy programming academy, where, through a connection to the back-end, it displays information about the academy and participants. It also includes a management section for the website once the user logs in (backoffice)",
		github: "https://github.com/IT-Academy-BCN/ita-landing-frontend",
		deploy: "https://it-academy-landing.netlify.app/",
		technologies: [
			"React",
			"TypeScript",
			"Laravel"
		]
	},
	"5": {
		name: "ReserveEat",
		description: "Reservation management website for different restaurants. The app allows creating multiple users, where each user can manage different restaurants. Subsequently, customer users can create reservations on a specific day, time slot, and assign a table. Users can also leave reviews for the restaurant.",
		github: "https://github.com/No-Country/nc_c14-40-m-php-vue",
		deploy: "",
		technologies: [
			"Vue",
			"Laravel"
		]
	},
	"6": {
		name: "ITA Profiles",
		description: "A webpage that displays the collaborators who have participated in various projects at ITAcademy, with the aim of informing recruiters about the different profiles of the participants.",
		github: "https://github.com/IT-Academy-BCN/ita-profiles-frontend",
		deploy: "",
		technologies: [
			"React",
			"TypeScript",
			"Laravel"
		]
	},
	"7": {
		name: "Jump2Digital",
		description: "Challenge to develop a vegetation level management app for Barcelona neighborhoods in less than 24 hours! Additionally, without prior knowledge of the team and distributing the work in Data, Back, and Front. An exciting challenge!!",
		github: "https://github.com/J2D-Hackaton",
		deploy: "https://j2d-team7-deployment.vercel.app",
		technologies: [
			"React",
			"Laravel",
			"Python"
		]
	}
};
const CHALLENGES$2 = {
	CODE: "Code"
};
const COURSES$2 = {
	"1": {
		name: "Introduction to C++ Programming",
		type: "Learning",
		timedate: "February 2019",
		certificate: "https://drive.google.com/file/d/1sSAXrmLGsNlCSPXOHmpOkH5-Pv5qRkid/view?usp=sharing",
		link_course: "http://youtube.es"
	},
	"2": {
		name: "Learn Low Code - CSS",
		type: "Learning",
		timedate: "October 2022",
		certificate: "https://drive.google.com/file/d/1wrSlkoPDYFSJJajmD4nY6Efm4BIVab44/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1266830"
	},
	"3": {
		name: "Artificial Intelligence and Data in the midst of the ChatGPT boom",
		type: "Talk",
		timedate: "March 2023",
		certificate: "https://drive.google.com/file/d/1Dx5HD6CbsAC77N09TOrhEVpCqfQb1_Ln/view?usp=sharing",
		link_course: "https://eurecat.org/el-boom-de-la-intelligencia-artificial-molt-mes-que-el-chatgpt/"
	},
	"4": {
		name: "Manage Databases with MySQL",
		type: "Learning",
		timedate: "March 2023",
		certificate: "https://drive.google.com/file/d/1aYdkTz4OlqY_69DEb0XRYbZFQDX_Y2oi/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1267314"
	},
	"5": {
		name: "Make a website with PHP, MySQL & Apache (LAMP)",
		type: "Learning",
		timedate: "March 2023",
		certificate: "https://drive.google.com/file/d/1HcDDo0-NYkKNbgqmPLnjqkuuONTZD60U/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1267312"
	},
	"6": {
		name: "Introduction to JavaScript language",
		type: "Learning",
		timedate: "April 2023",
		certificate: "https://drive.google.com/file/d/1RtrGSYVGaGNvHrlyNkEU2HWNKtxDwnqE/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1267258"
	},
	"7": {
		name: "Professional Growth in Multinational Companies",
		type: "Talk",
		timedate: "April 2023",
		certificate: "https://drive.google.com/file/d/1FQOFxE1v3Zof6hN7Gp3SgGNbWbW6_0d-/view?usp=sharing",
		link_course: ""
	},
	"8": {
		name: "Svelte, the Great Unknown",
		type: "Talk",
		timedate: "April 2023",
		certificate: "https://drive.google.com/file/d/1e4ea_2dqzNt5qigifRS3CbR_vrHwoYjB/view?usp=sharing",
		link_course: ""
	},
	"9": {
		name: "Learn to program an API in PHP & MySQL",
		type: "Learning",
		timedate: "May 2023",
		certificate: "https://drive.google.com/file/d/1R1ZGuyOHBAR3VTVz4ZQod-dfnMgjzF7H/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1274454"
	},
	"10": {
		name: "Hackathon Tech4Good",
		type: "Hackathon",
		timedate: "June 2023",
		certificate: "https://drive.google.com/file/d/142Fc75X8MJWt5kjyCtEa2QVKdiHv5Am3/view?usp=sharing",
		link_course: "http://hackathon.techlabs.org/details.html"
	},
	"11": {
		name: "Figma - Create your mockups",
		type: "Learning",
		timedate: "July 2023",
		certificate: "https://drive.google.com/file/d/1UOPOMw8P5qk_GJcKEMXLRAd2f2Aje4VQ/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1266485"
	},
	"12": {
		name: "The NASA International Space Apps Challenge",
		type: "Hackathon",
		timedate: "October 2023",
		certificate: "https://www.linkedin.com/posts/aar%C3%B3n-murillo-lort-b039b01a1_last-weekend-we-had-the-honour-to-be-a-part-activity-7118245275999059968-NN-d?utm_source=share&utm_medium=member_desktop",
		link_course: "https://www.spaceappschallenge.org/2023/locations/barcelona/"
	},
	"13": {
		name: "Jump2Digital Hackathon",
		type: "Hackathon",
		timedate: "November 2023",
		certificate: "",
		link_course: ""
	},
	"14": {
		name: "Scala 3 development masterclass 2023",
		type: "Learning",
		timedate: "November 2023",
		certificate: "",
		link_course: ""
	},
	"15": {
		name: "Introduction to Docker",
		type: "Learning",
		timedate: "January 2024",
		certificate: "",
		link_course: ""
	},
	BUTTONS: {
		NEWEST: "More recent",
		OLDEST: "More ancient",
		CERTIFICATE: "Certificate",
		COURSE_LINK: "Course link"
	}
};
const REFERENCES$2 = {
	"1": {
		author: "Luis Vicente Burguillo",
		author_linkedin: "https://es.linkedin.com/in/luisvicenteburguillo",
		author_linkedin_image: "https://media.licdn.com/dms/image/C4D03AQFzX_I0Lf9p5g/profile-displayphoto-shrink_200_200/0/1590135912695?e=2147483647&v=beta&t=AJfPHlGP5Orjja1TQOERNGtJnjXI8dD1oeLspE_POWY",
		message: "Hi child!"
	},
	"2": {
		author: "Xavi",
		author_linkedin: "https://es.linkedin.com/in/luisvicenteburguillo",
		author_linkedin_image: "https://media.licdn.com/dms/image/C4D03AQFzX_I0Lf9p5g/profile-displayphoto-shrink_200_200/0/1590135912695?e=2147483647&v=beta&t=AJfPHlGP5Orjja1TQOERNGtJnjXI8dD1oeLspE_POWY",
		message: "I'm Xavi"
	}
};
const STUDIES$2 = {
	"1": {
		name: "Social Sciences High School",
		school: "La Salle",
		school_image: "https://assets.change.org/photos/1/hl/fo/hWhLFoumAQuCRrq-800x450-noPad.jpg?1544528731",
		location: "Montcada i Reixac",
		period: "2016-2018"
	},
	"2": {
		name: "International Trade",
		school: "CE Prat",
		school_image: "https://www.prateducacio.com/wp-content/uploads/2020/06/prat-educacio-1-1024x577.jpg",
		location: "Barcelona",
		period: "2018-2020"
	},
	"3": {
		name: "Transport & Logistics",
		school: "CE Prat",
		school_image: "https://www.prateducacio.com/wp-content/uploads/2020/06/prat-educacio-1-1024x577.jpg",
		location: "Barcelona",
		period: "2020-2021"
	},
	"4": {
		name: "Degree in Economics",
		school: "University of Barcelona",
		school_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Facultat_d%27Economia_i_Empresa_-_UB.JPG/1200px-Facultat_d%27Economia_i_Empresa_-_UB.JPG",
		location: "Barcelona",
		period: "2020-2023"
	},
	"5": {
		name: "FullStack PHP Bootcamp",
		school: "IT Academy",
		school_image: "https://estatics-nasia.dtibcn.cat/nasia-pro/media/2015%2C05%2Cbcn-growth-center-760x428.jpg",
		location: "Barcelona",
		period: "2022-2023"
	},
	BUTTON1: "After",
	BUTTON2: "Before"
};
const JOBS$2 = {
	"1": {
		name: "Export Assistant",
		company: "TVS SCS International Freight",
		period: "01/2020 - 03/2020",
		abilities: [
			"Logistic coordination",
			"Incoterms"
		]
	},
	"2": {
		name: "Warehouse Management Assistant",
		company: "Arlandis Logística SL",
		period: "01/2020 - 03/2020",
		abilities: [
			"ERP Management",
			"Inventory control"
		]
	},
	"3": {
		name: "FrontEnd Developer",
		company: "IT Academy",
		period: "11/2022 - 10/2023",
		abilities: [
			"Daily Communication",
			"Self-organization",
			"Continuous Enhancement"
		]
	},
	"4": {
		name: "BackEnd Developer",
		company: "No Country",
		period: "10/2023 - 12/2023",
		abilities: [
			"Problem solving",
			"Team leadership",
			"Software architecture"
		]
	},
	SEPARATOR: "abilities"
};
const WEBS$2 = {
	Excalidraw: {
		name: "Excalidraw",
		description: "Dibujo colaborativo en línea",
		website: "https://excalidraw.com/"
	},
	TablerIcons: {
		name: "TablerIcons",
		description: "Icons SVG",
		website: "https://tablericons.com/"
	},
	SVGL: {
		name: "SVGL",
		description: "Iconos SVG de tecnología",
		website: "https://svgl.vercel.app/"
	},
	Shots: {
		name: "Shots",
		description: "Create amazing mockups",
		website: "https://shots.so/"
	},
	Squoosh: {
		name: "Squoosh",
		description: "Optimize your images",
		website: "https://squoosh.app/"
	},
	Tailwindgen: {
		name: "Tailwindgen",
		description: "Tailwind Grid Generator",
		website: "https://www.tailwindgen.com/"
	},
	Pexels: {
		name: "Pexels",
		description: "Free stock photos",
		website: "https://www.pexels.com/"
	},
	PlanetScale: {
		name: "PlanetScale",
		description: "Deploy SQL Database",
		website: "https://planetscale.com/"
	},
	Turso: {
		name: "Turso",
		description: "Deploy SQL Lite DB",
		website: "https://turso.tech/"
	},
	Bentogrids: {
		name: "Bentogrids",
		description: "Bento grids ideas",
		website: "https://bentogrids.com"
	},
	Fontsource: {
		name: "Fontsource",
		description: "Different fonts",
		website: "https://fontsource.org/"
	},
	Flowbite: {
		name: "Flowbite",
		description: "Tailwind components",
		website: "https://flowbite.com/docs/components"
	},
	PackagePhobia: {
		name: "PackagePhobia",
		description: "Cost of dev dependencies",
		website: "https://packagephobia.com/"
	}
};
const INFO_PORTFOLIO$2 = {
	ASIDEBAR: {
		intro: "Why Astro?",
		performance: "Performance",
		seo: "SEO",
		"ui-agnostic": "UI-agnostic",
		scalability: "Scalability",
		internationalization: "Internationalization",
		"view-transitions": "View Transitions"
	},
	INTRO1: "For the development of this portfolio, I have used the Astro Framework in its version 4.1.2, where thanks to its simplicity with the use of the most common languages (HTML, CSS, and JS) and with the support of complementary tools more focused on reactivity, such as React in certain situations, it has helped me in rapid and effective development.",
	INTRO2: "The choice of choosing Astro has not been due to a knowledge issue but rather for a reason of use in a Single Page Application (SPA) without the use of a BackEnd. This has posed a learning challenge for a new tool that has been exciting and challenging.",
	INTRO3: "I have also chosen Astro for the following benefits it provides:",
	PERFORMANCE1: "Astro's quick initial load speed is a key factor in an SPA, and this is achieved thanks to server-side rendering instead of client-side rendering in the browser.",
	PERFORMANCE2: "In fact, Astro is capable of generating static pages with zero use of JavaScript, resulting in extremely fast loading where the user is responsible for adding interactivity to the website through complementary Framework components loaded on the client side.",
	PERFORMANCE3: "In summary, Astro is based on a static page through 'reactive components' (referred to by Astro as 'Astro Islands'), allowing for a smooth and pleasant user experience.",
	SEO1: "Another important aspect is the SEO positioning capability of websites designed with Astro. Why? Because Astro, by generating static pages (HTML) during compilation, allows search engines to index and crawl content efficiently, largely avoiding the execution of JavaScript files that may delay loading.",
	SEO2: "And this is summarized with an approach that Astro takes, based on optimizing the total page weight for a better user experience and, at the same time, positively influencing SEO ranking.",
	SEO3: "Furthermore, there are 2 factors that assist in better SEO positioning during development:",
	SEO4: "The ease of creating pages with friendly URLs",
	SEO5: "The compatibility of metadata insertion on each page independently.",
	UIAGNOSTIC1: "Astro is agnostic to other web development tools, but what does it mean to be agnostic?",
	UIAGNOSTIC2: "Being agnostic in the programming world means that it is not limited to a specific use of tools or specific technologies but is open in its use to provide the user with a flexible way of working according to their needs and preferences.",
	UIAGNOSTIC3: "And that is what Astro offers, in addition to a really simple and surprising integration of tools that every developer has handled at least once, such as:",
	SCALABILITY1: "The fact that Astro is a very easy-to-use Framework allows for easy scalability, contributing to a better experience in team development.",
	SCALABILITY2: "The use of reusable components as architecture facilitates the management of large projects where components are developed independently. Also, with the optimization of components by separating static from dynamic elements (Astro Islands), it allows for resource efficiency in websites with a large amount of content without losing performance.",
	SCALABILITY3: "Also, since Astro 4.0, a development tool called 'Astro Dev Toolbar' has been added, allowing visual inspection of the page being developed (Astro Islands, Testing, Accessibility problems...)",
	INTERNATIONALIZATION1: "Also, with Astro 4.0 and onwards, the i18n library has been natively incorporated, allowing for easy and intuitive translations in the project configuration. It enables dynamic routing based on language and management of translations through JSON files.",
	VIEWTRANSITIONS1: "Transitions are one of the most surprising features introduced starting from Astro 3, not only for their easy use but also for their impact on the web, allowing:",
	VIEWTRANSITIONS2: "Animating navigation between different pages",
	VIEWTRANSITIONS3: "Compatibility between devices and screen sizes",
	VIEWTRANSITIONS4: "Customization of various types of transitions to adapt to the style of the web page",
	VIEWTRANSITIONS5: "Implementation is done by adding a component called <View Transitions /> to each component (or in its Layout). This way, if 2 components are located on different pages, a transition will take place."
};
const english = {
	SEO_TITLE_HOMEPAGE: SEO_TITLE_HOMEPAGE$2,
	SEO_DESCRIPTION_HOMEPAGE: SEO_DESCRIPTION_HOMEPAGE$2,
	SEO_TITLE_PORTFOLIO: SEO_TITLE_PORTFOLIO$2,
	SEO_DESCRIPTION_PORTFOLIO: SEO_DESCRIPTION_PORTFOLIO$2,
	BENTO_TITLES: BENTO_TITLES$2,
	OPEN_TO_WORK: OPEN_TO_WORK$2,
	SLOGAN: SLOGAN$2,
	PROJECTS: PROJECTS$2,
	CHALLENGES: CHALLENGES$2,
	COURSES: COURSES$2,
	REFERENCES: REFERENCES$2,
	STUDIES: STUDIES$2,
	JOBS: JOBS$2,
	WEBS: WEBS$2,
	INFO_PORTFOLIO: INFO_PORTFOLIO$2
};

const SEO_TITLE_HOMEPAGE$1 = "Albert Lanza Rio Portfolio";
const SEO_DESCRIPTION_HOMEPAGE$1 = "Explora el portafolio de Albert Lanza Rio, un apasionado desarrollador web con formación en economía. Descubre sus habilidades tecnológicas y su enfoque innovador en el desarrollo web, fusionando conocimientos técnicos con una perspectiva económica única. Explora proyectos excepcionales que reflejan su experiencia en ambas disciplinas, creando soluciones tecnológicas con un enfoque económico sólido. ¡Conoce más sobre cómo Albert combina lo mejor de la tecnología y la economía para crear experiencias web impactantes y funcionales!";
const SEO_TITLE_PORTFOLIO$1 = "Info Portfolio - Albert Lanza Rio";
const SEO_DESCRIPTION_PORTFOLIO$1 = "Descubre la elección detrás de mi portfolio: Explora los motivos que me llevaron a seleccionar Astro como mi framework principal. Desde su rendimiento excepcional hasta su enfoque en la velocidad y la eficiencia, te invito a explorar cómo Astro ha potenciado la creación de mi portfolio de manera única. ¡Explora los detalles en esta página informativa sobre mi elección del framework Astro 4!";
const BENTO_TITLES$1 = {
	PROJECTS: "Proyectos",
	CHALLENGES: "Desafiándome!",
	COURSES: "Cursos",
	STUDIES: "Estudios",
	JOBS: "Trabajos",
	TOOLS: "Herramientas"
};
const OPEN_TO_WORK$1 = {
	TEXT1: "Abierto al",
	TEXT2: "trabajo"
};
const SLOGAN$1 = {
	text1: "Desarrollador Web",
	text2: "1 año de experiencia",
	text3: "Mejorando día a día",
	text4: "de Barcelona",
	abiliti1: "Trabajo en colaboración",
	abiliti2: "Perseverancia",
	abiliti3: "Ambicioso",
	abiliti4: "Creatividad",
	abiliti5: "Innovación",
	abiliti6: "Adaptabilidad"
};
const PROJECTS$1 = {
	"1": {
		name: "API Dice",
		description: "El juego consiste en el lanzamiento de 2 dados; si el usuario saca un 7 gana sino, pierde. Para jugar te has de registrar previamente ya sea como usuario anónimo o mediante un usuario y mail con la ventaja de poder consultar tus resultados (tiradas previas y promedio). Hay un ranking del mejor jugador, del peor y del general restringido por el usuario administrador. Todo esto siguiendo el patrón de diseño MVC.",
		github: "https://github.com/AlbertLnz/dice-API",
		deploy: "",
		technologies: [
			"Laravel"
		]
	},
	"2": {
		name: "Football Managment App",
		description: "La aplicación consiste en la gestión de una liga de fútbol, pudiendo visualizar y crear equipos, jugadores y partidos. Todos los datos están relacionados entre si mediante relaciones entre las diferentes tablas configuradas en una base de datos SQL. Cualquier usuario puede consultar los datos de la aplicación mediante queries pero es el administrador el único usuario capaz de crearlas.",
		github: "https://github.com/AlbertLnz/Football-managment-app",
		deploy: "",
		technologies: [
			"Laravel",
			"Blade"
		]
	},
	"3": {
		name: "CRUD Redux Toolkit",
		description: "Aplicación de tareas con React y Redux que permite al usuario visualizar, crear, editar y eliminar tareas ayudándolo a mantenerse organizado y productivo en sus actividades diarias.",
		github: "https://github.com/AlbertLnz/CRUD-Redux-Toolkit",
		deploy: "",
		technologies: [
			"React",
			"Redux"
		]
	},
	"4": {
		name: "ITA Landing",
		description: "Página de información sobre la academia de programación ITAcademy donde mediante una conexión con el Back-End, muestra información de la academia y participantes. También tiene una parte de gestión de la propia página una vez el usuario inicia sesión (backoffice).",
		github: "https://github.com/IT-Academy-BCN/ita-landing-frontend",
		deploy: "https://it-academy-landing.netlify.app/",
		technologies: [
			"React",
			"TypeScript",
			"Laravel"
		]
	},
	"5": {
		name: "ReserveEat",
		description: "Web de gestión de reservas de diferentes restaurantes, la app permite crear varios usuarios donde cada uno puede manejar diferentes restaurantes, y donde posteriormente los usuarios clientes son capaces de crear reservas en día, turno y asignarle una mesa. El usuario también puede realizar reseñas del restaurante.",
		github: "https://github.com/No-Country/nc_c14-40-m-php-vue",
		deploy: "",
		technologies: [
			"Vue",
			"Laravel"
		]
	},
	"6": {
		name: "ITA Profiles",
		description: "Pàgina donde se muestra los colaboradorse que han participado en diferentes proyectos de la ITAcademy y que tiene com objectivo informar a los reclutadores los diferentes perfiles de los participantes.",
		github: "https://github.com/IT-Academy-BCN/ita-profiles-frontend",
		deploy: "",
		technologies: [
			"React",
			"TypeScript",
			"Laravel"
		]
	},
	"7": {
		name: "Jump2Digital",
		description: "¡Reto de desarrollar una aplicación de gestión del nivel de vegetación para los barrios de Barcelona en menos de 24 horas! Además, sin conocer previamente al equipo y distribuyendo el trabajo en Datos, Back y Front. ¡¡Un desafío apasionante!!",
		github: "https://github.com/J2D-Hackaton",
		deploy: "https://j2d-team7-deployment.vercel.app",
		technologies: [
			"React",
			"Laravel",
			"Python"
		]
	}
};
const CHALLENGES$1 = {
	CODE: "Código"
};
const COURSES$1 = {
	"1": {
		name: "Introducción a la programación C++",
		type: "Aprendizaje",
		timedate: "Febrero del 2019",
		certificate: "https://drive.google.com/file/d/1sSAXrmLGsNlCSPXOHmpOkH5-Pv5qRkid/view?usp=sharing",
		link_course: "http://youtube.es"
	},
	"2": {
		name: "Aprende Low Code - CSS",
		type: "Aprendizaje",
		timedate: "Octubre del 2022",
		certificate: "https://drive.google.com/file/d/1wrSlkoPDYFSJJajmD4nY6Efm4BIVab44/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1266830"
	},
	"3": {
		name: "Inteligencia artificial y datos en pleno boom de ChatGPT",
		type: "Charla",
		timedate: "Marzo del 2023",
		certificate: "https://drive.google.com/file/d/1Dx5HD6CbsAC77N09TOrhEVpCqfQb1_Ln/view?usp=sharing",
		link_course: "https://eurecat.org/el-boom-de-la-intelligencia-artificial-molt-mes-que-el-chatgpt/"
	},
	"4": {
		name: "Gestiona bases de datos con MySQL",
		type: "Aprendizaje",
		timedate: "Marzo del 2023",
		certificate: "https://drive.google.com/file/d/1aYdkTz4OlqY_69DEb0XRYbZFQDX_Y2oi/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1267314"
	},
	"5": {
		name: "Crea una web con PHP, MySQL y Apache (LAMP)",
		type: "Aprendizaje",
		timedate: "Marzo del 2023",
		certificate: "https://drive.google.com/file/d/1HcDDo0-NYkKNbgqmPLnjqkuuONTZD60U/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1267312"
	},
	"6": {
		name: "Introducción al lenguaje JavaScript",
		type: "Aprendizaje",
		timedate: "Abril del 2023",
		certificate: "https://drive.google.com/file/d/1RtrGSYVGaGNvHrlyNkEU2HWNKtxDwnqE/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1267258"
	},
	"7": {
		name: "Crecimiento profesional en empresas multinacionales",
		type: "Charla",
		timedate: "Abril del 2023",
		certificate: "https://drive.google.com/file/d/1FQOFxE1v3Zof6hN7Gp3SgGNbWbW6_0d-/view?usp=sharing",
		link_course: ""
	},
	"8": {
		name: "Svelte, el gran desconocido",
		type: "Charla",
		timedate: "Abril del 2023",
		certificate: "https://drive.google.com/file/d/1e4ea_2dqzNt5qigifRS3CbR_vrHwoYjB/view?usp=sharing",
		link_course: ""
	},
	"9": {
		name: "Aprende a programar una API en PHP y MySQL",
		type: "Aprendizaje",
		timedate: "Mayo del 2023",
		certificate: "https://drive.google.com/file/d/1R1ZGuyOHBAR3VTVz4ZQod-dfnMgjzF7H/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1274454"
	},
	"10": {
		name: "Hackathon Tech4Good",
		type: "Hackatón",
		timedate: "Junio del 2023",
		certificate: "https://drive.google.com/file/d/142Fc75X8MJWt5kjyCtEa2QVKdiHv5Am3/view?usp=sharing",
		link_course: "http://hackathon.techlabs.org/details.html"
	},
	"11": {
		name: "Figma - Haz tus mockups",
		type: "Aprendizaje",
		timedate: "Julio del 2023",
		certificate: "https://drive.google.com/file/d/1UOPOMw8P5qk_GJcKEMXLRAd2f2Aje4VQ/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1266485"
	},
	"12": {
		name: "El desafío internacional de aplicaciones espaciales de la NASA",
		type: "Hackatón",
		timedate: "Octubre del 2023",
		certificate: "https://www.linkedin.com/posts/aar%C3%B3n-murillo-lort-b039b01a1_last-weekend-we-had-the-honour-to-be-a-part-activity-7118245275999059968-NN-d?utm_source=share&utm_medium=member_desktop",
		link_course: "https://www.spaceappschallenge.org/2023/locations/barcelona/"
	},
	"13": {
		name: "Jump2Digital Hackathon",
		type: "Hackatón",
		timedate: "Noviembre del 2023",
		certificate: "",
		link_course: ""
	},
	"14": {
		name: "Masterclass de desarrollo de Scala 3 - 2023",
		type: "Aprendizaje",
		timedate: "Noviembre del 2023",
		certificate: "",
		link_course: ""
	},
	"15": {
		name: "Introducción a Docker",
		type: "Aprendizaje",
		timedate: "Enero del 2024",
		certificate: "",
		link_course: ""
	},
	BUTTONS: {
		NEWEST: "Más reciente",
		OLDEST: "Más antiguo",
		CERTIFICATE: "Certificado",
		COURSE_LINK: "Link del curso"
	}
};
const REFERENCES$1 = {
	"1": {
		author: "Luis Vicente Burguillo (Senior Dev)",
		author_linkedin: "https://es.linkedin.com/in/luisvicenteburguillo",
		author_linkedin_image: "https://media.licdn.com/dms/image/C4D03AQFzX_I0Lf9p5g/profile-displayphoto-shrink_200_200/0/1590135912695?e=2147483647&v=beta&t=AJfPHlGP5Orjja1TQOERNGtJnjXI8dD1oeLspE_POWY",
		message: "Es un chico muy aplicado e inteligente, gran amigo y mejor persona"
	},
	"2": {
		author: "Xavi",
		author_linkedin: "https://es.linkedin.com/in/luisvicenteburguillo",
		author_linkedin_image: "https://media.licdn.com/dms/image/C4D03AQFzX_I0Lf9p5g/profile-displayphoto-shrink_200_200/0/1590135912695?e=2147483647&v=beta&t=AJfPHlGP5Orjja1TQOERNGtJnjXI8dD1oeLspE_POWY",
		message: "Soy Xavi"
	}
};
const STUDIES$1 = {
	"1": {
		name: "Bachillerato Social",
		school: "La Salle",
		school_image: "https://assets.change.org/photos/1/hl/fo/hWhLFoumAQuCRrq-800x450-noPad.jpg?1544528731",
		location: "Montcada i Reixac",
		period: "2016-2018"
	},
	"2": {
		name: "Comercio Internacional",
		school: "CE Prat",
		school_image: "https://www.prateducacio.com/wp-content/uploads/2020/06/prat-educacio-1-1024x577.jpg",
		location: "Barcelona",
		period: "2018-2020"
	},
	"3": {
		name: "Transporte y Logística",
		school: "CE Prat",
		school_image: "https://www.prateducacio.com/wp-content/uploads/2020/06/prat-educacio-1-1024x577.jpg",
		location: "Barcelona",
		period: "2020-2021"
	},
	"4": {
		name: "Grado en Economicas",
		school: "Universitat de Barcelona",
		school_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Facultat_d%27Economia_i_Empresa_-_UB.JPG/1200px-Facultat_d%27Economia_i_Empresa_-_UB.JPG",
		location: "Barcelona",
		period: "2020-2023"
	},
	"5": {
		name: "FullStack PHP Bootcamp",
		school: "IT Academy",
		school_image: "https://estatics-nasia.dtibcn.cat/nasia-pro/media/2015%2C05%2Cbcn-growth-center-760x428.jpg",
		location: "Barcelona",
		period: "2022-2023"
	},
	BUTTON1: "Después",
	BUTTON2: "Antes"
};
const JOBS$1 = {
	"1": {
		name: "Asistente de exportación",
		company: "TVS SCS International Freight",
		period: "01/2020 - 03/2020",
		abilities: [
			"Coordinación logística",
			"Incoterms"
		]
	},
	"2": {
		name: "Asistente de gestión de almacén",
		company: "Arlandis Logística SL",
		period: "01/2020 - 03/2020",
		abilities: [
			"Gestión ERP",
			"Control de existencias"
		]
	},
	"3": {
		name: "FrontEnd Developer",
		company: "IT Academy",
		period: "11/2022 - 10/2023",
		abilities: [
			"Comunicación diaria",
			"Autoorganización",
			"Mejora contínua"
		]
	},
	"4": {
		name: "BackEnd Developer",
		company: "No Country",
		period: "10/2023 - 12/2023",
		abilities: [
			"Solución de problemas",
			"Liderazgo",
			"Arquitectura de software"
		]
	},
	SEPARATOR: "habilidades"
};
const WEBS$1 = {
	Excalidraw: {
		name: "Excalidraw",
		description: "Dibujo colaborativo en línea",
		website: "https://excalidraw.com/"
	},
	TablerIcons: {
		name: "TablerIcons",
		description: "Icons SVG",
		website: "https://tablericons.com/"
	},
	SVGL: {
		name: "SVGL",
		description: "Iconos SVG de tecnología",
		website: "https://svgl.vercel.app/"
	},
	Shots: {
		name: "Shots",
		description: "Create amazing mockups",
		website: "https://shots.so/"
	},
	Squoosh: {
		name: "Squoosh",
		description: "Optimize your images",
		website: "https://squoosh.app/"
	},
	Tailwindgen: {
		name: "Tailwindgen",
		description: "Tailwind Grid Generator",
		website: "https://www.tailwindgen.com/"
	},
	Pexels: {
		name: "Pexels",
		description: "Free stock photos",
		website: "https://www.pexels.com/"
	},
	PlanetScale: {
		name: "PlanetScale",
		description: "Deploy SQL Database",
		website: "https://planetscale.com/"
	},
	Turso: {
		name: "Turso",
		description: "Deploy SQL Lite DB",
		website: "https://turso.tech/"
	},
	Bentogrids: {
		name: "Bentogrids",
		description: "Bento grids ideas",
		website: "https://bentogrids.com"
	},
	Fontsource: {
		name: "Fontsource",
		description: "Different fonts",
		website: "https://fontsource.org/"
	},
	Flowbite: {
		name: "Flowbite",
		description: "Tailwind components",
		website: "https://flowbite.com/docs/components"
	},
	PackagePhobia: {
		name: "PackagePhobia",
		description: "Cost of dev dependencies",
		website: "https://packagephobia.com/"
	}
};
const INFO_PORTFOLIO$1 = {
	ASIDEBAR: {
		intro: "¿Por qué Astro?",
		performance: "Rendimento",
		seo: "SEO",
		"ui-agnostic": "UI-agnostico",
		scalability: "Escalabilidad",
		internationalization: "Internacionalización",
		"view-transitions": "Transiciones"
	},
	INTRO1: "Para el desarrollo de este portafolio he utilizado el Framework Astro en su versión 4.1.2, donde gracias a su simplicidad con el uso de los lenguajes más comunes (HTML, CSS y JS) y con el soporte de herramientas complementarias más enfocadas en la reactividad como React en determinadas situaciones, me ha ayudado a un desarrollo rápido y efectivo.",
	INTRO2: "La elección de escoger Astro no ha sido por un tema de conocimiento sino por un tema de razón de uso en una SPA (Single Page Application) sin un uso de un BackEnd. Esto me ha supuesto un reto de aprendizaje de una herramienta nueva que ha sido emocionante y desafiante.",
	INTRO3: "También he escogido Astro por los siguientes beneficios que aporta:",
	PERFORMANCE1: "La velocidad de carga de inicio rápido de Astro es un factor clave en una SPA, y esto lo logra gracias a una renderización en el servidor en lugar de una renderización en el navegador del cliente.",
	PERFORMANCE2: "De hecho, Astro es capaz de generar páginas estáticas con un uso cero de JavaScript y, por lo tanto, una carga rapidísima donde es el usuario el responsable de añadir interactividad a la web mediante componentes de Frameworks complementarios que se carguen en el lado del cliente.",
	PERFORMANCE3: "En resumen, Astro se basa en una página estática mediante 'componentes reactivos' (llamados por la gente de Astro como 'Astro Islands') y esto le permite una experiencia al usuario de manera fluida y agradable.",
	SEO1: "Otro aspecto importante es la capacidad de posicionamiento SEO que tienen las webs diseñadas con Astro. ¿Por qué? Pues porque Astro al generar páginas estáticas (HTML) durante la compilación, permite a los motores de búsqueda indexar y rastrear el contenido de manera eficiente evitando en gran medida la ejecución de archivos JavaScript que retrasen la carga.",
	SEO2: "Y esto se resume con un enfoque que le da Astro basado en la optimización de eficiencia del peso total de la página para una mejor experiencia de usuario y, al mismo tiempo, influir positivamente en la clasificación del SEO.",
	SEO3: "Además, hay 2 factores que durante el desarrollo ayudan a un mejor posicionamiento SEO:",
	SEO4: "La facilidad de crear páginas mediante URLs amigables",
	SEO5: "La compatibilidad de inserción de Metadatos en cada una de las páginas de forma independiente.",
	UIAGNOSTIC1: "Astro es agnóstico a otras herramientas de desarrollo web, pero, ¿qué significa ser agnóstico?",
	UIAGNOSTIC2: "Ser agnóstico en el mundo de la programación significa que no se limita a un uso concreto de herramientas o tecnologías específicas, sino que está abierto en su uso para proporcionar al usuario una manera flexible de trabajar según sus necesidades y preferencias que mejor se adapten.",
	UIAGNOSTIC3: "Y eso es lo que Astro ofrece mediante, además, una integración realmente sencilla y sorprendente de herramientas que todo desarrollador ha manejado al menos alguna vez, como por ejemplo:",
	SCALABILITY1: "El hecho de que Astro sea un Framework muy sencillo de utilizar, permite una escalabilidad fácil que ayuda a una mejor experiencia en el desarrollo en equipos de trabajo.",
	SCALABILITY2: "El uso de componentes reutilizables como arquitectura facilita la gestión de proyectos grandes donde los componentes son desarrollados de manera independiente. Además, con la optimización de los propios componentes separando los estáticos de los dinámicos (Astro Islands), permite una eficiencia de recursos en aquellas webs con una gran cantidad de contenido sin tener que perder rendimiento.",
	SCALABILITY3: "También, desde Astro 4.0, se añade una herramienta de desarrollo como es 'Astro Dev Toolbar' que permite inspeccionar de manera visual la página que estás desarrollando (Astro Islands, Testing, Accessibilty problems...)",
	INTERNATIONALIZATION1: "También con Astro 4.0 y adelante, se ha incorporado de manera nativa la librería de i18n que permite hacer las traducciones de forma fácil e intuitiva en la configuración del proyecto. Permiten un enrutamiento dinámico según el idioma y una gestión de las traducciones mediante archivos JSON.",
	VIEWTRANSITIONS1: "Las transiciones son una de las características más sorprendentes que se introdujo a partir de Astro 3, y no solo por su fácil uso sino también por su impacto en la web permiten:",
	VIEWTRANSITIONS2: "Animar la navegación entre diferentes páginas",
	VIEWTRANSITIONS3: "Compatibilidad entre dispositivos y tamaños de pantalla",
	VIEWTRANSITIONS4: "Personalización de diversos tipos de transiciones adaptándose al estilo de la página web",
	VIEWTRANSITIONS5: "Su implementación se realiza mediante añadir en cada componente (o en su Layout), un componente llamado <View Transitions /> y de esta manera, si 2 componentes están situados en páginas diferentes, se realizará una transición."
};
const espanol = {
	SEO_TITLE_HOMEPAGE: SEO_TITLE_HOMEPAGE$1,
	SEO_DESCRIPTION_HOMEPAGE: SEO_DESCRIPTION_HOMEPAGE$1,
	SEO_TITLE_PORTFOLIO: SEO_TITLE_PORTFOLIO$1,
	SEO_DESCRIPTION_PORTFOLIO: SEO_DESCRIPTION_PORTFOLIO$1,
	BENTO_TITLES: BENTO_TITLES$1,
	OPEN_TO_WORK: OPEN_TO_WORK$1,
	SLOGAN: SLOGAN$1,
	PROJECTS: PROJECTS$1,
	CHALLENGES: CHALLENGES$1,
	COURSES: COURSES$1,
	REFERENCES: REFERENCES$1,
	STUDIES: STUDIES$1,
	JOBS: JOBS$1,
	WEBS: WEBS$1,
	INFO_PORTFOLIO: INFO_PORTFOLIO$1
};

const SEO_TITLE_HOMEPAGE = "Albert Lanza Rio Portfoli";
const SEO_DESCRIPTION_HOMEPAGE = "Explora el portafoli de Albert Lanza Rio, un apassionada desenvolupador web amb formació en economia. Descobreix les seves habilitats tecnològiques i el seu enfoc innovador en el desenvolupament web, fusionant coneixement tècnics amb una perspectiva única. Explora projectes excepcionals que reflexen la seva experiència en ambdós disciplines, creant solucions tecnològiques amb un enfoc econòmic sòlid. Coneix més sobre com l'Albert combina lo millor de la tecnologia i l'economia per crear experiències web impactants i funcionals!";
const SEO_TITLE_PORTFOLIO = "Info Portfoli - Albert Lanza Rio";
const SEO_DESCRIPTION_PORTFOLIO = "Descobreix la decisió darrere del meu portfoli: Explora els motius que em van portar a seleccionar Astro com el framework principal. Des del seu rendiment excepcional fins al seu enfocament en la velocitat i l'eficiència, et convido a explorar com Astro ha potenciat la creació del meu portfoli d'una manera única. Aprofundeix en els detalls en aquesta pàgina informativa sobre la meva elecció del framework Astro 4!";
const BENTO_TITLES = {
	PROJECTS: "Projectes",
	CHALLENGES: "Desafian't-me!",
	COURSES: "Cursos",
	STUDIES: "Estudis",
	JOBS: "Treballs",
	TOOLS: "Eines"
};
const OPEN_TO_WORK = {
	TEXT1: "Obert al",
	TEXT2: "treball"
};
const SLOGAN = {
	text1: "Desenvolupador Web",
	text2: "1 any d'experiència",
	text3: "Millorant dia a dia",
	text4: "de Barcelona",
	abiliti1: "Treball en col·laboració",
	abiliti2: "Perseverància",
	abiliti3: "Ambiciós",
	abiliti4: "Creativitat",
	abiliti5: "Innovació",
	abiliti6: "Adaptabilitat"
};
const PROJECTS = {
	"1": {
		name: "API Dice",
		description: "El joc consisteix en el llançament de 2 daus; si l'usuari treu un 7 guanya sinó, perd. Per tal de jugar t'has de registrar prèviament ja sigui com usuari anònim o mitjançant un usuari i mail amb l'avantatge de poder consultar els teus resultats (tirades prèvies i promig). Hi ha un rànquing del millor jugador, del pitjor i del general restringit per l'usuari administrador. Tot això seguint el patró de disseny MVC.",
		github: "https://github.com/AlbertLnz/dice-API",
		deploy: "",
		technologies: [
			"Laravel"
		]
	},
	"2": {
		name: "Football Managment App",
		description: "L'aplicació consisteix en la gestió d'una lliga de futbol, podent visualitzar i crear equips, jugadors i partits. Totes les dades estan relacionades entre si mitjançant relacions entre les diferents taules configurades en un base de dades SQL. Qualsevol usuari pot consultar les dades de l'aplicació obtingudes mitjançant queries però és l'administrador l'únic usuari capaç de crear-les.",
		github: "https://github.com/AlbertLnz/Football-managment-app",
		deploy: "",
		technologies: [
			"Laravel",
			"Blade"
		]
	},
	"3": {
		name: "CRUD Redux",
		description: "Aplicació de tasques amb React i Redux que permet a l'usuari visualitzar, crear, editar i eliminar tasques ajudant-lo a mantenir-se organizat i productiu en les seves activitats diàries.",
		github: "https://github.com/AlbertLnz/CRUD-Redux-Toolkit",
		deploy: "",
		technologies: [
			"React",
			"Redux"
		]
	},
	"4": {
		name: "ITA Landing",
		description: "Pàgina d'informació sobre l'academia de programació ITAcademy on mijtançant una connexió amb el Back-End, mostra informació de l'academia i participants. També té una part de gestió de la pròpia pàgina una vegada l'usuari inicia sessió (backoffice).",
		github: "https://github.com/IT-Academy-BCN/ita-landing-frontend",
		deploy: "https://it-academy-landing.netlify.app/",
		technologies: [
			"React",
			"TypeScript",
			"Laravel"
		]
	},
	"5": {
		name: "ReserveEat",
		description: "Web de gestió de reserves de diversos restaurants, l'app permet crear varius usuaris on cada un pot manejar diversos restaurants, i on posteriorment els usuaris clients son capaços de crear reserves en dia, torn i assignar-li una taula. L'usuari també pot realitzar ressenyes del restaurant.",
		github: "https://github.com/No-Country/nc_c14-40-m-php-vue",
		deploy: "",
		technologies: [
			"Vue",
			"Laravel"
		]
	},
	"6": {
		name: "ITA Profiles",
		description: "Pàgina on mostra els col·laboradors que han participat en diferents projectes de l'ITAcademy i que té com objectiu informar als reclutadors els diferents perfils dels participants.",
		github: "https://github.com/IT-Academy-BCN/ita-profiles-frontend",
		deploy: "",
		technologies: [
			"React",
			"TypeScript",
			"Laravel"
		]
	},
	"7": {
		name: "Jump2Digital",
		description: "Repte de desenvolupar una app de gestió de nivell de vegetació per barris de Barcelona en menys de 24h! A més, sense conèixer a l'equip prèviament i distribuint el treball en Data, Back i Front. Un repte apassionant!!",
		github: "https://github.com/J2D-Hackaton",
		deploy: "https://j2d-team7-deployment.vercel.app",
		technologies: [
			"React",
			"Laravel",
			"Python"
		]
	}
};
const CHALLENGES = {
	CODE: "Codi"
};
const COURSES = {
	"1": {
		name: "Introducció a la programació C++",
		type: "Aprenentatge",
		timedate: "Febrer del 2019",
		certificate: "https://drive.google.com/file/d/1sSAXrmLGsNlCSPXOHmpOkH5-Pv5qRkid/view?usp=sharing",
		link_course: "http://youtube.es"
	},
	"2": {
		name: "Aprèn Low Code - CSS",
		type: "Aprenentatge",
		timedate: "Octubre del 2022",
		certificate: "https://drive.google.com/file/d/1wrSlkoPDYFSJJajmD4nY6Efm4BIVab44/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1266830"
	},
	"3": {
		name: "Intel·ligència artificial i dades en ple boom de ChatGPT",
		type: "Xerrada",
		timedate: "Març del 2023",
		certificate: "https://drive.google.com/file/d/1Dx5HD6CbsAC77N09TOrhEVpCqfQb1_Ln/view?usp=sharing",
		link_course: "https://eurecat.org/el-boom-de-la-intelligencia-artificial-molt-mes-que-el-chatgpt/"
	},
	"4": {
		name: "Gestiona bases de dades amb MySQL",
		type: "Aprenentatge",
		timedate: "Març del 2023",
		certificate: "https://drive.google.com/file/d/1aYdkTz4OlqY_69DEb0XRYbZFQDX_Y2oi/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1267314"
	},
	"5": {
		name: "Crea una web amb PHP, MySQL y Apache (LAMP)",
		type: "Aprenentatge",
		timedate: "Març del 2023",
		certificate: "https://drive.google.com/file/d/1HcDDo0-NYkKNbgqmPLnjqkuuONTZD60U/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1267312"
	},
	"6": {
		name: "Introducció al llenguatge JavaScript",
		type: "Aprenentatge",
		timedate: "Abril del 2023",
		certificate: "https://drive.google.com/file/d/1RtrGSYVGaGNvHrlyNkEU2HWNKtxDwnqE/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1267258"
	},
	"7": {
		name: "Creixement professional en empreses multinacionals",
		type: "Xerrada",
		timedate: "Abril del 2023",
		certificate: "https://drive.google.com/file/d/1FQOFxE1v3Zof6hN7Gp3SgGNbWbW6_0d-/view?usp=sharing",
		link_course: ""
	},
	"8": {
		name: "Svelte, el gran desconegut",
		type: "Xerrada",
		timedate: "Abril del 2023",
		certificate: "https://drive.google.com/file/d/1e4ea_2dqzNt5qigifRS3CbR_vrHwoYjB/view?usp=sharing",
		link_course: ""
	},
	"9": {
		name: "Aprèn a programar una API en PHP i MySQL",
		type: "Aprenentatge",
		timedate: "Maig del 2023",
		certificate: "https://drive.google.com/file/d/1R1ZGuyOHBAR3VTVz4ZQod-dfnMgjzF7H/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1274454"
	},
	"10": {
		name: "Hackathon Tech4Good",
		type: "Hackató",
		timedate: "Juny del 2023",
		certificate: "https://drive.google.com/file/d/142Fc75X8MJWt5kjyCtEa2QVKdiHv5Am3/view?usp=sharing",
		link_course: "http://hackathon.techlabs.org/details.html"
	},
	"11": {
		name: "Figma - Fes els teus mockups",
		type: "Aprenentatge",
		timedate: "Juliol del 2023",
		certificate: "https://drive.google.com/file/d/1UOPOMw8P5qk_GJcKEMXLRAd2f2Aje4VQ/view?usp=sharing",
		link_course: "https://cibernarium.barcelonactiva.cat/web/guest/ficha-actividad?activityId=1266485"
	},
	"12": {
		name: "El desafiament internacional d'aplicacions espacials de la NASA",
		type: "Hackató",
		timedate: "Octubre del 2023",
		certificate: "https://www.linkedin.com/posts/aar%C3%B3n-murillo-lort-b039b01a1_last-weekend-we-had-the-honour-to-be-a-part-activity-7118245275999059968-NN-d?utm_source=share&utm_medium=member_desktop",
		link_course: "https://www.spaceappschallenge.org/2023/locations/barcelona/"
	},
	"13": {
		name: "Jump2Digital Hackathon",
		type: "Hackató",
		timedate: "Novembre del 2023",
		certificate: "",
		link_course: ""
	},
	"14": {
		name: "Masterclass de desenvolupament de Scala 3 - 2023",
		type: "Aprenentatge",
		timedate: "Novembre del 2023",
		certificate: "",
		link_course: ""
	},
	"15": {
		name: "Introducció a Docker",
		type: "Aprenentatge",
		timedate: "Gener del 2024",
		certificate: "",
		link_course: ""
	},
	BUTTONS: {
		NEWEST: "Més recent",
		OLDEST: "Més antic",
		CERTIFICATE: "Certificat",
		COURSE_LINK: "Link del curs"
	}
};
const REFERENCES = {
	"1": {
		author: "Luis Vicente Burguillo",
		author_linkedin: "https://es.linkedin.com/in/luisvicenteburguillo",
		author_linkedin_image: "https://media.licdn.com/dms/image/C4D03AQFzX_I0Lf9p5g/profile-displayphoto-shrink_200_200/0/1590135912695?e=2147483647&v=beta&t=AJfPHlGP5Orjja1TQOERNGtJnjXI8dD1oeLspE_POWY",
		message: "Es un chico muy aplicado e inteligente, gran amigo y mejor persona"
	},
	"2": {
		author: "Xavi",
		author_linkedin: "https://es.linkedin.com/in/luisvicenteburguillo",
		author_linkedin_image: "https://media.licdn.com/dms/image/C4D03AQFzX_I0Lf9p5g/profile-displayphoto-shrink_200_200/0/1590135912695?e=2147483647&v=beta&t=AJfPHlGP5Orjja1TQOERNGtJnjXI8dD1oeLspE_POWY",
		message: "Soy Xavi"
	}
};
const STUDIES = {
	"1": {
		name: "Batxillerat Social",
		school: "La Salle",
		school_image: "https://assets.change.org/photos/1/hl/fo/hWhLFoumAQuCRrq-800x450-noPad.jpg?1544528731",
		location: "Montcada i Reixac",
		period: "2016-2018"
	},
	"2": {
		name: "Comerç Internacional",
		school: "CE Prat",
		school_image: "https://www.prateducacio.com/wp-content/uploads/2020/06/prat-educacio-1-1024x577.jpg",
		location: "Barcelona",
		period: "2018-2020"
	},
	"3": {
		name: "Transport i Logística",
		school: "CE Prat",
		school_image: "https://www.prateducacio.com/wp-content/uploads/2020/06/prat-educacio-1-1024x577.jpg",
		location: "Barcelona",
		period: "2020-2021"
	},
	"4": {
		name: "Economia",
		school: "Universitat de Barcelona",
		school_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Facultat_d%27Economia_i_Empresa_-_UB.JPG/1200px-Facultat_d%27Economia_i_Empresa_-_UB.JPG",
		location: "Barcelona",
		period: "2020-2023"
	},
	"5": {
		name: "FullStack PHP Bootcamp",
		school: "IT Academy",
		school_image: "https://estatics-nasia.dtibcn.cat/nasia-pro/media/2015%2C05%2Cbcn-growth-center-760x428.jpg",
		location: "Barcelona",
		period: "2022-2023"
	},
	BUTTON1: "Després",
	BUTTON2: "Abans"
};
const JOBS = {
	"1": {
		name: "Asistent d'exportació",
		company: "TVS SCS International Freight",
		period: "01/2020 - 03/2020",
		abilities: [
			"Coordinació logística",
			"Incoterms"
		]
	},
	"2": {
		name: "Asistent de gestió de magatzem",
		company: "Arlandis Logística SL",
		period: "01/2020 - 03/2020",
		abilities: [
			"Gestió ERP",
			"Control d'existències"
		]
	},
	"3": {
		name: "FrontEnd Developer",
		company: "IT Academy",
		period: "11/2022 - 10/2023",
		abilities: [
			"Comunicació diària",
			"Autoorganització",
			"Millora contínua"
		]
	},
	"4": {
		name: "BackEnd Developer",
		company: "No Country",
		period: "10/2023 - 12/2023",
		abilities: [
			"Solució de problemes",
			"Lideratatge",
			"Arquitectura de software"
		]
	},
	SEPARATOR: "habilitats"
};
const WEBS = {
	Excalidraw: {
		name: "Excalidraw",
		description: "Dibujo colaborativo en línea",
		website: "https://excalidraw.com/"
	},
	TablerIcons: {
		name: "TablerIcons",
		description: "Icons SVG",
		website: "https://tablericons.com/"
	},
	SVGL: {
		name: "SVGL",
		description: "Iconos SVG de tecnología",
		website: "https://svgl.vercel.app/"
	},
	Shots: {
		name: "Shots",
		description: "Create amazing mockups",
		website: "https://shots.so/"
	},
	Squoosh: {
		name: "Squoosh",
		description: "Optimize your images",
		website: "https://squoosh.app/"
	},
	Tailwindgen: {
		name: "Tailwindgen",
		description: "Tailwind Grid Generator",
		website: "https://www.tailwindgen.com/"
	},
	Pexels: {
		name: "Pexels",
		description: "Free stock photos",
		website: "https://www.pexels.com/"
	},
	PlanetScale: {
		name: "PlanetScale",
		description: "Deploy SQL Database",
		website: "https://planetscale.com/"
	},
	Turso: {
		name: "Turso",
		description: "Deploy SQL Lite DB",
		website: "https://turso.tech/"
	},
	Bentogrids: {
		name: "Bentogrids",
		description: "Bento grids ideas",
		website: "https://bentogrids.com"
	},
	Fontsource: {
		name: "Fontsource",
		description: "Different fonts",
		website: "https://fontsource.org/"
	},
	Flowbite: {
		name: "Flowbite",
		description: "Tailwind components",
		website: "https://flowbite.com/docs/components"
	},
	PackagePhobia: {
		name: "PackagePhobia",
		description: "Cost of dev dependencies",
		website: "https://packagephobia.com/"
	}
};
const INFO_PORTFOLIO = {
	ASIDEBAR: {
		intro: "Per què Astro?",
		performance: "Rendiment",
		seo: "SEO",
		"ui-agnostic": "UI-agnòstic",
		scalability: "Escalabilitat",
		internationalization: "Internacionalització",
		"view-transitions": "Transicions"
	},
	INTRO1: "Pel desenvolupament d'aquest portfoli he utilitzat el Framework Astro en la seva versió 4.1.2, on gràcies a la seva simplicitat amb l'ús dels llenguatges més comuns (HTML, CSS i JS) i amb el suport d'eines complementaries més enfocades en la reactivitat com React en determinades situacions, m'ha ajudat a un desenvolupament ràpid i efectiu.",
	INTRO2: "L'elecció d'escollir Astro no ha sigut per un tema de coneixement sinó per un tema de raó d'ús en un SPA (Single Page Application) sense un ús d'un BackEnd. Això m'ha suposat un repte d'aprenentatge d'una eina nova que ha sigut emocionant i desafiant.",
	INTRO3: "També he escollit Astro pels següents beneficis que aporta:",
	PERFORMANCE1: "La velocitat de càrrega d'inici ràpida de Astro és un factor clau en una SPA, i això ho aconsegueix gràcies a una renderització en el servidor en comptes d'una renderització en el navegador del client.",
	PERFORMANCE2: "De fet, Astro es capaç de generar pàgines estàtiques amb un ús zero de JavaScript i, per tant, una carga rapidíssima on és l'usuari el responsable d'afegir-hi interactivitat a la web mitjançant components de Frameworks complementaris que es carreguin en el costat del client.",
	PERFORMANCE3: "En resum, Astro es basa en una pàgina estàtica mitjançant 'components reactius' (anomenats per la gent de Astro com 'Astro Islands') i això li permet una experiència al usuari de manera fluida i agradable.",
	SEO1: "Un altre aspecte important és la capacitat de posicionament SEO que tenen les webs dissenyades amb Astro. Per què? Doncs perquè Astro al generar pàgines estàtiques (HTML) durant la compilació, permet als motors de cerca indexar i rastrejar el contingut de manera eficient evitant en gran mesura l'execució d'arxius JavaScript que demorin la carga.",
	SEO2: "I això es resumeix amb un enfoc que li dona Astro basat en l'optimització d'eficiència del pes total de la pàgina per tal d'una millor experiència d'usuari i, alhora, influir positivament en la classificació del SEO.",
	SEO3: "A més a més, hi ha 2 factors que durant el desenvolupament ajuden a un millor posicionament SEO:",
	SEO4: "La facilitat de crear pàgines mitjançant URLs amigables",
	SEO5: "La compatibilitat d'inserció de Metadades en cada una de les pàgines de forma independent.",
	UIAGNOSTIC1: "Astro és agnòstic a altres eines de desenvolupament web, però, què vol dir ser agnòstic?",
	UIAGNOSTIC2: "Ser agnòstic en el món de la programació significa que no es limita a un ús concret d'eines o tecnologies especifiques, sinó que està obert en el seu ús per proporcionar al usuari una manera flexible de treballar segons les seves necessitats i preferències que millor s'adaptin.",
	UIAGNOSTIC3: "I això és el que Astro ofereix mitjançant, a més a més, una integració realment senzilla i sorprenent d'eines que tot desenvolupador ha manejat almenys alguna vegada, com per exemple:",
	SCALABILITY1: "El fet que Astro sigui un Framework ben senzill d'utilitzar, permet una escalabilitat fàcil que ajuda a una millor experiència en el desenvolupament en equips de treball.",
	SCALABILITY2: "L'ús de components reutilitzables com arquitectura facilita la gestió de projectes grans on els components son desenvolupats de manera independent. A més, amb l'optimització dels propis components separant els estàtics dels dinàmics (Astro Islands), permet una eficiència de recursos en aquelles webs amb una gran quantitat de contingut sense haver de perdre rendiment.",
	SCALABILITY3: "També, des de Astro 4.0, s'afegeix una eina de desenvolupament com es 'Astro Dev Toolbar' que permet inspeccionar de manera visual la pàgina que estàs desenvolupament (Astro Islands, Testing, Accessibilty problems...)",
	INTERNATIONALIZATION1: "També amb Astro 4.0 i endavant, s'ha incorporat de manera nativa la llibreria de i18n que permet fer les traduccions de forma fàcil i intuïtiva en la configuració del projecte. Permeten un enrutament dinàmic segons l'idioma i una gestió de les traduccions mitjançant un arxius JSON.",
	VIEWTRANSITIONS1: "Les transicions és una de les característiques més sorprenents que es va introduir a partir d'Astro 3, i no només pel seu fàcil ús sinó també pel seu impacte en la web permeten:",
	VIEWTRANSITIONS2: "Animar la navegació entre diferents pàgines",
	VIEWTRANSITIONS3: "Compatibilitat entre dispositius i tamanys de pantalla",
	VIEWTRANSITIONS4: "Personalització de diversos tipos de transicions adaptan-se a l'estil de la pàgina web",
	VIEWTRANSITIONS5: "La seva implementació es realitza mitjançant afegint en cada component (o en el seu Layout), un component anomenat <View Transitions /> i d'aquesta manera, si 2 components estàn situats en pàgines diferents, s'hi realitzarà una transició."
};
const catala = {
	SEO_TITLE_HOMEPAGE: SEO_TITLE_HOMEPAGE,
	SEO_DESCRIPTION_HOMEPAGE: SEO_DESCRIPTION_HOMEPAGE,
	SEO_TITLE_PORTFOLIO: SEO_TITLE_PORTFOLIO,
	SEO_DESCRIPTION_PORTFOLIO: SEO_DESCRIPTION_PORTFOLIO,
	BENTO_TITLES: BENTO_TITLES,
	OPEN_TO_WORK: OPEN_TO_WORK,
	SLOGAN: SLOGAN,
	PROJECTS: PROJECTS,
	CHALLENGES: CHALLENGES,
	COURSES: COURSES,
	REFERENCES: REFERENCES,
	STUDIES: STUDIES,
	JOBS: JOBS,
	WEBS: WEBS,
	INFO_PORTFOLIO: INFO_PORTFOLIO
};

const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es",
  CATALAN: "ca"
};
const getI18N = ({ currentLocale = "en" }) => {
  if (currentLocale === LANGUAGES.ENGLISH)
    return english;
  if (currentLocale === LANGUAGES.SPANISH)
    return espanol;
  if (currentLocale === LANGUAGES.CATALAN)
    return catala;
};

const $$Astro$J = createAstro();
const $$OpenToWork = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$OpenToWork;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-full hover:bg-lime-600/10 duration-300 hover:rounded-[10px]"> <p>${i18n?.OPEN_TO_WORK.TEXT1}</p> <p>${i18n?.OPEN_TO_WORK.TEXT2}</p> </div>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/OpenToWork.astro", void 0);

const $$Astro$I = createAstro();
const $$LanguageSelector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const { currentLocale } = Astro2;
  const language = currentLocale?.toLocaleUpperCase();
  const LOCALES = {
    en: {
      code: "en",
      path: "/en",
      next_path: "/es"
    },
    es: {
      code: "es",
      path: "/es",
      next_path: "/ca"
    },
    ca: {
      code: "ca",
      path: "/ca",
      next_path: "/en"
    }
  };
  let index = currentLocale;
  const nextPath = index ? LOCALES[index]?.next_path || "" : "";
  return renderTemplate`${maybeRenderHead()}<a class="w-full h-full flex justify-center items-center text-3xl font-bold"${addAttribute(nextPath, "href")}> ${language} </a>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/LanguageSelector.astro", void 0);

const $$Astro$H = createAstro();
const $$Moon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" stroke-width="0" fill="currentColor"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Moon.astro", void 0);

const $$Astro$G = createAstro();
const $$Sun = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path> <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor"></path> <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor"></path> <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path> <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path> <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor"></path> <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor"></path> <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path> <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Sun.astro", void 0);

const $$Astro$F = createAstro();
const $$ThemeSelector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$ThemeSelector;
  return renderTemplate`${maybeRenderHead()}<button id="button" class="cursor-pointer w-full h-full" title="Change theme color"> ${renderComponent($$result, "Moon", $$Moon, { "class": "size-8 absolute left-0 top-0 m-3" })} ${renderComponent($$result, "Sun", $$Sun, { "class": "size-8 absolute right-0 bottom-0 m-3" })} </button> `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/ThemeSelector.astro", void 0);

const $$Astro$E = createAstro();
const $$Slogan = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$Slogan;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-1 items-center justify-center h-full"> <p class="text-[10px] py-0.5 px-2 rounded-full bg-[#7dd6af] dark:bg-[#346751]">${i18n?.SLOGAN.abiliti1}</p> <p class="text-[10px] py-0.5 px-2 rounded-full bg-[#b5a3eb] dark:bg-[#5C469C]">${i18n?.SLOGAN.abiliti2}</p> <p class="text-[10px] py-0.5 px-2 rounded-full bg-[#a0d2e7] dark:bg-[#3795BD]">${i18n?.SLOGAN.abiliti3}</p> <p class="text-[10px] py-0.5 px-2 rounded-full bg-[#d8b987] dark:bg-[#C69749]">${i18n?.SLOGAN.abiliti4}</p> <p class="text-[10px] py-0.5 px-2 rounded-full bg-[#e2aae5] dark:bg-[#712B75]">${i18n?.SLOGAN.abiliti5}</p> <p class="text-[10px] py-0.5 px-2 rounded-full bg-[#e2eeab] dark:bg-[#93a058]">${i18n?.SLOGAN.abiliti6}</p> </div>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Slogan.astro", void 0);

const $$Astro$D = createAstro();
const $$Laravel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$Laravel;
  return renderTemplate`${maybeRenderHead()}<div id="laravel"${addAttribute(`${Astro2.props.class}`, "class")} data-astro-cid-jvgl5ssy> <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264" data-astro-cid-jvgl5ssy> <path d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z" fill="#FF2D20" data-astro-cid-jvgl5ssy></path> </svg> <p class="hidden text-[10px] mt-1 text-center" data-astro-cid-jvgl5ssy>Laravel</p> </div> `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Laravel.astro", void 0);

const $$Astro$C = createAstro();
const $$React = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<div id="react"${addAttribute(`${Astro2.props.class}`, "class")} data-astro-cid-o2pwlsbs> <svg viewBox="0 0 256 228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" data-astro-cid-o2pwlsbs> <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF" data-astro-cid-o2pwlsbs></path> </svg> <p class="hidden text-[10px] mt-1 text-center" data-astro-cid-o2pwlsbs>React</p> </div> `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/React.astro", void 0);

const $$Astro$B = createAstro();
const $$Express = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$Express;
  return renderTemplate`${maybeRenderHead()}<div id="express"${addAttribute(`${Astro2.props.class}`, "class")} data-astro-cid-j57wqrbk> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-astro-cid-j57wqrbk><path fill="#fff" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" data-astro-cid-j57wqrbk></path></svg> <p class="hidden text-[10px] mt-1 text-center" data-astro-cid-j57wqrbk>Express</p> </div> `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Express.astro", void 0);

const $$Astro$A = createAstro();
const $$Astroo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Astroo;
  return renderTemplate`${maybeRenderHead()}<div id="astro"${addAttribute(`${Astro2.props.class}`, "class")} data-astro-cid-eh4qhjea> <svg viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" data-astro-cid-eh4qhjea><path fill="#fff" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z" data-astro-cid-eh4qhjea></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z" data-astro-cid-eh4qhjea></path></svg> <p class="hidden text-[10px] mt-1 text-center" data-astro-cid-eh4qhjea>Astro</p> </div> `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Astroo.astro", void 0);

const $$Astro$z = createAstro();
const $$FastApi = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$FastApi;
  return renderTemplate`${maybeRenderHead()}<div id="fastapi"${addAttribute(`${Astro2.props.class}`, "class")} data-astro-cid-yipyktgh> <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" data-astro-cid-yipyktgh><path d="M128 0C57.33 0 0 57.33 0 128s57.33 128 128 128 128-57.33 128-128S198.67 0 128 0Zm-6.67 230.605v-80.288H76.699l64.128-124.922v80.288h42.966L121.33 230.605Z" fill="#009688" data-astro-cid-yipyktgh></path></svg> <p class="hidden text-[10px] mt-1 text-center" data-astro-cid-yipyktgh>FastAPI</p> </div> `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/FastApi.astro", void 0);

const $$Astro$y = createAstro();
const $$Frameworks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Frameworks;
  return renderTemplate`${maybeRenderHead()}<section class="flex gap-x-4 justify-center items-center h-full"> ${renderComponent($$result, "Laravel", $$Laravel, { "class": "h-full flex flex-col justify-center items-center size-10 hover:bg-gray-400/40 hover:dark:bg-white/10 hover:rounded-md hover:p-[2px] ease-in duration-300" })} ${renderComponent($$result, "React", $$React, { "class": "h-full flex flex-col justify-center items-center size-10 hover:bg-gray-400/40 hover:dark:bg-white/10 hover:rounded-md hover:p-[2px] ease-in duration-300" })} ${renderComponent($$result, "Express", $$Express, { "class": "h-full flex flex-col justify-center items-center size-10 hover:bg-gray-400/40 hover:dark:bg-white/10 hover:rounded-md hover:p-[2px] ease-in duration-300" })} ${renderComponent($$result, "FastApi", $$FastApi, { "class": "h-full flex flex-col justify-center items-center size-10 hover:bg-gray-400/40 hover:dark:bg-white/10 hover:rounded-md hover:p-[2px] ease-in duration-300" })} ${renderComponent($$result, "Astroo", $$Astroo, { "class": "h-full flex flex-col justify-center items-center size-10 hover:bg-gray-400/40 hover:dark:bg-white/10 hover:rounded-md hover:p-[2px] ease-in duration-300" })}</section>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Frameworks.astro", void 0);

const $$Astro$x = createAstro();
const $$TitleComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$TitleComponent;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-2xl pl-2 pt-0.5 flex h-fit w-fit">${title}</h2>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/components/TitleComponent.astro", void 0);

const $$Astro$w = createAstro();
const $$Rocket = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Rocket;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve"> <style type="text/css">
        .st0{fill:#4F5D73;}
        .st1{opacity:0.2;}
        .st2{fill:#231F20;}
        .st3{fill:#C75C5C;}
        .st4{fill:#E0995E;}
        .st5{fill:#F5CF87;}
        .st6{fill:#E0E0D1;}
    </style> <g id="Layer_1"> <g> <circle class="st0" cx="32" cy="32" r="32"></circle> </g> <g class="st1"> <path class="st2" d="M32.1,39.7C30.5,41.2,26,52.2,26,52.2c-0.7,1.2,0.3,2.1,2.6,0.9l8.1-4.4c4.4-2.4,5.2-3.1,5.2-8l-0.8-5.9    c-0.3-2-1.8-2.4-3.3-0.8L32.1,39.7z"></path> </g> <g class="st1"> <path class="st2" d="M27.1,34.7c-1.6,1.6-12.5,6.1-12.5,6.1c-1.2,0.7-2.1-0.3-0.9-2.6L18,30c2.4-4.4,3.1-5.2,8-5.2l5.9,0.8    c2,0.3,2.4,1.8,0.8,3.3L27.1,34.7z"></path> </g> <g> <path class="st3" d="M32.1,37.7C30.5,39.2,26,50.2,26,50.2c-0.7,1.2,0.3,2.1,2.6,0.9l8.1-4.4c4.4-2.4,5.2-3.1,5.2-8l-0.8-5.9    c-0.3-2-1.8-2.4-3.3-0.8L32.1,37.7z"></path> </g> <g> <path class="st3" d="M27.1,32.7c-1.6,1.6-12.5,6.1-12.5,6.1c-1.2,0.7-2.1-0.3-0.9-2.6L18,28c2.4-4.4,3.1-5.2,8-5.2l5.9,0.8    c2,0.3,2.4,1.8,0.8,3.3L27.1,32.7z"></path> </g> <g class="st1"> <path class="st2" d="M21.2,39.5c5.1-5.1,9.3-3.5,9.3-3.5s1.5,4.3-3.5,9.3s-13.3,8.8-13.9,8.1C12.5,52.9,16.2,44.6,21.2,39.5z"></path> </g> <g> <path class="st4" d="M21.2,37.5c5.1-5.1,9.3-3.5,9.3-3.5s1.5,4.3-3.5,9.3s-13.3,8.8-13.9,8.1C12.5,50.9,16.2,42.6,21.2,37.5z"></path> </g> <g> <path class="st5" d="M25.5,33.3c5.1-5.1,9.3-3.5,9.3-3.5s1.5,4.3-3.5,9.3S18,47.9,17.4,47.2C16.7,46.6,20.4,38.4,25.5,33.3z"></path> </g> <g class="st1"> <path class="st2" d="M43.6,37.1c-7.8,7.8-19.8,5.7-19.8,5.7s-2.1-12,5.7-19.8s19.6-8.6,21.2-7.1C52.2,17.4,51.4,29.3,43.6,37.1z"></path> </g> <g> <path class="st6" d="M43.6,35.1c-7.8,7.8-19.8,5.7-19.8,5.7s-2.1-12,5.7-19.8s19.6-8.6,21.2-7.1C52.2,15.4,51.4,27.3,43.6,35.1z"></path> </g> <g class="st1"> <path class="st2" d="M21,47c-0.8,0.8-1.3,1.5-2.1,0.7l0,0c-0.8-0.8-0.1-1.3,0.7-2.1l9.9-12.7c0.8-0.8,4.2-1.5,4.9-0.7l0,0    c0.8,0.8,0.1,4.2-0.7,4.9L21,47z"></path> </g> <g> <path class="st3" d="M21,45c-0.8,0.8-1.3,1.5-2.1,0.7l0,0c-0.8-0.8-0.1-1.3,0.7-2.1l9.9-12.7c0.8-0.8,4.2-1.5,4.9-0.7l0,0    c0.8,0.8,0.1,4.2-0.7,4.9L21,45z"></path> </g> <g class="st1"> <circle class="st2" cx="39.6" cy="27.1" r="4"></circle> </g> <g class="st1"> <circle class="st2" cx="45.3" cy="21.5" r="2"></circle> </g> <g> <circle class="st0" cx="39.6" cy="25.1" r="4"></circle> </g> <g> <circle class="st0" cx="45.3" cy="19.5" r="2"></circle> </g> </g> <g id="Layer_2"></g> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Rocket.astro", void 0);

const $$Astro$v = createAstro();
const $$ArrowLeftFilled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$ArrowLeftFilled;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-left-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" stroke-width="0" fill="currentColor"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/ArrowLeftFilled.astro", void 0);

const $$Astro$u = createAstro();
const $$ArrowRightFilled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$ArrowRightFilled;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-right-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" stroke-width="0" fill="currentColor"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/ArrowRightFilled.astro", void 0);

const $$Astro$t = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Projects;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const widthSliders = "w-[700%]";
  return renderTemplate`${renderComponent($$result, "TitleComponent", $$TitleComponent, { "title": i18n?.BENTO_TITLES.PROJECTS, "data-astro-cid-w5tar3w3": true })} ${maybeRenderHead()}<div class="w-full overflow-hidden" data-astro-cid-w5tar3w3> <div${addAttribute(`relative flex ${widthSliders}`, "class")} data-astro-cid-w5tar3w3> <div id="slider"${addAttribute(`carruseles ${widthSliders} flex max-h-max`, "class")} data-astro-cid-w5tar3w3> <section${addAttribute(`slider-section flex flex-col m-2 w-full`, "class")} data-astro-cid-w5tar3w3> <img src="/imgs/jump2digital.webp" class="max-h-40 w-full object-cover rounded-md" alt="Jump2Digital project" data-astro-cid-w5tar3w3> <div class="flex justify-between pt-1 pb-0.5" data-astro-cid-w5tar3w3> <p class="text-xl ml-2 line-clamp-1" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[7].name}</p> <div class="flex gap-x-2 h-fit mr-2 pt-1" data-astro-cid-w5tar3w3> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#07799e] dark:text-[#5ed3f3] rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[7].technologies[0]}</p> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#d8292b] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[7].technologies[1]}</p> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#1c3b56] dark:text-[#4989bb] rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[7].technologies[2]}</p> </div> </div> <div class="flex justify-between mr-2" data-astro-cid-w5tar3w3> <p class="text-[10px] pt-1 mx-2 line-clamp-3 overflow-y-scroll no-scrollbar" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[7].description}</p> <div class="flex flex-col gap-y-2" data-astro-cid-w5tar3w3> <a${addAttribute(i18n?.PROJECTS[7].github, "href")} target="_blank" class="flex items-center justify-center" title="Jump2Digital Repository GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "GitHub", $$GitHub, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> <a${addAttribute(i18n?.PROJECTS[7].deploy, "href")} target="_blank" class="flex items-center justify-center" title="Jump2Digital Deploy GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "Rocket", $$Rocket, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> </div> </div> </section> <section${addAttribute(`slider-section flex flex-col m-2 w-full`, "class")} data-astro-cid-w5tar3w3> <img src="/imgs/itaProfiles.webp" class="max-h-40 w-full object-cover rounded-md" alt="itaProfiles project" data-astro-cid-w5tar3w3> <div class="flex justify-between pt-1 pb-0.5" data-astro-cid-w5tar3w3> <p class="text-xl ml-2 line-clamp-1" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[6].name}</p> <div class="flex gap-x-2 h-fit mr-2 pt-1" data-astro-cid-w5tar3w3> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#07799e] dark:text-[#5ed3f3] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[6].technologies[0]}</p> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#2960a7] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[6].technologies[1]}</p> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#d8292b] rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[6].technologies[2]}</p> </div> </div> <div class="flex justify-between mr-2" data-astro-cid-w5tar3w3> <p class="text-[10px] pt-1 mx-2 line-clamp-3 overflow-y-scroll no-scrollbar" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[6].description}</p> <div class="flex flex-col gap-y-2" data-astro-cid-w5tar3w3> <a${addAttribute(i18n?.PROJECTS[6].github, "href")} target="_blank" class="flex items-center justify-center" title="itaProfiles Repository GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "GitHub", $$GitHub, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> <a${addAttribute(i18n?.PROJECTS[6].deploy, "href")} target="_blank" class="flex items-center justify-center" title="itaProfiles Deploy GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "Rocket", $$Rocket, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> </div> </div> </section> <section${addAttribute(`slider-section flex flex-col m-2 w-full`, "class")} data-astro-cid-w5tar3w3> <img src="/imgs/restaurant.webp" class="max-h-40 w-full object-cover rounded-md" alt="ReserveEat project" data-astro-cid-w5tar3w3> <div class="flex justify-between pt-1 pb-0.5" data-astro-cid-w5tar3w3> <p class="text-xl ml-2 line-clamp-1" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[5].name}</p> <div class="flex gap-x-2 h-fit mr-2 pt-1" data-astro-cid-w5tar3w3> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#359271] rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[5].technologies[0]}</p> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#d8292b] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[5].technologies[1]}</p> </div> </div> <div class="flex justify-between mr-2" data-astro-cid-w5tar3w3> <p class="text-[10px] pt-1 mx-2 line-clamp-3 overflow-y-scroll no-scrollbar" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[5].description}</p> <div class="flex flex-col gap-y-2" data-astro-cid-w5tar3w3> <a${addAttribute(i18n?.PROJECTS[5].github, "href")} target="_blank" class="flex items-center justify-center" title="ReserveEat Repository GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "GitHub", $$GitHub, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> <a${addAttribute(i18n?.PROJECTS[5].deploy, "href")} target="_blank" class="flex items-center justify-center" title="ReserveEat Deploy GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "Rocket", $$Rocket, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> </div> </div> </section> <section${addAttribute(`slider-section flex flex-col m-2 w-full`, "class")} data-astro-cid-w5tar3w3> <img src="/imgs/itaLanding.webp" class="max-h-40 w-full object-cover rounded-md" alt="itaLanding project" data-astro-cid-w5tar3w3> <div class="flex justify-between pt-1 pb-0.5" data-astro-cid-w5tar3w3> <p class="text-xl ml-2 line-clamp-1" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[4].name}</p> <div class="flex gap-x-2 h-fit mr-2 pt-1" data-astro-cid-w5tar3w3> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#07799e] dark:text-[#5ed3f3] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[4].technologies[0]}</p> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#2960a7] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[4].technologies[1]}</p> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#d8292b] rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[4].technologies[2]}</p> </div> </div> <div class="flex justify-between mr-2" data-astro-cid-w5tar3w3> <p class="text-[10px] pt-1 mx-2 line-clamp-3 overflow-y-scroll no-scrollbar" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[4].description}</p> <div class="flex flex-col gap-y-2" data-astro-cid-w5tar3w3> <a${addAttribute(i18n?.PROJECTS[4].github, "href")} target="_blank" class="flex items-center justify-center" title="itaLanding Repository GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "GitHub", $$GitHub, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> <a${addAttribute(i18n?.PROJECTS[4].deploy, "href")} target="_blank" class="flex items-center justify-center" title="itaLanding Deploy GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "Rocket", $$Rocket, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> </div> </div> </section> <section${addAttribute(`slider-section flex flex-col m-2 w-full`, "class")} data-astro-cid-w5tar3w3> <img src="/imgs/crudReduxToolkit.webp" class="max-h-40 w-full object-cover rounded-md" alt="crudReduxToolkit project" data-astro-cid-w5tar3w3> <div class="flex justify-between pt-1 pb-0.5" data-astro-cid-w5tar3w3> <p class="text-xl ml-2 line-clamp-1" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[3].name}</p> <div class="flex gap-x-2 h-fit mr-2 pt-1" data-astro-cid-w5tar3w3> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#07799e] dark:text-[#5ed3f3] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[3].technologies[0]}</p> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#6f47b6] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[3].technologies[1]}</p> </div> </div> <div class="flex justify-between mr-2" data-astro-cid-w5tar3w3> <p class="text-[10px] pt-1 mx-2 line-clamp-3 overflow-y-scroll no-scrollbar" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[3].description}</p> <div class="flex flex-col gap-y-2" data-astro-cid-w5tar3w3> <a${addAttribute(i18n?.PROJECTS[3].github, "href")} target="_blank" class="flex items-center justify-center" title="CRUD Redux Toolkit Repository GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "GitHub", $$GitHub, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> <a${addAttribute(i18n?.PROJECTS[3].deploy, "href")} target="_blank" class="flex items-center justify-center" title="CRUD Redux Toolkit Deploy GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "Rocket", $$Rocket, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> </div> </div> </section> <section${addAttribute(`slider-section flex flex-col m-2 w-full`, "class")} data-astro-cid-w5tar3w3> <img src="/imgs/footballApp.webp" class="max-h-40 w-full object-cover rounded-md" alt="FootballApp project" data-astro-cid-w5tar3w3> <div class="flex justify-between pt-1 pb-0.5" data-astro-cid-w5tar3w3> <p class="text-xl ml-2 line-clamp-1" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[2].name}</p> <div class="flex gap-x-2 h-fit mr-2 pt-1" data-astro-cid-w5tar3w3> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#d8292b] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[2].technologies[0]}</p> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#df2d27] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[2].technologies[1]}</p> </div> </div> <div class="flex justify-between mr-2" data-astro-cid-w5tar3w3> <p class="text-[10px] pt-1 mx-2 line-clamp-3 overflow-y-scroll no-scrollbar" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[2].description}</p> <div class="flex flex-col gap-y-2" data-astro-cid-w5tar3w3> <a${addAttribute(i18n?.PROJECTS[2].github, "href")} target="_blank" class="flex items-center justify-center" title="Football App Managment Repository GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "GitHub", $$GitHub, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> <a${addAttribute(i18n?.PROJECTS[2].deploy, "href")} target="_blank" class="flex items-center justify-center" title="Football App Managment Deploy GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "Rocket", $$Rocket, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> </div> </div> </section> <section${addAttribute(`slider-section flex flex-col m-2 w-full`, "class")} data-astro-cid-w5tar3w3> <img src="/imgs/diceAPI.webp" class="max-h-40 w-full object-cover rounded-md" alt="diceAPI project" data-astro-cid-w5tar3w3> <div class="flex justify-between pt-1 pb-0.5" data-astro-cid-w5tar3w3> <p class="text-xl ml-2 line-clamp-1" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[1].name}</p> <div class="flex gap-x-2 h-fit mr-2 pt-1" data-astro-cid-w5tar3w3> <p class="bg-[#f9fbff] dark:bg-[#23272f] text-[#d8292b] font-semibold underline rounded-full px-1.5 text-xs" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[1].technologies[0]}</p> </div> </div> <div class="flex justify-between mr-2" data-astro-cid-w5tar3w3> <p class="text-[10px] pt-1 mx-2 line-clamp-3 overflow-y-scroll no-scrollbar" data-astro-cid-w5tar3w3>${i18n?.PROJECTS[1].description}</p> <div class="flex flex-col gap-y-2" data-astro-cid-w5tar3w3> <a${addAttribute(i18n?.PROJECTS[1].github, "href")} target="_blank" class="flex items-center justify-center" title="Dice API Repository GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "GitHub", $$GitHub, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> <a${addAttribute(i18n?.PROJECTS[1].deploy, "href")} target="_blank" class="flex items-center justify-center" title="Dice API Deploy GitHub - Albert Lanza Rio (AlbertLnz)" data-astro-cid-w5tar3w3> ${renderComponent($$result, "Rocket", $$Rocket, { "class": "size-6", "data-astro-cid-w5tar3w3": true })} </a> </div> </div> </section> </div> </div> </div> <div id="btn-left" class="flex text-black absolute top-1/2 rounded-full cursor-pointer transform -translate-y-[100%] transition duration-500 ease select-none left-[5%] hover:bg-slate-700 hover:text-white" data-astro-cid-w5tar3w3> ${renderComponent($$result, "ArrowLeftFilled", $$ArrowLeftFilled, { "data-astro-cid-w5tar3w3": true })} </div> <div id="btn-right" class="flex text-black absolute top-1/2 rounded-full cursor-pointer transform -translate-y-[100%] transition duration-500 ease select-none right-[5%] hover:bg-slate-700 hover:text-white" data-astro-cid-w5tar3w3> ${renderComponent($$result, "ArrowRightFilled", $$ArrowRightFilled, { "data-astro-cid-w5tar3w3": true })} </div>  `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Projects.astro", void 0);

const $$Astro$s = createAstro();
const $$Challenges = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Challenges;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`<head><link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css">${renderHead()}</head> <div class="flex flex-col h-full text-xs overflow-y-hidden" data-astro-cid-gvytvjux> <div class="flex h-fit justify-between items-center mr-4" data-astro-cid-gvytvjux> ${renderComponent($$result, "TitleComponent", $$TitleComponent, { "title": i18n?.BENTO_TITLES.CHALLENGES, "data-astro-cid-gvytvjux": true })} <a class="text-sm" href="https://github.com/AlbertLnz/ChallengingMeVideosRepo" target="_blank" title="GitHub Repository Challenge AlbertLnz" data-astro-cid-gvytvjux>${i18n?.CHALLENGES.CODE}</a> </div> <div class="overflow-hidden aspect-video" data-astro-cid-gvytvjux> <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="6ESGSD9f7Po" data-astro-cid-gvytvjux></div> </div> </div>  `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Challenges.astro", void 0);

const CursosComponent = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale });
  const numOfCourses = 15;
  const [selectorCourse, setSelectorCourse] = useState(15);
  const [typeColor, setTypeColor] = useState("");
  const handleIncrementCourse = () => {
    selectorCourse >= 1 && selectorCourse < numOfCourses ? setSelectorCourse(selectorCourse + 1) : selectorCourse;
  };
  const handleDecrementCourse = () => {
    selectorCourse > 1 ? setSelectorCourse(selectorCourse - 1) : selectorCourse;
  };
  useEffect(() => {
    const courseType = i18n.COURSES[selectorCourse].type;
    if (courseType === "Learning" || courseType === "Aprendizaje" || courseType === "Aprenentatge") {
      setTypeColor("bg-green-400");
    } else if (courseType === "Talk" || courseType === "Charla" || courseType === "Xerrada") {
      setTypeColor("bg-red-400");
    } else if (courseType === "Hackathon" || courseType === "Hackatón" || courseType === "Hackató") {
      setTypeColor("bg-blue-400");
    }
  }, [selectorCourse]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute top-0 right-0 flex gap-x-2 justify-end p-4 h-fit", children: [
      /* @__PURE__ */ jsx("button", { className: "h-fit px-1 rounded-sm text-sm bg-[#B0A695] dark:bg-gray-700", onClick: handleIncrementCourse, children: i18n.COURSES.BUTTONS.NEWEST }),
      /* @__PURE__ */ jsx("button", { className: "h-fit px-1 rounded-sm text-sm bg-[#B0A695] dark:bg-gray-700", onClick: handleDecrementCourse, children: i18n.COURSES.BUTTONS.OLDEST })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg pl-4 line-clamp-1 pt-1", children: i18n.COURSES[selectorCourse].name }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center text-xs pl-6 pb-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "line-clamp-1", children: [
        i18n.COURSES[selectorCourse].timedate,
        " — "
      ] }),
      /* @__PURE__ */ jsx("div", { className: `size-2 rounded-full ${typeColor}` }),
      /* @__PURE__ */ jsxs("p", { children: [
        " ",
        i18n.COURSES[selectorCourse].type
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-around text-[10px] text-center mx-auto gap-x-8", children: [
      /* @__PURE__ */ jsx("a", { className: "px-4 py-1 bg-[#CCC8AA] dark:bg-gray-500 rounded-md hover:scale-110 ease-in duration-300", href: i18n.COURSES[selectorCourse].certificate, target: "_blank", children: i18n.COURSES.BUTTONS.CERTIFICATE }),
      /* @__PURE__ */ jsx("a", { className: "px-4 py-1 bg-[#CCC8AA] dark:bg-gray-500 rounded-md hover:scale-110 ease-in duration-300", href: i18n.COURSES[selectorCourse].link_course, target: "_blank", children: i18n.COURSES.BUTTONS.COURSE_LINK })
    ] })
  ] });
};

const $$Astro$r = createAstro();
const $$Cursos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Cursos;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> ${renderComponent($$result, "TitleComponent", $$TitleComponent, { "title": i18n?.BENTO_TITLES.COURSES })} ${renderComponent($$result, "CursosComponent", CursosComponent, { "currentLocale": currentLocale, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/components/CursosComponent.jsx", "client:component-export": "default" })} </div>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Cursos.astro", void 0);

const StudiesComponent = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale });
  const numOfStudies = 5;
  const [selectorStudies, setSelectorStudies] = useState(5);
  const handleIncrementCourse = () => {
    selectorStudies >= 1 && selectorStudies < numOfStudies ? setSelectorStudies(selectorStudies + 1) : selectorStudies;
  };
  const handleDecrementCourse = () => {
    selectorStudies > 1 ? setSelectorStudies(selectorStudies - 1) : selectorStudies;
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl pl-2 pt-0.5 flex h-fit w-fit", children: i18n?.BENTO_TITLES.STUDIES }),
      /* @__PURE__ */ jsxs("ul", { className: "flex flex-col flex-grow text-[10px] my-1", children: [
        /* @__PURE__ */ jsx("li", { className: "line-clamp-1", children: i18n.STUDIES[selectorStudies].name }),
        /* @__PURE__ */ jsx("li", { className: "line-clamp-1", children: i18n.STUDIES[selectorStudies].school }),
        /* @__PURE__ */ jsx("li", { className: "line-clamp-1", children: i18n.STUDIES[selectorStudies].period }),
        /* @__PURE__ */ jsx("li", { className: "line-clamp-1", children: i18n.STUDIES[selectorStudies].location })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex text-[10px] justify-between px-2 py-1", children: [
        /* @__PURE__ */ jsx("button", { onClick: handleIncrementCourse, className: "bg-[#B0A695] dark:bg-gray-700 px-1 py-0.5 rounded-full", children: i18n.STUDIES.BUTTON1 }),
        /* @__PURE__ */ jsx("button", { onClick: handleDecrementCourse, className: "bg-[#B0A695] dark:bg-gray-700 px-1 py-0.5 rounded-full", children: i18n.STUDIES.BUTTON2 })
      ] })
    ] }),
    /* @__PURE__ */ jsx("img", { className: "rounded-xl px-2 object-cover h-full", src: i18n.STUDIES[selectorStudies].school_image, alt: i18n.STUDIES[selectorStudies].name })
  ] });
};

const $$Astro$q = createAstro();
const $$Studies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Studies;
  const { currentLocale } = Astro2;
  return renderTemplate`${renderComponent($$result, "StudiesComponent", StudiesComponent, { "currentLocale": currentLocale, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/components/StudiesComponent", "client:component-export": "default" })}`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Studies.astro", void 0);

const JobsComponent = ({ currentLocale, id }) => {
  const i18n = getI18N({ currentLocale });
  const jobData = i18n.JOBS[id];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("ul", { className: "mt-1 mb-6 text-center", children: [
      /* @__PURE__ */ jsx("li", { className: "text-lg font-semibold", children: jobData.name }),
      /* @__PURE__ */ jsx("li", { className: "text-sm flex justify-center items-center", children: jobData.company }),
      /* @__PURE__ */ jsx("li", { className: "text-xs", children: jobData.period })
    ] }),
    /* @__PURE__ */ jsx("hr", { text: i18n.JOBS.SEPARATOR, className: "overflow-visible p-0 border-t-2 w-[90%] border-double dark:border-white text-center after:content-[attr(text)] after:inline-block after:relative after:top-[-1em] after:text-sm after:px-1 after:bg-[#d1d5db] after:dark:bg-[#171717]" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-2 text-sm mt-2 justify-center", children: jobData.abilities.map((ability) => /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-[10px] bg-sky-300 dark:bg-sky-800 rounded-full px-2", children: ability }, ability)) })
  ] });
};

const $$Astro$p = createAstro();
const $$Jobs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Jobs;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "TitleComponent", $$TitleComponent, { "title": i18n?.BENTO_TITLES.JOBS, "data-astro-cid-ve32lzmj": true })} ${maybeRenderHead()}<div class="wrapper flex overflow-x-auto snap-x cursor-grab scroll-smooth" data-astro-cid-ve32lzmj> <div class="slider flex flex-col justify-center items-center snap-center min-w-full h-full" data-astro-cid-ve32lzmj> ${renderComponent($$result, "JobsComponent", JobsComponent, { "currentLocale": currentLocale, "id": "4", "data-astro-cid-ve32lzmj": true })} </div> <div class="slider flex flex-col justify-center items-center snap-center min-w-full h-full" data-astro-cid-ve32lzmj> ${renderComponent($$result, "JobsComponent", JobsComponent, { "currentLocale": currentLocale, "id": "3", "data-astro-cid-ve32lzmj": true })} </div> <div class="slider flex flex-col justify-center items-center snap-center min-w-full h-full" data-astro-cid-ve32lzmj> ${renderComponent($$result, "JobsComponent", JobsComponent, { "currentLocale": currentLocale, "id": "2", "data-astro-cid-ve32lzmj": true })} </div> <div class="slider flex flex-col justify-center items-center snap-center min-w-full h-full" data-astro-cid-ve32lzmj> ${renderComponent($$result, "JobsComponent", JobsComponent, { "currentLocale": currentLocale, "id": "1", "data-astro-cid-ve32lzmj": true })} </div> </div>  `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Jobs.astro", void 0);

const $$Astro$o = createAstro();
const $$Docker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Docker;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#008fe2"> <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Docker.astro", void 0);

const $$Astro$n = createAstro();
const $$Figma = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Figma;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="54" height="80" viewBox="0 0 54 80" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_912_3)"> <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83"></path> <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF"></path> <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E"></path> <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262"></path> <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE"></path> </g> <defs> <clipPath id="clip0_912_3"> <rect width="53.3333" height="80" fill="white"></rect> </clipPath> </defs> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Figma.astro", void 0);

const $$Astro$m = createAstro();
const $$Git = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Git;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Git.astro", void 0);

const $$Astro$l = createAstro();
const $$JetBrains = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$JetBrains;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M0 0h256v256H0z"></path> <path d="M28 208h96v16H28v-16ZM24 66l7-7c1 2 4 4 6 4 3 0 5-2 5-6V32h11v25c0 5-1 9-4 12-3 2-6 4-10 4h-1c-5 0-10-2-14-6v-1Zm34-34h32v9H69v7h19v8H69v6h21v10H58V32Zm48 10H94V32h35v10h-12v30h-11V42ZM28 88h19c4-1 8 1 11 3 2 2 3 4 3 7 0 4-3 7-7 9 5 1 8 5 8 10 0 7-5 11-15 11H28V88Zm22 12c0-2-2-3-5-3h-6v7h5c4 0 6-1 6-4Zm-4 11h-7v8h7c3 0 5-1 5-4 0-2-1-3-4-3l-1-1Zm43 17-8-12h-4v12H66V88h18c4-1 9 1 13 4 2 2 3 5 3 9 0 6-3 11-8 13l8 11 16-37h10l17 40h-12l-2-7h-16l-3 7H89Zm32-27-5 11h9l-4-11Zm-38-4h-6v10h6c4 0 6-2 6-5s-2-5-6-5Zm62-9h11v40h-11V88Zm15 0h11l14 21V88h11v40h-10l-15-22v22h-11V88Zm38 34 6-8c4 3 8 5 13 5 3 0 4-1 4-3 0-1 0-2-3-3h-3l-1-1h-2l-2-1c-6-1-10-4-10-11s5-13 15-13c6 0 12 2 16 6l-5 7c-3-2-7-4-11-4-3 0-4 1-4 3l3 3h2l2 1c9 2 15 5 15 12 0 8-6 13-15 13h-1c-7 0-13-2-18-5l-1-1Z" fill="#FFF"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/JetBrains.astro", void 0);

const $$Astro$k = createAstro();
const $$MongoDB = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$MongoDB;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"></path></svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/MongoDB.astro", void 0);

const $$Astro$j = createAstro();
const $$MySQL = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$MySQL;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"> <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B"></path> <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/MySQL.astro", void 0);

const $$Astro$i = createAstro();
const $$Node = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Node;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 289" width="256" height="289" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z" fill="#539E43"></path></svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Node.astro", void 0);

const $$Astro$h = createAstro();
const $$Postman = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Postman;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M254.953 144.253c8.959-70.131-40.569-134.248-110.572-143.206C74.378-7.912 10.005 41.616 1.047 111.619c-8.959 70.003 40.569 134.248 110.572 143.334 70.131 8.959 134.248-40.569 143.334-110.7Z" fill="#FF6C37"></path><path d="m174.2 82.184-54.007 54.007-15.229-15.23c53.11-53.11 58.358-48.503 69.236-38.777Z" fill="#FFF"></path><path d="M120.193 137.47c-.384 0-.64-.128-.895-.384l-15.358-15.229a1.237 1.237 0 0 1 0-1.792c54.007-54.006 59.638-48.887 71.028-38.649.255.256.383.512.383.896s-.128.64-.383.896l-54.007 53.878c-.128.256-.512.384-.768.384Zm-13.437-16.509 13.437 13.438 52.087-52.087c-9.47-8.446-15.87-11.006-65.524 38.65Z" fill="#FF6C37"></path><path d="m135.679 151.676-14.718-14.718 54.007-54.006c14.46 14.59-7.167 38.265-39.29 68.724Z" fill="#FFF"></path><path d="M135.679 152.956c-.384 0-.64-.128-.896-.384l-14.718-14.718c-.256-.256-.256-.512-.256-.896s.128-.64.384-.895L174.2 82.056a1.237 1.237 0 0 1 1.791 0 15.58 15.58 0 0 1 4.991 11.902c-.256 14.206-16.38 32.25-44.28 58.614-.383.256-.767.384-1.023.384Zm-12.926-15.998c8.19 8.319 11.646 11.646 12.926 12.926 21.5-20.476 42.36-41.464 42.488-55.926.128-3.327-1.152-6.655-3.327-9.214l-52.087 52.214Z" fill="#FF6C37"></path><path d="m105.22 121.345 10.878 10.878c.256.256.256.512 0 .768-.128.128-.128.128-.256.128l-22.524 4.863c-1.152.128-2.175-.64-2.431-1.791-.128-.64.128-1.28.512-1.664l13.053-13.054c.256-.256.64-.384.768-.128Z" fill="#FFF"></path><path d="M92.934 139.262c-1.92 0-3.327-1.536-3.327-3.455 0-.896.384-1.792 1.024-2.432l13.053-13.054c.768-.64 1.792-.64 2.56 0l10.878 10.878c.768.64.768 1.792 0 2.56-.256.256-.512.384-.896.512l-22.524 4.863c-.256 0-.512.128-.768.128Zm11.902-16.51-12.542 12.543c-.256.256-.383.64-.128 1.024.128.383.512.511.896.383l21.116-4.607-9.342-9.342Z" fill="#FF6C37"></path><path d="M202.739 52.238c-8.191-7.935-21.373-7.679-29.307.64-7.935 8.318-7.679 21.372.64 29.306A20.678 20.678 0 0 0 199.155 85l-14.59-14.59 18.174-18.172Z" fill="#FFF"></path><path d="M188.405 89.223c-12.158 0-22.012-9.854-22.012-22.012 0-12.158 9.854-22.012 22.012-22.012 5.631 0 11.134 2.176 15.23 6.143.255.256.383.512.383.896s-.128.64-.384.895L186.357 70.41l13.566 13.566c.512.512.512 1.28 0 1.792l-.256.256c-3.327 2.047-7.295 3.199-11.262 3.199Zm0-41.337c-10.75 0-19.452 8.703-19.324 19.453 0 10.75 8.702 19.452 19.452 19.324 2.944 0 5.887-.64 8.575-2.047l-13.438-13.31c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l17.149-17.15c-3.456-2.943-7.807-4.479-12.414-4.479Z" fill="#FF6C37"></path><path d="m203.122 52.622-.255-.256-18.301 18.044 14.461 14.462c1.408-.896 2.816-1.92 3.967-3.072a20.51 20.51 0 0 0 .128-29.178Z" fill="#FFF"></path><path d="M199.155 86.28c-.384 0-.64-.128-.896-.384l-14.589-14.59c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l18.173-18.173a1.237 1.237 0 0 1 1.791 0l.384.256c8.575 8.574 8.575 22.396.128 31.098-1.28 1.28-2.687 2.432-4.223 3.328-.384.128-.64.256-.768.256Zm-12.798-15.87 12.926 12.926c1.024-.64 2.048-1.536 2.816-2.304 7.294-7.294 7.678-19.196.64-26.875L186.357 70.41Z" fill="#FF6C37"></path><path d="M176.375 84.488a7.879 7.879 0 0 0-11.134 0l-48.247 48.247 8.063 8.063 51.062-44.792c3.328-2.816 3.584-7.807.768-11.134-.256-.128-.384-.256-.512-.384Z" fill="#FFF"></path><path d="M124.929 142.077c-.384 0-.64-.128-.896-.383l-8.063-8.063a1.237 1.237 0 0 1 0-1.792l48.247-48.247a9.115 9.115 0 0 1 12.926 0 9.115 9.115 0 0 1 0 12.926l-.384.384-51.063 44.792c-.128.255-.384.383-.767.383Zm-6.143-9.342 6.27 6.271 50.167-44.024c2.816-2.304 3.072-6.527.768-9.342-2.303-2.816-6.526-3.072-9.342-.768-.128.128-.256.256-.512.384l-47.351 47.48Z" fill="#FF6C37"></path><path d="M80.009 187.637c-.512.256-.768.768-.64 1.28l2.175 9.214c.512 1.28-.256 2.816-1.663 3.2-1.024.384-2.176 0-2.816-.768l-14.077-13.95 45.943-45.943 15.87.256 10.75 10.75c-2.56 2.175-18.045 17.149-55.542 35.961Z" fill="#FFF"></path><path d="M78.985 202.61c-1.024 0-2.048-.383-2.688-1.151l-13.95-13.95c-.255-.256-.383-.512-.383-.896 0-.383.128-.64.384-.895l45.944-45.944c.256-.256.64-.384.895-.384l15.87.256c.383 0 .64.128.895.384l10.75 10.75c.256.256.384.64.384 1.024s-.128.64-.512.896l-.895.767c-13.566 11.902-31.995 23.804-54.902 35.194l2.175 9.086c.384 1.664-.384 3.456-1.92 4.352-.767.384-1.407.512-2.047.512Zm-14.078-15.997 13.182 13.054c.384.64 1.152.896 1.792.512.64-.384.896-1.152.512-1.792l-2.176-9.214c-.256-1.152.256-2.176 1.28-2.688 22.652-11.39 40.952-23.163 54.39-34.81l-9.47-9.47-14.718-.256-44.792 44.664Z" fill="#FF6C37"></path><path d="m52.11 197.62 11.006-11.007 16.38 16.381-26.107-1.791c-1.151-.128-1.92-1.152-1.791-2.304 0-.512.128-1.024.512-1.28Z" fill="#FFF"></path><path d="m79.497 204.146-26.236-1.791c-1.92-.128-3.199-1.792-3.071-3.712.128-.768.384-1.535 1.024-2.047L62.22 185.59a1.237 1.237 0 0 1 1.792 0l16.38 16.38c.385.385.512.897.257 1.408-.256.512-.64.768-1.152.768Zm-16.381-15.74-10.11 10.11c-.384.255-.384.895 0 1.151.127.128.255.256.511.256l22.652 1.536-13.053-13.054ZM104.452 146.557c-.768 0-1.28-.64-1.28-1.28 0-.384.128-.64.384-.896l12.414-12.414a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-20.477 4.352h-.256Zm12.414-11.902-8.446 8.446 13.821-2.943-5.375-5.503Z" fill="#FF6C37"></path><path d="m124.8 140.926-14.077 3.071c-1.024.256-2.048-.384-2.303-1.408-.128-.64 0-1.28.511-1.791l7.807-7.807 8.063 7.935Z" fill="#FFF"></path><path d="M110.467 145.277a3.168 3.168 0 0 1-3.2-3.2c0-.895.385-1.663.897-2.303l7.806-7.807a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-14.078 3.072h-.64Zm6.399-10.622-6.91 6.91c-.257.257-.257.512-.129.768s.384.384.768.384l11.774-2.56-5.503-5.502ZM203.25 64.907c-.256-.767-1.151-1.151-1.92-.895-.767.255-1.151 1.151-.895 1.92 0 .127.128.255.128.383.768 1.536.512 3.455-.512 4.863-.512.64-.384 1.536.128 2.048.64.512 1.536.384 2.048-.256 1.92-2.432 2.303-5.503 1.023-8.063Z" fill="#FF6C37"></path></svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Postman.astro", void 0);

const $$Astro$g = createAstro();
const $$Swagger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Swagger;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M128 250a122 122 0 1 1 0-244 122 122 0 0 1 0 244Z" fill="#85EA2D"></path> <path d="M128 12a116 116 0 1 1 0 232 116 116 0 0 1 0-232m0-12a128 128 0 1 0 0 256 128 128 0 0 0 0-256Z" fill="#173647"></path> <path d="m81 87-1 13-1 13c-2 6-5 11-11 15 11 7 12 17 13 28v17c1 5 2 6 7 6h6v14c-14 2-25-2-27-13l-2-13v-14c-1-12-3-17-15-17v-16h3c6-1 9-3 11-9l1-11 1-22c2-10 8-15 19-15h9v14h-4c-8 0-9 3-9 10Zm16 32a9 9 0 0 0-1 18c5 0 10-3 10-8v-1c0-5-4-9-9-9Zm31 0a9 9 0 0 0-9 9c0 6 4 9 9 9 6 0 9-4 9-9s-4-9-9-9Zm31 0a9 9 0 0 0 0 18c5 1 9-4 10-9 0-5-5-9-10-9Zm44 1c-6-1-9-2-10-8l-2-10-1-20c-1-16-12-21-28-19v14h6c4 0 6 1 7 5v11l3 21c1 6 5 11 10 14-9 6-11 14-12 24l-1 19c0 6-2 8-8 8h-5v14h10c10 0 16-5 18-15l1-16 1-15c1-7 4-10 12-11h2v-16h-3Z" fill="#173647"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Swagger.astro", void 0);

const $$Astro$f = createAstro();
const $$Vite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Vite;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 257" width="256" height="257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-.828%" y1="7.652%" x2="57.636%" y2="78.411%" id="a"><stop stop-color="#41D1FF" offset="0%"></stop><stop stop-color="#BD34FE" offset="100%"></stop></linearGradient><linearGradient x1="43.376%" y1="2.242%" x2="50.316%" y2="89.03%" id="b"><stop stop-color="#FFEA83" offset="0%"></stop><stop stop-color="#FFDD35" offset="8.333%"></stop><stop stop-color="#FFA800" offset="100%"></stop></linearGradient></defs><path d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z" fill="url(#a)"></path><path d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z" fill="url(#b)"></path></svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Vite.astro", void 0);

const $$Astro$e = createAstro();
const $$VSCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$VSCode;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 254" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256" height="254" preserveAspectRatio="xMidYMid"><defs><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><path id="a" d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649-76.262 57.889 76.262 57.888V68.956Z"></path></defs><mask id="b" fill="#fff"><use xlink:href="#a"></use></mask><path fill="#0065A9" d="M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z" mask="url(#b)"></path><path fill="#007ACC" d="m246.135 226.816-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z" mask="url(#b)"></path><path fill="#1F9CF0" d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z" mask="url(#b)"></path><path fill="url(#c)" fill-opacity=".25" d="M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65-76.262 57.89 76.262 57.888V68.956Z" mask="url(#b)"></path></svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/VSCode.astro", void 0);

const $$Astro$d = createAstro();
const $$Wordpress = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Wordpress;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 122.52 122.523" width="512" height="512" xmlns="http://www.w3.org/2000/svg"><g fill="#21759b"><path d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z"></path><path d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z"></path><path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z"></path><path d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z"></path><path d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z"></path></g></svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Wordpress.astro", void 0);

const $$Astro$c = createAstro();
const $$Tools = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Tools;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "TitleComponent", $$TitleComponent, { "title": i18n?.BENTO_TITLES.TOOLS })} ${maybeRenderHead()}<div class="grid grid-cols-2"> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "Docker", $$Docker, { "class": "size-5" })} <p class="text-xs">Docker</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "Figma", $$Figma, { "class": "size-5" })} <p class="text-xs">Figma</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "Git", $$Git, { "class": "size-5" })} <p class="text-xs">Git</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "JetBrains", $$JetBrains, { "class": "size-5" })} <p class="text-xs">JetBrains</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "MongoDB", $$MongoDB, { "class": "size-5" })} <p class="text-xs">MongoDB</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "MySQL", $$MySQL, { "class": "size-5" })} <p class="text-xs">MySQL</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "Node", $$Node, { "class": "size-5" })} <p class="text-xs">Node</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "Postman", $$Postman, { "class": "size-5" })} <p class="text-xs">Postman</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "Swagger", $$Swagger, { "class": "size-5" })} <p class="text-xs">Swagger</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "Vite", $$Vite, { "class": "size-5" })} <p class="text-xs">Vite</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "VSCode", $$VSCode, { "class": "size-5" })} <p class="text-xs">Vscode</p> </div> <div class="flex items-center gap-2 py-1"> ${renderComponent($$result, "Wordpress", $$Wordpress, { "class": "size-5" })} <p class="text-xs">Wordpress</p> </div> </div>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Tools.astro", void 0);

const $$Astro$b = createAstro();
const $$Idiomas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Idiomas;
  const { currentLocale } = Astro2;
  const LANGUAGES_ENG = { 1: "English", 2: "Spanish", 3: "Catalan" };
  const LANGUAGES_ESP = { 1: "Ingl\xE9s", 2: "Espa\xF1ol", 3: "Catal\xE1n" };
  const LANGUAGES_CAT = { 1: "Angl\xE8s", 2: "Castell\xE0", 3: "Catal\xE0" };
  let languages;
  if (currentLocale === "en")
    languages = LANGUAGES_ENG;
  if (currentLocale === "es")
    languages = LANGUAGES_ESP;
  if (currentLocale === "ca")
    languages = LANGUAGES_CAT;
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full h-full text-center"> <section class="w-1/3 flex flex-col items-center"> <p class="text-xl">B2</p> <p class="text-xs font-thin">${languages?.[1]}</p> </section> <section class="w-1/3 flex flex-col"> <p class="text-xl">NV</p> <p class="text-xs font-thin">${languages?.[2]}</p> </section> <section class="w-1/3 flex flex-col"> <p class="text-xl">NV</p> <p class="text-xs font-thin">${languages?.[3]}</p> </section> </div>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Idiomas.astro", void 0);

const $$Astro$a = createAstro();
const $$ExternalLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path> <path d="M11 13l9 -9"></path> <path d="M15 4h5v5"></path> </svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/ExternalLink.astro", void 0);

const $$Astro$9 = createAstro();
const $$Webs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Webs;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const WEBS = i18n?.WEBS;
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const keys = Object.keys(WEBS);
  const values = Object.values(WEBS);
  const numeroRandom = getRandomInt(0, keys.length);
  const appName = values[numeroRandom];
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="ml-2"> <p class="font-semibold">${appName.name}</p> <p class="text-xs font-light italic"> ${appName.description} </p> </div> <a${addAttribute(appName.website, "href")} target="_blank" title="Tool for developers website"> ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "class": "absolute right-0 mr-4 size-5 hover:text-yellow-300" })} </a> </div>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Webs.astro", void 0);

const $$Astro$8 = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill="#353536" fill-rule="nonzero" d="M256 0c70.689 0 134.692 28.656 181.02 74.98C483.344 121.308 512 185.311 512 256c0 70.689-28.656 134.692-74.98 181.016C390.692 483.344 326.689 512 256 512c-70.689 0-134.692-28.656-181.016-74.984C28.656 390.692 0 326.689 0 256S28.656 121.308 74.984 74.98C121.308 28.656 185.311 0 256 0z"></path><circle fill="#414143" cx="256" cy="256" r="241.831"></circle><path fill="#353536" fill-rule="nonzero" d="M252.33 144.551c5.039-12.2 17.404-20.536 30.609-20.536 18.611 0 32.717 15.259 32.717 33.478 0 4.53-.796 8.776-2.407 12.704-6.902 16.91-26.089 25.405-43.082 18.301-16.87-7.121-24.821-27.095-17.837-43.947zm12.103 206.605c-.833 2.983-2.256 7.946-.674 10.725 4.22 7.45 16.459-6.058 19.036-8.97 8.307-9.414 15.461-20.475 21.905-31.229a1.507 1.507 0 012.062-.523l13.439 9.972c.642.473.789 1.363.368 2.029-6.181 10.744-12.427 20.125-18.745 28.13-10.451 13.234-23.595 25.852-39.582 32.065-9.919 3.842-22.817 5.363-34.145 2.829-10.505-2.353-19.66-8.206-23.822-18.946-5.464-14.092-.969-30.105 3.33-43.887l21.689-65.697c2.962-10.647 10.044-29.662-8.25-29.662h-18.96c-1.561 0-1.597-1.401-1.298-2.483l4.858-17.685a1.5 1.5 0 011.464-1.103l96.89-3.038c1.409-.05 1.7 1.19 1.373 2.285l-40.938 135.188z"></path><path fill="#fff" fill-rule="nonzero" d="M242.884 135.105c5.039-12.2 17.404-20.536 30.609-20.536 18.611 0 32.717 15.259 32.717 33.478 0 4.53-.796 8.776-2.407 12.704-6.902 16.91-26.09 25.405-43.082 18.301-16.871-7.121-24.821-27.095-17.837-43.947zm12.103 206.604c-.833 2.984-2.256 7.947-.674 10.726 4.22 7.449 16.459-6.059 19.036-8.97 8.307-9.414 15.461-20.475 21.905-31.229a1.505 1.505 0 012.061-.523l13.44 9.972c.641.473.789 1.363.367 2.029-6.18 10.744-12.426 20.125-18.744 28.13-10.452 13.234-23.595 25.851-39.583 32.065-9.918 3.842-22.817 5.363-34.144 2.829-10.505-2.353-19.66-8.206-23.822-18.946-5.464-14.092-.97-30.105 3.33-43.887l21.689-65.697c2.962-10.647 10.044-29.662-8.25-29.662h-18.961c-1.56 0-1.596-1.402-1.297-2.483l4.858-17.685a1.5 1.5 0 011.464-1.103l96.89-3.038c1.409-.05 1.7 1.19 1.373 2.285l-40.938 135.187z"></path></svg>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/Info.astro", void 0);

const $$Astro$7 = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const language = Astro2.currentLocale;
  let path;
  if (language === "en")
    path = "/en/portfolio";
  if (language === "es")
    path = "/es/portfolio";
  if (language === "ca")
    path = "/ca/portfoli";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(path, "href")} class="flex w-full h-full items-center justify-center gap-3 hover:bg-indigo-600/10 duration-300 hover:rounded-[10px]"> ${renderComponent($$result, "Info", $$Info, { "class": "size-8" })}
Info portfolio
</a>`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/Portfolio.astro", void 0);

const $$Astro$6 = createAstro();
const $$HighlightText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HighlightText;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" preserveAspectRatio="none"${addAttribute(Astro2.props.color, "stroke")} data-astro-cid-dpox3xqh><path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" data-astro-cid-dpox3xqh></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" preserveAspectRatio="none"${addAttribute(Astro2.props.color, "stroke")} data-astro-cid-dpox3xqh><path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" data-astro-cid-dpox3xqh></path></svg> `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/icons/HighlightText.astro", void 0);

const $$Astro$5 = createAstro();
const $$SloganText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SloganText;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<p data-astro-cid-tqzx4zrq> ${i18n?.SLOGAN.text1} -
<mark class="relative inline-block font-bold mx-1" data-astro-cid-tqzx4zrq> <span class="relative z-10 inline-block" data-astro-cid-tqzx4zrq> ${i18n?.SLOGAN.text2} </span> ${renderComponent($$result, "HighlightText", $$HighlightText, { "color": "#FFBB64", "data-astro-cid-tqzx4zrq": true })} </mark>.
</p> <p data-astro-cid-tqzx4zrq> <mark class="relative inline-block font-bold" data-astro-cid-tqzx4zrq> <span class="relative z-10 inline-block" data-astro-cid-tqzx4zrq> ${i18n?.SLOGAN.text3} </span> ${renderComponent($$result, "HighlightText", $$HighlightText, { "color": "#DCFFB7", "data-astro-cid-tqzx4zrq": true })} </mark>
, ${i18n?.SLOGAN.text4}.
</p> `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/bentos/SloganText.astro", void 0);

const $$Astro$4 = createAstro();
const $$App3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$App3;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n?.SEO_TITLE_HOMEPAGE, "description": i18n?.SEO_DESCRIPTION_HOMEPAGE, "data-astro-cid-es65zj42": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main" class="lg:h-screen w-screen flex items-center justify-center bg-[#f0f0f0] dark:bg-black" data-astro-cid-es65zj42> <div id="cards" class="grid grid-cols-3 min-h-screen md:grid-cols-10 md:grid-rows-7 gap-4 p-4 w-full md:h-full" data-astro-cid-es65zj42> <section class="card rounded-[10px] flex relative text-[#626366] dark:text-white bg-zinc-800 hover:bg-neutral-600 hover:duration-500
					col-span-1
					md:col-span-2 md:row-span-2" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "PhotoComponent", $$Photo, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-neutral-600 hover:duration-500
                    col-span-2
					md:col-span-5 md:col-start-3" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5 flex flex-col md:flex-row justify-between" data-astro-cid-es65zj42> ${renderComponent($$result2, "NameComponent", $$Name, { "data-astro-cid-es65zj42": true })} ${renderComponent($$result2, "SocialMediaButtons", $$SocialMediaButtons, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-lime-800
                    col-span-1
					md:col-start-8" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px]" data-astro-cid-es65zj42> ${renderComponent($$result2, "OpenToWorkComponent", $$OpenToWork, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800
					col-span-1
					md:col-start-9" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "LanguageSelector", $$LanguageSelector, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-[#A87C7C] hover:duration-500
					col-span-1
					md:col-start-10" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "ThemeSelector", $$ThemeSelector, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-lime-950 hover:duration-500
					col-span-3
					md:col-span-3 md:col-start-3 md:row-start-2" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute text-center z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "SloganText", $$SloganText, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-sky-800 hover:duration-500
					col-span-3
					md:col-span-3 md:col-start-6 md:row-start-2" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "Frameworks", $$Frameworks, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-indigo-900 hover:duration-500
					col-span-3
					md:col-span-3 md:row-span-4 md:col-start-1 md:row-start-3" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-emerald-900 hover:duration-500
					col-span-3
					md:col-span-3 md:col-start-1 md:row-start-7" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "Slogan", $$Slogan, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-[#3D0000]
                    col-span-3
					md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-3" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "Challenges", $$Challenges, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-amber-800 hover:duration-500
					col-span-3
					md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-6" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "Cursos", $$Cursos, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-[#111D5E] hover:duration-500
					col-span-3
					md:col-span-2 md:row-span-2 md:col-start-7 md:row-start-3" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "Studies", $$Studies, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-[#A27B5C] hover:duration-500
					col-span-3
					md:col-span-2 md:row-span-3 md:col-start-7 md:row-start-5" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "Jobs", $$Jobs, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-rose-400 hover:duration-500
					col-span-3
					md:col-span-2 md:row-span-3 md:col-start-9 md:row-start-2" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "Tools", $$Tools, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-teal-600 hover:duration-500
					col-span-3
					md:col-span-2 md:row-span-1 md:col-start-9 md:row-start-5" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "Idiomas", $$Idiomas, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-zinc-800 hover:bg-yellow-300 hover:duration-500
					col-span-2
					md:col-span-2 md:row-span-1 md:col-start-9 md:row-start-6" data-astro-cid-es65zj42> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px] p-2.5" data-astro-cid-es65zj42> ${renderComponent($$result2, "Webs", $$Webs, { "data-astro-cid-es65zj42": true })} </div> </section> <section class="card rounded-[10px] flex relative dark:text-white bg-indigo-800
                    col-span-1
                    md:col-span-2 md:row-span-1 md:col-start-9 md:row-start-7" data-astro-cid-es65zj42${addAttribute(renderTransition($$result2, "2e4kgicx", "", "hero"), "data-astro-transition-scope")}> <div class="card-border" data-astro-cid-es65zj42></div> <div class="card-content w-full md:w-auto md:absolute z-20 bg-[#d1d5db] dark:bg-[#171717] inset-[1px] rounded-[10px]" data-astro-cid-es65zj42> ${renderComponent($$result2, "Portfolio", $$Portfolio, { "data-astro-cid-es65zj42": true })} </div> </section> </div> </main> ` })}  `;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/components/App3.astro", "self");

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "App3", $$App3, {})}`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/en/index.astro", void 0);

const $$file$3 = "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/en/index.astro";
const $$url$3 = "/en";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "En", $$Index$3, {})}`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "App3", $$App3, {})}`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/ca/index.astro", void 0);

const $$file$1 = "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/ca/index.astro";
const $$url$1 = "/ca";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "App3", $$App3, {})}`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/es/index.astro", void 0);

const $$file = "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/es/index.astro";
const $$url = "/es";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, $$Astroo as a, $$GitHub as b, index$2 as c, index$1 as d, index as e, getI18N as g, index$3 as i };
