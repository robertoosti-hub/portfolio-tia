/**
 * Funzioni di supporto per le illustrazioni generative (componente Artwork).
 * Tutto viene calcolato durante la build: il browser riceve solo SVG statico.
 */

/** Generatore pseudo-casuale con seme: stesso seme → stessa illustrazione. */
export function rng(seed: number) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const f = (n: number) => Math.round(n * 10) / 10;

/**
 * Profilo di una cresta montuosa (spostamento del punto medio).
 * Restituisce un path chiuso verso il basso, pronto da riempire.
 */
export function ridge(
  rand: () => number,
  { y, amp, rough = 0.55, w = 1200, h = 800, depth = 7 }: { y: number; amp: number; rough?: number; w?: number; h?: number; depth?: number },
): string {
  let pts: number[] = [y + (rand() - 0.5) * amp, y + (rand() - 0.5) * amp];
  let a = amp;
  for (let d = 0; d < depth; d++) {
    const next: number[] = [];
    for (let i = 0; i < pts.length - 1; i++) {
      next.push(pts[i], (pts[i] + pts[i + 1]) / 2 + (rand() - 0.5) * a);
    }
    next.push(pts[pts.length - 1]);
    pts = next;
    a *= rough;
  }
  const step = w / (pts.length - 1);
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${f(i * step)} ${f(p)}`).join('');
  return `${line}L${w} ${h}L0 ${h}Z`;
}

/** Collina morbida: somma di due sinusoidi. Restituisce funzione y(x). */
export function hill(base: number, a1: number, p1: number, a2: number, p2: number, phase = 0) {
  return (x: number) => base - a1 * Math.sin((x / p1) * Math.PI + phase) - a2 * Math.sin((x / p2) * Math.PI + phase * 2);
}

/** Converte una funzione y(x) in path (aperto o chiuso verso il basso). */
export function curvePath(fn: (x: number) => number, { w = 1200, h = 800, closed = true, step = 20, x0 = 0 } = {}): string {
  let d = '';
  for (let x = x0; x <= w; x += step) d += `${x === x0 ? 'M' : 'L'}${f(x)} ${f(fn(x))}`;
  return closed ? `${d}L${w} ${h}L${x0} ${h}Z` : d;
}

/** Curva chiusa irregolare (per le isoipse di una mappa topografica). */
export function blob(rand: () => number, cx: number, cy: number, r: number, wobble: number, n = 28): string {
  const pts: [number, number][] = [];
  const phases = [rand() * 6, rand() * 6, rand() * 6];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const rr =
      r * (1 + wobble * (0.5 * Math.sin(3 * t + phases[0]) + 0.3 * Math.sin(5 * t + phases[1]) + 0.2 * Math.sin(2 * t + phases[2])));
    pts.push([cx + Math.cos(t) * rr * 1.35, cy + Math.sin(t) * rr]);
  }
  // Curva di Catmull-Rom → Bézier per un contorno morbido
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d + 'Z';
}

/** Contorno stilizzato di una foglia di vite (5 lobi), centrata in (0,0). */
export const LEAF_PATH =
  'M0 120C-8 90-20 70-40 62C-70 70-110 60-128 30C-110 20-100 4-108-18C-130-30-140-60-130-86C-100-80-78-92-70-112C-60-140-30-150 0-160C30-150 60-140 70-112C78-92 100-80 130-86C140-60 130-30 108-18C100 4 110 20 128 30C110 60 70 70 40 62C20 70 8 90 0 120Z';

export { f as round };
