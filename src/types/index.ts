export interface Unit {
  id: number;
  name: string;
  subtitle: string;
  badges: { label: string; color: string }[];
  available: boolean;
  special?: boolean;
  emoji?: string;
  description?: string;
}

export interface MomentTemplate {
  id: number;
  name: string;
  duration: string;
  color: string;
  description: string;
  tip: string;
  campos: string[];
  badge?: { label: string; color: string };
  isBreak?: boolean;
  isDifferentiator?: boolean;
}

export interface PlannedData {
  atv: string;
  mat: string;
  obs: string;
}

// Estrutura por aula: dp[momentoId][aulaId] = PlannedData
export type PlannedDataByLesson = Record<number, Record<string, PlannedData>>;

export interface Activity {
  id: number;
  titulo: string;
  tipo: ActivityType;
  desc: string;
  tempo: string;
  mat: string;
  ca: string[];
  mo: number[];
}

export type ActivityType = 'corpo' | 'arte' | 'linguagem' | 'cognitiva' | 'espirita' | 'familia';

export type TabId = 'rotina' | 'banco' | 'campos' | 'jornada' | 'espirita' | 'orient' | 'alem';

export type LessonId = 'aula1' | 'aula2' | 'aula3' | 'aula4';

export interface LessonGuidance {
  num: number;
  title: string;
  color: string;
  contexto: string;
  objectives?: { code: string; text: string }[];
  action: string;
  fono: { sound: string; text: string };
  sugestoes: Record<number, string>;
}

export interface UnitReference {
  historia: string;
  quadrinha: string;
  quadrinhaFonte: string;
  esperanto: string;
  atitude: string;
  citacoes: { texto: string; fonte: string }[];
}
