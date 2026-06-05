import { n as javascript_esencial_exports, r as css_moderno_desde_cero_exports, t as sveltekit_para_principiantes_exports } from "../../../../chunks/sveltekit-para-principiantes.js";
import { t as getCursos } from "../../../../chunks/cursos.js";
import { n as _01_que_es_sveltekit_exports, t as _02_crear_el_primer_proyecto_exports } from "../../../../chunks/02-crear-el-primer-proyecto.js";
import { error } from "@sveltejs/kit";
//#region src/lib/content/lecciones.ts
async function getLecciones() {
	return Object.entries(/* @__PURE__ */ Object.assign({
		"/src/content/lecciones/sveltekit-para-principiantes/01-que-es-sveltekit.md": _01_que_es_sveltekit_exports,
		"/src/content/lecciones/sveltekit-para-principiantes/02-crear-el-primer-proyecto.md": _02_crear_el_primer_proyecto_exports
	})).map(([, mod]) => {
		const m = mod.metadata;
		return {
			titulo: String(m.titulo ?? ""),
			slug: String(m.slug ?? ""),
			curso: String(m.curso ?? ""),
			orden: Number(m.orden ?? 0),
			duracion: m.duracion ? String(m.duracion) : void 0,
			video_youtube: m.video_youtube ? String(m.video_youtube) : void 0,
			publicado: Boolean(m.publicado ?? false)
		};
	}).filter((l) => l.publicado).sort((a, b) => {
		if (a.curso === b.curso) return a.orden - b.orden;
		return a.curso.localeCompare(b.curso);
	});
}
/**
* Devuelve todas las lecciones publicadas de un curso, ordenadas por orden ascendente.
*/
async function getLeccionesByCurso(cursoSlug) {
	return (await getLecciones()).filter((l) => l.curso === cursoSlug).sort((a, b) => a.orden - b.orden);
}
//#endregion
//#region src/routes/cursos/[slug]/+page.server.ts
var load = async ({ params }) => {
	const { slug } = params;
	const entrada = Object.values(/* @__PURE__ */ Object.assign({
		"/src/content/cursos/css-moderno-desde-cero.md": css_moderno_desde_cero_exports,
		"/src/content/cursos/javascript-esencial.md": javascript_esencial_exports,
		"/src/content/cursos/sveltekit-para-principiantes.md": sveltekit_para_principiantes_exports
	})).find((mod) => mod.metadata?.slug === slug);
	if (!entrada) error(404, `Curso "${slug}" no encontrado`);
	const meta = entrada.metadata;
	const relacionados = (await getCursos()).filter((c) => c.slug !== slug && c.publicado).slice(0, 3);
	const leccionesCurso = await getLeccionesByCurso(slug);
	return {
		curso: {
			titulo: String(meta.titulo ?? ""),
			slug: String(meta.slug ?? ""),
			descripcion: String(meta.descripcion ?? ""),
			nivel: String(meta.nivel ?? "principiante"),
			duracion: String(meta.duracion ?? ""),
			lecciones: Number(meta.lecciones ?? 0),
			categoria: String(meta.categoria ?? "Curso"),
			imagen: meta.imagen ? String(meta.imagen) : void 0,
			fecha: String(meta.fecha ?? ""),
			publicado: Boolean(meta.publicado ?? false),
			destacado: Boolean(meta.destacado ?? false)
		},
		relacionados,
		leccionesCurso
	};
};
//#endregion
export { load };
