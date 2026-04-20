// ============================================================
// Premise — Market Detail chart
// Clean two-pane layout: price (85%) + volume (15%)
// Candles • target zone • Elliott wave count • projection
// ============================================================
(function() {
  function renderChart() {
    const host = document.getElementById('chart-canvas');
    if (!host) return;

    const W = host.clientWidth || 980;
    const H = 430;

    // Two-pane split: price on top, volume below
    const GUTTER_R = 64;          // right gutter for price axis + pill
    const GUTTER_L = 0;
    const PANE_GAP = 10;
    const PRICE_H = Math.round(H * 0.78);
    const VOL_Y = PRICE_H + PANE_GAP;
    const VOL_H = H - VOL_Y - 20;  // leave 20 for time axis
    const PLOT_W = W - GUTTER_R - GUTTER_L;

    // Seeded pseudo-random for stable candles
    let seed = 42;
    function rand() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }

    // Price range for price pane
    const yMin = 720, yMax = 880;
    function y(v) { return ((yMax - v) / (yMax - yMin)) * PRICE_H; }

    // Generate 60 candles
    const N = 60;
    const candles = [];
    let price = 790;
    for (let i = 0; i < N; i++) {
      const drift = i < 40 ? 1.4 : (i < 50 ? -0.8 : 0.3);
      const vol = 4 + rand() * 4;
      const open = price;
      const close = open + drift + (rand() - 0.5) * vol;
      const high = Math.max(open, close) + rand() * vol * 0.6;
      const low  = Math.min(open, close) - rand() * vol * 0.6;
      candles.push({ open, close, high, low, vol: 0.4 + rand() * 0.9 });
      price = close;
    }
    // Anchor last candle to current 847.23
    candles[N - 1].close = 847.23;
    candles[N - 1].high = Math.max(candles[N - 1].high, 852.77);
    candles[N - 1].low  = Math.min(candles[N - 1].low, 831.10);

    const cw = PLOT_W / N;
    const bodyW = Math.max(2.5, cw * 0.52);
    const cx = (i) => GUTTER_L + i * cw + cw / 2;

    // CSS colors
    const css = getComputedStyle(document.documentElement);
    const c = (n) => css.getPropertyValue(n).trim();
    const bull = c('--bullish'), bear = c('--bearish'), brand = c('--brand-700');
    const ink900 = c('--ink-900'), ink500 = c('--ink-500'), ink400 = c('--ink-400'), ink300 = c('--ink-300');
    const line = c('--surface-line');
    const bgElev = c('--bg-elev') || '#fff';

    let svg = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" width="100%" height="100%" style="display:block">`;

    // ----- Price-pane gridlines (subtle) + y-axis labels -----
    const gridLevels = [740, 780, 820, 860];
    gridLevels.forEach(v => {
      svg += `<line x1="${GUTTER_L}" x2="${GUTTER_L + PLOT_W}" y1="${y(v)}" y2="${y(v)}" stroke="${line}" stroke-width="1" opacity=".6"/>`;
      svg += `<text x="${W - GUTTER_R + 8}" y="${y(v) + 3}" font-family="JetBrains Mono, monospace" font-size="10" fill="${ink400}">${v}</text>`;
    });

    // ----- Target zone 820-860 — sits behind candles -----
    svg += `<rect x="${GUTTER_L}" y="${y(860)}" width="${PLOT_W}" height="${y(820) - y(860)}" fill="${c('--zone-fill')}"/>`;
    svg += `<line x1="${GUTTER_L}" x2="${GUTTER_L + PLOT_W}" y1="${y(860)}" y2="${y(860)}" stroke="${c('--zone-stroke')}" stroke-width="1" stroke-dasharray="4 3" opacity=".8"/>`;
    svg += `<line x1="${GUTTER_L}" x2="${GUTTER_L + PLOT_W}" y1="${y(820)}" y2="${y(820)}" stroke="${c('--zone-stroke')}" stroke-width="1" stroke-dasharray="4 3" opacity=".8"/>`;
    // Target-zone label — tuck against the right edge
    svg += `<text x="${GUTTER_L + PLOT_W - 8}" y="${y(860) - 5}" font-family="JetBrains Mono, monospace" font-size="10" fill="${brand}" text-anchor="end" letter-spacing=".06em">TARGET  820–860</text>`;

    // ----- Candles -----
    candles.forEach((k, i) => {
      const x = cx(i);
      const bodyTop = y(Math.max(k.open, k.close));
      const bodyBottom = y(Math.min(k.open, k.close));
      const up = k.close >= k.open;
      const col = up ? bull : bear;
      svg += `<line x1="${x}" x2="${x}" y1="${y(k.high)}" y2="${y(k.low)}" stroke="${col}" stroke-width="1"/>`;
      const h = Math.max(1, bodyBottom - bodyTop);
      svg += `<rect x="${x - bodyW / 2}" y="${bodyTop}" width="${bodyW}" height="${h}" fill="${col}"/>`;
    });

    // ----- Elliott wave count (primary) -----
    // Points well away from dense candle zone where possible
    const waves = [
      { i: 6,  v: 758, label: '1' },
      { i: 14, v: 740, label: '2' },
      { i: 30, v: 872, label: '3' },
      { i: 47, v: 806, label: '4' }
    ];
    const wavePts = waves.map(w => ({ x: cx(w.i), y: y(w.v), label: w.label }));
    // Current price point (wave 4 ended, now rallying back toward 5)
    const nowPt = { x: cx(N - 1), y: y(847.23) };

    // Primary EW path — solid, ending at current
    let pathD = wavePts.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');
    pathD += ` L ${nowPt.x} ${nowPt.y}`;
    svg += `<path d="${pathD}" fill="none" stroke="${brand}" stroke-width="1.6" stroke-linejoin="round" opacity=".9"/>`;

    // Projected wave 5 — dashed line from current to a point near target zone top
    const w5End = { x: GUTTER_L + PLOT_W - 12, y: y(868) };
    svg += `<path d="M ${nowPt.x} ${nowPt.y} L ${w5End.x} ${w5End.y}" fill="none" stroke="${brand}" stroke-width="1.4" stroke-dasharray="5 4" opacity=".75"/>`;
    svg += `<circle cx="${w5End.x}" cy="${w5End.y}" r="3" fill="${brand}"/>`;
    svg += `<text x="${w5End.x - 6}" y="${w5End.y - 8}" font-family="JetBrains Mono, monospace" font-size="10" fill="${brand}" text-anchor="end" font-weight="600">5 →</text>`;

    // Wave-number badges — placed OFFSET from the actual point to avoid covering candles.
    // Offset direction chosen per-label so they sit in empty space.
    const badgeOffsets = {
      '1': { dx:  0, dy: -16 },
      '2': { dx:  0, dy:  16 },
      '3': { dx:  0, dy: -16 },
      '4': { dx:  0, dy:  16 }
    };
    wavePts.forEach(p => {
      const o = badgeOffsets[p.label];
      const bx = p.x + o.dx, by = p.y + o.dy;
      // thin leader line (transparent where it crosses candles is fine, it's 1px)
      svg += `<line x1="${p.x}" x2="${bx}" y1="${p.y}" y2="${by}" stroke="${brand}" stroke-width="1" opacity=".6"/>`;
      // badge
      svg += `<circle cx="${bx}" cy="${by}" r="8" fill="${bgElev}" stroke="${brand}" stroke-width="1.3"/>`;
      svg += `<text x="${bx}" y="${by + 3.2}" font-size="10" fill="${brand}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700">${p.label}</text>`;
      // anchor dot on the actual point
      svg += `<circle cx="${p.x}" cy="${p.y}" r="2" fill="${brand}"/>`;
    });

    // ----- Current price marker -----
    // Right-edge price pill only (no full-width crosshair — it was crossing candles)
    svg += `<line x1="${nowPt.x}" x2="${GUTTER_L + PLOT_W}" y1="${nowPt.y}" y2="${nowPt.y}" stroke="${brand}" stroke-width="1" stroke-dasharray="2 2" opacity=".5"/>`;
    const pillW = 52, pillH = 18;
    svg += `<rect x="${W - GUTTER_R + 4}" y="${nowPt.y - pillH/2}" width="${pillW}" height="${pillH}" rx="2" fill="${brand}"/>`;
    svg += `<text x="${W - GUTTER_R + 4 + pillW/2}" y="${nowPt.y + 3.5}" font-family="JetBrains Mono, monospace" font-size="10" fill="#fff" text-anchor="middle" font-weight="600">847.23</text>`;
    // pulse at current
    svg += `<circle cx="${nowPt.x}" cy="${nowPt.y}" r="4" fill="${brand}"/>`;
    svg += `<circle cx="${nowPt.x}" cy="${nowPt.y}" r="4" fill="none" stroke="${brand}" stroke-width="1">
      <animate attributeName="r" from="4" to="12" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" from=".7" to="0" dur="2s" repeatCount="indefinite"/>
    </circle>`;

    // ----- Volume pane (separate, below) -----
    // divider
    svg += `<line x1="${GUTTER_L}" x2="${GUTTER_L + PLOT_W}" y1="${VOL_Y - 2}" y2="${VOL_Y - 2}" stroke="${line}" stroke-width="1"/>`;
    svg += `<text x="${GUTTER_L + 4}" y="${VOL_Y + 10}" font-family="JetBrains Mono, monospace" font-size="9" fill="${ink400}" letter-spacing=".08em">VOLUME</text>`;
    candles.forEach((k, i) => {
      const x = cx(i) - bodyW / 2;
      const up = k.close >= k.open;
      const col = up ? bull : bear;
      const hh = Math.max(2, k.vol * (VOL_H - 4));
      svg += `<rect x="${x}" y="${VOL_Y + (VOL_H - hh)}" width="${bodyW}" height="${hh}" fill="${col}" opacity=".35"/>`;
    });

    // ----- Time axis (minimal) -----
    const months = ['Mar 18', 'Mar 25', 'Apr 01', 'Apr 08', 'Apr 15', 'May 03'];
    const ticks = [0, 12, 24, 36, 48, 58];
    ticks.forEach((i, idx) => {
      svg += `<text x="${cx(i)}" y="${H - 4}" font-family="JetBrains Mono, monospace" font-size="9" fill="${ink400}" text-anchor="middle">${months[idx]}</text>`;
    });

    svg += `</svg>`;
    host.innerHTML = svg;
  }
  window.__renderPremiseChart = renderChart;
  renderChart();
})();
