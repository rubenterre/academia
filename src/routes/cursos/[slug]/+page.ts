// src/routes/cursos/[slug]/+page.ts
// Carga el componente mdsvex del curso (no serializable, universal load)
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, data }) => {
	const { slug } = params;

	const archivos = import.meta.glob<{
		default: unknown;
		metadata: Record<string, unknown>;
	}>('/src/content/cursos/*.md', { eager: true });

	const entrada = Object.values(archivos).find(
		(mod) => (mod.metadata?.slug as string) === slug
	);

	if (!entrada) throw error(404, `Curso "${slug}" no encontrado`);

	return {
		...data,
		contenido: entrada.default,
	};
};
