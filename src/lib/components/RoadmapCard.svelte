<script lang="ts">
	type RoadmapLevel = 'principiante' | 'intermedio' | 'avanzado';

	type RoadmapCardProps = {
		title: string;
		description: string;
		slug: string;
		level?: RoadmapLevel | string;
		duration?: string;
		targetRole?: string;
		image?: string;
		ctaLabel?: string;
		badgeLabel?: string;
	};

	let {
		title,
		description,
		slug,
		level = 'principiante',
		duration = 'Próximamente',
		targetRole,
		image,
		ctaLabel = 'Ver roadmap',
		badgeLabel = 'Roadmap'
	}: RoadmapCardProps = $props();

	const levelClassMap: Record<string, string> = {
		principiante: 'badge--success',
		intermedio: 'badge--warning',
		avanzado: 'badge--error'
	};

	const levelLabelMap: Record<string, string> = {
		principiante: 'Principiante',
		intermedio: 'Intermedio',
		avanzado: 'Avanzado'
	};

	const href = $derived(`/roadmaps/${slug}`);
	const normalizedLevel = $derived(level.toLowerCase());
	const levelClass = $derived(levelClassMap[normalizedLevel] ?? 'badge--neutral');
	const levelLabel = $derived(levelLabelMap[normalizedLevel] ?? level);
</script>

<a class="card card--course course-card roadmap-card" href={href} aria-label={`Abrir el roadmap ${title}`}>
	<div class="card__thumbnail course-card__thumbnail roadmap-card__thumbnail">
		{#if image}
			<img class="course-card__image roadmap-card__image" src={image} alt={`Portada del roadmap ${title}`} />
		{:else}
			<div class="course-card__placeholder roadmap-card__placeholder" aria-hidden="true">
				<span>{targetRole ?? badgeLabel}</span>
			</div>
		{/if}
	</div>

	<div class="card__body">
		<div class="course-card__header roadmap-card__header">
			<span class="badge badge--primary">{badgeLabel}</span>
			<span class={`badge ${levelClass}`}>{levelLabel}</span>
		</div>

		<h3 class="card__title">{title}</h3>
		<p class="card__description">{description}</p>

		<div class="card__meta roadmap-card__meta">
			<span>{duration}</span>
			{#if targetRole}
				<span>{targetRole}</span>
			{/if}
		</div>
	</div>

	<div class="card__footer course-card__footer roadmap-card__footer">
		<span class="course-card__link roadmap-card__link">{ctaLabel}</span>
		<span class="course-card__icon roadmap-card__icon" aria-hidden="true">→</span>
	</div>
</a>
