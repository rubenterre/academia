
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
		RouteId(): "/" | "/aviso-legal" | "/cookies" | "/cursos" | "/cursos/[slug]" | "/cursos/[slug]/lecciones" | "/cursos/[slug]/lecciones/[lessonSlug]" | "/privacidad" | "/proyecto";
		RouteParams(): {
			"/cursos/[slug]": { slug: string };
			"/cursos/[slug]/lecciones": { slug: string };
			"/cursos/[slug]/lecciones/[lessonSlug]": { slug: string; lessonSlug: string }
		};
		LayoutParams(): {
			"/": { slug?: string | undefined; lessonSlug?: string | undefined };
			"/aviso-legal": Record<string, never>;
			"/cookies": Record<string, never>;
			"/cursos": { slug?: string | undefined; lessonSlug?: string | undefined };
			"/cursos/[slug]": { slug: string; lessonSlug?: string | undefined };
			"/cursos/[slug]/lecciones": { slug: string; lessonSlug?: string | undefined };
			"/cursos/[slug]/lecciones/[lessonSlug]": { slug: string; lessonSlug: string };
			"/privacidad": Record<string, never>;
			"/proyecto": Record<string, never>
		};
		Pathname(): "/" | "/aviso-legal" | "/cookies" | "/cursos" | `/cursos/${string}` & {} | `/cursos/${string}/lecciones/${string}` & {} | "/privacidad" | "/proyecto";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/fonts/JetBrainsMono-VariableFont_wght.ttf" | "/fonts/JetBrainsMono-VariableFont_wght.woff2" | "/fonts/Poppins-Bold.ttf" | "/fonts/Poppins-Bold.woff2" | "/fonts/Poppins-Medium.ttf" | "/fonts/Poppins-Medium.woff2" | "/fonts/Poppins-Regular.ttf" | "/fonts/Poppins-Regular.woff2" | "/fonts/Sora-VariableFont_wght.ttf" | "/fonts/Sora-VariableFont_wght.woff2" | "/robots.txt" | string & {};
	}
}