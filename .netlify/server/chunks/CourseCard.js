import { H as escape_html, V as attr, n as attr_class } from "./dev.js";
//#region src/lib/components/CourseCard.svelte
function CourseCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { title, description, slug, level = "principiante", duration = "Próximamente", lessons, image, category = "Curso", ctaLabel = "Ver curso" } = $$props;
		const levelClassMap = {
			principiante: "badge--success",
			intermedio: "badge--warning",
			avanzado: "badge--error"
		};
		const levelLabelMap = {
			principiante: "Principiante",
			intermedio: "Intermedio",
			avanzado: "Avanzado"
		};
		const href = `/cursos/${slug}`;
		const normalizedLevel = level.toLowerCase();
		const levelClass = levelClassMap[normalizedLevel] ?? "badge--neutral";
		const levelLabel = levelLabelMap[normalizedLevel] ?? level;
		$$renderer.push(`<a class="card card--course course-card"${attr("href", href)}${attr("aria-label", `Abrir el curso ${title}`)}><div class="card__thumbnail course-card__thumbnail">`);
		if (image) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<img class="course-card__image"${attr("src", image)}${attr("alt", `Portada del curso ${title}`)}/>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="course-card__placeholder" aria-hidden="true"><span>${escape_html(category)}</span></div>`);
		}
		$$renderer.push(`<!--]--></div> <div class="card__body"><div class="course-card__header"><span class="badge badge--primary">${escape_html(category)}</span> <span${attr_class(`badge ${levelClass}`)}>${escape_html(levelLabel)}</span></div> <h3 class="card__title">${escape_html(title)}</h3> <p class="card__description">${escape_html(description)}</p> <div class="card__meta"><span>${escape_html(duration)}</span> `);
		if (lessons) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span>${escape_html(lessons)} lecciones</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div> <div class="card__footer course-card__footer"><span class="course-card__link">${escape_html(ctaLabel)}</span> <span class="course-card__icon" aria-hidden="true">→</span></div></a>`);
	});
}
//#endregion
export { CourseCard as t };
