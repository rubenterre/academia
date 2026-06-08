// @ts-nocheck
import { getRoadmapsDestacados } from '$lib/content/roadmaps';
import type { PageServerLoad } from './$types';

export const load = async () => {
	const roadmapsDestacados = await getRoadmapsDestacados(6);
	return { roadmapsDestacados };
};
;null as any as PageServerLoad;