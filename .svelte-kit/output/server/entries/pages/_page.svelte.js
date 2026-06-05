import { V as attr, a as ensure_array_like, o as head } from "../../chunks/dev.js";
import { t as CourseCard } from "../../chunks/CourseCard.js";
//#region src/lib/assets/images/cosmonauta_green_alpha2.avif
var cosmonauta_green_alpha2_default = "/_app/immutable/assets/cosmonauta_green_alpha2.Bi6w8plD.avif";
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	let { data } = $$props;
	const { cursosDestacados } = data;
	head("1uha8ag", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Academia — Cursos de desarrollo web</title>`);
		});
		$$renderer.push(`<meta name="description" content="Aprende desarrollo web moderno con cursos prácticos de SvelteKit, CSS y JavaScript."/>`);
	});
	$$renderer.push(`<section class="hero" id="inicio"><div class="hero__inner"><div class="hero__content"><p class="hero__eyebrow">Cursos de desarrollo web</p> <h1 class="hero__title">Aprende web moderna <span class="hero__title-highlight">de verdad</span></h1> <p class="hero__subtitle">Cursos prácticos de SvelteKit, CSS y JavaScript. Sin relleno, directo al grano.</p> <div class="hero__actions"><a href="/cursos" class="btn btn--primary">Ver todos los cursos</a> <a href="#cursos-destacados" class="btn btn--ghost">Explorar</a></div></div> <div class="hero__visual" aria-hidden="true"><div class="hero__picture"><img${attr("src", cosmonauta_green_alpha2_default)} alt="Imagen de cosmonauta con ordenador portátil" width="480" height="480" loading="eager"/></div></div></div></section> <section class="featured-courses" id="cursos-destacados"><div class="section-container"><div class="section-header"><h2 class="section-header__title">Cursos destacados</h2> <p class="section-header__description">Empieza con los cursos más populares y sigue aprendiendo a tu ritmo.</p></div> `);
	if (cursosDestacados.length > 0) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="courses-grid"><!--[-->`);
		const each_array = ensure_array_like(cursosDestacados);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let curso = each_array[$$index];
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
		$$renderer.push(`<!--]--></div> <div class="featured-courses__cta"><a href="/cursos" class="btn btn--ghost">Ver todos los cursos →</a></div>`);
	} else {
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<div class="empty-state"><p class="empty-state__text">Próximamente nuevos cursos. ¡Vuelve pronto!</p></div>`);
	}
	$$renderer.push(`<!--]--></div></section>`);
}
//#endregion
export { _page as default };
