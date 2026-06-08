// src/lib/content/nodos.ts
// Lee todos los archivos .md de src/content/nodos y devuelve sus metadatos.
// Usar SOLO en +page.server.ts / +layout.server.ts (Node, no browser).

export type Nodo = {
	titulo: string;
	slug: string;
	roadmap: string;
	orden: number;
	duracion?: string;
	video_youtube?: string;
	skills?: string[];
	required_node_id?: string;
	publicado: boolean;
};

/**
 * Devuelve todos los nodos publicados, ordenados por roadmap y orden ascendente.
 * Importa los archivos .md vía import.meta.glob (Vite).
 */
export async function getNodos(): Promise<Nodo[]> {
	const archivos = import.meta.glob<{ metadata: Record<string, unknown> }>(
		'/src/content/nodos/*/*.md',
		{ eager: true }
	);

	const nodos: Nodo[] = Object.entries(archivos)
		.map(([, mod]) => {
			const m = mod.metadata as Record<string, unknown>;
			return {
				titulo: String(m.titulo ?? ''),
				slug: String(m.slug ?? ''),
				roadmap: String(m.roadmap ?? ''),
				orden: Number(m.orden ?? 0),
				duracion: m.duracion ? String(m.duracion) : undefined,
				video_youtube: m.video_youtube ? String(m.video_youtube) : undefined,
				skills: Array.isArray(m.skills) ? m.skills.map(String) : undefined,
				required_node_id: m.required_node_id ? String(m.required_node_id) : undefined,
				publicado: Boolean(m.publicado ?? false)
			};
		})
		.filter((n) => n.publicado)
		.sort((a, b) => {
			if (a.roadmap === b.roadmap) return a.orden - b.orden;
			return a.roadmap.localeCompare(b.roadmap);
		});

	return nodos;
}

/**
 * Devuelve todos los nodos publicados de un roadmap, ordenados por orden ascendente.
 */
export async function getNodosByRoadmap(roadmapSlug: string): Promise<Nodo[]> {
	const todos = await getNodos();
	return todos.filter((n) => n.roadmap === roadmapSlug).sort((a, b) => a.orden - b.orden);
}

/**
 * Devuelve un nodo publicado concreto por roadmap + slug.
 */
export async function getNodo(roadmapSlug: string, nodoSlug: string): Promise<Nodo | undefined> {
	const nodos = await getNodosByRoadmap(roadmapSlug);
	return nodos.find((n) => n.slug === nodoSlug);
}
