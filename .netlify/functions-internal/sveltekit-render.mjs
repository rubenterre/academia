import { init } from '../serverless.js';

export default init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","fonts/JetBrainsMono-VariableFont_wght.ttf","fonts/JetBrainsMono-VariableFont_wght.woff2","fonts/Poppins-Bold.ttf","fonts/Poppins-Bold.woff2","fonts/Poppins-Medium.ttf","fonts/Poppins-Medium.woff2","fonts/Poppins-Regular.ttf","fonts/Poppins-Regular.woff2","fonts/Sora-VariableFont_wght.ttf","fonts/Sora-VariableFont_wght.woff2","robots.txt"]),
	mimeTypes: {".ttf":"font/ttf",".woff2":"font/woff2",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B3CQ9QK9.js",app:"_app/immutable/entry/app.DAR3IO5O.js",imports:["_app/immutable/entry/start.B3CQ9QK9.js","_app/immutable/chunks/B46QgPyY.js","_app/immutable/chunks/DGSHIZNz.js","_app/immutable/chunks/CymRgjIC.js","_app/immutable/entry/app.DAR3IO5O.js","_app/immutable/chunks/DGSHIZNz.js","_app/immutable/chunks/kNaey6uv.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/aviso-legal",
				pattern: /^\/aviso-legal\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cookies",
				pattern: /^\/cookies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cursos",
				pattern: /^\/cursos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/cursos/[slug]",
				pattern: /^\/cursos\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/cursos/[slug]/lecciones/[lessonSlug]",
				pattern: /^\/cursos\/([^/]+?)\/lecciones\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"lessonSlug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/privacidad",
				pattern: /^\/privacidad\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/proyecto",
				pattern: /^\/proyecto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());

export const config = {
	path: ["/*"],
	excludedPath: ["/.netlify/*"],
	preferStatic: true
};
