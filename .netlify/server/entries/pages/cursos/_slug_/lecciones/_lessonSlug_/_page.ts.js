import { n as _01_que_es_sveltekit_exports, t as _02_crear_el_primer_proyecto_exports } from "../../../../../../chunks/02-crear-el-primer-proyecto.js";
import { error } from "@sveltejs/kit";
//#region src/routes/cursos/[slug]/lecciones/[lessonSlug]/+page.ts
var load = async ({ params, data }) => {
	const { slug, lessonSlug } = params;
	const entrada = Object.values(/* @__PURE__ */ Object.assign({
		"/src/content/lecciones/sveltekit-para-principiantes/01-que-es-sveltekit.md": _01_que_es_sveltekit_exports,
		"/src/content/lecciones/sveltekit-para-principiantes/02-crear-el-primer-proyecto.md": _02_crear_el_primer_proyecto_exports
	})).find((mod) => mod.metadata?.curso === slug && mod.metadata?.slug === lessonSlug);
	if (!entrada) throw error(404, `Contenido no encontrado para "${lessonSlug}"`);
	return {
		...data,
		contenido: entrada.default
	};
};
//#endregion
export { load };
