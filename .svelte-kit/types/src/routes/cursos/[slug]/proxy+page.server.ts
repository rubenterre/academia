// @ts-nocheck
// src/routes/cursos/[slug]/+page.server.ts
// Solo datos serializables — el componente mdsvex lo carga +page.ts
import { error } from '@sveltejs/kit';
import { getCursos } from '$lib/content/cursos';
import { getLeccionesByCurso } from '$lib/content/lecciones';
import type { PageServerLoad } from './$types';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const { slug } = params;

	const archivos = import.meta.glob<{ metadata: Record<string, unknown> }>(
		'/src/content/cursos/*.md',
		{ eager: true }
	);

	const entrada = Object.values(archivos).find(
		(mod) => (mod.metadata?.slug as string) === slug
	);

	if (!entrada) error(404, `Curso "${slug}" no encontrado`);

	const meta = entrada!.metadata as Record<string, unknown>;

	const todos = await getCursos();
	const relacionados = todos
		.filter((c) => c.slug !== slug && c.publicado)
		.slice(0, 3);

	const leccionesCurso = await getLeccionesByCurso(slug);

	return {
		curso: {
			titulo:      String(meta.titulo      ?? ''),
			slug:        String(meta.slug        ?? ''),
			descripcion: String(meta.descripcion ?? ''),
			nivel:       String(meta.nivel       ?? 'principiante'),
			duracion:    String(meta.duracion    ?? ''),
			lecciones:   Number(meta.lecciones   ?? 0),
			categoria:   String(meta.categoria   ?? 'Curso'),
			imagen:      meta.imagen ? String(meta.imagen) : undefined,
			fecha:       String(meta.fecha       ?? ''),
			publicado:   Boolean(meta.publicado  ?? false),
			destacado:   Boolean(meta.destacado  ?? false),
		},
		relacionados,
		leccionesCurso,
	};
};
