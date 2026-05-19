export interface Kursus {
  slug: string;
  title: string;
  date: string;
  dateIso: string;
  location: string;
  duration: string;
  targetGroup: string;
  excerpt: string;
  description: string[];
  program: { time: string; item: string }[];
  maxParticipants: number;
  deadline: string;
}

export const KURSER: Kursus[] = [
  {
    slug: 'ordblindevejleder-med-testkompetencer',
    title: 'Ordblindevejleder med testkompetencer',
    date: 'September 2026 – marts 2028',
    dateIso: '2026-09-01',
    location: 'Nuuk (fysisk) + online',
    duration: '3 moduler over 18 måneder',
    targetGroup: 'Lærere, vejledere, læsevejledere og læsepædagogisk personale',
    excerpt:
      'Kompetencegivende forløb der kvalificerer til selvstændigt at varetage ordblindepædagogiske opgaver — herunder testning, vejledning og undervisningsplanlægning.',
    description: [
      'Kurset kvalificerer deltagerne til selvstændigt at varetage læsepædagogiske opgaver, herunder undervisningsplanlægning, vejledning og arbejde med ordblinde i skole, på uddannelse og på arbejdspladsen. Forløbet er tilrettelagt af Professionshøjskolen Absalon i samarbejde med Uddannelsesstyrelsen.',
      'Hvert modul kombinerer tre fysiske opholdsdage i Nuuk med online undervisning og dækker: forudsætninger for skriftsprogsudvikling (modul 1), ordblindhed og andre læsevanskeligheder (modul 2) og ordblindevenlig skole med fokus på fleksible læringsmiljøer (modul 3).',
      'Maks. 20 deltagere. Uddannelsesstyrelsen dækker alle kursusudgifter samt rejseomkostninger for deltagere uden for Nuuk. Undervisningen foregår på dansk.',
    ],
    program: [
      { time: 'Modul 1 · sept 2026', item: 'Forudsætninger for skriftsprogsudvikling' },
      { time: 'Modul 2 · forår 2027', item: 'Ordblindhed og andre læsevanskeligheder' },
      { time: 'Modul 3 · forår 2028', item: 'Ordblindevenlig skole og fleksible læringsmiljøer' },
    ],
    maxParticipants: 20,
    deadline: 'Forhånd: 15. marts 2026 · Endelig: 1. juni 2026',
  },
  {
    slug: 'basiskurser-om-ordblindhed',
    title: 'Basiskurser om ordblindhed',
    date: 'Februar 2027 (hold 1) · Efterår 2027 (hold 2)',
    dateIso: '2027-02-02',
    location: 'Nuuk (fysisk) + online',
    duration: 'Niveau 1: 3 dage · Niveau 2: 6 × 3 timer online',
    targetGroup: 'Undervisere, vejledere og rådgivere på tværs af uddannelsessektorer',
    excerpt:
      'Basiskurser for alle der arbejder med ordblindhed — fra grundlæggende viden til det specialiserede vejledningskursus D.O.S.O.',
    description: [
      'Uddannelsesstyrelsen og Professionshøjskolen Absalon udbyder basiskurser henvendt til undervisere og vejledere, der møder borgere med ordblindhed og skriftsprogsvanskeligheder i deres daglige arbejde.',
      'Der udbydes to forløb: et grundlæggende kursus om ordblindhed og det specialiserede vejledningskursus D.O.S.O (Dialog og støtte i ordblindevejledning). Niveau 1 er tre fysiske opholdsdage i Nuuk. Niveau 2 er seks online sessioner à tre timer og går i dybden med fleksible læringsmiljøer, ordblindevenlig pædagogik, lovgivning og vejledningsteori.',
      'Kurserne er gratis med maks. 20 deltagere. Undervises af Carina Vallentin Degn og Julie Fredsø-Rauer fra Professionshøjskolen Absalon.',
    ],
    program: [
      { time: 'Niveau 1 · dag 1', item: 'Hvad er ordblindhed? Tegn, årsager og konsekvenser' },
      { time: 'Niveau 1 · dag 2', item: 'Kompenserende metoder og inkluderende undervisning' },
      { time: 'Niveau 1 · dag 3', item: 'Borgerrettigheder, lovgivning og praksis' },
      { time: 'Niveau 2 · session 1–2', item: 'Fleksible læringsmiljøer og ordblindevenlig pædagogik' },
      { time: 'Niveau 2 · session 3–4', item: 'Juridiske forpligtelser og vejledningsteori' },
      { time: 'Niveau 2 · session 5–6', item: 'Fordybelse og afsluttende praksisopgave' },
    ],
    maxParticipants: 20,
    deadline: 'Hold 1: 15. marts 2026 · Hold 2: 1. oktober 2026',
  },
  {
    slug: 'leder-og-forvaltningsspor',
    title: 'Leder- og forvaltningsspor',
    date: '29. januar 2026 – 30. marts 2028',
    dateIso: '2026-08-27',
    location: 'Online (Microsoft Teams)',
    duration: '6 webinarer à 2 timer (torsdage kl. 14–16)',
    targetGroup: 'Skoleledere, uddannelsesledere og forvaltningsmedarbejdere',
    excerpt:
      'Seks dialogbaserede webinarer for ledere og forvaltning — sikrer at ny viden fra ordblindevejlederkurserne implementeres og forankres i hele organisationen.',
    description: [
      'Leder- og forvaltningssporet er en del af den samlede kompetenceudviklingsindsats og er rettet mod dem, der skal skabe rammerne for at ordblindevenlig praksis kan slå rod i skolen eller institutionen.',
      'Forløbet fokuserer på at etablere støttende deltagelsesbetingelser, facilitere videndeling mellem kursusfaser og udvikle et fælles fagligt sprog om ordblindhed og inklusion. Sessioner er fordelt over perioden 2026–2028 og passes ind, efterhånden som de tilknyttede medarbejderkurser skrider frem.',
      'Tilmelding er løbende. Undervisningen varetages af Professionshøjskolen Absalon og koordineres af Uddannelsesstyrelsen. Kontakt Birthe Lyberth på bily@nanoq.gl eller (+299) 34 62 53.',
    ],
    program: [
      { time: '29. jan 2026',  item: 'Opstart: Handlingsplanens mål og lederens rolle' },
      { time: '27. aug 2026',  item: 'Tværgående kompetenceudviklingsramme' },
      { time: '28. jan 2027',  item: 'Ordblindevenlig organisation i praksis' },
      { time: '23. apr 2027',  item: 'Fleksible læringsmiljøer og implementering' },
      { time: '20. maj 2027',  item: 'Vejlederrollens beskrivelse og forankring' },
      { time: '30. mar 2028',  item: 'Evaluering og fremadrettet plan' },
    ],
    maxParticipants: 999,
    deadline: 'Løbende tilmelding',
  },
  {
    slug: 'intowords-kurser-2026',
    title: 'IntoWords kurser 2026',
    date: 'Januar–april 2026 (fase 1)',
    dateIso: '2026-01-06',
    location: 'Qaqortoq, Aasiaat, Nuuk + online',
    duration: 'Halv dag (fysisk) · 3 timer (online)',
    targetGroup: 'Lærere, pædagogisk personale og Majoriaq-medarbejdere',
    excerpt:
      'Introduktionskurser i brugen af IntoWords, afholdt på skoler og uddannelsesinstitutioner i hele Grønland.',
    description: [
      'Uddannelsesstyrelsen afholder kurser i grundlæggende brug af IntoWords på skoler og uddannelsesinstitutioner i hele Grønland. Kurserne dækker de vigtigste funktioner: oplæsning, ordforslag, stavekontrol, OCR-scanning og individuelle indstillinger.',
      'Første fase (januar–april 2026) er målrettet folkeskoler og Majoriaq. Kommende faser vil rette sig mod arbejdsmarkedet og enkeltborgere, efterhånden som adgangen udvides. Ny information offentliggøres her, når næste fase er planlagt.',
    ],
    program: [
      { time: 'Uge 6',  item: 'Fysisk kursus — Qaqortoq (Narsaq og Nanortalik)' },
      { time: 'Uge 9',  item: 'Fysisk kursus — Aasiaat' },
      { time: 'Uge 10', item: 'Fysisk kursus — Nuuk' },
      { time: '19. mar', item: 'Online kursus — folkeskoler (nord og vest)' },
      { time: '24. mar', item: 'Online kursus — folkeskoler (øst og syd)' },
      { time: '9. apr',  item: 'Online kursus — Majoriaq' },
    ],
    maxParticipants: 999,
    deadline: 'Ingen — tilmelding via skolen eller uddannelsesinstitutionen',
  },
];

export function getKursus(slug: string): Kursus | undefined {
  return KURSER.find(k => k.slug === slug);
}
