// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = async ({ params, data }: Parameters<PageLoad>[0]) => {
	const { slug } = params;

	const archivos = import.meta.glob<{
		default: unknown;
		metadata: Record<string, unknown>;
	}>('/src/content/roadmaps/*.md', { eager: true });

	const entrada = Object.values(archivos).find(
		(mod) => (mod.metadata?.slug as string) === slug
	);

	if (!entrada) throw error(404, `Roadmap "${slug}" no encontrado`);

	return {
		...data,
		contenido: entrada.default
	};
};
