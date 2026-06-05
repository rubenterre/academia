import * as server from '../entries/pages/cursos/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cursos/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/cursos/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.DDucVu3U.js","_app/immutable/chunks/DGSHIZNz.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/E22oUoyK.js"];
export const stylesheets = [];
export const fonts = [];
