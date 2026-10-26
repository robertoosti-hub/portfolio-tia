/**
 * Costruisce un percorso interno che rispetta la "base" di GitHub Pages.
 * Esempio con base "/portfolio-tia":  url('chi-sono/') → "/portfolio-tia/chi-sono/"
 * Usa SEMPRE questa funzione per i link interni: così il sito funziona
 * sia in locale sia pubblicato in una sottocartella.
 */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

/** Restituisce true se il link punta alla sezione della pagina corrente. */
export function isActive(current: string, href: string): boolean {
  const norm = (p: string) => p.replace(/\/+$/, '') || '/';
  const c = norm(current);
  const h = norm(href);
  if (h === norm(url())) return c === h;
  return c === h || c.startsWith(h + '/');
}

/** Formatta un intervallo di date in italiano, es. "giugno – luglio 2026". */
export function formatPeriod(start: Date, end?: Date, locale = 'it-IT'): string {
  const month = (d: Date) => d.toLocaleDateString(locale, { month: 'long', timeZone: 'UTC' });
  const year = (d: Date) => d.getUTCFullYear();
  if (!end) return `${month(start)} ${year(start)}`;
  if (year(start) === year(end)) {
    if (start.getUTCMonth() === end.getUTCMonth()) return `${month(start)} ${year(start)}`;
    return `${month(start)} – ${month(end)} ${year(end)}`;
  }
  return `${month(start)} ${year(start)} – ${month(end)} ${year(end)}`;
}
