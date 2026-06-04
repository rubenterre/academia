
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
		RouteId(): "/" | "/cursos" | "/cursos/[slug]";
		RouteParams(): {
			"/cursos/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string | undefined };
			"/cursos": { slug?: string | undefined };
			"/cursos/[slug]": { slug: string }
		};
		Pathname(): "/" | "/cursos" | `/cursos/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/fonts/JetBrainsMono-VariableFont_wght.ttf" | "/fonts/JetBrainsMono-VariableFont_wght.woff2" | "/fonts/Poppins-Bold.ttf" | "/fonts/Poppins-Bold.woff2" | "/fonts/Poppins-Medium.ttf" | "/fonts/Poppins-Medium.woff2" | "/fonts/Poppins-Regular.ttf" | "/fonts/Poppins-Regular.woff2" | "/fonts/Sora-VariableFont_wght.ttf" | "/fonts/Sora-VariableFont_wght.woff2" | "/robots.txt" | string & {};
	}
}