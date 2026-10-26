/**
 * AZIENDA E PROGETTO FUTURO
 *
 * `mode` decide come si presenta la pagina:
 *  - 'famiglia'    → azienda agricola di famiglia (questo esempio)
 *  - 'riferimento' → un'azienda in cui hai svolto lo stage o che conosci bene
 *  - 'progetto'    → nessuna azienda: la pagina parte direttamente dal progetto
 * Con 'progetto' le sezioni dell'azienda vengono nascoste automaticamente.
 *
 * TUTTI I DATI SONO DIMOSTRATIVI: azienda, superfici e numeri sono inventati.
 */
import type { VisualData } from './types';

export type CompanyMode = 'famiglia' | 'riferimento' | 'progetto';

export const company = {
  mode: 'famiglia' as CompanyMode,

  name: 'Maso Larici',
  nameNote: 'nome di fantasia',
  kicker: 'Azienda vitivinicola familiare · caso didattico',
  claim: 'Tre generazioni, quattro ettari, ottocento metri di muretti a secco.',

  hero: {
    scene: 'terrazze',
    seed: 3,
    photo: 'azienda-terrazze',
    alt: 'Illustrazione di terrazzamenti vitati sostenuti da muretti a secco, con filari che seguono le curve di livello.',
  } satisfies VisualData,

  /** Dati sintetici in evidenza */
  facts: [
    { value: '3,8', unit: 'ha', label: 'superficie vitata' },
    { value: '520–690', unit: 'm', label: 'altitudine s.l.m.' },
    { value: '3', unit: '', label: 'varietà coltivate' },
    { value: '1962', unit: '', label: 'primo impianto del nonno' },
  ],

  territory: {
    title: 'Il territorio',
    text: [
      'La Val di Cembra è la valle del torrente Avisio, a nord-est di Trento. I vigneti salgono lungo i versanti su terrazzamenti sostenuti da muretti a secco, spesso in porfido, la pietra che caratterizza la valle.',
      'Le pendenze rendono quasi impossibile la meccanizzazione: molte operazioni si fanno a mano. In compenso le forti escursioni termiche tra giorno e notte favoriscono l’aromaticità delle uve bianche.',
    ],
    note: 'Descrizione generale del territorio. Per un lavoro scolastico, verifica i dati su fonti ufficiali (es. carte dei suoli e disciplinari di produzione).',
  },

  profile: {
    title: 'L’azienda',
    rows: [
      { term: 'Conduzione', text: 'Familiare: mio padre a tempo pieno, mio nonno per le operazioni manuali, aiuto stagionale in vendemmia.' },
      { term: 'Superficie', text: '3,8 ettari vitati in 11 appezzamenti terrazzati; 2,9 ha a pergola trentina, 0,9 ha a Guyot.' },
      { term: 'Varietà', text: 'Müller Thurgau, Chardonnay, Pinot nero.' },
      { term: 'Destinazione', text: 'Le uve sono conferite a una cantina cooperativa della valle, come avviene per molte piccole aziende trentine.' },
      { term: 'Mezzi', text: 'Trattore cingolato stretto, atomizzatore, monorotaia per il trasporto delle cassette sui terrazzamenti più ripidi.' },
    ],
  },

  approach: {
    title: 'Approccio produttivo',
    items: [
      { title: 'Difesa integrata', text: 'Interventi guidati dal monitoraggio e dai bollettini tecnici, con registrazione di ogni trattamento nel quaderno di campagna.' },
      { title: 'Suolo vivo', text: 'Inerbimento permanente nell’interfila e sfalci alternati per limitare l’erosione sui terrazzamenti.' },
      { title: 'Muretti come infrastruttura', text: 'Ogni inverno si ripara un tratto di muretto a secco: è manutenzione ordinaria, non un’eccezione.' },
      { title: 'Acqua di soccorso', text: 'Impianto a goccia solo sulle parcelle più esposte, usato nelle estati siccitose.' },
    ],
  },

  philosophy: {
    quote: 'Una terrazza abbandonata non torna indietro da sola. Ogni anno che passa, il bosco si riprende un metro.',
    author: 'Mio nonno, durante la potatura',
  },

  gallery: [
    { scene: 'terrazze', seed: 8, photo: 'galleria-1', alt: 'Illustrazione di terrazzamenti vitati in autunno.', caption: 'Terrazzamenti sul versante esposto a sud' },
    { scene: 'filari', seed: 2, photo: 'galleria-2', alt: 'Illustrazione di filari in prospettiva verso le montagne.', caption: 'La parcella a Guyot, impianto 2014' },
    { scene: 'grappolo', seed: 5, photo: 'galleria-3', alt: 'Illustrazione di un grappolo di uva a bacca rossa con foglia di vite.', caption: 'Pinot nero a fine invaiatura' },
    { scene: 'potatura', seed: 1, photo: 'galleria-4', alt: 'Tavola illustrata della potatura a Guyot con capo a frutto, sperone e taglio di ritorno.', caption: 'Schema di potatura usato in azienda' },
    { scene: 'valle', seed: 11, photo: 'galleria-5', alt: 'Illustrazione della valle con un campanile tra le colline vitate.', caption: 'Vista verso il fondovalle' },
  ] satisfies VisualData[],
};

/** IL PROGETTO FUTURO — "Terrazze vive" */
export const project = {
  name: 'Terrazze vive',
  kicker: 'Progetto imprenditoriale · in fase di studio',
  summary:
    'Recuperare 0,7 ettari di terrazzamenti abbandonati confinanti con l’azienda, impiantarli con varietà resistenti alle malattie fungine e costruire attorno al vigneto una piccola linea di prodotto e di accoglienza.',
  visual: {
    scene: 'terrazze',
    seed: 12,
    photo: 'progetto',
    alt: 'Illustrazione di terrazzamenti in parte recuperati e in parte invasi dal bosco.',
  } satisfies VisualData,

  /** Perché: il problema da cui nasce il progetto */
  why: [
    'Il bosco avanza sui terrazzamenti non più coltivati e con lui aumentano il rischio di dissesto e la perdita di paesaggio.',
    'Sulla vite di montagna i trattamenti contro peronospora e oidio sono la voce di lavoro più pesante in estate.',
    'Conferire tutta l’uva lascia poco margine per raccontare il lavoro fatto in vigneto.',
  ],

  objectives: [
    { title: 'Recuperare', text: 'Ripristinare muretti e drenaggi su 0,7 ha, in accordo con i proprietari dei fondi.' },
    { title: 'Ridurre', text: 'Impiantare varietà resistenti (PIWI) per ridurre il numero di trattamenti rispetto alle varietà tradizionali.' },
    { title: 'Misurare', text: 'Installare una stazione meteo e sensori di bagnatura fogliare per decidere gli interventi sui dati.' },
    { title: 'Raccontare', text: 'Avviare una piccola produzione a marchio aziendale e visite guidate “dal muretto al bicchiere”.' },
  ],

  sustainability: [
    { area: 'Ambientale', text: 'Meno trattamenti, suolo inerbito, muretti come habitat per insetti utili e rettili.' },
    { area: 'Economica', text: 'Un prodotto con identità propria affiancato al conferimento, per diversificare il reddito.' },
    { area: 'Sociale', text: 'Presidio del territorio e collaborazione con altri giovani della valle per la manutenzione dei muretti.' },
  ],

  innovation: [
    { title: 'Sensori in campo', text: 'Stazione meteo e sensori di bagnatura collegati a un modello previsionale per la peronospora.' },
    { title: 'Mappe GIS', text: 'Rilievo degli appezzamenti in QGIS: superfici, pendenze, stato dei muretti.' },
    { title: 'Quaderno digitale', text: 'Registrazione delle operazioni su app, per avere dati confrontabili negli anni.' },
  ],

  /** Cronoprogramma ipotetico */
  timeline: [
    { year: '2026/27', title: 'Studio', text: 'Analisi del territorio e dei costi; il progetto diventa la mia tesina.' },
    { year: '2028', title: 'Accordi e finanziamenti', text: 'Accordi con i proprietari, verifica dei contributi per i giovani agricoltori, progetto di impianto.' },
    { year: '2029', title: 'Recupero e impianto', text: 'Ripristino dei muretti, preparazione del suolo, messa a dimora delle barbatelle.' },
    { year: '2031', title: 'Prima vendemmia', text: 'Prima raccolta significativa; microvinificazione presso una cantina conto terzi.' },
    { year: '2032', title: 'Prima etichetta', text: 'Lancio di una piccola produzione e delle prime visite guidate.' },
  ],

  developments: [
    'Rete con altri giovani viticoltori della valle per acquisti e manutenzioni condivise.',
    'Percorsi di enoturismo lento collegati ai sentieri escursionistici.',
    'Collaborazione con la cooperativa per una selezione da vigneti terrazzati.',
  ],

  /** Avvertenza: ciò che serve ancora verificare */
  caveat:
    'Superfici, tempi e obiettivi sono ipotesi di lavoro. Prima di qualsiasi decisione andranno verificati con tecnici, cantina e uffici competenti: norme sugli impianti viticoli, autorizzazioni, scelta delle varietà ammesse e reali condizioni dei bandi.',
};
