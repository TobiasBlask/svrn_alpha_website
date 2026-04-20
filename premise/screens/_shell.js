// Premise — shared app shell injector (sidebar + topbar)
// Each screen page calls renderShell('screen-key') after page-specific content.
window.renderShell = function(active, crumbs) {
  const nav = [
    { key: 'today',   label: 'Today',     href: 'today.html' },
    { key: 'signals', label: 'Signals',   href: 'market-detail.html', count: 14 },
    { key: 'ideas',   label: 'Top Ideas', href: 'top-ideas.html' },
    { key: 'desk',    label: 'The Desk',  href: 'desk.html', dot: true },
    { key: 'screener',label: 'Screener',  href: 'screener.html' },
    { key: 'analysts',label: 'Analysts',  href: 'analysts.html' },
    { key: 'packages',label: 'Packages',  href: 'packages.html' },
    { key: 'brief',   label: 'Morning Brief', href: 'brief.html' },
    { key: 'alerts',  label: 'Alerts',    href: '#', count: 3 }
  ];
  const side = document.getElementById('side');
  if (side) side.innerHTML = `
    <div class="app__brand">
      <svg viewBox="0 0 24 24" width="18" height="18"><path d="M4 20 L12 6 L20 20 Z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/><circle cx="12" cy="6" r="1.6" fill="currentColor"/></svg>
      <span>premise</span>
    </div>
    <div class="app__nav-group">
      <div class="app__nav-label eyebrow">Workspace</div>
      ${nav.map(n => `
        <a class="app__nav-item ${active===n.key?'app__nav-item--active':''}" href="${n.href}">
          ${n.label}
          ${n.count?`<span class="app__nav-count mono">${n.count}</span>`:''}
          ${n.dot?'<span class="app__nav-dot"></span>':''}
        </a>`).join('')}
    </div>
    <div class="app__nav-group">
      <div class="app__nav-label eyebrow">Watching</div>
      <a class="app__nav-item app__nav-item--sub" href="market-detail.html"><span class="app__ticker mono">NVDA</span><span class="chip chip--bullish chip--xs"><span class="dot"></span>BULL</span></a>
      <a class="app__nav-item app__nav-item--sub"><span class="app__ticker mono">DAX&nbsp;40</span><span class="chip chip--neutral chip--xs"><span class="dot"></span>NEUT</span></a>
      <a class="app__nav-item app__nav-item--sub"><span class="app__ticker mono">BTC·USD</span><span class="chip chip--bullish chip--xs"><span class="dot"></span>BULL</span></a>
      <a class="app__nav-item app__nav-item--sub"><span class="app__ticker mono">EUR·USD</span><span class="chip chip--bearish chip--xs"><span class="dot"></span>BEAR</span></a>
      <a class="app__nav-item app__nav-item--sub app__nav-item--muted">+ 10 more</a>
    </div>
    <div class="app__side-foot">
      <div class="app__user">
        <span class="initials">TS</span>
        <div><b>Tobias Sauer</b><span class="eyebrow">pro · 2026</span></div>
      </div>
    </div>`;

  const top = document.getElementById('topbar');
  if (top) top.innerHTML = `
    <div class="app__top-left">
      <div class="breadcrumb">
        ${(crumbs||[]).map((c,i,a) => i===a.length-1 ? `<b>${c}</b>` : `<span>${c}</span><span class="sep">/</span>`).join('')}
      </div>
    </div>
    <div class="app__search">
      <svg viewBox="0 0 16 16" width="14" height="14"><circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 10.5 L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      <input placeholder="Search markets, reports, analysts, portfolios…" />
      <span class="kbd mono">⌘K</span>
    </div>
    <div class="app__top-right">
      <button class="btn btn--sm btn--ghost" title="Alerts">
        <svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 2 C10.5 2 12 3.5 12 7 L12 10 L13 12 L3 12 L4 10 L4 7 C4 3.5 5.5 2 8 2 Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        <span class="badge-dot">3</span>
      </button>
      <button class="btn btn--sm">Share</button>
      <a class="btn btn--sm btn--ghost" href="../Premise Phase 2.html">← All screens</a>
    </div>`;
};
