<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/main.scss';
	import Footer from '$lib/components/layouts/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- Fuentes: Cabinet Grotesk (display) + Satoshi (body) via Fontshare -->
	<link
		href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800&f[]=satoshi@400,500,600,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}

<Footer />
