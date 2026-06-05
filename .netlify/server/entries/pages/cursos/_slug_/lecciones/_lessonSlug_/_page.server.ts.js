import { t as getCursos } from "../../../../../../chunks/cursos.js";
import { n as _01_que_es_sveltekit_exports, t as _02_crear_el_primer_proyecto_exports } from "../../../../../../chunks/02-crear-el-primer-proyecto.js";
import { error } from "@sveltejs/kit";
//#region src/routes/cursos/[slug]/lecciones/[lessonSlug]/+page.server.ts
var load = async ({ params }) => {
	const { slug, lessonSlug } = params;
	const curso = (await getCursos()).find((c) => c.slug === slug);
	if (!curso) throw error(404, `Curso "${slug}" no encontrado`);
	const indiceLecciones = Object.values(/* @__PURE__ */ Object.assign({
		"/src/content/lecciones/sveltekit-para-principiantes/01-que-es-sveltekit.md": _01_que_es_sveltekit_exports,
		"/src/content/lecciones/sveltekit-para-principiantes/02-crear-el-primer-proyecto.md": _02_crear_el_primer_proyecto_exports
	})).filter((mod) => mod.metadata?.curso === slug && Boolean(mod.metadata?.publicado ?? false)).map((mod) => ({
		titulo: String(mod.metadata?.titulo ?? ""),
		slug: String(mod.metadata?.slug ?? ""),
		curso: String(mod.metadata?.curso ?? ""),
		orden: Number(mod.metadata?.orden ?? 0),
		duracion: mod.metadata?.duracion ? String(mod.metadata.duracion) : void 0,
		video_youtube: mod.metadata?.video_youtube ? String(mod.metadata.video_youtube) : void 0,
		publicado: Boolean(mod.metadata?.publicado ?? false)
	})).sort((a, b) => a.orden - b.orden);
	const indiceActual = indiceLecciones.findIndex((l) => l.slug === lessonSlug);
	if (indiceActual === -1) throw error(404, `Lección "${lessonSlug}" no encontrada`);
	return {
		curso,
		leccion: indiceLecciones[indiceActual],
		indiceLecciones,
		leccionAnterior: indiceActual > 0 ? indiceLecciones[indiceActual - 1] : null,
		leccionSiguiente: indiceActual < indiceLecciones.length - 1 ? indiceLecciones[indiceActual + 1] : null
	};
};
//#endregion
export { load };
