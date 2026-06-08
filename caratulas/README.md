# Carátulas — Academia

> Sistema de generación automática de carátulas en HTML/CSS → PNG vía Puppeteer.

## Estructura de archivos

```
caatulas/
├── template.html          ← Plantilla visual (edita aquí el diseño)
├── data.json              ← Lista de clases del curso
├── generate.js            ← Generador Puppeteer
├── package.json           ← Dependencias (puppeteer)
├── assets/
│   ├── fondos/            ← Imágenes de fondo por curso (.jpg / .png)
│   └── logos/             ← Logos de tecnologías (.svg / .png)
└── output/                ← PNGs generados (añadir a .gitignore)
```

## Instalación (solo la primera vez)

```bash
cd caratulas
npm install
```

---

## Generar carátulas

**Todas las clases:**
```bash
node generate.js
```

**Solo una clase:**
```bash
node generate.js clase-03.png
```

Los PNGs aparecen en `output/` a **1280×720 @ deviceScaleFactor 2** (2560×1440 reales — alta calidad para YouTube).

---

## Cómo funciona el generador

El script `generate.js` lee `template.html` y para cada entrada de `data.json`:

1. **Imagen de fondo** — convierte el archivo `bgImage` a un `data:URI` base64 y lo inyecta en la capa 3 del bloque `.bg` del CSS, sustituyendo el path relativo original.
2. **Logos de tecnologías** — convierte cada path de `tags[]` a `data:URI` base64 y reconstruye el bloque `.tag-wrap` con los `<img>` correspondientes.
3. **Título** — reconstruye el bloque `.title-block` con las líneas y colores definidos en el JSON.
4. Pasa el HTML resultante a Puppeteer con `setContent()` (sin necesitar acceso a disco en tiempo de render, gracias a los data URIs).
5. Captura un screenshot y lo guarda en `output/`.

> ⚠️ Si un asset no existe en disco, el generador muestra un aviso `⚠️ Asset no encontrado` en consola pero **continúa** generando el resto de carátulas.

---

## Esquema de `data.json`

Cada entrada del array representa una clase:

```jsonc
{
  "output":     "clase-01.png",          // nombre del PNG de salida
  "lesson":     "Clase 01",              // etiqueta de lección (reservado)
  "title":      ["Intro al", "Curso"],   // líneas del título
  "titleColor": ["white",   "green"],    // color por línea: "white" | "green"
  "bgImage":    "./assets/fondos/frontend-junior.jpg",  // imagen de fondo
  "tags":       ["./assets/logos/html5_icon.svg"]       // logos de tecnologías
}
```

### Campos detallados

| Campo | Tipo | Descripción |
|---|---|---|
| `output` | `string` | Nombre del archivo PNG generado en `output/` |
| `lesson` | `string` | Etiqueta de lección (reservado para uso futuro) |
| `title` | `string[]` | Una entrada por línea del título. Cada línea es un `<span class="title-line">` |
| `titleColor` | `string[]` | Color de cada línea: `"white"` o `"green"`. Debe tener la misma longitud que `title` |
| `bgImage` | `string` | Path relativo a la imagen de fondo de la carátula. Se inyecta en la capa 3 del `.bg` |
| `tags` | `string[]` | Array de paths a logos SVG/PNG. Se muestran apilados en el `.tag-wrap` |

### Ejemplo con dos tecnologías

```json
{
  "output": "clase-08.png",
  "lesson": "Clase 08",
  "title": ["DOM y", "Selectores"],
  "titleColor": ["white", "green"],
  "bgImage": "./assets/fondos/frontend-junior.jpg",
  "tags": [
    "./assets/logos/html5_icon.svg",
    "./assets/logos/javascript_icon.svg"
  ]
}
```

---

## Assets disponibles

### Fondos (`assets/fondos/`)

| Archivo | Curso |
|---|---|
| `frontend-junior.jpg` | Frontend Developer Junior |

### Logos (`assets/logos/`)

| Archivo | Tecnología |
|---|---|
| `html5_icon.svg` | HTML5 |
| `css_icon.svg` | CSS3 |
| `javascript_icon.svg` | JavaScript |
| `Ruben_Terre_Logo_caratulas.svg` | Logo de marca (footer) |

---

## Personalizar el diseño

Todo el diseño visual se controla desde `template.html`. El generador solo modifica:
- El contenido del bloque `.title-block`
- El contenido del bloque `.tag-wrap`
- El `url(...)` de la imagen de fondo en `.bg`

El resto de la plantilla (tipografía, colores, decoraciones, footer, logo de marca) se mantiene intacto tal como lo definas en el HTML/CSS.

### Flujo de trabajo recomendado

1. Abre `template.html` directamente en el navegador para previsualizar y ajustar el diseño
2. Cuando el diseño esté listo, edita `data.json` con los títulos del curso
3. Ejecuta `node generate.js` → PNGs listos en `output/`

---

## .gitignore recomendado

Los PNGs generados no deben versionarse — se regeneran con el script:

```gitignore
caatulas/output/
caatulas/node_modules/
```

Los assets fuente (`assets/fondos/`, `assets/logos/`) **sí** deben versionarse.

---

## Tipografías usadas

| Rol | Familia | Token del sistema |
|---|---|---|
| Display (títulos) | Sora 900 | `--font-display` |
| UI / body | Poppins | `--font-body` |
| Acento principal | — | `#28e98c` (`--color-primary`) |
