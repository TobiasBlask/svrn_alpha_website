import { getSession } from "@/lib/auth";
import "./landing.css";
import { NavMobile } from "./nav-mobile";

const Link = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string },
) => <a {...props} />;

export const metadata = {
  title: "Premise. Morgens das Briefing. Abends die Bilanz.",
  description:
    "Research von Münchmeyer Petersen Capital Markets, offen für Privatanleger. 28 Analysten, jeder Call mit Einstieg, Kursziel und Stopp. Briefing täglich um 07:30.",
};

const PRODUCT_ENTRY = "/app/screens/today.html";
const signInTo = (next: string) =>
  `/sign-in?next=${encodeURIComponent(next)}`;

export default async function Home() {
  const user = await getSession();
  const loginHref = user ? PRODUCT_ENTRY : signInTo(PRODUCT_ENTRY);
  const loginLabel = user ? "Produkt öffnen" : "Anmelden";
  const productHref = user ? PRODUCT_ENTRY : signInTo(PRODUCT_ENTRY);

  return (
    <div className="landing-root">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&family=JetBrains+Mono:wght@400;500&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap"
      />

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <Link className="brand" href="/">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="13" r="12" stroke="#111" strokeWidth="1.6" />
              <path
                d="M7 17 L12 9 L17 15 L21 7"
                stroke="#9B2A1F"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Premise
          </Link>
          <div className="nav-links">
            <a href="#rhythm">Der Rhythmus</a>
            <a href="#floor">Analysten</a>
            <a href="#compare">Vergleich</a>
            <a href="#chronicle">Historie</a>
            <a href="#pricing">Pakete</a>
            <Link href={productHref}>Produkt</Link>
          </div>
          <div className="nav-cta">
            <Link className="ghost" href={loginHref}>
              {loginLabel}
            </Link>
            <a className="btn-l btn-l--sm" href="#pricing">
              Jetzt starten →
            </a>
          </div>
          <NavMobile
            loginHref={loginHref}
            loginLabel={loginLabel}
            productHref={productHref}
          />
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="hero-eyeb">
              <span className="dot"></span>
              <span
                className="mono"
                style={{ color: "var(--ink)", letterSpacing: ".12em" }}
              >
                Ausgabe Nr. 412 · Freitag, 17. April 2026
              </span>
            </div>

            <h1>
              Das Haus, das eine <em>Prämisse</em> veröffentlicht. Keine
              Prognose.
            </h1>

            <p className="lede">
              Täglich kommen Empfehlungen ohne Plan. Kein Einstieg. Kein Stopp.
              Kein Beleg, dass der Analyst selbst drin ist. Premise macht das
              Research von Münchmeyer Petersen Capital Markets offen: 28
              Analysten, jeder Call mit Name, Datum und Ergebnis im Hauptbuch.
            </p>

            <div className="hero-ctas">
              <a className="btn-l btn-l--lg btn-l--oxblood" href="#pricing">
                7 Tage kostenlos testen →
              </a>
              <Link className="btn-l btn-l--lg btn-l--ghost" href={productHref}>
                Heutiges Briefing ansehen
              </Link>
              <span className="meta">Keine Karte · Jederzeit kündbar</span>
            </div>
          </div>

          <aside className="hero-card" aria-label="Eine Prämisse zu NVDA">
            <div className="hero-card__top">
              <b>MARKT · NVDA</b>
              <div className="hero-card__meta">
                <span>17:04 MEZ</span>
                <span>LIVE</span>
              </div>
            </div>
            <div className="hero-card__body">
              <div className="hero-card__ticker">
                <b>NVIDIA Corp.</b>
                <span>NASDAQ · NVDA</span>
              </div>
              <div className="hero-card__px">
                <b>$948,22</b>
                <span>+1,7 % · +$15,84</span>
              </div>

              <div className="hero-card__chart">
                <svg viewBox="0 0 420 120" preserveAspectRatio="none">
                  <rect
                    x="0"
                    y="68"
                    width="420"
                    height="22"
                    fill="rgba(15,122,80,.10)"
                    stroke="rgba(15,122,80,.35)"
                    strokeDasharray="3 3"
                  />
                  <rect
                    x="0"
                    y="22"
                    width="420"
                    height="18"
                    fill="rgba(181,138,60,.12)"
                    stroke="rgba(181,138,60,.45)"
                    strokeDasharray="3 3"
                  />
                  <path
                    d="M0 92 L30 88 L55 93 L85 82 L115 76 L145 80 L175 72 L205 65 L240 58 L275 50 L310 55 L345 44 L380 38 L420 32"
                    fill="none"
                    stroke="#9B2A1F"
                    strokeWidth="2"
                  />
                  <circle cx="115" cy="76" r="4" fill="#0F7A50" />
                  <text
                    x="122"
                    y="72"
                    fontFamily="JetBrains Mono"
                    fontSize="9"
                    fill="#0F7A50"
                    letterSpacing=".1em"
                  >
                    EINSTIEG · 16. FEB
                  </text>
                  <circle cx="420" cy="32" r="4.5" fill="#9B2A1F" />
                </svg>
              </div>

              <div className="hero-card__premise">
                <div className="hero-card__premise-tag">
                  <span>● PRÄMISSE</span>
                  <span style={{ color: "var(--ink-muted)" }}>
                    Léa Caron · Rang 01
                  </span>
                </div>
                <p>
                  Bei jedem Test von <b>$880–$905</b> nachkaufen.
                  Hyperscaler-Capex zieht durch H2 an; Re-Rating auf{" "}
                  <b>$1.160</b> bei 40× &apos;27er Gewinn. Invalidiert unter
                  $812.
                </p>
              </div>

              <div className="hero-card__zones">
                <div className="buy">
                  <span>Kaufzone</span>
                  <b>$880–$905</b>
                </div>
                <div>
                  <span>Kursziel</span>
                  <b>$1.160</b>
                </div>
                <div className="inv">
                  <span>Stopp</span>
                  <b>$812</b>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="proof">
        <div className="wrap proof-row">
          <div className="label">Münchmeyer Petersen<br/>Capital Markets · Hamburg</div>
          <div className="stat">
            <b>28</b>
            <span>Analysten im Haus</span>
          </div>
          <div className="stat">
            <b>411</b>
            <span>Geschlossene Calls · aktenkundig</span>
          </div>
          <div className="stat">
            <b>64,8 %</b>
            <span>Trefferquote · nachzählbar</span>
          </div>
          <div className="stat">
            <b>+31,4 %</b>
            <span>Desk-Rendite · letzte 12 Monate</span>
          </div>
        </div>
      </section>

      {/* RHYTHM */}
      <section className="rhythm" id="rhythm">
        <div className="wrap">
          <div className="section-head">
            <div className="eyeb">Der Tagesrhythmus</div>
            <h2>
              Ein Markttag, <em>für Sie komponiert.</em>
            </h2>
            <p>
              Sie wollen nicht mehr Meinungen. Sie wollen wissen, was jetzt
              zählt. Um 07:30 liegt das Briefing im Postfach. Um 08:00 haben
              Sie einen Überblick. Wenn eine Prämisse kippt, kommen Sie nicht
              zu spät.
            </p>
          </div>

          <div className="rhythm-steps">
            <article className="step">
              <svg className="step__glyph" viewBox="0 0 40 40" fill="none">
                <rect
                  x="4"
                  y="8"
                  width="32"
                  height="24"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 14h24M8 19h18M8 24h20"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              <div className="step__num">01</div>
              <div className="step__time">07:30 MEZ · in Ihrem Postfach</div>
              <h3>Morgen-Briefing</h3>
              <p>
                Wenn Sie aufwachen, liegt es schon da. Vier Seiten, geschrieben
                (nicht generiert). Was nachts passiert ist, welcher Chart zählt,
                welche Prämisse heute läuft. Sie gehen vorbereitet in den Tag.
              </p>
              <Link
                className="linkline"
                href={user ? "/app/screens/brief.html" : signInTo("/app/screens/brief.html")}
              >
                Heutige Ausgabe öffnen →
              </Link>
            </article>

            <article className="step">
              <svg className="step__glyph" viewBox="0 0 40 40" fill="none">
                <circle
                  cx="20"
                  cy="20"
                  r="14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 8v12l8 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <div className="step__num">02</div>
              <div className="step__time">08:00 MEZ · auf dem Smartphone</div>
              <h3>Heute</h3>
              <p>
                Zwei Minuten zwischen Kaffee und erstem Call: offene Prämissen,
                Märkte, neue Calls, Earnings-Kalender. Sie wissen, was zählt,
                bevor der Tag losgeht.
              </p>
              <Link className="linkline" href={productHref}>
                Board ansehen →
              </Link>
            </article>

            <article className="step">
              <svg className="step__glyph" viewBox="0 0 40 40" fill="none">
                <path
                  d="M4 28l8-8 6 6 10-12 8 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="20" r="2.5" fill="currentColor" />
                <circle cx="28" cy="14" r="2.5" fill="currentColor" />
              </svg>
              <div className="step__num">03</div>
              <div className="step__time">Intraday · wenn es zählt</div>
              <h3>Eine Prämisse, ausgepackt</h3>
              <p>
                Sie sehen auf einen Blick: wo ein Analyst einsteigen würde, wo
                sein Kursziel liegt, wann er aufhört recht zu haben. Eine Seite
                Keine zehnseitige PDF.
              </p>
              <Link
                className="linkline"
                href={user ? "/app/screens/market-detail.html" : signInTo("/app/screens/market-detail.html")}
              >
                NVDA lesen →
              </Link>
            </article>

            <article className="step">
              <svg className="step__glyph" viewBox="0 0 40 40" fill="none">
                <rect
                  x="6"
                  y="14"
                  width="28"
                  height="18"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 14l14-10 14 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinejoin="round"
                />
                <circle cx="16" cy="24" r="2" fill="currentColor" />
                <circle cx="24" cy="24" r="2" fill="currentColor" />
              </svg>
              <div className="step__num">04</div>
              <div className="step__time">Live · Skin in the Game</div>
              <h3>Das Desk</h3>
              <p>
                Sie sehen nicht nur die Empfehlung. Sie sehen, ob wir selbst
                drin sind. Jede Position, jede Stopp-Verschiebung, jeder
                Ausstieg erscheint in Ihrem Feed, bevor er ins Briefing kommt.
              </p>
              <Link
                className="linkline"
                href={user ? "/app/screens/desk.html" : signInTo("/app/screens/desk.html")}
              >
                Desk beobachten →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="signature">
        <div className="wrap signature-grid">
          <div>
            <div className="eyeb">Anatomie eines Calls · Nr. 388</div>
            <h2>
              Eine Prämisse ist kein Tipp. <em>Sie ist ein Plan mit Kanten.</em>
            </h2>
            <p className="lede">
              16. Februar 2026. Sie lesen Léa Carons Notiz zu NVDA: Einstieg
              $880–$905, Ziel $1.160, Stopp $812. Sie wissen genau, was der
              Plan ist. Und Sie sehen, wie er aufgeht. Sieben Wochen später:
              +28,4 %.
            </p>

            <div className="signature-outcomes">
              <div>
                <b>+28,4 %</b>
                <span>Rendite, Einstieg bis Ausstieg</span>
              </div>
              <div>
                <b>52 T.</b>
                <span>Zeit im Trade</span>
              </div>
              <div>
                <b>0,82</b>
                <span>Max. Drawdown / Ziel</span>
              </div>
            </div>

            <Link
              className="btn-l btn-l--oxblood"
              href={user ? "/app/screens/market-detail.html" : signInTo("/app/screens/market-detail.html")}
            >
              Vollständiges Dossier öffnen →
            </Link>
          </div>

          <div className="case">
            <div className="case-head">
              <div className="case-head__tick">
                <b>NVDA</b>
                <span>16. Feb – 9. Apr · geschlossen</span>
              </div>
              <div className="case-head__px">
                <b>+28,4 %</b>
                <span>ZIEL ERREICHT</span>
              </div>
            </div>

            <div className="case-chart">
              <svg viewBox="0 0 560 220" preserveAspectRatio="none">
                <rect
                  x="0"
                  y="18"
                  width="560"
                  height="26"
                  fill="rgba(228,180,87,.14)"
                  stroke="rgba(228,180,87,.5)"
                  strokeDasharray="4 3"
                />
                <text
                  x="8"
                  y="14"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  fill="#E4B457"
                  letterSpacing=".12em"
                >
                  ZIEL $1.160
                </text>
                <rect
                  x="0"
                  y="150"
                  width="560"
                  height="24"
                  fill="rgba(50,212,146,.10)"
                  stroke="rgba(50,212,146,.4)"
                  strokeDasharray="4 3"
                />
                <text
                  x="8"
                  y="192"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  fill="#32D492"
                  letterSpacing=".12em"
                >
                  KAUF $880–$905
                </text>
                <line
                  x1="0"
                  y1="200"
                  x2="560"
                  y2="200"
                  stroke="rgba(244,106,94,.5)"
                  strokeDasharray="2 3"
                />
                <text
                  x="8"
                  y="212"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  fill="#F46A5E"
                  letterSpacing=".12em"
                >
                  STOPP $812
                </text>
                <path
                  d="M0 162 L40 168 L75 158 L110 148 L145 152 L180 138 L210 128 L240 118 L270 110 L300 96 L335 88 L370 76 L400 62 L435 48 L470 38 L500 32 L530 28 L560 30"
                  fill="none"
                  stroke="#E4B457"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <circle
                  cx="110"
                  cy="148"
                  r="5"
                  fill="#32D492"
                  stroke="#0E1726"
                  strokeWidth="1.5"
                />
                <text
                  x="118"
                  y="145"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  fill="#32D492"
                  letterSpacing=".12em"
                >
                  EINSTIEG 16. FEB
                </text>
                <circle
                  cx="530"
                  cy="28"
                  r="5"
                  fill="#E4B457"
                  stroke="#0E1726"
                  strokeWidth="1.5"
                />
                <text
                  x="460"
                  y="20"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  fill="#E4B457"
                  letterSpacing=".12em"
                >
                  AUSSTIEG 9. APR
                </text>
              </svg>
            </div>

            <div className="case-timeline">
              <div className="case-tl">
                <div className="date">16. FEB</div>
                <b>Prämisse veröffentlicht</b>
                <span>Eröffnet bei $893,40</span>
              </div>
              <div className="case-tl">
                <div className="date">12. MÄR</div>
                <b>These bestätigt</b>
                <span>Capex-Guidance angehoben</span>
              </div>
              <div className="case-tl case-tl--hit">
                <div className="date">09. APR</div>
                <b>Ziel erreicht, geschlossen</b>
                <span>Ausstieg bei $1.147,80</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOOR */}
      <section className="floor" id="floor">
        <div className="wrap floor-grid">
          <div>
            <div className="eyeb">Der Research Floor</div>
            <h2>
              28 Analysten. <em>Gerankt, nicht kuratiert.</em>
            </h2>
            <ul className="ticks">
              <li>
                <b>Sie sehen, welche Calls wirklich funktioniert haben,</b>{" "}
                nicht nur die, die der Analyst Ihnen zeigen möchte.
              </li>
              <li>
                <b>Sie können nachzählen.</b> Trefferquote, Durchschnittsrendite,
                Sharpe, wöchentlich neu berechnet, nicht selbst erklärt.
              </li>
              <li>
                <b>Sie bekommen Research von jemandem, der den Sektor kennt.</b>{" "}
                Halbleiter, Krypto, Industrie, Rohstoffe, jeder Analyst auf
                einem Desk.
              </li>
              <li>
                <b>Sie entscheiden, ob der Track Record den Aufpreis wert ist.</b>{" "}
                Vier Elite-Analysten, einsehbar bevor Sie buchen.
              </li>
            </ul>
            <Link
              className="btn-l btn-l--ghost"
              href={user ? "/app/screens/analysts.html" : signInTo("/app/screens/analysts.html")}
            >
              Das Team kennenlernen →
            </Link>
          </div>

          <div>
            <div className="podium">
              <div className="podium-tile">
                <div className="podium-tile__rank">02</div>
                <div className="podium-tile__init">MO</div>
                <div className="podium-tile__name">Maya Okafor</div>
                <div className="podium-tile__role">Industrie · London</div>
                <div className="podium-tile__stat">
                  +26,9 %<small>Rendite (12 Mon.)</small>
                </div>
              </div>
              <div className="podium-tile podium-tile--1">
                <div className="podium-tile__rank">01</div>
                <div className="podium-tile__init">LC</div>
                <div className="podium-tile__name">Léa Caron</div>
                <div className="podium-tile__role">Halbleiter · Paris</div>
                <div className="podium-tile__stat">
                  +34,2 %<small>Rendite (12 Mon.)</small>
                </div>
              </div>
              <div className="podium-tile">
                <div className="podium-tile__rank">03</div>
                <div className="podium-tile__init">AR</div>
                <div className="podium-tile__name">Arun Rao</div>
                <div className="podium-tile__role">Krypto · Singapur</div>
                <div className="podium-tile__stat">
                  +24,1 %<small>Rendite (12 Mon.)</small>
                </div>
              </div>
            </div>
            <div className="podium-floor-note">
              24 ÖFFENTLICH · 4 ELITE · 50 IM FOUNDER&apos;S CIRCLE
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="compare" id="compare">
        <div className="wrap">
          <div className="section-head">
            <div className="eyeb">Im Vergleich</div>
            <h2>
              Was Premise <em>anders macht.</em>
            </h2>
            <p>
              Bevor Sie sich entscheiden, wollen Sie wissen, was Sie woanders
              bekommen und was fehlt. Hier der direkte Vergleich mit den
              fünf meistgenannten Tools in der Kategorie.
            </p>
          </div>

          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th aria-hidden="true"></th>
                  <th className="compare-table__us">Premise</th>
                  <th>Seeking Alpha Pro</th>
                  <th>Motley Fool</th>
                  <th>Danelfin</th>
                  <th>InvestingPro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Namentliche Analysten mit öffentlicher Bilanz</th>
                  <td className="compare-table__us">
                    <span className="yes">Ja · 28</span>
                  </td>
                  <td>Beitragsautoren</td>
                  <td>Haus-Team</td>
                  <td>
                    <span className="no">Nein · KI-Score</span>
                  </td>
                  <td>
                    <span className="no">Nein</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Prämisse pro Call (Einstieg · Ziel · Stopp)
                  </th>
                  <td className="compare-table__us">
                    <span className="yes">Immer</span>
                  </td>
                  <td>Teilweise</td>
                  <td>Kaufempfehlung</td>
                  <td>Score 1–10</td>
                  <td>Datenpunkte</td>
                </tr>
                <tr>
                  <th scope="row">Eigenes Haus-Buch öffentlich gehandelt</th>
                  <td className="compare-table__us">
                    <span className="yes">Ja · Das Desk</span>
                  </td>
                  <td>
                    <span className="no">—</span>
                  </td>
                  <td>
                    <span className="no">—</span>
                  </td>
                  <td>
                    <span className="no">—</span>
                  </td>
                  <td>
                    <span className="no">—</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Tägliches Briefing vor Markteröffnung</th>
                  <td className="compare-table__us">
                    <span className="yes">07:30 MEZ</span>
                  </td>
                  <td>Newsletter</td>
                  <td>Wöchentlich</td>
                  <td>
                    <span className="no">—</span>
                  </td>
                  <td>Marktdaten</td>
                </tr>
                <tr>
                  <th scope="row">Neue Calls pro Monat</th>
                  <td className="compare-table__us">~ 40 – 120</td>
                  <td>~ 4</td>
                  <td>2</td>
                  <td>~ 30 (Scores)</td>
                  <td>variabel</td>
                </tr>
                <tr>
                  <th scope="row">Historie inkl. Fehler transparent</th>
                  <td className="compare-table__us">
                    <span className="yes">Seit 2019</span>
                  </td>
                  <td>Begrenzt</td>
                  <td>Seit 2002</td>
                  <td>
                    <span className="no">—</span>
                  </td>
                  <td>
                    <span className="no">—</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Preis</th>
                  <td className="compare-table__us">
                    <b>€59 – €149 / Monat</b>
                  </td>
                  <td>$2.149 / Jahr</td>
                  <td>$17 / Monat</td>
                  <td>$29 / Monat</td>
                  <td>ab $14 / Monat</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="compare-note">
            Wo andere einen Score ausgeben, schreiben wir eine These. Wo andere
            eine Prognose liefern, zeichnen wir einen Plan mit Stopp. Und wo
            andere ihre Fehler still begraben, stehen sie bei uns auf Seite eins
            der Chronik.
          </p>
        </div>
      </section>

      {/* CHRONICLE */}
      <section className="chronicle" id="chronicle">
        <div className="wrap chronicle-grid">
          <div className="chronicle-ledger" aria-hidden="true">
            <div className="chronicle-ledger__head">
              <b>Léa Caron · Chronik</b>
              <span className="mono">124 Calls · 71,8 % Trefferquote</span>
            </div>
            <div className="ledger-row">
              <span className="ldate">09. APR</span>
              <span className="ltick">NVDA</span>
              <span className="laction">
                Ziel erreicht, <em>geschlossen +28,4 %</em>
              </span>
              <span className="lout lout--hit">Treffer</span>
            </div>
            <div className="ledger-row">
              <span className="ldate">02. APR</span>
              <span className="ltick">ASML</span>
              <span className="laction">
                Prämisse veröffentlicht, <em>akkumulieren €680–€710</em>
              </span>
              <span className="lout lout--live">Live</span>
            </div>
            <div className="ledger-row">
              <span className="ldate">24. MÄR</span>
              <span className="ltick">TSM</span>
              <span className="laction">Invalidiert, am Stopp geschlossen</span>
              <span className="lout lout--miss">Fehler −4,2 %</span>
            </div>
            <div className="ledger-row">
              <span className="ldate">11. MÄR</span>
              <span className="ltick">AMD</span>
              <span className="laction">
                Ziel erreicht, <em>geschlossen +19,6 %</em>
              </span>
              <span className="lout lout--hit">Treffer</span>
            </div>
            <div className="ledger-row">
              <span className="ldate">28. FEB</span>
              <span className="ltick">ARM</span>
              <span className="laction">These bestätigt</span>
              <span className="lout lout--live">Live</span>
            </div>
            <div className="ledger-row">
              <span className="ldate">16. FEB</span>
              <span className="ltick">NVDA</span>
              <span className="laction">
                Prämisse veröffentlicht, <em>Kauf $880–$905</em>
              </span>
              <span className="lout lout--hit">Treffer</span>
            </div>
          </div>

          <div>
            <div className="eyeb">Die Chronik</div>
            <h2 className="section-head" style={{ margin: 0 }}>
              Jeder Call, aktenkundig.{" "}
              <em
                style={{
                  fontFamily: "'Source Serif 4',serif",
                  fontStyle: "italic",
                  color: "var(--oxblood)",
                  fontWeight: 400,
                }}
              >
                Offen.
              </em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: "var(--ink-soft)",
                maxWidth: 500,
                margin: "20px 0 24px",
              }}
            >
              Bevor Sie abonnieren, wissen Sie bei den meisten Anbietern nie,
              ob die Trefferquote stimmt. Hier können Sie nachzählen. Jeder
              Analyst führt eine öffentliche Chronik: Prämissen, Korrekturen,
              Invalidierungen, unveränderlich, mit Zeitstempel. Treffer neben
              Fehlern. Sie sehen, was Sie bekommen.
            </p>
            <Link
              className="btn-l btn-l--oxblood"
              href={user ? "/app/screens/analyst.html" : signInTo("/app/screens/analyst.html")}
            >
              Eine Chronik öffnen →
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <div className="eyeb" style={{ color: "#E4B457" }}>
              Pakete
            </div>
            <h2>
              Vier Stufen. <em>Ein Haus.</em>
            </h2>
            <p>
              Ein Desk wählen oder das ganze Haus nehmen. Jahresabo spart 20 %.
              7 Tage kostenlos auf jedem Tier, keine Kartenangabe. 30 Tage
              Geld-zurück-Garantie.
            </p>
          </div>

          <div className="price-grid">
            <article className="price">
              <div className="price__name">Equities</div>
              <div className="price__tag">Ein Desk · US + EU</div>
              <div className="price__amount">
                <b>€59</b>
                <span>/ Monat</span>
              </div>
              <div className="price__sub">oder €590 / Jahr</div>
              <ul>
                <li>Morgen-Briefing · täglich</li>
                <li>Equities-Prämissen · ~ 40/Monat</li>
                <li>Volle Chronik + Screener</li>
                <li>Desk-Positionen (Read-only)</li>
              </ul>
              <Link className="btn-l" href="/sign-in?plan=equities">
                Mit Equities starten →
              </Link>
            </article>

            <article className="price price--featured">
              <div className="price__name">Das Haus</div>
              <div className="price__tag">Alles · alle Desks</div>
              <div className="price__amount">
                <b>€149</b>
                <span>/ Monat</span>
              </div>
              <div className="price__sub">oder €1.490 / Jahr</div>
              <ul>
                <li>Equities + Krypto + Rohstoffe</li>
                <li>~ 120 Prämissen pro Monat</li>
                <li>Volles Desk + Analysten-Ranking</li>
                <li>Morgen-Briefing · Wochenbericht</li>
                <li>
                  <b>Institutionelle Research-Tiefe für einen Bruchteil</b> des
                  Seeking-Alpha-Pro-Preises ($2.149/Jahr)
                </li>
              </ul>
              <Link className="btn-l" href="/sign-in?plan=house">
                Das Haus nehmen →
              </Link>
            </article>

            <article className="price">
              <div className="price__name">Elite</div>
              <div className="price__tag">Add-on · vier Analysten</div>
              <div className="price__amount">
                <b>€99</b>
                <span>/ Monat</span>
              </div>
              <div className="price__sub">setzt beliebiges Paket voraus</div>
              <ul>
                <li>Vier Top-Analysten</li>
                <li>Private Prämissen (nicht im öffentlichen Floor)</li>
                <li>Pre-Publish-Zugang (30 Min.)</li>
                <li>Quartalsweise Live-Q&amp;A</li>
              </ul>
              <Link className="btn-l" href="/sign-in?plan=elite">
                Elite dazubuchen →
              </Link>
            </article>

            <article className="price">
              <div className="price__name">Founder&apos;s Circle</div>
              <div className="price__tag">50 Plätze · auf Einladung</div>
              <div className="price__amount">
                <b>€499</b>
                <span>/ Monat</span>
              </div>
              <div className="price__sub">jährliche Abrechnung</div>
              <ul>
                <li>Alles aus „Das Haus" + Elite</li>
                <li>Monatlicher Call mit dem Floor</li>
                <li>Prämissen-Requests, aktenkundig</li>
                <li>Co-Invest-Fenster bei Desk-Trades</li>
              </ul>
              <Link className="btn-l" href="/sign-in?plan=founders">
                Platz anfragen →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="quotes">
        <div className="wrap">
          <div className="section-head">
            <div className="eyeb">Aus dem Abonnentenkreis</div>
            <h2>
              Gebaut für den Privatanleger,{" "}
              <em>der die Fußnoten liest.</em>
            </h2>
          </div>

          <div className="quotes-grid">
            <figure className="quote">
              <p>
                Früher habe ich vier Newsletter und einen Bloomberg-Bekannten
                zusammengestückelt. Jetzt landet das Briefing um 07:30, und ich
                weiß, was zählt, bevor ich den Laptop aufklappe.
              </p>
              <figcaption className="quote__who">
                <div className="init">TK</div>
                <div>
                  <b>Tomás K.</b>
                  <span>Mitglied · Zürich</span>
                </div>
              </figcaption>
            </figure>
            <figure className="quote">
              <p>
                Das Desk ist das Feature, das mich überzeugt hat. Ich habe noch
                nie ein Research-Haus gesehen, das seine eigenen
                Stopp-Verschiebungen veröffentlicht. Das ist der ganze Pitch.
              </p>
              <figcaption className="quote__who">
                <div className="init">SA</div>
                <div>
                  <b>Sofia A.</b>
                  <span>Mitglied · Madrid</span>
                </div>
              </figcaption>
            </figure>
            <figure className="quote">
              <p>
                Jede Prämisse kommt mit einem Ausstiegsplan auf dem Chart. Kein
                Bauchgefühl, kein „to the moon". Endlich trade ich mit einem
                geschriebenen Plan statt mit einer Ahnung.
              </p>
              <figcaption className="quote__who">
                <div className="init">DW</div>
                <div>
                  <b>David W.</b>
                  <span>Mitglied · Berlin</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <div className="section-head">
            <div className="eyeb">Was wir oft gefragt werden</div>
            <h2>
              Das Kleingedruckte, <em>in Klartext.</em>
            </h2>
          </div>

          <div className="faq-list">
            <div className="faq-q">
              <h4>Ist das Anlageberatung?</h4>
              <p>
                Nein. Premise ist Research: eine veröffentlichte Meinung, eine
                Einstiegszone, ein Kursziel und eine Invalidierung. Was Sie
                daraus machen, liegt bei Ihnen. Das Risiko ebenso.
              </p>
            </div>
            <div className="faq-q">
              <h4>Wie berechnen Sie die Trefferquote?</h4>
              <p>
                Ein Call ist ein Treffer, wenn er sein Kursziel vor der
                Invalidierung erreicht, abzüglich einer pauschalen
                Kostenannahme von 0,2 %. Fehler werden nach demselben Muster
                verbucht. Die vollständige Methodik liegt in der Chronik offen.
              </p>
            </div>
            <div className="faq-q">
              <h4>Was deckt Premise ab, nur Aktien?</h4>
              <p>
                Aktien (US + EU), Krypto-Majors und Rohstoffe. Sie wählen ein
                Desk oder nehmen das Haus. Zum Start ohne FX und Optionen.
              </p>
            </div>
            <div className="faq-q">
              <h4>Wer sind die Analysten?</h4>
              <p>
                28 Spezialisten über vier Desks. Jeder mit eigenem Profil,
                öffentlicher Chronik und wöchentlichem Rang. Vier davon (die
                Elite) schreiben hinter einer separaten Paywall.
              </p>
            </div>
            <div className="faq-q">
              <h4>Kann ich jederzeit kündigen?</h4>
              <p>
                Ja. Monatsabos enden zum nächsten Abrechnungsdatum. Jahresabos
                werden anteilig erstattet. Ihr Chronik-Zugang bleibt für den
                bezahlten Zeitraum aktiv.
              </p>
            </div>
            <div className="faq-q">
              <h4>Warum die Deckelung im Founder&apos;s Circle?</h4>
              <p>
                Fünfzig Plätze, auf Einladung. Kein Marketing-Limit. Der Raum
                soll klein genug bleiben, dass die Analysten mit den Menschen
                darin wirklich sprechen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="finalcta">
        <div className="wrap">
          <div className="finalcta-eyeb">
            <span className="dot"></span>Die nächste Prämisse erscheint Montag ·
            07:30 MEZ
          </div>
          <h2>
            Lesen Sie, was <em>das Haus</em> tradet.<br />
            Bevor es tradet.
          </h2>
          <p>
            Sieben Tage, um zu sehen, ob das Briefing morgen früh etwas wert
            ist. Keine Karte, kein Risiko. Briefing, Board und Chronik ab Tag
            eins.
          </p>
          <div className="hero-ctas">
            <a className="btn-l btn-l--lg btn-l--oxblood" href="#pricing">
              7 Tage kostenlos testen →
            </a>
            <Link className="btn-l btn-l--lg btn-l--ghost" href={productHref}>
              Heutiges Board ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap foot-grid">
          <div>
            <div className="brand" style={{ color: "var(--ivory)" }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <circle
                  cx="13"
                  cy="13"
                  r="12"
                  stroke="#F3ECDB"
                  strokeWidth="1.6"
                />
                <path
                  d="M7 17 L12 9 L17 15 L21 7"
                  stroke="#E4B457"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Premise
            </div>
            <p className="ftag">
              Das Haus für hoch­überzeugtes Research, für den Privatanleger,
              der die Fußnoten liest.
            </p>
          </div>
          <div>
            <h5>Produkt</h5>
            <ul>
              <li>
                <Link href="/app/screens/today.html">Heute</Link>
              </li>
              <li>
                <Link href="/app/screens/brief.html">Morgen-Briefing</Link>
              </li>
              <li>
                <Link href="/app/screens/desk.html">Das Desk</Link>
              </li>
              <li>
                <Link href="/app/screens/analysts.html">Analysten</Link>
              </li>
              <li>
                <Link href="/app/screens/screener.html">Screener</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Unternehmen</h5>
            <ul>
              <li>
                <a href="#">Über uns</a>
              </li>
              <li>
                <a href="#">Methodik</a>
              </li>
              <li>
                <a href="#">Karriere</a>
              </li>
              <li>
                <a href="#">Presse</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Abonnieren</h5>
            <ul>
              <li>
                <a href="#pricing">Pakete</a>
              </li>
              <li>
                <a href="#pricing">Elite</a>
              </li>
              <li>
                <a href="#pricing">Founder&apos;s Circle</a>
              </li>
              <li>
                <a href="#">Jahr verschenken</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Rechtliches</h5>
            <ul>
              <li>
                <a href="#">AGB</a>
              </li>
              <li>
                <a href="#">Datenschutz</a>
              </li>
              <li>
                <a href="#">Offenlegungen</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap">
          <div className="foot-bottom">
            <span>© 2026 Premise SAS · Paris</span>
            <span>Research: Münchmeyer Petersen Capital Markets · KI-Plattform: SVRN Alpha</span>
            <span>Research · keine Anlageberatung</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
