import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, d as createAstro } from './astro/server_SstNA3e3.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const SPAIN = "ES";
  const country = Astro2.request.headers.get("X-Vercel-IP-Country") ?? "ES";
  const storeCountry = country == SPAIN ? "spain" : "usa";
  const countryName = country == SPAIN ? "Espana" : "Estados Unidas";
  const { buy } = Astro2.props;
  const url = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} title="Comprar Libro" target="_blank" rel="noopener noreferrer" class="w-full text-center bg-yellow-500 hover:bg-yellow-700
          text-white font-bold py-2 px-4 rounded-full active:border-white-300">
Comprar en ${countryName} </a>`;
}, "/Users/smkmacbookair/Documents/astroCurso/dev-books/src/components/BuyButton.astro", void 0);

const $$file = "/Users/smkmacbookair/Documents/astroCurso/dev-books/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };
