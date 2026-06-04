// @ts-nocheck
import { getCursosDestacados } from '$lib/content/cursos';
import type { PageServerLoad } from './$types';

export const load = async () => {
	const cursosDestacados = await getCursosDestacados(6);
	return { cursosDestacados };
};
;null as any as PageServerLoad;