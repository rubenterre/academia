<script lang="ts">
	import type { PageData } from './$types';
	import CourseCard from '$lib/components/CourseCard.svelte';

	let { data }: { data: PageData } = $props();
	const { cursos } = data;

	// ── Filtrado por nivel ──────────────────────────────────────────────────────
	const niveles = ['todos', 'principiante', 'intermedio', 'avanzado'] as const;
	type Nivel = (typeof niveles)[number];

	let nivelActivo = $state<Nivel>('todos');

	const cursosFiltrados = $derived(
		nivelActivo === 'todos'
			? cursos
			: cursos.filter((c) => c.nivel === nivelActivo)
	);

	const nivelLabel: Record<Nivel, string> = {
		todos: 'Todos',
		principiante: 'Principiante',
		intermedio: 'Intermedio',
		avanzado: 'Avanzado'
	};
</script>

<svelte:head>
	<title>Cursos — Academia de desarrollo web</title>
	<meta
		name="description"
		content="Explora todos los cursos de SvelteKit, CSS y JavaScript. Aprende a tu ritmo con contenido práctico y actualizado."
	/>
</svelte:head>

<!-- ====================================================
     BREADCRUMB
===================================================== -->
<section class="page-header">
	<div class="page-header__inner">
		<h1 class="page-header__title">Cursos</h1>
		<nav class="breadcrumb" aria-label="Ruta de navegación">
			<ol class="breadcrumb__list">
				<li class="breadcrumb__item">
					<a href="/" class="breadcrumb__link">Inicio</a>
				</li>
				<li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li>
				<li class="breadcrumb__item breadcrumb__item--current" aria-current="page">Cursos</li>
			</ol>
		</nav>
	</div>
</section>

<!-- ====================================================
     CATÁLOGO
===================================================== -->
<section class="courses-page">
	<div class="courses-page__inner">

		<!-- Filtros por nivel -->
		<div class="courses-page__filters" role="group" aria-label="Filtrar por nivel">
			{#each niveles as nivel}
				<button
					class="filter-btn"
					class:filter-btn--active={nivelActivo === nivel}
					onclick={() => (nivelActivo = nivel)}
					aria-pressed={nivelActivo === nivel}
				>
					{nivelLabel[nivel]}
				</button>
			{/each}
			<span class="courses-page__count">
				{cursosFiltrados.length}
				{cursosFiltrados.length === 1 ? 'curso' : 'cursos'}
			</span>
		</div>

		<!-- Grid de cursos -->
		{#if cursosFiltrados.length > 0}
			<div class="courses-page__grid">
				{#each cursosFiltrados as curso (curso.slug)}
					<CourseCard
						title={curso.titulo}
						description={curso.descripcion}
						slug={curso.slug}
						level={curso.nivel}
						duration={curso.duracion}
						lessons={curso.lecciones}
						image={curso.imagen}
						category={curso.categoria}
					/>
				{/each}
			</div>
		{:else}
			<div class="empty-state" role="status">
				<div class="empty-state__icon" aria-hidden="true">📭</div>
				<h2 class="empty-state__title">Sin cursos en este nivel</h2>
				<p class="empty-state__text">Prueba otro filtro o vuelve pronto, estamos preparando más contenido.</p>
				<button class="btn btn--ghost" onclick={() => (nivelActivo = 'todos')}>
					Ver todos los cursos
				</button>
			</div>
		{/if}

	</div>
</section>
