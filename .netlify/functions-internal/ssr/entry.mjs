import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_LdLCLixy.mjs';

const _page0  = () => import('./chunks/generic_BFI5d0_u.mjs');
const _page1  = () => import('./chunks/index_-pdeAaXk.mjs');
const _page2  = () => import('./chunks/index_4nNkGtts.mjs');
const _page3  = () => import('./chunks/portfoli_R9LhqFlJ.mjs');
const _page4  = () => import('./chunks/index_pXWclDcX.mjs');
const _page5  = () => import('./chunks/portfolio_neLxCVnq.mjs');
const _page6  = () => import('./chunks/index_T-YJIojg.mjs');
const _page7  = () => import('./chunks/portfolio_XZqVr02E.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/ca/index.astro", _page2],["src/pages/ca/portfoli.astro", _page3],["src/pages/en/index.astro", _page4],["src/pages/en/portfolio.astro", _page5],["src/pages/es/index.astro", _page6],["src/pages/es/portfolio.astro", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
