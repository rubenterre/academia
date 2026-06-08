<script lang="ts">
	import { estaCompletada } from '$lib/stores/progreso';

	type Nodo = {
		titulo: string;
		slug: string;
		orden: number;
		duracion?: string;
		required_node_id?: string;
		skills?: string[];
	};

	type RoadmapTreeProps = {
		roadmapSlug: string;
		nodes: Nodo[];
		currentSlug?: string;
		showLinks?: boolean;
	};

	let { roadmapSlug, nodes, currentSlug, showLinks = true }: RoadmapTreeProps = $props();

	const nodesSorted = $derived([...nodes].sort((a, b) => a.orden - b.orden));

	function getState(slug: string) {
		if (currentSlug === slug) return 'current';
		return estaCompletada(roadmapSlug, slug) ? 'completed' : 'pending';
	}

	function getDependencyTitle(requiredNodeId?: string) {
		if (!requiredNodeId) return null;
		return nodesSorted.find((node) => node.slug === requiredNodeId)?.titulo ?? requiredNodeId;
	}
</script>

<div class="roadmap-tree" aria-label="Árbol del roadmap">
	<ol class="roadmap-tree__list">
		{#each nodesSorted as node, index (node.slug)}
			<li class="roadmap-tree__item">
				{#if index < nodesSorted.length - 1}
					<span class="roadmap-tree__connector" aria-hidden="true"></span>
				{/if}

				{#if showLinks}
					<a
						href={`/roadmaps/${roadmapSlug}/${node.slug}`}
						class={`roadmap-tree__node roadmap-tree__node--${getState(node.slug)}`}
						aria-current={currentSlug === node.slug ? 'step' : undefined}
					>
						<div class="roadmap-tree__node-head">
							<span class="roadmap-tree__index">{String(node.orden).padStart(2, '0')}</span>
							<span class="roadmap-tree__status" aria-hidden="true">
								{#if getState(node.slug) === 'completed'}✓{:else if getState(node.slug) === 'current'}●{:else}○{/if}
							</span>
						</div>

						<div class="roadmap-tree__content">
							<h3 class="roadmap-tree__title">{node.titulo}</h3>
							<div class="roadmap-tree__meta">
								{#if node.duracion}<span>{node.duracion}</span>{/if}
								{#if getDependencyTitle(node.required_node_id)}
									<span>Requiere: {getDependencyTitle(node.required_node_id)}</span>
								{/if}
							</div>
							{#if node.skills?.length}
								<ul class="roadmap-tree__skills" aria-label={`Skills del nodo ${node.titulo}`}>
									{#each node.skills as skill}
										<li class="badge badge--neutral">{skill}</li>
									{/each}
								</ul>
							{/if}
						</div>
					</a>
				{:else}
					<div class={`roadmap-tree__node roadmap-tree__node--${getState(node.slug)}`}>
						<div class="roadmap-tree__node-head">
							<span class="roadmap-tree__index">{String(node.orden).padStart(2, '0')}</span>
							<span class="roadmap-tree__status" aria-hidden="true">
								{#if getState(node.slug) === 'completed'}✓{:else if getState(node.slug) === 'current'}●{:else}○{/if}
							</span>
						</div>
						<div class="roadmap-tree__content">
							<h3 class="roadmap-tree__title">{node.titulo}</h3>
							<div class="roadmap-tree__meta">
								{#if node.duracion}<span>{node.duracion}</span>{/if}
								{#if getDependencyTitle(node.required_node_id)}
									<span>Requiere: {getDependencyTitle(node.required_node_id)}</span>
								{/if}
							</div>
						</div>
					</div>
				{/if}
			</li>
		{/each}
	</ol>
</div>
