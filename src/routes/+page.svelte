<script lang="ts">
	import type { PageData } from './$types';
	import RoadmapCard from '$lib/components/RoadmapCard.svelte';
	import cosmonauta from '$lib/assets/images/cosmonauta_green_alpha2.avif';

	let { data }: { data: PageData } = $props();
	const roadmapsDestacados = $derived(data.roadmapsDestacados);
</script>

<svelte:head>
	<title>Academia — Roadmaps para aprender desarrollo web</title>
	<meta
		name="description"
		content="Sigue roadmaps prácticos de desarrollo web para avanzar con una progresión clara, nodos conectados y objetivos profesionales concretos."
	/>
</svelte:head>

<section class="hero" id="inicio">
	<div class="hero__inner">
		<div class="hero__content">
			<p class="hero__eyebrow">Roadmaps de desarrollo web</p>
			<h1 class="hero__title">
				Aprende con una
				<span class="hero__title-highlight">ruta clara</span>
			</h1>
			<p class="hero__subtitle">
				No empieces por contenidos sueltos. Sigue itinerarios pensados para dominar una skill, construir criterio y avanzar nodo a nodo.
			</p>
			<div class="hero__actions">
				<a href="/roadmaps" class="btn btn--primary">Explorar roadmaps</a>
				<a href="#roadmaps-destacados" class="btn btn--ghost">Ver recomendados</a>
			</div>
		</div>

		<div class="hero__visual" aria-hidden="true">
			<div class="hero__picture">
				<img src={cosmonauta} alt="Imagen de cosmonauta con ordenador portátil" width="480" height="480" loading="eager" />
			</div>
		</div>
	</div>
</section>

<section class="featured-courses featured-roadmaps" id="roadmaps-destacados">
	<div class="section-container">
		<div class="section-header">
			<h2 class="section-header__title">Roadmaps destacados</h2>
			<p class="section-header__description">
				Empieza por un itinerario completo y avanza con contexto, dependencias claras y una progresión más útil que una lista de cursos aislados.
			</p>
		</div>

		{#if roadmapsDestacados.length > 0}
			<div class="courses-grid roadmaps-grid">
				{#each roadmapsDestacados as roadmap (roadmap.slug)}
					<RoadmapCard
						title={roadmap.titulo}
						description={roadmap.descripcion}
						slug={roadmap.slug}
						level={roadmap.nivel}
						duration={roadmap.duracion_estimada}
						targetRole={roadmap.target_role}
						image={roadmap.imagen}
						ctaLabel="Ver ruta"
					/>
				{/each}
			</div>

			<div class="featured-courses__cta featured-roadmaps__cta">
				<a href="/roadmaps" class="btn btn--ghost">Ver todos los roadmaps →</a>
			</div>
		{:else}
			<div class="empty-state" role="status">
				<p class="empty-state__text">Próximamente publicaremos los primeros roadmaps de la academia.</p>
			</div>
		{/if}
	</div>
</section>
