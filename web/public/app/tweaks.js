// ============================================================
// Premise — Tweaks wiring
// ============================================================
(function() {
  const panel = document.getElementById('tweaks');
  const openBtn = document.getElementById('btn-open-tweaks');
  const closeBtn = document.getElementById('btn-close-tweaks');

  function readTweaks() {
    try {
      const s = localStorage.getItem('premise_tweaks');
      if (s) return JSON.parse(s);
    } catch(e) {}
    return { direction: 'precision', theme: 'light' };
  }
  function writeTweaks(t) {
    try { localStorage.setItem('premise_tweaks', JSON.stringify(t)); } catch(e) {}
  }
  function apply(t) {
    document.documentElement.setAttribute('data-theme', t.theme || 'light');
    document.documentElement.setAttribute('data-direction', t.direction || 'precision');
    // Mark active buttons
    document.querySelectorAll('.seg button').forEach(b => {
      const k = b.dataset.key, v = b.dataset.val;
      b.classList.toggle('is-active', t[k] === v);
    });
    // Persist on parent file too
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { direction: t.direction, theme: t.theme } }, '*');
    } catch(e) {}
  }

  let state = readTweaks();
  apply(state);

  // Wire seg buttons
  document.querySelectorAll('.seg button').forEach(b => {
    b.addEventListener('click', () => {
      state[b.dataset.key] = b.dataset.val;
      writeTweaks(state);
      apply(state);
      if (window.__renderPremiseChart) window.__renderPremiseChart();
    });
  });

  // Moodboard tile "Preview" shortcut
  document.querySelectorAll('.js-set-direction').forEach(btn => {
    btn.addEventListener('click', () => {
      state.direction = btn.dataset.direction;
      writeTweaks(state);
      apply(state);
    });
  });

  // Open/close
  if (openBtn) openBtn.addEventListener('click', () => { panel.hidden = !panel.hidden; });
  if (closeBtn) closeBtn.addEventListener('click', () => { panel.hidden = true; });

  // Edit mode protocol — listener FIRST
  window.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d.type === '__activate_edit_mode') { panel.hidden = false; }
    if (d.type === '__deactivate_edit_mode') { panel.hidden = true; }
  });
  // THEN announce
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch(e) {}

  // Open Tweaks by default on first visit, so direction is discoverable
  if (!localStorage.getItem('premise_tweaks_seen')) {
    panel.hidden = false;
    localStorage.setItem('premise_tweaks_seen', '1');
  }
})();
