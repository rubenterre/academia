import { getRoadmapsDestacados } from '$lib/content/roadmaps';
import { getCursos } from '$lib/content/cursos';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const roadmapsDestacados = await getRoadmapsDestacados(6);
	const todosLosCursos = await getCursos();
	const ultimosCursos = todosLosCursos.slice(0, 3);
	return { roadmapsDestacados, ultimosCursos };
};
