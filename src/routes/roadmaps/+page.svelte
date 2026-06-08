<script lang="ts">
	import type { PageData } from './$types';
	import RoadmapCard from '$lib/components/RoadmapCard.svelte';

	let { data }: { data: PageData } = $props();
	const roadmaps = $derived(data.roadmaps);

	const niveles = ['todos', 'principiante', 'intermedio', 'avanzado'] as const;
	type Nivel = (typeof niveles)[number];

	let nivelActivo = $state<Nivel>('todos');

	const roadmapsFiltrados = $derived(
		nivelActivo === 'todos'
			? roadmaps
			: roadmaps.filter((r) => r.nivel === nivelActivo)
	);

	const nivelLabel: Record<Nivel, string> = {
		todos: 'Todos',
		principiante: 'Principiante',
		intermedio: 'Intermedio',
		avanzado: 'Avanzado'
	};
</script>

<svelte:head>
	<title>Roadmaps — Academia de desarrollo web</title>
	<meta
		name="description"
		content="Explora itinerarios de aprendizaje para convertirte en desarrollador web con una progresión clara por nodos y objetivos profesionales."
	/>
</svelte:head>

<section class="page-header">
	<div class="page-header__inner">
		<h1 class="page-header__title">Roadmaps</h1>
		<nav class="breadcrumb" aria-label="Ruta de navegación">
			<ol class="breadcrumb__list">
				<li class="breadcrumb__item"><a href="/" class="breadcrumb__link">Inicio</a></li>
				<li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li>
				<li class="breadcrumb__item breadcrumb__item--current" aria-current="page">Roadmaps</li>
			</ol>
		</nav>
	</div>
</section>

<section class="roadmaps-page">
	<div class="roadmaps-page__inner">

		<div class="roadmaps-page__filters" role="group" aria-label="Filtrar por nivel">
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
			<span class="roadmaps-page__count">
				{roadmapsFiltrados.length}
				{roadmapsFiltrados.length === 1 ? 'roadmap' : 'roadmaps'}
			</span>
		</div>

		{#if roadmapsFiltrados.length > 0}
			<div class="roadmaps-page__grid">
				{#each roadmapsFiltrados as roadmap (roadmap.slug)}
					<RoadmapCard
						title={roadmap.titulo}
						description={roadmap.descripcion}
						slug={roadmap.slug}
						level={roadmap.nivel}
						duration={roadmap.duracion_estimada}
						targetRole={roadmap.target_role}
						image={roadmap.imagen}
					/>
				{/each}
			</div>
		{:else}
			<div class="empty-state" role="status">
				<div class="empty-state__icon" aria-hidden="true">🗺️</div>
				<h2 class="empty-state__title">Sin roadmaps en este nivel</h2>
				<p class="empty-state__text">Prueba otro filtro o vuelve pronto, estamos preparando nuevos itinerarios.</p>
				<button class="btn btn--ghost" onclick={() => (nivelActivo = 'todos')}>
					Ver todos los roadmaps
				</button>
			</div>
		{/if}

	</div>
</section>
