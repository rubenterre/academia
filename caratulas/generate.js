#!/usr/bin/env node
/**
 * Generador automático de carátulas
 * ------------------------------------
 * Uso:
 *   node generate.js               → genera todas las entradas de data.json
 *   node generate.js clase-03.png  → genera solo esa entrada
 *
 * Requisitos (instalar una vez dentro de caratulas/):
 *   npm install
 *
 * Salida: carpeta output/ (se crea automáticamente)
 *
 * Campos de data.json:
 *   output     {string}   nombre del archivo PNG de salida
 *   lesson     {string}   etiqueta de lección (no se muestra en plantilla actual, reservado)
 *   title      {string[]} líneas del título
 *   titleColor {string[]} 'white' | 'green' por cada línea de título
 *   bgImage    {string}   ruta relativa a assets/ de la imagen de fondo (.jpg/.png)
 *   tags       {string[]} rutas relativas a assets/ de los logos SVG/PNG del .tag-wrap
 */

import puppeteer from 'puppeteer';
import { readFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dir    = dirname(fileURLToPath(import.meta.url));
const OUT_DIR  = resolve(__dir, 'output');
const TEMPLATE = resolve(__dir, 'template.html');
const DATA     = JSON.parse(readFileSync(resolve(__dir, 'data.json'), 'utf8'));

// Filtro opcional por nombre de archivo (argumento CLI)
const filter = process.argv[2] || null;
const queue  = filter ? DATA.filter(d => d.output === filter) : DATA;

if (!queue.length) {
  console.error(`\u274c  No se encontró ninguna entrada${filter ? ` con output "${filter}"` : ''}.`);
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });

// ── Convierte un archivo local a data URI base64 ──
function toDataURI(relPath) {
  const absPath = resolve(__dir, relPath);
  if (!existsSync(absPath)) {
    console.warn(`  ⚠️  Asset no encontrado: ${relPath}`);
    return '';
  }
  const ext  = extname(absPath).toLowerCase().slice(1);
  const mime = {
    svg:  'image/svg+xml',
    jpg:  'image/jpeg',
    jpeg: 'image/jpeg',
    png:  'image/png',
    webp: 'image/webp',
  }[ext] || 'application/octet-stream';
  const b64 = readFileSync(absPath).toString('base64');
  return `data:${mime};base64,${b64}`;
}

// ── Construye el HTML final para una entrada del JSON ──
function buildHTML(entry) {
  let html = readFileSync(TEMPLATE, 'utf8');

  // 1. IMAGEN DE FONDO — sustituye la URL en la capa 3 del .bg
  //    Busca url(...) que corresponda a la imagen de fondo (la última url() en .bg)
  if (entry.bgImage) {
    const bgDataURI = toDataURI(entry.bgImage);
    if (bgDataURI) {
      // Reemplaza el path relativo de la imagen de fondo dentro del bloque .bg
      // Soporta comillas simples, dobles o sin comillas
      html = html.replace(
        /(url\()(['"]?)(\.\/.+?\.(jpg|jpeg|png|webp))\2(\)\s*center)/,
        `$1'${bgDataURI}'$5`
      );
    }
  }

  // 2. LÍNEAS DE TÍTULO — reconstruye el .title-block completo
  if (entry.title && entry.title.length) {
    const lines = entry.title.map((text, i) => {
      const cls = (entry.titleColor?.[i]) || 'white';
      return `      <span class="title-line ${cls}">${text}</span>`;
    }).join('\n');

    html = html.replace(
      /<div class="title-block">[\s\S]*?<\/div>/,
      `<div class="title-block">\n${lines}\n    </div>`
    );
  }

  // 3. LOGOS / TAGS — reconstruye el .tag-wrap con las imágenes del JSON
  if (entry.tags && entry.tags.length) {
    const imgTags = entry.tags.map(src => {
      const dataURI = toDataURI(src);
      const srcAttr = dataURI || src; // fallback al path si no existe
      return `      <img class="tag" src="${srcAttr}" alt="">`;
    }).join('\n');

    html = html.replace(
      /<div class="tag-wrap">[\s\S]*?<\/div>/,
      `<div class="tag-wrap">\n${imgTags}\n    </div>`
    );
  }

  return html;
}

async function run() {
  console.log(`\n🚀  Iniciando Puppeteer — ${queue.length} carátula(s) a generar\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const entry of queue) {
    const page = await browser.newPage();

    // Viewport 1280×720 con deviceScaleFactor 2 → PNG final 2560×1440
    await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });

    // Inyecta el HTML como contenido directo
    // Las imágenes van embebidas como data URI, así que no necesita baseURL
    await page.setContent(buildHTML(entry), {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    const outPath = resolve(OUT_DIR, entry.output);
    await page.screenshot({
      path: outPath,
      type: 'png',
      clip: { x: 0, y: 0, width: 1280, height: 720 }
    });

    console.log(`  ✅  ${entry.lesson.padEnd(10)} → output/${entry.output}`);
    await page.close();
  }

  await browser.close();
  console.log(`\n🎉  Listo. PNGs en caratulas/output/\n`);
}

run().catch(err => {
  console.error('\n❌  Error:\n', err.message);
  process.exit(1);
});
