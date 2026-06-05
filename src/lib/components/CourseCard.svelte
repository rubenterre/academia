<script lang="ts">
	type CourseLevel = 'principiante' | 'intermedio' | 'avanzado';

	type CourseCardProps = {
		title: string;
		description: string;
		slug: string;
		level?: CourseLevel | string;
		duration?: string;
		lessons?: number;
		image?: string;
		category?: string;
		ctaLabel?: string;
	};

	let {
		title,
		description,
		slug,
		level = 'principiante',
		duration = 'Próximamente',
		lessons,
		image,
		category = 'Curso',
		ctaLabel = 'Ver curso'
	}: CourseCardProps = $props();

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

	const href = $derived(`/cursos/${slug}`);
	const normalizedLevel = $derived(level.toLowerCase());
	const levelClass = $derived(levelClassMap[normalizedLevel] ?? 'badge--neutral');
	const levelLabel = $derived(levelLabelMap[normalizedLevel] ?? level);
</script>

<a class="card card--course course-card" href={href} aria-label={`Abrir el curso ${title}`}>
	<div class="card__thumbnail course-card__thumbnail">
		{#if image}
			<img class="course-card__image" src={image} alt={`Portada del curso ${title}`} />
		{:else}
			<div class="course-card__placeholder" aria-hidden="true">
				<span>{category}</span>
			</div>
		{/if}
	</div>

	<div class="card__body">
		<div class="course-card__header">
			<span class="badge badge--primary">{category}</span>
			<span class={`badge ${levelClass}`}>{levelLabel}</span>
		</div>

		<h3 class="card__title">{title}</h3>
		<p class="card__description">{description}</p>

		<div class="card__meta">
			<span>{duration}</span>
			{#if lessons}
				<span>{lessons} lecciones</span>
			{/if}
		</div>
	</div>

	<div class="card__footer course-card__footer">
		<span class="course-card__link">{ctaLabel}</span>
		<span class="course-card__icon" aria-hidden="true">→</span>
	</div>
</a>
