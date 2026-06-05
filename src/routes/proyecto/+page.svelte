<script lang="ts">
	import cosmonauta from '$lib/assets/images/cosmonauta_proyecto.avif';
	import avatarImg from '$lib/assets/images/ruben_terre_avatar.avif';
	import sveltekitLogo from '$lib/assets/icons/svelte_icon.svg';
	import sassLogo from '$lib/assets/icons/sass_icon.svg';
	import htmlLogo from '$lib/assets/icons/html5_icon.svg';
	import viteLogo from '$lib/assets/icons/vite_icon.svg';
	import markdownLogo from '$lib/assets/icons/markdown_icon.svg';
	import pocketbaseLogo from '$lib/assets/icons/pocketbase_icon.svg';


	const PORTFOLIO_URL = 'https://rubenterre.me';

	const principios = [
/* 		{
			icono: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
			titulo: 'Sin relleno',
			desc: 'Cada lección tiene un propósito claro. No hay introducciones de 10 minutos ni contenido de relleno para inflar las horas del curso.'
		}, */
		{
			icono: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
			titulo: 'Código real',
			desc: 'Se aprende escribiendo código, no viendo código. Cada curso tiene ejercicios prácticos y proyectos que puedes usar como referencia.'
		},
		{
			icono: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 485" fill="currentColor" stroke="currentColor"><path d="M252 474.5c-3.7 2.1-7.8 3-11.4.8L13.7 344.4c-3.8-2.2-6.3-5.2-6.6-9.3s1.5-8 5.3-10.2l65.3-37.7-66-38.3c-3.3-1.9-4.6-5.9-4.5-9.1s1.5-7 4.8-8.9l65.8-38-65.4-37.8c-3.6-2.1-5.4-6-5.3-9.8s2.3-7.3 5.9-9.4L240.5 4.7c3.8-2.2 8-1.1 11.5.9L477.8 136c3.7 2.1 5.8 5.4 6 9.4s-1.6 7.7-5.3 9.8l-65.3 37.7 66.1 38.2c3.3 1.9 4.6 5.9 4.5 9.1s-1.5 7-4.8 8.9l-65.8 38 65.3 37.7c3.7 2.2 5.5 6.3 5.3 10.2s-2.8 7.2-6.6 9.4L251.9 474.5Zm199.1-328.7L245.5 27.2 39.9 145.7l205.6 118.6 205.6-118.6Zm-59.8 59.8-140.8 81.3c-3.7 1.7-7.1 1.6-10.6-.4L99.7 205.6 40 240.1l205.4 118.6 205.5-118.6-59.7-34.5Zm0 94.2-139.7 80.7c-3.7 2.1-7.4 2.5-11.2.6L99.7 299.9l-59.6 34.5L245.5 453l205.4-118.6-59.6-34.5Z"/></svg>`,
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
		{ icon: sveltekitLogo ,nombre: 'SvelteKit', rol: 'Framework fullstack', color: '#FF3E00' },
		{ icon: markdownLogo, nombre: 'Markdown', rol: 'Contenido en Markdown', color: '#01696f' },
		{ icon: sassLogo,nombre: 'SCSS', rol: 'Estilos', color: '#CC6699' },
		{ icon: htmlLogo,nombre: 'HTML', rol: 'Estructura', color: '#3178C6' },
		{ icon: viteLogo,nombre: 'Vite', rol: 'Bundler', color: '#646CFF' },
		{ icon: pocketbaseLogo,nombre: 'PocketBase', rol: 'Backend', color: '#B8DBD9' }
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

<!-- HERO — misma estructura que la home -->
<section class="hero" id="proyecto">
	<div class="hero__inner">
		<div class="hero__content">
			<p class="hero__eyebrow">El proyecto</p>
			<h1 class="hero__title">
				Aprender sin
				<span class="hero__title-highlight">perder el tiempo</span>
			</h1>
			<p class="hero__subtitle">
				La Academia nació de una frustración concreta: los mejores recursos para aprender
				desarrollo web moderno están en inglés, dispersos o llenos de relleno.
				Esto es el intento de arreglarlo.
			</p>
			<div class="hero__actions">
				<a href="/cursos" class="btn btn--primary">Ver los cursos</a>
				<a href="#principios" class="btn btn--ghost">Saber más</a>
			</div>
		</div>

		<div class="hero__visual" aria-hidden="true">
			<div class="hero__picture">
				<img src={cosmonauta} alt="Cosmonauta con la tablet de RT aprendiendo JavaScript" width="480" height="480" loading="eager">
			</div>
		</div>
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
<section class="proyecto-section proyecto-section--alt" id="principios">
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
						<!-- <span class="stack-chip__dot" style="background: {tech.color}"></span> -->
						<span class="stack-chip__icon-container">
						<img class="stack-chip__icon" src={tech.icon} alt={tech.nombre} width="34" height="34" loading="eager">
						</span>
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
		<div class="proyecto-cta__content">
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
		<div class="proyecto-cta__media">
			<img
				src={avatarImg}
				alt="Rubén Terré, desarrollador web"
				width="400"
				height="400"
				loading="lazy"
				class="proyecto-cta__avatar"
			/>
		</div>
	</div>
</section>
