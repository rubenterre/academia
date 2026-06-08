// src/lib/content/roadmaps.ts
// Lee todos los archivos .md de src/content/roadmaps y devuelve sus metadatos.
// Usar SOLO en +page.server.ts / +layout.server.ts (Node, no browser).

export type Roadmap = {
	titulo: string;
	slug: string;
	descripcion: string;
	nivel: 'principiante' | 'intermedio' | 'avanzado';
	duracion_estimada?: string;
	target_role?: string;
	imagen?: string;
	fecha: string;
	autor?: string;
	publicado: boolean;
	destacado: boolean;
	nodos?: string[];
};

/**
 * Devuelve todos los roadmaps publicados, ordenados por fecha descendente.
 * Importa los archivos .md vía import.meta.glob (Vite).
 */
export async function getRoadmaps(): Promise<Roadmap[]> {
	const archivos = import.meta.glob<{ metadata: Record<string, unknown> }>(
		'/src/content/roadmaps/*.md',
		{ eager: true }
	);

	const roadmaps: Roadmap[] = Object.entries(archivos)
		.map(([, mod]) => {
			const m = mod.metadata as Record<string, unknown>;
			return {
				titulo: String(m.titulo ?? ''),
				slug: String(m.slug ?? ''),
				descripcion: String(m.descripcion ?? ''),
				nivel: (m.nivel as Roadmap['nivel']) ?? 'principiante',
				duracion_estimada: m.duracion_estimada ? String(m.duracion_estimada) : undefined,
				target_role: m.target_role ? String(m.target_role) : undefined,
				imagen: m.imagen ? String(m.imagen) : undefined,
				fecha: String(m.fecha ?? ''),
				autor: m.autor ? String(m.autor) : undefined,
				publicado: Boolean(m.publicado ?? false),
				destacado: Boolean(m.destacado ?? false),
				nodos: Array.isArray(m.nodos) ? m.nodos.map(String) : undefined
			};
		})
		.filter((r) => r.publicado)
		.sort((a, b) => (a.fecha < b.fecha ? 1 : -1));

	return roadmaps;
}

/**
 * Devuelve solo los roadmaps marcados como destacados (máx. 6).
 */
export async function getRoadmapsDestacados(max = 6): Promise<Roadmap[]> {
	const todos = await getRoadmaps();
	return todos.filter((r) => r.destacado).slice(0, max);
}

/**
 * Devuelve un roadmap publicado concreto por slug.
 */
export async function getRoadmap(slug: string): Promise<Roadmap | undefined> {
	const roadmaps = await getRoadmaps();
	return roadmaps.find((r) => r.slug === slug);
}
