// @ts-nocheck
import { getRoadmaps } from '$lib/content/roadmaps';
import type { PageServerLoad } from './$types';

export const load = async () => {
	const roadmaps = await getRoadmaps();
	return { roadmaps };
};
;null as any as PageServerLoad;