import "../../chunks/internal.js";
import { H as escape_html, V as attr, a as ensure_array_like, c as store_get, d as html, n as attr_class, o as head, tt as getContext, u as unsubscribe_stores } from "../../chunks/dev.js";
import { t as BuyMeCoffee } from "../../chunks/BuyMeCoffee.js";
import "../../chunks/client.js";
//#region src/lib/assets/favicon.svg
var favicon_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3cpath%20d='M0%20512V0h512v512zm413.5-371.9h69.2l-.2-79.2c0-9.1-2.7-17.4-7.7-24.7-6.1-5.6-13.8-9.4-23-9.4H256.1V413l-16.5-.3c-9.5-.2-16.4-6.4-20.3-14.9l-40.8-87c-4.9-10.4-11.8-18.3-22.3-24.8%2033.7-11.5%2056.8-43.8%2066.2-76.9%2017.2-69.1-3.3-146.3-74-173.3-16.9-6.4-33.9-9-52.1-9.3H30.4V98l61.4.2c24.3%201.9%2043.3%2016.4%2050.7%2039.6%206.3%2020.6%206.2%2042.6-.2%2063.3-7.5%2023-26.8%2039.3-51.4%2039.7l-60.6.9v71.8l42.6.5c12.5.1%2021.6%207.2%2027.1%2018.3l58.2%20122.3c4.7%209.8%2011.1%2017.5%2020%2023.3%209.1%204.2%2018.5%206.4%2029.1%206.4h127.4V98h66.4c7.4%200%2012.3%205.7%2012.4%2012.9l.3%2029.1Z'%20style='fill:%23fff'/%3e%3cpath%20d='m413.5%20140.1-.3-29.1c0-7.1-5-12.8-12.4-12.8h-66.4v386.4H207c-10.6-.1-20-2.3-29.1-6.6-8.8-5.8-15.3-13.5-20-23.3L99.7%20332.4c-5.4-11.1-14.6-18.1-27.1-18.3l-42.6-.5v-71.8l60.6-.9c24.6-.4%2043.9-16.7%2051.4-39.7%206.4-20.7%206.5-42.7.2-63.3-7.3-23.2-26.4-37.7-50.7-39.6l-61.4-.2V26.5h65.8c18.1.3%2035.2%202.9%2052.1%209.3%2070.7%2027%2091.1%20104.2%2074%20173.3-9.4%2033.1-32.4%2065.4-66.2%2076.9%2010.6%206.5%2017.4%2014.4%2022.3%2024.8l40.8%2087c4%208.4%2010.8%2014.7%2020.3%2014.9l16.5.3V26.7h195.8c9.2%200%2016.9%203.9%2023%209.4%205%207.3%207.6%2015.6%207.7%2024.7l.2%2079.2h-69.2Z'/%3e%3c/svg%3e";
//#endregion
//#region src/lib/components/layouts/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const year = (/* @__PURE__ */ new Date()).getFullYear();
		const enlacesUtiles = [
			{
				label: "Inicio",
				href: "/"
			},
			{
				label: "Cursos",
				href: "/cursos"
			},
			{
				label: "El Proyecto",
				href: "/proyecto"
			},
			{
				label: "Contacto",
				href: "https://rubenterre.me"
			}
		];
		const enlacesLegales = [
			{
				label: "Aviso legal",
				href: "/aviso-legal"
			},
			{
				label: "Privacidad",
				href: "/privacidad"
			},
			{
				label: "Cookies",
				href: "/cookies"
			}
		];
		const redesSociales = [
			{
				label: "YouTube",
				href: "https://www.youtube.com/@rubenterre",
				icon: "yt"
			},
			{
				label: "GitHub",
				href: "https://github.com/rubenarturoterrelameiro",
				icon: "gh"
			},
			{
				label: "LinkedIn",
				href: "https://www.linkedin.com/in/rubenterrelameiro",
				icon: "li"
			}
		];
		$$renderer.push(`<footer class="footer"><div class="footer__body"><div class="footer__container"><div class="footer__grid"><div class="footer__brand"><a href="/" class="footer__logo" aria-label="Inicio"><span class="footer__logo-text">Academia</span></a> <p class="footer__tagline">Cursos prácticos de desarrollo web moderno. SvelteKit, CSS y JavaScript sin relleno.</p> <ul class="footer__social" aria-label="Redes sociales"><!--[-->`);
		const each_array = ensure_array_like(redesSociales);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let red = each_array[$$index];
			$$renderer.push(`<li><a${attr("href", red.href)} class="footer__social-link"${attr("aria-label", red.label)} target="_blank" rel="noopener noreferrer">`);
			if (red.icon === "yt") {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.6 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"></path></svg>`);
			} else if (red.icon === "gh") {
				$$renderer.push("<!--[1-->");
				$$renderer.push(`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"></path></svg>`);
			} else if (red.icon === "li") {
				$$renderer.push("<!--[2-->");
				$$renderer.push(`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></a></li>`);
		}
		$$renderer.push(`<!--]--></ul> <div class="footer__bmc">`);
		BuyMeCoffee($$renderer, { variante: "link" });
		$$renderer.push(`<!----></div></div> <nav class="footer__nav" aria-label="Secciones principales"><h3 class="footer__nav-title">Secciones</h3> <ul class="footer__nav-list"><!--[-->`);
		const each_array_1 = ensure_array_like(enlacesUtiles);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let enlace = each_array_1[$$index_1];
			$$renderer.push(`<li><a${attr("href", enlace.href)} class="footer__nav-link">${escape_html(enlace.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--></ul></nav> <nav class="footer__nav" aria-label="Información legal"><h3 class="footer__nav-title">Legal</h3> <ul class="footer__nav-list"><!--[-->`);
		const each_array_2 = ensure_array_like(enlacesLegales);
		for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
			let enlace = each_array_2[$$index_2];
			$$renderer.push(`<li><a${attr("href", enlace.href)} class="footer__nav-link">${escape_html(enlace.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--></ul></nav></div></div></div> <div class="footer__bar"><div class="footer__container"><div class="footer__bar-inner"><p class="footer__copy">© ${escape_html(year)} Academia — <a href="https://rubenterre.me" target="_blank" rel="noopener noreferrer" class="footer__copy-link">Rubén Terre</a></p> <ul class="footer__legal-links" aria-label="Páginas legales"><!--[-->`);
		const each_array_3 = ensure_array_like(enlacesLegales);
		for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
			let enlace = each_array_3[$$index_3];
			$$renderer.push(`<li><a${attr("href", enlace.href)} class="footer__nav-link">${escape_html(enlace.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--></ul></div></div></div></footer>`);
	});
}
//#endregion
//#region node_modules/@sveltejs/kit/src/runtime/app/stores.js
/**
* A function that returns all of the contextual stores. On the server, this must be called during component initialization.
* Only use this if you need to defer store subscription until after the component has mounted, for some reason.
*
* @deprecated Use `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
*/
var getStores = () => {
	const stores$1 = getContext("__svelte__");
	return {
		/** @type {typeof page} */
		page: { subscribe: stores$1.page.subscribe },
		/** @type {typeof navigating} */
		navigating: { subscribe: stores$1.navigating.subscribe },
		/** @type {typeof updated} */
		updated: stores$1.updated
	};
};
/**
* A readable store whose value contains page data.
*
* On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
*
* @deprecated Use `page` from `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
* @type {import('svelte/store').Readable<import('@sveltejs/kit').Page>}
*/
var page = { subscribe(fn) {
	return getStores().page.subscribe(fn);
} };
//#endregion
//#region src/lib/assets/icons/logo_rt.svg
var logo_rt_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%3e%3cdefs%3e%3cfilter%20id='a'%20width='106.2%25'%20height='106.2%25'%20x='-3.1%25'%20y='-2.2%25'%20filterUnits='objectBoundingBox'%3e%3cfeOffset%20dy='4'%20in='SourceAlpha'%20result='shadowOffsetOuter1'/%3e%3cfeGaussianBlur%20in='shadowOffsetOuter1'%20result='shadowBlurOuter1'%20stdDeviation='4'/%3e%3cfeColorMatrix%20in='shadowBlurOuter1'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3c/filter%3e%3ccircle%20id='b'%20cx='256'%20cy='256'%20r='227'/%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cuse%20xlink:href='%23b'%20fill='%23000'%20filter='url(%23a)'/%3e%3cuse%20xlink:href='%23b'%20fill='%23fff'/%3e%3cpath%20fill='%23000'%20d='m366.1%20186.5-.3-19.5c0-4.2-3.5-8-7.9-8h-43.1v251.7h-80.7l-10.9-1c-10.3-1.5-18.7-7.2-23.3-16.9l-39.1-81.5c-3.9-8.1-10.6-11.5-19.5-12l-26.2-.3v-46.9l39.7-.6c16.1-.2%2029.1-10.9%2033.8-26%204.1-14.2%204.2-28.7-.6-42.7-5.2-13.8-17.3-23.5-32.3-23.7l-40.6-.4v-46.8H159c9.8%200%2019.1%201.7%2028.4%204.2%2023.1%207.1%2041.3%2023.2%2050.2%2046%2016.5%2042.1%206.1%20100-39.1%20118.9%205.1%203.9%2010.1%208.1%2013%2014.1l27.9%2058.9c2.2%204.6%206.2%208.6%2011.4%208.8l12.1.5v-251h128.5c7.3%200%2013.3%203.7%2017.2%209.2%201.6%204.7%203.1%209.9%203.1%2014.9l.2%2050c-15.2.6-29.5.5-45.8.1'/%3e%3c/g%3e%3c/svg%3e";
//#endregion
//#region src/lib/components/layouts/Navbar.svelte
function Navbar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const navLinks = [
			{
				label: "Inicio",
				href: "/",
				externo: false
			},
			{
				label: "Cursos",
				href: "/cursos",
				externo: false
			},
			{
				label: "El proyecto",
				href: "/proyecto",
				externo: false
			},
			{
				label: "Contacto",
				href: "https://rubenterre.me",
				externo: true
			}
		];
		let mobileOpen = false;
		function isActive(href) {
			if (href === "/") return store_get($$store_subs ??= {}, "$page", page).url.pathname === "/";
			return store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith(href);
		}
		$$renderer.push(`<header class="nav svelte-10vw0je"><div class="nav__inner svelte-10vw0je"><a href="/" class="nav__logo svelte-10vw0je" aria-label="Academia — Inicio"><img${attr("src", logo_rt_default)} alt="Logo de Academia de Rubén Terré" width="34" height="34" class="nav__logo-img svelte-10vw0je"/> <span class="nav__logo-text svelte-10vw0je">Academia</span></a> <nav class="nav__center svelte-10vw0je" aria-label="Navegación principal"><ul class="nav__links svelte-10vw0je" role="list"><!--[-->`);
		const each_array = ensure_array_like(navLinks);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let link = each_array[$$index];
			$$renderer.push(`<li class="nav__item svelte-10vw0je"><a${attr("href", link.href)}${attr_class("nav__link svelte-10vw0je", void 0, { "is-active": isActive(link.href) })}${attr("aria-current", isActive(link.href) ? "page" : void 0)}${attr("target", link.externo ? "_blank" : void 0)}${attr("rel", link.externo ? "noopener noreferrer" : void 0)}>${escape_html(link.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--></ul></nav> <div class="nav__actions svelte-10vw0je"><a href="/cursos" class="btn btn--primary nav__cta svelte-10vw0je" aria-label="Ver todos los cursos">Ver cursos</a> <button class="btn btn--icon btn--ghost nav__toggle svelte-10vw0je"${attr("aria-expanded", mobileOpen)} aria-controls="nav-mobile"${attr("aria-label", "Abrir menú")}>`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" class="svelte-10vw0je"><path d="M4 6h16M4 12h16M4 18h16" class="svelte-10vw0je"></path></svg>`);
		$$renderer.push(`<!--]--></button></div></div> <div id="nav-mobile"${attr_class("nav__mobile svelte-10vw0je", void 0, { "is-open": mobileOpen })} role="navigation" aria-label="Menú móvil"><ul role="list" class="svelte-10vw0je"><!--[-->`);
		const each_array_1 = ensure_array_like(navLinks);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let link = each_array_1[$$index_1];
			$$renderer.push(`<li class="nav__mobile-item svelte-10vw0je"><a${attr("href", link.href)}${attr_class("nav__link svelte-10vw0je", void 0, { "is-active": isActive(link.href) })}${attr("aria-current", isActive(link.href) ? "page" : void 0)}${attr("target", link.externo ? "_blank" : void 0)}${attr("rel", link.externo ? "noopener noreferrer" : void 0)}>${escape_html(link.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--> <li class="nav__mobile-cta svelte-10vw0je"><a href="/cursos" class="btn btn--primary svelte-10vw0je">Ver cursos</a></li></ul></div></header>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	head("12qhfyh", $$renderer, ($$renderer) => {
		$$renderer.push(`<link rel="icon"${attr("href", favicon_default)}/>  ${html(`<script
		data-name="BMC-Widget"
		data-cfasync="false"
		src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
		data-id="rubenterre"
		data-description="Support me on Buy me a coffee!"
		data-message="¿Me invitas a un café?"
		data-color="#40DCA5"
		data-position="Right"
		data-x_margin="18"
		data-y_margin="18"
	><\/script>`)}`);
	});
	Navbar($$renderer, {});
	$$renderer.push(`<!----> `);
	children($$renderer);
	$$renderer.push(`<!----> `);
	Footer($$renderer, {});
	$$renderer.push(`<!---->`);
}
//#endregion
export { _layout as default };
