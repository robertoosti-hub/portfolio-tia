/**
 * ISTRUZIONE E FORMAZIONE
 *
 * Ogni voce ha una "provenance":
 *  - 'istituzionale' → informazione sul percorso, verificata su fonti FEM (vedi `source`)
 *  - 'dimostrativo'  → contenuto simulato per il personaggio fittizio
 *  - 'da-completare' → spazio da riempire con dati personali reali
 *
 * Verifica delle fonti: 26/10/2026. Il sito cif.fmach.it può cambiare:
 * ricontrolla sempre prima di pubblicare.
 */
import type { Provenance } from './types';
import { sources } from '@/config/site';

/** Sintesi del percorso, da fonti istituzionali */
export const pathway = {
  title: 'Il percorso TIA alla Fondazione Edmund Mach',
  facts: [
    {
      term: 'Ente',
      text: 'Centro Istruzione e Formazione (CIF) della Fondazione Edmund Mach, San Michele all’Adige (TN).',
    },
    {
      term: 'Canale',
      text: 'Istruzione e formazione professionale (IeFP) della Provincia autonoma di Trento.',
    },
    {
      term: 'Struttura',
      text: 'Primo biennio comune; secondo biennio TIA (terzo e quarto anno). Al terzo anno si consegue la qualifica di Operatore agricolo, al quarto il diploma professionale di Tecnico imprenditore agricolo.',
    },
    {
      term: 'Opzioni',
      text: 'Il secondo biennio prevede opzioni di indirizzo (le fonti consultate citano, tra le altre, lavorazioni zootecniche, produzioni vegetali, ortoflorovivaismo e verde). Il focus vitivinicolo di Matteo va ricondotto all’opzione effettivamente frequentata.',
    },
    {
      term: 'Brevetto',
      text: 'Il diploma TIA consente di ottenere il Brevetto professionale di imprenditore agricolo, requisito per accedere al premio di primo insediamento.',
    },
    {
      term: 'Dopo il diploma',
      text: 'È possibile proseguire con un quinto anno per sostenere l’esame di Stato; il percorso prevede anche la modalità duale con apprendistato.',
    },
  ],
  sources: [sources.iefp, sources.tia, sources.iscrizioni],
  verifiedOn: '26 ottobre 2026',
  verificationNote:
    'Il sito cif.fmach.it non era raggiungibile dall’ambiente di sviluppo: le informazioni sono state ricavate dalle pagine ufficiali FEM indicizzate dai motori di ricerca. Prima della pubblicazione aprile direttamente e verifica nomi delle opzioni, quadri orari e durata dei tirocini.',
};

export interface TimelineItem {
  period: string;
  title: string;
  text: string;
  status: 'concluso' | 'in corso' | 'futuro';
  provenance: Provenance;
}

export const timeline: TimelineItem[] = [
  {
    period: '2023 – 2025',
    title: 'Primo biennio',
    text: 'Basi comuni del settore agricolo: cultura generale, scienze, prime esercitazioni pratiche in azienda e laboratorio.',
    status: 'concluso',
    provenance: 'dimostrativo',
  },
  {
    period: '2025 – 2026',
    title: 'Terzo anno · Operatore agricolo',
    text: 'Primo anno del secondo biennio TIA. Il percorso si chiude con l’esame di qualifica professionale. Esito: da inserire con il documento ufficiale.',
    status: 'concluso',
    provenance: 'da-completare',
  },
  {
    period: '2026 – 2027',
    title: 'Quarto anno · Tecnico imprenditore agricolo',
    text: 'Anno in corso. Approfondimento tecnico-gestionale, tirocinio in azienda, tesina e prova finale per il diploma professionale.',
    status: 'in corso',
    provenance: 'dimostrativo',
  },
  {
    period: 'Dal 2027',
    title: 'Quinto anno o ingresso nel lavoro',
    text: 'Opzione da valutare: quinto anno per l’esame di Stato oppure inserimento in azienda.',
    status: 'futuro',
    provenance: 'dimostrativo',
  },
];

/** Conoscenze tecnico-professionali (sintesi dimostrativa) */
export const knowledge = [
  {
    area: 'Viticoltura',
    items: ['Fisiologia e fenologia della vite', 'Forme di allevamento: pergola trentina e Guyot', 'Potatura secca e interventi in verde', 'Maturazione e scelta dell’epoca di vendemmia'],
  },
  {
    area: 'Agronomia e suolo',
    items: ['Lettura di un’analisi del suolo', 'Gestione dell’inerbimento', 'Concimazione e bilancio dei nutrienti', 'Erosione e sistemazioni idraulico-agrarie'],
  },
  {
    area: 'Difesa delle colture',
    items: ['Principali avversità della vite', 'Difesa integrata e soglie di intervento', 'Uso sicuro dei prodotti fitosanitari', 'Registrazione dei trattamenti'],
  },
  {
    area: 'Meccanizzazione e sicurezza',
    items: ['Trattrici e macchine operatrici', 'Regolazione dell’atomizzatore', 'Dispositivi di protezione individuale', 'Valutazione dei rischi in campo'],
  },
  {
    area: 'Economia e gestione',
    items: ['Costi di produzione e conto colturale', 'Forme di impresa agricola', 'Filiera vitivinicola e cooperazione', 'Elementi di marketing territoriale'],
  },
];

/** Attività laboratoriali (esempi dimostrativi) */
export const labs = [
  { title: 'Analisi del suolo', text: 'Campionamento in vigneto, determinazione di tessitura e pH, lettura dei risultati di laboratorio.' },
  { title: 'Riconoscimento delle avversità', text: 'Osservazione di campioni di foglie e grappoli, uso della lente e di schede diagnostiche.' },
  { title: 'Controllo della maturazione', text: 'Prelievo di acini, misura degli zuccheri con rifrattometro, curve di maturazione.' },
  { title: 'Taratura dell’atomizzatore', text: 'Verifica della distribuzione e calcolo dei volumi per ridurre la deriva.' },
];

/** Competenze digitali — livelli in AUTOVALUTAZIONE (scala 1–4) */
export const digitalSkills = [
  { name: 'Fogli di calcolo', level: 3, note: 'Conto colturale, grafici di maturazione' },
  { name: 'QGIS (base)', level: 2, note: 'Mappatura degli appezzamenti' },
  { name: 'Piattaforme meteo e modelli previsionali', level: 2, note: 'Lettura di dati e avvisi' },
  { name: 'Quaderno di campagna digitale', level: 3, note: 'Registrazione delle operazioni' },
  { name: 'Fotografia ed editing', level: 3, note: 'Documentazione di campo, Lightroom' },
  { name: 'Presentazioni e impaginazione', level: 3, note: 'Tesina, materiali per lo stage' },
];
export const digitalScale = ['', 'Base', 'Intermedio', 'Autonomo', 'Avanzato'];

/**
 * Attestati e certificazioni.
 * NON inventare attestati: lascia lo stato 'da-caricare' finché non
 * possiedi il documento. Le voci qui sotto sono solo segnaposto.
 */
export const certificates = [
  { title: 'Formazione sulla sicurezza nei luoghi di lavoro', status: 'da-caricare', hint: 'Inserisci ente, durata e data del corso effettivamente svolto.' },
  { title: 'Qualifica professionale di Operatore agricolo', status: 'da-caricare', hint: 'Disponibile dopo l’esame di qualifica del terzo anno.' },
  { title: 'Certificazioni linguistiche', status: 'da-caricare', hint: 'Solo se hai sostenuto un esame presso un ente certificatore.' },
] as const;
