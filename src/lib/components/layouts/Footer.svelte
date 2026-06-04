<script lang="ts">
	// Año actual reactivo
	const year = new Date().getFullYear();

	// Enlaces de navegación del footer
	const enlacesUtiles = [
		{ label: 'Inicio', href: '/' },
		{ label: 'Cursos', href: '/cursos' },
		{ label: 'Sobre mí', href: '/sobre-mi' },
		{ label: 'Blog', href: '/blog' }
	];

	const enlacesLegales = [
		{ label: 'Aviso legal', href: '/aviso-legal' },
		{ label: 'Privacidad', href: '/privacidad' },
		{ label: 'Cookies', href: '/cookies' }
	];

	const redesSociales = [
		{ label: 'YouTube', href: 'https://www.youtube.com/@rubenterre', icon: 'yt' },
		{ label: 'GitHub', href: 'https://github.com/rubenarturoterrelameiro', icon: 'gh' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/rubenterrelameiro', icon: 'li' }
	];
</script>

<footer class="footer">
	<div class="footer__body">
		<div class="footer__container">
			<div class="footer__grid">

				<!-- Columna: marca -->
				<div class="footer__brand">
					<a href="/" class="footer__logo" aria-label="Inicio">
						<span class="footer__logo-text">Academia</span>
					</a>
					<p class="footer__tagline">
						Cursos prácticos de desarrollo web moderno. SvelteKit, CSS y JavaScript sin relleno.
					</p>

					<ul class="footer__social" aria-label="Redes sociales">
						{#each redesSociales as red}
							<li>
								<a
									href={red.href}
									class="footer__social-link"
									aria-label={red.label}
									target="_blank"
									rel="noopener noreferrer"
								>
									{#if red.icon === 'yt'}
										<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.6 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
									{:else if red.icon === 'gh'}
										<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
									{:else if red.icon === 'li'}
										<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" ><g fill="none" fill-rule="evenodd"><path fill="transparent" d="M8 72h56a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8"/><path fill="#fff" d="M62 62H51.316V43.802c0-4.99-1.896-7.777-5.845-7.777-4.296 0-6.54 2.901-6.54 7.777V62H28.632V27.333H38.93v4.67s3.096-5.729 10.453-5.729c7.353 0 12.617 4.49 12.617 13.777zM16.35 22.794c-3.508 0-6.35-2.864-6.35-6.397S12.842 10 16.35 10s6.347 2.864 6.347 6.397-2.84 6.397-6.348 6.397M11.032 62h10.736V27.333H11.033z"/></g></svg>										
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Columna: enlaces útiles -->
				<nav class="footer__nav" aria-label="Secciones principales">
					<h3 class="footer__nav-title">Secciones</h3>
					<ul class="footer__nav-list">
						{#each enlacesUtiles as enlace}
							<li>
								<a href={enlace.href} class="footer__nav-link">{enlace.label}</a>
							</li>
						{/each}
					</ul>
				</nav>

				<!-- Columna: legal -->
				<nav class="footer__nav" aria-label="Información legal">
					<h3 class="footer__nav-title">Legal</h3>
					<ul class="footer__nav-list">
						{#each enlacesLegales as enlace}
							<li>
								<a href={enlace.href} class="footer__nav-link">{enlace.label}</a>
							</li>
						{/each}
					</ul>
				</nav>

			</div>
		</div>
	</div>

	<!-- Barra inferior -->
	<div class="footer__bar">
		<div class="footer__container">
			<div class="footer__bar-inner">
				<p class="footer__copy">
					&copy; {year} Academia &mdash; <a href="https://www.youtube.com/@rubenterre" target="_blank" rel="noopener noreferrer" class="footer__copy-link">Rubén Terre</a>
				</p>
				<ul class="footer__legal-links" aria-label="Páginas legales">
					{#each enlacesLegales as enlace}
						<li><a href={enlace.href} class="footer__nav-link">{enlace.label}</a></li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</footer>
