/**
 * PROFILO PERSONALE — testi della Home e della pagina "Chi sono".
 * Tutti i contenuti di questo file sono DIMOSTRATIVI (personaggio fittizio).
 * Sostituiscili con la tua storia: scrivi in prima persona, con fatti concreti.
 */
import type { VisualData } from './types';

export const profile = {
  firstName: 'Matteo',
  lastName: 'Ferrari',
  age: 18,
  hometown: 'Val di Cembra (TN)',

  /** Visual principale della Home */
  hero: {
    scene: 'valle',
    seed: 4,
    photo: 'hero',
    alt: 'Illustrazione della Valle dell’Adige all’alba: creste dolomitiche sullo sfondo e colline coltivate a vigneto in primo piano.',
  } satisfies VisualData,

  portrait: {
    scene: 'ritratto',
    photo: 'ritratto',
    alt: 'Spazio per il ritratto: sagoma stilizzata di un ragazzo inscritta in un arco, segnaposto per la fotografia personale.',
    caption: 'Ritratto dimostrativo — sostituiscilo con una tua foto in luce naturale, possibilmente in vigneto.',
  } satisfies VisualData,

  /** Introduzione breve (Home) */
  intro:
    'Sono cresciuto tra i terrazzamenti della Val di Cembra, dove la vigna si lavora quasi tutta a mano e ogni muretto a secco va tenuto in piedi. Frequento il quarto anno del percorso Tecnico Imprenditore Agricolo alla Fondazione Edmund Mach e mi interessa una domanda precisa: come può la viticoltura di montagna restare sostenibile, per l’ambiente e per chi ci lavora?',

  /** Tre competenze fondamentali (Home) */
  coreSkills: [
    {
      title: 'Gestione del vigneto',
      text: 'Conosco le operazioni del ciclo annuale e le ho svolte su pergola trentina e controspalliera a Guyot, dalla potatura invernale alla vendemmia.',
      points: ['Potatura secca e verde', 'Gestione della chioma e legatura', 'Vendemmia manuale e cernita'],
    },
    {
      title: 'Difesa sostenibile e monitoraggio',
      text: 'Prima osservo, poi intervengo: rilievi in campo, lettura dei dati meteo, soglie di intervento e registrazione puntuale delle operazioni.',
      points: ['Riconoscimento di peronospora e oidio', 'Principi di difesa integrata', 'Quaderno di campagna'],
    },
    {
      title: 'Visione d’impresa',
      text: 'Ragiono in costi, tempi e mercati. Uso fogli di calcolo e mappe GIS di base per trasformare un’idea di progetto in un piano verificabile.',
      points: ['Conto colturale per ettaro', 'Mappatura degli appezzamenti', 'Racconto del territorio'],
    },
  ],

  /** Biografia (Chi sono): ogni elemento è un paragrafo */
  bio: [
    'Mio nonno racconta che negli anni Settanta, in valle, quasi ogni famiglia aveva qualche pergola. Oggi molte terrazze sono tornate bosco: lavorarle costa fatica, e i giovani che restano sono pochi. Io sono cresciuto proprio lì, nella piccola azienda di famiglia, e da bambino il mio compito in vendemmia era portare le cassette vuote in fondo al filare.',
    'Alle medie pensavo di fare tutt’altro. Poi, a quattordici anni, ho passato un’estate intera a dare una mano a mio padre nella gestione del verde e ho capito che quel lavoro mi piaceva per un motivo preciso: ogni scelta ha una conseguenza che si vede, anche se a volte bisogna aspettare un anno intero per scoprirla.',
    'Ho scelto la Fondazione Edmund Mach perché volevo capire il perché delle cose che vedevo fare in campagna. A scuola ho imparato a dare un nome a quello che osservavo, a misurarlo e a confrontarlo. Ho imparato anche che “si è sempre fatto così” è un buon punto di partenza, non una risposta.',
    'Oggi frequento il quarto anno del percorso Tecnico Imprenditore Agricolo. Il mio interesse principale è la viticoltura sostenibile in ambiente di montagna: varietà resistenti, difesa a basso impatto, recupero dei terrazzamenti. Fuori dalla scuola corro in montagna, fotografo i vigneti nelle diverse stagioni e smonto (e a volte rimonto) qualsiasi sensore mi capiti tra le mani.',
  ],

  motivations: [
    {
      title: 'Restare, ma non da spettatore',
      text: 'Voglio vivere nella mia valle facendo un lavoro che abbia senso economico, non per tradizione. Per questo studio anche la parte gestionale.',
    },
    {
      title: 'Un lavoro che si vede',
      text: 'Mi piace l’idea che il risultato del mio lavoro sia leggibile nel paesaggio: un filare ben gestito, una terrazza recuperata.',
    },
    {
      title: 'La tecnica come alleata',
      text: 'Sensori, modelli previsionali e mappe non sostituiscono l’occhio in campo, ma aiutano a intervenire meno e meglio.',
    },
  ],

  values: [
    { term: 'Pazienza', text: 'La vite ragiona in stagioni e in anni. Ho imparato a non giudicare una scelta dopo una settimana.' },
    { term: 'Precisione', text: 'Un taglio sbagliato in potatura si paga per due vendemmie. Preferisco fare piano e bene.' },
    { term: 'Rispetto del territorio', text: 'Muretti, suolo e biodiversità sono un patrimonio comune, non solo un mezzo di produzione.' },
    { term: 'Collaborazione', text: 'In vendemmia nessuno lavora da solo: conta il ritmo della squadra, non il singolo.' },
    { term: 'Curiosità', text: 'Chiedo il perché delle cose, anche quando la risposta è “dipende”.' },
  ],

  softSkills: [
    { name: 'Lavoro in squadra', note: 'Squadre di vendemmia e gruppi di lavoro a scuola' },
    { name: 'Organizzazione del tempo', note: 'Pianificazione delle operazioni in base al meteo' },
    { name: 'Spirito di osservazione', note: 'Rilievi fitosanitari e fenologici in campo' },
    { name: 'Comunicazione', note: 'Accoglienza dei visitatori durante lo stage' },
    { name: 'Problem solving', note: 'Piccole riparazioni e imprevisti in campo' },
    { name: 'Affidabilità', note: 'Puntualità e rispetto delle consegne' },
  ],

  /** Livelli linguistici: AUTOVALUTAZIONE secondo il QCER, non certificazioni */
  languages: [
    { name: 'Italiano', level: 'Madrelingua' },
    { name: 'Inglese', level: 'B1 · autovalutazione' },
    { name: 'Tedesco', level: 'A2 · autovalutazione' },
  ],

  goals: [
    {
      horizon: 'Entro il 2027',
      title: 'Completare il diploma',
      text: 'Concludere il quarto anno TIA e valutare con la scuola il quinto anno per l’esame di Stato.',
    },
    {
      horizon: '2027 – 2029',
      title: 'Imparare altrove',
      text: 'Fare esperienza in un’azienda vitivinicola fuori provincia o all’estero, per confrontarmi con altri modelli produttivi e migliorare il tedesco.',
    },
    {
      horizon: 'Dal 2029',
      title: 'Avviare “Terrazze vive”',
      text: 'Rientrare nell’azienda di famiglia con un progetto di recupero dei terrazzamenti e varietà resistenti.',
    },
  ],
};
