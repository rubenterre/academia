import { getCursosDestacados } from '$lib/content/cursos';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const cursosDestacados = await getCursosDestacados(6);
	return { cursosDestacados };
};
