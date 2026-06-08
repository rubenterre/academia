import { getRoadmaps } from '$lib/content/roadmaps';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const roadmaps = await getRoadmaps();
	return { roadmaps };
};
