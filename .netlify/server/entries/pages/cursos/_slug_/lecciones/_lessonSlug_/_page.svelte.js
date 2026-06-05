import { H as escape_html, V as attr, a as ensure_array_like, i as derived, l as stringify, n as attr_class, o as head, r as attr_style } from "../../../../../../chunks/dev.js";
import { t as BuyMeCoffee } from "../../../../../../chunks/BuyMeCoffee.js";
//#region src/routes/cursos/[slug]/lecciones/[lessonSlug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const curso = derived(() => data.curso);
		const leccion = derived(() => data.leccion);
		const Contenido = derived(() => data.contenido);
		const indiceLecciones = derived(() => data.indiceLecciones);
		const leccionAnterior = derived(() => data.leccionAnterior);
		const leccionSiguiente = derived(() => data.leccionSiguiente);
		const youtubeEmbedUrl = derived(() => leccion().video_youtube ? `https://www.youtube.com/embed/${leccion().video_youtube}` : null);
		let completadasSet = /* @__PURE__ */ new Set();
		let porcentaje = 0;
		const completadaActual = derived(() => completadasSet.has(leccion().slug));
		head("1w1ljm0", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(leccion().titulo)} — ${escape_html(curso().titulo)} — Academia de desarrollo web</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", `${leccion().titulo} · ${curso().titulo}`)}/>`);
		});
		$$renderer.push(`<section class="page-header"><div class="page-header__inner"><h1 class="page-header__title">${escape_html(leccion().titulo)}</h1> <nav class="breadcrumb" aria-label="Ruta de navegación"><ol class="breadcrumb__list"><li class="breadcrumb__item"><a href="/" class="breadcrumb__link">Inicio</a></li> <li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li> <li class="breadcrumb__item"><a href="/cursos" class="breadcrumb__link">Cursos</a></li> <li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li> <li class="breadcrumb__item"><a${attr("href", `/cursos/${curso().slug}`)} class="breadcrumb__link">${escape_html(curso().titulo)}</a></li> <li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li> <li class="breadcrumb__item breadcrumb__item--current" aria-current="page">${escape_html(leccion().titulo)}</li></ol></nav></div></section> <article class="course-detail lesson-detail"><div class="course-detail__inner"><div class="course-detail__layout"><div class="course-detail__main"><div class="course-detail__badges"><span class="badge badge--primary">${escape_html(curso().categoria)}</span> <span class="badge badge--neutral">Lección ${escape_html(leccion().orden)}</span></div> <ul class="course-detail__meta" aria-label="Datos de la lección">`);
		if (leccion().duracion) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<li class="course-detail__meta-item"><svg class="course-detail__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${escape_html(leccion().duracion)}</li>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <li class="course-detail__meta-item"><svg class="course-detail__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> ${escape_html(indiceLecciones().length)} lecciones en este curso</li></ul> `);
		if (youtubeEmbedUrl()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="course-detail__section"><h2 class="course-detail__section-title">Vídeo de la lección</h2> <div class="lesson-video"><iframe${attr("src", youtubeEmbedUrl())}${attr("title", `Vídeo de la lección ${leccion().titulo}`)} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="course-detail__section"><h2 class="course-detail__section-title">Contenido de la lección</h2> <div class="prose">`);
		if (Contenido()) {
			$$renderer.push("<!--[-->");
			Contenido()($$renderer, {});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		$$renderer.push(`</div></section> <div class="lesson-complete"><button${attr_class("btn lesson-complete__btn", void 0, { "lesson-complete__btn--done": completadaActual() })}${attr("aria-pressed", completadaActual())}>`);
		if (completadaActual()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> Lección completada`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></svg> Marcar como completada`);
		}
		$$renderer.push(`<!--]--></button></div> <nav class="lesson-nav" aria-label="Navegación entre lecciones">`);
		if (leccionAnterior()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", `/cursos/${curso().slug}/lecciones/${leccionAnterior().slug}`)} class="btn btn--ghost lesson-nav__btn lesson-nav__btn--prev"><span class="lesson-nav__label">← Lección anterior</span></a>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<span></span>`);
		}
		$$renderer.push(`<!--]--> `);
		if (leccionSiguiente()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", `/cursos/${curso().slug}/lecciones/${leccionSiguiente().slug}`)} class="btn btn--primary lesson-nav__btn lesson-nav__btn--next"><span class="lesson-nav__label">Siguiente lección →</span></a>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></nav></div> <aside class="course-detail__sidebar"><div class="course-sidebar"><p class="course-sidebar__price">${escape_html(curso().titulo)}</p> <div class="progress-bar" aria-label="Progreso del curso"><div class="progress-bar__header"><span class="progress-bar__label">Tu progreso</span> <span class="progress-bar__pct">${escape_html(porcentaje)}%</span></div> <div class="progress-bar__track" role="progressbar"${attr("aria-valuenow", porcentaje)}${attr("aria-valuemin", 0)}${attr("aria-valuemax", 100)}><div class="progress-bar__fill"${attr_style(`width: ${stringify(porcentaje)}%`)}></div></div></div> <a${attr("href", `/cursos/${curso().slug}`)} class="btn btn--ghost btn--lg course-sidebar__cta">Volver al curso</a> <div class="course-sidebar__bmc">`);
		BuyMeCoffee($$renderer, { variante: "default" });
		$$renderer.push(`<!----></div> <section class="lesson-index" aria-labelledby="lesson-index-title"><h2 id="lesson-index-title" class="course-sidebar__title">Lecciones</h2> <ol class="lesson-index__list"><!--[-->`);
		const each_array = ensure_array_like(indiceLecciones());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<li class="lesson-index__item"><a${attr("href", `/cursos/${curso().slug}/lecciones/${item.slug}`)}${attr_class("lesson-index__link", void 0, { "lesson-index__link--active": item.slug === leccion().slug })}${attr("aria-current", item.slug === leccion().slug ? "page" : void 0)}><span class="lesson-index__order">${escape_html(item.orden)}.</span> <span class="lesson-index__titulo">${escape_html(item.titulo)}</span> `);
			if (completadasSet.has(item.slug)) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<svg class="lesson-index__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-label="Completada"><path d="M20 6 9 17l-5-5"></path></svg>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></a></li>`);
		}
		$$renderer.push(`<!--]--></ol></section></div></aside></div></div></article>`);
	});
}
//#endregion
export { _page as default };
