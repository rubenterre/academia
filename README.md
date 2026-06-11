# Academia — Plataforma de Cursos de Desarrollo Web

[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.57-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://svelte.dev/docs/kit/introduction)
[![Svelte](https://img.shields.io/badge/Svelte-5%20Runes-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://svelte.dev/docs/svelte/overview)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Sass-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![mdsvex](https://img.shields.io/badge/mdsvex-0.12-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://mdsvex.pngwj.com/)
[![Netlify](https://img.shields.io/badge/Netlify-deployed-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)

> Plataforma de aprendizaje online construida con SvelteKit 5, SCSS y contenido en Markdown. Desplegada en Netlify. Sin base de datos: todo el contenido se gestiona como archivos `.md` con frontmatter.

---

## Stack tecnológico

| Herramienta | Versión | Rol |
|---|---|---|
| [![SvelteKit](https://img.shields.io/badge/SvelteKit-^2.57-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://svelte.dev/docs/kit/introduction) | ^2.57 | Framework SSR / SSG |
| [![Svelte](https://img.shields.io/badge/Svelte-^5.55-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://svelte.dev/docs/svelte/overview) | ^5.55 | Componentes con runes |
| [![TypeScript](https://img.shields.io/badge/TypeScript-^6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) | ^6.0 | Tipado estático |
| [![SCSS](https://img.shields.io/badge/SCSS-^1.100-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/) | ^1.100 | Sistema de estilos |
| [![mdsvex](https://img.shields.io/badge/mdsvex-^0.12-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://mdsvex.pngwj.com/) | ^0.12 | Renderizado de Markdown / `.md` como rutas |
| [![Vite](https://img.shields.io/badge/Vite-^8.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/) | ^8.0 | Bundler y servidor de desarrollo |
| [![Netlify Adapter](https://img.shields.io/badge/adapter--netlify-^6.0-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.npmjs.com/package/@sveltejs/adapter-netlify) | ^6.0 | Adaptador de despliegue |
| [![Netlify](https://img.shields.io/badge/Netlify-deployed-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/) | — | Hosting + Edge Functions |

---

## Estructura del proyecto

```
academia/
├── src/
│   ├── content/               # Contenido editorial en Markdown
│   │   ├── cursos/            # Un .md por curso (frontmatter + cuerpo)
│   │   ├── lecciones/         # Subdirectorios por curso, un .md por lección
│   │   │   └── [curso-slug]/
│   │   ├── roadmaps/          # Un .md por roadmap
│   │   └── nodos/             # Subdirectorios por roadmap, un .md por nodo
│   │       └── [roadmap-slug]/
│   ├── lib/
│   │   ├── assets/            # Favicon, iconos SVG, imágenes (avif, png)
│   │   ├── components/        # Componentes Svelte reutilizables
│   │   │   ├── layouts/       # Navbar, Footer
│   │   │   ├── CourseCard.svelte
│   │   │   ├── LessonNav.svelte
│   │   │   ├── LessonPlayer.svelte
│   │   │   ├── RoadmapCard.svelte
│   │   │   ├── RoadmapTree.svelte
│   │   │   ├── BuyMeCoffee.svelte
│   │   │   └── CookieBanner.svelte
│   │   ├── content/           # Loaders de contenido (solo server-side)
│   │   │   ├── cursos.ts
│   │   │   ├── lecciones.ts
│   │   │   ├── roadmaps.ts
│   │   │   └── nodos.ts
│   │   └── stores/
│   │       └── progreso.ts    # Store de progreso del alumno (localStorage)
│   ├── routes/                # Rutas SvelteKit
│   │   ├── +layout.svelte
│   │   ├── +page.svelte / +page.server.ts   # Home
│   │   ├── cursos/
│   │   │   ├── +page.svelte                 # Listado de cursos
│   │   │   └── [slug]/
│   │   │       ├── +page.svelte             # Detalle del curso
│   │   │       └── lecciones/[lessonSlug]/  # Reproductor de lección
│   │   ├── roadmaps/
│   │   │   ├── +page.svelte                 # Listado de roadmaps
│   │   │   └── [slug]/
│   │   │       ├── +page.svelte             # Detalle del roadmap
│   │   │       └── [nodo]/                  # Detalle del nodo
│   │   ├── proyecto/
│   │   ├── aviso-legal/
│   │   ├── privacidad/
│   │   └── cookies/
│   └── styles/                # Sistema de estilos SCSS
│       ├── main.scss
│       ├── _tokens.scss       # Design tokens (colores, espaciado, etc.)
│       ├── _typography.scss
│       ├── _reset.scss
│       ├── _mixins.scss
│       ├── _layout.scss
│       ├── components/        # Estilos por componente
│       └── pages/             # Estilos por página
├── static/
│   ├── fonts/
│   ├── roadmaps/              # Imágenes de roadmaps
│   ├── og-image.jpg
│   └── robots.txt
├── caratulas/                 # Herramienta auxiliar: genera carátulas de cursos
│   ├── generate.js            # Script Node.js (Puppeteer / canvas)
│   ├── template.html
│   ├── data.json
│   └── assets/
├── netlify.toml
├── svelte.config.js
└── vite.config.ts
```

---

## Arquitectura de contenido

Todo el contenido vive en `src/content/` como archivos `.md` con frontmatter YAML. Los loaders en `src/lib/content/*.ts` usan `import.meta.glob` de Vite para leerlos en build time (solo en contexto server: `+page.server.ts`).

### Tipos de contenido

**Curso** (`src/content/cursos/*.md`)
```yaml
---
titulo: "CSS Moderno desde Cero"
slug: css-moderno-desde-cero
descripcion: "..."
nivel: principiante        # principiante | intermedio | avanzado
duracion: "4h 30min"
lecciones: 12
categoria: "CSS"
imagen: "/og-image.jpg"
fecha: "2024-06-01"
publicado: true
destacado: true
---
```

**Lección** (`src/content/lecciones/[curso-slug]/*.md`)
```yaml
---
titulo: "Qué es SvelteKit"
slug: que-es-sveltekit
curso: sveltekit-para-principiantes
orden: 1
duracion: "8min"
video_youtube: "XXXXXXXX"
publicado: true
---
```

**Roadmap** (`src/content/roadmaps/*.md`)
```yaml
---
titulo: "Frontend Developer Junior"
slug: frontend-developer-junior
descripcion: "..."
nivel: principiante
duracion_estimada: "3 meses"
target_role: "Frontend Developer"
publicado: true
destacado: true
nodos: [fundamentos, html-principiantes, css-principiantes, javascript-fundamentos]
---
```

**Nodo** (`src/content/nodos/[roadmap-slug]/*.md`)
```yaml
---
titulo: "Fundamentos"
slug: fundamentos
roadmap: frontend-developer-junior
orden: 1
---
```

---

## Rutas disponibles

| Ruta | Descripción |
|---|---|
| `/` | Home con cursos y roadmaps destacados |
| `/cursos` | Catálogo completo de cursos |
| `/cursos/[slug]` | Detalle del curso con listado de lecciones |
| `/cursos/[slug]/lecciones/[lessonSlug]` | Reproductor de lección con navegación |
| `/roadmaps` | Catálogo de roadmaps de aprendizaje |
| `/roadmaps/[slug]` | Árbol visual del roadmap |
| `/roadmaps/[slug]/[nodo]` | Contenido de un nodo del roadmap |
| `/proyecto` | Página sobre el proyecto |
| `/aviso-legal` | Aviso legal |
| `/privacidad` | Política de privacidad |
| `/cookies` | Política de cookies |

---

## Progreso del alumno

El store `src/lib/stores/progreso.ts` persiste en `localStorage` qué lecciones ha completado el usuario, sin necesidad de autenticación ni base de datos.

---

## Sistema de estilos

Los estilos usan SCSS con una arquitectura modular:

- `_tokens.scss` — Variables globales: colores, tipografía, espaciado, breakpoints.
- `_mixins.scss` — Mixins reutilizables (responsive, flexbox helpers, etc.).
- `_reset.scss` — Reset / normalize base.
- `components/` — Un archivo por componente (`_card.scss`, `_nav.scss`, `_button.scss`…).
- `pages/` — Estilos específicos de página (`_home.scss`, `_cursos.scss`, `_roadmaps.scss`…).

---

## Herramienta de carátulas (`/caratulas`)

Subcarpeta independiente con un script Node.js para generar automáticamente las imágenes de portada de los cursos a partir de `data.json` y una plantilla HTML (`template.html`). Se ejecuta localmente y no forma parte del build de SvelteKit.

---

## Despliegue

El proyecto despliega en **Netlify** con el adaptador oficial de SvelteKit.

```bash
# Build de producción
npm run build

# Previsualización local del build
npm run preview
```

La configuración de cabeceras HTTP (CSP, cache, seguridad) se gestiona en `_headers` y `netlify.toml`.

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo con HMR
npm run dev

# Comprobación de tipos
npm run check

# Formatear código
npm run format
```

> Requiere **Node.js ≥ 18** y **npm ≥ 9**.

---

## Convenciones

- El contenido nuevo se añade creando archivos `.md` con el frontmatter correcto en `src/content/`. No hay CMS externo.
- Los loaders de contenido (`src/lib/content/*.ts`) deben usarse **únicamente** en archivos `+page.server.ts` o `+layout.server.ts`, nunca en el cliente.
- Svelte 5 runes mode activado globalmente (excepto `node_modules`).
- Prettier como único formateador (con plugin para Svelte).

---

## Licencia

MIT — ver [LICENSE](./LICENSE).
