import * as universal from '../entries/pages/cursos/_slug_/_page.ts.js';
import * as server from '../entries/pages/cursos/_slug_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cursos/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/cursos/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/cursos/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.Ddn2METp.js","_app/immutable/chunks/DGSHIZNz.js","_app/immutable/chunks/ClonXZO7.js","_app/immutable/chunks/CymRgjIC.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/E22oUoyK.js"];
export const stylesheets = [];
export const fonts = [];
