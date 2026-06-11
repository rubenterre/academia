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

	  <!-- SEO base -->
  <meta name="description" content="Roadmaps de desarrollo web para conseguir tu primer trabajo como desarrollador." />
  <meta name="author" content="Rubén Terre" />

  <!-- OpenGraph (Facebook, LinkedIn, WhatsApp…) -->
  <meta property="og:type"        content="website" />
  <meta property="og:site_name"   content="Academia" />
  <meta property="og:title"       content="Academia — Roadmaps de desarrollo web" />
  <meta property="og:description" content="Roadmaps de desarrollo web para conseguir tu primer trabajo como desarrollador." />
  <meta property="og:image"       content="https://academia.rubenterre.me/og-image.png" />
  <meta property="og:image:width"  content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt"   content="Academia — Roadmaps de desarrollo web" />
  <meta property="og:locale"      content="es_ES" />

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:title"       content="Academia — Roadmaps de desarrollo web" />
  <meta name="twitter:description" content="Roadmaps de desarrollo web para conseguir tu primer trabajo como desarrollador." />
  <meta name="twitter:image"       content="https://academia.rubenterre.me/og-image.png" />
  <meta name="twitter:image:alt"   content="Academia — Roadmaps de desarrollo web" />
  
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
