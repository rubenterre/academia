---
titulo: "Introducción a SvelteKit"
slug: "05-introduccion-a-sveltekit"
roadmap: "frontend-developer-junior"
orden: 5
duracion: "90 min"
video_youtube: "dQw4w9WgXcQ"
skills:
  - SvelteKit
  - Svelte 5
  - Routing
  - SSR
publicado: true
---

SvelteKit es el framework sobre el que está construida esta plataforma. Es una de las herramientas más modernas, ergonómicas y eficientes del ecosistema frontend actual. A diferencia de React o Vue, Svelte no usa un Virtual DOM: compila los componentes a JavaScript vanilla optimizado en tiempo de build.

En este nodo aprendes la estructura básica de un proyecto SvelteKit y los conceptos que necesitas para construir tu primera aplicación real.

## Qué vas a aprender

- Cómo funciona el routing basado en sistema de ficheros.
- La estructura de un componente Svelte con la sintaxis de Svelte 5 (Runes).
- Cómo cargar datos con `+page.server.ts`.
- Las diferencias entre SSR, SSG y SPA.
- Cómo gestionar estado reactivo con `$state` y `$derived`.
- Cómo navegar entre páginas y compartir layouts.

## Por qué SvelteKit

SvelteKit tiene un ratio de "cantidad de código escrito / resultado conseguido" muy favorable. Los componentes son directos, sin boilerplate innecesario. El routing por sistema de ficheros elimina configuración manual. Y la hidratación parcial y el SSR están habilitados por defecto, lo que significa páginas rápidas sin esfuerzo extra.

## Routing basado en ficheros

En SvelteKit, la estructura de carpetas en `src/routes/` define las rutas de la aplicación. No hay fichero de rutas separado:

```
src/routes/
├── +layout.svelte           ← layout compartido por todas las rutas
├── +page.svelte             ← /
├── about/
│   └── +page.svelte         ← /about
├── blog/
│   ├── +page.svelte         ← /blog
│   ├── +page.server.ts      ← carga de datos para /blog
│   └── [slug]/
│       ├── +page.svelte     ← /blog/cualquier-slug
│       └── +page.server.ts  ← carga de datos para cada post
└── contacto/
    └── +page.svelte         ← /contacto
```

Los segmentos entre corchetes (`[slug]`) son **parámetros dinámicos**: capturan cualquier valor en esa posición de la URL y lo hacen disponible en el código.

## Estructura de un componente Svelte 5

Un fichero `.svelte` tiene tres bloques opcionales: `<script>`, `<template>` (sin etiqueta) y `<style>`:

```svelte
<script lang="ts">
	// Lógica del componente
	let nombre = $state('Mundo');
	let saludo = $derived(`Hola, ${nombre}!`);

	function cambiarNombre(nuevoNombre: string) {
		nombre = nuevoNombre;
	}
</script>

<!-- Template: HTML con superpoderes -->
<main>
	<h1>{saludo}</h1>

	<input
		type="text"
		value={nombre}
		oninput={(e) => cambiarNombre(e.currentTarget.value)}
	/>

	{#if nombre.length > 10}
		<p class="aviso">El nombre es bastante largo.</p>
	{/if}
</main>

<!-- Estilos: con scope automático al componente -->
<style>
	h1 {
		color: var(--color-primario);
		font-size: 2rem;
	}

	.aviso {
		color: var(--color-warning);
	}
</style>
```

Los estilos en SvelteKit tienen **scope automático**: las clases y etiquetas que defines en `<style>` solo afectan a ese componente, sin colisionar con otros.

## Svelte 5 Runes: estado reactivo

Svelte 5 introduce las **Runes**: una nueva API para declarar reactividad de forma explícita. Son las cuatro que usarás más:

```svelte
<script lang="ts">
	// $state: valor reactivo. Cuando cambia, el template se actualiza.
	let contador = $state(0);
	let filtro = $state<'todos' | 'activos' | 'completados'>('todos');

	// $derived: valor calculado a partir de otro estado.
	// Se recalcula automáticamente cuando cambia su dependencia.
	let doble = $derived(contador * 2);
	let etiqueta = $derived(contador === 1 ? 'elemento' : 'elementos');

	// $props: recibir datos del componente padre
	let { titulo, descripcion, destacado = false } = $props<{
		titulo: string;
		descripcion: string;
		destacado?: boolean;
	}>();

	// $effect: ejecutar código cuando cambia el estado (para side effects)
	$effect(() => {
		document.title = `${titulo} — Academia`;
	});
</script>

<div class="tarjeta" class:tarjeta--destacada={destacado}>
	<h2>{titulo}</h2>
	<p>{descripcion}</p>
	<p>Contador: {contador} {etiqueta} (doble: {doble})</p>
	<button onclick={() => contador++}>+1</button>
</div>
```

## Carga de datos con `+page.server.ts`

El fichero `+page.server.ts` se ejecuta **exclusivamente en el servidor**. Es donde obtienes datos antes de renderizar la página:

```ts
// src/routes/blog/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// Aquí podrías consultar una base de datos, llamar a una API, leer ficheros...
	const post = await obtenerPost(slug);

	if (!post) {
		error(404, { message: 'Entrada no encontrada' });
	}

	return {
		post  // disponible en el componente como data.post
	};
};
```

```svelte
<!-- src/routes/blog/[slug]/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post = $derived(data.post);
</script>

<article>
	<h1>{post.titulo}</h1>
	<p class="meta">{post.fecha} · {post.tiempoLectura} min</p>
	<div class="prose">{@html post.contenidoHtml}</div>
</article>
```

## Layouts compartidos

El fichero `+layout.svelte` envuelve todas las rutas del mismo directorio. El layout raíz (`src/routes/+layout.svelte`) envuelve toda la aplicación:

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import Navbar from '$lib/components/layouts/Navbar.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';
</script>

<Navbar />

<slot />  <!-- aquí se renderiza la página actual -->

<Footer />
```

En Svelte 5, `<slot />` se sustituye por `{@render children()}`, pero el concepto es el mismo: el layout decide dónde aparece el contenido de la ruta hija.

## Navegación y links

SvelteKit hace navegación del lado del cliente automáticamente para los links internos. Sólo usa `<a href="...">` estándar:

```svelte
<!-- Navegación interna: SvelteKit intercepta el clic -->
<a href="/roadmaps">Ver roadmaps</a>
<a href="/roadmaps/frontend-developer-junior">Empezar este roadmap</a>

<!-- Navegación externa: atributo target -->
<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
	Documentación oficial de Svelte
</a>
```

Para navegación programática (desde código JavaScript):

```svelte
<script lang="ts">
	import { goto } from '$app/navigation';

	async function completarNodo() {
		await guardarProgreso();
		goto('/roadmaps/frontend-developer-junior/02-css-basico');
	}
</script>
```

## SSR, SSG y SPA: cuándo usar cada uno

| Modo | Cuándo usarlo | Cómo activarlo |
|---|---|---|
| **SSR** (Server-Side Rendering) | Páginas con datos dinámicos o personalizados | Por defecto en SvelteKit |
| **SSG** (Static Generation) | Páginas que no cambian frecuentemente | `export const prerender = true` |
| **SPA** | Aplicaciones que no necesitan SEO | `export const ssr = false` |

Para la mayoría de páginas de contenido (como esta plataforma), SSR es el modo correcto: cada visita obtiene datos frescos y la página se puede indexar por buscadores.

## Idea clave

SvelteKit puede parecer mucho de golpe, pero su magia reside en que el routing y la carga de datos se resuelven con convenciones simples: el fichero define la ruta, `+page.server.ts` carga los datos y el componente los muestra. Una vez interiorices ese patrón, construir cualquier página se vuelve predecible.
