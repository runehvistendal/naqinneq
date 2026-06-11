/* =========================================================================
   NAQINNEQ.GL — DESIGN B · "LEGENDE & GAMIFICERET"
   Renderer + gamification. Indhold kommer fra ../shared/content.js.
   ========================================================================= */
(function () {
  "use strict";

  var S = window.SITE, C = window.Core;
  var $ = C.qs, esc = C.esc;
  var DESIGN = "legende";

  var entryEmoji = { course: "🎓", teacher: "🏫", adult: "💪" };
  var featureEmoji = { speaker: "🔊", pen: "✍️", camera: "📸", devices: "📱" };
  var headTints = ["", "alt-sun", "alt-rosa", "alt-himmel"];

  function blobs() {
    return '<div class="blob b1" aria-hidden="true"></div><div class="blob b2" aria-hidden="true"></div><div class="blob b3" aria-hidden="true"></div>';
  }

  /* ====================================================================
     KONFETTI
     ==================================================================== */
  var confetti = (function () {
    var canvas = $("#confetti-canvas"), ctx = canvas.getContext("2d");
    var parts = [], raf = null;
    var colors = ["#ff6b5e", "#ffc83d", "#14b8ad", "#7c5cff", "#4ea8ff", "#ff8ad4"];
    function size() { canvas.width = innerWidth * devicePixelRatio; canvas.height = innerHeight * devicePixelRatio; }
    window.addEventListener("resize", size);
    size();
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts = parts.filter(function (p) { return p.y < canvas.height + 30 && p.life > 0; });
      if (!parts.length) { raf = null; return; }
      parts.forEach(function (p) {
        p.vy += .12 * devicePixelRatio;
        p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(1, p.life / 40);
        ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6);
        ctx.restore();
      });
      raf = requestAnimationFrame(tick);
    }
    function burst(xr, yr, n) {
      if (C.isCalm()) return;
      var x = (xr == null ? .5 : xr) * canvas.width;
      var y = (yr == null ? .35 : yr) * canvas.height;
      for (var i = 0; i < (n || 110); i++) {
        var a = Math.random() * Math.PI * 2, v = (Math.random() * 7 + 3) * devicePixelRatio;
        parts.push({
          x: x, y: y,
          vx: Math.cos(a) * v, vy: Math.sin(a) * v - 4 * devicePixelRatio,
          s: (Math.random() * 8 + 5) * devicePixelRatio,
          rot: Math.random() * Math.PI, vr: (Math.random() - .5) * .3,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 130 + Math.random() * 60
        });
      }
      if (!raf) tick();
    }
    return { burst: burst };
  })();

  /* ====================================================================
     TOASTS
     ==================================================================== */
  function toast(emoji, title, sub) {
    var root = $("#toast-root");
    var t = C.el('<div class="toast"><span class="t-emoji">' + emoji + '</span><span><b>' + esc(title) + '</b><small>' + esc(sub) + '</small></span></div>');
    root.appendChild(t);
    setTimeout(function () {
      t.style.transition = "opacity .4s, transform .4s";
      t.style.opacity = "0";
      t.style.transform = "translateY(14px)";
      setTimeout(function () { t.remove(); }, 420);
    }, 4200);
  }

  /* ====================================================================
     GAMIFICATION
     ==================================================================== */
  function specialBadges() {
    return [
      { key: "naq-quiz-done", name: "Quizmester", icon: "🏅", hint: "Gennemfør quizzen" },
      { key: "naq-word-done", name: "Ordsamler", icon: "🧩", hint: "Saml et ord i spillet" },
      { key: "naq-read-used", name: "Lytteøre", icon: "🎧", hint: "Brug oplæsning" }
    ];
  }
  function hasSpecial(key) { return localStorage.getItem(key) === "1"; }
  function earnSpecial(key, name, icon) {
    if (hasSpecial(key)) return;
    localStorage.setItem(key, "1");
    toast(icon, "Ny badge: " + name + "!", "Se den under Min rejse 🧭");
    confetti.burst(.5, .2, 90);
    updateProgressPill();
  }

  function trackVisit(route) {
    var v = C.visit(DESIGN, route);
    if (v.isNew) {
      var b = C.BADGES.find(function (b) { return b.at === v.count; });
      if (b) {
        toast(b.icon, "Ny badge: " + b.name + "!", "Du har udforsket " + v.count + " af " + v.total + " sider");
        confetti.burst(.5, .2, 120);
      }
    }
    updateProgressPill();
  }

  function updateProgressPill() {
    var pill = $("#progress-pill");
    if (!pill) return;
    var count = C.visitedCount(DESIGN);
    var badge = C.badgeFor(count);
    pill.innerHTML = '<span class="badge-emoji">' + (badge ? badge.icon : "🧭") + '</span> ' + count + '/' + C.totalRoutes();
    pill.title = "Min rejse — du har udforsket " + count + " af " + C.totalRoutes() + " sider";
  }

  /* ====================================================================
     HEADER + FOOTER
     ==================================================================== */
  function navItemHtml(menu) {
    var html = '<li class="top-item"><button type="button" aria-haspopup="true">' + esc(menu.label) + ' <span class="chev">▾</span></button>';
    if (menu.groups) {
      html += '<div class="dropdown two-col">';
      menu.groups.forEach(function (g) {
        html += '<div><div class="d-subhead">' + esc(g.label) + '</div>';
        g.children.forEach(function (it) { html += '<a href="' + C.href(it.route) + '">' + esc(it.label) + '</a>'; });
        html += '</div>';
      });
      html += '</div>';
    } else {
      html += '<div class="dropdown">';
      menu.children.forEach(function (it) { html += '<a href="' + C.href(it.route) + '">' + esc(it.label) + '</a>'; });
      html += '</div>';
    }
    return html + '</li>';
  }

  function renderHeader() {
    var h = '<div class="rainbow-bar"></div>';
    h += '<div class="header-main"><div class="wrap header-inner">';
    h += '<a class="logo" href="#/"><span class="bear">🐻‍❄️</span><span class="name">Naqinneq.gl<small>' + esc(S.tagline) + '</small></span></a>';
    h += '<button type="button" class="progress-pill" id="progress-pill" aria-label="Min rejse"></button>';
    h += '<button type="button" class="icon-btn" id="u-read" title="' + esc(C.t("readAloud")) + '" aria-label="' + esc(C.t("readAloud")) + '">🔊</button>';
    h += '<button type="button" class="icon-btn" id="u-a11y" title="' + esc(C.t("accessibility")) + '" aria-label="' + esc(C.t("accessibility")) + '">♿</button>';
    h += '<button type="button" class="icon-btn" id="u-search" title="' + esc(C.t("search")) + '" aria-label="' + esc(C.t("search")) + '">🔍</button>';
    h += '<span class="lang-switch" role="group" aria-label="Sprog">' +
         '<button type="button" data-lang="kl"' + (C.getLang() === "kl" ? ' class="active"' : '') + '>KL</button>' +
         '<button type="button" data-lang="da"' + (C.getLang() === "da" ? ' class="active"' : '') + '>DA</button></span>';
    h += '<button type="button" class="icon-btn burger" aria-expanded="false" aria-label="Menu">☰</button>';
    h += '</div></div>';

    h += '<div class="nav-row"><div class="wrap"><nav aria-label="Hovedmenu"><ul>' + S.nav.map(navItemHtml).join('') + '</ul></nav></div></div>';

    h += '<div class="mobile-panel" id="mobile-panel"><div class="wrap">';
    h += '<div class="m-quick">' +
         '<button type="button" class="btn btn-white act-read">🔊 ' + esc(C.t("readAloud")) + '</button>' +
         '<button type="button" class="btn btn-white act-a11y">♿ ' + esc(C.t("accessibility")) + '</button>' +
         '<button type="button" class="btn btn-white act-search">🔍 ' + esc(C.t("search")) + '</button>' +
         '<span class="lang-switch" role="group" aria-label="Sprog">' +
         '<button type="button" data-lang="kl"' + (C.getLang() === "kl" ? ' class="active"' : '') + '>KL</button>' +
         '<button type="button" data-lang="da"' + (C.getLang() === "da" ? ' class="active"' : '') + '>DA</button></span>' +
         '</div>';
    S.nav.forEach(function (menu) {
      h += '<div class="m-group"><button type="button" aria-expanded="false">' + esc(menu.label) + ' <span class="chev">▾</span></button><div class="m-items"><div>';
      if (menu.groups) {
        menu.groups.forEach(function (g) {
          h += '<div class="m-subhead">' + esc(g.label) + '</div>';
          g.children.forEach(function (it) { h += '<a href="' + C.href(it.route) + '">' + esc(it.label) + '</a>'; });
        });
      } else {
        menu.children.forEach(function (it) { h += '<a href="' + C.href(it.route) + '">' + esc(it.label) + '</a>'; });
      }
      h += '</div></div></div>';
    });
    h += '</div></div>';

    $("#site-header").innerHTML = h;

    $(".burger").addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      this.setAttribute("aria-expanded", open);
    });
    C.qsa(".m-group > button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var open = btn.parentElement.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
      });
    });
    $("#mobile-panel").addEventListener("click", function (e) { if (e.target.closest("a")) closeNav(); });
    C.qsa("#u-search, .act-search").forEach(function (b) {
      b.addEventListener("click", function () { closeNav(); openOverlay("search-overlay", true); });
    });
    C.qsa("#u-a11y, .act-a11y").forEach(function (b) {
      b.addEventListener("click", function () { closeNav(); openOverlay("a11y-overlay"); });
    });
    $("#progress-pill").addEventListener("click", openJourney);
    C.qsa("#u-read, .act-read").forEach(function (b) {
      b.addEventListener("click", function () { closeNav(); readMain(); });
    });
    C.qsa(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () {
        C.setLang(b.dataset.lang);
        renderHeader(); renderFooter(); render(C.currentRoute());
      });
    });
    updateProgressPill();
  }

  function closeNav() {
    document.body.classList.remove("nav-open");
    var b = $(".burger"); if (b) b.setAttribute("aria-expanded", "false");
  }

  function renderFooter() {
    var f = '<div class="footer-wave" aria-hidden="true"><svg viewBox="0 0 1440 24" preserveAspectRatio="none">' +
      '<path d="M0 24 C 120 0 240 0 360 12 C 480 24 600 24 720 12 C 840 0 960 0 1080 12 C 1200 24 1320 24 1440 8 L 1440 24 Z" fill="#2b2350"/></svg></div>';
    f += '<div class="wrap"><div class="footer-grid">';
    f += '<div class="f-brand"><strong>🐻‍❄️ Naqinneq.gl</strong><p>' + esc(S.fullTitle) + '</p></div>';
    f += '<div><h3>' + esc(C.t("shortcuts")) + '</h3><ul>' + S.footer.shortcuts.map(function (l) {
      return '<li><a href="' + C.href(l.route) + '">' + esc(l.label) + '</a></li>';
    }).join('') + '</ul></div>';
    f += '<div><h3>' + esc(C.t("about")) + '</h3><ul>' + S.footer.about.map(function (l) {
      return '<li><a href="' + C.href(l.route) + '">' + esc(l.label) + '</a></li>';
    }).join('') + '</ul></div>';
    f += '<div><h3>' + esc(C.t("accessibility")) + '</h3><ul>' + S.footer.legal.map(function (l) {
      return '<li><span class="f-dead" title="Siden er under udarbejdelse">' + esc(l.label) + '</span></li>';
    }).join('') + '</ul></div>';
    f += '</div><div class="footer-bottom"><span>' + esc(S.copyright) + '</span><span>' + esc(S.address) + '</span></div></div>';
    $("#site-footer").innerHTML = f;
  }

  /* ====================================================================
     OPLÆSNING
     ==================================================================== */
  function readMain() {
    var main = $("#main-content");
    var text = main ? main.innerText.replace(/\s+/g, " ").slice(0, 6000) : "";
    C.speak(text, function (on) {
      C.qsa("#u-read, .tool-btn.read-btn").forEach(function (b) { b.classList.toggle("speaking", on); });
      if (on) earnSpecial("naq-read-used", "Lytteøre", "🎧");
    });
  }

  /* ====================================================================
     BLOK-RENDERERE
     ==================================================================== */
  function btnHtml(b, i) {
    var cls = "btn " + (b.primary ? "btn-coral" : "btn-white");
    if (b.href) return '<a class="' + cls + '" href="' + esc(b.href) + '"' + (b.external ? ' target="_blank" rel="noopener"' : '') + '>' + esc(b.text) + (b.external ? ' ↗' : '') + '</a>';
    return '<a class="' + cls + '" href="' + C.href(b.route) + '">' + esc(b.text) + '</a>';
  }

  function squiggle(color) {
    return '<svg class="squiggle" viewBox="0 0 70 8" aria-hidden="true"><path d="M1 5 Q 8 1 15 5 T 29 5 T 43 5 T 57 5 T 69 5" fill="none" stroke="' + (color || "#ffc83d") + '" stroke-width="3.4" stroke-linecap="round"/></svg>';
  }

  function renderBlocks(blocks) {
    return blocks.map(function (b) {
      switch (b.t) {
        case "lead": return '<p class="lead reveal">' + esc(b.text) + '</p>';
        case "h2": return '<h2 class="reveal">' + esc(b.text) + squiggle() + '</h2>';
        case "h3": return '<h3 class="reveal">' + esc(b.text) + '</h3>';
        case "p": return '<p class="reveal">' + esc(b.text) + '</p>';
        case "ul": return '<ul class="bullets reveal">' + b.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
        case "cards":
          return '<div class="info-cards">' + b.items.map(function (c, i) {
            return '<div class="info-card reveal" data-delay="' + (i % 4) + '"><h3>' + esc(c.title) + '</h3><p>' + esc(c.text) + '</p>' +
              (c.route ? '<a href="' + C.href(c.route) + '">' + esc(c.linkText || "Læs mere") + '</a>' : '') + '</div>';
          }).join('') + '</div>';
        case "infobox":
          return '<div class="infobox reveal"><span class="ib-icon">💡</span><div>' +
            (b.title ? '<h4>' + esc(b.title) + '</h4>' : '') + '<p>' + esc(b.text) + '</p></div></div>';
        case "cta":
          return '<div class="reveal" style="display:flex;gap:.9rem;flex-wrap:wrap;margin-top:1.6rem">' + b.buttons.map(btnHtml).join('') + '</div>';
        case "signs":
          return '<div class="signs-grid">' + b.groups.map(function (g, gi) {
            return '<div class="signs-col reveal" data-delay="' + gi + '"><h3>' + (gi === 0 ? '🧒' : '🧑') + ' ' + esc(g.title) + '</h3><ul>' +
              g.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></div>';
          }).join('') + '</div>';
        case "features":
          return '<div class="features-grid">' + b.items.map(function (f, i) {
            return '<div class="feature reveal" data-delay="' + (i % 4) + '"><div class="f-icon">' + (featureEmoji[f.icon] || "✨") + '</div>' +
              '<span class="tag">' + esc(f.tag) + '</span><h3>' + esc(f.title) + '</h3><p>' + esc(f.text) + '</p></div>';
          }).join('') + '</div>';
        case "timeline":
          return '<div class="timeline reveal">' + b.items.map(function (it) {
            var emoji = it.status === "done" ? "✅" : it.status === "next" ? "🚀" : "⏳";
            var label = it.status === "done" ? "I gang nu" : it.status === "next" ? "Næste fase" : "Senere";
            return '<div class="tl-item ' + it.status + '"><span class="tl-emoji">' + emoji + '</span><span class="status">' + label + '</span><h4>' + esc(it.title) + '</h4><p>' + esc(it.text) + '</p></div>';
          }).join('') + '</div>';
        case "media":
          var emoji = b.kind === "podcast" ? "🎧" : "🎬";
          if (b.embed) {
            return '<div class="reveal" style="margin:1.2rem 0"><h3 style="margin-bottom:.4rem">' + emoji + ' ' + esc(b.title) + '</h3><p style="margin-bottom:.8rem">' + esc(b.text) + '</p>' +
              '<iframe src="' + esc(b.embed) + '" title="' + esc(b.title) + '" loading="lazy" allowfullscreen' +
              ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"' +
              ' style="width:100%;max-width:720px;aspect-ratio:16/9;border:0;border-radius:18px;display:block"></iframe></div>';
          }
          return '<div class="media-card ' + b.kind + ' reveal"><div class="m-visual">' + emoji + '</div><div class="m-body"><h3>' + esc(b.title) + '</h3><p>' + esc(b.text) + '</p>' +
            '<span class="todo-note">' + emoji + ' Afspilleren kobles på, når medie-adressen er klar.</span></div></div>';
        case "attribution":
          return '<p class="attribution">' + esc(b.text).replace("NVOL.dk", '<a href="' + esc(b.href) + '" target="_blank" rel="noopener">NVOL.dk</a>') + '</p>';
        case "contactHint":
          var linkRoute = b.route || "videnscenteret/kontakt";
          var txt = esc(b.text);
          var patterns = b.linkText ? [b.linkText] : ["kontaktsiden", "Kontakt os her", "Kontakt os", "Om os"];
          for (var pi = 0; pi < patterns.length; pi++) {
            var p = esc(patterns[pi]);
            if (txt.indexOf(p) > -1) { txt = txt.replace(p, '<a href="' + C.href(linkRoute) + '">' + p + '</a>'); break; }
          }
          return '<div class="contact-hint reveal">💬 ' + txt + '</div>';
        case "staff":
          return '<div class="staff-grid">' + S.staff.map(function (p, i) {
            return '<div class="staff-card reveal" data-delay="' + (i % 2) + '"><span class="avatar">' + esc(p.initials) + '</span><div>' +
              '<h3>' + esc(p.name) + '</h3><div class="role">' + esc(p.title) + '</div>' +
              '<div class="links"><a href="tel:' + esc(p.phone.replace(/\s/g, "")) + '">📞 ' + esc(p.phone) + '</a>' +
              '<a href="mailto:' + esc(p.email) + '">✉️ ' + esc(p.email) + '</a></div></div></div>';
          }).join('') + '</div>';
        case "centerInfo":
          var ci = S.centerInfo;
          var tiles = [
            { icon: "📍", label: "Adresse", value: ci.address },
            { icon: "📞", label: "Hovednummer", value: ci.phone },
            { icon: "✉️", label: "E-mail", value: ci.email },
            { icon: "🕘", label: "Åbningstid", value: ci.hours },
            { icon: "🏛️", label: "Under", value: ci.under }
          ];
          return '<div class="center-info">' + tiles.map(function (t, i) {
            return '<div class="ci-tile reveal" data-delay="' + (i % 2) + '"><span class="t-icon">' + t.icon + '</span><div><b>' + esc(t.label) + '</b><span>' + esc(t.value) + '</span></div></div>';
          }).join('') + '</div>';
        case "contactForm":
          return contactFormHtml();
        case "newsList":
          return '<div class="news-list">' + S.news.map(newsRowHtml).join('') + '</div>';
        case "courseList":
          return '<div class="course-grid">' + S.courses.map(courseCardHtml).join('') + '</div>';
        default: return "";
      }
    }).join('');
  }

  function contactFormHtml(opts) {
    opts = opts || {};
    var third = opts.course
      ? '<div class="field"><label for="cf-org">Organisation / skole</label><input id="cf-org" type="text" name="org"></div>'
      : '<div class="field"><label for="cf-subject">Emne</label><input id="cf-subject" type="text" name="subject"></div>';
    var formAttrs = opts.course
      ? ' data-form="tilmelding" data-kursus="' + esc(opts.courseTitle || '') + '"'
      : ' data-form="kontakt"';
    return '<form class="form-grid reveal"' + formAttrs + '>' +
      '<div class="field"><label for="cf-name">Navn *</label><input id="cf-name" type="text" name="name" required></div>' +
      '<div class="field"><label for="cf-email">E-mail *</label><input id="cf-email" type="email" name="email" required></div>' +
      third +
      '<div class="field full"><label for="cf-msg">' + (opts.course ? 'Kommentar eller spørgsmål' : 'Besked *') + '</label><textarea id="cf-msg" name="message"' + (opts.course ? '' : ' required') + '></textarea></div>' +
      /* honeypot — skjult felt som spam-bots udfylder; API'et afviser hvis udfyldt */
      '<input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px">' +
      '<div class="full" style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<button type="submit" class="btn btn-coral">' + (opts.course ? '🙋 Tilmeld mig' : '💌 Send besked') + '</button>' +
      '<span class="form-note">Vi vender tilbage inden for 2 hverdage.</span></div></form>';
  }

  function newsRowHtml(n) {
    var dparts = n.date.split(" ");
    return '<a class="news-row reveal" href="' + C.href("nyheder/" + n.slug) + '">' +
      '<span class="nr-date"><b>' + esc(dparts[0].replace(".", "")) + '</b><span>' + esc((dparts[1] || "").slice(0, 3)) + ' ' + esc((dparts[2] || "").slice(2)) + '</span></span>' +
      '<span><span class="chip ' + n.category.toLowerCase() + '">' + esc(n.category) + '</span><h3>' + esc(n.title) + '</h3><p>' + esc(n.teaser) + '</p></span></a>';
  }

  function courseCardHtml(c, i) {
    return '<div class="course-card reveal" data-delay="' + (i % 2) + '">' +
      '<span class="cc-when">📅 ' + esc(c.when) + '</span>' +
      '<span class="cc-where">📍 ' + esc(c.where) + '</span>' +
      '<h3>' + esc(c.title) + '</h3><p>' + esc(c.text) + '</p>' +
      '<a class="btn btn-turkis" href="' + C.href("ressourcer/kurser/" + c.slug) + '">Se kursus og tilmeld</a></div>';
  }

  /* ====================================================================
     SIDEHOVED, UNDERMENU, HJÆLPEBOKS
     ==================================================================== */
  function headTint(page) {
    var i = ["Vidensområder", "Tests og screening", "Ressourcer", "Målgrupper", "Videnscenteret", "Nyheder"].indexOf(page.section);
    return headTints[(i + 1) % headTints.length] || "";
  }

  function pageHeadHtml(page, route) {
    var crumbs = C.breadcrumb(route, page).map(function (c, i, arr) {
      var s = c.route !== undefined && i < arr.length - 1
        ? '<a href="' + C.href(c.route) + '">' + esc(c.label) + '</a>'
        : '<span>' + esc(c.label) + '</span>';
      return s + (i < arr.length - 1 ? ' <span class="sep">›</span> ' : '');
    }).join('');
    return '<div class="page-head ' + headTint(page) + '">' + blobs() + '<div class="wrap">' +
      '<nav class="crumbs" aria-label="Brødkrumme">' + crumbs + '</nav>' +
      (page.section ? '<span class="section-tag">' + esc(page.group ? page.section + " · " + page.group : page.section) + '</span>' : '') +
      '<h1>' + esc(page.title) + '</h1>' +
      '<div class="page-tools"><button type="button" class="tool-btn read-btn">🔊 ' + esc(C.t("readAloud")) + '</button></div>' +
      '</div></div>';
  }

  function subnavHtml(route) {
    var sn = C.subnavFor(route);
    if (!sn) return "";
    var visited;
    try { visited = JSON.parse(localStorage.getItem("naq-visited-" + DESIGN) || "[]"); } catch (e) { visited = []; }
    return '<aside class="subnav"><div class="sn-title">' + esc(sn.group) + '</div><ul>' +
      sn.items.map(function (it) {
        var seen = visited.indexOf(it.route) > -1 && it.route !== route;
        return '<li><a href="' + C.href(it.route) + '"' + (it.route === route ? ' class="active" aria-current="page"' : '') + '>' +
          esc(it.label) + (seen ? '<span class="visited-dot" title="Besøgt">✅</span>' : '') + '</a></li>';
      }).join('') + '</ul></aside>';
  }

  function helpboxHtml() {
    return '<div class="helpbox-band"><div class="wrap"><div class="helpbox reveal">' +
      '<span class="hb-bear" aria-hidden="true">🐻‍❄️</span>' +
      '<div style="flex:1;min-width:220px"><h2>' + esc(C.t("helpTitle")) + '</h2><p>' + esc(C.t("helpText")) + '</p></div>' +
      '<a class="btn btn-sun" href="' + C.href("videnscenteret/kontakt") + '">' + esc(C.t("helpCta")) + ' →</a>' +
      '</div></div></div>';
  }

  /* ====================================================================
     FORSIDE
     ==================================================================== */
  function renderHome() {
    var home = S.pages[""];

    /* fremhæv to nøgleord i overskriften med tusch-effekt */
    var h1 = esc(home.hero.h1)
      .replace("ordblindhed", '<span class="hl">ordblindhed</span>')
      .replace("skrivevanskeligheder", '<span class="hl c2">skrivevanskeligheder</span>');

    var h = '<div class="route-view">';
    h += '<section class="hero">' + blobs();
    h += '<span class="float-sticker" style="left:6%;top:18%" aria-hidden="true">📚</span>';
    h += '<span class="float-sticker" style="right:8%;top:12%;animation-delay:-1.5s" aria-hidden="true">✏️</span>';
    h += '<span class="float-sticker" style="left:12%;bottom:10%;animation-delay:-3s" aria-hidden="true">🎧</span>';
    h += '<span class="float-sticker" style="right:14%;bottom:16%;animation-delay:-2.2s" aria-hidden="true">❄️</span>';
    h += '<div class="wrap hero-content">';
    h += '<span class="hero-kicker">🐻‍❄️ Naqinneq · Grønland</span>';
    h += '<h1>' + h1 + '</h1>';
    h += '<p class="sub">' + esc(home.hero.sub) + '</p>';
    h += '<div class="hero-search"><form class="box" data-hero-search>🔍' +
         '<input type="search" placeholder="' + esc(C.t("searchPlaceholder")) + '" aria-label="' + esc(C.t("search")) + '">' +
         '<button type="submit">' + esc(C.t("search")) + '</button></form></div>';
    h += '</div></section>';

    /* Indgangskort */
    h += '<section class="section" style="padding-top:.4rem"><div class="wrap">';
    h += '<span class="tape">Find din vej 🧭</span>';
    h += '<div class="entries">';
    home.entries.forEach(function (e, i) {
      h += '<a class="entry-card reveal" data-delay="' + i + '" href="' + C.href(e.route) + '">' +
        '<span class="icon">' + (entryEmoji[e.icon] || "✨") + '</span><h3>' + esc(e.title) + '</h3><p>' + esc(e.text) + '</p>' +
        '<span class="go">Kom i gang</span></a>';
    });
    h += '</div></div></section>';

    /* Nyheder */
    h += '<section class="section"><div class="wrap">';
    h += '<div class="section-head reveal"><div><span class="tape t-coral">Sidste nyt 📣</span><h2>Aktuelle nyheder</h2></div><a class="all-link" href="' + C.href("nyheder") + '">' + esc(C.t("seeAll")) + '</a></div>';
    h += '<div class="news-grid">';
    var newsEmoji = { Nyhed: "📰", Kursus: "🎓", Ressource: "🧰" };
    S.news.slice(0, 3).forEach(function (n, i) {
      h += '<a class="news-card reveal" data-delay="' + i + '" href="' + C.href("nyheder/" + n.slug) + '">' +
        '<div class="thumb">' + (newsEmoji[n.category] || "📰") + '</div>' +
        '<div class="body"><span class="chip ' + n.category.toLowerCase() + '">' + esc(n.category) + '</span>' +
        '<span class="date">' + esc(n.date) + '</span><h3>' + esc(n.title) + '</h3><p>' + esc(n.teaser) + '</p>' +
        '<span class="go">' + esc(C.t("readMore")) + ' →</span></div></a>';
    });
    h += '</div></div></section>';

    /* Materialer */
    h += '<section class="section" style="padding-top:.4rem"><div class="wrap">';
    h += '<div class="section-head reveal"><div><span class="tape t-sun">Frisk fra trykken 📦</span><h2>Nyeste materialer</h2></div><a class="all-link" href="' + C.href("ressourcer/materialer") + '">Se alle ressourcer</a></div>';
    h += '<div class="materials">';
    var mIcons = { Podcast: "🎧", Vejledning: "📘", Video: "🎬", Rapport: "📊" };
    S.materials.forEach(function (m, i) {
      h += '<a class="material-row reveal" data-delay="' + (i % 2) + '" href="' + C.href(m.route) + '">' +
        '<span class="m-icon">' + (mIcons[m.kind] || "📄") + '</span><span>' +
        '<div class="m-meta">' + esc(m.kind) + ' · ' + esc(m.date) + ' · ' + esc(m.meta) + '</div>' +
        '<h3>' + esc(m.title) + '</h3></span></a>';
    });
    h += '</div></div></section>';

    /* Spil-zone */
    h += '<section class="section game-zone"><div class="wrap">';
    h += '<div class="section-head reveal"><div><span class="tape t-lilla">Leg & lær 🎲</span><h2>Spillehjørnet</h2></div></div>';
    h += '<div class="game-grid">';
    h += '<div class="game-card reveal"><div class="g-head"><span class="g-emoji">🧠</span><div><h3>Quiz: Kender du ordblindhed?</h3><div class="g-sub">5 hurtige spørgsmål — kan du få alle rigtige?</div></div></div><div id="quiz-root"></div></div>';
    h += '<div class="game-card reveal" data-delay="1"><div class="g-head"><span class="g-emoji">🧩</span><div><h3>Saml ordet</h3><div class="g-sub">Tryk på bogstaverne i den rigtige rækkefølge.</div></div></div><div id="word-root"></div></div>';
    h += '</div></div></section>';

    /* Handlingsplan */
    h += '<section class="section"><div class="wrap"><div class="plan-banner reveal">' + blobs() +
      '<h2>' + esc(home.banner.h2) + '</h2><p>' + esc(home.banner.text) + '</p><div class="btns">' +
      home.banner.buttons.map(function (b) {
        return '<a class="btn ' + (b.primary ? 'btn-sun' : 'btn-white') + '" href="' + C.href(b.route) + '">' + esc(b.text) + '</a>';
      }).join('') + '</div></div></div></section>';

    h += '</div>';
    $("#main-content").innerHTML = h;

    $("[data-hero-search]").addEventListener("submit", function (e) {
      e.preventDefault();
      openOverlay("search-overlay", true, this.querySelector("input").value);
    });

    initQuiz($("#quiz-root"));
    initWordGame($("#word-root"));
  }

  /* ====================================================================
     QUIZ
     ==================================================================== */
  function initQuiz(root) {
    if (!root) return;
    var idx = 0, score = 0;
    function show() {
      if (idx >= S.quiz.length) {
        var msg = score === S.quiz.length ? "WOW — alle rigtige! Du er Naqinneq-ekspert! 🐻‍❄️🎉" :
                  score >= 3 ? "Flot klaret! Du ved en masse om ordblindhed. 💪" :
                  "Godt forsøgt — kig i vidensområderne og prøv igen!";
        root.innerHTML = '<div class="quiz-result"><div class="score">' + score + '/' + S.quiz.length + '</div><p>' + msg + '</p>' +
          '<div style="margin-top:1.2rem;display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">' +
          '<button type="button" class="btn btn-coral" data-again>🔁 Prøv igen</button>' +
          '<a class="btn btn-white" href="' + C.href("vidensomraader/ordblindhed") + '">📖 Lær mere</a></div></div>';
        root.querySelector("[data-again]").addEventListener("click", function () { idx = 0; score = 0; show(); });
        if (score >= 3) { confetti.burst(.3, .5, 140); earnSpecial("naq-quiz-done", "Quizmester", "🏅"); }
        return;
      }
      var q = S.quiz[idx];
      root.innerHTML = '<div class="quiz-progress"><i style="width:' + (idx / S.quiz.length * 100) + '%"></i></div>' +
        '<div class="quiz-q">' + (idx + 1) + '. ' + esc(q.q) + '</div>' +
        '<div class="quiz-opts">' + q.options.map(function (o, i) {
          return '<button type="button" class="quiz-opt" data-i="' + i + '">' + esc(o) + '</button>';
        }).join('') + '</div><div class="quiz-x"></div>';
      C.qsa(".quiz-opt", root).forEach(function (btn) {
        btn.addEventListener("click", function () {
          var i = +btn.dataset.i;
          C.qsa(".quiz-opt", root).forEach(function (b) { b.disabled = true; });
          if (i === q.correct) {
            btn.classList.add("correct"); score++;
            confetti.burst(.3, .55, 35);
          } else {
            btn.classList.add("wrong");
            C.qsa(".quiz-opt", root)[q.correct].classList.add("correct");
          }
          root.querySelector(".quiz-x").innerHTML = '<div class="quiz-explain">💡 ' + esc(q.explain) + '</div>' +
            '<div style="margin-top:1rem;text-align:right"><button type="button" class="btn btn-turkis" data-next>' +
            (idx === S.quiz.length - 1 ? "Se resultat 🏁" : "Næste →") + '</button></div>';
          root.querySelector("[data-next]").addEventListener("click", function () { idx++; show(); });
        });
      });
    }
    show();
  }

  /* ====================================================================
     SAML ORDET
     ==================================================================== */
  var WORDS = [
    { word: "LÆSNING", hint: "Det her bliver lettere med IntoWords 📖" },
    { word: "NANOQ", hint: "Isbjørn på kalaallisut — ligesom maskotten! 🐻‍❄️" },
    { word: "MARTHA", hint: "Den grønlandske talesyntese, der er på vej 🔊" },
    { word: "NUUK", hint: "Her bor videnscenteret — Imaneq 4 📍" }
  ];
  function initWordGame(root) {
    if (!root) return;
    var wi = 0;
    function shuffle(arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    }
    function show() {
      var w = WORDS[wi % WORDS.length], target = w.word, pos = 0;
      var letters = shuffle(target.split("").map(function (ch, i) { return { ch: ch, id: i }; }));
      root.innerHTML = '<div class="word-slots">' + target.split("").map(function () {
        return '<span class="word-slot"></span>';
      }).join('') + '</div>' +
      '<div class="letter-pool">' + letters.map(function (l) {
        return '<button type="button" class="letter-tile" data-ch="' + esc(l.ch) + '">' + esc(l.ch) + '</button>';
      }).join('') + '</div>' +
      '<div class="word-hint">💡 ' + esc(w.hint) + '</div>';
      var slots = C.qsa(".word-slot", root);
      C.qsa(".letter-tile", root).forEach(function (tile) {
        tile.addEventListener("click", function () {
          if (tile.disabled) return;
          if (tile.dataset.ch === target[pos]) {
            slots[pos].textContent = tile.dataset.ch;
            slots[pos].classList.add("filled");
            tile.disabled = true;
            pos++;
            if (pos === target.length) {
              confetti.burst(.7, .55, 120);
              earnSpecial("naq-word-done", "Ordsamler", "🧩");
              setTimeout(function () {
                root.innerHTML = '<div class="word-win"><div class="big">🎉</div><h3>' + esc(target) + '!</h3>' +
                  '<p style="color:var(--ink-soft);font-size:.9em;margin:.4rem 0 1rem">Flot samlet!</p>' +
                  '<button type="button" class="btn btn-coral" data-next-word>Nyt ord →</button></div>';
                root.querySelector("[data-next-word]").addEventListener("click", function () { wi++; show(); });
              }, 700);
            }
          } else {
            tile.style.animation = "shake .35s";
            setTimeout(function () { tile.style.animation = ""; }, 380);
          }
        });
      });
    }
    show();
  }

  /* ====================================================================
     SIDETYPER
     ==================================================================== */
  function renderPage(page, route) {
    var h = '<div class="route-view">' + pageHeadHtml(page, route);
    h += '<div class="page-body"><div class="wrap page-layout">';
    h += subnavHtml(route);
    h += '<div class="content">' + renderBlocks(page.blocks) + '</div>';
    h += '</div></div>';
    if (!page.noHelp) h += helpboxHtml();
    h += '</div>';
    $("#main-content").innerHTML = h;
    bindPageEvents();
  }

  function renderArticle(page, route) {
    var n = page.article;
    var h = '<div class="route-view">' + pageHeadHtml(page, route);
    h += '<div class="page-body"><div class="wrap"><div class="content" style="margin-inline:auto">';
    h += '<div class="article-meta reveal"><span class="chip ' + n.category.toLowerCase() + '">' + esc(n.category) + '</span><span>📅 ' + esc(n.date) + '</span></div>';
    if (n.image) {
      h += '<img class="reveal" src="' + esc(n.image) + '" alt="' + esc(n.imageAlt || "") + '"' +
        ' style="width:100%;max-width:640px;aspect-ratio:16/9;object-fit:cover;border-radius:18px;margin:.4rem 0 1.2rem;display:block">';
    }
    h += renderBlocks(n.body);
    h += '<a class="back-link" href="' + C.href("nyheder") + '">← ' + esc(C.t("backToNews")) + '</a>';
    h += '</div></div></div>' + helpboxHtml() + '</div>';
    $("#main-content").innerHTML = h;
    bindPageEvents();
  }

  function renderCourse(page, route) {
    var c = page.course;
    var h = '<div class="route-view">' + pageHeadHtml(page, route);
    h += '<div class="page-body"><div class="wrap page-layout">';
    h += subnavHtml(route);
    h += '<div class="content">';
    h += '<p class="lead reveal">' + esc(c.text) + '</p>';
    if (c.info) {
      h += '<div class="course-info reveal">' + Object.keys(c.info).map(function (k) {
        return '<div class="ci-row"><b>' + esc(k) + '</b><span>' + esc(c.info[k]) + '</span></div>';
      }).join('') + '</div>';
    }
    h += renderBlocks(c.body || []);
    if (c.program) {
      h += '<h2 class="reveal">Program' + squiggle("#14b8ad") + '</h2><div class="program">' + c.program.map(function (p) {
        return '<div class="pr-row reveal"><b>' + esc(p.when) + '</b><span>' + esc(p.what) + '</span></div>';
      }).join('') + '</div>';
    }
    if (c.signup) {
      h += '<h2 class="reveal">Tilmeld dig' + squiggle("#ff6b5e") + '</h2>' + contactFormHtml({ course: true, courseTitle: c.title });
    }
    h += '<div class="contact-hint reveal" style="margin-top:2rem">💬 Har du spørgsmål om kurset? Skriv til os på <a href="mailto:naqinneq@nanoq.gl">naqinneq@nanoq.gl</a> eller ring på (+299) 34 50 00.</div>';
    h += '</div></div></div>' + helpboxHtml() + '</div>';
    $("#main-content").innerHTML = h;
    bindPageEvents();
  }

  function render404() {
    $("#main-content").innerHTML = '<div class="route-view"><div class="page-body"><div class="wrap notfound">' +
      '<span class="nf-bear">🐻‍❄️❓</span>' +
      '<h1 style="margin:.8rem 0">' + esc(C.t("notFoundTitle")) + '</h1>' +
      '<p style="color:var(--ink-soft);max-width:430px;margin:0 auto 1.6rem">' + esc(C.t("notFoundText")) + '</p>' +
      '<a class="btn btn-coral" href="#/">🏠 Til forsiden</a></div></div></div>';
  }

  function bindPageEvents() {
    var rb = $(".read-btn");
    if (rb) rb.addEventListener("click", readMain);
    C.qsa("[data-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var isCourse = form.dataset.form === "tilmelding";
        var fd = new FormData(form);
        /* Payload matcher API-ruterne /api/kontakt og /api/tilmelding */
        var payload = isCourse
          ? { navn: fd.get("name"), email: fd.get("email"), organisation: fd.get("org") || "",
              kommentar: fd.get("message") || "", kursus: form.dataset.kursus || "", website: fd.get("website") || "" }
          : { navn: fd.get("name"), email: fd.get("email"), emne: fd.get("subject") || "",
              besked: fd.get("message") || "", website: fd.get("website") || "" };
        var btn = form.querySelector('button[type="submit"]');
        var btnText = btn ? btn.textContent : "";
        if (btn) { btn.disabled = true; btn.textContent = "Sender…"; }
        fetch(isCourse ? "/api/tilmelding" : "/api/kontakt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }).then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          return r.json();
        }).then(function () {
          confetti.burst(.5, .5, 90);
          form.innerHTML = '<div class="form-success"><div class="check">💌</div>' +
            '<h3>' + (isCourse ? 'Tak for din tilmelding!' : 'Tak for din besked!') + '</h3>' +
            '<p style="color:var(--ink-soft)">Vi vender tilbage hurtigst muligt.</p></div>';
        }).catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = btnText; }
          var note = form.querySelector(".form-note");
          if (note) note.textContent = "Beskeden kunne ikke sendes — prøv igen om lidt.";
        });
      });
    });
  }

  /* ====================================================================
     OVERLAYS
     ==================================================================== */
  function buildOverlays() {
    var o = '<div class="overlay" id="search-overlay" role="dialog" aria-modal="true" aria-label="' + esc(C.t("search")) + '">' +
      '<div class="overlay-panel">' +
      '<div class="search-input-row">🔍<input type="search" id="search-input" placeholder="' + esc(C.t("searchPlaceholder")) + '">' +
      '<button type="button" class="overlay-close" data-close aria-label="' + esc(C.t("close")) + '">✕</button></div>' +
      '<div class="search-results" id="search-results"><div class="search-empty">Skriv mindst 2 bogstaver for at søge.</div></div>' +
      '</div></div>';

    o += '<div class="overlay" id="a11y-overlay" role="dialog" aria-modal="true" aria-label="' + esc(C.t("accessibility")) + '">' +
      '<div class="overlay-panel">' +
      '<div class="overlay-head"><h2>♿ ' + esc(C.t("accessibility")) + '</h2><button type="button" class="overlay-close" data-close aria-label="' + esc(C.t("close")) + '">✕</button></div>' +
      '<div class="a11y-body">' +
      segRow("fontSize", C.t("fontSize"), ["Normal", "Større", "Størst"]) +
      segRow("lineHeight", C.t("lineHeight"), ["Normal", "Luftig", "Ekstra"]) +
      segRow("letterSpacing", C.t("letterSpacing"), ["Normal", "Lidt", "Meget"]) +
      switchRow("dysFont", C.t("dysFont"), "Skifter til skrifttypen OpenDyslexic") +
      switchRow("ruler", C.t("readingRuler"), "Fremhæver linjen du peger på") +
      switchRow("calm", C.t("calmMode"), "Slukker konfetti, blobs og bevægelse") +
      '<button type="button" class="btn btn-white a11y-reset" id="a11y-reset">' + esc(C.t("reset")) + '</button>' +
      '<div class="a11y-note">🔊 Oplæsning på dansk bruger browserens stemme — på kalaallisut bruges <b>Martha</b>-talesyntesen fra Oqaasileriffik (vælg KL øverst).</div>' +
      '</div></div></div>';

    o += '<div class="overlay" id="journey-overlay" role="dialog" aria-modal="true" aria-label="Min rejse">' +
      '<div class="overlay-panel">' +
      '<div class="overlay-head"><h2>🧭 Min rejse</h2><button type="button" class="overlay-close" data-close aria-label="' + esc(C.t("close")) + '">✕</button></div>' +
      '<div class="journey-body" id="journey-body"></div></div></div>';

    $("#overlays").innerHTML = o;

    /* Maskot */
    var mascotBtn = C.el('<button type="button" class="mascot" aria-label="Nanoq — få et godt råd">🐻‍❄️</button>');
    var bubble = C.el('<div class="mascot-bubble" role="status"></div>');
    document.body.appendChild(mascotBtn);
    document.body.appendChild(bubble);
    var facts = [
      "Vidste du? IntoWords er gratis for alle uddannelser i Grønland — og kan læse op på flere sprog.",
      "Du kan sagtens være både klog og ordblind. Det handler kun om, hvordan hjernen kobler bogstaver og lyde.",
      "Den grønlandske ordblindetest er under udvikling i 2025–2027.",
      "Martha hedder den grønlandske talesyntese, der er på vej til IntoWords.",
      "Naqinneq holder til på Imaneq 4 i Nuuk — og svarer normalt inden for én arbejdsdag.",
      "Screeningsværktøjer til 1.–3. klasse findes allerede på alle skoler og i MISI.",
      "„Nanoq“ betyder isbjørn på kalaallisut — ligesom mig! 🐻‍❄️",
      "Prøv quizzen på forsiden og vind en badge! 🏅"
    ];
    var fi = Math.floor(Math.random() * facts.length);
    mascotBtn.addEventListener("click", function () {
      if (bubble.classList.contains("show")) { bubble.classList.remove("show"); return; }
      bubble.innerHTML = "<b>Nanoq siger:</b>" + esc(facts[fi % facts.length]);
      fi++;
      bubble.classList.add("show");
      clearTimeout(bubble._t);
      bubble._t = setTimeout(function () { bubble.classList.remove("show"); }, 9000);
    });

    C.qsa(".overlay").forEach(function (ov) {
      ov.addEventListener("click", function (e) {
        if (e.target === ov || e.target.closest("[data-close]")) ov.classList.remove("open");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") C.qsa(".overlay.open").forEach(function (ov) { ov.classList.remove("open"); });
    });

    var input = $("#search-input"), results = $("#search-results");
    input.addEventListener("input", function () {
      var rs = C.search(input.value);
      if (input.value.trim().length < 2) {
        results.innerHTML = '<div class="search-empty">Skriv mindst 2 bogstaver for at søge.</div>';
      } else if (!rs.length) {
        results.innerHTML = '<div class="search-empty">' + esc(C.t("searchNoResults")) + '</div>';
      } else {
        results.innerHTML = rs.map(function (r) {
          return '<a class="search-result" href="' + C.href(r.item.route) + '">' +
            '<div class="sr-section">' + esc(r.item.section || "Side") + '</div>' +
            '<h3>' + esc(r.item.title) + '</h3><p>' + esc(r.snippet) + '</p></a>';
        }).join('');
        C.qsa(".search-result", results).forEach(function (a) {
          a.addEventListener("click", function () { $("#search-overlay").classList.remove("open"); });
        });
      }
    });

    syncA11yUI();
    C.qsa("[data-pref-seg]").forEach(function (seg) {
      C.qsa("button", seg).forEach(function (b) {
        b.addEventListener("click", function () { C.setPref(seg.dataset.prefSeg, +b.dataset.v); syncA11yUI(); });
      });
    });
    C.qsa("[data-pref-switch]").forEach(function (sw) {
      sw.addEventListener("click", function () {
        var key = sw.dataset.prefSwitch;
        C.setPref(key, !C.getPrefs()[key]);
        syncA11yUI();
      });
    });
    $("#a11y-reset").addEventListener("click", function () { C.resetPrefs(); syncA11yUI(); });
  }

  function segRow(key, label, names) {
    return '<div class="a11y-row"><span class="label">' + esc(label) + '</span>' +
      '<span class="seg" data-pref-seg="' + key + '">' + names.map(function (n, i) {
        return '<button type="button" data-v="' + i + '">' + esc(n) + '</button>';
      }).join('') + '</span></div>';
  }
  function switchRow(key, label, hint) {
    return '<div class="a11y-row"><span class="label">' + esc(label) + '<span class="hint">' + esc(hint) + '</span></span>' +
      '<button type="button" class="switch" data-pref-switch="' + key + '" role="switch" aria-label="' + esc(label) + '"></button></div>';
  }
  function syncA11yUI() {
    var p = C.getPrefs();
    C.qsa("[data-pref-seg]").forEach(function (seg) {
      C.qsa("button", seg).forEach(function (b) {
        b.classList.toggle("active", +b.dataset.v === p[seg.dataset.prefSeg]);
      });
    });
    C.qsa("[data-pref-switch]").forEach(function (sw) {
      var on = !!p[sw.dataset.prefSwitch];
      sw.classList.toggle("on", on);
      sw.setAttribute("aria-checked", on);
    });
  }

  function openOverlay(id, focusSearch, prefill) {
    var ov = document.getElementById(id);
    ov.classList.add("open");
    if (focusSearch) {
      var input = $("#search-input");
      if (typeof prefill === "string" && prefill) {
        input.value = prefill;
        input.dispatchEvent(new Event("input"));
      }
      setTimeout(function () { input.focus(); }, 80);
    }
  }

  function openJourney() {
    var body = $("#journey-body");
    var count = C.visitedCount(DESIGN), total = C.totalRoutes();
    var pct = Math.min(100, Math.round(count / total * 100));
    var h = '<div class="journey-progress"><div class="big">' + count + ' / ' + total + '</div>' +
      '<div>sider udforsket</div><div class="journey-bar"><i style="width:' + pct + '%"></i></div></div>';
    h += '<div><h3 style="margin-bottom:.7rem">🏅 Opdagelses-badges</h3><div class="badge-list">';
    C.BADGES.forEach(function (b) {
      var earned = count >= b.at;
      h += '<div class="badge-card ' + (earned ? "earned" : "locked") + '"><div class="b-icon">' + b.icon + '</div><b>' + esc(b.name) + '</b><small>' + (earned ? "Optjent!" : "Besøg " + b.at + " sider") + '</small></div>';
    });
    h += '</div></div>';
    h += '<div><h3 style="margin-bottom:.7rem">✨ Særlige badges</h3><div class="badge-list">';
    specialBadges().forEach(function (b) {
      var earned = hasSpecial(b.key);
      h += '<div class="badge-card ' + (earned ? "earned" : "locked") + '"><div class="b-icon">' + b.icon + '</div><b>' + esc(b.name) + '</b><small>' + (earned ? "Optjent!" : esc(b.hint)) + '</small></div>';
    });
    h += '</div></div>';
    body.innerHTML = h;
    openOverlay("journey-overlay");
  }

  /* ====================================================================
     ROUTER + INIT
     ==================================================================== */
  function render(route) {
    closeNav();
    C.stopSpeak();
    var page = S.getPage(route);
    if (route === "") renderHome();
    else if (!page) { render404(); window.scrollTo(0, 0); C.initRevealObserver($("#main-content")); return; }
    else if (page.article) renderArticle(page, route);
    else if (page.course) renderCourse(page, route);
    else renderPage(page, route);
    C.initRevealObserver($("#main-content"));
    window.scrollTo(0, 0);
    trackVisit(route);
  }

  C.applyPrefs();
  C.initRuler();
  renderHeader();
  renderFooter();
  buildOverlays();
  C.onRoute(render);
})();
