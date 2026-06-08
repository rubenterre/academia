import { error } from '@sveltejs/kit';
import { getRoadmap } from '$lib/content/roadmaps';
import { getNodosByRoadmap } from '$lib/content/nodos';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug, nodo } = params;

	const roadmap = await getRoadmap(slug);
	if (!roadmap) throw error(404, `Roadmap "${slug}" no encontrado`);

	const indiceNodos = await getNodosByRoadmap(slug);
	const indiceActual = indiceNodos.findIndex((item) => item.slug === nodo);
	if (indiceActual === -1) throw error(404, `Nodo "${nodo}" no encontrado`);

	const nodoActual = indiceNodos[indiceActual];
	const nodoAnterior = indiceActual > 0 ? indiceNodos[indiceActual - 1] : null;
	const nodoSiguiente = indiceActual < indiceNodos.length - 1 ? indiceNodos[indiceActual + 1] : null;

	return {
		roadmap,
		nodo: nodoActual,
		indiceNodos,
		nodoAnterior,
		nodoSiguiente
	};
};
