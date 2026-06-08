---
titulo: "HTML semántico"
slug: "01-html-semantico"
roadmap: "frontend-developer-junior"
orden: 1
duracion: "45 min"
video_youtube: "dQw4w9WgXcQ"
skills:
  - HTML
  - Semántica
  - Accesibilidad
  - SEO básico
publicado: true
---

HTML semántico es la base de cualquier interfaz web bien estructurada. Antes de pensar en estilos o JavaScript, necesitas entender cómo representar correctamente el contenido y la jerarquía de una página.

Usar las etiquetas correctas no es solo cuestión de orden: afecta directamente a la accesibilidad (lectores de pantalla), al SEO (cómo los buscadores entienden tu página) y a la mantenibilidad del código.

## Qué vas a aprender

- Qué significa que una etiqueta sea semántica y por qué importa.
- Cuándo usar `header`, `main`, `section`, `article`, `nav`, `aside` y `footer`.
- Cómo estructurar correctamente encabezados con `h1`–`h6`.
- Qué elementos usar para textos, listas, formularios y multimedia.
- Cómo mejorar accesibilidad con `alt`, `aria-label` y roles implícitos.
- Por qué `div` y `span` son el último recurso, no el primero.

## La diferencia entre `<div>` y HTML semántico

Cualquier página puede construirse solo con `<div>`. De hecho, muchos proyectos lo hacen. Pero un `<div>` no dice nada sobre su contenido: no le dice al navegador si es navegación, si es el contenido principal o si es un artículo independiente.

Cuando usas `<nav>`, el navegador y los lectores de pantalla entienden que ese bloque es navegación. Cuando usas `<main>`, los usuarios con tecnologías de asistencia pueden saltar directamente al contenido principal. Cuando usas `<article>`, el contenido tiene sentido por sí solo fuera de contexto.

La semántica es comunicación: entre tu código, el navegador y el usuario.

## Estructura base de una página bien construida

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Título descriptivo de la página</title>
  <meta name="description" content="Resumen de 150–160 caracteres para SEO." />
</head>
<body>

  <header>
    <a href="/" aria-label="Ir a inicio">Mi sitio</a>
    <nav aria-label="Navegación principal">
      <ul>
        <li><a href="/sobre-mi">Sobre mí</a></li>
        <li><a href="/proyectos">Proyectos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section aria-labelledby="intro-title">
      <h1 id="intro-title">Bienvenido a mi portafolio</h1>
      <p>Desarrollador frontend apasionado por las interfaces limpias.</p>
    </section>

    <section aria-labelledby="proyectos-title">
      <h2 id="proyectos-title">Proyectos destacados</h2>

      <article>
        <h3>Proyecto Alpha</h3>
        <p>Descripción del proyecto.</p>
      </article>

      <article>
        <h3>Proyecto Beta</h3>
        <p>Descripción del proyecto.</p>
      </article>
    </section>
  </main>

  <aside aria-label="Información adicional">
    <h2>Tecnologías que uso</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </aside>

  <footer>
    <p><small>&copy; 2026 Mi sitio. Todos los derechos reservados.</small></p>
  </footer>

</body>
</html>
```

## Reglas que marcan la diferencia

**Una sola `<h1>` por página.** El `h1` es el título principal del documento. Si tienes varios, los buscadores y lectores de pantalla se confunden. Los subtítulos van en `h2`, los apartados dentro de esos subtítulos en `h3`, y así sucesivamente sin saltarte niveles.

**`<section>` agrupa contenido temático; `<article>` es contenido independiente.** Un artículo de blog es un `<article>` porque tiene sentido leído solo. Una sección de "Nuestros servicios" dentro de la home es un `<section>` porque depende del contexto de la página.

**`<header>` y `<footer>` no son exclusivos del documento.** Pueden aparecer dentro de un `<article>` o `<section>` para indicar la cabecera o pie de ese bloque concreto.

**Siempre pon `alt` en las imágenes.** Si la imagen transmite información, el `alt` describe esa información. Si es decorativa, `alt=""` vacío indica a los lectores de pantalla que la ignoren.

```html
<!-- Imagen informativa -->
<img src="grafica-ventas.png" alt="Gráfica de ventas del Q1 2026: crecimiento del 32%" />

<!-- Imagen decorativa -->
<img src="patron-fondo.svg" alt="" aria-hidden="true" />
```

## Formularios accesibles desde el principio

Un formulario sin `<label>` es inaccesible. La relación entre etiqueta y campo debe ser explícita:

```html
<form>
  <div>
    <label for="email">Correo electrónico</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="tu@correo.com"
      autocomplete="email"
      required
    />
  </div>

  <fieldset>
    <legend>Tipo de consulta</legend>
    <label><input type="radio" name="tipo" value="general" /> General</label>
    <label><input type="radio" name="tipo" value="soporte" /> Soporte</label>
  </fieldset>

  <button type="submit">Enviar mensaje</button>
</form>
```

## Idea clave

Una web profesional no empieza por el color ni por las animaciones. Empieza por una estructura limpia, entendible y mantenible. Si el HTML está bien, el CSS y el JavaScript tienen una base sólida sobre la que trabajar. Si el HTML es un laberinto de `<div>`, todo lo que construyas encima hereda ese caos.

Hazte esta pregunta antes de escribir cualquier etiqueta: **¿expresa esta etiqueta lo que es este contenido, o solo cómo quiero que se vea?** Si la respuesta es lo segundo, busca una etiqueta mejor.
