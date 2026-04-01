export interface Unit {
  id: number;
  name: string;
  subtitle: string;
  badges: { label: string; color: string }[];
  available: boolean;
  special?: boolean;
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
}

export interface PlannedData {
  atv: string;
  mat: string;
  obs: string;
}

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

export interface LessonGuidance {
  num: number;
  title: string;
  color: string;
  objectives?: { code: string; text: string }[];
  action: string;
  fono: { sound: string; text: string };
}
