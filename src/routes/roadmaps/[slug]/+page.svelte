<script lang="ts">
	import type { PageData } from './$types';
	import RoadmapCard from '$lib/components/RoadmapCard.svelte';
	import RoadmapTree from '$lib/components/RoadmapTree.svelte';

	let { data }: { data: PageData } = $props();

	const roadmap = $derived(data.roadmap);
	const Contenido = $derived(data.contenido as any);
	const relacionados = $derived(data.relacionados);
	const nodosRoadmap = $derived(data.nodosRoadmap);
</script>

<svelte:head>
	<title>{roadmap.titulo} — Academia de desarrollo web</title>
	<meta name="description" content={roadmap.descripcion} />
</svelte:head>

<section class="page-header">
	<div class="page-header__inner">
		<h1 class="page-header__title">{roadmap.titulo}</h1>
		<nav class="breadcrumb" aria-label="Ruta de navegación">
			<ol class="breadcrumb__list">
				<li class="breadcrumb__item"><a href="/" class="breadcrumb__link">Inicio</a></li>
				<li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li>
				<li class="breadcrumb__item"><a href="/roadmaps" class="breadcrumb__link">Roadmaps</a></li>
				<li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li>
				<li class="breadcrumb__item breadcrumb__item--current" aria-current="page">{roadmap.titulo}</li>
			</ol>
		</nav>
	</div>
</section>

<section class="roadmap-page">
	<div class="roadmap-detail-layout">

		<div class="roadmap-detail-content">
			<div class="roadmap-detail-content__badges">
				<span class="badge badge--primary">Roadmap</span>
				<span class={`badge ${
					roadmap.nivel === 'principiante' ? 'badge--success' :
					roadmap.nivel === 'intermedio' ? 'badge--warning' : 'badge--error'
				}`}>{roadmap.nivel}</span>
				{#if roadmap.target_role}
					<span class="badge badge--neutral">{roadmap.target_role}</span>
				{/if}
			</div>

			<div class="prose roadmap-detail-content__prose">
				<Contenido />
			</div>
		</div>

		<aside class="roadmap-detail-sidebar">
			<div class="card roadmap-detail-card">
				<div class="card__body">
					<h2 class="card__title">Ruta de aprendizaje</h2>
					<p class="card__description">Visualiza la progresión del roadmap, sus dependencias y el siguiente paso recomendado.</p>

					{#if nodosRoadmap.length > 0}
						<RoadmapTree roadmapSlug={roadmap.slug} nodes={nodosRoadmap} />
						<a class="btn btn--primary roadmap-detail-card__cta" href={`/roadmaps/${roadmap.slug}/${nodosRoadmap[0].slug}`}>
							Empezar roadmap
						</a>
					{:else}
						<p class="card__description">Próximamente se publicarán los nodos de este roadmap.</p>
					{/if}
				</div>
			</div>
		</aside>

	</div>
</section>

{#if relacionados.length > 0}
	<section class="featured-roadmaps featured-roadmaps--related">
		<div class="section-container">
			<div class="section-header">
				<h2 class="section-header__title">Otros roadmaps</h2>
				<p class="section-header__description">Sigue avanzando con otros itinerarios relacionados.</p>
			</div>
			<div class="roadmaps-grid">
				{#each relacionados as item (item.slug)}
					<RoadmapCard
						title={item.titulo}
						description={item.descripcion}
						slug={item.slug}
						level={item.nivel}
						duration={item.duracion_estimada}
						targetRole={item.target_role}
						image={item.imagen}
					/>
				{/each}
			</div>
		</div>
	</section>
{/if}
