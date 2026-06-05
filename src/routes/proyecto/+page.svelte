<script lang="ts">
	const PORTFOLIO_URL = 'https://rubenterre.dev';

	const principios = [
		{
			icono: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
			titulo: 'Sin relleno',
			desc: 'Cada lección tiene un propósito claro. No hay introducciones de 10 minutos ni contenido de relleno para inflar las horas del curso.'
		},
		{
			icono: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
			titulo: 'Código real',
			desc: 'Se aprende escribiendo código, no viendo código. Cada curso tiene ejercicios prácticos y proyectos que puedes usar como referencia.'
		},
		{
			icono: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
			titulo: 'Stack moderno',
			desc: 'SvelteKit, CSS moderno, JavaScript actual. No jQuery, no frameworks obsoletos. Lo que usarás en proyectos reales hoy.'
		},
		{
			icono: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
			titulo: 'Siempre gratuito',
			desc: 'Todo el contenido es libre y público. Si el proyecto te aporta valor, puedes apoyarlo con un café — pero nunca es obligatorio.'
		}
	];

	const stack = [
		{ nombre: 'SvelteKit', rol: 'Framework fullstack', color: '#FF3E00' },
		{ nombre: 'mdsvex', rol: 'Contenido en Markdown', color: '#01696f' },
		{ nombre: 'SCSS', rol: 'Estilos', color: '#CC6699' },
		{ nombre: 'TypeScript', rol: 'Tipado', color: '#3178C6' },
		{ nombre: 'Vite', rol: 'Bundler', color: '#646CFF' },
		{ nombre: 'PocketBase', rol: 'Backend (próximamente)', color: '#B8DBD9' }
	];

	const faqs = [
		{
			pregunta: '¿Necesito experiencia previa?',
			respuesta: 'Depende del curso. Cada uno indica claramente su nivel. Los cursos de SvelteKit asumen conocimientos básicos de HTML, CSS y JavaScript.'
		},
		{
			pregunta: '¿El contenido se actualiza?',
			respuesta: 'Sí. Cuando una tecnología lanza cambios relevantes, las lecciones afectadas se actualizan. El objetivo es que el contenido sea útil, no simplemente publicado.'
		},
		{
			pregunta: '¿Por qué SvelteKit y no React o Next.js?',
			respuesta: 'Porque SvelteKit es la mejor herramienta para aprender conceptos modernos del frontend sin la sobrecarga mental de React. Una vez lo entiendes, los demás frameworks son más fáciles de aprender.'
		},
		{
			pregunta: '¿Cómo puedo apoyar el proyecto?',
			respuesta: 'Compartiendo los cursos con quien creas que le pueden ayudar, o invitándome a un café si el contenido te ha aportado valor.'
		}
	];

	let faqAbierta = $state<number | null>(null);

	function toggleFaq(i: number) {
		faqAbierta = faqAbierta === i ? null : i;
	}
</script>

<svelte:head>
	<title>El proyecto — Academia de desarrollo web</title>
	<meta name="description" content="Qué es la Academia, por qué existe y cómo está construida. Cursos prácticos de SvelteKit, CSS y JavaScript sin relleno." />
</svelte:head>

<!-- HERO -->
<section class="proyecto-hero">
	<div class="proyecto-hero__inner">
		<span class="proyecto-hero__eyebrow">El proyecto</span>
		<h1 class="proyecto-hero__title">Aprender desarrollo web<br/>sin perder el tiempo</h1>
		<p class="proyecto-hero__desc">
			La Academia nació de una frustración concreta: los mejores recursos para aprender desarrollo web moderno
			están en inglés, dispersos o llenos de relleno. Esto es el intento de arreglarlo.
		</p>
		<a href="/cursos" class="btn btn--primary btn--lg">Ver los cursos</a>
	</div>
</section>

<!-- PRINCIPIOS -->
<section class="proyecto-section">
	<div class="proyecto-section__inner">
		<div class="proyecto-section__header">
			<h2 class="proyecto-section__title">En qué creemos</h2>
			<p class="proyecto-section__subtitle">Cuatro ideas que guian cómo se crea cada curso.</p>
		</div>
		<div class="principios-grid">
			{#each principios as p}
				<article class="principio-card">
					<div class="principio-card__icon">{@html p.icono}</div>
					<h3 class="principio-card__title">{p.titulo}</h3>
					<p class="principio-card__desc">{p.desc}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- CÓMO ESTÁ CONSTRUIDA -->
<section class="proyecto-section proyecto-section--alt">
	<div class="proyecto-section__inner">
		<div class="proyecto-built">
			<div class="proyecto-built__copy">
				<h2 class="proyecto-section__title">Construida con lo que enseña</h2>
				<p>
					La Academia está construida con SvelteKit, el mismo framework que se enseña en los cursos.
					El contenido vive en archivos Markdown procesados con mdsvex.
					No hay CMS externo, no hay dependencias innecesarias.
				</p>
				<p>
					Si algo falla en la plataforma, lo arreglo yo. Si algo funciona especialmente bien,
					acaba convirtiéndose en una lección.
				</p>
			</div>
			<div class="proyecto-built__stack">
				{#each stack as tech}
					<div class="stack-chip">
						<span class="stack-chip__dot" style="background: {tech.color}"></span>
						<span class="stack-chip__nombre">{tech.nombre}</span>
						<span class="stack-chip__rol">{tech.rol}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="proyecto-section">
	<div class="proyecto-section__inner">
		<div class="proyecto-faq">
			<div class="proyecto-faq__header">
				<h2 class="proyecto-section__title">Preguntas frecuentes</h2>
				<p class="proyecto-section__subtitle">Lo que más suelen preguntar.</p>
			</div>
			<div class="faq-list">
				{#each faqs as faq, i}
					<div class="faq-item" class:faq-item--open={faqAbierta === i}>
						<button
							class="faq-item__trigger"
							onclick={() => toggleFaq(i)}
							aria-expanded={faqAbierta === i}
						>
							<span>{faq.pregunta}</span>
							<svg class="faq-item__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
						</button>
						{#if faqAbierta === i}
							<div class="faq-item__body">
								<p>{faq.respuesta}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA FINAL -->
<section class="proyecto-cta">
	<div class="proyecto-cta__inner">
		<h2 class="proyecto-cta__title">¿Quién hay detrás?</h2>
		<p class="proyecto-cta__desc">
			Soy Rubén Terré, desarrollador web. Puedes ver mi trabajo, proyectos y forma de contacto en mi portfolio personal.
		</p>
		<a
			href={PORTFOLIO_URL}
			class="btn btn--primary btn--lg"
			target="_blank"
			rel="noopener noreferrer"
		>
			Ver mi portfolio →
		</a>
	</div>
</section>
