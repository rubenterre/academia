<script lang="ts">
	import type { PageData } from './$types';
	import { toggleCompletada, estaCompletada, getPorcentaje } from '$lib/stores/progreso';
	import LessonNav from '$lib/components/LessonNav.svelte';
	import LessonPlayer from '$lib/components/LessonPlayer.svelte';
	import RoadmapTree from '$lib/components/RoadmapTree.svelte';

	let { data }: { data: PageData } = $props();

	const roadmap = $derived(data.roadmap);
	const nodo = $derived(data.nodo);
	const Contenido = $derived(data.contenido as any);
	const indiceNodos = $derived(data.indiceNodos);
	const nodoAnterior = $derived(data.nodoAnterior);
	const nodoSiguiente = $derived(data.nodoSiguiente);

	let completadasSet = $state<Set<string>>(new Set());
	let porcentaje = $state(0);

	$effect(() => {
		const slug = roadmap.slug;
		const slugs = indiceNodos.map((item) => item.slug);
		const completadas = slugs.filter((s) => estaCompletada(slug, s));
		completadasSet = new Set(completadas);
		porcentaje = getPorcentaje(slug, indiceNodos.length);
	});

	const completadoActual = $derived(completadasSet.has(nodo.slug));

	function handleToggle() {
		toggleCompletada(roadmap.slug, nodo.slug);
		const nuevo = new Set(completadasSet);
		if (nuevo.has(nodo.slug)) {
			nuevo.delete(nodo.slug);
		} else {
			nuevo.add(nodo.slug);
		}
		completadasSet = nuevo;
		porcentaje = getPorcentaje(roadmap.slug, indiceNodos.length);
	}
</script>

<svelte:head>
	<title>{nodo.titulo} — {roadmap.titulo} — Academia de desarrollo web</title>
	<meta name="description" content={`${nodo.titulo} · ${roadmap.titulo}`} />
</svelte:head>

<section class="page-header">
	<div class="page-header__inner">
		<h1 class="page-header__title">{nodo.titulo}</h1>
		<nav class="breadcrumb" aria-label="Ruta de navegación">
			<ol class="breadcrumb__list">
				<li class="breadcrumb__item"><a href="/" class="breadcrumb__link">Inicio</a></li>
				<li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li>
				<li class="breadcrumb__item"><a href="/roadmaps" class="breadcrumb__link">Roadmaps</a></li>
				<li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li>
				<li class="breadcrumb__item"><a href={`/roadmaps/${roadmap.slug}`} class="breadcrumb__link">{roadmap.titulo}</a></li>
				<li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li>
				<li class="breadcrumb__item breadcrumb__item--current" aria-current="page">{nodo.titulo}</li>
			</ol>
		</nav>
	</div>
</section>

<section class="roadmap-node-page">
	<div class="roadmap-node-layout">

		<!-- Contenido principal: ocupa la columna izquierda (mayor jerarquía visual) -->
		<div class="roadmap-node-content">
			<LessonPlayer title={nodo.titulo} videoId={nodo.video_youtube} />

			<div class="lesson-actions">
				<button
					class={`btn ${completadoActual ? 'btn--ghost' : 'btn--primary'}`}
					onclick={handleToggle}
				>
					{completadoActual ? 'Marcar como pendiente' : 'Marcar como completado'}
				</button>
			</div>

			<div class="prose">
				<Contenido />
			</div>

			<LessonNav roadmapSlug={roadmap.slug} previous={nodoAnterior} next={nodoSiguiente} />
		</div>

		<!-- Sidebar: columna derecha, árbol de navegación del roadmap -->
		<aside class="roadmap-node-sidebar" aria-label="Navegación del roadmap">
			<div class="card roadmap-detail-card roadmap-detail-card--sidebar">
				<div class="card__body">
					<div class="roadmap-node-sidebar__header">
						<h2 class="roadmap-node-sidebar__title">{roadmap.titulo}</h2>
						<span class="roadmap-node-sidebar__progress" aria-label={`Progreso: ${porcentaje}%`}>
							{porcentaje}%
						</span>
					</div>
					<div class="roadmap-node-sidebar__progress-bar" role="progressbar" aria-valuenow={porcentaje} aria-valuemin={0} aria-valuemax={100}>
						<div class="roadmap-node-sidebar__progress-fill" style={`width: ${porcentaje}%`}></div>
					</div>
					<div class="roadmap-node-sidebar__tree">
						<RoadmapTree roadmapSlug={roadmap.slug} nodes={indiceNodos} currentSlug={nodo.slug} />
					</div>
				</div>
			</div>
		</aside>

	</div>
</section>
