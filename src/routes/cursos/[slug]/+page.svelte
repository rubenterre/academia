<script lang="ts">
	import type { PageData } from './$types';
	import CourseCard from '$lib/components/CourseCard.svelte';

	let { data }: { data: PageData } = $props();

	const curso          = $derived(data.curso);
	const Contenido      = $derived(data.contenido as any);
	const relacionados   = $derived(data.relacionados);
	const leccionesCurso = $derived(data.leccionesCurso);

	const nivelLabel: Record<string, string> = {
		principiante: 'Principiante',
		intermedio:   'Intermedio',
		avanzado:     'Avanzado'
	};

	const nivelClass: Record<string, string> = {
		principiante: 'badge--success',
		intermedio:   'badge--warning',
		avanzado:     'badge--error'
	};
</script>

<svelte:head>
	<title>{curso.titulo} — Academia de desarrollo web</title>
	<meta name="description" content={curso.descripcion} />
</svelte:head>

<!-- ====================================================
     BREADCRUMB
===================================================== -->
<section class="page-header">
	<div class="page-header__inner">
		<h1 class="page-header__title">{curso.titulo}</h1>
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
				<li class="breadcrumb__item breadcrumb__item--current" aria-current="page">
					{curso.titulo}
				</li>
			</ol>
		</nav>
	</div>
</section>

<!-- ====================================================
     DETALLE DEL CURSO
===================================================== -->
<article class="course-detail">
	<div class="course-detail__inner">

		<!-- Layout de dos columnas: contenido principal + sidebar -->
		<div class="course-detail__layout">

			<!-- ============================================
			     COLUMNA PRINCIPAL
			============================================= -->
			<div class="course-detail__main">

				<!-- Imagen de portada -->
				{#if curso.imagen}
					<div class="course-detail__cover">
						<img
							src={curso.imagen}
							alt={`Portada del curso ${curso.titulo}`}
							width="960"
							height="540"
							loading="eager"
							class="course-detail__cover-img"
						/>
					</div>
				{:else}
					<div class="course-detail__cover course-detail__cover--placeholder" aria-hidden="true">
						<span class="course-detail__cover-label">{curso.categoria}</span>
					</div>
				{/if}

				<!-- Badges de nivel y categoría -->
				<div class="course-detail__badges">
					<span class="badge badge--primary">{curso.categoria}</span>
					<span class="badge {nivelClass[curso.nivel] ?? 'badge--neutral'}">
						{nivelLabel[curso.nivel] ?? curso.nivel}
					</span>
				</div>

				<!-- Meta: duración y lecciones -->
				<ul class="course-detail__meta" aria-label="Datos del curso">
					{#if curso.duracion}
						<li class="course-detail__meta-item">
							<svg class="course-detail__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
							{curso.duracion}
						</li>
					{/if}
					{#if curso.lecciones}
						<li class="course-detail__meta-item">
							<svg class="course-detail__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
							{curso.lecciones} lecciones
						</li>
					{/if}
					<li class="course-detail__meta-item">
						<svg class="course-detail__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
						{nivelLabel[curso.nivel] ?? curso.nivel}
					</li>
				</ul>

				<!-- Descripción -->
				<section class="course-detail__section">
					<h2 class="course-detail__section-title">Sobre este curso</h2>
					<p class="course-detail__description">{curso.descripcion}</p>
				</section>

				<!-- Contenido del .md (mdsvex) -->
				<section class="course-detail__section">
					<h2 class="course-detail__section-title">Contenido del curso</h2>
					<div class="prose">
						<Contenido />
					</div>
				</section>

				{#if leccionesCurso.length > 0}
					<section class="course-detail__section">
						<h2 class="course-detail__section-title">Lecciones del curso</h2>
						<ol class="lesson-index__list">
							{#each leccionesCurso as leccion}
								<li class="lesson-index__item">
									<a
										href={`/cursos/${curso.slug}/lecciones/${leccion.slug}`}
										class="lesson-index__link"
									>
										<span class="lesson-index__order">{leccion.orden}.</span>
										<span>{leccion.titulo}</span>
									</a>
								</li>
							{/each}
						</ol>
					</section>
				{/if}

			</div>

			<!-- ============================================
			     SIDEBAR
			============================================= -->
			<aside class="course-detail__sidebar">
				<div class="course-sidebar">
					<p class="course-sidebar__price">Gratis</p>
					<a href="#enroll" class="btn btn--primary btn--lg course-sidebar__cta">Inscribirme ahora</a>

					<ul class="course-sidebar__list">
						<li class="course-sidebar__item">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
							<span><strong>Duración:</strong> {curso.duracion || 'Próximamente'}</span>
						</li>
						<li class="course-sidebar__item">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
							<span><strong>Lecciones:</strong> {curso.lecciones}</span>
						</li>
						<li class="course-sidebar__item">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
							<span><strong>Nivel:</strong> {nivelLabel[curso.nivel] ?? curso.nivel}</span>
						</li>
						<li class="course-sidebar__item">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
							<span><strong>Formato:</strong> Vídeo + texto</span>
						</li>
						<li class="course-sidebar__item">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
							<span><strong>Acceso:</strong> Ilimitado</span>
						</li>
					</ul>
				</div>
			</aside>

		</div>
	</div>
</article>

<!-- ====================================================
     MÁS CURSOS
===================================================== -->
{#if relacionados.length > 0}
	<section class="related-courses">
		<div class="related-courses__inner">
			<div class="section-header">
				<h2 class="section-header__title">Más cursos</h2>
				<p class="section-header__description">Sigue aprendiendo con el resto del catálogo.</p>
			</div>
			<div class="courses-grid">
				{#each relacionados as c (c.slug)}
					<CourseCard
						title={c.titulo}
						description={c.descripcion}
						slug={c.slug}
						level={c.nivel}
						duration={c.duracion}
						lessons={c.lecciones}
						image={c.imagen}
						category={c.categoria}
					/>
				{/each}
			</div>
		</div>
	</section>
{/if}
