/**
 * COLLEZIONI DI CONTENUTI (Astro Content Layer)
 *
 * - esperienze: un file Markdown per ogni esperienza in src/content/esperienze/
 * - documenti:  un file Markdown per ogni documento in src/content/documenti/
 *
 * Lo schema controlla che ogni file abbia i campi richiesti:
 * se manca qualcosa, `npm run build` segnala l'errore.
 */
import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const scene = z.enum(['valle', 'filari', 'terrazze', 'grappolo', 'potatura', 'monitoraggio', 'ritratto', 'suolo', 'montagna']);

const visual = z.object({
  scene,
  seed: z.number().optional(),
  tone: z.enum(['scuro', 'chiaro']).optional(),
  photo: z.string().optional(),
  alt: z.string().min(10, 'Il testo alternativo deve descrivere l’immagine'),
  caption: z.string().optional(),
  credit: z.object({ author: z.string(), license: z.string(), href: z.string().url().optional() }).optional(),
});

const esperienze = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/esperienze' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Stage aziendale', 'Attività in vigneto', 'Potatura', 'Vendemmia', 'Monitoraggio', 'Modulo formativo', 'Elaborato']),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    place: z.string(),
    /** Ore indicative: lascia vuoto se non le conosci con certezza */
    hours: z.number().optional(),
    summary: z.string().max(240),
    skills: z.array(z.string()).min(1),
    visuals: z.array(visual).min(1),
    documents: z.array(reference('documenti')).default([]),
    featured: z.boolean().default(false),
    demo: z.boolean().default(true),
  }),
});

const documenti = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/documenti' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['CV', 'Lettera', 'Attestati', 'Tesina', 'Presentazione', 'Elaborato', 'Relazioni']),
    lang: z.enum(['it', 'en']).default('it'),
    /**
     * demo        → documento dimostrativo completo, consultabile come pagina
     * da-caricare → stato vuoto con istruzioni (nessun file disponibile)
     * pubblicato  → documento reale: indica `file` (PDF in public/documenti/)
     */
    status: z.enum(['demo', 'da-caricare', 'pubblicato']),
    summary: z.string(),
    file: z.string().optional(),
    order: z.number().default(50),
  }),
});

export const collections = { esperienze, documenti };
