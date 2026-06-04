// src/lib/content/cursos.ts
// Lee todos los archivos .md de src/content/cursos y devuelve sus metadatos.
// Usar SOLO en +page.server.ts / +layout.server.ts (Node, no browser).

export type Curso = {
	titulo: string;
	slug: string;
	descripcion: string;
	nivel: 'principiante' | 'intermedio' | 'avanzado';
	duracion?: string;
	lecciones?: number;
	categoria?: string;
	imagen?: string;
	fecha: string;
	publicado: boolean;
	destacado: boolean;
};

/**
 * Devuelve todos los cursos publicados, ordenados por fecha descendente.
 * Importa los archivos .md vía import.meta.glob (Vite).
 */
export async function getCursos(): Promise<Curso[]> {
	// glob eager: carga todos los frontmatters en build time
	const archivos = import.meta.glob<{ metadata: Record<string, unknown> }>(
		'/src/content/cursos/*.md',
		{ eager: true }
	);

	const cursos: Curso[] = Object.entries(archivos)
		.map(([, mod]) => {
			const m = mod.metadata as Curso;
			return {
				titulo: m.titulo ?? '',
				slug: m.slug ?? '',
				descripcion: m.descripcion ?? '',
				nivel: m.nivel ?? 'principiante',
				duracion: m.duracion,
				lecciones: m.lecciones,
				categoria: m.categoria ?? 'Curso',
				imagen: m.imagen,
				fecha: String(m.fecha ?? ''),
				publicado: m.publicado ?? false,
				destacado: m.destacado ?? false
			};
		})
		.filter((c) => c.publicado)
		.sort((a, b) => (a.fecha < b.fecha ? 1 : -1));

	return cursos;
}

/**
 * Devuelve solo los cursos marcados como destacados (máx. 6).
 */
export async function getCursosDestacados(max = 6): Promise<Curso[]> {
	const todos = await getCursos();
	return todos.filter((c) => c.destacado).slice(0, max);
}
