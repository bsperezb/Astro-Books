import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BRPlOEDL.mjs';
import { manifest } from './manifest_CYSjhciA.mjs';
import { createExports } from '@astrojs/vercel/serverless/entrypoint';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BYhXFMi3.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_BiZtEmsz.mjs')],
]);;

const _page0 = () => import('./pages/libros/_id_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/libros/[id].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5da87691-9a40-491f-a015-109da10cf7ba",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
