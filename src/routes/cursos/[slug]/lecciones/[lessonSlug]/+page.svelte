<script lang="ts">
	import type { PageData } from './$types';
	import { toggleCompletada, estaCompletada, getPorcentaje } from '$lib/stores/progreso';
	import BuyMeCoffee from '$lib/components/BuyMeCoffee.svelte';

	let { data }: { data: PageData } = $props();

	const curso            = $derived(data.curso);
	const leccion          = $derived(data.leccion);
	const Contenido        = $derived(data.contenido as any);
	const indiceLecciones  = $derived(data.indiceLecciones);
	const leccionAnterior  = $derived(data.leccionAnterior);
	const leccionSiguiente = $derived(data.leccionSiguiente);

	const youtubeEmbedUrl = $derived(
		leccion.video_youtube
			? `https://www.youtube.com/embed/${leccion.video_youtube}`
			: null
	);

	// ── Progreso ─────────────────────────────────────────────────────────
	// completadasSet es reactivo: se recalcula cuando cambia leccion (navegación)
	let completadasSet = $state<Set<string>>(new Set());
	let porcentaje     = $state(0);

	$effect(() => {
		// Se re-ejecuta cada vez que cambia leccion.slug (nueva lección)
		const cursoSlug = curso.slug;
		const { completadas } = {
			completadas: indiceLecciones
				.map((l) => l.slug)
				.filter((s) => estaCompletada(cursoSlug, s))
		};
		completadasSet = new Set(completadas);
		porcentaje = getPorcentaje(cursoSlug, indiceLecciones.length);
	});

	const completadaActual = $derived(completadasSet.has(leccion.slug));

	function handleToggle() {
		toggleCompletada(curso.slug, leccion.slug);
		// Actualizar estado local sin recargar
		const nuevo = new Set(completadasSet);
		if (nuevo.has(leccion.slug)) {
			nuevo.delete(leccion.slug);
		} else {
			nuevo.add(leccion.slug);
		}
		completadasSet = nuevo;
		porcentaje = getPorcentaje(curso.slug, indiceLecciones.length);
	}
</script>

<svelte:head>
	<title>{leccion.titulo} — {curso.titulo} — Academia de desarrollo web</title>
	<meta name="description" content={`${leccion.titulo} · ${curso.titulo}`} />
</svelte:head>

<section class="page-header">
	<div class="page-header__inner">
		<h1 class="page-header__title">{leccion.titulo}</h1>
		<nav class="breadcrumb" aria-label="Ruta de navegación">
			<ol class="breadcrumb__list">
				<li class="breadcrumb__item">
					<a href="/" class="breadcrumb__link">Inicio</a>
				</li>
				<li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li>
				<li class="breadcrumb__item">
					<a href="/cursos" class="breadcrumb__link">Cursos</a>
				</li>
				<li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li>
				<li class="breadcrumb__item">
					<a href={`/cursos/${curso.slug}`} class="breadcrumb__link">{curso.titulo}</a>
				</li>
				<li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li>
				<li class="breadcrumb__item breadcrumb__item--current" aria-current="page">
					{leccion.titulo}
				</li>
			</ol>
		</nav>
	</div>
</section>

<article class="course-detail lesson-detail">
	<div class="course-detail__inner">
		<div class="course-detail__layout">
			<div class="course-detail__main">
				<div class="course-detail__badges">
					<span class="badge badge--primary">{curso.categoria}</span>
					<span class="badge badge--neutral">Lección {leccion.orden}</span>
				</div>

				<ul class="course-detail__meta" aria-label="Datos de la lección">
					{#if leccion.duracion}
						<li class="course-detail__meta-item">
							<svg class="course-detail__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
							{leccion.duracion}
						</li>
					{/if}
					<li class="course-detail__meta-item">
						<svg class="course-detail__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
						{indiceLecciones.length} lecciones en este curso
					</li>
				</ul>

				{#if youtubeEmbedUrl}
					<section class="course-detail__section">
						<h2 class="course-detail__section-title">Vídeo de la lección</h2>
						<div class="lesson-video">
							<iframe
								src={youtubeEmbedUrl}
								title={`Vídeo de la lección ${leccion.titulo}`}
								loading="lazy"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
					</section>
				{/if}

				<section class="course-detail__section">
					<h2 class="course-detail__section-title">Contenido de la lección</h2>
					<div class="prose">
						<Contenido />
					</div>
				</section>

				<!-- Botón marcar como completada -->
				<div class="lesson-complete">
					<button
						class="btn lesson-complete__btn"
						class:lesson-complete__btn--done={completadaActual}
						onclick={handleToggle}
						aria-pressed={completadaActual}
					>
						{#if completadaActual}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
							Lección completada
						{:else}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
							Marcar como completada
						{/if}
					</button>
				</div>

				<nav class="lesson-nav" aria-label="Navegación entre lecciones">
					{#if leccionAnterior}
						<a
							href={`/cursos/${curso.slug}/lecciones/${leccionAnterior.slug}`}
							class="btn btn--ghost lesson-nav__btn lesson-nav__btn--prev"
						>
							<span class="lesson-nav__label">← Lección anterior</span>
						</a>
					{:else}
						<span></span>
					{/if}

					{#if leccionSiguiente}
						<a
							href={`/cursos/${curso.slug}/lecciones/${leccionSiguiente.slug}`}
							class="btn btn--primary lesson-nav__btn lesson-nav__btn--next"
						>
							<span class="lesson-nav__label">Siguiente lección →</span>
						</a>
					{/if}
				</nav>
			</div>

			<aside class="course-detail__sidebar">
				<div class="course-sidebar">
					<p class="course-sidebar__price">{curso.titulo}</p>

					<!-- Barra de progreso -->
					<div class="progress-bar" aria-label="Progreso del curso">
						<div class="progress-bar__header">
							<span class="progress-bar__label">Tu progreso</span>
							<span class="progress-bar__pct">{porcentaje}%</span>
						</div>
						<div class="progress-bar__track" role="progressbar" aria-valuenow={porcentaje} aria-valuemin={0} aria-valuemax={100}>
							<div class="progress-bar__fill" style="width: {porcentaje}%"></div>
						</div>
					</div>

					<a href={`/cursos/${curso.slug}`} class="btn btn--ghost btn--lg course-sidebar__cta">
						Volver al curso
					</a>

					<!-- Botón oficial Buy Me a Coffee -->
					<div class="course-sidebar__bmc">
						<BuyMeCoffee variante="default" />
					</div>

					<section class="lesson-index" aria-labelledby="lesson-index-title">
						<h2 id="lesson-index-title" class="course-sidebar__title">Lecciones</h2>
						<ol class="lesson-index__list">
							{#each indiceLecciones as item}
								<li class="lesson-index__item">
									<a
										href={`/cursos/${curso.slug}/lecciones/${item.slug}`}
										class="lesson-index__link"
										class:lesson-index__link--active={item.slug === leccion.slug}
										aria-current={item.slug === leccion.slug ? 'page' : undefined}
									>
										<span class="lesson-index__order">{item.orden}.</span>
										<span class="lesson-index__titulo">{item.titulo}</span>
										{#if completadasSet.has(item.slug)}
											<svg class="lesson-index__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-label="Completada"><path d="M20 6 9 17l-5-5"/></svg>
										{/if}
									</a>
								</li>
							{/each}
						</ol>
					</section>
				</div>
			</aside>
		</div>
	</div>
</article>
