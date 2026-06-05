import { V as attr } from "./dev.js";
//#region src/lib/components/BuyMeCoffee.svelte
function BuyMeCoffee($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { variante = "default" } = $$props;
		const BMC_URL = "https://www.buymeacoffee.com/rubenterre";
		if (variante === "default") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div id="bmc-container" class="bmc bmc--default svelte-oiuhhq" aria-label="Apoya el proyecto"></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<a${attr("href", BMC_URL)} class="bmc bmc--link svelte-oiuhhq" target="_blank" rel="noopener noreferrer" aria-label="Apóyame en Buy Me a Coffee"><span class="bmc__icon svelte-oiuhhq" aria-hidden="true">☕</span> <span class="bmc__text">Invítame a un café</span></a>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { BuyMeCoffee as t };
