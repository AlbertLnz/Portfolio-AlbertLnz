/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent } from '../astro_JIMBsXrI.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$PortfolioComponent } from './portfoli_ScodFq6n.mjs';

const $$Astro$1 = createAstro();
const $$Portfolio$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Portfolio$1;
  return renderTemplate`${renderComponent($$result, "PortfolioComponent", $$PortfolioComponent, {})}`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/en/portfolio.astro", void 0);

const $$file$1 = "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/en/portfolio.astro";
const $$url$1 = "/en/portfolio";

const portfolio$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Portfolio$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate`${renderComponent($$result, "PortfolioComponent", $$PortfolioComponent, {})}`;
}, "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/es/portfolio.astro", void 0);

const $$file = "C:/Users/Albert/Desktop/Programacio/Programes utilitzats/0. Portfolio - Curriculum ALR/Portfolios/v3/portfolio-alr/src/pages/es/portfolio.astro";
const $$url = "/es/portfolio";

const portfolio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Portfolio,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { portfolio as a, portfolio$1 as p };
