import { H as escape_html, V as attr, a as ensure_array_like, i as derived, l as stringify, n as attr_class, o as head } from "../../../../chunks/dev.js";
import { t as CourseCard } from "../../../../chunks/CourseCard.js";
//#region src/routes/cursos/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const curso = derived(() => data.curso);
		const Contenido = derived(() => data.contenido);
		const relacionados = derived(() => data.relacionados);
		const leccionesCurso = derived(() => data.leccionesCurso);
		const nivelLabel = {
			principiante: "Principiante",
			intermedio: "Intermedio",
			avanzado: "Avanzado"
		};
		const nivelClass = {
			principiante: "badge--success",
			intermedio: "badge--warning",
			avanzado: "badge--error"
		};
		head("12y37a8", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(curso().titulo)} — Academia de desarrollo web</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", curso().descripcion)}/>`);
		});
		$$renderer.push(`<section class="page-header"><div class="page-header__inner"><h1 class="page-header__title">${escape_html(curso().titulo)}</h1> <nav class="breadcrumb" aria-label="Ruta de navegación"><ol class="breadcrumb__list"><li class="breadcrumb__item"><a href="/" class="breadcrumb__link">Inicio</a></li> <li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li> <li class="breadcrumb__item"><a href="/cursos" class="breadcrumb__link">Cursos</a></li> <li class="breadcrumb__item breadcrumb__item--separator" aria-hidden="true">›</li> <li class="breadcrumb__item breadcrumb__item--current" aria-current="page">${escape_html(curso().titulo)}</li></ol></nav></div></section> <article class="course-detail"><div class="course-detail__inner"><div class="course-detail__layout"><div class="course-detail__main">`);
		if (curso().imagen) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="course-detail__cover"><img${attr("src", curso().imagen)}${attr("alt", `Portada del curso ${curso().titulo}`)} width="960" height="540" loading="eager" class="course-detail__cover-img"/></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="course-detail__cover course-detail__cover--placeholder" aria-hidden="true"><span class="course-detail__cover-label">${escape_html(curso().categoria)}</span></div>`);
		}
		$$renderer.push(`<!--]--> <div class="course-detail__badges"><span class="badge badge--primary">${escape_html(curso().categoria)}</span> <span${attr_class(`badge ${stringify(nivelClass[curso().nivel] ?? "badge--neutral")}`)}>${escape_html(nivelLabel[curso().nivel] ?? curso().nivel)}</span></div> <ul class="course-detail__meta" aria-label="Datos del curso">`);
		if (curso().duracion) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<li class="course-detail__meta-item"><svg class="course-detail__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${escape_html(curso().duracion)}</li>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (curso().lecciones) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<li class="course-detail__meta-item"><svg class="course-detail__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> ${escape_html(curso().lecciones)} lecciones</li>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <li class="course-detail__meta-item"><svg class="course-detail__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> ${escape_html(nivelLabel[curso().nivel] ?? curso().nivel)}</li></ul> <section class="course-detail__section"><h2 class="course-detail__section-title">Sobre este curso</h2> <p class="course-detail__description">${escape_html(curso().descripcion)}</p></section> <section class="course-detail__section"><h2 class="course-detail__section-title">Contenido del curso</h2> <div class="prose">`);
		if (Contenido()) {
			$$renderer.push("<!--[-->");
			Contenido()($$renderer, {});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		$$renderer.push(`</div></section> `);
		if (leccionesCurso().length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="course-detail__section"><h2 class="course-detail__section-title">Lecciones del curso</h2> <ol class="lesson-index__list"><!--[-->`);
			const each_array = ensure_array_like(leccionesCurso());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let leccion = each_array[$$index];
				$$renderer.push(`<li class="lesson-index__item"><a${attr("href", `/cursos/${curso().slug}/lecciones/${leccion.slug}`)} class="lesson-index__link"><span class="lesson-index__order">${escape_html(leccion.orden)}.</span> <span>${escape_html(leccion.titulo)}</span></a></li>`);
			}
			$$renderer.push(`<!--]--></ol></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <aside class="course-detail__sidebar"><div class="course-sidebar"><p class="course-sidebar__price">Gratis</p> <a href="#enroll" class="btn btn--primary btn--lg course-sidebar__cta">Inscribirme ahora</a> <ul class="course-sidebar__list"><li class="course-sidebar__item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <span><strong>Duración:</strong> ${escape_html(curso().duracion || "Próximamente")}</span></li> <li class="course-sidebar__item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> <span><strong>Lecciones:</strong> ${escape_html(curso().lecciones)}</span></li> <li class="course-sidebar__item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> <span><strong>Nivel:</strong> ${escape_html(nivelLabel[curso().nivel] ?? curso().nivel)}</span></li> <li class="course-sidebar__item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> <span><strong>Formato:</strong> Vídeo + texto</span></li> <li class="course-sidebar__item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> <span><strong>Acceso:</strong> Ilimitado</span></li></ul></div></aside></div></div></article> `);
		if (relacionados().length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="related-courses"><div class="related-courses__inner"><div class="section-header"><h2 class="section-header__title">Más cursos</h2> <p class="section-header__description">Sigue aprendiendo con el resto del catálogo.</p></div> <div class="courses-grid"><!--[-->`);
			const each_array_1 = ensure_array_like(relacionados());
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let c = each_array_1[$$index_1];
				CourseCard($$renderer, {
					title: c.titulo,
					description: c.descripcion,
					slug: c.slug,
					level: c.nivel,
					duration: c.duracion,
					lessons: c.lecciones,
					image: c.imagen,
					category: c.categoria
				});
			}
			$$renderer.push(`<!--]--></div></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
