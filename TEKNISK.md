# Teknisk dokumentation — naqinneq.gl (sila.gl)

Denne side beskriver, hvordan naqinneq.gl er bygget, hvor koden ligger,
og hvordan I som kollegaer kan redigere indholdet — enten via Claude Code
eller manuelt i filerne.

---

## Overblik

```
Browser → sila.gl → Vercel (hosting) → GitHub (kildekode)
                        ↑
              Automatisk deploy ved hvert push
```

| Komponent | Teknologi | Adgang |
|-----------|-----------|--------|
| Frontend | Next.js 14 (App Router) | GitHub |
| Hosting | Vercel (gratis tier) | vercel.com |
| Kildekode | GitHub | github.com/runehvistendal/naqinneq |
| Domæne | sila.gl via Simply.com | Simply-panelet |
| CMS | Ingen — statiske TypeScript-filer | Direkte i koden |
| Indhold | `.ts`-filer i `lib/` + side-filer i `app/` | GitHub / Claude |

---

## Teknisk stak

- **Next.js 14** med App Router og statisk eksport
- **next-intl** til to-sprogssupport (dansk `da` og kalaallisut `kl`)
- **TypeScript** til alle datafiler og komponenter
- **Tailwind CSS** bruges ikke — al CSS er håndskrevet i `app/globals.css`
- **Vercel** bygger og deployer automatisk ved hvert push til `main`-branchen

### Mappestruktur (forkortet)

```
naqinneq/
├── app/
│   └── [locale]/            ← Alle sider (da + kl via samme kode)
│       ├── page.tsx         ← Forsiden
│       ├── nyheder/         ← Nyhedsliste + individuelle nyheder
│       ├── ressourcer/      ← Kurser, materialer, videoer, podcasts
│       ├── tests/           ← Screening + ordblindetest-sider
│       ├── videnscenteret/  ← Om os, indsatsområder, kontakt
│       └── vidensomraader/  ← Ordblindhed, sprogforståelse, m.fl.
├── components/
│   ├── home/                ← Forsidekomponenter
│   ├── layout/              ← Navigation, sidebar, TTS
│   └── ui/                  ← Genbrugelige komponenter (PageBody, Card m.fl.)
├── lib/
│   ├── nyheder.ts           ← Alle nyheder (statisk data)
│   ├── kurser.ts            ← Alle kurser (statisk data)
│   ├── nav.ts               ← Navigationsmenu
│   └── da-tts.ts / martha-tts.ts  ← Oplæsningsfunktioner
├── messages/
│   ├── da.json              ← Danske oversættelser
│   └── kl.json              ← Kalaallisut-oversættelser
└── public/                  ← Filer tilgængelige på sila.gl/...
    ├── materialer/
    ├── billeder/
    └── videoer/
```

---

## Sådan deployeres siden

Når en fil ændres og pushes til GitHub `main`-branchen, sker følgende automatisk:

1. Vercel registrerer pushet
2. Vercel bygger Next.js-projektet (ca. 1–2 minutter)
3. Den nye version er live på sila.gl

**I behøver ikke gøre noget manuelt** — push til GitHub = live på sitet.

### Deploy-status

Gå til [vercel.com/dashboard](https://vercel.com/dashboard) for at se om et
deploy lykkedes, og hvad fejlen er hvis det fejler.

---

## Redigering via Claude Code

Den primære arbejdsgang er at bede Claude om at lave ændringer.
Se `INDHOLD.md` for præcise instruktioner og eksempler.

**Arbejdsgang:**

1. Åbn Claude Code i projektmappen
2. Beskriv hvad du vil ændre (se eksempler i `INDHOLD.md`)
3. Claude redigerer filerne og pusher til GitHub
4. Siden er live inden for 1–2 minutter

**Hvad Claude kan gøre for jer:**
- Tilføje og redigere nyheder
- Tilføje og redigere kurser
- Opdatere tekst på alle sider
- Tilføje videoer og podcasts til ressource-siderne
- Opdatere kontaktoplysninger
- Tilføje nye menupunkter

---

## Redigering manuelt (uden Claude)

Hvis I vil redigere direkte, skal I:

1. Klone eller trække projektet ned lokalt via GitHub
2. Åbn projektet i en teksteditor (fx VS Code)
3. Rediger de relevante filer (se nedenfor)
4. `git add . && git commit -m "Beskrivelse" && git push`

---

## Datafiler — indhold I selv kan redigere

### Nyheder → `lib/nyheder.ts`

Hver nyhed er et objekt med disse felter:

```typescript
{
  slug: 'unik-url-streng',        // bruges i URL'en: /nyheder/[slug]
  tag: 'Nyhed',                   // Nyhed | Kursus | Ressource | Arrangement
  title: 'Dansk titel',
  titleKl: 'Kalaallisut-titel',   // valgfri
  date: '27. marts 2026',         // vises på siden
  dateIso: '2026-03-27',          // bruges til sortering og HTML
  excerpt: 'Kort beskrivelse...',
  excerptKl: 'Kalaallisut-beskrivelse', // valgfri
  body: [                         // array af afsnit
    'Første afsnit.',
    'Andet afsnit.',
  ],
  bodyKl: ['...'],                // valgfri kalaallisut-brødtekst
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',  // valgfri
  videoTitle: 'Videotitel',       // valgfri
}
```

Tilføj nye nyheder øverst i `NYHEDER`-arrayet (nyeste øverst).

### Kurser → `lib/kurser.ts`

```typescript
{
  slug: 'unik-url-streng',
  title: 'Kurstitel',
  date: '15. august 2026',
  dateIso: '2026-08-15',
  location: 'Nuuk',
  duration: '2 dage',
  targetGroup: 'Lærere og vejledere',
  maxParticipants: 20,
  deadline: '1. juli 2026',
  excerpt: 'Kort beskrivelse...',
  description: ['Afsnit 1.', 'Afsnit 2.'],
  program: [
    { time: '09:00', item: 'Velkomst og introduktion' },
    { time: '10:00', item: 'Foredrag om ordblindhed' },
  ],
}
```

### Navigation → `lib/nav.ts`

Indeholder menupunkterne. Rediger her for at tilføje eller omdøbe
menupunkter.

---

## Filer i public/-mappen

Filer lagt i `public/`-mappen er direkte tilgængelige på sila.gl:

```
public/materialer/vejledninger/fil.pdf  →  sila.gl/materialer/vejledninger/fil.pdf
public/billeder/foto.jpg                →  sila.gl/billeder/foto.jpg
```

Anbefalet struktur:
```
public/
  materialer/
    vejledninger/    ← PDF-vejledninger
    rapporter/       ← PDF-rapporter
  billeder/
    kontaktpersoner/ ← Profilbilleder
  videoer/           ← Lokale videofiler (brug YouTube-embed til store videoer)
```

---

## To-sprogssupport (dansk + kalaallisut)

Siden har to sprogversioner:
- **Dansk:** `sila.gl/...`
- **Kalaallisut:** `sila.gl/kl/...`

Oversættelser af UI-tekster (knapper, labels m.m.) ligger i:
- `messages/da.json`
- `messages/kl.json`

Sideindhold (brødtekst) er håndkodede tekster i de individuelle
side-filer. Nyheder og kurser understøtter `titleKl` og `bodyKl`-felter
til kalaallisut-versioner.

---

## Google Drive (fremtidigt)

Det er planlagt, at en del arbejdsmaterialer og råtekster fremover vil
ligge i Google Drive til fælles redigering. Workflow:

1. Skriv eller ret tekst i Google Drive (delt dokument)
2. Giv Claude linket eller kopiér teksten ind
3. Claude opdaterer siden og pusher til GitHub

Dette er endnu ikke sat op — når I er klar, beskriv det over for Claude,
og vi sætter det op.

---

## Adgang og rettigheder

| Ressource | Hvem har adgang | Sådan får kollegaer adgang |
|-----------|-----------------|---------------------------|
| GitHub-repo | Kun Rune pt. | Inviter via GitHub: Settings → Collaborators |
| Vercel | Kun Rune pt. | Inviter via Vercel: Settings → Members |
| Simply (domæne) | Kun Rune pt. | Deles via Simply-login eller sub-bruger |
| Claude Code | Alle med projektet | Installer Claude Code, åbn mappen |

---

## Kontakt og support

Siden er udviklet og vedligeholdes med Claude Code (Anthropic).
Tekniske spørgsmål rettes til den ansvarlige for projektet.

**Nyttige links:**
- Siden: https://sila.gl
- GitHub: https://github.com/runehvistendal/naqinneq
- Vercel: https://vercel.com/dashboard
- Simply (domæne): https://www.simply.com/dk/controlpanel/
