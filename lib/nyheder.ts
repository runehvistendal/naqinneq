export interface Nyhed {
  slug: string;
  tag: string;
  title: string;
  date: string;
  dateIso: string;
  excerpt: string;
  body: string[];
}

export const NYHEDER: Nyhed[] = [
  {
    slug: 'handlingsplan-ordblindhed-2025-2029',
    tag: 'Nyhed',
    title: 'Ny handlingsplan for ordblindhed 2025–2029 er offentliggjort',
    date: '21. april 2026',
    dateIso: '2026-04-21',
    excerpt: 'Naalakkersuisut har offentliggjort den nationale handlingsplan mod ordblindhed og læse-/skrivevanskeligheder.',
    body: [
      'Naalakkersuisut har den 21. april 2026 offentliggjort den nationale handlingsplan mod ordblindhed og læse- og skrivevanskeligheder for perioden 2025–2029. Planen fastlægger en ambitiøs retning for det kommende arbejde og sætter Naqinneq — Videnscenteret — i centrum for indsatsen.',
      'Handlingsplanen indeholder en række konkrete initiativer, herunder opbygning af nationale kompetencer, tidlig opdagelse i folkeskolen, bedre adgang til screenings- og testmaterialer på kalaallisut, samt et styrket samarbejde med uddannelsesinstitutioner og arbejdsmarkedet.',
      'Videnscenteret vil i de kommende måneder udsende mere information om, hvordan handlingsplanen omsættes til konkrete tilbud og ressourcer for borgere, fagfolk og institutioner i hele Grønland.',
    ],
  },
  {
    slug: 'groenlandsk-ordblindetest-paa-misiligutit',
    tag: 'Ressource',
    title: 'Grønlandsk ordblindetest nu tilgængelig på Misiligutit',
    date: '3. marts 2026',
    dateIso: '2026-03-03',
    excerpt: 'Den grønlandsksprogede ordblindetest er nu tilgængelig via misiligutit.naqinneq.gl for fagfolk og vejledere.',
    body: [
      'Den grønlandsksprogede ordblindetest er fra marts 2026 tilgængelig for fagfolk og vejledere via platformen Misiligutit. Testen er udviklet specifikt til kalaallisut og tager højde for sprogets særlige opbygning og ortografi.',
      'Adgang til testen kræver registrering som fagperson. Vejledere, lærere og psykologer kan ansøge om adgang via Videnscenteret. Testen gennemføres digitalt og giver en rapport med anbefalinger til videre udredning.',
      'Misiligutit er Naqinneqs platform til fagfolk. Her samles testmaterialer, vejledninger og faglige ressourcer, der kræver professionel baggrund at anvende korrekt.',
    ],
  },
  {
    slug: 'kursus-i-ordblindedagogik-2026',
    tag: 'Kursus',
    title: 'Kursus i ordblindepædagogik – tilmelding åben',
    date: '15. februar 2026',
    dateIso: '2026-02-15',
    excerpt: 'Videnscenteret afholder kursus for lærere og vejledere med fokus på tidlig opdagelse og støtte.',
    body: [
      'Videnscenteret afholder i foråret 2026 et kursus i ordblindepædagogik henvendt til lærere, vejledere og pædagogisk personale i folkeskolen. Kurset fokuserer på tidlig opdagelse af læse- og skrivevanskeligheder samt konkrete støttestrategier i undervisningen.',
      'Kurset afholdes over to dage i Nuuk og indeholder både teori og praksis. Deltagerne vil arbejde med konkrete cases og lære at anvende de screenings- og testmaterialer, som Naqinneq stiller til rådighed.',
      'Tilmelding er åben frem til 1. april 2026. Kurset er gratis for ansatte i den grønlandske folkeskole. Se kursusdetaljer og tilmeld dig via knappen nedenfor.',
    ],
  },
];

export function getNyhed(slug: string): Nyhed | undefined {
  return NYHEDER.find(n => n.slug === slug);
}
