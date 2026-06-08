import { getRoadmapsDestacados } from '$lib/content/roadmaps';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const roadmapsDestacados = await getRoadmapsDestacados(6);
	return { roadmapsDestacados };
};
