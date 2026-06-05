// @ts-nocheck
// src/routes/cursos/[slug]/lecciones/[lessonSlug]/+page.ts
// Carga el componente mdsvex (no serializable, solo puede venir de un universal load)
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = async ({ params, data }: Parameters<PageLoad>[0]) => {
	const { slug, lessonSlug } = params;

	const archivos = import.meta.glob<{
		default: unknown;
		metadata: Record<string, unknown>;
	}>('/src/content/lecciones/*/*.md', { eager: true });

	const entrada = Object.values(archivos).find(
		(mod) =>
			(mod.metadata?.curso as string) === slug &&
			(mod.metadata?.slug as string) === lessonSlug
	);

	if (!entrada) throw error(404, `Contenido no encontrado para "${lessonSlug}"`);

	return {
		...data,
		contenido: entrada.default
	};
};
