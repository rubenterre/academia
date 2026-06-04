// src/routes/cursos/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import { getCursos } from '$lib/content/cursos';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// Cargamos el módulo .md correspondiente al slug
	const archivos = import.meta.glob<{
		default: unknown;
		metadata: Record<string, unknown>;
	}>('/src/content/cursos/*.md', { eager: true });

	// Buscamos el archivo cuyo frontmatter.slug coincida
	const entrada = Object.values(archivos).find(
		(mod) => (mod.metadata?.slug as string) === slug
	);

	if (!entrada) {
		error(404, `Curso "${slug}" no encontrado`);
	}

	const meta = entrada.metadata as Record<string, unknown>;

	// Recuperamos también los otros cursos publicados para la sección "Más cursos"
	const todos = await getCursos();
	const relacionados = todos
		.filter((c) => c.slug !== slug && c.publicado)
		.slice(0, 3);

	return {
		curso: {
			titulo:     String(meta.titulo     ?? ''),
			slug:       String(meta.slug       ?? ''),
			descripcion:String(meta.descripcion?? ''),
			nivel:      String(meta.nivel      ?? 'principiante'),
			duracion:   String(meta.duracion   ?? ''),
			lecciones:  Number(meta.lecciones  ?? 0),
			categoria:  String(meta.categoria  ?? 'Curso'),
			imagen:     meta.imagen ? String(meta.imagen) : undefined,
			fecha:      String(meta.fecha      ?? ''),
			publicado:  Boolean(meta.publicado ?? false),
			destacado:  Boolean(meta.destacado ?? false),
		},
		contenido: entrada.default, // componente Svelte renderizado por mdsvex
		relacionados,
	};
};
