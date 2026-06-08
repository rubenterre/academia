---
titulo: "Git y GitHub: flujo de trabajo real"
slug: "04-git-y-github"
roadmap: "frontend-developer-junior"
orden: 4
duracion: "50 min"
video_youtube: "dQw4w9WgXcQ"
skills:
  - Git
  - GitHub
  - Control de versiones
  - Colaboración
publicado: true
---

Git es el sistema de control de versiones que usa prácticamente toda la industria. No es opcional: incluso trabajando solo, Git te protege de perder trabajo, te permite experimentar sin miedo y es la herramienta básica de cualquier equipo de desarrollo.

GitHub es la plataforma más usada para alojar repositorios Git en la nube, colaborar en proyectos y mostrar tu trabajo.

## Qué vas a aprender

- Los conceptos clave: repositorio, commit, rama, merge.
- Los comandos que usarás todos los días.
- Cómo estructurar un flujo de trabajo con ramas.
- Cómo leer y escribir un buen mensaje de commit.
- Cómo usar GitHub para mostrar tus proyectos.

## Cómo funciona Git

Git guarda **instantáneas** del estado de tus ficheros. Cada vez que haces un commit, Git guarda el estado actual del proyecto y lo enlaza con el commit anterior, formando una cadena de cambios.

Esto significa que puedes volver a cualquier punto del historial, ver qué cambio exactamente y por qué.

## Configuración inicial

```bash
# Solo hay que hacerlo una vez
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
git config --global init.defaultBranch main
git config --global core.editor "code --wait"  # VS Code como editor por defecto
```

## Comandos del día a día

```bash
# Iniciar un repositorio en un proyecto existente
git init

# Ver el estado actual: qué ficheros han cambiado
git status

# Añadir ficheros al área de preparación (staging)
git add src/index.html       # un fichero concreto
git add src/                 # todo un directorio
git add .                    # todos los cambios (con cuidado)

# Crear un commit con un mensaje descriptivo
git commit -m "feat: añadir sección de testimonios en la home"

# Ver el historial de commits
git log --oneline

# Ver qué ha cambiado exactamente en los ficheros
git diff
git diff --staged             # cambios que ya están en staging
```

## Ramas: trabajar sin romper lo que funciona

Una rama es una línea paralela de desarrollo. La rama `main` (o `master`) contiene el código estable. Cada nueva funcionalidad o corrección se desarrolla en su propia rama:

```bash
# Crear una rama y cambiarte a ella
git switch -c feature/formulario-contacto

# Ver en qué rama estás y listar todas las ramas
git branch

# Hacer commits en tu rama como de costumbre
git add .
git commit -m "feat: añadir formulario de contacto con validación"

# Volver a main
git switch main

# Fusionar tu rama con main cuando esté lista
git merge feature/formulario-contacto

# Borrar la rama una vez fusionada
git branch -d feature/formulario-contacto
```

## Trabajar con GitHub (remoto)

```bash
# Conectar tu repositorio local con uno de GitHub
git remote add origin https://github.com/tu-usuario/tu-proyecto.git

# Subir tu código a GitHub
git push origin main

# Bajar cambios del remoto (cuando trabajas en equipo o desde otro ordenador)
git pull origin main

# Clonar un repositorio existente
git clone https://github.com/usuario/proyecto.git
```

## El flujo estándar de trabajo

Este es el flujo que seguirás en casi cualquier proyecto o equipo:

```bash
# 1. Asegúrate de estar en main y actualizado
git switch main
git pull origin main

# 2. Crea una rama para la nueva tarea
git switch -c feature/menu-movil

# 3. Trabaja, añade commits frecuentes
git add src/components/nav/
git commit -m "feat: añadir menú móvil con toggle de visibilidad"
git commit -m "fix: corregir z-index del menú sobre el hero"

# 4. Sube la rama a GitHub
git push origin feature/menu-movil

# 5. Abre un Pull Request en GitHub para que sea revisado
# (desde la interfaz web de GitHub)

# 6. Tras la revisión y aprobación, se fusiona con main
# 7. Borra la rama local
git branch -d feature/menu-movil
```

## Buenos mensajes de commit

Un mensaje de commit dice **qué cambia y por qué**, no cómo. El formato más extendido en la industria es **Conventional Commits**:

```
feat: añadir página de detalle de roadmap
fix: corregir alineación del breadcrumb en móvil
docs: actualizar README con instrucciones de instalación
style: formatear ficheros CSS con Prettier
refactor: extraer lógica de filtrado a función separada
chore: actualizar dependencias de desarrollo
```

Prefijos comunes: `feat` (nueva funcionalidad), `fix` (corrección de error), `docs` (documentación), `style` (formato), `refactor` (mejora sin cambio de comportamiento), `chore` (mantenimiento).

```bash
# Evita esto:
git commit -m "cambios"
git commit -m "arreglado"
git commit -m "wip"

# Haz esto:
git commit -m "feat: mostrar badge de nivel en la tarjeta de roadmap"
git commit -m "fix: evitar flash de contenido al cargar el tema oscuro"
```

## El fichero `.gitignore`

Algunos ficheros nunca deben subirse al repositorio: dependencias, variables de entorno, caché de compilación. El `.gitignore` se lo dice a Git:

```gitignore
# Dependencias
node_modules/

# Variables de entorno (NUNCA subir claves o passwords)
.env
.env.local
.env.*.local

# Build
.svelte-kit/
dist/
build/

# Sistema operativo
.DS_Store
Thumbs.db

# Editor
.vscode/settings.json
```

## Idea clave

Git no es una herramienta que aprendes una vez y ya. Es una herramienta que usas cada día y cuyo flujo se vuelve natural con la práctica. Lo esencial para empezar: `git add`, `git commit`, `git push`, `git pull` y ramas. El resto lo aprenderás cuando lo necesites. Y cuando algo salga mal (ocurrirá), la consola de Git casi siempre te dice exactamente qué hacer.
