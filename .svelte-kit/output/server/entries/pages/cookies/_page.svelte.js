import { H as escape_html, a as ensure_array_like, n as attr_class, o as head } from "../../../chunks/dev.js";
//#region src/routes/cookies/+page.svelte
function _page($$renderer) {
	const web = "https://academia.rubenterre.me";
	const cookies = [
		{
			nombre: "session",
			proveedor: web,
			finalidad: "Mantiene la sesión autenticada del usuario mientras navega por el sitio.",
			duracion: "Sesión (se elimina al cerrar el navegador)",
			tipo: "Propia"
		},
		{
			nombre: "pb_auth",
			proveedor: web,
			finalidad: "Almacena el token de autenticación de PocketBase para mantener al usuario conectado entre visitas.",
			duracion: "7 días",
			tipo: "Propia"
		},
		{
			nombre: "csrf_token",
			proveedor: web,
			finalidad: "Protege los formularios contra ataques de falsificación de solicitudes entre sitios (CSRF).",
			duracion: "Sesión",
			tipo: "Propia"
		},
		{
			nombre: "__stripe_mid",
			proveedor: "stripe.com",
			finalidad: "Necesaria para el procesamiento seguro de pagos a través de Stripe. Permite detectar y prevenir el fraude en las transacciones.",
			duracion: "1 año",
			tipo: "Terceros (Stripe)"
		},
		{
			nombre: "__stripe_sid",
			proveedor: "stripe.com",
			finalidad: "Identifica la sesión de pago activa en Stripe para completar el proceso de compra de forma segura.",
			duracion: "Sesión",
			tipo: "Terceros (Stripe)"
		}
	];
	head("yiqd0o", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Política de Cookies — Academia Rubén Terre</title>`);
		});
		$$renderer.push(`<meta name="description" content="Información sobre las cookies utilizadas en Academia Rubén Terre. Solo usamos cookies estrictamente necesarias."/> <meta name="robots" content="noindex, follow"/>`);
	});
	$$renderer.push(`<main class="legal-page"><div class="legal-page__container"><header class="legal-header"><p class="legal-header__tag">Información legal</p> <h1 class="legal-header__title">Política de Cookies</h1> <p class="legal-header__meta">Última actualización: <time datetime="2026-06-05">5 de junio de 2026</time></p></header> <div class="legal-body"><section class="legal-section"><h2 class="legal-section__title">1. ¿Qué son las cookies?</h2> <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando este los visita. Su función principal es recordar información entre páginas o entre visitas, lo que permite que el sitio funcione correctamente y ofrezca una experiencia coherente.</p> <p>La normativa aplicable a las cookies en España es el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), en concordancia con el Reglamento (UE) 2016/679 (RGPD) y las directrices de la Agencia Española de Protección de Datos (AEPD).</p></section> <section class="legal-section"><h2 class="legal-section__title">2. Cookies que utilizamos</h2> <p>Este sitio web <strong>únicamente utiliza cookies estrictamente necesarias</strong> para su correcto funcionamiento. No empleamos cookies de analítica, publicidad ni rastreo de ningún tipo. Las cookies estrictamente necesarias quedan exentas del requisito de consentimiento previo conforme al art. 22.2 LSSICE y las directrices de la AEPD.</p></section> <section class="legal-section"><h2 class="legal-section__title">3. Detalle de las cookies utilizadas</h2> <p>A continuación se relacionan todas las cookies presentes en el sitio, su origen, finalidad y período de vigencia:</p> <div class="cookies-table-wrap"><table class="cookies-table"><thead><tr><th scope="col">Cookie</th><th scope="col">Proveedor</th><th scope="col">Finalidad</th><th scope="col">Duración</th><th scope="col">Tipo</th></tr></thead><tbody><!--[-->`);
	const each_array = ensure_array_like(cookies);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let cookie = each_array[$$index];
		$$renderer.push(`<tr><td><code class="cookies-code">${escape_html(cookie.nombre)}</code></td><td class="cookies-table__muted">${escape_html(cookie.proveedor)}</td><td>${escape_html(cookie.finalidad)}</td><td class="cookies-table__muted">${escape_html(cookie.duracion)}</td><td><span${attr_class(`cookies-badge ${cookie.tipo.startsWith("Terceros") ? "cookies-badge--terceros" : "cookies-badge--propia"}`)}>${escape_html(cookie.tipo)}</span></td></tr>`);
	}
	$$renderer.push(`<!--]--></tbody></table></div> <ul class="cookies-cards"><!--[-->`);
	const each_array_1 = ensure_array_like(cookies);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let cookie = each_array_1[$$index_1];
		$$renderer.push(`<li class="cookies-card"><div class="cookies-card__head"><code class="cookies-code">${escape_html(cookie.nombre)}</code> <span${attr_class(`cookies-badge ${cookie.tipo.startsWith("Terceros") ? "cookies-badge--terceros" : "cookies-badge--propia"}`)}>${escape_html(cookie.tipo)}</span></div> <p class="cookies-card__finalidad">${escape_html(cookie.finalidad)}</p> <dl class="cookies-card__meta"><div><dt>Proveedor</dt> <dd>${escape_html(cookie.proveedor)}</dd></div> <div><dt>Duración</dt> <dd>${escape_html(cookie.duracion)}</dd></div></dl></li>`);
	}
	$$renderer.push(`<!--]--></ul></section> <section class="legal-section"><h2 class="legal-section__title">4. Cookies de terceros (Stripe)</h2> <p>Las cookies de Stripe se instalan exclusivamente durante el proceso de pago y son imprescindibles para garantizar la seguridad de la transacción y el cumplimiento de la normativa PCI-DSS. Stripe actúa como encargado del tratamiento bajo un acuerdo de procesamiento de datos conforme al RGPD. Puedes consultar su política de privacidad en <a href="https://stripe.com/es/privacy" class="legal-link" target="_blank" rel="noopener noreferrer">stripe.com/es/privacy</a>.</p></section> <section class="legal-section"><h2 class="legal-section__title">5. Cómo gestionar o eliminar las cookies</h2> <p>Dado que únicamente utilizamos cookies estrictamente necesarias, no existe un panel de preferencias de cookies en este sitio. No obstante, puedes gestionar, bloquear o eliminar las cookies directamente desde la configuración de tu navegador:</p> <ul class="legal-list"><li><a href="https://support.google.com/chrome/answer/95647" class="legal-link" target="_blank" rel="noopener noreferrer">Google Chrome</a></li> <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" class="legal-link" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li> <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" class="legal-link" target="_blank" rel="noopener noreferrer">Safari</a></li> <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" class="legal-link" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li></ul> <p>Ten en cuenta que deshabilitar las cookies estrictamente necesarias puede impedir el correcto funcionamiento del sitio web, incluyendo el inicio de sesión y el proceso de pago.</p></section> <section class="legal-section"><h2 class="legal-section__title">6. Actualizaciones de esta política</h2> <p>Podemos actualizar esta Política de Cookies si cambian las tecnologías que utilizamos o la normativa aplicable. Cualquier modificación relevante se reflejará en la fecha de actualización que figura al inicio de este documento. Te recomendamos revisarla periódicamente.</p></section> <aside class="legal-contact"><div class="legal-contact__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"></path></svg></div> <div class="legal-contact__body"><p class="legal-contact__title">¿Tienes dudas sobre las cookies?</p> <p class="legal-contact__desc">Escríbenos a <a href="mailto:info@rubenterre.com" class="legal-link">info@rubenterre.com</a> y te aclaramos cualquier pregunta sobre el uso de cookies en este sitio.</p></div></aside></div></div></main>`);
}
//#endregion
export { _page as default };
