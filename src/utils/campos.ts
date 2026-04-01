import { CAMPO_COLORS } from '../data/moments';

export function getCampoColor(campo: string): string {
  const key = Object.keys(CAMPO_COLORS).find(k => campo.startsWith(k));
  return key ? CAMPO_COLORS[key] : '#6b7280';
}
