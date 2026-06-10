# Sådan holder jeg mine to computere i sync

Projektet bor på GitHub: `git@github.com:runehvistendal/naqinneq.git`
Det er den fælles "midte" — begge computere henter fra og sender til GitHub.

## Den daglige rutine

Inde i projektmappen, i **Terminal-appen**:

```bash
cd ~/Downloads/naqinneq-main   # ind i projektet (tilpas stien på den stationære)
gitsync                        # henter ned, gemmer og sender op — alt på én gang
```

Vil du give ændringen din egen besked:

```bash
gitsync "rettede forsiden"
```

`gitsync` gør automatisk tre ting i rækkefølge:
1. ⬇️ Gemmer dine ændringer (commit)
2. 🔄 Henter nyeste fra GitHub
3. ⬆️ Sender op

## Den gyldne regel

- **`gitsync` når du sætter dig ned** (så du har det nyeste)
- **`gitsync` når du er færdig** (så den anden computer kan hente det)

## Vigtigt at vide

- Synk er **ikke automatisk** som Dropbox/iCloud — du skal selv køre `gitsync`.
- Rediger helst **ikke den samme fil på begge computere samtidig** uden at synke imellem — så opstår en konflikt, der skal løses manuelt.
- Hvis `gitsync` melder en **konflikt**: intet er tabt. Spørg Claude, eller løs den manuelt.

## Opsætning på en NY computer (fx den stationære)

Gøres én gang. Spørg evt. Claude om hjælp:

1. Lav en SSH-nøgle og læg den på GitHub (`github.com/settings/keys`)
2. Hent projektet: `git clone git@github.com:runehvistendal/naqinneq.git`
3. Sæt din identitet:
   ```bash
   git config --global user.name "Rune Hvistendal"
   git config --global user.email "rune.runesen@gmail.com"
   ```
4. Læg `gitsync`-funktionen i `~/.zshrc` (kopiér fra MacBook'en)
