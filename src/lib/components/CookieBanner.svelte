<script>
  import { onMount } from 'svelte';

  let visible = $state(false);

  onMount(() => {
    // Solo mostramos el banner si el usuario no ha aceptado antes
    const accepted = localStorage.getItem('cookies_accepted');
    if (!accepted) {
      // Pequeño delay para que no aparezca en el primer render
      setTimeout(() => (visible = true), 300);
    }
  });

  function accept() {
    localStorage.setItem('cookies_accepted', 'true');
    visible = false;
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && visible) {
      accept();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if visible}
  <!-- Backdrop -->
  <div
    class="cookie-backdrop"
    aria-hidden="true"
    onclick={accept}
  ></div>

  <!-- Modal -->
  <div
    class="cookie-modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="cookie-title"
    aria-describedby="cookie-desc"
  >
    <div class="cookie-modal__icon" aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.1"/>
        <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="1.5"/>
        <!-- Cookie shape -->
        <circle cx="11" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="19" cy="10" r="1" fill="currentColor"/>
        <circle cx="21" cy="18" r="1.5" fill="currentColor"/>
        <circle cx="13" cy="20" r="1" fill="currentColor"/>
        <circle cx="17" cy="15" r="1" fill="currentColor"/>
        <!-- Bite mark -->
        <path d="M22 12 Q26 10 24 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      </svg>
    </div>

    <div class="cookie-modal__content">
      <h2 id="cookie-title" class="cookie-modal__title">Uso de cookies</h2>

      <p id="cookie-desc" class="cookie-modal__body">
        Esta web utiliza únicamente <strong>cookies técnicas esenciales</strong> para su correcto 
        funcionamiento: gestión de sesión y preferencias básicas. No utilizamos cookies 
        de análisis, publicidad ni rastreo de terceros.
      </p>

      <p class="cookie-modal__body cookie-modal__body--muted">
        De acuerdo con el <abbr title="Reglamento General de Protección de Datos">RGPD</abbr> 
        y la directiva ePrivacy (UE), las cookies estrictamente necesarias no requieren 
        tu consentimiento, aunque queremos informarte de su uso.
      </p>

      <div class="cookie-modal__actions">
        <a
          href="/privacidad"
          class="cookie-modal__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de privacidad
        </a>
        <button class="cookie-modal__btn" onclick={accept}>
          Entendido
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  /* ── Backdrop ───────────────────────────────── */
  .cookie-backdrop {
    position: fixed;
    inset: 0;
    background: oklch(0.1 0.01 80 / 0.45);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    z-index: 999;
    animation: fade-in 250ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  /* ── Modal ──────────────────────────────────── */
  .cookie-modal {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    display: flex;
    align-items: flex-start;
    gap: var(--space-4, 1rem);

   /*  width: min(480px, calc(100vw - var(--space-8, 2rem))); */
    width: 90%;
    background: var(--color-surface, #f9f8f5);
    border: 1px solid oklch(from var(--color-text, #28251d) l c h / 0.10);
    border-radius: var(--radius-xl, 1rem);
    padding: var(--space-6, 1.5rem);
    box-shadow:
      0 2px 8px oklch(0.2 0.01 80 / 0.08),
      0 16px 48px oklch(0.2 0.01 80 / 0.14);

    animation: slide-up 350ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  /* ── Icon ───────────────────────────────────── */
  .cookie-modal__icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary, #01696f);
    margin-top: 2px;
  }

  /* ── Content ────────────────────────────────── */
  .cookie-modal__content {
    flex: 1;
    min-width: 0;
  }

  .cookie-modal__title {
    font-family: var(--font-body, sans-serif);
    font-size: var(--text-base, 1rem);
    font-weight: 600;
    color: var(--color-text, #28251d);
    line-height: 1.3;
    margin-bottom: var(--space-3, 0.75rem);
  }

  .cookie-modal__body {
    font-size: var(--text-sm, 0.875rem);
    color: var(--color-text-muted, #7a7974);
    line-height: 1.6;
    margin-bottom: var(--space-3, 0.75rem);
    max-width: unset;
  }

  .cookie-modal__body--muted {
    font-size: var(--text-xs, 0.8125rem);
    color: var(--color-text-faint, #bab9b4);
    margin-bottom: var(--space-4, 1rem);
  }

  .cookie-modal__body strong {
    color: var(--color-text, #28251d);
    font-weight: 500;
  }

  /* ── Actions ────────────────────────────────── */
  .cookie-modal__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3, 0.75rem);
    flex-wrap: wrap;
  }

  .cookie-modal__link {
    font-size: var(--text-xs, 0.8125rem);
    color: var(--color-primary, #01696f);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: oklch(from var(--color-primary, #01696f) l c h / 0.4);
    transition:
      color 180ms cubic-bezier(0.16, 1, 0.3, 1),
      text-decoration-color 180ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cookie-modal__link:hover {
    color: var(--color-primary-hover, #0c4e54);
    text-decoration-color: var(--color-primary-hover, #0c4e54);
  }

  .cookie-modal__btn {
    padding: var(--space-2, 0.5rem) var(--space-5, 1.25rem);
    background: var(--color-primary, #01696f);
    color: var(--color-text-inverse, #f9f8f4);
    font-size: var(--text-sm, 0.875rem);
    font-weight: 500;
    font-family: var(--font-body, sans-serif);
    border-radius: var(--radius-full, 9999px);
    cursor: pointer;
    border: none;
    transition:
      background 180ms cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 180ms cubic-bezier(0.16, 1, 0.3, 1),
      transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
    white-space: nowrap;
  }

  .cookie-modal__btn:hover {
    background: var(--color-primary-hover, #0c4e54);
    box-shadow: 0 2px 8px oklch(from var(--color-primary, #01696f) l c h / 0.35);
  }

  .cookie-modal__btn:active {
    background: var(--color-primary-active, #0f3638);
    transform: scale(0.98);
  }

  .cookie-modal__btn:focus-visible {
    outline: 2px solid var(--color-primary, #01696f);
    outline-offset: 3px;
  }

  /* ── Dark mode ──────────────────────────────── */
  :global([data-theme="dark"]) .cookie-modal {
    background: var(--color-surface, #1c1b19);
    border-color: oklch(from var(--color-text, #cdccca) l c h / 0.10);
    box-shadow:
      0 2px 8px oklch(0 0 0 / 0.25),
      0 16px 48px oklch(0 0 0 / 0.45);
  }

  :global([data-theme="dark"]) .cookie-modal__body strong {
    color: var(--color-text, #cdccca);
  }

  /* ── Animations ─────────────────────────────── */
  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cookie-backdrop,
    .cookie-modal {
      animation: none;
    }
  }

  /* ── Mobile ─────────────────────────────────── */
  @media (max-width: 480px) {
    .cookie-modal {
      bottom: 0;
      left: 0;
      right: 0;
      transform: none;
      width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      flex-direction: column;
      gap: var(--space-3, 0.75rem);

      animation: slide-up-mobile 350ms cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    .cookie-modal__icon {
      display: none;
    }

    .cookie-modal__actions {
      justify-content: flex-end;
    }
  }

  @keyframes slide-up-mobile {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
