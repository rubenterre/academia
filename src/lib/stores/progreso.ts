// src/lib/stores/progreso.ts
// Gestiona el progreso de lecciones completadas usando localStorage.
// Diseñado para migrar a PocketBase: solo hay que sustituir las funciones
// de lectura/escritura por llamadas a la API sin tocar los componentes.
//
// Estructura en localStorage:
//   academia_progreso = {
//     "sveltekit-para-principiantes": {
//       completadas: ["01-que-es-sveltekit", "02-crear-el-primer-proyecto"],
//       ultimaLeccion: "02-crear-el-primer-proyecto",
//       actualizadoEn: "2026-06-05T11:00:00.000Z"
//     }
//   }

import { browser } from '$app/environment';

const STORAGE_KEY = 'academia_progreso';

// ---------------------------------------------------------------------------
// Tipos — se reutilizarán en la capa PocketBase
// ---------------------------------------------------------------------------
export type ProgresoCurso = {
	completadas: string[];      // slugs de lecciones completadas
	ultimaLeccion: string;      // slug de la última lección visitada
	actualizadoEn: string;      // ISO 8601
};

export type ProgresoTotal = Record<string, ProgresoCurso>;

// ---------------------------------------------------------------------------
// Lectura / escritura raw (swappable por PocketBase)
// ---------------------------------------------------------------------------
function leerTodo(): ProgresoTotal {
	if (!browser) return {};
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
	} catch {
		return {};
	}
}

function guardarTodo(progreso: ProgresoTotal): void {
	if (!browser) return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(progreso));
}

// ---------------------------------------------------------------------------
// API pública
// ---------------------------------------------------------------------------

/** Devuelve el progreso de un curso concreto. */
export function getProgresoCurso(cursoSlug: string): ProgresoCurso {
	const todo = leerTodo();
	return todo[cursoSlug] ?? { completadas: [], ultimaLeccion: '', actualizadoEn: '' };
}

/** Marca una lección como completada y actualiza la última visitada. */
export function marcarCompletada(cursoSlug: string, leccionSlug: string): void {
	const todo = leerTodo();
	const cursor = todo[cursoSlug] ?? { completadas: [], ultimaLeccion: '', actualizadoEn: '' };

	if (!cursor.completadas.includes(leccionSlug)) {
		cursor.completadas = [...cursor.completadas, leccionSlug];
	}
	cursor.ultimaLeccion = leccionSlug;
	cursor.actualizadoEn = new Date().toISOString();

	guardarTodo({ ...todo, [cursoSlug]: cursor });
}

/** Desmarca una lección (por si el alumno quiere resetear). */
export function desmarcarCompletada(cursoSlug: string, leccionSlug: string): void {
	const todo = leerTodo();
	const cursor = todo[cursoSlug];
	if (!cursor) return;

	cursor.completadas = cursor.completadas.filter((s) => s !== leccionSlug);
	cursor.actualizadoEn = new Date().toISOString();

	guardarTodo({ ...todo, [cursoSlug]: cursor });
}

/** Alterna el estado completado de una lección. Devuelve el nuevo estado. */
export function toggleCompletada(cursoSlug: string, leccionSlug: string): boolean {
	const { completadas } = getProgresoCurso(cursoSlug);
	const estaCompletada = completadas.includes(leccionSlug);

	if (estaCompletada) {
		desmarcarCompletada(cursoSlug, leccionSlug);
	} else {
		marcarCompletada(cursoSlug, leccionSlug);
	}

	return !estaCompletada;
}

/** Devuelve el porcentaje completado (0-100) de un curso. */
export function getPorcentaje(cursoSlug: string, totalLecciones: number): number {
	if (totalLecciones === 0) return 0;
	const { completadas } = getProgresoCurso(cursoSlug);
	return Math.round((completadas.length / totalLecciones) * 100);
}

/** Comprueba si una lección concreta está completada. */
export function estaCompletada(cursoSlug: string, leccionSlug: string): boolean {
	return getProgresoCurso(cursoSlug).completadas.includes(leccionSlug);
}

/** Resetea todo el progreso de un curso. */
export function resetearCurso(cursoSlug: string): void {
	const todo = leerTodo();
	delete todo[cursoSlug];
	guardarTodo(todo);
}
