/* =========================================================================
   NAQINNEQ.GL — DESIGN A · "ARKTISK & LEVENDE"
   Renderer + interaktion. Indhold kommer fra ../shared/content.js.
   ========================================================================= */
(function () {
  "use strict";

  var S = window.SITE, C = window.Core;
  var $ = C.qs, esc = C.esc;

  /* ---------------- Ikoner (inline SVG) ---------------- */
  var I = {
    snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2v20M4 6l16 12M20 6L4 18M12 2l-2 3m2-3 2 3M12 22l-2-3m2 3 2-3M4 6l3.5.5M4 6l.5 3.5M20 18l-3.5-.5m3.5.5-.5-3.5M20 6l-3.5.5M20 6l-.5 3.5M4 18l3.5-.5M4 18l.5-3.5"/></svg>',
    course: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M22 10v6"/></svg>',
    teacher: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 8h6M7 12h4"/><path d="M9 20h6m-3-4v4"/></svg>',
    adult: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/></svg>',
    speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15 9.5a3.5 3.5 0 0 1 0 5M18 7a7 7 0 0 1 0 10"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m17 3 4 4L8 20l-5 1 1-5L17 3Z"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h3l2-3h8l2 3h3v12H3V8Z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    devices: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="14" height="10" rx="2"/><path d="M6 18h6"/><rect x="17" y="9" width="5" height="9" rx="1.5"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    org: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4"/><path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    play: '▶'
  };
  var entryIcons = { course: I.course, teacher: I.teacher, adult: I.adult };
  var featureIcons = { speaker: I.speaker, pen: I.pen, camera: I.camera, devices: I.devices };

  function aurora() { return '<div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>'; }

  function iceSvg() {
    return '<div class="hero-ice" aria-hidden="true"><svg viewBox="0 0 1440 150" preserveAspectRatio="none">' +
      '<path d="M0 90 L140 55 L260 95 L390 30 L520 100 L640 60 L790 110 L930 45 L1080 95 L1220 65 L1350 100 L1440 75 L1440 150 L0 150 Z" fill="rgba(238,245,249,.16)"/>' +
      '<path d="M0 110 L170 80 L320 115 L470 70 L620 120 L800 85 L960 125 L1130 90 L1300 120 L1440 95 L1440 150 L0 150 Z" fill="rgba(238,245,249,.4)"/>' +
      '<path d="M0 130 L200 105 L400 135 L600 108 L820 138 L1040 112 L1260 138 L1440 118 L1440 150 L0 150 Z" fill="#eef5f9"/>' +
      '</svg></div>';
  }

  /* ---------------- Sne (canvas) ---------------- */
  function startSnow(canvas) {
    var ctx = canvas.getContext("2d"), flakes = [], raf = null, running = false;
    function size() {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
    }
    function init() {
      size();
      flakes = [];
      var n = Math.min(90, Math.floor(canvas.offsetWidth / 14));
      for (var i = 0; i < n; i++) flakes.push(newFlake(true));
    }
    function newFlake(anywhere) {
      return {
        x: Math.random() * canvas.width,
        y: anywhere ? Math.random() * canvas.height : -10,
        r: (Math.random() * 1.8 + .6) * devicePixelRatio,
        vy: (Math.random() * .5 + .25) * devicePixelRatio,
        vx: (Math.random() - .5) * .35 * devicePixelRatio,
        o: Math.random() * .5 + .25,
        ph: Math.random() * Math.PI * 2
      };
    }
    function tick() {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      flakes.forEach(function (f) {
        f.ph += .01;
        f.x += f.vx + Math.sin(f.ph) * .3;
        f.y += f.vy;
        if (f.y > canvas.height + 10) Object.assign(f, newFlake(false));
        ctx.globalAlpha = f.o;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    }
    function start() { if (running || C.isCalm()) return; running = true; init(); tick(); }
    function stop() { running = false; if (raf) cancelAnimationFrame(raf); ctx.clearRect(0, 0, canvas.width, canvas.height); }
    window.addEventListener("resize", function () { if (running) init(); });
    document.addEventListener("naq:calmchange", function (e) { e.detail.calm ? stop() : start(); });
    start();
    return { stop: stop };
  }

  /* ---------------- Header ---------------- */
  function navItemHtml(menu) {
    var html = '<li class="top-item">';
    html += '<button type="button" aria-haspopup="true">' + esc(menu.label) + ' <span class="chev">▾</span></button>';
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
    var h = '';
    h += '<div class="utility-bar"><div class="wrap">';
    h += '<a href="' + C.href("videnscenteret/kontakt") + '">' + esc(C.t("contact")) + '</a>';
    h += '<span class="spacer"></span>';
    h += '<button type="button" id="u-read">🔊 <span class="u-label">' + esc(C.t("readAloud")) + '</span></button>';
    h += '<button type="button" id="u-a11y">♿ <span class="u-label">' + esc(C.t("accessibility")) + '</span></button>';
    h += '<button type="button" id="u-search">' + I.search.replace('<svg', '<svg width="14" height="14"') + ' <span class="u-label">' + esc(C.t("search")) + '</span></button>';
    h += '<span class="lang-switch" role="group" aria-label="Sprog">' +
         '<button type="button" data-lang="kl"' + (C.getLang() === "kl" ? ' class="active"' : '') + '>KL</button>' +
         '<button type="button" data-lang="da"' + (C.getLang() === "da" ? ' class="active"' : '') + '>DA</button></span>';
    h += '</div></div>';

    h += '<div class="header-main"><div class="wrap header-inner">';
    h += '<a class="logo" href="#/"><span class="mark">' + I.snow + '</span>' +
         '<span class="name"><strong>Naqinneq.gl</strong><small>' + esc(S.tagline) + '</small></span></a>';
    h += '<nav class="main-nav" aria-label="Hovedmenu"><ul>' + S.nav.map(navItemHtml).join('') + '</ul></nav>';
    h += '<button type="button" class="burger" aria-expanded="false" aria-label="Menu"><span class="lines"><i></i><i></i><i></i></span> Menu</button>';
    h += '</div></div>';

    /* Mobilpanel */
    h += '<div class="mobile-panel" id="mobile-panel"><div class="wrap">';
    S.nav.forEach(function (menu, mi) {
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

    /* events */
    $(".burger").addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      this.setAttribute("aria-expanded", open);
    });
    C.qsa(".m-group > button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var g = btn.parentElement, open = g.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
      });
    });
    $("#mobile-panel").addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
    $("#u-search").addEventListener("click", openSearch);
    $("#u-a11y").addEventListener("click", openA11y);
    $("#u-read").addEventListener("click", function () { readMain(this); });
    C.qsa(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () {
        C.setLang(b.dataset.lang);
        renderHeader(); renderFooter(); render(C.currentRoute());
      });
    });
  }

  function closeNav() {
    document.body.classList.remove("nav-open");
    var b = $(".burger"); if (b) b.setAttribute("aria-expanded", "false");
  }

  /* ---------------- Footer ---------------- */
  function renderFooter() {
    var f = '<div class="wrap"><div class="footer-grid">';
    f += '<div class="f-brand"><strong>Naqinneq.gl</strong><p>' + esc(S.fullTitle) + '</p></div>';
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

  /* ---------------- Oplæsning ---------------- */
  function readMain(btn) {
    var main = $("#main-content");
    var text = main ? main.innerText.replace(/\s+/g, " ").slice(0, 6000) : "";
    C.speak(text, function (on) {
      C.qsa(".tool-btn.read-btn, #u-read").forEach(function (b) {
        b.classList.toggle("speaking", on);
      });
    });
  }

  /* ---------------- Blok-renderere ---------------- */
  function btnHtml(b) {
    var cls = b.primary ? "btn btn-solid" : "btn btn-outline";
    if (b.href) return '<a class="' + cls + '" href="' + esc(b.href) + '"' + (b.external ? ' target="_blank" rel="noopener"' : '') + '>' + esc(b.text) + (b.external ? ' ↗' : '') + '</a>';
    return '<a class="' + cls + '" href="' + C.href(b.route) + '">' + esc(b.text) + '</a>';
  }

  function renderBlocks(blocks) {
    return blocks.map(function (b) {
      switch (b.t) {
        case "lead": return '<p class="lead reveal">' + esc(b.text) + '</p>';
        case "h2": return '<h2 class="reveal">' + esc(b.text) + '</h2>';
        case "h3": return '<h3 class="reveal">' + esc(b.text) + '</h3>';
        case "p": return '<p class="reveal">' + esc(b.text) + '</p>';
        case "ul": return '<ul class="bullets reveal">' + b.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
        case "cards":
          return '<div class="info-cards">' + b.items.map(function (c, i) {
            return '<div class="info-card reveal" data-delay="' + (i % 4) + '"><h3>' + esc(c.title) + '</h3><p>' + esc(c.text) + '</p>' +
              (c.route ? '<a href="' + C.href(c.route) + '">' + esc(c.linkText || "Læs mere") + '</a>' : '') + '</div>';
          }).join('') + '</div>';
        case "infobox":
          return '<div class="infobox reveal"><span class="ib-icon">' + I.info + '</span><div>' +
            (b.title ? '<h4>' + esc(b.title) + '</h4>' : '') + '<p>' + esc(b.text) + '</p></div></div>';
        case "cta":
          return '<div class="reveal" style="display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.6rem">' + b.buttons.map(btnHtml).join('') + '</div>';
        case "signs":
          return '<div class="signs-grid">' + b.groups.map(function (g, gi) {
            return '<div class="signs-col reveal" data-delay="' + gi + '"><h3>' + (gi === 0 ? '🧒' : '🧑') + ' ' + esc(g.title) + '</h3><ul>' +
              g.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></div>';
          }).join('') + '</div>';
        case "features":
          return '<div class="features-grid">' + b.items.map(function (f, i) {
            return '<div class="feature reveal" data-delay="' + (i % 4) + '"><span class="f-icon">' + (featureIcons[f.icon] || I.snow) + '</span>' +
              '<span class="tag">' + esc(f.tag) + '</span><h3>' + esc(f.title) + '</h3><p>' + esc(f.text) + '</p></div>';
          }).join('') + '</div>';
        case "timeline":
          return '<div class="timeline reveal">' + b.items.map(function (it) {
            var label = it.status === "done" ? "I gang nu" : it.status === "next" ? "Næste fase" : "Senere";
            return '<div class="tl-item ' + it.status + '"><span class="status">' + label + '</span><h4>' + esc(it.title) + '</h4><p>' + esc(it.text) + '</p></div>';
          }).join('') + '</div>';
        case "media":
          if (b.embed) {
            return '<div class="reveal" style="margin:1.2rem 0"><h3 style="margin-bottom:.4rem">' + esc(b.title) + '</h3><p style="margin-bottom:.8rem">' + esc(b.text) + '</p>' +
              '<iframe src="' + esc(b.embed) + '" title="' + esc(b.title) + '" loading="lazy" allowfullscreen' +
              ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"' +
              ' style="width:100%;max-width:720px;aspect-ratio:16/9;border:0;border-radius:14px;display:block"></iframe></div>';
          }
          var visual = b.kind === "podcast"
            ? '<div class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>'
            : '<span class="play" aria-hidden="true">' + I.play + '</span>';
          return '<div class="media-card reveal"><div class="m-visual">' + visual + '</div><div class="m-body"><h3>' + esc(b.title) + '</h3><p>' + esc(b.text) + '</p>' +
            '<span class="todo-note">🎧 Afspilleren kobles på, når medie-adressen er klar.</span></div></div>';
        case "attribution":
          return '<p class="attribution">' + esc(b.text).replace("NVOL.dk", '<a href="' + esc(b.href) + '" target="_blank" rel="noopener">NVOL.dk</a>') + '</p>';
        case "contactHint":
          var linkRoute = b.route || "videnscenteret/kontakt";
          var txt = esc(b.text);
          var lt = b.linkText || null;
          var patterns = lt ? [lt] : ["kontaktsiden", "Kontakt os her", "Kontakt os", "Om os"];
          for (var pi = 0; pi < patterns.length; pi++) {
            var p = esc(patterns[pi]);
            if (txt.indexOf(p) > -1) { txt = txt.replace(p, '<a href="' + C.href(linkRoute) + '">' + p + '</a>'); break; }
          }
          return '<div class="contact-hint reveal">' + txt + '</div>';
        case "staff":
          return '<div class="staff-grid">' + S.staff.map(function (p, i) {
            return '<div class="staff-card reveal" data-delay="' + (i % 2) + '"><span class="avatar">' + esc(p.initials) + '</span><div>' +
              '<h3>' + esc(p.name) + '</h3><div class="role">' + esc(p.title) + '</div>' +
              '<div class="links"><a href="tel:' + esc(p.phone.replace(/\s/g, "")) + '">' + esc(p.phone) + '</a>' +
              '<a href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a></div></div></div>';
          }).join('') + '</div>';
        case "centerInfo":
          var ci = S.centerInfo;
          var tiles = [
            { icon: I.pin, label: "Adresse", value: ci.address },
            { icon: I.phone, label: "Hovednummer", value: ci.phone },
            { icon: I.mail, label: "E-mail", value: ci.email },
            { icon: I.clock, label: "Åbningstid", value: ci.hours },
            { icon: I.org, label: "Under", value: ci.under }
          ];
          return '<div class="center-info">' + tiles.map(function (t, i) {
            return '<div class="ci-tile reveal" data-delay="' + (i % 2) + '"><span class="t-icon">' + t.icon + '</span><div><b>' + esc(t.label) + '</b><span>' + esc(t.value) + '</span></div></div>';
          }).join('') + '</div>';
        case "contactForm":
          return contactFormHtml();
        case "newsList":
          return '<div class="news-list">' + S.news.map(function (n) { return newsRowHtml(n); }).join('') + '</div>';
        case "courseList":
          return '<div class="course-grid">' + S.courses.map(function (c, i) { return courseCardHtml(c, i); }).join('') + '</div>';
        default: return "";
      }
    }).join('');
  }

  function contactFormHtml(opts) {
    opts = opts || {};
    var subjectField = opts.course
      ? '<div class="field"><label for="cf-org">Organisation / skole</label><input id="cf-org" type="text" name="org"></div>'
      : '<div class="field"><label for="cf-subject">Emne</label><input id="cf-subject" type="text" name="subject"></div>';
    var formAttrs = opts.course
      ? ' data-form="tilmelding" data-kursus="' + esc(opts.courseTitle || '') + '"'
      : ' data-form="kontakt"';
    return '<form class="form-grid reveal"' + formAttrs + '>' +
      '<div class="field"><label for="cf-name">Navn *</label><input id="cf-name" type="text" name="name" required></div>' +
      '<div class="field"><label for="cf-email">E-mail *</label><input id="cf-email" type="email" name="email" required></div>' +
      subjectField +
      '<div class="field full"><label for="cf-msg">' + (opts.course ? 'Kommentar eller spørgsmål' : 'Besked *') + '</label><textarea id="cf-msg" name="message"' + (opts.course ? '' : ' required') + '></textarea></div>' +
      /* honeypot — skjult felt som spam-bots udfylder; API'et afviser hvis udfyldt */
      '<input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px">' +
      '<div class="full" style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<button type="submit" class="btn btn-solid">' + (opts.course ? 'Tilmeld mig' : 'Send besked') + '</button>' +
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
      '<a class="btn btn-outline" href="' + C.href("ressourcer/kurser/" + c.slug) + '">Se kursus og tilmeld</a></div>';
  }

  /* ---------------- Sidehoved + hjælpeboks ---------------- */
  function pageHeadHtml(page, route) {
    var crumbs = C.breadcrumb(route, page).map(function (c, i, arr) {
      var s = c.route !== undefined && i < arr.length - 1
        ? '<a href="' + C.href(c.route) + '">' + esc(c.label) + '</a>'
        : '<span>' + esc(c.label) + '</span>';
      return s + (i < arr.length - 1 ? ' <span class="sep">/</span> ' : '');
    }).join('');
    return '<div class="page-head">' + aurora() + '<div class="wrap">' +
      '<nav class="crumbs" aria-label="Brødkrumme">' + crumbs + '</nav>' +
      (page.section ? '<span class="section-tag">' + esc(page.group ? page.section + " · " + page.group : page.section) + '</span>' : '') +
      '<h1>' + esc(page.title) + '</h1>' +
      '<div class="page-tools"><button type="button" class="tool-btn read-btn">🔊 ' + esc(C.t("readAloud")) + '</button></div>' +
      '</div></div>';
  }

  function helpboxHtml() {
    return '<div class="helpbox-band"><div class="wrap"><div class="helpbox reveal">' +
      '<div><h2>' + esc(C.t("helpTitle")) + '</h2><p>' + esc(C.t("helpText")) + '</p></div>' +
      '<a class="btn btn-primary" href="' + C.href("videnscenteret/kontakt") + '">' + esc(C.t("helpCta")) + ' →</a>' +
      '</div></div></div>';
  }

  function subnavHtml(route) {
    var sn = C.subnavFor(route);
    if (!sn) return "";
    return '<aside class="subnav"><div class="sn-title">' + esc(sn.group) + '</div><ul>' +
      sn.items.map(function (it) {
        return '<li><a href="' + C.href(it.route) + '"' + (it.route === route ? ' class="active" aria-current="page"' : '') + '>' + esc(it.label) + '</a></li>';
      }).join('') + '</ul></aside>';
  }

  /* ---------------- Sider ---------------- */
  function renderHome() {
    var home = S.pages[""];
    var words = home.hero.h1.split(" ").map(function (w, i) {
      return '<span class="w" style="animation-delay:' + (i * 0.07) + 's">' + esc(w) + '</span>';
    }).join(" ");

    var h = '<div class="route-view">';
    h += '<section class="hero">' + aurora() + '<canvas class="snow-canvas" aria-hidden="true"></canvas>';
    h += '<div class="wrap hero-content">';
    h += '<span class="hero-kicker">Naqinneq · Grønland</span>';
    h += '<h1>' + words + '</h1>';
    h += '<p class="sub">' + esc(home.hero.sub) + '</p>';
    h += '<div class="hero-search"><form class="box" data-hero-search><span style="color:#9dbed4;display:inline-flex">' + I.search.replace('<svg', '<svg width="18" height="18"') + '</span>' +
         '<input type="search" placeholder="' + esc(C.t("searchPlaceholder")) + '" aria-label="' + esc(C.t("search")) + '">' +
         '<button type="submit">' + esc(C.t("search")) + '</button></form></div>';
    h += '</div>' + iceSvg() + '</section>';

    /* Indgangskort */
    h += '<section class="section" style="padding-top:0"><div class="wrap"><div class="entries">';
    home.entries.forEach(function (e, i) {
      h += '<a class="entry-card reveal" data-delay="' + i + '" href="' + C.href(e.route) + '">' +
        '<span class="icon">' + (entryIcons[e.icon] || I.snow) + '</span><h3>' + esc(e.title) + '</h3><p>' + esc(e.text) + '</p>' +
        '<span class="go">Kom i gang</span></a>';
    });
    h += '</div></div></section>';

    /* Nyheder */
    h += '<section class="section"><div class="wrap">';
    h += '<div class="section-head reveal"><div><div class="kicker">Sidste nyt</div><h2>Aktuelle nyheder</h2></div><a class="all-link" href="' + C.href("nyheder") + '">' + esc(C.t("seeAll")) + '</a></div>';
    h += '<div class="news-grid">';
    S.news.slice(0, 3).forEach(function (n, i) {
      h += '<a class="news-card reveal" data-delay="' + i + '" href="' + C.href("nyheder/" + n.slug) + '">' +
        '<div class="thumb"><span class="big-letter">' + esc(n.title.charAt(0)) + '</span></div>' +
        '<div class="body"><span class="chip ' + n.category.toLowerCase() + '">' + esc(n.category) + '</span>' +
        '<span class="date">' + esc(n.date) + '</span><h3>' + esc(n.title) + '</h3><p>' + esc(n.teaser) + '</p>' +
        '<span class="go">' + esc(C.t("readMore")) + ' →</span></div></a>';
    });
    h += '</div></div></section>';

    /* Materialer */
    h += '<section class="section" style="padding-top:.5rem"><div class="wrap">';
    h += '<div class="section-head reveal"><div><div class="kicker">Til download og fordybelse</div><h2>Nyeste materialer</h2></div><a class="all-link" href="' + C.href("ressourcer/materialer") + '">Se alle ressourcer</a></div>';
    h += '<div class="materials">';
    var mIcons = { Podcast: "🎧", Vejledning: "📘", Video: "🎬", Rapport: "📊" };
    S.materials.forEach(function (m, i) {
      h += '<a class="material-row reveal" data-delay="' + (i % 2) + '" href="' + C.href(m.route) + '">' +
        '<span class="m-icon">' + (mIcons[m.kind] || "📄") + '</span><span>' +
        '<div class="m-meta">' + esc(m.kind) + ' · ' + esc(m.date) + ' · ' + esc(m.meta) + '</div>' +
        '<h3>' + esc(m.title) + '</h3></span></a>';
    });
    h += '</div></div></section>';

    /* Quiz */
    h += '<section class="section"><div class="wrap">';
    h += '<div class="section-head reveal" style="justify-content:center;text-align:center"><div><div class="kicker">Test din viden</div><h2>Hvor godt kender du ordblindhed?</h2></div></div>';
    h += '<div class="quiz-card reveal" id="quiz-root"></div>';
    h += '</div></section>';

    /* Handlingsplan */
    h += '<section class="section"><div class="wrap"><div class="plan-banner reveal">' + aurora() +
      '<h2>' + esc(home.banner.h2) + '</h2><p>' + esc(home.banner.text) + '</p><div class="btns">' +
      home.banner.buttons.map(function (b, i) {
        return '<a class="btn ' + (b.primary ? 'btn-primary' : 'btn-ghost') + '" href="' + C.href(b.route) + '">' + esc(b.text) + '</a>';
      }).join('') + '</div></div></div></section>';

    h += '</div>';
    $("#main-content").innerHTML = h;

    var snowCanvas = $(".snow-canvas");
    if (snowCanvas) startSnow(snowCanvas);

    var heroForm = $("[data-hero-search]");
    heroForm.addEventListener("submit", function (e) {
      e.preventDefault();
      openSearch(heroForm.querySelector("input").value);
    });

    initQuiz($("#quiz-root"));
  }

  /* ---------------- Quiz ---------------- */
  function initQuiz(root) {
    if (!root) return;
    var idx = 0, score = 0;
    function show() {
      if (idx >= S.quiz.length) {
        root.innerHTML = '<div class="quiz-result"><div class="score">' + score + ' / ' + S.quiz.length + '</div>' +
          '<p>' + (score === S.quiz.length ? "Perfekt! Du er en sand Naqinneq-ekspert. 🏔️" :
                   score >= 3 ? "Flot klaret! Du ved allerede en masse om ordblindhed." :
                   "Godt forsøgt — dyk ned i vidensområderne og prøv igen!") + '</p>' +
          '<div style="margin-top:1.2rem;display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">' +
          '<button type="button" class="btn btn-solid" data-again>Prøv igen</button>' +
          '<a class="btn btn-outline" href="' + C.href("vidensomraader/ordblindhed") + '">Lær mere om ordblindhed</a></div></div>';
        root.querySelector("[data-again]").addEventListener("click", function () { idx = 0; score = 0; show(); });
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
          if (i === q.correct) { btn.classList.add("correct"); score++; }
          else { btn.classList.add("wrong"); C.qsa(".quiz-opt", root)[q.correct].classList.add("correct"); }
          root.querySelector(".quiz-x").innerHTML = '<div class="quiz-explain">💡 ' + esc(q.explain) + '</div>' +
            '<div style="margin-top:1rem;text-align:right"><button type="button" class="btn btn-solid" data-next>' +
            (idx === S.quiz.length - 1 ? "Se resultat" : "Næste") + ' →</button></div>';
          root.querySelector("[data-next]").addEventListener("click", function () { idx++; show(); });
        });
      });
    }
    show();
  }

  /* ---------------- Standardside ---------------- */
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

  /* ---------------- Nyhedsartikel ---------------- */
  function renderArticle(page, route) {
    var n = page.article;
    var h = '<div class="route-view">' + pageHeadHtml(page, route);
    h += '<div class="page-body"><div class="wrap page-layout"><div></div><div class="content" style="grid-column: 1 / -1; max-width: 760px">';
    h += '<div class="article-meta reveal"><span class="chip ' + n.category.toLowerCase() + '">' + esc(n.category) + '</span><span>' + esc(n.date) + '</span></div>';
    if (n.image) {
      h += '<img class="reveal" src="' + esc(n.image) + '" alt="' + esc(n.imageAlt || "") + '"' +
        ' style="width:100%;max-width:640px;aspect-ratio:16/9;object-fit:cover;border-radius:14px;margin:.4rem 0 1.2rem;display:block">';
    }
    h += renderBlocks(n.body);
    h += '<a class="back-link" href="' + C.href("nyheder") + '">← ' + esc(C.t("backToNews")) + '</a>';
    h += '</div></div></div>' + helpboxHtml() + '</div>';
    $("#main-content").innerHTML = h;
    bindPageEvents();
  }

  /* ---------------- Kursusside ---------------- */
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
      h += '<h2 class="reveal">Program</h2><div class="program">' + c.program.map(function (p) {
        return '<div class="pr-row reveal"><b>' + esc(p.when) + '</b><span>' + esc(p.what) + '</span></div>';
      }).join('') + '</div>';
    }
    if (c.signup) {
      h += '<h2 class="reveal">Tilmeld dig</h2>' + contactFormHtml({ course: true, courseTitle: c.title });
    }
    h += '<div class="contact-hint reveal" style="margin-top:2rem">Har du spørgsmål om kurset? Skriv til os på <a href="mailto:naqinneq@nanoq.gl">naqinneq@nanoq.gl</a> eller ring på (+299) 34 50 00.</div>';
    h += '</div></div></div>' + helpboxHtml() + '</div>';
    $("#main-content").innerHTML = h;
    bindPageEvents();
  }

  /* ---------------- 404 ---------------- */
  function render404() {
    var h = '<div class="route-view"><div class="page-body"><div class="wrap notfound">' +
      '<div class="letters"><span>4</span><span>0</span><span>4</span></div>' +
      '<h1 style="margin:.8rem 0">' + esc(C.t("notFoundTitle")) + '</h1>' +
      '<p style="color:var(--ink-soft);max-width:430px;margin:0 auto 1.6rem">' + esc(C.t("notFoundText")) + '</p>' +
      '<a class="btn btn-solid" href="#/">Til forsiden</a></div></div></div>';
    $("#main-content").innerHTML = h;
  }

  /* ---------------- Fælles side-events ---------------- */
  function bindPageEvents() {
    var rb = $(".read-btn");
    if (rb) rb.addEventListener("click", function () { readMain(rb); });
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
          form.innerHTML = '<div class="form-success full" style="grid-column:1/-1"><div class="check">✓</div>' +
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

  /* ---------------- Søgning ---------------- */
  function buildOverlays() {
    var o = '<div class="overlay" id="search-overlay" role="dialog" aria-modal="true" aria-label="' + esc(C.t("search")) + '">' +
      '<div class="overlay-panel">' +
      '<div class="search-input-row"><span style="color:var(--ink-soft);display:inline-flex">' + I.search.replace('<svg', '<svg width="20" height="20"') + '</span>' +
      '<input type="search" id="search-input" placeholder="' + esc(C.t("searchPlaceholder")) + '">' +
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
      switchRow("calm", C.t("calmMode"), "Slukker sne, nordlys og bevægelse") +
      '<button type="button" class="btn btn-outline a11y-reset" id="a11y-reset">' + esc(C.t("reset")) + '</button>' +
      '<div class="a11y-note">🔊 Oplæsning på dansk bruger browserens stemme — på kalaallisut bruges <b>Martha</b>-talesyntesen fra Oqaasileriffik (vælg KL øverst).</div>' +
      '</div></div></div>';

    $("#overlays").innerHTML = o;

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
        b.addEventListener("click", function () {
          C.setPref(seg.dataset.prefSeg, +b.dataset.v);
          syncA11yUI();
        });
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

  function openSearch(prefill) {
    var ov = $("#search-overlay");
    ov.classList.add("open");
    var input = $("#search-input");
    if (typeof prefill === "string" && prefill) {
      input.value = prefill;
      input.dispatchEvent(new Event("input"));
    }
    setTimeout(function () { input.focus(); }, 80);
  }
  function openA11y() { $("#a11y-overlay").classList.add("open"); }

  /* ---------------- Router ---------------- */
  function render(route) {
    closeNav();
    C.stopSpeak();
    var page = S.getPage(route);
    if (route === "") renderHome();
    else if (!page) render404();
    else if (page.article) renderArticle(page, route);
    else if (page.course) renderCourse(page, route);
    else renderPage(page, route);
    C.initRevealObserver($("#main-content"));
    window.scrollTo(0, 0);
  }

  /* ---------------- Init ---------------- */
  C.applyPrefs();
  C.initRuler();
  renderHeader();
  renderFooter();
  buildOverlays();
  C.onRoute(render);
})();
