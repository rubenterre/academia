<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const {
		curso,
		leccion,
		contenido: Contenido,
		indiceLecciones,
		leccionAnterior,
		leccionSiguiente
	} = data;

	const youtubeEmbedUrl = leccion.video_youtube
		? `https://www.youtube.com/embed/${leccion.video_youtube}`
		: null;
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

				<nav class="lesson-nav" aria-label="Navegación entre lecciones">
					{#if leccionAnterior}
						<a
							href={`/cursos/${curso.slug}/lecciones/${leccionAnterior.slug}`}
							class="btn btn--ghost"
						>
							← {leccionAnterior.titulo}
						</a>
					{:else}
						<span></span>
					{/if}

					{#if leccionSiguiente}
						<a
							href={`/cursos/${curso.slug}/lecciones/${leccionSiguiente.slug}`}
							class="btn btn--primary"
						>
							{leccionSiguiente.titulo} →
						</a>
					{/if}
				</nav>
			</div>

			<aside class="course-detail__sidebar">
				<div class="course-sidebar">
					<p class="course-sidebar__price">{curso.titulo}</p>
					<a href={`/cursos/${curso.slug}`} class="btn btn--ghost btn--lg course-sidebar__cta">
						Volver al curso
					</a>

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
										<span>{item.titulo}</span>
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
