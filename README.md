# Portfolio TIA · Matteo Ferrari

**Coltivo competenze. Progetto il futuro.**

Portfolio professionale dimostrativo di uno studente di quarto anno del percorso
*Tecnico Imprenditore Agricolo* (TIA) della Fondazione Edmund Mach di San Michele
all’Adige, con focus vitivinicolo. È pensato come **esempio didattico** per le
lezioni di progettazione web e di identità professionale digitale, e come base
che ogni studente può personalizzare.

> Matteo Ferrari, l’azienda “Maso Larici” e l’azienda dello stage sono di
> fantasia. Tutti i contenuti simulati sono etichettati come tali nel sito
> (badge “Contenuto dimostrativo”, “Da completare”, “Dato istituzionale”).
> Il sito non è affiliato alla Fondazione Edmund Mach e non ne usa loghi o foto.

---

## Avvio rapido

Requisiti: **Node.js 20 o superiore** (consigliato 22).

```bash
npm install        # installa le dipendenze
npm run dev        # anteprima su http://localhost:4321 con ricarica automatica
npm run build      # genera il sito statico nella cartella dist/
npm run preview    # serve dist/ per controllare la versione finale
npm run check      # controllo dei tipi e degli errori nei file .astro
```

## Tecnologie

| Strumento | Perché |
|---|---|
| [Astro 5](https://astro.build) | Genera HTML statico: veloce, accessibile, perfetto per GitHub Pages. Quasi zero JavaScript inviato al browser. |
| TypeScript | I dati (profilo, formazione, azienda) sono tipizzati: gli errori emergono prima della pubblicazione. |
| CSS personalizzato con *design tokens* | Tutte le scelte visive sono variabili CSS in un solo file. Tailwind non è stato aggiunto: per un sito di questa scala i token CSS sono più leggibili per chi impara e non richiedono dipendenze. |
| Content Collections (Markdown) | Esperienze e documenti sono file `.md` con uno schema che ne controlla i campi. |
| `@astrojs/sitemap` | Sitemap automatica. |
| Fontsource | Font self-hosted, nessuna richiesta a servizi esterni. |

Dipendenze di produzione: `astro`, `@astrojs/sitemap`, due pacchetti di font. Nient’altro.

---

## Struttura delle cartelle

```
portfolio-tia/
├── .github/workflows/deploy.yml   # pubblicazione automatica su GitHub Pages
├── astro.config.mjs               # configurazione (site/base per GitHub Pages)
├── public/                        # file copiati così come sono
│   ├── favicon.svg
│   └── og-image.png               # anteprima per i social (1200×630)
├── scripts/og-image.cjs           # rigenera og-image.png (facoltativo)
└── src/
    ├── config/site.ts             # ★ nome, payoff, menu, avviso demo, fonti
    ├── data/                      # ★ testi strutturati delle pagine
    │   ├── profile.ts             #   Home + Chi sono
    │   ├── company.ts             #   Azienda e progetto futuro
    │   ├── education.ts           #   Istruzione e formazione
    │   ├── interests.ts           #   Interessi personali
    │   └── types.ts               #   tipi condivisi (VisualData, Provenance)
    ├── content/                   # ★ contenuti in Markdown
    │   ├── esperienze/*.md        #   una scheda per esperienza
    │   └── documenti/*.md         #   CV, lettera, tesina, attestati...
    ├── content.config.ts          # schemi delle collezioni
    ├── assets/photos/             # ★ le tue fotografie (vedi sotto)
    ├── components/                # blocchi riutilizzabili
    │   ├── Artwork.astro          #   illustrazioni SVG generative (segnaposto)
    │   ├── Visual.astro           #   slot immagine: foto se presente, altrimenti illustrazione
    │   ├── Header.astro           #   logo + menu (mobile accessibile)
    │   ├── Footer.astro
    │   ├── PageHero.astro         #   apertura editoriale delle pagine
    │   ├── SectionHead.astro      #   intestazione di sezione numerata
    │   ├── ExperienceList.astro   #   elenco esperienze a righe
    │   ├── DocumentList.astro     #   elenco documenti con stato
    │   ├── Badge.astro            #   provenienza delle informazioni
    │   └── Seo.astro              #   meta, Open Graph, JSON-LD
    ├── layouts/BaseLayout.astro   # struttura comune a tutte le pagine
    ├── pages/                     # una pagina = un file
    │   ├── index.astro            # 1 Home
    │   ├── chi-sono.astro         # 2 Chi sono
    │   ├── progetto.astro         # 3 Azienda e progetto futuro
    │   ├── formazione.astro       # 4 Istruzione e formazione
    │   ├── interessi.astro        # 5 Interessi personali
    │   ├── esperienze/            # 6 Esperienze (indice + schede)
    │   ├── documenti/             #   Archivio documenti (indice + pagine)
    │   ├── crediti.astro          #   cosa è reale e cosa no, licenze
    │   ├── 404.astro
    │   └── robots.txt.ts
    ├── styles/
    │   ├── tokens.css             # ★ design tokens (colori, font, spazi)
    │   └── global.css             # reset, tipografia, griglia, pulsanti, animazioni
    └── utils/
        ├── url.ts                 # link compatibili con GitHub Pages
        └── art.ts                 # geometrie per le illustrazioni
```

I file segnati con ★ sono quelli da modificare per creare il proprio portfolio.

---

## Design system

### Concept
*“Coltivo competenze. Progetto il futuro.”* — Il linguaggio visivo è quello
editoriale delle cantine di fascia alta e delle riviste di paesaggio: grandi
titoli serif, molto spazio bianco, griglia asimmetrica, colori della vigna in
quattro stagioni. Il corsivo bordeaux è la “firma” ricorrente: segna la parola
che dà senso al titolo (*Imparare **sul campo***).

### Colori (`src/styles/tokens.css`)

| Token | Colore | Uso | Contrasto su avorio |
|---|---|---|---|
| `--c-vite` | `#283F35` Verde vite profondo | titoli, pulsanti, fondi scuri | 9.87:1 |
| `--c-avorio` | `#F3EFE5` Avorio | sfondo principale | — |
| `--c-bordeaux` | `#713D45` Bordeaux | accenti, corsivi, link | 7.45:1 |
| `--c-salvia` | `#A8B3A0` Verde salvia | **solo su fondo verde** (5.19:1) o decorativo | 1.90:1 ✗ |
| `--c-antracite` | `#262823` Antracite | testo corrente | 12.97:1 |
| `--c-carta` | `#E9E3D5` | sezioni alternate | — |
| `--c-muted` | `#5B5F55` | testo secondario | 5.69:1 |

Le sezioni `.section--vite` e `.section--bordeaux` ridefiniscono i ruoli
semantici (`--fg`, `--heading`, `--accent`…): i componenti si adattano da soli
al fondo scuro.

### Tipografia
- **Fraunces** (variabile, assi `opsz` e `SOFT`): titoli, citazioni, numeri. Le
  terminazioni morbide ricordano le etichette dei vini.
- **Instrument Sans** (variabile): testi, etichette maiuscole spaziate, interfaccia.
- Scala fluida con `clamp()`: da `--fs-xs` (13px) a `--fs-display` (fino a 168px).
- Entrambe con licenza SIL Open Font License 1.1.

### Griglia e spazi
- 12 colonne con classi `md:span-*`, `lg:span-*`, `lg:start-*` per l’asimmetria
  (su mobile ogni blocco occupa l’intera larghezza).
- Margine laterale fluido `--gutter`: 16px su smartphone, fino a 48px.
- Respiro tra le sezioni `--section`: da 72px a 160px.

### Componenti ricorrenti
- **Numerazione editoriale** (01, 02…) e linee sottili al posto delle card.
- **Righe esperienza** con anteprima immagine al passaggio del mouse.
- **Badge di provenienza**: pieno = istituzionale, vuoto = dimostrativo, tratteggiato = da completare.
- **Pulsanti** a pillola con riempimento bordeaux che sale; **link-freccia** con sottolineatura animata.

### Movimento
- Comparsa leggera degli elementi `[data-reveal]` allo scorrimento.
- Transizioni tra pagine con la View Transitions API (solo CSS, nessuna libreria).
- Con *riduci movimento* attivo nel sistema operativo, tutte le animazioni sono disattivate.
- Senza JavaScript i contenuti restano tutti visibili.

---

## Personalizzare il portfolio

1. **Dati generali** — `src/config/site.ts`: nome, monogramma, payoff, e-mail.
   Quando i contenuti saranno reali imposta `demo: false` per togliere la striscia di avviso.
2. **Testi** — modifica i file in `src/data/`. Scrivi in prima persona, con fatti
   concreti (dove, quando, che cosa, che cosa hai imparato).
3. **Esperienze** — duplica un file in `src/content/esperienze/` e cambia i campi:

   ```yaml
   ---
   title: Vendemmia 2026
   category: Vendemmia            # Stage aziendale | Attività in vigneto | Potatura | Vendemmia | Monitoraggio | Modulo formativo | Elaborato
   start: 2026-09-10
   end: 2026-10-02                # facoltativo
   place: Azienda agricola di famiglia, Val di Cembra
   hours: 80                      # facoltativo: solo se sei sicuro
   summary: Una o due frasi (max 240 caratteri).
   skills: [Vendemmia manuale, Lavoro in squadra]
   featured: true                 # mostrala in Home
   demo: false                    # false = esperienza reale, nessun badge "dimostrativo"
   visuals:
     - scene: grappolo            # illustrazione di riserva
       photo: vendemmia-2026      # nome della tua foto in src/assets/photos/
       alt: Cassette di Müller Thurgau appena raccolte lungo il filare.
       caption: Primo giorno di raccolta
   documents: [relazioni-moduli]  # id dei file in src/content/documenti/
   ---
   Testo della scheda in Markdown...
   ```
4. **Azienda** — in `src/data/company.ts` scegli `mode`:
   `'famiglia'`, `'riferimento'` (azienda dello stage) oppure `'progetto'`
   (nessuna azienda: la pagina mostra solo il progetto).
5. **Documenti** — ogni file in `src/content/documenti/` ha uno `status`:
   - `demo`: documento dimostrativo, mostrato come pagina stampabile;
   - `da-caricare`: stato vuoto con istruzioni (nessun link a file inesistenti);
   - `pubblicato`: documento reale. Copia il PDF in `public/documenti/` e
     indica `file: documenti/nome-file.pdf`.

   **Non inserire attestati, voti o certificazioni che non possiedi.**

### Inserire le fotografie
Tutte le immagini attuali sono **illustrazioni originali** generate dal codice
(`Artwork.astro`), etichettate “Illustrazione · spazio foto”. Per sostituirle:

1. copia la foto in `src/assets/photos/` (JPG, PNG, WebP o AVIF, lato lungo almeno 1800px);
2. il nome del file, senza estensione, deve coincidere con il campo `photo`
   (es. `hero.jpg` → `photo: 'hero'`, già impostato in `profile.ts`);
3. **aggiorna l’`alt`**: descrivi la foto vera, non l’illustrazione;
4. se la foto non è tua, aggiungi `credit: { author, license, href }`.

Astro crea automaticamente versioni AVIF e WebP in quattro larghezze, con
caricamento differito (*lazy*) tranne che per le immagini in apertura.

**Dove trovare foto con licenza compatibile**: le tue (la scelta migliore),
[Wikimedia Commons](https://commons.wikimedia.org) (verifica licenza e
attribuzione richiesta, spesso CC BY-SA), [Unsplash](https://unsplash.com/license).
**Non usare foto o loghi della Fondazione Edmund Mach** senza averne verificato
le condizioni d’uso con la scuola. Per i ritratti di altre persone serve il loro consenso.

> Nota sullo sviluppo: le fotografie non sono state incluse perché, durante la
> realizzazione, l’ambiente di sviluppo non poteva accedere ai siti di immagini.
> Il sistema di slot è stato verificato con un’immagine di prova.

---

## Pubblicare su GitHub Pages

1. Crea un repository su GitHub (es. `portfolio-tia`) e carica il progetto:
   ```bash
   git init
   git add .
   git commit -m "Primo portfolio"
   git branch -M main
   git remote add origin https://github.com/NOMEUTENTE/portfolio-tia.git
   git push -u origin main
   ```
2. Su GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Il workflow `.github/workflows/deploy.yml` parte a ogni push su `main`
   (o manualmente da **Actions → Deploy su GitHub Pages → Run workflow**).
4. Dopo un paio di minuti il sito è online su
   `https://NOMEUTENTE.github.io/portfolio-tia/`.

### Come funzionano i percorsi
GitHub Pages pubblica i progetti in una sottocartella (`/portfolio-tia/`). Il
workflow calcola da solo `SITE` e `BASE` dal nome del repository; se il
repository si chiama `NOMEUTENTE.github.io`, la base è `/`.
Per questo **tutti i link interni usano la funzione `url()`** di
`src/utils/url.ts`:

```astro
<a href={url('chi-sono/')}>Chi sono</a>   <!-- non scrivere href="/chi-sono/" -->
```

Per provare in locale la versione “in sottocartella”:
```bash
SITE=https://nomeutente.github.io BASE=/portfolio-tia npm run build
```

---

## Accessibilità, SEO e prestazioni

Implementato:
- HTML semantico, un solo `h1` per pagina, landmark (`header`, `nav`, `main`, `aside`, `footer`).
- Link “Vai al contenuto”, focus sempre visibile, navigazione completa da tastiera.
- Menu mobile: `aria-expanded`, chiusura con `Esc`, focus gestito, contenuto sottostante `inert`.
- Aree di tocco di almeno 44px; contrasti verificati (tabella sopra).
- Testi alternativi obbligatori (lo schema dei contenuti segnala quelli troppo brevi).
- `prefers-reduced-motion` rispettato; sito utilizzabile senza JavaScript.
- Metadati, URL canonico, Open Graph, dati strutturati `Person`, sitemap, `robots.txt`.
- Font self-hosted con preload, immagini responsive, CSS per pagina, nessun tracciamento.
- Stili di stampa: i documenti si salvano in PDF dal browser.

Controlli eseguiti durante lo sviluppo:
- `astro check`: 0 errori, 0 avvisi.
- Build: 24 pagine generate; link interni verificati (589 riferimenti, 0 rotti),
  sia con base `/` sia con base `/portfolio-tia/`.
- Audit automatico **axe-core** (WCAG 2.0/2.1/2.2 A e AA + best practice) su 14
  pagine a 1440px e 390px: nessuna violazione. Un audit automatico non
  sostituisce la prova con un lettore di schermo reale.
- Nessuno scorrimento orizzontale a 390px; menu, filtro esperienze, *reduced motion*
  e modalità senza JavaScript provati con Playwright.

---

## Fonti istituzionali

La descrizione del percorso TIA (pagina *Formazione*) sintetizza le pagine della
Fondazione Edmund Mach:
- [CIF – Istruzione e formazione professionale](https://cif.fmach.it/La-Scuola/Percorsi-formativi/Istruzione-e-formazione-professionale)
- [FEM – Secondo biennio TIA](https://www.fmach.it/CIF/Didattica/Istruzione-e-formazione-professionale/Secondo-biennio-TIA)
- [FEM – Iscrizioni aperte all’istruzione tecnica e professionale](https://cif.fmach.it/Il-Centro/Comunicazione/Comunicati-stampa/FEM-iscrizioni-aperte-all-istruzione-tecnica-e-professionale)

**Da verificare prima della pubblicazione** (il sito `cif.fmach.it` non era
raggiungibile dall’ambiente di sviluppo; le informazioni vengono da pagine
ufficiali indicizzate dai motori di ricerca, consultate il 26/10/2026):
- il nome esatto delle **opzioni** del secondo biennio TIA: le fonti citano
  lavorazioni zootecniche, produzioni vegetali, ortoflorovivaismo e verde, ma non
  un’opzione denominata “vitivinicola”. Nel sito il focus vitivinicolo è
  presentato come interesse personale da ricondurre all’opzione reale;
- quadri orari, durata dei tirocini, condizioni per il quinto anno.

Nota: il cognome “Ferrari” coincide con quello di una nota cantina trentina.
Il portfolio non ha alcun legame con essa; se lo si usa in classe può essere
utile cambiare il nome del personaggio in `src/config/site.ts` e `src/data/profile.ts`.

---

## Licenze
- Codice e testi dimostrativi: liberamente riutilizzabili a scopo didattico.
- Font: Fraunces e Instrument Sans — SIL Open Font License 1.1.
- Illustrazioni: generate dal codice del progetto, nessun vincolo.
