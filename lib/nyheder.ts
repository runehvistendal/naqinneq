export interface Nyhed {
  slug: string;
  tag: string;
  title: string;
  titleKl?: string;
  date: string;
  dateIso: string;
  excerpt: string;
  excerptKl?: string;
  body: string[];
  bodyKl?: string[];
  videoUrl?: string;
  videoTitle?: string;
  image?: string;
  imageAlt?: string;
  attachment?: { href: string; label: string; labelKl?: string };
}

export const NYHEDER: Nyhed[] = [
  {
    slug: 'etwinning-seminar-italien-2026',
    tag: 'Nyhed',
    title: 'eTwinning inviterer 2 grønlandske lærere på seminar i Italien i oktober 2026',
    titleKl: 'eTwinningip kalaallit ilinniartitsisut marluk oktober 2026 Italiemi seminareqarnissamut qaaqquai',
    date: '10. juni 2026',
    dateIso: '2026-06-10',
    excerpt:
      'Det er gratis at deltage i et eTwinning seminar. eTwinning betaler for transport, ophold, kursus og forplejning til de to deltagere fra Grønland.',
    excerptKl:
      'eTwinningip seminareqartitsinissaanut peqataaneq akeqanngilaq. Etwinningip Kalaallit Nunaannit peqataasussanut marlunnut angalaneq, najugaqarneq, pikkorissarnermut peqataaneq nerisaqarnerlu isumagissavaa.',
    body: [
      'eTwinning ønsker at skabe et stærkere samarbejde mellem skoler i fjerntliggende dele af det europæiske fællesskab. Derfor arrangerer Italien, Norge, Sverige, Finland og Rigsfællesskabet et seminar i 2026 og et seminar i 2027, hvor lærere fra fjernere dele af vores lande bliver særligt inviteret til at deltage.',
      'Det er gratis at deltage i et eTwinning seminar. eTwinning betaler for transport, ophold, kursus og forplejning til de to deltagere fra Grønland. eTwinning betaler ikke vikar, forplejning i løbet af rejsetiden og parkering.',
      'Seminaret finder sted i Italien — vi ved endnu ikke præcist hvor. Datoer: 21.–24. oktober. I vil nok skulle rejse fra Grønland d. 19. oktober og være retur d. 26. oktober.',
      'Seminaret foregår på engelsk. Engelsk er ikke modersmål for nogen af deltagerne, så vi hjælper hinanden med kommunikationen.',
      'Programmet for seminaret kan hentes nederst på siden. Det er et foreløbigt program — det mere præcise indhold følger senere.',
      'Hvis seminaret har interesse for dig eller dine lærere, så kontakt venligst etwinning@stukuvm.dk. Tilmeldingsfrist d. 14. august 2026. Før du tilmelder dig, skal du have aftalt det med din skoleleder.',
    ],
    bodyKl: [
      'eTwinningip kissaatigaa Europami atuarfiit ungasissumiittut suleqatigiinnerat nukittorsassallugu. Taamaattumik Italia, Norge, Sverige, Finlandi kiisalu Naalagaaffeqatigiinnerup iluani ilaasortat seminarertitsissapput 2026-mi aammalu 2027-mi, ilinniartitsisut nunanit ungasinnerusuneersut immikkut peqataanissamut qaaqquneqarput.',
      'eTwinningip seminareqartitsinissaanut peqataaneq akeqanngilaq. Etwinningip Kalaallit Nunaannit peqataasussanut marlunnut angalaneq, najugaqarneq, pikkorissarnermut peqataaneq nerisaqarnerlu isumagissavaa. eTwinningip vikareqarneq, angalanermi nerisaqarneq, bilinillu inissiineq akilissanngilaa.',
      'Seminareqarneq pissaaq Italiami — suli Italiami sumeeqqissaassanersoq ilisimaneqanngilaq. Ullut seminareqarfiusussat: 21.–24. oktober. Kalaallit Nunaanniit aallassaasi 19. oktober utereersimassallusilu 26. oktober.',
      'Seminari tuluttut ingerlanneqassaaq. Peqataasut ilaat tuluttut ilitsoqqussaralugu oqaaseqartuunngimmata ikioqatigiinnissarput naatsorsuutigaarput.',
      'Programmi ilanngunneqartoq utaqqiisaarutaavoq. Eqqornerusoq kingusinnerusukkut ikkunneqarumaarpoq.',
      'Seminarimut peqataanissannut soqutiginnikkuit uunga saaffiginnissaatit etwinning@stukuvm.dk. Peqataanissamut ulloq nalunaarfissaq kingulleq tassaavoq 14. august 2026. Eqqaamallugu nalunaannginninni atuarfimmi pisortat akuersiteqqaassagakku.',
    ],
    image: '/billeder/nyheder/etwinning.jpg',
    imageAlt: 'Illustration: fire lærere samarbejder om et bord med bøger og papirer',
    attachment: {
      href: '/materialer/etwinning-program-okt-2026.pdf',
      label: 'Hent program: eTwinning (PDF)',
      labelKl: 'Programmi aajuk: eTwinning (PDF)',
    },
  },
  {
    slug: 'intowords-groenlandsk',
    tag: 'Nyhed',
    title: 'IntoWords – nu på grønlandsk',
    titleKl: 'IntoWords – maanna kalaallisut',
    date: '27. marts 2026',
    dateIso: '2026-03-27',
    excerpt:
      'IntoWords har fået en grønlandsk brugergrænseflade. Alle grønlandske uddannelsesinstitutioner fik adgang fra september 2025.',
    excerptKl:
      'IntoWords maanna kalaallisut qulequtsersorneqareerluni atorsinnaanngormat.',
    body: [
      'IntoWords fik den 27. marts 2026 en grønlandsk brugergrænseflade. Alle uddannelsesinstitutioner i Grønland fik adgang til programmet fra september 2025, og udviklingen af grønlandske funktioner fortsætter.',
      'Under udvikling er bl.a. grønlandsk talesyntese (Martha), grønlandske ordforslag og integration af yderligere sprogteknologier. I mellemtiden kan brugerne benytte IntoWords på dansk, engelsk og en lang række andre sprog.',
      'IntoWords tilbyder oplæsning med fremhævelse, stavekontrol med integreret ordbog, OCR-scanning af billeder og PDF\'er samt individuelle indstillinger. Programmet kan bruges på computer, tablet og mobil via intowords.com.',
    ],
  },
  {
    slug: 'basiskurser-om-ordblindhed',
    tag: 'Kursus',
    title: 'Basiskurser om ordblindhed',
    titleKl: 'Naqinnernik ilisarsisinnaannginnermut tunngaviusumik pikkorissarnerit',
    date: '11. februar 2026',
    dateIso: '2026-02-11',
    excerpt:
      'Uddannelsesstyrelsen og Professionshøjskolen Absalon udbyder basiskurser for undervisere og vejledere om ordblindhed og skriftsprogsvanskeligheder.',
    body: [
      'Uddannelsesstyrelsen og Professionshøjskolen Absalon udbyder basiskurser for undervisere og vejledere på tværs af uddannelsessektorer. Kurserne henvender sig til alle, der arbejder med ordblindhed og skriftsprogsvanskeligheder i skole, på uddannelse eller i vejledning.',
      'Der udbydes to spor: et grundlæggende kursus om ordblindhed for undervisere og det specialiserede vejledningskursus D.O.S.O (Dialog og støtte i ordblindevejledning). Begge kombinerer fysiske opholdsdage i Nuuk med online undervisning og dækker emner som læse- og skriveudvikling, kompenserende metoder og inklusion.',
      'Tilmeldingsfrist er 15. marts 2026 og 1. oktober 2026. Kurserne er gratis og har maks. 20 deltagere pr. hold. Undervises af Carina Vallentin Degn og Julie Fredsø-Rauer fra Absalon.',
    ],
  },
  {
    slug: 'ordblindevejleder-med-testkompetencer',
    tag: 'Kursus',
    title: 'Ordblindevejleder med testkompetencer',
    titleKl: 'Naqinnernik ilisarsisinnaannginnermut misissuisinnaanermik piginnaasaqarluni siunnersorti',
    date: '4. februar 2026',
    dateIso: '2026-02-04',
    excerpt:
      'Et kompetencegivende kursusforløb for lærere, vejledere og læsepædagoger, der strækker sig fra september 2026 til marts 2028.',
    body: [
      'Uddannelsesstyrelsen udbyder et kompetencegivende kursus for lærere, vejledere, læsevejledere og andet læsepædagogisk personale. Kurset kvalificerer deltagerne til selvstændigt at varetage opgaver inden for læsepædagogik, undervisningsplanlægning og vejledning om ordblindhed.',
      'Forløbet er opbygget af tre moduler, der løber fra september 2026 til marts 2028. Hvert modul kombinerer tre fysiske opholdsdage i Nuuk med online undervisning og dækker: forudsætninger for skriftsprogsudvikling, ordblindhed og andre læsevanskeligheder, og ordblindevenlig skole med fokus på fleksible læringsmiljøer.',
      'Forhåndstilmelding senest 15. marts 2026 — endelig tilmelding 1. juni 2026. Maks. 20 deltagere. Uddannelsesstyrelsen dækker alle kursusudgifter samt rejseomkostninger for deltagere uden for Nuuk.',
    ],
  },
  {
    slug: 'intowords-kurser-2026',
    tag: 'Kursus',
    title: 'IntoWords kurser 2026',
    titleKl: 'IntoWordsimut 2026-mi pikkorissaanerit',
    date: '12. januar 2026',
    dateIso: '2026-01-12',
    excerpt:
      'Uddannelsesstyrelsen afholder kurser i brugen af IntoWords på skoler og uddannelsesinstitutioner i hele Grønland i 2026.',
    body: [
      'Uddannelsesstyrelsen afholder kurser i brugen af IntoWords på skoler og uddannelsesinstitutioner i hele Grønland i løbet af 2026. Kurserne dækker grundlæggende funktioner og praktisk brug af programmet.',
      'Der afholdes fysiske kurser i Qaqortoq (med deltagere fra Narsaq og Nanortalik), Aasiaat og Nuuk samt online kurser for folkeskoler og Majoriaq. Den første fase er målrettet skoler og uddannelsesinstitutioner — kurser for arbejdsmarkedet og privatpersoner følger i efterfølgende faser.',
    ],
  },
  {
    slug: 'intowords-stoette-til-laesning-og-skrivning',
    tag: 'Ressource',
    title: 'Få støtte til læsning og skrivning med IntoWords',
    titleKl: 'IntoWords atorlugu atuarnermut allannermullu ikorfartorneqarit',
    date: '12. januar 2026',
    dateIso: '2026-01-12',
    excerpt:
      'IntoWords er gratis for alle elever og studerende i Grønland. Se introduktionsvideo og få overblik over programmets muligheder.',
    body: [
      'IntoWords er nu gratis tilgængeligt for alle elever og studerende på grønlandske uddannelsesinstitutioner. Programmet hjælper med at få tekster læst højt, foreslår ord mens du skriver, understøtter diktering og giver adgang til ordbøger.',
      'Uddannelsesstyrelsen er i gang med at integrere grønlandsk sprogstøtte fra Oqaasileriffik, så IntoWords fremover fungerer endnu bedre for grønlandsksprogede brugere. Se introduktionsvideoen herunder for at komme i gang.',
    ],
    videoUrl: 'https://www.youtube.com/embed/bRY2BJCOwaM',
    videoTitle: 'Introduktionsvideo til IntoWords',
  },
  {
    slug: 'sammen-om-at-styrke-laese-og-skrivekompetencer',
    tag: 'Nyhed',
    title: 'Sammen om at styrke læse- og skrivekompetencer i Grønland',
    titleKl: 'Kalaallit Nunaanni atuarnermut allannermullu piginnaasanik nukittorsaaneq',
    date: '26. november 2025',
    dateIso: '2025-11-26',
    excerpt:
      'Uddannelsesstyrelsen og Professionshøjskolen Absalon har indgået et flerårigt samarbejde om kompetenceudvikling på tværs af skoler og uddannelsesinstitutioner.',
    body: [
      'Uddannelsesstyrelsen og Professionshøjskolen Absalon har indgået et flerårigt samarbejde om kompetenceudvikling til gavn for elever og studerende med læse- og skrivevanskeligheder. Initiativet retter sig mod undervisere, vejledere og ledere på tværs af skoler og uddannelsesinstitutioner.',
      'Samarbejdet består af tre spor: et leder- og forvaltningsspor for skole- og uddannelsesledere, et ordblindevejlederkursus med testkompetencer og basiskurser for undervisere og vejledere. Sporene kombinerer fysisk undervisning med online forløb og tilpasses de konkrete behov på de enkelte institutioner.',
      'Initiativet er en del af den nationale handlingsplan mod ordblindhed og læse- og skrivevanskeligheder og vil løbende blive udbygget i takt med, at kompetencer og ressourcer opbygges.',
    ],
    videoUrl: 'https://www.youtube.com/embed/SRFrjCga8yM',
    videoTitle: 'Podcast med Naqinneqs dysleksiafdeling',
  },
  {
    slug: 'leder-og-forvaltningsspor',
    tag: 'Kursus',
    title: 'Leder- og forvaltningsspor',
    titleKl: 'Pisortanut aqutsisoqarfinnullu sammisoq',
    date: '26. november 2025',
    dateIso: '2025-11-26',
    excerpt:
      'Seks dialogbaserede webinarer for skoleledere, uddannelsesledere og forvaltningsmedarbejdere — fordelt over 2026 til 2028.',
    body: [
      'Som del af kompetenceudviklingsindsatsen tilbydes et leder- og forvaltningsspor for skoleledere, uddannelsesledere og forvaltningsmedarbejdere. Formålet er at sikre, at viden fra ordblindevejlederkurserne implementeres i hele organisationen og understøttes af ledelsen.',
      'Sporet består af seks dialogbaserede webinarer à to timer via Teams, afholdt på torsdage kl. 14–16. Datoer: 29. januar 2026, 27. august 2026, 28. januar 2027, 23. april 2027, 20. maj 2027 og 30. marts 2028.',
      'Tilmelding er løbende. Undervisningen varetages af Professionshøjskolen Absalon og koordineres af Uddannelsesstyrelsen. Kontakt Birthe Lyberth på bily@nanoq.gl eller (+299) 34 62 53.',
    ],
  },
  {
    slug: 'intowords-adgang-til-alle-uddannelser',
    tag: 'Nyhed',
    title: 'Nu får alle uddannelser adgang til IntoWords',
    titleKl: 'Ilinniarfeqarfiit tamarmik IntoWords-imut isersinnaanngorput',
    date: '8. september 2025',
    dateIso: '2025-09-08',
    excerpt:
      'Fra 1. september 2025 har alle grønlandske uddannelsesinstitutioner gratis adgang til IntoWords — et kompenserende læse- og skriveprogram.',
    body: [
      'Fra 1. september 2025 har alle grønlandske uddannelsesinstitutioner gratis adgang til IntoWords. Uddannelsesstyrelsen har indgået aftale med Vitec MV om at stille det kompenserende læse- og skriveprogram til rådighed for elever, studerende og lærere.',
      'Udrulningen starter med dansk og engelsk sprogstøtte, mens grønlandsk integration er påbegyndt. Under udvikling er grønlandsk talesyntese (Martha) og grønlandske ordforslag. Folkeskoleelever logger ind med Unilogin, GUX-studerende og lærere med MitID.',
      'Uddannelsesstyrelsen afholder kurser i brugen af IntoWords i fem kommuner i ugerne 40–45. Tidligere deltagende institutioner bevarer deres adgang, og alle udgifter dækkes nu af Uddannelsesstyrelsen.',
    ],
  },
];

export function getNyhed(slug: string): Nyhed | undefined {
  return NYHEDER.find(n => n.slug === slug);
}
