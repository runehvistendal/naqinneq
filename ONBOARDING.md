# Onboarding: Sådan arbejder du med Naqinneq.gl

Denne guide er til dig, der skal lære at redigere og vedligeholde hjemmesiden **naqinneq.gl** via Claude Code. Du behøver ikke have teknisk baggrund — men du skal følge trinene nøje første gang.

---

## Del 1: Hvad er hvad?

| Komponent | Hvad det er | Hvad du gør der |
|-----------|-------------|-----------------|
| **Claude Code** | Et program på din computer, hvor du skriver til Claude og beder ham lave ændringer | Her starter alt arbejde |
| **GitHub** | Et online lager, der gemmer al koden til hjemmesiden | Claude pusher automatisk ændringer hertil |
| **Vercel** | En server, der bygger og viser hjemmesiden | Opdaterer automatisk, når GitHub modtager ny kode |
| **sila.gl / naqinneq.gl** | Selve hjemmesiden | Her ser du resultatet |

Flowet er altid:
```
Du skriver til Claude → Claude ændrer koden → Claude pusher til GitHub → Vercel deployer → sila.gl opdateres
```

---

## Del 2: Forudsætninger

Inden du kan begynde, skal følgende være på plads:

### 2.1 Adgang til projektet
- Du skal have adgang til GitHub-repositoriet: **github.com/runehvistendal/naqinneq**
- Bed Rune om at tilføje dig som collaborator, hvis du ikke allerede har adgang.

### 2.2 Git installeret
Git er et program, der håndterer versionsstyring. Tjek om du har det:

1. Åbn **Terminal** (Mac) eller **PowerShell** (Windows)
2. Skriv: `git --version`
3. Hvis du får en versionsnummer tilbage (f.eks. `git version 2.39.0`), er du god.
4. Hvis ikke: download fra [git-scm.com](https://git-scm.com) og installér.

### 2.3 Node.js installeret
Node.js er nødvendigt for at køre projektet lokalt. Tjek om du har det:

1. Skriv i terminalen: `node --version`
2. Du skal have version 18 eller nyere (f.eks. `v20.11.0`).
3. Hvis ikke: download fra [nodejs.org](https://nodejs.org) og vælg LTS-versionen.

### 2.4 Claude Code installeret
Claude Code er det program, du bruger til at arbejde med hjemmesiden.

1. Gå til [claude.ai/code](https://claude.ai/code)
2. Download og installér desktop-appen til dit operativsystem
3. Log ind med din Anthropic-konto (eller opret én)

---

## Del 3: Hent projektet til din computer

Dette gøres én gang.

1. Åbn **Terminal** (Mac) eller **PowerShell** (Windows)
2. Naviger til den mappe, du vil gemme projektet i, f.eks.:
   ```
   cd Documents
   ```
3. Hent projektet fra GitHub:
   ```
   git clone https://github.com/runehvistendal/naqinneq.git
   ```
4. Gå ind i mappen:
   ```
   cd naqinneq
   ```
5. Installér projektets afhængigheder (gøres kun første gang):
   ```
   npm install
   ```

Du har nu en lokal kopi af hjemmesiden på din computer.

---

## Del 4: Åbn projektet i Claude Code

1. Åbn **Claude Code** (desktop-appen)
2. Klik på **"Open folder"** eller **"Åbn mappe"**
3. Find og vælg mappen `naqinneq` (den du netop hentede)
4. Claude Code åbner nu en samtale med adgang til hele projektet

Du er nu klar til at arbejde.

---

## Del 5: Forstå projektets filer

Inden du begynder at bede Claude om ændringer, er det godt at kende disse dokumenter:

| Fil | Hvad den indeholder |
|-----|---------------------|
| **TEKNISK.md** | Fuld teknisk beskrivelse af, hvordan siden er sat op |
| **INDHOLD.md** | Guide til at redigere indhold (tekster, nyheder, kurser) |
| **ONBOARDING.md** | Denne fil — kom godt i gang |

Læs mindst **INDHOLD.md** igennem, inden du begynder — den fortæller præcis hvilke filer du skal bede Claude om at redigere.

---

## Del 6: Det daglige arbejde

### Sådan laver du en ændring

Al kommunikation foregår i chat-feltet i Claude Code. Beskriv hvad du vil, og Claude gør det.

**Eksempler på gode instruktioner:**

> "Tilføj en ny nyhed med titlen 'Nyt kursus i Nuuk' med dato 15. juni 2026. Teksten er: [indsæt tekst]"

> "Ret stavefejlen 'sprogforstålse' til 'sprogforståelse' på siden om sprogforståelse"

> "Tilføj et nyt kursus: Titel: Basiskursus om ordblindhed. Dato: September 2026. Sted: Online. Beskrivelse: [tekst]"

> "Skift kontaktpersonen Nivi Fleischer ud med Sara Nielsen, telefon +299 34 50 19, sara@nanoq.gl"

### Hvad sker der bagefter?

Når Claude har lavet ændringen, pusher han automatisk til GitHub med en kort beskrivelse af hvad der er ændret. Herefter:

1. **Vercel modtager ændringen** — bygger siden (ca. 1-2 minutter)
2. **Gå til sila.gl** — tryk **Ctrl+Shift+R** (Windows) eller **Cmd+Shift+R** (Mac) for at force-opdatere
3. **Se resultatet** — ændringen er nu live

---

## Del 7: Gode vaner

### Vær specifik i dine instruktioner
Jo mere præcist du beskriver hvad du vil, jo bedre resultat. Undgå:
> "Ret teksten på siden om ordblindhed"

Skriv i stedet:
> "På siden /vidensomraader/ordblindhed skal tredje afsnit starte med 'Ordblindhed er...' i stedet for 'Dysleksi er...'"

### Tjek altid resultatet
Gå altid til sila.gl og verificér at ændringen ser rigtig ud — både på dansk og kalaallisut, hvis det er relevant.

### Spørg Claude om hjælp
Hvis du er i tvivl om noget, kan du bare spørge Claude direkte i chatten:
> "Hvilken fil skal jeg redigere for at ændre menupunkterne?"
> "Hvordan tilføjer jeg et nyt billede til siden?"
> "Hvad betyder fejlen jeg ser?"

### Hold dig til indhold
Som udgangspunkt skal du kun redigere indhold (tekster, nyheder, kurser, kontaktinfo). Undgå at bede Claude om at ændre selve designet eller kode-strukturen, medmindre du er sikker på hvad du gør — og har aftalt det med den teknisk ansvarlige.

---

## Del 8: Hvis noget går galt

### Siden virker ikke efter en ændring
1. Tjek **Vercel dashboard** — er der en fejl i byggeprocessen?
2. Spørg Claude: "Der ser ud til at være en fejl. Kan du tjekke om koden er korrekt?"
3. Claude kan rulle ændringen tilbage: "Fortryd den seneste ændring"

### Du er i tvivl om en ændring
Spørg altid Claude inden du pusher til en live side. Skriv f.eks.:
> "Vis mig hvad ændringen vil se ud, inden vi pusher til GitHub"

### Du har brug for hjælp
Kontakt Rune Hvistendahl (rune.runesen@gmail.com) for teknisk support.

---

## Del 9: Oversigt over sidestruktur

Siderne er organiseret efter URL:

```
/                          → Forside
/vidensomraader/           → Vidensområder (ordblindhed, skriftsprog, sprogforståelse)
/tests/                    → Tests og screening
/ressourcer/               → Ressourcer (kurser, videoer, vejledninger osv.)
/maalgrupper/              → Målgrupper (folkeskole, unge og voksne)
/videnscenteret/           → Om videnscenteret, nyheder, kontakt
/nyheder/                  → Nyhedsarkiv
```

Alle sider findes i to sprogversioner — dansk (`/`) og kalaallisut (`/kl/`).

---

## Del 10: Tjekliste — første gang

- [ ] Git installeret og fungerer (`git --version`)
- [ ] Node.js installeret (`node --version`)
- [ ] Claude Code installeret og logget ind
- [ ] GitHub-adgang til runehvistendal/naqinneq
- [ ] Projekt hentet med `git clone`
- [ ] `npm install` kørt
- [ ] Projekt åbnet i Claude Code
- [ ] INDHOLD.md læst igennem
- [ ] Lavet en lille testændring og verificeret den på sila.gl

Når alle punkter er krydset af, er du klar til at arbejde selvstændigt.
