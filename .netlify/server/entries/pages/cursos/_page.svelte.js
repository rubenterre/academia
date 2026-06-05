import { H as escape_html, V as attr, a as ensure_array_like, i as derived, n as attr_class, o as head } from "../../../chunks/dev.js";
import { t as CourseCard } from "../../../chunks/CourseCard.js";
//#region src/routes/cursos/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const cursos = derived(() => data.cursos);
		const niveles = [
			"todos",
			"principiante",
			"intermedio",
			"avanzado"
		];
		let nivelActivo = "todos";
		const cursosFiltrados = derived(() => cursos());
		const nivelLabel = {
			todos: "Todos",
			principiante: "Principiante",
			intermedio: "Intermedio",
			avanzado: "Avanzado"
		};
		head("1reftfu", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Cursos — Academia de desarrollo web</title>`);
			});
			$$renderer.push(`<meta name="description" content="Explora todos los cursos de SvelteKit, CSS y JavaScript. Aprende a tu ritmo con contenido práctico y actualizado."/>`);
		});
		$$renderer.push(`<section class="page-header"><div class="page-header__inner"><h1 class="page-header__title">Cursos</h1> <nav class="breadcrumb" aria-label="Ruta de navegación"><ol class="breadcrumb__list"><li class="breadcrumb__item"><a href="/" class="breadcrumb__link">Inicio</a></li> <li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li> <li class="breadcrumb__item breadcrumb__item--current" aria-current="page">Cursos</li></ol></nav></div></section> <section class="courses-page"><div class="courses-page__inner"><div class="courses-page__filters" role="group" aria-label="Filtrar por nivel"><!--[-->`);
		const each_array = ensure_array_like(niveles);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let nivel = each_array[$$index];
			$$renderer.push(`<button${attr_class("filter-btn", void 0, { "filter-btn--active": nivelActivo === nivel })}${attr("aria-pressed", nivelActivo === nivel)}>${escape_html(nivelLabel[nivel])}</button>`);
		}
		$$renderer.push(`<!--]--> <span class="courses-page__count">${escape_html(cursosFiltrados().length)}
				${escape_html(cursosFiltrados().length === 1 ? "curso" : "cursos")}</span></div> `);
		if (cursosFiltrados().length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="courses-page__grid"><!--[-->`);
			const each_array_1 = ensure_array_like(cursosFiltrados());
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let curso = each_array_1[$$index_1];
				CourseCard($$renderer, {
					title: curso.titulo,
					description: curso.descripcion,
					slug: curso.slug,
					level: curso.nivel,
					duration: curso.duracion,
					lessons: curso.lecciones,
					image: curso.imagen,
					category: curso.categoria
				});
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="empty-state" role="status"><div class="empty-state__icon" aria-hidden="true">📭</div> <h2 class="empty-state__title">Sin cursos en este nivel</h2> <p class="empty-state__text">Prueba otro filtro o vuelve pronto, estamos preparando más contenido.</p> <button class="btn btn--ghost">Ver todos los cursos</button></div>`);
		}
		$$renderer.push(`<!--]--></div></section>`);
	});
}
//#endregion
export { _page as default };
