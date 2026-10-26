/**
 * INTERESSI PERSONALI — contenuti dimostrativi.
 * Suggerimento: per ogni interesse spiega cosa ti ha insegnato.
 * È il dettaglio che un selezionatore ricorda.
 */
import type { VisualData } from './types';

export interface Interest {
  id: string;
  kicker: string;
  title: string;
  text: string;
  /** Cosa porto da questo interesse nel lavoro */
  takeaway: string;
  facts: string[];
  visual: VisualData;
}

export const interests: Interest[] = [
  {
    id: 'montagna',
    kicker: 'Sport e vita all’aperto',
    title: 'Correre in salita',
    text: 'Da tre anni faccio corsa in montagna con un gruppo di amici della valle. D’inverno, quando il tempo lo permette, ciaspole e qualche uscita di scialpinismo, sempre in compagnia di chi la montagna la conosce bene. Mi alleno spesso sui sentieri che passano tra i vigneti, all’alba, prima di andare a scuola.',
    takeaway: 'La resistenza conta più dello scatto. Vale anche per una giornata di vendemmia.',
    facts: ['Corsa in montagna', 'Escursionismo', 'Ciaspole'],
    visual: {
      scene: 'montagna',
      seed: 6,
      photo: 'interessi-montagna',
      alt: 'Illustrazione di creste montuose all’alba con un sentiero tratteggiato che sale verso una croce di vetta.',
    },
  },
  {
    id: 'fotografia',
    kicker: 'Fotografia',
    title: 'Un anno di vigneto, una foto alla settimana',
    text: 'Dal marzo 2025 fotografo lo stesso filare dallo stesso punto ogni settimana: germogliamento, fioritura, invaiatura, vendemmia, caduta delle foglie. Ne sta venendo fuori un archivio che uso anche a scuola per riconoscere le fasi fenologiche.',
    takeaway: 'Fotografare obbliga a guardare davvero. Molti dettagli in campo li ho notati prima nel mirino.',
    facts: ['Paesaggio', 'Time-lapse stagionale', 'Documentazione tecnica'],
    visual: {
      scene: 'valle',
      seed: 21,
      viewfinder: true,
      photo: 'interessi-fotografia',
      alt: 'Illustrazione di un paesaggio vitato visto attraverso il mirino di una fotocamera, con griglia dei terzi.',
    },
  },
  {
    id: 'tecnologia',
    kicker: 'Tecnologia',
    title: 'Una stazione meteo fatta in casa',
    text: 'Con un microcontrollore, un sensore di temperatura e umidità e molta pazienza ho costruito una piccola stazione meteo per il vigneto di famiglia. Non sostituisce una stazione professionale, ma mi ha fatto capire come nascono i dati che leggiamo sui bollettini.',
    takeaway: 'Un dato vale quanto la qualità del sensore e della sua posizione. Ora controllo sempre da dove arriva un numero.',
    facts: ['Elettronica di base', 'Raccolta dati', 'QGIS'],
    visual: {
      scene: 'monitoraggio',
      seed: 9,
      photo: 'interessi-tecnologia',
      alt: 'Illustrazione di una mappa topografica a isoipse con cinque stazioni di rilevamento numerate.',
    },
  },
  {
    id: 'territorio',
    kicker: 'Territorio e natura',
    title: 'Muretti a secco e storie di valle',
    text: 'Partecipo alle giornate di volontariato per la manutenzione dei muretti a secco e dei sentieri organizzate in valle. Ascoltare chi li ha costruiti mi ha insegnato più di molti libri su come l’acqua si muove su un versante.',
    takeaway: 'Un territorio si conosce camminandolo, e si protegge lavorandoci insieme.',
    facts: ['Volontariato ambientale', 'Storia locale', 'Biodiversità'],
    visual: {
      scene: 'terrazze',
      seed: 17,
      photo: 'interessi-territorio',
      alt: 'Illustrazione di terrazzamenti con muretti a secco in pietra che seguono il pendio.',
    },
  },
];
