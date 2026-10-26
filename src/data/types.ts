/** Scene disponibili per le illustrazioni (vedi components/Artwork.astro) */
export type Scene =
  | 'valle' | 'filari' | 'terrazze' | 'grappolo' | 'potatura'
  | 'monitoraggio' | 'ritratto' | 'suolo' | 'montagna';

/**
 * Un "visual" è uno spazio per un'immagine.
 * - Se `photo` corrisponde a un file in src/assets/photos/ (senza estensione),
 *   viene mostrata la fotografia, ottimizzata e responsive.
 * - Altrimenti viene mostrata l'illustrazione `scene`, etichettata come segnaposto.
 */
export interface VisualData {
  scene: Scene;
  seed?: number;
  tone?: 'scuro' | 'chiaro';
  viewfinder?: boolean;
  /** Nome del file in src/assets/photos, es. "vendemmia-2025" per vendemmia-2025.jpg */
  photo?: string;
  /** Testo alternativo: descrive il contenuto dell'immagine (obbligatorio) */
  alt: string;
  caption?: string;
  /** Attribuzione obbligatoria per le foto con licenza Creative Commons */
  credit?: { author: string; license: string; href?: string };
}

/** Provenienza di un'informazione: istituzionale (con fonte) o simulata. */
export type Provenance = 'istituzionale' | 'dimostrativo' | 'da-completare';
