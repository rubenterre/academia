<script lang="ts">
	import { browser } from '$app/environment';

	// Variante visual: 'default' (botón completo BMC) | 'link' (solo enlace de texto)
	let { variante = 'default' }: { variante?: 'default' | 'link' } = $props();

	const BMC_URL = 'https://www.buymeacoffee.com/rubenterre';

	$effect(() => {
		if (!browser || variante !== 'default') return;

		// Inyecta el script oficial de BMC solo en el cliente
		const script = document.createElement('script');
		script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
		script.setAttribute('data-name', 'bmc-button');
		script.setAttribute('data-slug', 'rubenterre');
		script.setAttribute('data-color', '#40DCA5');
		script.setAttribute('data-emoji', '☕');
		script.setAttribute('data-font', 'Poppins');
		script.setAttribute('data-text', 'Regálame un café');
		script.setAttribute('data-outline-color', '#000000');
		script.setAttribute('data-font-color', '#ffffff');
		script.setAttribute('data-coffee-color', '#FFDD00');
		script.async = true;

		document.getElementById('bmc-container')?.appendChild(script);
	});
</script>

{#if variante === 'default'}
	<!-- Contenedor donde BMC inyecta su botón -->
	<div id="bmc-container" class="bmc bmc--default" aria-label="Apoya el proyecto"></div>
{:else}
	<!-- Versión ligera: enlace de texto con icono ☕ para el footer -->
	<a
		href={BMC_URL}
		class="bmc bmc--link"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Apóyame en Buy Me a Coffee"
	>
		<span class="bmc__icon" aria-hidden="true">☕</span>
		<span class="bmc__text">Invítame a un café</span>
	</a>
{/if}

<style lang="scss">
	.bmc {
		display: inline-flex;
		align-items: center;

		// El botón oficial de BMC necesita display:block en su contenedor
		&--default {
			display: block;
			width: 100%;

			// Centra el botón generado por el script de BMC
			:global(#bmc-wbtn) {
				display: block;
				margin: 0 auto;
			}
		}

		&--link {
			gap: var(--space-2);
			padding: var(--space-2) var(--space-4);
			border-radius: var(--radius-full);
			border: 1px solid oklch(from var(--color-text) l c h / 0.15);
			background: transparent;
			color: var(--color-text-muted);
			font-size: var(--text-sm);
			font-weight: 500;
			text-decoration: none;
			transition:
				border-color var(--transition-interactive),
				background var(--transition-interactive),
				color var(--transition-interactive);

			&:hover {
				border-color: #40DCA5;
				background: oklch(from #40DCA5 l c h / 0.08);
				color: var(--color-text);
			}
		}
	}

	.bmc__icon {
		font-size: 1.1em;
		line-height: 1;
	}
</style>
