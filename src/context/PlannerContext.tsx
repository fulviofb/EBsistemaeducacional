import { createContext, useContext, useReducer, useEffect, useState, type ReactNode } from 'react';
import type { TabId, PlannedData, Activity, LessonId } from '../types';

interface PlannerState {
  selectedUnit: number | null;
  activeTab: TabId;
  activeMoment: number | null;
  activeLesson: LessonId;
  // Estrutura: plannedData[momentoId][aulaId] = PlannedData  (D1 — dados por aula)
  plannedData: Record<number, Record<string, PlannedData>>;
  extraActivities: Activity[];
}

type Action =
  | { type: 'SELECT_UNIT';    unit: number }
  | { type: 'SET_TAB';        tab: TabId }
  | { type: 'SET_MOMENT';     id: number | null }
  | { type: 'SET_LESSON';     lesson: LessonId }
  | { type: 'SAVE_MOMENT';    id: number; lesson: LessonId; data: PlannedData }
  | { type: 'ADD_ACTIVITY';   activity: Activity }
  | { type: 'BACK_TO_UNITS' };

const initialState: PlannerState = {
  selectedUnit: null,
  activeTab: 'rotina',
  activeMoment: null,
  activeLesson: 'aula1',
  plannedData: {},
  extraActivities: [],
};

function reducer(state: PlannerState, action: Action): PlannerState {
  switch (action.type) {
    case 'SELECT_UNIT':
      return { ...state, selectedUnit: action.unit, activeTab: 'rotina', activeMoment: null, activeLesson: 'aula1' };
    case 'SET_TAB':
      return { ...state, activeTab: action.tab };
    case 'SET_MOMENT':
      return { ...state, activeMoment: action.id };
    case 'SET_LESSON':
      return { ...state, activeLesson: action.lesson, activeMoment: null };
    case 'SAVE_MOMENT': {
      const existing = state.plannedData[action.id] || {};
      return {
        ...state,
        plannedData: {
          ...state.plannedData,
          [action.id]: { ...existing, [action.lesson]: action.data },
        },
      };
    }
    case 'ADD_ACTIVITY':
      return { ...state, extraActivities: [...state.extraActivities, action.activity] };
    case 'BACK_TO_UNITS':
      return { ...state, selectedUnit: null, activeMoment: null };
    default:
      return state;
  }
}

const STORAGE_KEY = 'guia-educador-v7';

function loadState(): PlannerState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...initialState, ...parsed };
    }
  } catch { /* ignore */ }
  return initialState;
}

interface PlannerContextType {
  state: PlannerState;
  dispatch: React.Dispatch<Action>;
  filledCount: number;
  toast: string | null;
  showToast: (msg: string) => void;
}

const PlannerContext = createContext<PlannerContextType | null>(null);

export function PlannerProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const { selectedUnit, plannedData, extraActivities, activeLesson } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ selectedUnit, plannedData, extraActivities, activeLesson }));
  }, [state]);

  // filledCount: momentos preenchidos na aula ativa
  const filledCount = Object.values(state.plannedData)
    .filter(byLesson => byLesson[state.activeLesson]?.atv?.trim())
    .length;

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  return (
    <PlannerContext.Provider value={{ state, dispatch, filledCount, toast, showToast }}>
      {children}
    </PlannerContext.Provider>
  );
}

export function usePlanner() {
  const ctx = useContext(PlannerContext);
  if (!ctx) throw new Error('usePlanner must be used within PlannerProvider');
  return ctx;
}
