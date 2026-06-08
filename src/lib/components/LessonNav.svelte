<script lang="ts">
	type NavItem = { slug: string; titulo: string } | null;

	type LessonNavProps = {
		roadmapSlug: string;
		previous: NavItem;
		next: NavItem;
	};

	let { roadmapSlug, previous, next }: LessonNavProps = $props();
</script>

<nav class="lesson-nav" aria-label="Navegación entre nodos">
	{#if previous}
		<a class="btn btn--ghost" href={`/roadmaps/${roadmapSlug}/${previous.slug}`}>
			← {previous.titulo}
		</a>
	{/if}

	{#if next}
		<a class="btn btn--primary" href={`/roadmaps/${roadmapSlug}/${next.slug}`}>
			{next.titulo} →
		</a>
	{/if}
</nav>
