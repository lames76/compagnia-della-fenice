/* Ellan — player unico nel portale; non avvia audio senza un gesto del visitatore. */
(() => {
  'use strict';
  const audio = document.getElementById('ellan-music');
  const play = document.getElementById('music-toggle');
  const volume = document.getElementById('music-volume');
  const status = document.getElementById('music-status');
  if (!audio || !play || !volume || !status) return;
  const key = 'ellan-music-preferences-v1';
  let settings = {};
  try { settings = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch (_) {}
  const clamp = n => Math.max(0, Math.min(1, n));
  audio.volume = Number.isFinite(settings.volume) ? clamp(settings.volume) : 0.35;
  volume.value = String(audio.volume);
  // Una preferenza di riproduzione non autorizza l'autoplay: servirà sempre un click.
  function save() {
    try { localStorage.setItem(key, JSON.stringify({volume:audio.volume, wanted:!audio.paused})); } catch (_) {}
  }
  function render() {
    const playing = !audio.paused;
    play.textContent = playing ? '⏸ Metti in pausa' : '▶ Ascolta Ellan';
    play.setAttribute('aria-pressed', String(playing));
    status.textContent = playing ? 'Colonna sonora in riproduzione' : 'Musica in pausa';
  }
  play.addEventListener('click', async () => {
    if (!audio.paused) { audio.pause(); save(); return; }
    try { await audio.play(); save(); }
    catch (_) { status.textContent = 'Il browser non ha consentito la riproduzione. Riprova dal pulsante.'; }
  });
  volume.addEventListener('input', () => { audio.volume = clamp(Number(volume.value)); save(); });
  audio.addEventListener('play',render);
  audio.addEventListener('pause',render);
  audio.addEventListener('error',() => { status.textContent = 'Traccia non disponibile al momento.'; });
  render();
})();