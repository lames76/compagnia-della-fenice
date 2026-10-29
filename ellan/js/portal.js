/* Ellan: navigazione interna senza ricaricare il documento, così l'audio rimane attivo. */
(() => {
  'use strict';
  const sections = new Set(['inizio','atlante','gazzettini','stirpi','miti','religioni','magia','naturalistico','biblioteca']);
  const panels = [...document.querySelectorAll('[data-portal-panel]')];
  const links = [...document.querySelectorAll('[data-portal-link]')];
  function navigate() {
    const requested = decodeURIComponent(location.hash.slice(1)).toLowerCase();
    const active = sections.has(requested) ? requested : 'inizio';
    for (const el of panels) el.hidden = el.dataset.portalPanel !== active;
    for (const el of links) {
      const selected = el.dataset.portalLink === active;
      if (selected) el.setAttribute('aria-current','page');
      else el.removeAttribute('aria-current');
    }
    document.title = (active === 'inizio' ? 'Portale' : active.charAt(0).toUpperCase()+active.slice(1))+' — Ellan';
    const heading = document.querySelector('[data-portal-panel]:not([hidden]) h2');
    if (heading) heading.focus({preventScroll:true});
  }
  window.addEventListener('hashchange',navigate);
  navigate();
})();