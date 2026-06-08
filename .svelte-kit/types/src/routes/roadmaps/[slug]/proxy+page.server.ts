// @ts-nocheck
import { error } from '@sveltejs/kit';
import { getRoadmap, getRoadmaps } from '$lib/content/roadmaps';
import { getNodosByRoadmap } from '$lib/content/nodos';
import type { PageServerLoad } from './$types';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const { slug } = params;

	const roadmap = await getRoadmap(slug);
	if (!roadmap) throw error(404, `Roadmap "${slug}" no encontrado`);

	const todos = await getRoadmaps();
	const relacionados = todos.filter((r) => r.slug !== slug && r.publicado).slice(0, 3);
	const nodosRoadmap = await getNodosByRoadmap(slug);

	return {
		roadmap,
		relacionados,
		nodosRoadmap
	};
};
