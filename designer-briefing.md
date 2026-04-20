# Design-Briefing — Premise

**Produktname (Arbeitstitel):** Premise
**Domain (zu sichern):** `premise.markets` — aktuell frei
**Empfänger:** Claude Designer / Pencil (Design Tool Agent)
**Absender:** Tobias (Projekt „Ulrich")
**Datum:** 2026-04-19
**Ziel:** Vollständiger visueller Entwurf (Moodboard → Wireframes → Hi-Fi) der Produkt-Oberfläche. Keine Marketing-Landingpage — die App selbst.

---

## 0. TL;DR für den Designer

**Premise** ist eine internationale Retail-Investing-Plattform, die eine Schlüssel-Spannung auflöst: **Finfluencer-Reichweite** × **institutionelle Research-Tiefe** × **AI-Beschleunigung**. Das Produkt hat drei gleichgewichtete Säulen (Signals / Desk / Portfolios), adressiert englischsprachige aufgeklärte Retail-Investoren, wirkt erwachsen ohne steif zu sein, und positioniert sich visuell näher an Linear, Stripe und Apple Stocks als an eToro oder Bloomberg.

Der Name **Premise** bedeutet „Annahme, auf der eine These aufbaut" — jede Strategie, jede Analyse, jedes Portfolio auf der Plattform beginnt mit einer transparent gemachten Prämisse. Das ist das zentrale narrative Element, das sich durch UI und Tonalität zieht.

---

## 1. Produkt in einem Satz

Premise ist ein internationales Abo-Produkt, das Retail-Investoren **dreifach** mit dem Wissen eines professionellen Analyse-Instituts ausstattet:

1. Tägliche Elliott-Wellen-Chartanalysen für 190+ Märkte
2. Tiefe Research-Berichte, Makro-Einschätzungen und Marktthesen aus der Feder echter, benannter Analysten
3. Transparente Modellportfolios dieser Analysten, denen man 1:1 folgen kann

— alles angereichert durch eine AI-Research-Schicht, die institutionelles Wissen retail-verständlich aufbereitet.

**Positionierung:** Nicht „noch eine Trading-App". Kategorie ist **„Institutional-Grade Research für Retail"** — näher an Public.com + Seeking Alpha + Koyfin + eToro-Copy-Portfolios als an reinen Signal-Apps.

---

## 2. Zielgruppe

**Kern:** Internationale Retail-Investoren, 28–55 Jahre, berufstätig, englischsprachig (EN ist Produktsprache; DE als Launch-Markt vollständig lokalisiert), Depot 10 k $ – 500 k $, informiert über Finfluencer-Ökosystem aber frustriert von dessen Oberflächlichkeit. Will echtes Research, nicht nur Signale.

**Sekundär:** Krypto-Native auf der Suche nach Substanz, Ex-Aktiv-Trader mit Wunsch nach professionellem Setup, semi-institutionelle Solopreneure / Family-Office-Light.

**Nicht Zielgruppe:** Profi-Institutionelle mit Bloomberg-Budget, High-Frequency-Trader, reine Anfänger ohne Kontext, Pure-Copy-Trading-Gambler.

**Tonalitäts-Referenzpublikum:** Leser von Matt Levine (Money Stuff), Hörer des All-In Podcasts — Menschen, die zwischen Substack-Research und YouTube-Finfluencern jonglieren und den Mix aus Ernsthaftigkeit und Lesbarkeit schätzen.

**User Jobs-to-be-Done:**
1. „Sag mir präzise, worauf meine nächste Entscheidung gestützt ist — und von wem."
2. „Zeig mir den Chart so, dass ich ihn in 30 Sekunden verstehe."
3. „Gib mir Portfolios zum Nachbauen, bei denen ich weiß, was drin ist und warum."
4. „Warne mich in Echtzeit, wenn sich etwas bewegt — ich sitze nicht den ganzen Tag vor dem Bildschirm."
5. „Erklär mir das Warum — damit ich der Analyse vertraue."

---

## 3. Produktumfang (MVP)

Drei gleichgewichtete Säulen, als eigene Räume sichtbar in der Navigation:

### Säule A — Signals (Chart-Layer)
- Elliott-Wellen-Charts für 190+ Märkte mit Zielzonen, Stopps, Primär-/Alternativszenario
- Echtzeit-Alerts (Push/E-Mail) bei Zielzonen-Eintritt
- Chart-Kommentar je Analyse
- Chronik älterer Analysen pro Markt

### Säule B — Desk (Research-Layer)
- **Analyst Profiles:** Echte, benannte Analysten mit Foto, Bio, Track-Record, Spezialgebiet. Jede Analyse ist einem Autor zugeordnet. Analysten werden zu Marken innerhalb der Marke.
- **Deep Research Reports:** 5–20-seitige Longreads/PDFs zu Sektoren, Makro-Themen, Einzeltiteln. Klare Publikations-Kadenz (wöchentlich).
- **Marktthesen / Convictions:** Kernthesen des Hauses, öffentlich nachvollziehbar und datiert aktualisiert („Q2 Outlook", „Dollar-Weakness Thesis").
- **AI Briefings:** Tägliches AI-generiertes Kurzbriefing, das das Research-Archiv durchsucht und kontextualisiert. Die AI-Bude-Herkunft zeigt sich hier — als Research-Beschleuniger, nicht als Gimmick.
- **Glossary & Learn:** Einsteiger-friendlich, verlinkt aus den Research-Reports.

### Säule C — Portfolios (Strategy-Layer)
- **Model Portfolios:** Kuratiert von Institut-Analysten (z. B. „Europe Value 2026", „AI Infrastructure Core", „BTC Cycle Allocation"). Öffentlich einsehbar: Positionen, Gewichte, Begründung, Historie.
- **Follow-Modus:** Nutzer folgt einem Portfolio, bekommt jede Änderung als Alert mit Begründung. **Keine Order-Ausführung im MVP** — der Nutzer tradet selbst beim eigenen Broker.
- **Performance-Tracking:** Transparente, öffentliche Historie jedes Portfolios seit Launch. Benchmarks.
- **Portfolio Fit Check:** Nutzer trägt eigenes Depot ein, Overlay-Analyse gegen Modellportfolios („Dein Depot korreliert zu 68 % mit *Europe Value 2026*").

### Querschnitts-Module
- **Login / Signup / Onboarding** — EN-first, Markt-Interessen, Risikoprofil, Analyst-Preferences
- **Today (Unified Feed)** — Startseite, aggregiert Neues aus allen drei Säulen, personalisiert
- **Alerts Center** — übergreifend (Chart-Signale + Research-Updates + Portfolio-Moves)
- **Unified Search** — findet Charts, Reports, Portfolios, Analysten
- **Account & Billing** — Abos, Rechnungen, Präferenzen

**Nicht MVP:** Order-Ausführung, Broker-API, nutzergenerierter Content, Community-Chat, Mobile-Native-App (Mobile Web ja).

---

## 4. Signature-Elemente (unbedingt erkennbar)

### 4.1 Die „Zielzone"
Jede Chart-Analyse hat eine Zielzone — farbig markiertes Rechteck auf dem Chart, das einen Preiskorridor aufspannt. **Wichtigster visueller Anker der Marke.** Klare Kante, halbtransparente Füllung (Primärfarbe @ 15 % Alpha), Label mit Preis-Range.

### 4.2 Elliott-Wellen-Labeling
Nummerierte Wellen (1–5) und Buchstaben (A–B–C) direkt am Chart. Primärszenario in Markenfarbe, Alternativszenario gestrichelt/blasser. Auch bei dichten Charts lesbar.

### 4.3 Ampel-System für Markt-Stimmung
Pro Markt ein Status-Indikator: **BULLISH / NEUTRAL / BEARISH** — Farbe + Icon + ein Wort. Der 2-Sekunden-Read im Dashboard.

### 4.4 Echtzeit-Signale
Eingehende Signale als Toast + Badge + Push — „Target zone reached: DAX 40 · 18.240–18.310". Dringlich, nicht panisch.

### 4.5 „The Premise" — narratives UI-Element
Jedes Artefakt (Chart-Analyse, Report, Portfolio) beginnt mit einer expliziten Prämisse in einem Satz. Typografisch hervorgehoben, als eigenes Block-Element designt — das ist das namens-tragende Signature-Element. Beispiel:

> **The Premise:** „Nvidia läuft in eine korrigierende Welle 4, bevor ein finales Hoch in Welle 5 folgt — Zielzone für Nachkäufe: 820–860 $."

Dieses Block-Element hat eine eigene Komponente in der Komponentenbibliothek. Es kommt überall im Produkt vor und schafft visuelle Wiedererkennung.

---

## 5. Informationsarchitektur — 22 Screens

Navigation: **vier Hauptbereiche** (Today · Signals · Desk · Portfolios) + Account.

### Querschnitt & Onboarding
| # | Screen | Zweck |
|---|---|---|
| 1 | Login / Signup | Einstieg |
| 2 | Onboarding — Market Interests | Personalisierung |
| 3 | Onboarding — Risk Profile | Research-Filter |
| 4 | Onboarding — Analyst Selection | Folge-Präferenzen |
| 5 | **Today** (Unified Feed) | Tägliche Startseite, Mix aller Säulen |

### Säule A — Signals
| # | Screen | Zweck |
|---|---|---|
| 6 | Signals Overview (Market Grid, abonniert) | Schnellzugriff |
| 7 | Market Detail Desktop (Chart + Analysis) | Kernfläche |
| 8 | Market Detail Mobile | Mobile Adaption |
| 9 | Alerts Center | Übergreifend |

### Säule B — Desk
| # | Screen | Zweck |
|---|---|---|
| 10 | Desk Overview (Research Feed) | Aktuelles Research |
| 11 | Research Report Detail (Longread) | Konsum |
| 12 | Analyst Profile | Track-Record & Publikationen |
| 13 | Convictions View („Our Theses") | Kernüberzeugungen transparent |
| 14 | AI Briefing Modal | Tägliche AI-Zusammenfassung |

### Säule C — Portfolios
| # | Screen | Zweck |
|---|---|---|
| 15 | Portfolios Overview (Strategiegalerie) | Auswahl |
| 16 | Portfolio Detail (Positionen, Historie, Begründung) | Tiefe |
| 17 | Portfolio Performance (Chart vs. Benchmark) | Track-Record |
| 18 | Portfolio Fit Check (Depot-Overlay) | Self-Analyse |

### Querschnitt & Account
| # | Screen | Zweck |
|---|---|---|
| 19 | Unified Search | Alles auffindbar |
| 20 | Account / Subscription | Verwaltung |
| 21 | Notification Preferences | Kontrolle über Signal-Flut |
| 22 | Empty-States & Paywall-States | Conversion + Ruhe |

**Bonus (wenn Zeit):** Alert-Toast-System, Video-Player-Overlay, Search-Suggest-Dropdown, onboarding-complete celebration state.

---

## 6. Design-Prinzipien (verbindlich)

1. **Ruhe statt Bloomberg.** Die Kategorie ist visuell überladen. Premise wirkt fokussiert, atmet. Großzügige Weißräume, klare Hierarchie. Dichte kommt erst beim zweiten Hinsehen.
2. **Der Chart ist der Star, das Argument der Regisseur.** Auf Market-Detail- und Report-Seiten ist der Content dominanter als Chrome/Navigation. Die „Premise" steht textlich gleichberechtigt neben dem Chart.
3. **Zwei-Sekunden-Read.** Jeder Screen transportiert seine Kernaussage in 2 Sekunden (Ampel, Zahl, Icon). Tiefe beim zweiten Scroll.
4. **Vertrauen durch Präzision, nicht durch Protzigkeit.** Kein Lambo-Krypto-Look, keine Glitzer-Gradienten, keine Rockets. Erwachsen, techniknah, wertig.
5. **Mobile ist nicht zweite Wahl.** Push-Alerts und Quick-Checks passieren mobil. Mobile-Designs gleichberechtigt skizzieren, nicht nur andeuten.
6. **Farbe hat Funktion.** Keine Deko-Farben. Grün = bullish, Rot = bearish, Markenfarbe = neutrale Information. Farbkodierung immer mit zweitem Kanal (Icon/Text) gesichert → WCAG AA, Rot-Grün-Blindheit abgesichert.
7. **Analysten sind Menschen, keine Avatare.** Analyst-Profile werden warm und konkret gestaltet — Fotos echt, Bios persönlich, Track-Records transparent. Keine Generic-Business-Stock-Look.

---

## 7. Visuelle Leitplanken

### 7.1 Farbpalette (Vorschlag, darf verfeinert werden)

| Rolle | Wert | Hinweis |
|---|---|---|
| Background Light | `#FAFCFF` | Fast-weiß, kühl |
| Background Dark (später) | `#0B1220` | Tiefes Nacht-Blau, für Dark-Mode-Tokens vorgesehen |
| **Primary / Brand** | `#1E4F6B` (tiefes Petrol-Teal) | Ruhig, präzise, unverbraucht im Fintech |
| Primary Accent | `#5AB3C2` | Hellere Teal-Variante für Hover/Fokus |
| Bullish | `#1FB57A` | Sattes Grün, nicht Neon |
| Bearish | `#E4483C` | Warmes Rot, nicht Signalrot |
| Neutral | `#6B7A90` | Für „Neutral"-Ampel und sekundäre UI |
| Zielzone-Fill | Primary @ 15 % Alpha | Halbtransparent |
| Gray Scale | `50 / 100 / 300 / 500 / 700 / 900` | Sauber durchgestuft |

### 7.2 Typografie

- **Headlines:** **General Sans** oder **Söhne** (geometrisch, Charakter, premium-feel)
- **Body:** **Inter** (bewährt, lesbar, offen)
- **Kurse / Zahlen:** **JetBrains Mono** oder **Inter** mit `font-variant-numeric: tabular-nums` — Kurse dürfen nicht springen beim Ticker-Update
- **„The Premise"-Block:** leichter Serif-Akzent möglich (z. B. **Tiempos Headline** oder **Source Serif**) — um textliche Thesen vom UI-Text abzuheben und den Research-Haus-Gestus zu transportieren

Hierarchie: maximal 3 unterschiedliche Größen pro Screen.

### 7.3 Bildsprache

- Keine Stockfotos mit lachenden Anzugträgern
- **Analyst-Fotos:** Realistisch, professionell aber warm, einheitliches Licht/Farb-Treatment über alle Profile
- **Illustrationen:** nur für Empty-States und Onboarding — schlicht, monoton im Markenfarb-Ton
- **Hauptästhetik:** Datenvisualisierung selbst — Charts, Zielzonen, Gewichtungsgrafiken sind die Bildsprache

### 7.4 Micro-Interactions

- Sanfte Zahlen-Tweens bei Kursänderungen (keine Schock-Flashes)
- Zielzonen pulsieren dezent, wenn Kurs hineinläuft
- Alert-Toasts schieben sich von rechts ein, auto-dismiss nach 6 s
- Hover auf Chart zeigt Candle-Details in dezentem Tooltip, nicht als Modal

### 7.5 Logo-Richtung

- **Wortmarke** in custom-spaced General-Sans-Variante, Kleinbuchstaben: `premise`
- **Bildmarke** (optional): geometrisch abstrahiertes Dreieck als Prämissen-Symbol (aus Logik: Prämisse → Schlussfolgerung), oder ein minimalistisches „P" mit eingebauter Richtungslinie
- Muss als 1024×1024 App-Icon und als 32-px-Favicon funktionieren
- Zwei Versionen: Full-Color auf Hell, Reversed für Dark Mode

---

## 8. Tonalität (UI-Text)

- **Englisch-first**, DE-Lokalisierung vollständig.
- **Produktsprache:** „You" in EN, „Sie" in DE (Zielgruppe 28–55, hoher Anteil über 40).
- **Klar, präzise, ohne Hype.** „Target zone reached" statt „🚀 BOOM! Target hit!"
- **Keine leeren Schlagwörter.** Keine „revolutionär", „disruptiv", „to the moon".
- **Ehrlich über Unsicherheit.** „Primary scenario (65 % probability)" wirkt glaubwürdiger als „will go up".
- **Analyst-Voice bleibt sichtbar.** Research-Reports behalten die persönliche Stimme des Autors — Premise homogenisiert nicht zu Corporate-Speak.

**Beispiele:**
- ✅ „Our premise: The Fed pivots in Q3. Here's what we're buying."
- ❌ „🔥 HUGE call! Fed about to PIVOT! You don't want to miss this!"
- ✅ „Europe Value 2026 outperformed the Stoxx 600 by 7.2 % since inception."
- ❌ „Our strategy is CRUSHING the market. Don't sleep on this!"

---

## 9. Referenz-Mood

### Gute Richtungen
- **Linear (App)** — Ruhe, Dichte, Klarheit
- **Stripe Dashboard** — Zahlen-fokussiert, vertrauenerweckend
- **TradingView (aufgeräumter)** — Chart-Kompetenz
- **Wise App** — Seriös aber nicht steif
- **Apple Stocks** — Radikale Reduktion
- **Substack Reader** — Lese-Oberflächen-Qualität für Research-Reports
- **Public.com** — Retail-Investing premium, ohne Krypto-Look

### Ausdrücklich nicht
- **eToro** (zu sozial, zu bunt)
- **Bloomberg Terminal** (zu dicht, zu Alt-Finanz)
- **Robinhood** (zu gamifiziert, unseriös)
- **Krypto-Exchanges allgemein** (zu laut, zu neon)
- **Typische HKCM-Marketing-Landingpages** (zu verkäuferisch)

---

## 10. Deliverables

1. **Moodboard** (1 Seite) — Farben, Typo, 3 Referenz-Screens, Logo-Richtung
2. **Wireframes** (Low-Fi) der 22 Screens
3. **Hi-Fi Designs** von mindestens:
   - Today (Unified Feed)
   - Market Detail Desktop + Mobile (Säule A)
   - Research Report Detail (Säule B)
   - Analyst Profile (Säule B)
   - Portfolio Detail (Säule C)
   - Alerts Center
4. **Design-Tokens** als JSON/CSS-Variablen (Farben, Spacing, Radien, Typographie, Shadows) — für nahtlose Entwicklung
5. **Komponentenbibliothek:**
   - „The Premise"-Block (Signature-Component)
   - Chart-Card (mit Zielzone, Wellen-Labels)
   - Market-Tile (Grid-Cell für Overview)
   - Alert-Toast
   - Ampel-Badge (Bullish/Neutral/Bearish)
   - Analyst-Card
   - Portfolio-Weight-Visualisierung (Donut oder Bar-Split)
   - Navigation (Top-Bar Desktop, Bottom-Tab Mobile)

---

## 11. Constraints & offene Fragen

- **Branding noch nicht final.** Premise als Arbeitsname — parallel laufen TM-Recherche (DPMA/EUIPO/USPTO Klasse 9 + 36) und Domain-Sicherung (`premise.markets` frei, sichern vor Design-Freigabe).
- **Fallback-Namen:** Helix, Lodestar — platzhalter-kompatibel designen (Logo-Slot 32 px Höhe, Wortmarke).
- **Sprache:** EN primär, DE vollständig lokalisiert. Bitte Textlängen großzügig kalkulieren (DE-Wörter ~25 % länger als EN).
- **Dark Mode:** Nicht MVP, aber Tokens so anlegen, dass Dark Mode später additiv funktioniert.
- **Accessibility:** WCAG AA minimum. Farbkodierung immer mit zweitem Kanal (Icon/Text).
- **Chart-Engine (Tech):** Lightweight-Charts (TradingView OSS) oder Highcharts Stock. Bitte Design kompatibel zu deren Rendering denken (z. B. kein SVG-only-Custom).

---

## 12. Start-Empfehlung für den Designer

**Phase 1 (Konzept-Gate, vor Wireframes):**
1. Moodboard mit 2 Richtungsvarianten („Editorial-Research-House" vs. „Precision-Instrument")
2. Logo-Richtungen (3 Skizzen)
3. Design-Token-Entwurf
4. Hi-Fi-Konzept eines Schlüssel-Screens (Empfehlung: **Market Detail Desktop** — dort verdichten sich Chart-Signature, Premise-Block, Analyst-Attribution und Alert-State in einer Ansicht)

→ **Feedback-Runde mit Tobias**, bevor die restlichen 21 Screens angefasst werden.

**Phase 2:** Wireframes aller 22 Screens, dann Hi-Fi in Wellen nach Säule.

---

**Ende des Briefings.** Bei Rückfragen direkt an Tobias.
