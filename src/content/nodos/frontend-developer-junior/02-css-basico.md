---
titulo: "CSS básico: estilos y layout"
slug: "02-css-basico"
roadmap: "frontend-developer-junior"
orden: 2
duracion: "60 min"
video_youtube: "dQw4w9WgXcQ"
skills:
  - CSS
  - Flexbox
  - Grid
  - Responsive design
publicado: true
---

CSS es el lenguaje que convierte una estructura HTML en una interfaz visual. No se trata solo de colores y fuentes: CSS moderno te permite controlar el layout completo de una página, gestionar espacios, responder a distintos tamaños de pantalla y crear experiencias visuales coherentes.

En este nodo aprendes el modelo mental correcto para escribir CSS profesional desde el principio.

## Qué vas a aprender

- El modelo de caja y cómo afecta al espacio que ocupa cada elemento.
- Cómo funciona la cascada, la herencia y la especificidad.
- Flexbox para alinear elementos en una dimensión.
- CSS Grid para layouts en dos dimensiones.
- Variables CSS para mantener consistencia.
- Media queries para diseños responsive.

## El modelo de caja

Cada elemento HTML es una caja rectangular con cuatro capas: `content`, `padding`, `border` y `margin`. Entender este modelo es fundamental para entender por qué los elementos se posicionan como lo hacen.

```css
/* Siempre incluye esto en tu reset */
*, *::before, *::after {
  box-sizing: border-box;
}
```

Con `box-sizing: border-box`, el `padding` y el `border` se incluyen dentro del ancho declarado, lo cual hace los cálculos de layout mucho más predecibles. Sin esto, un elemento de `width: 200px` con `padding: 20px` ocuparía realmente 240px.

## Cascada, herencia y especificidad

CSS aplica estilos en un orden de prioridad. Cuando dos reglas afectan al mismo elemento, gana la de mayor **especificidad**. Si tienen la misma especificidad, gana la que aparece última en el código.

```css
/* Especificidad: 0-0-1 (un elemento) */
p { color: gray; }

/* Especificidad: 0-1-0 (una clase) */
.intro { color: black; }

/* Especificidad: 1-0-0 (un ID) — evitar en CSS de componentes */
#header { color: navy; }
```

En la práctica: usa clases (`.mi-clase`) para casi todo, evita IDs en CSS y nunca uses `!important` como solución permanente.

## Flexbox: una dimensión

Flexbox es el sistema de layout más útil para alinear elementos en una fila o columna. Se activa en el **contenedor padre**:

```css
.nav {
  display: flex;
  align-items: center;       /* alineación en el eje cruzado (vertical si flex-direction: row) */
  justify-content: space-between; /* distribución en el eje principal */
  gap: 1rem;
}

.card-list {
  display: flex;
  flex-wrap: wrap;           /* los elementos saltan a la siguiente fila si no caben */
  gap: 1.5rem;
}

.card-list > .card {
  flex: 1 1 280px;           /* crece, se encoge, con base mínima de 280px */
}
```

**Eje principal vs eje cruzado.** Por defecto `flex-direction: row`, así que el eje principal es horizontal y el cruzado vertical. `justify-content` controla el eje principal; `align-items` controla el cruzado. Cuando cambias a `flex-direction: column`, se invierten.

## CSS Grid: dos dimensiones

Grid es ideal cuando necesitas controlar filas y columnas a la vez. Es el sistema más potente para estructurar layouts de página completos.

```css
/* Layout de página clásico */
.page-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
  min-height: 100dvh;
  gap: 0;
}

.page-header  { grid-area: header; }
.page-sidebar { grid-area: sidebar; }
.page-content { grid-area: content; }
.page-footer  { grid-area: footer; }

/* Grid responsivo sin media queries */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

El truco de `repeat(auto-fit, minmax(280px, 1fr))` crea automáticamente tantas columnas como quepan manteniendo un mínimo de 280px por columna. No necesitas media queries para este comportamiento.

## Variables CSS

Las variables CSS (propiedades personalizadas) son la forma de mantener consistencia en todo tu diseño. Se definen en `:root` y se usan en cualquier lugar:

```css
:root {
  /* Colores */
  --color-texto: #1a1a1a;
  --color-fondo: #f8f7f4;
  --color-primario: #016b70;
  --color-borde: rgba(0, 0, 0, 0.1);

  /* Tipografía */
  --fuente-cuerpo: 'Inter', sans-serif;
  --texto-base: 1rem;       /* 16px */
  --texto-lg: 1.25rem;      /* 20px */
  --texto-xl: 1.5rem;       /* 24px */

  /* Espaciado */
  --espacio-4: 1rem;        /* 16px */
  --espacio-6: 1.5rem;      /* 24px */
  --espacio-8: 2rem;        /* 32px */

  /* Radio */
  --radio-md: 0.5rem;
  --radio-lg: 0.75rem;
}

.btn {
  background: var(--color-primario);
  padding: 0.75rem var(--espacio-6);
  border-radius: var(--radio-md);
  font-size: var(--texto-base);
  color: white;
  border: none;
  cursor: pointer;
}
```

## Responsive design con media queries

El enfoque correcto es **mobile-first**: escribe los estilos base para móvil y luego usa `min-width` para ampliar el diseño en pantallas más grandes.

```css
/* Base: móvil */
.hero {
  padding: 2rem 1rem;
  text-align: center;
}

.hero h1 {
  font-size: 1.75rem;
}

/* Tablet: 768px+ */
@media (min-width: 768px) {
  .hero {
    padding: 4rem 2rem;
    text-align: left;
  }

  .hero h1 {
    font-size: 2.5rem;
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .hero {
    padding: 6rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
  }

  .hero h1 {
    font-size: 3.5rem;
  }
}
```

## Transiciones básicas

Las transiciones hacen las interfaces más naturales. Sólo añádelas a elementos interactivos:

```css
.btn {
  background: var(--color-primario);
  transition: background 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}

.btn:hover {
  background: #014d52;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn:active {
  transform: translateY(0);
  box-shadow: none;
}
```

## Idea clave

CSS parece sencillo al principio y frustrante cuando los elementos no se colocan donde esperas. La frustración desaparece cuando entiendes el modelo de caja, la cascada y los dos sistemas de layout modernos: Flexbox para componentes, Grid para páginas. El resto son detalles que aprendes sobre la marcha.
