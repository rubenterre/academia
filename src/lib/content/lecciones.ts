// src/lib/content/lecciones.ts
// Lee todos los archivos .md de src/content/lecciones y devuelve sus metadatos.
// Usar SOLO en +page.server.ts / +layout.server.ts (Node, no browser).

export type Leccion = {
	titulo: string;
	slug: string;
	curso: string;
	orden: number;
	duracion?: string;
	video_youtube?: string;
	publicado: boolean;
};

/**
 * Devuelve todas las lecciones publicadas, ordenadas por curso y orden ascendente.
 * Importa los archivos .md vía import.meta.glob (Vite).
 */
export async function getLecciones(): Promise<Leccion[]> {
	const archivos = import.meta.glob<{ metadata: Record<string, unknown> }>(
		'/src/content/lecciones/*/*.md',
		{ eager: true }
	);

	const lecciones: Leccion[] = Object.entries(archivos)
		.map(([, mod]) => {
			const m = mod.metadata as Record<string, unknown>;
			return {
				titulo: String(m.titulo ?? ''),
				slug: String(m.slug ?? ''),
				curso: String(m.curso ?? ''),
				orden: Number(m.orden ?? 0),
				duracion: m.duracion ? String(m.duracion) : undefined,
				video_youtube: m.video_youtube ? String(m.video_youtube) : undefined,
				publicado: Boolean(m.publicado ?? false)
			};
		})
		.filter((l) => l.publicado)
		.sort((a, b) => {
			if (a.curso === b.curso) return a.orden - b.orden;
			return a.curso.localeCompare(b.curso);
		});

	return lecciones;
}

/**
 * Devuelve todas las lecciones publicadas de un curso, ordenadas por orden ascendente.
 */
export async function getLeccionesByCurso(cursoSlug: string): Promise<Leccion[]> {
	const todas = await getLecciones();
	return todas.filter((l) => l.curso === cursoSlug).sort((a, b) => a.orden - b.orden);
}

/**
 * Devuelve una lección publicada concreta por curso + slug.
 */
export async function getLeccion(cursoSlug: string, lessonSlug: string): Promise<Leccion | undefined> {
	const lecciones = await getLeccionesByCurso(cursoSlug);
	return lecciones.find((l) => l.slug === lessonSlug);
}
