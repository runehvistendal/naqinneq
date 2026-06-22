# Teknisk beskrivelse — naqinneq.gl

**Sidst opdateret:** juni 2026  
**Ansvarlig:** Rune Hvistendal  
**Liveadresse:** https://sila.gl

---

## 1. Hvad er siden, og hvad er den bygget med?

naqinneq.gl er et nationalt videnscenter for ordblindhed og læse- og skrivevanskeligheder i Grønland. Siden er en statisk hjemmeside — det vil sige, at der ikke er en database eller en server, der kører konstant. Alt indhold er bagt ind i siden ved hvert deploy og serveres som rene HTML-, CSS- og JavaScript-filer.

Siden er bygget med **Next.js 14** (React-framework), som er det mest udbredte framework til moderne hjemmesider. Sproget er **TypeScript**, som er JavaScript med typekontrol — det hjælper med at fange fejl, inden siden deployes. Al styling er håndskrevet CSS i én fil (`app/globals.css`).

Siden understøtter to sprog: **dansk** (`sila.gl/...`) og **kalaallisut** (`sila.gl/kl/...`). Begge sprogversioner bruger den samme kode — sprogvalget håndteres automatisk af biblioteket `next-intl`.

---

## 2. Systemoverblik — hvad hænger sammen med hvad?

```
┌──────────────────────────────────────────────────────────────────┐
│                        BRUGERENS BROWSER                         │
│                        sila.gl eller sila.gl/kl/...              │
└─────────────────────────────┬────────────────────────────────────┘
                              │ DNS-opslag
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  SIMPLY.COM — domæneregistrar                                   │
│  Ejer domænet sila.gl.                                          │
│  Et A-record peger sila.gl → Vercels IP-adresse.                │
│  Simply gør ikke andet — den er kun et "telefonbogsopslag".     │
└─────────────────────────────┬───────────────────────────────────┘
                              │ Trafik sendes videre
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  VERCEL — hosting og deployment                                 │
│  Modtager al trafik til sila.gl.                                │
│  Bygger Next.js-projektet og serverer det til brugerne.         │
│  Lytter på GitHub: ved hvert push til main-branchen             │
│  genbygger Vercel automatisk siden (ca. 1–2 minutter).          │
└─────────────────────────────┬───────────────────────────────────┘
                              │ Henter kildekode fra
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  GITHUB — versionsstyring og kildekode                          │
│  github.com/runehvistendal/naqinneq                             │
│  Indeholder al kode, alle tekster og alle datafiler.            │
│  Fungerer som "sandhed" — det der ligger her, er det der        │
│  deployes. Gemmer også historik over alle ændringer.            │
└─────────────────────────────┬───────────────────────────────────┘
                              │ Koden ændres via
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  LOKAL COMPUTER / CLAUDE CODE                                   │
│  Her redigeres filer — enten manuelt i en teksteditor           │
│  eller ved at bede Claude Code om at foretage ændringer.        │
│  Ændringer pushes til GitHub, som trigger et nyt deploy.        │
└─────────────────────────────────────────────────────────────────┘
```

**Opsummeret flow når noget ændres:**

1. En medarbejder beskriver en ændring til Claude Code (eller redigerer selv)
2. Claude retter filen og kører `git push`
3. GitHub modtager pushet
4. Vercel opdager pushet og bygger siden på ny (1–2 min)
5. sila.gl viser den opdaterede side

---

## 3. Adgange og logins

| Tjeneste | Hvad den bruges til | Adgang |
|----------|---------------------|--------|
| **Simply.com** | Ejer og forvalter domænet sila.gl | Rune |
| **Vercel** | Hosting, deployment, HTTPS | Rune |
| **GitHub** | Kildekode og versionsstyring | Rune |
| **Claude Code** | Redigering via AI-assistent | Alle med projektmappen |

**Sådan inviteres kollegaer:**

- **GitHub:** Gå til `github.com/runehvistendal/naqinneq` → Settings → Collaborators → Add people. Kollegaen skal have en GitHub-konto.
- **Vercel:** Gå til [vercel.com/dashboard](https://vercel.com/dashboard) → Project Settings → Members → Invite.
- **Claude Code:** Kollegaen installerer Claude Code (gratis CLI-program fra Anthropic), åbner projektmappen og er klar.

---

## 4. Projektets mappestruktur

```
naqinneq/
│
├── app/                          ← Alle sider og ruter
│   └── [locale]/                 ← Dynamisk lokale-segment (da/kl)
│       ├── page.tsx              ← Forsiden
│       ├── nyheder/
│       │   ├── page.tsx          ← Nyhedsliste (/nyheder)
│       │   └── [slug]/page.tsx   ← Individuel nyhed (/nyheder/slug)
│       ├── ressourcer/
│       │   ├── kurser/           ← Kursusliste + individuelle kurser
│       │   ├── materialer/       ← PDF-materialer
│       │   ├── videoer/          ← Videoer (YouTube-embed)
│       │   ├── podcasts/         ← Podcasts (YouTube-embed)
│       │   ├── vejledninger/
│       │   └── rapporter/
│       ├── tests/
│       │   ├── screening-for-ordblindhed/
│       │   ├── den-groenlandske-ordblindetest/
│       │   └── den-danske-ordblindetest/
│       ├── videnscenteret/
│       │   ├── om-os/
│       │   ├── indsatsomraader/
│       │   └── kontakt/
│       └── vidensomraader/
│           ├── ordblindhed/
│           ├── skriftsprogsvanskeligheder/
│           └── sprogforstaaelse/
│
├── components/                   ← Genbrugelige React-komponenter
│   ├── home/                     ← Forsidespecifikke komponenter (Search.tsx m.fl.)
│   ├── layout/                   ← Topbar (inkl. søgeikon-toggle), sidebar, navigation, TTS
│   └── ui/                       ← PageBody, Card, CTARow m.fl.
│
├── lib/                          ← ★ Her redigeres indhold ★
│   ├── nyheder.ts                ← Alle nyheder
│   ├── kurser.ts                 ← Alle kurser
│   ├── nav.ts                    ← Menustruktur
│   ├── da-tts.ts                 ← Dansk oplæsning (Web Speech API)
│   └── martha-tts.ts             ← Kalaallisut oplæsning (Martha/Oqaasileriffik)
│
├── messages/                     ← Oversættelser af UI-tekster
│   ├── da.json                   ← Dansk
│   └── kl.json                   ← Kalaallisut
│
├── public/                       ← Statiske filer (PDF, billeder m.m.)
│   ├── materialer/
│   └── billeder/
│
├── INDHOLD.md                    ← Guide til redaktører (ikke-teknisk)
└── TEKNISK.md                    ← Denne fil
```

---

## 5. To-sprogssupport

Siden er tilgængelig på to sprog. URL-strukturen er:

| Sprog | URL-mønster | Eksempel |
|-------|-------------|---------|
| Dansk | `/[sti]` | `sila.gl/nyheder` |
| Kalaallisut | `/kl/[sti]` | `sila.gl/kl/nyheder` |

Brugeren kan skifte sprog via KL/DA-knapperne i topbaren. Valget gemmes i en cookie.

**Hvad oversættes automatisk:**
- Knapper, labels og navigationstekster (via `messages/da.json` og `messages/kl.json`)
- Nyheds- og kurstitleri kalaallisut (via `titleKl`-feltet i datafilen)

**Hvad oversættes ikke automatisk:**
- Brødtekst på faglige sider (oversat manuelt og gemt direkte i sidefilen)

**Oplæsning:**
- Dansk TTS bruger browserens indbyggede Web Speech API
- Kalaallisut TTS bruger **Martha** — en ekstern TTS-tjeneste fra Oqaasileriffik (`oqaasileriffik.gl`), som er den officielle kalaallisut sprogteknologi

---

## 6. Datafiler — det vigtigste at kende

De to vigtigste datafiler til løbende indholdsopdatering er `lib/nyheder.ts` og `lib/kurser.ts`. De er skrevet i TypeScript, men er designet til at være lette at tilføje til — strukturen er fast og forudsigelig.

### Nyheder (`lib/nyheder.ts`)

Filen indeholder et array kaldet `NYHEDER`. Hvert element er en nyhed. **Nyeste nyhed øverst.**

```typescript
{
  slug: 'intowords-groenlandsk',     // Bruges i URL: /nyheder/intowords-groenlandsk
                                     // Kun små bogstaver, bindestreg, ingen æøå
  tag: 'Nyhed',                      // Nyhed | Kursus | Ressource | Arrangement
  title: 'IntoWords – nu på grønlandsk',
  titleKl: 'IntoWords – maanna kalaallisut',   // Valgfri KL-titel

  date: '27. marts 2026',            // Tekst der vises på siden
  dateIso: '2026-03-27',             // Maskinlæsbar dato (YYYY-MM-DD)

  excerpt: 'Kort beskrivelse...',    // Vises på nyhedslisten (1–2 sætninger)
  excerptKl: '...',                  // Valgfri KL-excerpt

  body: [                            // Array af tekstafsnit (hvert afsnit = ét element)
    'Første afsnit med den vigtigste information.',
    'Andet afsnit med uddybende detaljer.',
  ],
  bodyKl: ['...', '...'],            // Valgfri KL-brødtekst

  // Valgfrit — embed en YouTube-video i nyheden:
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  videoTitle: 'Titel på videoen',

  // Valgfrit — billede øverst i artiklen (læg filen i public/billeder/nyheder/):
  image: '/billeder/nyheder/eksempel.jpg',
  imageAlt: 'Beskrivelse af billedet til skærmlæsere',

  // Valgfrit — hentbar fil nederst i artiklen (læg filen i public/materialer/):
  attachment: {
    href: '/materialer/eksempel-program.pdf',
    label: 'Hent program (PDF)',
    labelKl: 'Programmi aajuk (PDF)',   // Valgfri KL-tekst
  },
}
```

> **Vigtigt:** `slug` skal være unik og må ikke ændres efter siden er gået live, da den bruges i URL'en.

### Kurser (`lib/kurser.ts`)

```typescript
{
  slug: 'basiskurser-om-ordblindhed',
  title: 'Basiskurser om ordblindhed',

  date: '11. februar 2026',          // Visningstekst
  dateIso: '2026-02-11',

  location: 'Nuuk',
  duration: '3 dage + online',
  targetGroup: 'Lærere og vejledere',
  maxParticipants: 20,
  deadline: '15. marts 2026',

  excerpt: 'Kort beskrivelse til kursuslisten.',
  description: [                     // Længere beskrivelse, ét afsnit pr. element
    'Uddannelsesstyrelsen og Absalon udbyder...',
    'Kurset kombinerer fysiske dage i Nuuk...',
  ],
  program: [                         // Dagsorden (valgfri)
    { time: '09:00', item: 'Velkomst og introduktion' },
    { time: '10:00', item: 'Foredrag: hvad er ordblindhed?' },
    { time: '12:00', item: 'Frokost' },
  ],
}
```

### Navigation (`lib/nav.ts`)

Indeholder hele menustrukturen — topbar-menupunkter, dropdown-grupper og URLs. Kræver teknisk hjælp at redigere korrekt. Bed Claude om at tilføje eller omdøbe menupunkter.

---

## 7. Statiske filer — PDF, billeder og video

Filer lagt i `public/`-mappen er direkte tilgængelige på sila.gl via samme sti:

```
public/materialer/vejledninger/vejledning-intowords.pdf
  → tilgængelig på: sila.gl/materialer/vejledninger/vejledning-intowords.pdf

public/billeder/kontaktpersoner/foto-aviaja.jpg
  → tilgængelig på: sila.gl/billeder/kontaktpersoner/foto-aviaja.jpg
```

**Anbefalet mappestruktur i `public/`:**

```
public/
  materialer/
    vejledninger/     ← Brugervejledninger (PDF)
    rapporter/        ← Faglige rapporter og undersøgelser (PDF)
  billeder/
    kontaktpersoner/  ← Profilfotos til kontaktsiden
```

> Store videofiler bør **ikke** ligge i `public/` — brug YouTube-embeds i stedet, da de belaster GitHub og Vercel unødigt.

---

## 8. Indholdsredigering — tre arbejdsgange

### Arbejdsgang A: Via Claude Code (anbefalet og nuværende)

Den primære metode. Kræver Claude Code installeret og adgang til projektmappen.

**Trin:**
1. Åbn Claude Code i mappen `C:\Users\rune\OneDrive\Dokumenter\Claude\Naqinneq\naqinneq`
2. Beskriv hvad du vil ændre på naturligt dansk (se eksempler nedenfor)
3. Claude redigerer de relevante filer, tjekker for fejl og pusher til GitHub
4. Siden er live inden for 1–2 minutter

**Eksempler på instrukser til Claude:**

```
Tilføj en nyhed med følgende:
- Tag: Nyhed
- Titel: Ny screening klar i Aasiaat
- Dato: 3. juni 2026
- Excerpt: Ordblindescreening er nu tilgængelig for alle elever i Aasiaat.
- Brødtekst: [indsæt tekst]
```

```
Opdater kontaktpersonen Birthe Lyberth — ny e-mail: bily@nanoq.gl
```

```
På siden Ordblindhed — tilføj en ny faktaboks med titlen 'Nyttige links'
og indholdet: link til nvol.dk og link til intowords.com
```

```
Tilføj et nyt kursus:
- Titel: Ordblindevejleder med testkompetencer — hold 2
- Dato: 15. september 2026
- Sted: Nuuk
[osv.]
```

```
Jeg har lagt filen 'vejledning-intowords-2026.pdf' i
public/materialer/vejledninger/ — tilføj den under Ressourcer/Materialer
med titlen 'Vejledning til IntoWords (2026)'.
```

### Arbejdsgang B: Via Google Drive (fremtidig plan)

Ikke sat op endnu. Tanken er:

1. Redaktøren skriver eller retter tekst i et delt Google Drive-dokument
2. Giver Claude linket eller kopierer teksten ind i chatten
3. Claude opdaterer koden og pusher

Dette kræver ingen teknisk viden af redaktøren — de skal blot kunne bruge Google Docs. Velegnet til:
- Sider med meget indhold, der skrives og godkendes i fællesskab
- Tekster der skal korrekturlæses, inden de publiceres

Når I er klar til at sætte det op, beskriv behovet for Claude.

### Arbejdsgang C: Direkte redigering i koden (for tekniske brugere)

Kræver: Git, Node.js og en teksteditor (VS Code anbefales).

```bash
# Klon projektet første gang
git clone https://github.com/runehvistendal/naqinneq.git
cd naqinneq

# Installer afhængigheder
npm install

# Start lokal preview (åbn http://localhost:3000)
npm run dev

# Rediger filer i editoren...

# Publicer ændringer
git add .
git commit -m "Kort beskrivelse af hvad der er ændret"
git push
```

---

## 9. Deploy og publicering

Vercel overvåger GitHub-repositoriet. Hver gang kode pushes til `main`-branchen, sker følgende automatisk:

1. Vercel henter den nye kode fra GitHub
2. Vercel kører `npm run build` og bygger siden
3. Er bygget fejlfrit, skifter sila.gl til den nye version (ca. 1–2 minutter)
4. Er der en fejl, stopper deploy — den forrige version forbliver live

**Deploy-status:** [vercel.com/dashboard](https://vercel.com/dashboard)  
Her kan man se hvert deploy, om det lykkedes, og læse fejlbeskeder.

**TypeScript-validering:**  
Inden deploy tjekker Vercel automatisk, at al TypeScript er korrekt. Hvis en datafil har en stavefejl i et felt eller mangler et obligatorisk felt, vil bygget fejle. Claude tjekker altid med `npx tsc --noEmit` inden push.

---

## 10. Fejlsøgning

| Problem | Mulig årsag | Løsning |
|---------|-------------|---------|
| Siden viser gammel version | Browser-cache | Ctrl+Shift+R (hard refresh) |
| Siden viser gammel version | Deploy ikke færdigt endnu | Vent 1–2 minutter og prøv igen |
| Deploy fejlede på Vercel | TypeScript-fejl i en fil | Tjek Vercel dashboard for fejlbesked, bed Claude om at rette |
| sila.gl er nede | Vercel-nedbrud | Tjek vercel.com/status |
| KL-oplæsning virker ikke | Martha-API nede | Tjek oqaasileriffik.gl — ekstern tjeneste |
| PDF åbner ikke | Fil ikke committet til GitHub | Tjek at filen er pushed, ikke kun lagt lokalt |

---

## 11. Oversigt over hvad der sker automatisk

Når indhold tilføjes de rette steder, vises det automatisk på siden — uden at man skal redigere andre filer:

| Handling | Vises automatisk på |
|----------|---------------------|
| Ny nyhed i `lib/nyheder.ts` | `/nyheder` (liste) + individuel side |
| Nyt kursus i `lib/kurser.ts` | `/ressourcer/kurser` (liste) + individuel side |
| Ny fil i `public/materialer/` | Tilgængelig på `sila.gl/materialer/...` |
| Push til GitHub `main` | Automatisk deploy → live på sila.gl |

---

## 12. Relevante links

| Ressource | Link |
|-----------|------|
| Siden | https://sila.gl |
| GitHub | https://github.com/runehvistendal/naqinneq |
| Vercel (deploy-status) | https://vercel.com/dashboard |
| Simply (domæne) | https://www.simply.com/dk/controlpanel/ |
| Martha TTS (Oqaasileriffik) | https://oqaasileriffik.gl |
| INDHOLD.md (redaktørguide) | Projektmappen / GitHub |
