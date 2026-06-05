import * as universal from '../entries/pages/cursos/_slug_/lecciones/_lessonSlug_/_page.ts.js';
import * as server from '../entries/pages/cursos/_slug_/lecciones/_lessonSlug_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cursos/_slug_/lecciones/_lessonSlug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/cursos/[slug]/lecciones/[lessonSlug]/+page.ts";
export { server };
export const server_id = "src/routes/cursos/[slug]/lecciones/[lessonSlug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.CVeNSvtx.js","_app/immutable/chunks/DGSHIZNz.js","_app/immutable/chunks/ClonXZO7.js","_app/immutable/chunks/CymRgjIC.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CMyZiRnb.js"];
export const stylesheets = ["_app/immutable/assets/BuyMeCoffee.BPmzZWEs.css"];
export const fonts = [];
