/**
 * CONFIGURAZIONE GENERALE DEL SITO
 * Il primo file da modificare per personalizzare il portfolio.
 */
export const site = {
  /** Nome mostrato nel logo, nei titoli e nei metadati */
  author: 'Matteo Ferrari',
  monogram: 'MF',
  /** Payoff (concept creativo) */
  tagline: 'Coltivo competenze. Progetto il futuro.',
  role: 'Studente di 4° anno · Tecnico Imprenditore Agricolo',
  description:
    'Portfolio professionale di Matteo Ferrari, studente di quarto anno del percorso Tecnico Imprenditore Agricolo alla Fondazione Edmund Mach di San Michele all’Adige, con un focus personale sulla viticoltura sostenibile in Trentino.',
  locale: 'it_IT',
  lang: 'it',
  /**
   * Avviso di contenuto dimostrativo. Lascialo attivo finché il portfolio
   * contiene dati simulati; impostalo a false quando i contenuti sono tuoi.
   */
  demo: true,
  demoNotice:
    'Portfolio dimostrativo a uso didattico: Matteo Ferrari è un personaggio fittizio e i contenuti marcati come “dimostrativi” sono simulati.',
  contact: {
    // Indirizzo fittizio su dominio riservato (RFC 2606): non riceve posta.
    email: 'matteo.ferrari@example.org',
    city: 'Val di Cembra (TN)',
  },
} as const;

/** Voci del menu principale — l'ordine qui è l'ordine nel menu. */
export const nav = [
  { href: 'chi-sono/', label: 'Chi sono' },
  { href: 'progetto/', label: 'Azienda e progetto' },
  { href: 'formazione/', label: 'Formazione' },
  { href: 'esperienze/', label: 'Esperienze' },
  { href: 'interessi/', label: 'Interessi' },
  { href: 'documenti/', label: 'Documenti' },
] as const;

/** Fonti istituzionali citate nel sito (verificate il 26/10/2026). */
export const sources = {
  cif: { label: 'Centro Istruzione e Formazione – Fondazione Edmund Mach', href: 'https://cif.fmach.it' },
  iefp: {
    label: 'CIF – Istruzione e formazione professionale',
    href: 'https://cif.fmach.it/La-Scuola/Percorsi-formativi/Istruzione-e-formazione-professionale',
  },
  tia: {
    label: 'FEM – Secondo biennio TIA',
    href: 'https://www.fmach.it/CIF/Didattica/Istruzione-e-formazione-professionale/Secondo-biennio-TIA',
  },
  iscrizioni: {
    label: 'FEM – Iscrizioni aperte all’istruzione tecnica e professionale',
    href: 'https://cif.fmach.it/Il-Centro/Comunicazione/Comunicati-stampa/FEM-iscrizioni-aperte-all-istruzione-tecnica-e-professionale',
  },
} as const;
