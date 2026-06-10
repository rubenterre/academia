<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/main.scss';
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Navbar from '$lib/components/layouts/Navbar.svelte';
	import CookieBanner from '$lib/components/CookieBanner.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- BMC Website Widget — flotante en toda la web -->
	<!-- svelte-ignore -->
	{@html `<script
		data-name="BMC-Widget"
		data-cfasync="false"
		src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
		data-id="rubenterre"
		data-description="Support me on Buy me a coffee!"
		data-message="¿Me invitas a un café?"
		data-color="#40DCA5"
		data-position="Right"
		data-x_margin="18"
		data-y_margin="18"
	><\/script>`}
</svelte:head>

<Navbar />

{@render children()}

<CookieBanner/>
<Footer />
