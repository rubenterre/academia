<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/icons/logo_rt.svg';

	// Navegación principal
	const navLinks = [
		{ label: 'Inicio',      href: '/',                      externo: false },
		{ label: 'Roadmaps',    href: '/roadmaps',              externo: false },
		{ label: 'Cursos',      href: '/cursos',                externo: false },
		{ label: 'El proyecto', href: '/proyecto',              externo: false },
		{ label: 'Contacto',    href: 'https://rubenterre.me', externo: true  }
	];

	// Estado menú móvil
	let mobileOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function closeMobile() {
		mobileOpen = false;
	}

	// Detectar ruta activa
	function isActive(href: string): boolean {
		if (href === '/') return $page.url.pathname === '/';
		return $page.url.pathname.startsWith(href);
	}
</script>

<header class="nav">
	<div class="nav__inner">

		<!-- Columna izquierda: Logo -->
		<a href="/" class="nav__logo" aria-label="Academia — Inicio">
			<img src={logo} alt="Logo de Academia de Rubén Terré" width="34" height="34" class="nav__logo-img" />
			<span class="nav__logo-text">Academia</span>
		</a>

		<!-- Columna central: Navegación desktop -->
		<nav class="nav__center" aria-label="Navegación principal">
			<ul class="nav__links" role="list">
				{#each navLinks as link}
					<li class="nav__item">
						<a
							href={link.href}
							class="nav__link"
							class:is-active={isActive(link.href)}
							aria-current={isActive(link.href) ? 'page' : undefined}
							target={link.externo ? '_blank' : undefined}
							rel={link.externo ? 'noopener noreferrer' : undefined}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Columna derecha: CTA + hamburguesa -->
		<div class="nav__actions">

			<!-- CTA principal (solo desktop) -->
			<a href="/roadmaps" class="btn btn--primary nav__cta" aria-label="Explorar roadmaps">
				Explorar roadmaps
			</a>

			<!-- Hamburguesa (solo móvil) -->
			<button
				class="btn btn--icon btn--ghost nav__toggle"
				onclick={toggleMobile}
				aria-expanded={mobileOpen}
				aria-controls="nav-mobile"
				aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
			>
				{#if mobileOpen}
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<path d="M18 6 6 18M6 6l12 12"/>
					</svg>
				{:else}
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<path d="M4 6h16M4 12h16M4 18h16"/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Menú móvil desplegable -->
	<div
		id="nav-mobile"
		class="nav__mobile"
		class:is-open={mobileOpen}
		role="navigation"
		aria-label="Menú móvil"
	>
		<ul role="list">
			{#each navLinks as link}
				<li class="nav__mobile-item">
					<a
						href={link.href}
						class="nav__link"
						class:is-active={isActive(link.href)}
						aria-current={isActive(link.href) ? 'page' : undefined}
						target={link.externo ? '_blank' : undefined}
						rel={link.externo ? 'noopener noreferrer' : undefined}
						onclick={closeMobile}
					>
						{link.label}
					</a>
				</li>
			{/each}
			<!-- CTA en móvil -->
			<li class="nav__mobile-cta">
				<a href="/roadmaps" class="btn btn--primary" onclick={closeMobile}>
					Explorar roadmaps
				</a>
			</li>
		</ul>
	</div>
</header>

<style lang="scss">
	@use '../../../styles/mixins' as *;

	.nav__logo-text {
		font-family: var(--font-display);
		font-size: var(--text-lg);
		font-weight: 800;
		letter-spacing: -0.02em;
		color: var(--color-text);
	}

	// CTA oculto en móvil
	.nav__cta {
		display: none;

		@include respond-to('md') {
			display: inline-flex;
		}
	}
</style>
