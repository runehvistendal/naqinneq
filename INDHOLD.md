# Vejledning: Sådan opdaterer du indhold på sila.gl

Alt indhold redigeres ved at skrive til Claude i Claude Code og beskrive hvad du vil ændre.
Claude laver ændringen, pusher til GitHub, og siden er live på sila.gl inden for 1-2 minutter.

---

## Tilføj en nyhed

Sig til Claude:
> "Tilføj en nyhed med følgende oplysninger:
> - Tag: Nyhed / Ressource / Kursus / Arrangement
> - Titel: ...
> - Dato: fx 15. juni 2026
> - Kort beskrivelse (excerpt): ...
> - Brødtekst: ..."

Filen der redigeres: `lib/nyheder.ts`

---

## Tilføj et kursus

Sig til Claude:
> "Tilføj et kursus med følgende oplysninger:
> - Titel: ...
> - Dato: ...
> - Sted: ...
> - Varighed: ...
> - Tilmeldingsfrist: ...
> - Målgruppe: ...
> - Maks. deltagere: ...
> - Kort beskrivelse: ...
> - Længere beskrivelse: ...
> - Program (tidspunkt + punkt): ..."

Filen der redigeres: `lib/kurser.ts`

---

## Upload en fil (PDF, billede, video)

1. Læg filen i mappen:
   `C:\Users\rune\OneDrive\Dokumenter\Claude\Naqinneq\naqinneq\public\`

   Eksempler på mappestruktur:
   ```
   public/
     materialer/
       vejledninger/    ← PDF-vejledninger
       rapporter/       ← PDF-rapporter
     billeder/
       kontaktpersoner/ ← Portrætfotos
     videoer/           ← MP4-videoer
   ```

2. Sig til Claude:
   > "Jeg har lagt filen `vejledning-intowords.pdf` i `public/materialer/vejledninger/` — tilføj den under Ressourcer/Materialer med titel '...' og beskrivelse '...'"

Filen er så tilgængelig på: `sila.gl/materialer/vejledninger/vejledning-intowords.pdf`

---

## Opdater kontaktoplysninger

Sig til Claude:
> "Opdater kontaktpersonen Aviâja Olsen — ny telefon: +299 xx xx xx"

eller:

> "Tilføj en ny kontaktperson: Navn, titel, telefon, e-mail"

Filen der redigeres: `app/[locale]/videnscenteret/kontakt/page.tsx`

---

## Ret tekst på en side

Sig til Claude:
> "På siden Skriftsprogsvanskeligheder (/vidensomraader/skriftsprogsvanskeligheder) — ret første afsnit til: ..."

eller:

> "Tilføj en ny faktaboks på siden Ordblindhed med overskriften '...' og indholdet '...'"

---

## Ret navigationen (menupunkter)

Sig til Claude:
> "Tilføj et nyt menupunkt under Ressourcer med titlen '...' og URL '...'"

Filen der redigeres: `lib/nav.ts`

---

## Hvad sker der automatisk?

Når du tilføjer indhold til de ovenstående filer, dukker det automatisk op:

| Indhold | Dukker op på |
|---------|-------------|
| Ny nyhed | /nyheder + forsiden (seneste nyheder) |
| Nyt kursus | /ressourcer/kurser + forsiden (kommende kurser) |
| Nyt materiale | /ressourcer/materialer |
| Ny kontaktperson | /videnscenteret/kontakt |

---

## Projektets placering

```
C:\Users\rune\OneDrive\Dokumenter\Claude\Naqinneq\naqinneq\
```

## Nyttige links

- **Siden:** https://sila.gl
- **Vercel (deploy-status):** https://vercel.com/dashboard
- **GitHub (kode):** https://github.com/runehvistendal/naqinneq
