/* =========================================================================
   Naqinneq.gl — fælles indholdslag
   Alt tekstindhold er hentet 1:1 fra sila.gl (dansk version, juni 2026).
   KL-indhold: falder pt. tilbage til dansk — indsættes manuelt senere
   ved at udfylde `kl`-felter parallelt med `da`-felterne.
   ========================================================================= */

window.SITE = {

  name: "Naqinneq.gl",
  shortName: "Naqinneq",
  tagline: "Videnscenter for ordblindhed",
  fullTitle: "Videnscenter for ordblindhed og læse- og skrivevanskeligheder",
  org: "Uddannelsesstyrelsen · Naalakkersuisut",
  address: "Imaneq 4 · 3900 Nuuk",
  copyright: "© 2026 Uddannelsesstyrelsen · Naalakkersuisut",

  /* ---------------- UI-tekster (da/kl — kl udfyldes senere) ------------- */
  ui: {
    skipToContent:   { da: "Gå til indhold" },
    contact:         { da: "Kontakt" },
    readAloud:       { da: "Læs op" },
    readAloudStop:   { da: "Stop oplæsning" },
    accessibility:   { da: "Tilgængelighed" },
    search:          { da: "Søg" },
    searchPlaceholder:{ da: "Søg efter viden, tests, kurser …" },
    searchNoResults: { da: "Ingen resultater — prøv et andet ord." },
    menu:            { da: "Menu" },
    close:           { da: "Luk" },
    readMore:        { da: "Læs mere" },
    seeAll:          { da: "Se alle" },
    home:            { da: "Forside" },
    news:            { da: "Nyheder" },
    backToNews:      { da: "Alle nyheder" },
    helpTitle:       { da: "Brug for hjælp?" },
    helpText:        { da: "Skriv til en vejleder — vi svarer normalt inden for én arbejdsdag." },
    helpCta:         { da: "Kontakt videnscenteret" },
    shortcuts:       { da: "Genveje" },
    about:           { da: "Om" },
    a11yStatement:   { da: "Tilgængelighedserklæring" },
    cookies:         { da: "Cookies" },
    privacy:         { da: "Persondata" },
    notFoundTitle:   { da: "Siden blev ikke fundet" },
    notFoundText:    { da: "Bogstaverne er vist byttet rundt — det kender vi godt. Lad os finde vej tilbage." },
    fontSize:        { da: "Tekststørrelse" },
    lineHeight:      { da: "Linjeafstand" },
    letterSpacing:   { da: "Bogstavafstand" },
    dysFont:         { da: "Læsevenlig skrift" },
    readingRuler:    { da: "Læselineal" },
    calmMode:        { da: "Ro på (sluk animationer)" },
    reset:           { da: "Nulstil" },
    langDa: "DA",
    langKl: "KL"
  },

  /* ---------------- Hovednavigation ------------------------------------ */
  nav: [
    {
      label: "Vidensområder",
      children: [
        { label: "Ordblindhed", route: "vidensomraader/ordblindhed" },
        { label: "Skriftsprogsvanskeligheder", route: "vidensomraader/skriftsprogsvanskeligheder" },
        { label: "Sprogforståelse", route: "vidensomraader/sprogforstaaelse" }
      ]
    },
    {
      label: "Tests og screening",
      children: [
        { label: "Screening for ordblindhed", route: "tests/screening-for-ordblindhed" },
        { label: "Den grønlandske ordblindetest", route: "tests/den-groenlandske-ordblindetest" },
        { label: "Den danske ordblindetest", route: "tests/den-danske-ordblindetest" }
      ]
    },
    {
      label: "Ressourcer",
      children: [
        { label: "Læse- og skriveteknologi (IntoWords)", route: "ressourcer/laese-og-skriveteknologi" },
        { label: "Vejledninger", route: "ressourcer/vejledninger" },
        { label: "Materialer", route: "ressourcer/materialer" },
        { label: "Rapporter", route: "ressourcer/rapporter" },
        { label: "Podcasts", route: "ressourcer/podcasts" },
        { label: "Videoer", route: "ressourcer/videoer" },
        { label: "Kurser", route: "ressourcer/kurser" }
      ]
    },
    {
      label: "Målgrupper",
      groups: [
        {
          label: "Folkeskolen",
          children: [
            { label: "Overblik", route: "maalgrupper/folkeskolen/overblik" },
            { label: "Lovgivning", route: "maalgrupper/folkeskolen/lovgivning" },
            { label: "Opdagelse og screening", route: "maalgrupper/folkeskolen/opdagelse-og-screening" },
            { label: "Støtte i undervisningen", route: "maalgrupper/folkeskolen/stoette-i-undervisningen" },
            { label: "Ressourcer", route: "maalgrupper/folkeskolen/ressourcer" }
          ]
        },
        {
          label: "Unge og voksne",
          children: [
            { label: "Overblik", route: "maalgrupper/unge-og-voksne/overblik" },
            { label: "Lovgivning", route: "maalgrupper/unge-og-voksne/lovgivning" },
            { label: "Støtte i hverdagen", route: "maalgrupper/unge-og-voksne/stoette-i-hverdagen" },
            { label: "Støtte på arbejdspladsen", route: "maalgrupper/unge-og-voksne/stoette-paa-arbejdspladsen" },
            { label: "Ressourcer", route: "maalgrupper/unge-og-voksne/ressourcer" }
          ]
        }
      ]
    },
    {
      label: "Videnscenteret",
      children: [
        { label: "Om os", route: "videnscenteret/om-os" },
        { label: "Indsatsområder", route: "videnscenteret/indsatsomraader" },
        { label: "Nyheder", route: "nyheder" },
        { label: "Kontakt os", route: "videnscenteret/kontakt" }
      ]
    }
  ],

  /* ---------------- Footer --------------------------------------------- */
  footer: {
    shortcuts: [
      { label: "Forside", route: "" },
      { label: "Om screening", route: "tests/screening-for-ordblindhed" },
      { label: "Hent IntoWords", route: "ressourcer/laese-og-skriveteknologi" }
    ],
    about: [
      { label: "Videnscenteret", route: "videnscenteret/om-os" },
      { label: "Indsatsområder", route: "videnscenteret/indsatsomraader" },
      { label: "Kontakt", route: "videnscenteret/kontakt" }
    ],
    legal: [
      { label: "Tilgængelighedserklæring", route: null }, /* TODO: side findes endnu ikke på sila.gl */
      { label: "Cookies", route: null },
      { label: "Persondata", route: null }
    ]
  },

  /* ---------------- Medarbejdere ---------------------------------------- */
  staff: [
    { name: "Mette Larsen Lyberth", title: "Fg. afdelingschef for pædagogisk udvikling", phone: "+299 34 62 78", email: "mell@nanoq.gl", initials: "ML" },
    { name: "Karina Meincke", title: "Skolekonsulent Dysleksi", phone: "+299 34 62 99", email: "kame@nanoq.gl", initials: "KM" },
    { name: "Parnûna K. Lynge", title: "Projektkonsulent, dysleksi", phone: "+299 34 62 56", email: "prly@nanoq.gl", initials: "PL" },
    { name: "Birthe Lyberth", title: "Projektkonsulent, dysleksi", phone: "+299 34 62 53", email: "bily@nanoq.gl", initials: "BL" }
  ],

  centerInfo: {
    address: "Imaneq 4, 3900 Nuuk",
    phone: "(+299) 34 50 00",
    email: "naqinneq@nanoq.gl",
    hours: "Mandag–fredag 09–15",
    under: "Uddannelsesstyrelsen, Grønland"
  },

  /* ---------------- Nyheder (nyeste først) ------------------------------ */
  news: [
    {
      slug: "etwinning-seminar-italien-2026",
      category: "Nyhed", date: "22. juni 2026", dateISO: "2026-06-22",
      title: "eTwinning inviterer 2 grønlandske lærere på seminar i Italien i oktober 2026",
      teaser: "Det er gratis at deltage i et eTwinning seminar. eTwinning betaler for transport, ophold, kursus og forplejning til de to deltagere fra Grønland.",
      image: "/billeder/nyheder/etwinning.jpg",
      imageAlt: "Illustration: fire lærere samarbejder om et bord med bøger og papirer",
      body: [
        { t: "p", text: "eTwinning ønsker at skabe et stærkere samarbejde mellem skoler i fjerntliggende dele af det europæiske fællesskab. Derfor arrangerer Italien, Norge, Sverige, Finland og Rigsfællesskabet et seminar i 2026 og et seminar i 2027, hvor lærere fra fjernere dele af vores lande bliver særligt inviteret til at deltage." },
        { t: "p", text: "Det er gratis at deltage i et eTwinning seminar. eTwinning betaler for transport, ophold, kursus og forplejning til de to deltagere fra Grønland. eTwinning betaler ikke vikar, forplejning i løbet af rejsetiden, parkering." },
        { t: "p", text: "Seminaret finder sted i Italien – vi ved endnu ikke præcist hvor i Italien. Datoer: 21.–24. oktober. I vil nok skulle rejse fra Grønland d. 19. oktober og være retur d. 26. oktober." },
        { t: "p", text: "Seminaret foregår på engelsk. Engelsk er ikke modersmål for nogen af deltagerne, så vi hjælper hinanden med kommunikationen." },
        { t: "p", text: "Program for seminaret er vedhæftet her, men det er et foreløbigt program. Det mere præcise indhold følger senere." },
        { t: "p", text: "Hvis seminaret har interesse for dig eller dine lærere, så kontakt venligst etwinning@stukuvm.dk. Tilmeldingsfrist d. 14. august 2026. Før du tilmelder dig, skal du have aftalt det med din skoleleder." },
        { t: "cta", buttons: [
          { text: "Hent program: eTwinning", href: "/materialer/etwinning-program-okt-2026.pdf", primary: true, external: true }
        ] }
      ]
    },
    {
      slug: "intowords-groenlandsk",
      category: "Nyhed", date: "27. marts 2026", dateISO: "2026-03-27",
      title: "IntoWords – nu på grønlandsk",
      teaser: "IntoWords har fået en grønlandsk brugergrænseflade. Alle grønlandske uddannelsesinstitutioner fik adgang fra september 2025.",
      body: [
        { t: "p", text: "IntoWords fik den 27. marts 2026 en grønlandsk brugergrænseflade. Alle uddannelsesinstitutioner i Grønland fik adgang til programmet fra september 2025, og udviklingen af grønlandske funktioner fortsætter." },
        { t: "p", text: "Under udvikling er bl.a. grønlandsk talesyntese (Martha), grønlandske ordforslag og integration af yderligere sprogteknologier. I mellemtiden kan brugerne benytte IntoWords på dansk, engelsk og en lang række andre sprog." },
        { t: "p", text: "IntoWords tilbyder oplæsning med fremhævelse, stavekontrol med integreret ordbog, OCR-scanning af billeder og PDF'er samt individuelle indstillinger. Programmet kan bruges på computer, tablet og mobil via intowords.com." }
      ]
    },
    {
      slug: "basiskurser-om-ordblindhed",
      category: "Kursus", date: "11. februar 2026", dateISO: "2026-02-11",
      title: "Basiskurser om ordblindhed",
      teaser: "Uddannelsesstyrelsen og Professionshøjskolen Absalon udbyder basiskurser for undervisere og vejledere om ordblindhed og skriftsprogsvanskeligheder.",
      body: [
        { t: "p", text: "Uddannelsesstyrelsen og Professionshøjskolen Absalon udbyder basiskurser for undervisere og vejledere på tværs af uddannelsessektorer. Kurserne henvender sig til alle, der arbejder med ordblindhed og skriftsprogsvanskeligheder i skole, på uddannelse eller i vejledning." },
        { t: "p", text: "Der udbydes to spor: et grundlæggende kursus om ordblindhed for undervisere og det specialiserede vejledningskursus D.O.S.O (Dialog og støtte i ordblindevejledning). Begge kombinerer fysiske opholdsdage i Nuuk med online undervisning og dækker emner som læse- og skriveudvikling, kompenserende metoder og inklusion." },
        { t: "p", text: "Tilmeldingsfrist er 15. marts 2026 og 1. oktober 2026. Kurserne er gratis og har maks. 20 deltagere pr. hold. Der undervises af Carina Vallentin Degn og Julie Fredsø-Rauer fra Absalon." }
      ]
    },
    {
      slug: "ordblindevejleder-med-testkompetencer",
      category: "Kursus", date: "4. februar 2026", dateISO: "2026-02-04",
      title: "Ordblindevejleder med testkompetencer",
      teaser: "Et kompetencegivende kursusforløb for lærere, vejledere og læsepædagoger, der strækker sig fra september 2026 til marts 2028.",
      body: [
        { t: "p", text: "Uddannelsesstyrelsen udbyder et kompetencegivende kursus for lærere, vejledere, læsevejledere og andet læsepædagogisk personale. Kurset kvalificerer deltagerne til selvstændigt at varetage opgaver inden for læsepædagogik, undervisningsplanlægning og vejledning om ordblindhed." },
        { t: "p", text: "Forløbet er opbygget af tre moduler, der løber fra september 2026 til marts 2028. Hvert modul kombinerer tre fysiske opholdsdage i Nuuk med online undervisning og dækker: forudsætninger for skriftsprogsudvikling, ordblindhed og andre læsevanskeligheder, og ordblindevenlig skole med fokus på fleksible læringsmiljøer." },
        { t: "ul", items: [
          "Forhåndstilmelding senest 15. marts 2026",
          "Endelig tilmelding 1. juni 2026",
          "Maks. 20 deltagere",
          "Uddannelsesstyrelsen dækker alle kursusudgifter samt rejseomkostninger for deltagere uden for Nuuk."
        ] }
      ]
    },
    {
      slug: "intowords-kurser-2026",
      category: "Kursus", date: "12. januar 2026", dateISO: "2026-01-12",
      title: "IntoWords kurser 2026",
      teaser: "Uddannelsesstyrelsen afholder kurser i brugen af IntoWords på skoler og uddannelsesinstitutioner i hele Grønland i 2026.",
      body: [
        { t: "p", text: "Uddannelsesstyrelsen afholder kurser i brugen af IntoWords på skoler og uddannelsesinstitutioner i hele Grønland i løbet af 2026. Kurserne dækker grundlæggende funktioner og praktisk brug af programmet." },
        { t: "p", text: "Der afholdes fysiske kurser i Qaqortoq (med deltagere fra Narsaq og Nanortalik), Aasiaat og Nuuk samt online kurser for folkeskoler og Majoriaq. Den første fase er målrettet skoler og uddannelsesinstitutioner — kurser for arbejdsmarkedet og privatpersoner følger i efterfølgende faser." }
      ]
    },
    {
      slug: "intowords-stoette-til-laesning-og-skrivning",
      category: "Ressource", date: "12. januar 2026", dateISO: "2026-01-12",
      title: "Få støtte til læsning og skrivning med IntoWords",
      teaser: "IntoWords er gratis for alle elever og studerende i Grønland. Se introduktionsvideo og få overblik over programmets muligheder.",
      body: [
        { t: "p", text: "IntoWords er nu gratis tilgængeligt for alle elever og studerende på grønlandske uddannelsesinstitutioner. Programmet hjælper med at få tekster læst højt, foreslår ord mens du skriver, understøtter diktering og giver adgang til ordbøger." },
        { t: "p", text: "Uddannelsesstyrelsen er i gang med at integrere grønlandsk sprogstøtte fra Oqaasileriffik, så IntoWords fremover fungerer endnu bedre for grønlandsksprogede brugere. Se introduktionsvideoen herunder for at komme i gang." },
        { t: "media", kind: "video", title: "Introduktionsvideo til IntoWords", text: "Kom i gang med IntoWords på få minutter.", embed: "https://www.youtube.com/embed/bRY2BJCOwaM" }
      ]
    },
    {
      slug: "sammen-om-at-styrke-laese-og-skrivekompetencer",
      category: "Nyhed", date: "26. november 2025", dateISO: "2025-11-26",
      title: "Sammen om at styrke læse- og skrivekompetencer i Grønland",
      teaser: "Uddannelsesstyrelsen og Professionshøjskolen Absalon har indgået et flerårigt samarbejde om kompetenceudvikling på tværs af skoler og uddannelsesinstitutioner.",
      body: [
        { t: "p", text: "Uddannelsesstyrelsen og Professionshøjskolen Absalon har indgået et flerårigt samarbejde om kompetenceudvikling til gavn for elever og studerende med læse- og skrivevanskeligheder. Initiativet retter sig mod undervisere, vejledere og ledere på tværs af skoler og uddannelsesinstitutioner." },
        { t: "p", text: "Samarbejdet består af tre spor: et leder- og forvaltningsspor for skole- og uddannelsesledere, et ordblindevejlederkursus med testkompetencer og basiskurser for undervisere og vejledere. Sporene kombinerer fysisk undervisning med online forløb og tilpasses de konkrete behov på de enkelte institutioner." },
        { t: "p", text: "Initiativet er en del af den nationale handlingsplan mod ordblindhed og læse- og skrivevanskeligheder og vil løbende blive udbygget i takt med, at kompetencer og ressourcer opbygges." },
        { t: "media", kind: "podcast", title: "Podcast med Naqinneqs dysleksiafdeling", text: "Hør medarbejderne fortælle om samarbejdet og indsatserne.", embed: "https://www.youtube.com/embed/SRFrjCga8yM" }
      ]
    },
    {
      slug: "leder-og-forvaltningsspor",
      category: "Kursus", date: "26. november 2025", dateISO: "2025-11-26",
      title: "Leder- og forvaltningsspor",
      teaser: "Seks dialogbaserede webinarer for skoleledere, uddannelsesledere og forvaltningsmedarbejdere — fordelt over 2026 til 2028.",
      body: [
        { t: "p", text: "Som del af kompetenceudviklingsindsatsen tilbydes et leder- og forvaltningsspor for skoleledere, uddannelsesledere og forvaltningsmedarbejdere. Formålet er at sikre, at viden fra ordblindevejlederkurserne implementeres i hele organisationen og understøttes af ledelsen." },
        { t: "p", text: "Sporet består af seks dialogbaserede webinarer à to timer via Teams, afholdt på torsdage kl. 14–16. Datoer: 29. januar 2026, 27. august 2026, 28. januar 2027, 23. april 2027, 20. maj 2027 og 30. marts 2028." },
        { t: "p", text: "Tilmelding er løbende. Undervisningen varetages af Professionshøjskolen Absalon og koordineres af Uddannelsesstyrelsen. Kontakt Birthe Lyberth på bily@nanoq.gl eller (+299) 34 62 53." }
      ]
    },
    {
      slug: "intowords-adgang-til-alle-uddannelser",
      category: "Nyhed", date: "8. september 2025", dateISO: "2025-09-08",
      title: "Nu får alle uddannelser adgang til IntoWords",
      teaser: "Fra 1. september 2025 har alle grønlandske uddannelsesinstitutioner gratis adgang til IntoWords — et kompenserende læse- og skriveprogram.",
      body: [
        { t: "p", text: "Fra 1. september 2025 har alle grønlandske uddannelsesinstitutioner gratis adgang til IntoWords. Uddannelsesstyrelsen har indgået aftale med Vitec MV om at stille det kompenserende læse- og skriveprogram til rådighed for elever, studerende og lærere." },
        { t: "p", text: "Udrulningen starter med dansk og engelsk sprogstøtte, mens grønlandsk integration er påbegyndt. Under udvikling er grønlandsk talesyntese (Martha) og grønlandske ordforslag. Folkeskoleelever logger ind med Unilogin, GUX-studerende og lærere med MitID." },
        { t: "p", text: "Uddannelsesstyrelsen afholder kurser i brugen af IntoWords i fem kommuner i ugerne 40–45. Tidligere deltagende institutioner bevarer deres adgang, og alle udgifter dækkes nu af Uddannelsesstyrelsen." }
      ]
    }
  ],

  /* ---------------- Kurser ---------------------------------------------- */
  courses: [
    {
      slug: "ordblindevejleder-med-testkompetencer",
      when: "September 2026 – marts 2028",
      where: "Nuuk (fysisk) + online",
      title: "Ordblindevejleder med testkompetencer",
      text: "Kompetencegivende forløb der kvalificerer til selvstændigt at varetage ordblindepædagogiske opgaver — herunder testning, vejledning og undervisningsplanlægning.",
      info: {
        "Dato": "September 2026 – marts 2028",
        "Sted": "Nuuk (fysisk) + online",
        "Varighed": "3 moduler over 18 måneder",
        "Tilmeldingsfrist": "Forhånd: 15. marts 2026 · Endelig: 1. juni 2026",
        "Målgruppe": "Lærere, vejledere, læsevejledere og læsepædagogisk personale",
        "Maks. deltagere": "20"
      },
      body: [
        { t: "h2", text: "Om kurset" },
        { t: "p", text: "Kurset kvalificerer deltagerne til selvstændigt at varetage læsepædagogiske opgaver, herunder undervisningsplanlægning, vejledning og arbejde med ordblinde i skole, på uddannelse og på arbejdspladsen. Forløbet er tilrettelagt af Professionshøjskolen Absalon i samarbejde med Uddannelsesstyrelsen." },
        { t: "p", text: "Hvert modul kombinerer tre fysiske opholdsdage i Nuuk med online undervisning og dækker: forudsætninger for skriftsprogsudvikling (modul 1), ordblindhed og andre læsevanskeligheder (modul 2) og ordblindevenlig skole med fokus på fleksible læringsmiljøer (modul 3)." },
        { t: "p", text: "Maks. 20 deltagere. Uddannelsesstyrelsen dækker alle kursusudgifter samt rejseomkostninger for deltagere uden for Nuuk. Undervisningen foregår på dansk." }
      ],
      program: [
        { when: "Modul 1 · sept 2026", what: "Forudsætninger for skriftsprogsudvikling" },
        { when: "Modul 2 · forår 2027", what: "Ordblindhed og andre læsevanskeligheder" },
        { when: "Modul 3 · forår 2028", what: "Ordblindevenlig skole og fleksible læringsmiljøer" }
      ],
      signup: true
    },
    {
      slug: "basiskurser-om-ordblindhed",
      when: "Februar 2027 (hold 1) · Efterår 2027 (hold 2)",
      where: "Nuuk (fysisk) + online",
      title: "Basiskurser om ordblindhed",
      text: "Basiskurser for alle der arbejder med ordblindhed — fra grundlæggende viden til det specialiserede vejledningskursus D.O.S.O.",
      info: {
        "Dato": "Februar 2027 (hold 1) · Efterår 2027 (hold 2)",
        "Sted": "Nuuk (fysisk) + online",
        "Varighed": "Niveau 1: 3 dage · Niveau 2: 6 × 3 timer online",
        "Tilmeldingsfrist": "Hold 1: 15. marts 2026 · Hold 2: 1. oktober 2026",
        "Målgruppe": "Undervisere, vejledere og rådgivere på tværs af uddannelsessektorer",
        "Maks. deltagere": "20"
      },
      body: [
        { t: "h2", text: "Om kurset" },
        { t: "p", text: "Uddannelsesstyrelsen og Professionshøjskolen Absalon udbyder basiskurser henvendt til undervisere og vejledere, der møder borgere med ordblindhed og skriftsprogsvanskeligheder i deres daglige arbejde." },
        { t: "p", text: "Der udbydes to forløb: et grundlæggende kursus om ordblindhed og det specialiserede vejledningskursus D.O.S.O (Dialog og støtte i ordblindevejledning). Niveau 1 er tre fysiske opholdsdage i Nuuk. Niveau 2 er seks online sessioner à tre timer og går i dybden med fleksible læringsmiljøer, ordblindevenlig pædagogik, lovgivning og vejledningsteori." },
        { t: "p", text: "Kurserne er gratis med maks. 20 deltagere. Undervises af Carina Vallentin Degn og Julie Fredsø-Rauer fra Professionshøjskolen Absalon." }
      ],
      program: [
        { when: "Niveau 1 · dag 1", what: "Hvad er ordblindhed? Tegn, årsager og konsekvenser" },
        { when: "Niveau 1 · dag 2", what: "Kompenserende metoder og inkluderende undervisning" },
        { when: "Niveau 1 · dag 3", what: "Borgerrettigheder, lovgivning og praksis" },
        { when: "Niveau 2 · session 1–2", what: "Fleksible læringsmiljøer og ordblindevenlig pædagogik" },
        { when: "Niveau 2 · session 3–4", what: "Juridiske forpligtelser og vejledningsteori" },
        { when: "Niveau 2 · session 5–6", what: "Fordybelse og afsluttende praksisopgave" }
      ],
      signup: true
    },
    {
      slug: "leder-og-forvaltningsspor",
      when: "29. januar 2026 – 30. marts 2028",
      where: "Online (Microsoft Teams)",
      title: "Leder- og forvaltningsspor",
      text: "Seks dialogbaserede webinarer for ledere og forvaltning — sikrer at ny viden fra ordblindevejlederkurserne implementeres og forankres i hele organisationen.",
      info: {
        "Dato": "29. januar 2026 – 30. marts 2028",
        "Sted": "Online (Microsoft Teams)",
        "Varighed": "6 webinarer à 2 timer (torsdage kl. 14–16)",
        "Tilmeldingsfrist": "Løbende tilmelding",
        "Målgruppe": "Skoleledere, uddannelsesledere og forvaltningsmedarbejdere"
      },
      body: [
        { t: "h2", text: "Om kurset" },
        { t: "p", text: "Leder- og forvaltningssporet er en del af den samlede kompetenceudviklingsindsats og er rettet mod dem, der skal skabe rammerne for at ordblindevenlig praksis kan slå rod i skolen eller institutionen." },
        { t: "p", text: "Forløbet fokuserer på at etablere støttende deltagelsesbetingelser, facilitere videndeling mellem kursusfaser og udvikle et fælles fagligt sprog om ordblindhed og inklusion. Sessioner er fordelt over perioden 2026–2028 og passes ind, efterhånden som de tilknyttede medarbejderkurser skrider frem." },
        { t: "p", text: "Tilmelding er løbende. Undervisningen varetages af Professionshøjskolen Absalon og koordineres af Uddannelsesstyrelsen. Kontakt Birthe Lyberth på bily@nanoq.gl eller (+299) 34 62 53." }
      ],
      program: [
        { when: "29. jan 2026", what: "Opstart: Handlingsplanens mål og lederens rolle" },
        { when: "27. aug 2026", what: "Tværgående kompetenceudviklingsramme" },
        { when: "28. jan 2027", what: "Ordblindevenlig organisation i praksis" },
        { when: "23. apr 2027", what: "Fleksible læringsmiljøer og implementering" },
        { when: "20. maj 2027", what: "Vejlederrollens beskrivelse og forankring" },
        { when: "30. mar 2028", what: "Evaluering og fremadrettet plan" }
      ],
      signup: true
    },
    {
      slug: "intowords-kurser-2026",
      when: "Januar–april 2026 (fase 1)",
      where: "Qaqortoq, Aasiaat, Nuuk + online",
      title: "IntoWords kurser 2026",
      text: "Introduktionskurser i brugen af IntoWords, afholdt på skoler og uddannelsesinstitutioner i hele Grønland.",
      info: {
        "Dato": "Januar–april 2026 (fase 1)",
        "Sted": "Qaqortoq, Aasiaat, Nuuk + online",
        "Varighed": "Halv dag (fysisk) · 3 timer (online)",
        "Tilmeldingsfrist": "Ingen — tilmelding via skolen eller uddannelsesinstitutionen",
        "Målgruppe": "Lærere, pædagogisk personale og Majoriaq-medarbejdere"
      },
      body: [
        { t: "h2", text: "Om kurset" },
        { t: "p", text: "Uddannelsesstyrelsen afholder kurser i grundlæggende brug af IntoWords på skoler og uddannelsesinstitutioner i hele Grønland. Kurserne dækker de vigtigste funktioner: oplæsning, ordforslag, stavekontrol, OCR-scanning og individuelle indstillinger." },
        { t: "p", text: "Første fase (januar–april 2026) er målrettet folkeskoler og Majoriaq. Kommende faser vil rette sig mod arbejdsmarkedet og enkeltborgere, efterhånden som adgangen udvides." }
      ],
      program: [
        { when: "Uge 6", what: "Fysisk kursus — Qaqortoq" },
        { when: "Uge 9", what: "Fysisk kursus — Aasiaat" },
        { when: "Uge 10", what: "Fysisk kursus — Nuuk" },
        { when: "19. mar", what: "Online kursus — folkeskoler (nord og vest)" },
        { when: "24. mar", what: "Online kursus — folkeskoler (øst og syd)" },
        { when: "9. apr", what: "Online kursus — Majoriaq" }
      ],
      signup: false
    }
  ],

  /* ---------------- Nyeste materialer (forsiden) ------------------------ */
  materials: [
    { kind: "Podcast", date: "14. maj 2026", title: "Når læsning gør ondt — to grønlandske unge fortæller", meta: "32 min", route: "ressourcer/podcasts" },
    { kind: "Vejledning", date: "06. maj 2026", title: "Sådan tilrettelægger du undervisningen for elever med læse- og skrivevanskeligheder", meta: "PDF · 18 sider", route: "ressourcer/vejledninger" },
    { kind: "Video", date: "28. apr 2026", title: "IntoWords i klasselokalet — på 5 minutter", meta: "5:12", route: "ressourcer/videoer" },
    { kind: "Rapport", date: "14. apr 2026", title: "Ordblindhed i Grønland 2025 — status og udvikling", meta: "PDF · 64 sider", route: "ressourcer/rapporter" }
  ],

  /* ---------------- Quiz (gamification — bygger på sidens egne tekster) -- */
  quiz: [
    {
      q: "Hvad handler ordblindhed om?",
      options: [
        "Hvordan hjernen kobler bogstaver og lyde",
        "Hvor klog man er",
        "At man ikke gider læse",
        "Problemer med synet"
      ],
      correct: 0,
      explain: "Ordblindhed handler kun om, hvordan hjernen kobler bogstaver og lyde — det har intet med intelligens at gøre."
    },
    {
      q: "Kan man være både klog og ordblind?",
      options: ["Ja, sagtens!", "Nej, aldrig", "Kun som barn", "Kun hvis man træner"],
      correct: 0,
      explain: "Du kan sagtens være både klog og ordblind. Mange mennesker med ordblindhed klarer sig godt i uddannelse og arbejdsliv med den rette støtte."
    },
    {
      q: "Hvilket værktøj kan læse tekst op på kalaallisut, dansk og engelsk?",
      options: ["IntoWords", "MISI", "D.O.S.O", "AiRO"],
      correct: 0,
      explain: "IntoWords er et kompenserende it-redskab, der bl.a. kan læse tekst op i flere sprog — gratis for alle uddannelser i Grønland."
    },
    {
      q: "Hvad er et typisk tegn på ordblindhed hos børn?",
      options: [
        "De bytter rundt på bogstaver og lyde",
        "De læser hurtigere end andre",
        "De elsker at læse højt",
        "De staver altid korrekt"
      ],
      correct: 0,
      explain: "Typiske tegn hos børn: bytter rundt på bogstaver og lyde, læser langsomt, undgår at læse højt — og stavefejl gentager sig på samme måde."
    },
    {
      q: "Hvornår udvikles den grønlandske ordblindetest?",
      options: ["2025–2027", "Den findes allerede", "2030–2035", "Den er opgivet"],
      correct: 0,
      explain: "Den grønlandske ordblindetest er under udvikling i perioden 2025–2027 — en kerneindsats i handlingsplanen."
    }
  ],

  /* ---------------- Sider ------------------------------------------------ */
  pages: {

    /* ===== FORSIDE ===== */
    "": {
      title: "Forside",
      special: "home",
      hero: {
        h1: "Videnscenter for ordblindhed og læse- og skrivevanskeligheder",
        sub: "Naqinneq.gl — et samlet sted for læsning, hjælp og vejledning i Grønland."
      },
      entries: [
        { title: "Deltag i et kursus", text: "Se vores kurser for lærere, vejledere og fagfolk — og tilmeld dig direkte.", route: "ressourcer/kurser", icon: "course" },
        { title: "Lærer eller vejleder i folkeskolen", text: "Testmaterialer, vejledninger og konkrete redskaber til undervisning af elever med ordblindhed eller andre læse- og skrivevanskeligheder.", route: "maalgrupper/folkeskolen/overblik", icon: "teacher" },
        { title: "Ung eller voksen med ordblindhed", text: "Find støtte, hjælpemidler og information om dine rettigheder.", route: "maalgrupper/unge-og-voksne/overblik", icon: "adult" }
      ],
      banner: {
        h2: "Handlingsplan 2025–2029",
        text: "Et videnscenter for et af Grønlands største usynlige behov.",
        buttons: [
          { text: "Læs om indsatsområderne", route: "videnscenteret/indsatsomraader", primary: true },
          { text: "Om videnscenteret", route: "videnscenteret/om-os" }
        ]
      }
    },

    /* ===== VIDENSOMRÅDER ===== */
    "vidensomraader/ordblindhed": {
      title: "Ordblindhed",
      section: "Vidensområder",
      blocks: [
        { t: "lead", text: "Ordblindhed er en varig funktionsnedsættelse. Den gør det svært at koble bogstav og lyd — og derfor svært at læse og stave. Ordblindhed findes i mange grader, fra let til svær." },
        { t: "h2", text: "Hvad er ordblindhed?" },
        { t: "p", text: "Ordblindhed er en indlæringsvanskelighed. Den påvirker evnen til at afkode skriftsprog. Det er krævende — men ikke umuligt — for ordblinde at udvikle gode læse- og skrivekompetencer." },
        { t: "p", text: "Det kræver målrettet undervisning og brug af læse- og skriveteknologi. Ordblindhed viser sig forskelligt fra person til person. Nogle har også vanskeligheder med sprogforståelse, hvilket kan gøre det sværere at få fuldt udbytte af digitale hjælpemidler som oplæsning." },
        { t: "p", text: "Åbenhed og inkluderende miljøer i skole, uddannelse og arbejde gør det lettere for ordblinde at trives og deltage på lige fod med andre." },
        { t: "h2", text: "Tegn på ordblindhed" },
        { t: "signs", groups: [
          { title: "Hos børn", items: [
            "Bytter rundt på bogstaver og lyde",
            "Læser langsomt og bruger meget energi",
            "Undgår at læse højt",
            "Stavefejl gentager sig på samme måde"
          ] },
          { title: "Hos voksne", items: [
            "Læser sjældent for fornøjelsen",
            "Tager lang tid om e-mails og blanketter",
            "Foretrækker at få information mundtligt",
            "Har strategier til at skjule læsevanskeligheder"
          ] }
        ] },
        { t: "attribution", text: "Teksten er stillet til rådighed af NVOL.dk", href: "https://nvol.dk" }
      ]
    },

    "vidensomraader/skriftsprogsvanskeligheder": {
      title: "Skriftsprogsvanskeligheder",
      section: "Vidensområder",
      blocks: [
        { t: "lead", text: "Skriftsprogsvanskeligheder betyder, at man har svært ved at forstå, læse eller skrive tekster. Det kan handle om afkodning, forståelse eller skriftlig fremstilling — eller en kombination." },
        { t: "h2", text: "Hvad er skriftsprogsvanskeligheder?" },
        { t: "p", text: "Vanskelighederne kan være lette eller omfattende. De kan være midlertidige eller varige. Hvor store udfordringer man oplever, afhænger af kravene i omgivelserne og af personens sproglige forudsætninger." },
        { t: "p", text: "Skriftsprogsvanskeligheder opstår, når kravene til læsning og skrivning bliver større end de færdigheder, man har." },
        { t: "p", text: "To faktorer har særlig betydning: det sproglige miljø og sproglige indlæringsvanskeligheder." },
        { t: "h2", text: "Det sproglige miljø" },
        { t: "p", text: "Det miljø, man vokser op og lærer i, har stor betydning for sproglig udvikling. Et godt sprogligt miljø giver ro og struktur til læring. Det giver mulighed for, at alle kan være sprogligt aktive." },
        { t: "p", text: "Det handler også om samspillet. For eksempel når voksne læser højt for børn, eller bruger billeder og kropssprog til at støtte forståelsen." },
        { t: "h2", text: "Sproglige indlæringsvanskeligheder" },
        { t: "p", text: "Sproglige indlæringsvanskeligheder er medfødte og vedvarende problemer med at lære og bruge sprog." },
        { t: "cards", items: [
          { title: "Ordblindhed", text: "Man har svært ved at koble bogstaver og lyde. Det gør læsning og stavning vanskeligere.", route: "vidensomraader/ordblindhed", linkText: "Læs mere" },
          { title: "Sprogforstyrrelser", text: "Problemer med at forstå, bruge eller producere talt sprog. Den mest almindelige type er DLD (Developmental Language Disorder).", route: "vidensomraader/sprogforstaaelse", linkText: "Læs mere" }
        ] },
        { t: "h2", text: "Læringsmiljøer og undervisning" },
        { t: "p", text: "Børn, unge og voksne med skriftsprogsvanskeligheder er lige så forskellige som alle andre. Deres behov varierer meget — i skole, arbejde og fritid." },
        { t: "p", text: "Fagpersoner bør skabe inkluderende læringsmiljøer, hvor alle kan udvikle sig og deltage på lige fod. Undervisningen skal tilpasses den enkeltes behov og tage højde for de konkrete vanskeligheder." },
        { t: "attribution", text: "Teksten er stillet til rådighed af NVOL.dk", href: "https://nvol.dk" }
      ]
    },

    "vidensomraader/sprogforstaaelse": {
      title: "Sprogforståelse",
      section: "Vidensområder",
      blocks: [
        { t: "lead", text: "Sprogforståelse er nøglen til læring, trivsel og deltagelse. Elever med sprogforståelsesvanskeligheder har brug for tidlig og målrettet støtte — så de får mulighed for at udvikle sig på lige fod med andre." },
        { t: "h2", text: "Hvad er sprogforståelse?" },
        { t: "p", text: "Sprogforståelse handler om evnen til at forstå betydningen af ord, sætninger og tekster. Det er en grundlæggende færdighed, der gør det muligt at lære nyt, kommunikere og deltage i fællesskaber — både i og uden for skolen." },
        { t: "p", text: "Elever med sprogforståelsesvanskeligheder kan have svært ved at følge med i undervisningen, forstå instruktioner og udtrykke sig klart. Det påvirker både faglig udvikling, selvtillid og trivsel." },
        { t: "h2", text: "Hvorfor er det vigtigt?" },
        { t: "p", text: "God sprogforståelse er en forudsætning for at lære at læse og skrive. Elever, der begynder i skolen med stærke sproglige færdigheder, har lettere ved at forstå tekster og følge med i undervisningen." },
        { t: "p", text: "Elever med sprogforståelsesvanskeligheder kan få svært ved at koble ord og betydning — og det kan føre til læsevanskeligheder senere. Vanskelighederne kan skyldes et begrænset sprogligt miljø derhjemme eller sproglige indlæringsvanskeligheder som DLD." },
        { t: "h2", text: "DLD — den mest udbredt udviklingsvanskelighed" },
        { t: "p", text: "DLD (Developmental Language Disorder) er den mest udbredt udviklingsvanskelighed hos børn, unge og voksne — og alligevel er det noget de fleste aldrig har hørt om." },
        { t: "p", text: "Personer med DLD har svært ved at lære, forstå, bruge og producere sprog. Vanskelighederne kan se meget forskellige ud: nogle har svært ved at huske ord, andre ved at forstå sætninger, fortælle sammenhængende eller følge komplekse instruktioner." },
        { t: "h2", text: "Hvordan viser det sig?" },
        { t: "p", text: "Sprogforståelsesvanskeligheder er ikke altid synlige. Mange med DLD taler flydende, men forstår ikke altid betydningen bag de ord og sætninger, de hører eller læser. Det kan føre til:" },
        { t: "ul", items: [
          "Vanskeligheder med at følge med i samtaler",
          "Problemer med at forstå tekster og instruktioner",
          "Udfordringer i sociale sammenhænge",
          "Begrænset ordforråd og uklare forklaringer"
        ] },
        { t: "p", text: "Når kravene til forståelse og formulering stiger, bliver vanskelighederne ofte mere tydelige." },
        { t: "h2", text: "Indsatser og støtte" },
        { t: "p", text: "DLD og sprogforståelsesvanskeligheder kan ikke fjernes — men eleverne kan udvikle sig markant med den rette støtte. Indsatser bør fokusere på tre områder:" },
        { t: "cards", items: [
          { title: "Direkte sprogarbejde", text: "Målrettet træning i ordforråd, sætninger og fortælling." },
          { title: "Tilpasninger i undervisningen", text: "Tydelig struktur, visuel støtte og korte, klare instruktioner." },
          { title: "Inkluderende læringsmiljøer", text: "Sproget understøttes aktivt, og alle elever får mulighed for at deltage." }
        ] },
        { t: "attribution", text: "Teksten er stillet til rådighed af NVOL.dk", href: "https://nvol.dk" }
      ]
    },

    /* ===== TESTS OG SCREENING ===== */
    "tests/screening-for-ordblindhed": {
      title: "Screening for ordblindhed",
      section: "Tests og screening",
      blocks: [
        { t: "lead", text: "En screening giver et hurtigt overblik over, om der er grund til at undersøge ordblindhed nærmere. Den er ikke en diagnose — men et godt sted at starte." },
        { t: "h2", text: "Om screeningen" },
        { t: "p", text: "Uddannelsesstyrelsen har siden 2014 arbejdet på at styrke læseundervisningen i indskolingen. De færdige screeningsværktøjer for 1.–3. klasse er overdraget til alle kommuner og skoler til brug i læsepædagogisk arbejde og tidlig indsats." },
        { t: "p", text: "Nu arbejdes der på at gøre tidlig identifikation af ordblindhed lovpligtig." },
        { t: "h2", text: "Vi arbejder på at digitalisere screeningen" },
        { t: "p", text: "Screeningsværktøjerne findes i dag i papirform. Vi arbejder på at digitalisere dem, så testresultaterne bliver mere ensartede, det administrative arbejde bliver lettere, og læsenormerne løbende kan opdateres." },
        { t: "p", text: "Når den digitale screening er klar, finder du al relevant information på denne side." },
        { t: "infobox", text: "Screeningsværktøjer til de yngste klasser ligger allerede i alle skoler og i MISI. Kontakt din skoles læsevejleder for at komme i gang." }
      ]
    },

    "tests/den-groenlandske-ordblindetest": {
      title: "Den grønlandske ordblindetest",
      section: "Tests og screening",
      blocks: [
        { t: "lead", text: "Den grønlandske ordblindetest er under udvikling i perioden 2025–2027. Når den er klar, lægges alle relevante informationer her." },
        { t: "h2", text: "Hvorfor er testen nødvendig?" },
        { t: "p", text: "Der er et akut behov for udredningsmaterialer til ordblindhed og andre læsevanskeligheder. Grønlandsksprogede testmaterialer har været efterspurgt i mange år — og det ses tydeligt i politiske målsætninger og i befolkningens stemme." },
        { t: "p", text: "En ordblindediagnose kan være afgørende for, at folk får den rette hjælp og kan deltage aktivt i samfundet. En ordblindediagnose anerkender, at visse personer oplever indlæringsvanskeligheder, og skaber grundlag for målrettet støtte." },
        { t: "p", text: "I dag er mulighederne for hjælp og støtte meget begrænsede uden adgang til de rette udredningsmaterialer. For eksempel kræver støtte via Handicaploven en dokumenteret funktionsnedsættelse — og der eksisterer endnu ikke en grønlandsk ordblindetest, der kan levere den dokumentation." },
        { t: "h2", text: "Hvor er vi i arbejdet?" },
        { t: "p", text: "Testen er under udvikling. Vi opdaterer denne side løbende, efterhånden som arbejdet skrider frem — herunder hvornår testen tages i brug, og hvordan man får adgang til den." },
        { t: "contactHint", text: "Har du spørgsmål om testen eller testprocessen? Kontakt os via kontaktsiden." }
      ]
    },

    "tests/den-danske-ordblindetest": {
      title: "Den danske ordblindetest",
      section: "Tests og screening",
      blocks: [
        { t: "lead", text: "Grønland har fået adgang til den danske nationale ordblindetest. Vi arbejder på, hvordan adgangen tildeles i praksis." },
        { t: "h2", text: "Hvorfor en dansk ordblindetest?" },
        { t: "p", text: "Der er ca. 10.000 dansksprogede borgere i Grønland — herunder mange unge og voksne, der rejser til Danmark for at studere eller gå på efterskole. Dansk er desuden officielt andet sprog i Grønland." },
        { t: "p", text: "Det er vigtigt, at denne del af befolkningen også har adgang til test for ordblindhed og den rette hjælp." },
        { t: "h2", text: "Hvor er vi i arbejdet?" },
        { t: "p", text: "Grønland har formelt set fået adgang til den danske nationale ordblindetest. Vi arbejder nu sammen med de danske styrelser STIL (Styrelsen for It og Læring) og STUK (Styrelsen for Undervisning og Kvalitet) om, hvordan grønlandske borgere igen får adgang til testen i praksis." },
        { t: "p", text: "Arbejdet forventes færdiggjort i perioden 2026–2027. Når adgangen er på plads, finder du al relevant information på denne side." },
        { t: "contactHint", text: "Har du spørgsmål om den danske ordblindetest? Kontakt os via kontaktsiden." }
      ]
    },

    /* ===== RESSOURCER ===== */
    "ressourcer/laese-og-skriveteknologi": {
      title: "Læse- og skriveteknologi (IntoWords)",
      section: "Ressourcer",
      blocks: [
        { t: "lead", text: "IntoWords er et kompenserende it-redskab til borgere med læse- og skrivevanskeligheder." },
        { t: "h2", text: "Hvem har adgang?" },
        { t: "p", text: "Adgangen til IntoWords rulles ud i faser. Den første gruppe — skoler og uddannelser — har allerede fået adgang. Derefter følger arbejdsmarkedet og privatpersoner." },
        { t: "timeline", items: [
          { title: "Skoler og uddannelser", status: "done", text: "Adgang allerede givet" },
          { title: "Arbejdsmarkedet", status: "next", text: "Forventet forår 2027" },
          { title: "Enkeltborgere", status: "later", text: "Forventet efterår 2027" }
        ] },
        { t: "h2", text: "Hvad kan IntoWords?" },
        { t: "features", items: [
          { tag: "Kalaallisut · Dansk · Engelsk", title: "Oplæsning", text: "IntoWords kan læse tekst op i flere sprog.", icon: "speaker" },
          { tag: "Mens du skriver", title: "Ordforslag", text: "Programmet foreslår ord ud fra de første bogstaver, så det bliver lettere at skrive korrekt.", icon: "pen" },
          { tag: "Foto af tekst", title: "Scanning", text: "Tag et billede af en bog eller et brev — IntoWords læser det op.", icon: "camera" },
          { tag: "Mac · Win · iOS · Android", title: "Til alle enheder", text: "IntoWords kan bruges på telefon, tablet og computer.", icon: "devices" }
        ] },
        { t: "p", text: "Programmet understøtter allerede en lang række fremmedsprog. Grønlandsk sprog og grønlandske kompenserende redskaber implementeres løbende." },
        { t: "h2", text: "Adgang til værktøjet" },
        { t: "cta", buttons: [
          { text: "Hent IntoWords", href: "https://www.vitec-mv.com/programmer/download/?f0=12194", primary: true, external: true },
          { text: "Vejledninger", route: "ressourcer/vejledninger" }
        ] },
        { t: "contactHint", text: "Har du spørgsmål om adgang eller brug af IntoWords? Kontakt os via kontaktsiden." }
      ]
    },

    "ressourcer/vejledninger": {
      title: "Vejledninger",
      section: "Ressourcer",
      blocks: [
        { t: "lead", text: "Her samler vi vejledninger til elever, forældre og fagpersoner." },
        { t: "p", text: "Vi udarbejder løbende nye vejledninger i takt med, at indsatserne i handlingsplanen implementeres — fx vejledninger til IntoWords, screeningsværktøjerne og den kommende grønlandske ordblindetest." },
        { t: "p", text: "Siden opdateres, hver gang en ny vejledning er klar." }
      ]
    },

    "ressourcer/materialer": {
      title: "Materialer",
      section: "Ressourcer",
      blocks: [
        { t: "lead", text: "Her samler vi materialer om ordblindhed og andre læse- og skrivevanskeligheder." },
        { t: "p", text: "Vi udgiver løbende quick guides, videoguides og andet materiale i takt med, at indsatserne i handlingsplanen implementeres." },
        { t: "p", text: "Siden opdateres, hver gang nyt materiale er klar." }
      ]
    },

    "ressourcer/rapporter": {
      title: "Rapporter",
      section: "Ressourcer",
      blocks: [
        { t: "lead", text: "Her samler vi rapporter og undersøgelser om ordblindhed og læse- og skrivevanskeligheder i Grønland." },
        { t: "p", text: "Vi offentliggør løbende rapporter, evalueringer og undersøgelser i takt med, at arbejdet under handlingsplanen skrider frem." }
      ]
    },

    "ressourcer/podcasts": {
      title: "Podcasts",
      section: "Ressourcer",
      blocks: [
        { t: "lead", text: "Podcast-episoder med Naqinneqs medarbejdere og samarbejdspartnere om ordblindhed og læse- og skrivevanskeligheder." },
        { t: "media", kind: "podcast", title: "Podcast med Naqinneqs dysleksiafdeling", text: "I denne episode fortæller medarbejdere fra dysleksiafdelingen om arbejdet med at styrke læse- og skrivekompetencer i Grønland — herunder IntoWords, kompetenceudvikling og den kommende grønlandske ordblindetest.", embed: "https://www.youtube.com/embed/SRFrjCga8yM" }
      ]
    },

    "ressourcer/videoer": {
      title: "Videoer",
      section: "Ressourcer",
      blocks: [
        { t: "lead", text: "Videoguider og introduktioner til IntoWords og andre redskaber for elever, lærere og vejledere." },
        { t: "media", kind: "video", title: "Introduktion til IntoWords", text: "Denne video viser, hvordan du kommer i gang med IntoWords — det kompenserende læse- og skriveprogram, som er gratis for alle borgere i Grønland.", embed: "https://www.youtube.com/embed/bRY2BJCOwaM" }
      ]
    },

    "ressourcer/kurser": {
      title: "Kurser",
      section: "Ressourcer",
      blocks: [
        { t: "lead", text: "Videnscenteret tilbyder kurser for lærere, vejledere og fagfolk. Kurserne er gratis og foregår i Nuuk eller online." },
        { t: "courseList" }
      ]
    },

    /* ===== MÅLGRUPPER — FOLKESKOLEN ===== */
    "maalgrupper/folkeskolen/overblik": {
      title: "Overblik",
      section: "Målgrupper",
      group: "Folkeskolen",
      blocks: [
        { t: "lead", text: "Naqinneq støtter folkeskolen i at opdage og hjælpe elever med ordblindhed og andre læse- og skrivevanskeligheder — fra tidlig screening til konkrete støttestrategier i undervisningen." },
        { t: "h2", text: "Hvad kan Naqinneq hjælpe med?" },
        { t: "cards", items: [
          { title: "Screening og test", text: "Screeningsværktøjer til de yngste klasser findes på alle skoler og i MISI — og vi arbejder på at digitalisere dem.", route: "tests/screening-for-ordblindhed", linkText: "Læs mere" },
          { title: "Vejledninger til lærere", text: "Praktiske vejledninger til undervisning af elever med læse- og skrivevanskeligheder — på kalaallisut og dansk.", route: "ressourcer/vejledninger", linkText: "Læs mere" },
          { title: "Digitale hjælpemidler", text: "IntoWords og andre hjælpemidler kan gøre en stor forskel for elever der kæmper med læsning og skrivning.", route: "ressourcer/laese-og-skriveteknologi", linkText: "Læs mere" },
          { title: "Kurser for fagfolk", text: "Videnscenteret tilbyder kurser i ordblindepædagogik for lærere og vejledere.", route: "ressourcer/kurser", linkText: "Læs mere" }
        ] },
        { t: "h2", text: "Sådan kommer du i gang" },
        { t: "p", text: "Har du en mistanke om at en elev har læse- og skrivevanskeligheder? Start med en screening — kontakt skolens læsevejleder for at komme i gang." },
        { t: "cta", buttons: [
          { text: "Læs om screening", route: "tests/screening-for-ordblindhed", primary: true },
          { text: "Læs om opdagelse og screening", route: "maalgrupper/folkeskolen/opdagelse-og-screening" }
        ] },
        { t: "contactHint", text: "Har du spørgsmål? Videnscenteret tilbyder vejledning til lærere og skoleledere. Kontakt os her." }
      ]
    },

    "maalgrupper/folkeskolen/lovgivning": {
      title: "Lovgivning",
      section: "Målgrupper",
      group: "Folkeskolen",
      blocks: [
        { t: "lead", text: "Her finder du viden om lovgivning om ordblindhed og andre læse- og skrivevanskeligheder i folkeskolen." },
        { t: "p", text: "Der findes i dag ingen specifik lovgivning i Grønland, der sikrer rettigheder for personer med ordblindhed. Et nyt lovtiltag er en del af handlingsplanen." },
        { t: "p", text: "Vi opdaterer siden, når der er konkret lovgivning på området." }
      ]
    },

    "maalgrupper/folkeskolen/opdagelse-og-screening": {
      title: "Opdagelse og screening",
      section: "Målgrupper",
      group: "Folkeskolen",
      blocks: [
        { t: "lead", text: "Her finder du viden om, hvordan ordblindhed opdages i folkeskolen — og hvordan screening foregår." },
        { t: "p", text: "Indholdet udarbejdes løbende — blandt andet i takt med arbejdet med at digitalisere screeningsværktøjerne." }
      ]
    },

    "maalgrupper/folkeskolen/stoette-i-undervisningen": {
      title: "Støtte i undervisningen",
      section: "Målgrupper",
      group: "Folkeskolen",
      blocks: [
        { t: "lead", text: "Her finder du viden om støtte i undervisningen til elever med ordblindhed og andre læse- og skrivevanskeligheder." },
        { t: "p", text: "Indholdet udarbejdes løbende sammen med fagpersoner i takt med, at indsatserne i handlingsplanen implementeres." }
      ]
    },

    "maalgrupper/folkeskolen/ressourcer": {
      title: "Ressourcer",
      section: "Målgrupper",
      group: "Folkeskolen",
      blocks: [
        { t: "lead", text: "Her samler vi ressourcer målrettet folkeskolen — til lærere, læsevejledere og forældre." },
        { t: "p", text: "Ressourcerne tilføjes løbende i takt med, at materialer, vejledninger og værktøjer bliver klar." }
      ]
    },

    /* ===== MÅLGRUPPER — UNGE OG VOKSNE ===== */
    "maalgrupper/unge-og-voksne/overblik": {
      title: "Overblik",
      section: "Målgrupper",
      group: "Unge og voksne",
      blocks: [
        { t: "lead", text: "Ordblindhed opdages ikke altid i skoletiden. Mange unge og voksne lever med uopdagede læse- og skrivevanskeligheder — og der er hjælp at hente." },
        { t: "h2", text: "Find den rette hjælp" },
        { t: "cards", items: [
          { title: "Er du ordblind?", text: "Læs om screening og test — og om hvordan du kan blive udredt, hvis du har svært ved at læse og skrive.", route: "tests/screening-for-ordblindhed", linkText: "Læs mere" },
          { title: "Digitale hjælpemidler", text: "IntoWords kan hjælpe dig med at læse tekster op og skrive bedre — på jobbet, i uddannelsen og i hverdagen.", route: "ressourcer/laese-og-skriveteknologi", linkText: "Læs mere" },
          { title: "Støtte i hverdagen", text: "Læs om hvilke rettigheder du har og hvilken støtte du kan søge som ung eller voksen med ordblindhed.", route: "maalgrupper/unge-og-voksne/stoette-i-hverdagen", linkText: "Læs mere" },
          { title: "På arbejdspladsen", text: "Din arbejdsgiver har mulighed for at tilbyde hjælpemidler. Læs om hvordan du tager samtalen.", route: "maalgrupper/unge-og-voksne/stoette-paa-arbejdspladsen", linkText: "Læs mere" }
        ] },
        { t: "h2", text: "Du er ikke alene" },
        { t: "p", text: "Du kan sagtens være både klog og ordblind. Ordblindhed handler kun om, hvordan hjernen kobler bogstaver og lyde. Mange mennesker med ordblindhed klarer sig godt i uddannelse og arbejdsliv med den rette støtte." },
        { t: "cta", buttons: [
          { text: "Læs om screening og test", route: "tests/screening-for-ordblindhed", primary: true },
          { text: "Læs om ordblindhed", route: "vidensomraader/ordblindhed" }
        ] },
        { t: "contactHint", text: "Videnscenteret tilbyder personlig vejledning. Skriv eller ring — vi taler kalaallisut og dansk. Kontakt os." }
      ]
    },

    "maalgrupper/unge-og-voksne/lovgivning": {
      title: "Lovgivning",
      section: "Målgrupper",
      group: "Unge og voksne",
      blocks: [
        { t: "lead", text: "Her finder du viden om dine rettigheder som ung eller voksen med ordblindhed eller andre læse- og skrivevanskeligheder." },
        { t: "p", text: "Der findes i dag ingen specifik lovgivning i Grønland, der sikrer rettigheder for personer med ordblindhed — og lovgivningen er især uklar for unge og voksne. Et nyt lovtiltag er en del af handlingsplanen." },
        { t: "p", text: "Vi opdaterer siden, når der er konkret lovgivning på området." }
      ]
    },

    "maalgrupper/unge-og-voksne/stoette-i-hverdagen": {
      title: "Støtte i hverdagen",
      section: "Målgrupper",
      group: "Unge og voksne",
      blocks: [
        { t: "lead", text: "Her finder du viden om støtte i hverdagen for unge og voksne med læse- og skrivevanskeligheder." },
        { t: "p", text: "Indholdet udarbejdes løbende i takt med, at indsatserne implementeres — fx udrulningen af læse- og skriveteknologi til alle borgere." }
      ]
    },

    "maalgrupper/unge-og-voksne/stoette-paa-arbejdspladsen": {
      title: "Støtte på arbejdspladsen",
      section: "Målgrupper",
      group: "Unge og voksne",
      blocks: [
        { t: "lead", text: "Her finder du viden om støtte på arbejdspladsen for medarbejdere med læse- og skrivevanskeligheder." },
        { t: "p", text: "Indholdet udarbejdes løbende — blandt andet i takt med, at IntoWords rulles ud til arbejdsmarkedet." }
      ]
    },

    "maalgrupper/unge-og-voksne/ressourcer": {
      title: "Ressourcer",
      section: "Målgrupper",
      group: "Unge og voksne",
      blocks: [
        { t: "lead", text: "Her samler vi ressourcer målrettet unge og voksne med læse- og skrivevanskeligheder." },
        { t: "p", text: "Ressourcerne tilføjes løbende i takt med, at materialer, vejledninger og værktøjer bliver klar." }
      ]
    },

    /* ===== VIDENSCENTERET ===== */
    "videnscenteret/om-os": {
      title: "Om os",
      section: "Videnscenteret",
      blocks: [
        { t: "lead", text: "Naqinneq omsætter viden til værdi for personer med ordblindhed og andre læse- og skrivevanskeligheder. Det gør vi gennem rådgivning, udvikling og praksis. Vi er organisatorisk forankret under Uddannelsesstyrelsen." },
        { t: "h2", text: "Baggrund" },
        { t: "p", text: "Naqinneq er etableret som en del af den nationale handlingsplan mod ordblindhed og læse- og skrivevanskeligheder 2025–2029. I handlingsplanen har man fokus på ordblindhed i første omgang. Efterhånden igangsættes initiativer for andre læse- og skrivevanskeligheder." },
        { t: "h2", text: "Det arbejder vi for" },
        { t: "ul", items: [
          "Indsamle og dele viden om ordblindhed og andre læsevanskeligheder.",
          "Støtte lærere og vejledere i at undervise og hjælpe personer med ordblindhed og læsevanskeligheder.",
          "Rådgive og vejlede fagfolk.",
          "Udbrede viden i samfundet, så flere forstår, hvad ordblindhed er."
        ] },
        { t: "h2", text: "Det arbejder vi med" },
        { t: "cards", items: [
          { title: "Undervisning og viden", text: "Vi laver og deler materiale til lærere, skoler og kommuner. Det bygger på viden og erfaring fra både Grønland og andre lande." },
          { title: "Rådgivning", text: "Vi rådgiver skoler, institutioner og fagfolk. Der mangler faste støttetilbud i Grønland — det vil vi ændre." },
          { title: "Videnscenter", text: "Vi samler viden om ordblindhed og deler den med fagfolk, skoler og myndigheder. Vi holder øje med, hvad der virker bedst i kommunerne." },
          { title: "IT og faglig støtte", text: "Vi hjælper med faglige spørgsmål og teknisk support til test og hjælpemidler." }
        ] },
        { t: "h2", text: "Hvem arbejder vi for?" },
        { t: "cards", items: [
          { title: "Fagpersoner", text: "Vi hjælper de fagfolk, der arbejder med ordblindhed — lærere, vejledere, rådgivere og kommunale konsulenter. De får viden, støtte og redskaber til at hjælpe børn, unge og voksne, der har svært ved at læse og skrive." },
          { title: "Uddannelser", text: "Vi samarbejder med dagtilbud, folkeskoler, ungdomsuddannelser og voksenuddannelser. Vi laver både fælles indsatser på tværs og målrettede indsatser til hver gruppe." },
          { title: "Børn, unge og familier", text: "Vi støtter børn og unge med ordblindhed — og deres forældre og pårørende — så hverdagen bliver lettere." },
          { title: "Samfundet", text: "Vi arbejder også for myndigheder, arbejdsgivere og beslutningstagere. De spiller en vigtig rolle i at skabe gode vilkår for mennesker med ordblindhed." }
        ] },
        { t: "h2", text: "Kort sagt" },
        { t: "p", text: "Vi vil skabe bedre muligheder for mennesker med ordblindhed — både i skolen, på jobbet og i hverdagen." },
        { t: "cta", buttons: [
          { text: "Læs om indsatsområderne", route: "videnscenteret/indsatsomraader", primary: true }
        ] }
      ]
    },

    "videnscenteret/indsatsomraader": {
      title: "Indsatsområder",
      section: "Videnscenteret",
      blocks: [
        { t: "lead", text: "Handlingsplanen mod ordblindhed 2025–2029 har fire prioriterede indsatsområder. Målet er at have fokus på ordblindhed i de første år. Efterhånden som ressourcer og kompetencer opbygges, igangsættes initiativer, der også retter sig mod andre former for læse- og skrivevanskeligheder." },
        { t: "h2", text: "Udvikling af udredningsmaterialer" },
        { t: "p", text: "Der er et akut behov for udredningsmaterialer til ordblindhed og andre læsevanskeligheder. Grønlandsksprogede testmaterialer har været efterspurgt i mange år. Uden disse er mulighederne for hjælp og støtte meget begrænsede — og det gør det svært at opfylde kravene til dokumentation, som fx Handicaploven stiller." },
        { t: "p", text: "Indsatsområdet omfatter følgende initiativer:" },
        { t: "ul", items: [
          "Udvikling af en grønlandsksproget ordblindetest",
          "Digitalisering af screeningsværktøjer til yngstetrinnet",
          "Udvikling af udredningsmaterialer til skrive- og læsevanskeligheder",
          "Adgang til den danske nationale ordblindetest"
        ] },
        { t: "h2", text: "Udvikling af grønlandsksprogede hjælpemidler" },
        { t: "p", text: "Der er behov for at udvikle grønlandsksprogede materialer — især læse- og skriveteknologi til ordblinde. Dansksprogede og engelsksprogede teknologier hjælper allerede mange, men grønlandsksprogede værktøjer er nødvendige for reel ligestilling." },
        { t: "p", text: "Nye løsninger skal være enkle og brugervenlige, og der skal gives tydelig vejledning." },
        { t: "p", text: "Indsatsområdet omfatter følgende initiativer:" },
        { t: "ul", items: [
          "Implementering af understøttende læse- og skriveværktøjer med funktioner, der kan anvendes i flere sprog",
          "Deltagelse i et forskningssamarbejde om AiRO — et læringsværktøj med dokumenteret effekt på tidlig stavning og ordblindhed — med henblik på at udvikle en grønlandsk version",
          "Evaluering af AI-baseret talegenkendelse til borgere i Grønland"
        ] },
        { t: "h2", text: "Lovtiltag" },
        { t: "p", text: "Der findes i dag ingen lovgivning i Grønland, der specifikt sikrer rettigheder for personer med ordblindhed og andre læse- og skrivevanskeligheder. Personer med ordblindhed er omfattet af Handicaploven, men lovgivningen er både mangelfuld og uklar — særligt for unge og voksne." },
        { t: "p", text: "Med introduktionen af en ordblindetest bliver behovet for lovgivningsmæssige rammer endnu mere påtrængende. Lovtiltagene skal blandt andet sikre adgang til testning og efterfølgende støtte, klare procedurer for hvordan støtte iværksættes og finansieres, samt robust håndtering af datasikkerhed i forbindelse med testningen." },
        { t: "p", text: "Lovgivningsarbejdet forventes færdiggjort i 2027 med henblik på ikrafttrædelse fra 2027/2028." },
        { t: "p", text: "Indsatsområdet omfatter følgende initiativer:" },
        { t: "ul", items: [
          "Etablering af en arbejdsgruppe med fagfolk fra relevante departementer, styrelser og andre instanser, der skal bistå Departementet for Uddannelse med det lovforberedende arbejde",
          "Udarbejdelse af nye lovforslag"
        ] },
        { t: "h2", text: "Øget vidensniveau og kompetenceløft" },
        { t: "p", text: "Der mangler fagpersonale med viden om ordblindhed og andre læse- og skrivevanskeligheder. Det gør det svært at nå de politiske mål. Kompetenceudvikling skal styrkes på tværs af skoler, arbejdspladser og andre relevante områder." },
        { t: "p", text: "Indsatserne retter sig mod:" },
        { t: "cards", items: [
          { title: "Uddannelsesinstitutioner", text: "Pædagog- og læreruddannelser, herunder Institut for Læring (Ilinniarfissuaq)." },
          { title: "Praktikere", text: "Undervisere og vejledere på tværs af uddannelser med kompetenceudviklingsforløb." }
        ] },
        { t: "p", text: "Indsatsområdet omfatter følgende initiativer:" },
        { t: "ul", items: [
          "Styrkelse af fagligheden vedrørende skriftsprogsvanskeligheder ved Institut for Læring (Ilinniarfissuaq)",
          "Kompetenceudvikling til Ordblindevejleder med testkompetencer",
          "Kompetenceudviklingsforløb for undervisere og vejledere på tværs af uddannelser",
          "Oplysningskampagne med fokus på ledelses- og forvaltningsspor",
          "Permanentgørelse af Uddannelsesstyrelsens dysleksiafdeling og omdannelse til videnscenter"
        ] },
        { t: "contactHint", text: "Læs mere om vores baggrund og organisation på Om os.", route: "videnscenteret/om-os", linkText: "Om os" }
      ]
    },

    "videnscenteret/kontakt": {
      title: "Kontakt os",
      section: "Videnscenteret",
      noHelp: true,
      blocks: [
        { t: "lead", text: "Vi er her for at hjælpe — skriv, ring eller kom forbi. Vi taler kalaallisut og dansk." },
        { t: "h2", text: "Medarbejdere" },
        { t: "staff" },
        { t: "h2", text: "Videnscenteret" },
        { t: "centerInfo" },
        { t: "h2", text: "Skriv til os" },
        { t: "p", text: "Udfyld formularen herunder, så vender vi tilbage inden for 2 hverdage. Vi besvarer henvendelser på kalaallisut og dansk." },
        { t: "contactForm" }
      ]
    },

    /* ===== NYHEDER ===== */
    "nyheder": {
      title: "Nyheder",
      section: "Videnscenteret",
      noHelp: true,
      blocks: [
        { t: "lead", text: "Nyheder og opdateringer fra Naqinneq — Videnscenteret for ordblindhed og læse- og skrivevanskeligheder." },
        { t: "newsList" }
      ]
    }
  },

  /* ---------------- Hjælpere --------------------------------------------- */
  getPage(route) {
    if (this.pages[route]) return this.pages[route];
    // nyhedsartikler
    var m = route.match(/^nyheder\/(.+)$/);
    if (m) {
      var article = this.news.find(function (n) { return n.slug === m[1]; });
      if (article) return { title: article.title, section: "Nyheder", article: article, noHelp: true };
    }
    // kursussider
    var k = route.match(/^ressourcer\/kurser\/(.+)$/);
    if (k) {
      var course = this.courses.find(function (c) { return c.slug === k[1]; });
      if (course) return { title: course.title, section: "Ressourcer", course: course };
    }
    return null;
  }
};
