import { t as __exportAll } from "./chunk.js";
import "./dev.js";
//#region src/content/cursos/css-moderno-desde-cero.md
var css_moderno_desde_cero_exports = /* @__PURE__ */ __exportAll({
	default: () => Css_moderno_desde_cero_md,
	metadata: () => metadata$2
});
var metadata$2 = {
	"titulo": "CSS moderno desde cero",
	"slug": "css-moderno-desde-cero",
	"descripcion": "Domina las técnicas de CSS más actuales: custom properties, container queries, grid avanzado, animaciones y más.",
	"nivel": "principiante",
	"duracion": "4h aprox.",
	"lecciones": 12,
	"categoria": "CSS",
	"fecha": "2026-06-15T00:00:00.000Z",
	"publicado": true,
	"destacado": true
};
var { titulo: titulo$2, slug: slug$2, descripcion: descripcion$2, nivel: nivel$2, duracion: duracion$2, lecciones: lecciones$2, categoria: categoria$2, fecha: fecha$2, publicado: publicado$2, destacado: destacado$2 } = metadata$2;
function Css_moderno_desde_cero_md($$renderer) {
	$$renderer.push(`<p>Un recorrido completo por el CSS de hoy: desde variables y tipografía fluida hasta container queries, subgrid y animaciones modernas con @keyframes y transitions.</p>`);
}
//#endregion
//#region src/content/cursos/javascript-esencial.md
var javascript_esencial_exports = /* @__PURE__ */ __exportAll({
	default: () => Javascript_esencial_md,
	metadata: () => metadata$1
});
var metadata$1 = {
	"titulo": "JavaScript esencial",
	"slug": "javascript-esencial",
	"descripcion": "Las bases sólidas de JavaScript que todo desarrollador web necesita: tipos, funciones, async/await, módulos ES y el DOM.",
	"nivel": "principiante",
	"duracion": "8h aprox.",
	"lecciones": 24,
	"categoria": "JavaScript",
	"fecha": "2026-07-01T00:00:00.000Z",
	"publicado": false,
	"destacado": false
};
var { titulo: titulo$1, slug: slug$1, descripcion: descripcion$1, nivel: nivel$1, duracion: duracion$1, lecciones: lecciones$1, categoria: categoria$1, fecha: fecha$1, publicado: publicado$1, destacado: destacado$1 } = metadata$1;
function Javascript_esencial_md($$renderer) {
	$$renderer.push(`<p>Desde variables y tipos hasta promesas, módulos ES y manipulación del DOM. El curso de JavaScript que debería haber existido siempre: sin fluff, directo al grano.</p>`);
}
//#endregion
//#region src/content/cursos/sveltekit-para-principiantes.md
var sveltekit_para_principiantes_exports = /* @__PURE__ */ __exportAll({
	default: () => Sveltekit_para_principiantes_md,
	metadata: () => metadata
});
var metadata = {
	"titulo": "SvelteKit para principiantes",
	"slug": "sveltekit-para-principiantes",
	"descripcion": "Aprende a construir aplicaciones web modernas con SvelteKit desde cero. Routing, layouts, carga de datos y despliegue en Netlify.",
	"nivel": "principiante",
	"duracion": "6h aprox.",
	"lecciones": 18,
	"categoria": "SvelteKit",
	"fecha": "2026-06-01T00:00:00.000Z",
	"publicado": true,
	"destacado": true
};
var { titulo, slug, descripcion, nivel, duracion, lecciones, categoria, fecha, publicado, destacado } = metadata;
function Sveltekit_para_principiantes_md($$renderer) {
	$$renderer.push(`<p>Este curso te lleva desde cero hasta tener una aplicación SvelteKit completamente funcional desplegada en Netlify. Aprenderás el sistema de rutas basado en archivos, layouts compartidos, carga de datos con <code>load</code>, formularios y mucho más.</p>`);
}
//#endregion
export { javascript_esencial_exports as n, css_moderno_desde_cero_exports as r, sveltekit_para_principiantes_exports as t };
