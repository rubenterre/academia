---
titulo: "JavaScript: fundamentos reales"
slug: "03-javascript-fundamentos"
roadmap: "frontend-developer-junior"
orden: 3
duracion: "75 min"
video_youtube: "dQw4w9WgXcQ"
skills:
  - JavaScript
  - DOM
  - Eventos
  - Async/await
publicado: true
---

JavaScript es el lenguaje que da comportamiento a las interfaces. Con HTML defines la estructura, con CSS defines la apariencia y con JavaScript defines lo que ocurre cuando el usuario interactúa con la página.

Este nodo no cubre la sintaxis completa del lenguaje, sino los conceptos que más impacto tienen en el trabajo cotidiano de un developer frontend junior.

## Qué vas a aprender

- Variables, tipos de datos y estructuras básicas.
- Funciones, arrow functions y el concepto de scope.
- Cómo manipular el DOM para cambiar la interfaz.
- Eventos: cómo responder a las acciones del usuario.
- Arrays y objetos: los contenedores de datos más usados.
- Asincronía: cómo hacer peticiones a una API con `fetch` y `async/await`.

## Variables: `const`, `let` y por qué olvidar `var`

```js
// const: para valores que no van a reasignarse
const nombre = 'Rubén';
const API_URL = 'https://api.ejemplo.com';

// let: para valores que pueden cambiar
let contador = 0;
countador += 1;

// var: no usar. Tiene comportamiento confuso de hoisting y scope de función.
// En JS moderno, const y let lo cubren todo.
```

Regla práctica: empieza siempre con `const`. Si necesitas reasignar el valor, cámbialo a `let`. Nunca uses `var`.

## Funciones

```js
// Declaración clásica
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// Arrow function (la más usada en código moderno)
const saludar = (nombre) => `Hola, ${nombre}`;

// Con múltiples líneas
const calcularPrecioFinal = (precio, descuento) => {
  const ahorro = precio * (descuento / 100);
  return precio - ahorro;
};

console.log(calcularPrecioFinal(100, 20)); // 80
```

Las arrow functions son la forma más habitual en código moderno y en frameworks como Svelte o React. La diferencia principal con las funciones clásicas es el comportamiento de `this`, que en las arrow functions hereda del contexto donde se definen.

## Arrays y sus métodos esenciales

Los arrays son listas ordenadas. Sus métodos funcionales son los que más usarás como frontend:

```js
const cursos = [
  { id: 1, titulo: 'HTML semántico', nivel: 'principiante', duracion: 45 },
  { id: 2, titulo: 'CSS Grid',       nivel: 'principiante', duracion: 60 },
  { id: 3, titulo: 'JavaScript',     nivel: 'intermedio',   duracion: 90 },
  { id: 4, titulo: 'SvelteKit',      nivel: 'intermedio',   duracion: 120 }
];

// filter: devuelve los elementos que cumplen la condición
const paraEmpezar = cursos.filter(c => c.nivel === 'principiante');
// [{ id:1, ... }, { id:2, ... }]

// map: transforma cada elemento y devuelve un nuevo array
const titulos = cursos.map(c => c.titulo);
// ['HTML semántico', 'CSS Grid', 'JavaScript', 'SvelteKit']

// find: devuelve el primer elemento que cumple la condición
const svelte = cursos.find(c => c.titulo === 'SvelteKit');

// reduce: acumula un valor a partir de todos los elementos
const duracionTotal = cursos.reduce((acc, c) => acc + c.duracion, 0);
// 315 minutos

// sort: ordena (modifica el array original, cuidado)
const porDuracion = [...cursos].sort((a, b) => a.duracion - b.duracion);
```

Nota el `[...cursos]` antes de `sort`: es el spread operator, que crea una copia del array para no modificar el original.

## Objetos

```js
const usuario = {
  id: 'usr_01',
  nombre: 'Ana García',
  email: 'ana@ejemplo.com',
  rol: 'estudiante',
  cursosCompletados: ['html-semantico', 'css-basico']
};

// Acceso por punto
console.log(usuario.nombre); // 'Ana García'

// Destructuring: extraer propiedades en variables
const { nombre, email, rol } = usuario;

// Spread para copiar y modificar sin mutar el original
const usuarioActualizado = {
  ...usuario,
  rol: 'instructor',
  cursosCompletados: [...usuario.cursosCompletados, 'javascript']
};
```

## Manipulación del DOM

El DOM (Document Object Model) es la representación del HTML como un árbol de objetos que JavaScript puede leer y modificar:

```js
// Seleccionar elementos
const boton = document.querySelector('#btn-enviar');       // por selector CSS
const inputs = document.querySelectorAll('.form__input');  // devuelve NodeList

// Leer y modificar contenido
const titulo = document.querySelector('h1');
titulo.textContent = 'Nuevo título';       // solo texto
titulo.innerHTML = 'Título con <em>énfasis</em>'; // HTML (con cuidado)

// Modificar clases
const tarjeta = document.querySelector('.card');
tarjeta.classList.add('card--activa');
tarjeta.classList.remove('card--oculta');
tarjeta.classList.toggle('card--expandida'); // añade si no la tiene, quita si la tiene

// Crear y añadir elementos
const nuevoItem = document.createElement('li');
nuevoItem.textContent = 'Nuevo elemento';
nuevoItem.classList.add('lista__item');
document.querySelector('.lista').appendChild(nuevoItem);
```

## Eventos

Los eventos son la forma de responder a lo que hace el usuario:

```js
const boton = document.querySelector('#btn-enviar');

// Añadir listener
boton.addEventListener('click', (evento) => {
  console.log('Clic detectado', evento);
});

// Evento de formulario
const formulario = document.querySelector('#contacto');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // evita que la página se recargue

  const datos = new FormData(formulario);
  const nombre = datos.get('nombre');
  const email  = datos.get('email');

  console.log({ nombre, email });
});

// Delegación de eventos: un solo listener para muchos hijos
const lista = document.querySelector('.lista-cursos');
lista.addEventListener('click', (evento) => {
  const item = evento.target.closest('.lista-cursos__item');
  if (!item) return;
  item.classList.toggle('completado');
});
```

La delegación de eventos es especialmente útil cuando los elementos se crean dinámicamente: pones el listener en el padre y detectas qué hijo fue clicado con `closest()`.

## Async/await y fetch

La mayoría de aplicaciones frontend necesitan obtener datos de una API externa. `fetch` hace la petición HTTP; `async/await` hace que el código asíncrono sea legible:

```js
// Petición básica
const obtenerCursos = async () => {
  try {
    const respuesta = await fetch('https://api.ejemplo.com/cursos');

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const cursos = await respuesta.json();
    return cursos;

  } catch (error) {
    console.error('No se pudieron cargar los cursos:', error);
    return [];
  }
};

// Uso
const cursos = await obtenerCursos();
cursos.forEach(curso => {
  console.log(curso.titulo);
});

// POST: enviar datos
const crearUsuario = async (datos) => {
  const respuesta = await fetch('https://api.ejemplo.com/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });

  return respuesta.json();
};
```

Siempre envuelve los `await` en `try/catch`. Las peticiones pueden fallar por red, por errores del servidor o por datos mal formateados, y necesitas manejar esos casos.

## Idea clave

No intentes aprender JavaScript de memoria. Aprende a leer código, a buscar en MDN y a depurar con la consola del navegador. Los métodos de array (`map`, `filter`, `reduce`), la manipulación del DOM y el manejo de peticiones asíncronas son el 80% de lo que usarás en el día a día. El resto lo aprenderás cuando lo necesites.
