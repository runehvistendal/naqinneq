/* =========================================================================
   Naqinneq.gl — fælles motor (router, søgning, oplæsning, tilgængelighed)
   Bruges af begge designs. Ingen afhængigheder.
   ========================================================================= */

window.Core = (function () {
  "use strict";

  var S = window.SITE;

  /* undgå at browseren genskaber gammel scrollposition ved genindlæsning */
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  /* ---------------- DOM-helpere ---------------- */
  function qs(sel, el) { return (el || document).querySelector(sel); }
  function qsa(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  /* ---------------- Sprog (da/kl — kl falder tilbage til da) ------------- */
  var lang = localStorage.getItem("naq-lang") || "da";
  function t(key) {
    var entry = S.ui[key];
    if (typeof entry === "string") return entry;
    if (!entry) return key;
    return entry[lang] || entry.da;
  }
  function setLang(l) {
    lang = l;
    localStorage.setItem("naq-lang", l);
    document.documentElement.lang = (l === "kl" ? "kl" : "da");
  }
  function getLang() { return lang; }

  /* ---------------- Router (hash-baseret) ---------------- */
  function currentRoute() {
    var h = location.hash || "#/";
    var r = h.replace(/^#\/?/, "").replace(/\/+$/, "");
    return decodeURIComponent(r);
  }
  function href(route) { return "#/" + (route || ""); }
  function go(route) { location.hash = href(route); }
  function onRoute(handler) {
    window.addEventListener("hashchange", function () { handler(currentRoute()); });
    handler(currentRoute());
  }

  /* ---------------- Brødkrumme + sektions-undermenu ---------------- */
  function breadcrumb(route, page) {
    var crumbs = [{ label: t("home"), route: "" }];
    if (!page) return crumbs;
    if (page.article) { crumbs.push({ label: "Nyheder", route: "nyheder" }); crumbs.push({ label: page.title }); return crumbs; }
    if (page.course) { crumbs.push({ label: "Ressourcer", route: "ressourcer/laese-og-skriveteknologi" }); crumbs.push({ label: "Kurser", route: "ressourcer/kurser" }); crumbs.push({ label: page.title }); return crumbs; }
    if (page.section) crumbs.push({ label: page.section });
    if (page.group) crumbs.push({ label: page.group });
    if (route) crumbs.push({ label: page.title });
    return crumbs;
  }

  function subnavFor(route) {
    /* find den menugruppe ruten hører til, så vi kan vise undernavigation */
    var result = null;
    S.nav.forEach(function (menu) {
      var lists = menu.groups ? menu.groups : [{ label: menu.label, children: menu.children }];
      lists.forEach(function (grp) {
        (grp.children || []).forEach(function (item) {
          if (item.route === route) result = { menu: menu.label, group: grp.label, items: grp.children };
        });
      });
    });
    /* kursussider + nyhedsartikler hører under deres lister */
    if (!result && /^ressourcer\/kurser\//.test(route)) return subnavFor("ressourcer/kurser");
    return result;
  }

  /* ---------------- Søgning ---------------- */
  var searchIndex = null;
  function blockText(b) {
    var parts = [];
    if (b.text) parts.push(b.text);
    if (b.items) b.items.forEach(function (i) { parts.push(typeof i === "string" ? i : (i.title || "") + " " + (i.text || "")); });
    if (b.groups) b.groups.forEach(function (g) { parts.push(g.title + " " + g.items.join(" ")); });
    if (b.title) parts.push(b.title);
    if (b.buttons) b.buttons.forEach(function (btn) { parts.push(btn.text); });
    return parts.join(" ");
  }
  function buildIndex() {
    if (searchIndex) return searchIndex;
    searchIndex = [];
    Object.keys(S.pages).forEach(function (route) {
      var p = S.pages[route];
      var txt = (p.blocks || []).map(blockText).join(" ");
      if (p.hero) txt += " " + p.hero.h1 + " " + p.hero.sub;
      searchIndex.push({ route: route, title: route === "" ? "Forside" : p.title, section: p.section || "", text: txt });
    });
    S.news.forEach(function (n) {
      searchIndex.push({ route: "nyheder/" + n.slug, title: n.title, section: "Nyheder · " + n.date, text: n.teaser + " " + n.body.map(blockText).join(" ") });
    });
    S.courses.forEach(function (c) {
      searchIndex.push({ route: "ressourcer/kurser/" + c.slug, title: c.title, section: "Kursus · " + c.when, text: c.text + " " + (c.body || []).map(blockText).join(" ") });
    });
    return searchIndex;
  }
  function search(query) {
    var q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    var words = q.split(/\s+/);
    return buildIndex()
      .map(function (item) {
        var hay = (item.title + " " + item.text).toLowerCase();
        var score = 0;
        words.forEach(function (w) {
          if (item.title.toLowerCase().indexOf(w) > -1) score += 5;
          if (hay.indexOf(w) > -1) score += 1;
        });
        var idx = item.text.toLowerCase().indexOf(words[0]);
        var snippet = idx > -1
          ? (idx > 40 ? "…" : "") + item.text.slice(Math.max(0, idx - 40), idx + 90) + "…"
          : item.text.slice(0, 110) + "…";
        return { item: item, score: score, snippet: snippet };
      })
      .filter(function (r) { return r.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, 8);
  }

  /* ---------------- Oplæsning ----------------
     DA: browserens Web Speech API med bedste danske stemme.
     KL: Martha-talesyntesen fra Oqaasileriffik — samme API som hovedsitet
     (lib/martha-tts.ts): GET /martha/tts/?n=json&t=… → { fn, du, ts },
     lyden hentes fra /martha/data/xx/yy/<fn>.                          */
  var MARTHA_API = "https://oqaasileriffik.gl/martha/tts/";
  var MARTHA_AUDIO = "https://oqaasileriffik.gl/martha/data/";
  var speaking = false;
  var stateCb = null;
  var marthaSeq = 0;      // bump = afbryd igangværende Martha-afspilning
  var marthaAudio = null;

  function setSpeaking(on) {
    speaking = on;
    if (stateCb) stateCb(on);
  }

  /* Del teksten i bidder på sætningsgrænser (Martha-API'et tager korte tekster ad gangen) */
  function chunkText(text, max) {
    var parts = text.match(/[^.!?…]+[.!?…]*\s*/g) || [text];
    var chunks = [], cur = "";
    parts.forEach(function (p) {
      if ((cur + p).length > max && cur) { chunks.push(cur.trim()); cur = ""; }
      cur += p;
    });
    if (cur.trim()) chunks.push(cur.trim());
    return chunks;
  }

  function speakKl(text) {
    var seq = ++marthaSeq;
    var queue = chunkText(text, 400);
    var idx = 0;
    function playNext() {
      if (seq !== marthaSeq) return;          // stoppet i mellemtiden
      if (idx >= queue.length) { marthaAudio = null; setSpeaking(false); return; }
      var t = queue[idx++];
      fetch(MARTHA_API + "?n=json&t=" + encodeURIComponent(t))
        .then(function (r) { return r.json(); })
        .then(function (rv) {
          if (seq !== marthaSeq) return;
          if (!rv || !rv.fn) { playNext(); return; }
          var src = MARTHA_AUDIO + rv.fn.slice(0, 2) + "/" + rv.fn.slice(2, 4) + "/" + rv.fn;
          marthaAudio = new Audio(src);
          marthaAudio.addEventListener("ended", playNext);
          marthaAudio.addEventListener("error", playNext);
          marthaAudio.play().catch(function () { playNext(); });
        })
        .catch(function () { if (seq === marthaSeq) playNext(); });
    }
    setSpeaking(true);
    playNext();
  }

  function speakDa(text) {
    if (!("speechSynthesis" in window)) {
      alert("Oplæsning understøttes ikke i denne browser endnu.");
      return;
    }
    function go() {
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "da-DK";
      u.rate = 0.95;
      var voices = speechSynthesis.getVoices();
      var daVoice =
        voices.find(function (v) { return v.lang === "da-DK" && v.localService; }) ||
        voices.find(function (v) { return v.lang === "da-DK"; }) ||
        voices.find(function (v) { return /^da/i.test(v.lang); });
      if (daVoice) u.voice = daVoice;
      u.onend = u.onerror = function () { setSpeaking(false); };
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    }
    setSpeaking(true);
    /* Chrome indlæser stemmer asynkront — vent på voiceschanged hvis listen er tom */
    if (speechSynthesis.getVoices().length > 0) go();
    else speechSynthesis.addEventListener("voiceschanged", go, { once: true });
  }

  function speak(text, onStateChange) {
    stateCb = onStateChange || null;
    if (speaking) { stopSpeak(); return; }
    if (lang === "kl") speakKl(text);
    else speakDa(text);
  }

  function stopSpeak() {
    marthaSeq++;
    if (marthaAudio) { try { marthaAudio.pause(); } catch (e) {} marthaAudio = null; }
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    if (speaking) setSpeaking(false);
  }
  function isSpeaking() { return speaking; }

  /* ---------------- Tilgængelighedsindstillinger ---------------- */
  var PREF_KEY = "naq-prefs";
  var defaultPrefs = { fontSize: 0, lineHeight: 0, letterSpacing: 0, dysFont: false, ruler: false, calm: false };
  var prefs = (function () {
    try { return Object.assign({}, defaultPrefs, JSON.parse(localStorage.getItem(PREF_KEY) || "{}")); }
    catch (e) { return Object.assign({}, defaultPrefs); }
  })();

  function applyPrefs() {
    var root = document.documentElement;
    root.style.setProperty("--pref-font-scale", [1, 1.12, 1.25][prefs.fontSize] || 1);
    root.style.setProperty("--pref-line-height", [1.6, 1.8, 2.0][prefs.lineHeight] || 1.6);
    root.style.setProperty("--pref-letter-spacing", ["0em", "0.03em", "0.07em"][prefs.letterSpacing] || "0em");
    root.classList.toggle("dys-font", !!prefs.dysFont);
    root.classList.toggle("ruler-on", !!prefs.ruler);
    var calm = !!prefs.calm || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.toggle("calm", calm);
    document.dispatchEvent(new CustomEvent("naq:calmchange", { detail: { calm: calm } }));
  }
  function setPref(key, value) {
    prefs[key] = value;
    localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
    applyPrefs();
  }
  function getPrefs() { return Object.assign({}, prefs); }
  function resetPrefs() {
    prefs = Object.assign({}, defaultPrefs);
    localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
    applyPrefs();
  }
  function isCalm() {
    return document.documentElement.classList.contains("calm");
  }

  /* ---------------- Læselineal ---------------- */
  function initRuler() {
    var ruler = el('<div class="reading-ruler" aria-hidden="true"></div>');
    document.body.appendChild(ruler);
    function move(y) { ruler.style.top = (y - 36) + "px"; }
    document.addEventListener("mousemove", function (e) { move(e.clientY); }, { passive: true });
    document.addEventListener("touchmove", function (e) { if (e.touches[0]) move(e.touches[0].clientY); }, { passive: true });
  }

  /* ---------------- Gamification: besøgte sider, badges ---------------- */
  function totalRoutes() {
    return Object.keys(S.pages).length + S.news.length + S.courses.length;
  }
  function visitedKey(designKey) { return "naq-visited-" + designKey; }
  function visit(designKey, route) {
    var set;
    try { set = JSON.parse(localStorage.getItem(visitedKey(designKey)) || "[]"); } catch (e) { set = []; }
    var isNew = set.indexOf(route) === -1;
    if (isNew) { set.push(route); localStorage.setItem(visitedKey(designKey), JSON.stringify(set)); }
    return { count: set.length, total: totalRoutes(), isNew: isNew };
  }
  function visitedCount(designKey) {
    try { return JSON.parse(localStorage.getItem(visitedKey(designKey)) || "[]").length; }
    catch (e) { return 0; }
  }

  var BADGES = [
    { at: 1,  name: "Nysgerrig",      icon: "🐾" },
    { at: 5,  name: "Opdager",        icon: "🧭" },
    { at: 12, name: "Stifinder",      icon: "🛷" },
    { at: 25, name: "Polarforsker",   icon: "❄️" },
    { at: 40, name: "Naqinneq-mester", icon: "🏔️" }
  ];
  function badgeFor(count) {
    var got = null;
    BADGES.forEach(function (b) { if (count >= b.at) got = b; });
    return got;
  }
  function nextBadge(count) {
    return BADGES.find(function (b) { return count < b.at; }) || null;
  }

  /* ---------------- Diverse ---------------- */
  function scrollTopSmooth() {
    window.scrollTo({ top: 0, behavior: isCalm() ? "auto" : "smooth" });
  }

  function initRevealObserver(rootEl) {
    if (!("IntersectionObserver" in window)) {
      qsa(".reveal", rootEl).forEach(function (n) { n.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    qsa(".reveal", rootEl).forEach(function (n) { io.observe(n); });
  }

  return {
    qs: qs, qsa: qsa, esc: esc, el: el,
    t: t, setLang: setLang, getLang: getLang,
    currentRoute: currentRoute, href: href, go: go, onRoute: onRoute,
    breadcrumb: breadcrumb, subnavFor: subnavFor,
    search: search,
    speak: speak, stopSpeak: stopSpeak, isSpeaking: isSpeaking,
    setPref: setPref, getPrefs: getPrefs, resetPrefs: resetPrefs, applyPrefs: applyPrefs, isCalm: isCalm,
    initRuler: initRuler,
    visit: visit, visitedCount: visitedCount, totalRoutes: totalRoutes,
    badgeFor: badgeFor, nextBadge: nextBadge, BADGES: BADGES,
    scrollTopSmooth: scrollTopSmooth, initRevealObserver: initRevealObserver
  };
})();
