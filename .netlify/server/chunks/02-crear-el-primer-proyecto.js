import { t as __exportAll } from "./chunk.js";
import "./dev.js";
//#region src/content/lecciones/sveltekit-para-principiantes/01-que-es-sveltekit.md
var _01_que_es_sveltekit_exports = /* @__PURE__ */ __exportAll({
	default: () => _1_que_es_sveltekit_md,
	metadata: () => metadata$1
});
var metadata$1 = {
	"titulo": "¿Qué es SvelteKit?",
	"slug": "01-que-es-sveltekit",
	"curso": "sveltekit-para-principiantes",
	"orden": 1,
	"duracion": "12 min",
	"video_youtube": "02JynP1ZKzY",
	"publicado": true
};
var { titulo: titulo$1, slug: slug$1, curso: curso$1, orden: orden$1, duracion: duracion$1, video_youtube: video_youtube$1, publicado: publicado$1 } = metadata$1;
function _1_que_es_sveltekit_md($$renderer) {
	$$renderer.push(`<p>SvelteKit es el framework de aplicaciones creado sobre Svelte para construir sitios web y aplicaciones modernas con routing, carga de datos, layouts compartidos y renderizado híbrido.</p> <p>En este curso vamos a usarlo para entender cómo se organiza una aplicación real desde cero, cómo se estructura el sistema de rutas y cómo se conectan las distintas páginas entre sí.</p> <h2>Qué vas a aprender en esta primera lección</h2> <ul><li>Qué problema resuelve SvelteKit.</li> <li>Qué diferencia hay entre Svelte y SvelteKit.</li> <li>Cómo piensa SvelteKit la estructura de una aplicación.</li> <li>Qué vamos a construir a lo largo del curso.</li></ul> <h2>Svelte vs SvelteKit</h2> <p>Svelte es la tecnología con la que construyes componentes. SvelteKit es la capa que te da el marco completo de aplicación: rutas, layouts, carga de datos, manejo de errores, formularios y despliegue.</p> <p>Una forma simple de verlo es esta:</p> <ul><li><strong>Svelte</strong>: componentes.</li> <li><strong>SvelteKit</strong>: aplicación completa.</li></ul> <h2>Idea clave</h2> <p>Si solo necesitas una interfaz aislada, Svelte puede ser suficiente. Pero cuando quieres una aplicación real con páginas, navegación y estructura, SvelteKit te da la base necesaria para avanzar con orden.</p>`);
}
//#endregion
//#region src/content/lecciones/sveltekit-para-principiantes/02-crear-el-primer-proyecto.md
var _02_crear_el_primer_proyecto_exports = /* @__PURE__ */ __exportAll({
	default: () => _2_crear_el_primer_proyecto_md,
	metadata: () => metadata
});
var metadata = {
	"titulo": "Crear el primer proyecto",
	"slug": "02-crear-el-primer-proyecto",
	"curso": "sveltekit-para-principiantes",
	"orden": 2,
	"duracion": "18 min",
	"video_youtube": "dQw4w9WgXcQ",
	"publicado": true
};
var { titulo, slug, curso, orden, duracion, video_youtube, publicado } = metadata;
function _2_crear_el_primer_proyecto_md($$renderer) {
	$$renderer.push(`<p>En esta lección vamos a preparar el entorno de trabajo y a crear la base del proyecto con la estructura mínima necesaria para empezar a desarrollar.</p> <p>La idea no es solo ejecutar un comando, sino entender qué archivos aparecen, para qué sirven y cómo se organiza una aplicación SvelteKit desde el principio.</p> <h2>Objetivos de la lección</h2> <ul><li>Crear el proyecto inicial.</li> <li>Entender la estructura principal de carpetas.</li> <li>Identificar dónde viven las rutas, componentes y estilos.</li> <li>Preparar el proyecto para empezar a construir pantallas reales.</li></ul> <h2>Qué suele traer un proyecto base</h2> <p>Cuando generas un proyecto con SvelteKit, normalmente verás piezas como estas:</p> <ul><li><code>src/routes</code> para las páginas y endpoints.</li> <li><code>src/lib</code> para componentes y utilidades reutilizables.</li> <li><code>static</code> para recursos públicos.</li> <li>Archivos de configuración como <code>svelte.config.js</code>, <code>vite.config.ts</code> y <code>tsconfig.json</code>.</li></ul> <h2>Idea clave</h2> <p>Antes de construir ninguna feature, conviene entender el mapa del proyecto. Tener clara la estructura desde el principio te ahorra dudas cuando empieces a trabajar con layouts, rutas dinámicas y carga de datos.</p>`);
}
//#endregion
export { _01_que_es_sveltekit_exports as n, _02_crear_el_primer_proyecto_exports as t };
