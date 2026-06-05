// src/routes/cursos/[slug]/lecciones/[lessonSlug]/+page.server.ts
import { error } from '@sveltejs/kit';
import { getCursos } from '$lib/content/cursos';
import { getLeccion, getLeccionesByCurso } from '$lib/content/lecciones';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug, lessonSlug } = params;

	const cursos = await getCursos();
	const curso = cursos.find((c) => c.slug === slug);

	if (!curso) {
		throw error(404, `Curso "${slug}" no encontrado`);
	}

	const leccion = await getLeccion(slug, lessonSlug);

	if (!leccion) {
		throw error(404, `Lección "${lessonSlug}" no encontrada en el curso "${slug}"`);
	}

	const indiceLecciones = await getLeccionesByCurso(slug);
	const indiceActual = indiceLecciones.findIndex((item) => item.slug === lessonSlug);

	const leccionAnterior = indiceActual > 0 ? indiceLecciones[indiceActual - 1] : null;
	const leccionSiguiente =
		indiceActual >= 0 && indiceActual < indiceLecciones.length - 1
			? indiceLecciones[indiceActual + 1]
			: null;

	const archivos = import.meta.glob<{
		default: unknown;
		metadata: Record<string, unknown>;
	}>('/src/content/lecciones/*/*.md', { eager: true });

	const entrada = Object.values(archivos).find(
		(mod) =>
			(mod.metadata?.curso as string) === slug &&
			(mod.metadata?.slug as string) === lessonSlug &&
			Boolean(mod.metadata?.publicado ?? false)
	);

	if (!entrada) {
		throw error(404, `Contenido no encontrado para la lección "${lessonSlug}"`);
	}

	return {
		curso,
		leccion,
		contenido: entrada.default,
		indiceLecciones,
		leccionAnterior,
		leccionSiguiente
	};
};
