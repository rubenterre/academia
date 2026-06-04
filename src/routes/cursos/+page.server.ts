// src/routes/cursos/+page.server.ts
import { getCursos } from '$lib/content/cursos';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const cursos = await getCursos();
	return { cursos };
};
