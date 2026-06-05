import { n as javascript_esencial_exports, r as css_moderno_desde_cero_exports, t as sveltekit_para_principiantes_exports } from "./sveltekit-para-principiantes.js";
//#region src/lib/content/cursos.ts
async function getCursos() {
	return Object.entries(/* @__PURE__ */ Object.assign({
		"/src/content/cursos/css-moderno-desde-cero.md": css_moderno_desde_cero_exports,
		"/src/content/cursos/javascript-esencial.md": javascript_esencial_exports,
		"/src/content/cursos/sveltekit-para-principiantes.md": sveltekit_para_principiantes_exports
	})).map(([, mod]) => {
		const m = mod.metadata;
		return {
			titulo: m.titulo ?? "",
			slug: m.slug ?? "",
			descripcion: m.descripcion ?? "",
			nivel: m.nivel ?? "principiante",
			duracion: m.duracion,
			lecciones: m.lecciones,
			categoria: m.categoria ?? "Curso",
			imagen: m.imagen,
			fecha: String(m.fecha ?? ""),
			publicado: m.publicado ?? false,
			destacado: m.destacado ?? false
		};
	}).filter((c) => c.publicado).sort((a, b) => a.fecha < b.fecha ? 1 : -1);
}
/**
* Devuelve solo los cursos marcados como destacados (máx. 6).
*/
async function getCursosDestacados(max = 6) {
	return (await getCursos()).filter((c) => c.destacado).slice(0, max);
}
//#endregion
export { getCursosDestacados as n, getCursos as t };
