import { n as javascript_esencial_exports, r as css_moderno_desde_cero_exports, t as sveltekit_para_principiantes_exports } from "../../../../chunks/sveltekit-para-principiantes.js";
import { error } from "@sveltejs/kit";
//#region src/routes/cursos/[slug]/+page.ts
var load = async ({ params, data }) => {
	const { slug } = params;
	const entrada = Object.values(/* @__PURE__ */ Object.assign({
		"/src/content/cursos/css-moderno-desde-cero.md": css_moderno_desde_cero_exports,
		"/src/content/cursos/javascript-esencial.md": javascript_esencial_exports,
		"/src/content/cursos/sveltekit-para-principiantes.md": sveltekit_para_principiantes_exports
	})).find((mod) => mod.metadata?.slug === slug);
	if (!entrada) throw error(404, `Curso "${slug}" no encontrado`);
	return {
		...data,
		contenido: entrada.default
	};
};
//#endregion
export { load };
