<script lang="ts">
	type LessonPlayerProps = {
		title: string;
		videoId?: string | null;
	};

	let { title, videoId = null }: LessonPlayerProps = $props();
	const youtubeEmbedUrl = $derived(
		videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null
	);
</script>

{#if youtubeEmbedUrl}
	<div class="lesson-player">
		<iframe
			title={`Vídeo de ${title}`}
			src={youtubeEmbedUrl}
			loading="lazy"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
{/if}
