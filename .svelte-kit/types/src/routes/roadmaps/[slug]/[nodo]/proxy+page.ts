// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = async ({ params, data }: Parameters<PageLoad>[0]) => {
	const { slug, nodo } = params;

	const archivos = import.meta.glob<{
		default: unknown;
		metadata: Record<string, unknown>;
	}>('/src/content/nodos/*/*.md', { eager: true });

	const entrada = Object.values(archivos).find(
		(mod) =>
			(mod.metadata?.roadmap as string) === slug &&
			(mod.metadata?.slug as string) === nodo
	);

	if (!entrada) throw error(404, `Contenido no encontrado para "${nodo}"`);

	return {
		...data,
		contenido: entrada.default
	};
};
