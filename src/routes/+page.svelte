<script lang="ts">
	import type { PageData } from './$types';
	import CourseCard from '$lib/components/CourseCard.svelte';

	let { data }: { data: PageData } = $props();
	const { cursosDestacados } = data;
</script>

<svelte:head>
	<title>Academia — Cursos de desarrollo web</title>
	<meta name="description" content="Aprende desarrollo web moderno con cursos prácticos de SvelteKit, CSS y JavaScript." />
</svelte:head>

<!-- ====================================================
     HERO
===================================================== -->
<section class="hero" id="inicio">
	<div class="hero__inner">
		<div class="hero__content">
			<p class="hero__eyebrow">Cursos de desarrollo web</p>
			<h1 class="hero__title">
				Aprende web moderna
				<span class="hero__title-highlight">de verdad</span>
			</h1>
			<p class="hero__subtitle">
				Cursos prácticos de SvelteKit, CSS y JavaScript. Sin relleno, directo al grano.
			</p>
			<div class="hero__actions">
				<a href="/cursos" class="btn btn--primary">Ver todos los cursos</a>
				<a href="#cursos-destacados" class="btn btn--ghost">Explorar</a>
			</div>
		</div>

		<div class="hero__visual" aria-hidden="true">
			<div class="hero__code-block">
				<pre><code><span class="code-keyword">import</span> <span class="code-brace">&#123;</span> <span class="code-var">getCursos</span> <span class="code-brace">&#125;</span> <span class="code-keyword">from</span> <span class="code-string">'$lib/content'</span>;

<span class="code-keyword">export const</span> <span class="code-fn">load</span> = <span class="code-keyword">async</span> () <span class="code-keyword">=&gt;</span> <span class="code-brace">&#123;</span>
  <span class="code-keyword">const</span> cursos = <span class="code-keyword">await</span> <span class="code-fn">getCursos</span>();
  <span class="code-keyword">return</span> <span class="code-brace">&#123;</span> cursos <span class="code-brace">&#125;</span>;
<span class="code-brace">&#125;</span>;</code></pre>
			</div>
		</div>
	</div>
</section>

<!-- ====================================================
     CURSOS DESTACADOS
===================================================== -->
<section class="featured-courses" id="cursos-destacados">
	<div class="section-container">
		<div class="section-header">
			<h2 class="section-header__title">Cursos destacados</h2>
			<p class="section-header__description">
				Empieza con los cursos más populares y sigue aprendiendo a tu ritmo.
			</p>
		</div>

		{#if cursosDestacados.length > 0}
			<div class="courses-grid">
				{#each cursosDestacados as curso (curso.slug)}
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

			<div class="featured-courses__cta">
				<a href="/cursos" class="btn btn--ghost">Ver todos los cursos &rarr;</a>
			</div>
		{:else}
			<div class="empty-state">
				<p class="empty-state__text">Próximamente nuevos cursos. ¡Vuelve pronto!</p>
			</div>
		{/if}
	</div>
</section>
