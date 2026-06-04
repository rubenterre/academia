// @ts-nocheck
// src/routes/cursos/+page.server.ts
import { getCursos } from '$lib/content/cursos';
import type { PageServerLoad } from './$types';

export const load = async () => {
	const cursos = await getCursos();
	return { cursos };
};
;null as any as PageServerLoad;