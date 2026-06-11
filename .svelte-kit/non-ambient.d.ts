
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/aviso-legal" | "/cookies" | "/cursos" | "/cursos/[slug]" | "/cursos/[slug]/lecciones" | "/cursos/[slug]/lecciones/[lessonSlug]" | "/privacidad" | "/proyecto" | "/roadmaps" | "/roadmaps/[slug]" | "/roadmaps/[slug]/[nodo]";
		RouteParams(): {
			"/cursos/[slug]": { slug: string };
			"/cursos/[slug]/lecciones": { slug: string };
			"/cursos/[slug]/lecciones/[lessonSlug]": { slug: string; lessonSlug: string };
			"/roadmaps/[slug]": { slug: string };
			"/roadmaps/[slug]/[nodo]": { slug: string; nodo: string }
		};
		LayoutParams(): {
			"/": { slug?: string | undefined; lessonSlug?: string | undefined; nodo?: string | undefined };
			"/aviso-legal": Record<string, never>;
			"/cookies": Record<string, never>;
			"/cursos": { slug?: string | undefined; lessonSlug?: string | undefined };
			"/cursos/[slug]": { slug: string; lessonSlug?: string | undefined };
			"/cursos/[slug]/lecciones": { slug: string; lessonSlug?: string | undefined };
			"/cursos/[slug]/lecciones/[lessonSlug]": { slug: string; lessonSlug: string };
			"/privacidad": Record<string, never>;
			"/proyecto": Record<string, never>;
			"/roadmaps": { slug?: string | undefined; nodo?: string | undefined };
			"/roadmaps/[slug]": { slug: string; nodo?: string | undefined };
			"/roadmaps/[slug]/[nodo]": { slug: string; nodo: string }
		};
		Pathname(): "/" | "/aviso-legal" | "/cookies" | "/cursos" | `/cursos/${string}` & {} | `/cursos/${string}/lecciones/${string}` & {} | "/privacidad" | "/proyecto" | "/roadmaps" | `/roadmaps/${string}` & {} | `/roadmaps/${string}/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/fonts/JetBrainsMono-VariableFont_wght.ttf" | "/fonts/JetBrainsMono-VariableFont_wght.woff2" | "/fonts/Poppins-Bold.ttf" | "/fonts/Poppins-Bold.woff2" | "/fonts/Poppins-Medium.ttf" | "/fonts/Poppins-Medium.woff2" | "/fonts/Poppins-Regular.ttf" | "/fonts/Poppins-Regular.woff2" | "/fonts/Sora-VariableFont_wght.ttf" | "/fonts/Sora-VariableFont_wght.woff2" | "/og-image.png" | "/roadmaps/frontend-developer-junior.png" | "/roadmaps/frontend_developer_junior_curso_Thumbnail.avif" | "/roadmaps/html-semantico.png" | "/robots.txt" | string & {};
	}
}