// src/routes/cursos/[slug]/lecciones/[lessonSlug]/+page.server.ts
// Solo datos serializables — el componente mdsvex lo carga +page.ts
import { error } from '@sveltejs/kit';
import { getCursos } from '$lib/content/cursos';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug, lessonSlug } = params;

	// ── 1. Curso ──────────────────────────────────────────────────────────────
	const cursos = await getCursos();
	const curso = cursos.find((c) => c.slug === slug);
	if (!curso) throw error(404, `Curso "${slug}" no encontrado`);

	// ── 2. Glob único — solo metadatos, sin el componente default ─────────────
	const archivos = import.meta.glob<{ metadata: Record<string, unknown> }>(
		'/src/content/lecciones/*/*.md',
		{ eager: true }
	);

	const indiceLecciones = Object.values(archivos)
		.filter(
			(mod) =>
				(mod.metadata?.curso as string) === slug &&
				Boolean(mod.metadata?.publicado ?? false)
		)
		.map((mod) => ({
			titulo:        String(mod.metadata?.titulo ?? ''),
			slug:          String(mod.metadata?.slug ?? ''),
			curso:         String(mod.metadata?.curso ?? ''),
			orden:         Number(mod.metadata?.orden ?? 0),
			duracion:      mod.metadata?.duracion ? String(mod.metadata.duracion) : undefined,
			video_youtube: mod.metadata?.video_youtube ? String(mod.metadata.video_youtube) : undefined,
			publicado:     Boolean(mod.metadata?.publicado ?? false),
		}))
		.sort((a, b) => a.orden - b.orden);

	// ── 3. Lección actual ─────────────────────────────────────────────────────
	const indiceActual = indiceLecciones.findIndex((l) => l.slug === lessonSlug);
	if (indiceActual === -1) throw error(404, `Lección "${lessonSlug}" no encontrada`);

	const leccion = indiceLecciones[indiceActual];

	// ── 4. Navegación ─────────────────────────────────────────────────────────
	const leccionAnterior  = indiceActual > 0 ? indiceLecciones[indiceActual - 1] : null;
	const leccionSiguiente = indiceActual < indiceLecciones.length - 1
		? indiceLecciones[indiceActual + 1]
		: null;

	return {
		curso,
		leccion,
		indiceLecciones,
		leccionAnterior,
		leccionSiguiente,
	};
};
