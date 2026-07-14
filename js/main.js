/* Kopf-/Fußzeile, Sprachwechsel, Diagramm, Zeitstrahl, Suche und Kontaktformular. */

/* Formspree-ID eintragen. Solange "DEIN_FORMSPREE_ID" steht, öffnet das
   Formular als Fallback das E-Mail-Programm (mailto). */
const FORMSPREE_ID = "mpqgevwr";
const CONTACT_MAIL = "babenko.yana2206@gmail.com";

const I18N = window.EU_I18N;

/* Thema (hell / dunkel) — hell ist Standard */
function currentTheme() { return localStorage.getItem("eu_theme") || "light"; }
document.documentElement.dataset.theme = currentTheme(); // früh setzen → kein Flackern

const THEME_ICONS = {
  // aktives Thema dunkel → Sonne zeigen (Klick schaltet auf hell) und umgekehrt
  dark:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
  light: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`,
};

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("eu_theme", theme);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.innerHTML = THEME_ICONS[theme];
}

function initTheme() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.addEventListener("click", () =>
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
}

/* EU-Sternenkreis als SVG */
function starsSVG(cx, cy, r, fontSize, cls) {
  let s = "";
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const x = (cx + r * Math.cos(a)).toFixed(1);
    const y = (cy + r * Math.sin(a)).toFixed(1);
    s += `<text x="${x}" y="${y}" font-size="${fontSize}" fill="#ffcc00"
            text-anchor="middle" dominant-baseline="central" class="${cls || ""}">★</text>`;
  }
  return s;
}

/* Logo */
function logoSVG() {
  return `<svg viewBox="0 0 100 100" role="img" aria-label="EU Logo">
    <circle cx="50" cy="50" r="48" fill="#003399"/>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#4d7cff" stroke-width="1.5" opacity="0.6"/>
    ${starsSVG(50, 50, 30, 11)}
  </svg>`;
}

/* Header */
const NAV = [
  { key: "nav.home",      href: "index.html",        page: "home" },
  { key: "nav.chrono",    href: "chronologie.html",  page: "chrono" },
  { key: "nav.influence", href: "einfluss.html",     page: "influence" },
  { key: "nav.contact",   href: "kontakt.html",      page: "contact" },
];

function buildHeader(current) {
  const links = NAV.map(n =>
    `<a href="${n.href}" data-i18n="${n.key}" class="${n.page === current ? "active" : ""}">${n.key}</a>`
  ).join("");

  const langBtns = Object.entries(I18N.langs).map(([code, o]) =>
    `<button data-lang="${code}"><img class="flag" src="assets/flags/${o.cc}.svg" alt=""> ${o.name}</button>`
  ).join("");

  return `
  <header class="site-header">
    <div class="container nav">
      <a class="logo" href="index.html">
        ${logoSVG()}
        <span class="logo-text"><b>Europa</b><span>Union</span></span>
      </a>
      <nav class="nav-links" id="navLinks">${links}</nav>
      <div class="header-tools" id="headerTools">
        <div class="search" id="searchWrap">
          <svg class="search-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
          </svg>
          <input type="search" id="siteSearch" data-i18n-ph="search.ph" autocomplete="off" aria-label="Suche">
          <div class="search-results" id="searchResults" role="listbox"></div>
        </div>
        <button class="theme-toggle" id="themeToggle" aria-label="Thema wechseln" title="Thema wechseln">${THEME_ICONS[currentTheme()]}</button>
        <div class="lang" id="langWrap">
          <button class="lang-btn" id="langBtn" aria-haspopup="true" aria-expanded="false">
            <img class="cur-flag" src="assets/flags/de.svg" alt="">
            <span class="cur-name">Deutsch</span>
            <svg class="chev" width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="lang-menu" role="menu">${langBtns}</div>
        </div>
        <button class="burger" id="burger" aria-label="Menü"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>`;
}

/* Footer */
function sourceIcon(kind) {
  if (kind === "eu") return `<svg viewBox="0 0 24 24" fill="none" stroke="#ffcc00" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>`;
  if (kind === "ep") return `<svg viewBox="0 0 24 24" fill="none" stroke="#4d7cff" stroke-width="1.8"><path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M12 3l8 5H4l8-5z"/></svg>`;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="#38d39f" stroke-width="1.8"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>`;
}

function buildFooter() {
  const sources = [
    { kind: "eu", href: "https://european-union.europa.eu", name: "european-union.europa.eu", d: "src.eu.d" },
    { kind: "ep", href: "https://www.europarl.europa.eu",   name: "europarl.europa.eu",       d: "src.ep.d" },
    { kind: "es", href: "https://ec.europa.eu/eurostat",     name: "ec.europa.eu/eurostat",    d: "src.es.d" },
  ].map(s => `
    <a class="source-link" href="${s.href}" target="_blank" rel="noopener">
      <span class="s-ic">${sourceIcon(s.kind)}</span>
      <span><b>${s.name}</b><small data-i18n="${s.d}"></small></span>
    </a>`).join("");

  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="logo" href="index.html">
            ${logoSVG()}
            <span class="logo-text"><b>Europa</b><span>Union</span></span>
          </a>
          <p data-i18n="footer.tagline"></p>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer.sources"></h4>
          <div class="sources">${sources}</div>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer.legal"></h4>
          <a href="agb.html" data-i18n="footer.agb"></a>
          <a href="datenschutz.html" data-i18n="footer.privacy"></a>
          <a href="impressum.html" data-i18n="footer.imprint"></a>
        </div>
      </div>
    </div>
  </footer>`;
}

/* Zurück nach oben */
const TO_TOP = `
  <button class="to-top" id="toTop" aria-label="Nach oben">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
  </button>`;

/* Übersetzung anwenden */
function applyLang(lang) {
  document.documentElement.lang = lang;
  I18N.set(lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = I18N.t(el.getAttribute("data-i18n"), lang);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = I18N.t(el.getAttribute("data-i18n-html"), lang);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = I18N.t(el.getAttribute("data-i18n-ph"), lang);
  });

  // Sprach-Button aktualisieren
  const cur = I18N.langs[lang];
  const cf = document.querySelector(".cur-flag");
  const cn = document.querySelector(".cur-name");
  if (cf) cf.src = "assets/flags/" + cur.cc + ".svg";
  if (cn) cn.textContent = cur.name;
  document.querySelectorAll(".lang-menu button").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang));

  // Ländernamen im Diagramm
  document.querySelectorAll("[data-country]").forEach(el => {
    const c = I18N.countries[el.getAttribute("data-country")];
    if (c) el.textContent = c[lang] ?? c.de;
  });
}

/* Bevölkerung in Mio. (Eurostat, gerundet), absteigend sortiert */
const POP = [
  ["DE", 83.5], ["FR", 68.2], ["IT", 58.9], ["ES", 48.6],
  ["PL", 36.7], ["RO", 19.0], ["NL", 17.9], ["BE", 11.7],
  ["CZ", 10.9], ["SE", 10.5], ["PT", 10.5], ["GR", 10.4],
  ["HU", 9.6], ["AT", 9.1], ["BG", 6.4], ["DK", 5.9],
  ["FI", 5.6], ["SK", 5.4], ["IE", 5.3], ["HR", 3.9],
  ["LT", 2.9], ["SI", 2.1], ["LV", 1.9], ["EE", 1.4],
  ["CY", 0.9], ["LU", 0.7], ["MT", 0.5],
];

function buildChart() {
  const mount = document.getElementById("chart-mount");
  if (!mount) return;
  const max = POP[0][1];
  const rows = POP.map(([code, val]) => {
    const pct = (val / max) * 100;
    return `
      <div class="chart-row">
        <span class="cn"><img class="flag" src="assets/flags/${code.toLowerCase()}.svg" alt="" loading="lazy"><span data-country="${code}"></span></span>
        <div class="chart-track"><div class="chart-bar" data-w="${pct}"></div></div>
        <span class="chart-val">${val.toFixed(1)}</span>
      </div>`;
  }).join("");
  mount.innerHTML = rows;
}

function animateChart() {
  const mount = document.getElementById("chart-mount");
  if (!mount) return;
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        mount.querySelectorAll(".chart-bar").forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.w + "%"; }, i * 45);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.2 });
  io.observe(mount);
}

/* Zeitstrahl (gebogene Kurve mit Knoten) */
const EVENTS = [
  { y: "1951", k: "1951" }, { y: "1957", k: "1957" },
  { y: "1979", k: "1979" }, { y: "1985", k: "1985" },
  { y: "1993", k: "1993" }, { y: "2002", k: "2002" },
  { y: "2004", k: "2004" }, { y: "2012", k: "2012" },
  { y: "2020", k: "2020" },
];

function buildTimeline() {
  const mount = document.getElementById("timeline-mount");
  if (!mount) return;
  const W = 1900, H = 520, cy = 260, amp = 40;
  const wave = x => cy - amp * Math.sin((x / W) * Math.PI * 4);

  // Kurvenpfad
  let d = `M 0 ${wave(0).toFixed(1)}`;
  for (let x = 20; x <= W; x += 20) d += ` L ${x} ${wave(x).toFixed(1)}`;

  // Knoten
  const n = EVENTS.length;
  const nodes = EVENTS.map((ev, i) => {
    const x = 110 + i * ((W - 220) / (n - 1));
    const y = wave(x);
    const up = i % 2 === 0; // strikt abwechselnd oben/unten → keine Überlappung
    return `
      <div class="tl-node ${up ? "up" : "down"}" style="left:${(x / W) * 100}%; top:${(y / H) * 100}%">
        <span class="pt"></span>
        <a class="tl-card" href="#event-${ev.y}">
          <figure class="ph" style="--c1:#16305f;--c2:#0a1a3a">
            <img src="assets/images/${ev.y}.jpg" alt="${ev.y}" loading="lazy" onerror="this.remove()">
            <span class="ph-face"></span>
          </figure>
          <div class="yr">${ev.y}</div>
          <div class="tt" data-i18n="ev.${ev.k}.t"></div>
          <div class="ds" data-i18n="ev.${ev.k}.s"></div>
          <span class="more" data-i18n="chrono.more"></span>
        </a>
      </div>`;
  }).join("");

  mount.innerHTML = `
    <div class="timeline">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
        <path class="curve" d="${d}"/>
      </svg>
      ${nodes}
    </div>`;

  // Automatischer Durchlauf: Strecke = Spurbreite − Bildschirmbreite
  const track = mount.querySelector(".timeline");
  function setup() {
    const view = mount.clientWidth || window.innerWidth;
    const pan = Math.max(0, track.offsetWidth - view);
    track.style.setProperty("--tl-pan", pan + "px");
    // Tempo konstant halten (längere Strecke → längere Dauer)
    const dur = Math.max(20, Math.min(46, Math.round(pan / 55) + 14));
    track.style.setProperty("--tl-dur", dur + "s");
    track.classList.toggle("running", pan > 30);
  }
  setup();
  window.addEventListener("resize", setup);

  // Klick auf ein Ereignis → sanft zur ausführlichen Beschreibung scrollen
  mount.addEventListener("click", (e) => {
    const card = e.target.closest(".tl-card");
    if (!card) return;
    const hash = card.getAttribute("href");
    const target = hash && hash.startsWith("#") ? document.querySelector(hash) : null;
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.classList.remove("flash");
    void target.offsetWidth; // Reflow erzwingen, damit die Animation neu startet
    target.classList.add("flash");
  });
}

/* Scroll-Reveal */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

/* Kontaktformular */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("formStatus");
  const lang = () => I18N.get();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!email || !message) return;

    // Fallback: kein Formspree konfiguriert → mailto öffnen
    if (FORMSPREE_ID === "DEIN_FORMSPREE_ID") {
      const subj = encodeURIComponent("EU-Website: Frage von " + email);
      const body = encodeURIComponent(message + "\n\n— " + email);
      window.location.href = `mailto:${CONTACT_MAIL}?subject=${subj}&body=${body}`;
      status.className = "form-status ok";
      status.textContent = I18N.t("contact.ok", lang());
      form.reset();
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        status.className = "form-status ok";
        status.textContent = I18N.t("contact.ok", lang());
        form.reset();
      } else { throw new Error("bad response"); }
    } catch (err) {
      status.className = "form-status err";
      status.textContent = I18N.t("contact.err", lang());
    }
  });
}

/* Suche — durchsucht das i18n-Wörterbuch in der aktuellen Sprache
   und verlinkt zur passenden Seite. */

/* Präfix des Schlüssels (z. B. "home", "ev", "inf") → Zielseite. */
const SEARCH_PAGE = {
  home: "index.html", fact: "index.html", chart: "index.html",
  chrono: "chronologie.html", ev: "chronologie.html", hd: "chronologie.html",
  inf: "einfluss.html", contact: "kontakt.html",
  agb: "agb.html", dsg: "datenschutz.html", imp: "impressum.html",
};
/* Zielseite → Rubrik-Beschriftung (i18n-Schlüssel) im Suchergebnis. */
const SEARCH_CAT = {
  "index.html": "nav.home", "chronologie.html": "nav.chrono",
  "einfluss.html": "nav.influence", "kontakt.html": "nav.contact",
  "agb.html": "agb.title", "datenschutz.html": "dsg.title", "impressum.html": "imp.title",
};

/* Baut aus einem Übersetzungs-Schlüssel das Sprungziel (Link + Rubrik).
   Schlüssel ohne durchsuchbare Seite (Navigation, Footer …) → null. */
function searchTargetForKey(key) {
  const page = SEARCH_PAGE[key.split(".")[0]];
  if (!page) return null;
  const year = key.match(/\d{4}/); // nur Chronologie-Schlüssel enthalten ein Jahr
  const anchor = page === "chronologie.html" && year ? "#event-" + year[0] : "";
  return { href: page + anchor, cat: SEARCH_CAT[page] };
}

const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
function escapeHTML(s) {
  return s.replace(/[&<>"]/g, c => HTML_ESCAPES[c]);
}

/* Textausschnitt rund um den Treffer, mit hervorgehobenem Suchwort */
function searchSnippet(text, pos, len) {
  const ctx = 48;
  const start = Math.max(0, pos - ctx);
  const end = Math.min(text.length, pos + len + ctx);
  const pre = start > 0 ? "… " : "";
  const post = end < text.length ? " …" : "";
  const before = escapeHTML(text.slice(start, pos));
  const hit = escapeHTML(text.slice(pos, pos + len));
  const after = escapeHTML(text.slice(pos + len, end));
  return pre + before + "<mark>" + hit + "</mark>" + after + post;
}

function runSearch(rawQuery) {
  const lang = I18N.get();
  const q = rawQuery.trim().toLowerCase();
  if (q.length < 2) return [];
  // Pro Ziel (Seite + Anker) nur ein Treffer — der längste (informativste) Ausschnitt.
  const byDest = new Map();
  for (const key in I18N.dict) {
    const target = searchTargetForKey(key);
    if (!target) continue;
    const text = I18N.t(key, lang).replace(/<[^>]+>/g, ""); // evtl. HTML entfernen
    const pos = text.toLowerCase().indexOf(q);
    if (pos === -1) continue;
    const prev = byDest.get(target.href);
    if (!prev || text.length > prev.text.length) {
      byDest.set(target.href, { text, pos, len: q.length, ...target });
    }
  }
  return Array.from(byDest.values()).slice(0, 8);
}

function renderSearchResults(results, box) {
  const lang = I18N.get();
  if (!results.length) {
    box.innerHTML = `<div class="search-empty">${I18N.t("search.none", lang)}</div>`;
    box.classList.add("open");
    return;
  }
  box.innerHTML = results.map((r, i) =>
    `<a href="${r.href}" role="option" class="${i === 0 ? "active" : ""}">
      <span class="cat">${escapeHTML(I18N.t(r.cat, lang))}</span>
      <span class="snip">${searchSnippet(r.text, r.pos, r.len)}</span>
    </a>`).join("");
  box.classList.add("open");
}

/* Auf schmalen Bildschirmen wandert das Suchfeld ins Burger-Menü,
   auf breiten zurück in die Kopfzeile (rechts, vor die Sprachauswahl). */
function placeSearch() {
  const wrap = document.getElementById("searchWrap");
  const nav = document.getElementById("navLinks");
  const tools = document.getElementById("headerTools");
  if (!wrap || !nav || !tools) return;
  const mobile = window.matchMedia("(max-width: 720px)").matches;
  if (mobile) {
    if (wrap.parentElement !== nav) nav.insertBefore(wrap, nav.firstChild);
  } else if (wrap.parentElement !== tools) {
    tools.insertBefore(wrap, tools.firstChild);
  }
}

function initSearch() {
  const input = document.getElementById("siteSearch");
  const box = document.getElementById("searchResults");
  if (!input || !box) return;

  placeSearch();
  window.addEventListener("resize", placeSearch);

  const update = () => {
    if (input.value.trim().length < 2) { box.classList.remove("open"); box.innerHTML = ""; return; }
    renderSearchResults(runSearch(input.value), box);
  };
  input.addEventListener("input", update);
  input.addEventListener("focus", update);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const first = box.querySelector("a");
      if (first) window.location.href = first.getAttribute("href");
    } else if (e.key === "Escape") {
      box.classList.remove("open"); input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#searchWrap")) box.classList.remove("open");
  });
}

/* Init */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "";

  // Header / Footer / Button einfügen
  document.body.insertAdjacentHTML("afterbegin", buildHeader(page));
  document.body.insertAdjacentHTML("beforeend", buildFooter());
  document.body.insertAdjacentHTML("beforeend", TO_TOP);

  // dynamische Inhalte
  buildChart();
  buildTimeline();

  // Sprache anwenden
  applyLang(I18N.get());

  // Sprachmenü
  const wrap = document.getElementById("langWrap");
  const btn = document.getElementById("langBtn");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrap.classList.toggle("open");
    btn.setAttribute("aria-expanded", wrap.classList.contains("open"));
  });
  document.querySelectorAll(".lang-menu button").forEach(b => {
    b.addEventListener("click", () => {
      applyLang(b.dataset.lang);
      wrap.classList.remove("open");
    });
  });
  document.addEventListener("click", () => wrap.classList.remove("open"));

  // Burger-Menü
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", () => navLinks.classList.toggle("open"));

  // Zurück nach oben
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    toTop.classList.toggle("show", window.scrollY > 400);
  }, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Thema, Animationen, Suche & Formular
  initTheme();
  initReveal();
  animateChart();
  initSearch();
  initContactForm();
});
