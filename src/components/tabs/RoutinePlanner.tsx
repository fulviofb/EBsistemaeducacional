import { Sunrise, BookOpen, Moon, ClipboardList } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';
import {
  moments, blockAIds, blockBIds, blockCIds, allMomentIds,
  BLOCK_A_LABEL, BLOCK_A_TIME, BLOCK_B_LABEL, BLOCK_B_TIME, BLOCK_C_LABEL, BLOCK_C_TIME,
  DIFFERENTIATOR_IDS,
} from '../../data/moments';
import { LESSON_CONTEXT, lessonGuidance } from '../../data/guidance';
import BlockSection from '../planner/BlockSection';
import MomentCard from '../planner/MomentCard';
import PlanGenerator from '../planner/PlanGenerator';
import type { LessonId } from '../../types';

const LESSONS: LessonId[] = ['aula1', 'aula2', 'aula3', 'aula4'];

function MomentGrid({ ids }: { ids: number[] }) {
  const { state, dispatch } = usePlanner();
  const lesson = state.activeLesson;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {ids.map(id => {
        if (id === -1) {
          return <MomentCard key="break" id={0} name="Intervalo" duration="45 min" color="" isActive={false} isFilled={false} isBreak />;
        }
        const m = moments[id];
        if (!m) return null;
        const lessonData = state.plannedData[id]?.[lesson];
        const isFilled = !!lessonData?.atv?.trim();
        const isActive = state.activeMoment === id;
        const isDiff = DIFFERENTIATOR_IDS.includes(id);
        return (
          <MomentCard
            key={id}
            id={id}
            name={m.name}
            duration={m.duration}
            color={m.color}
            badge={m.badge}
            isActive={isActive}
            isFilled={isFilled}
            isDifferentiator={isDiff}
            onClick={() => dispatch({ type: 'SET_MOMENT', id })}
          />
        );
      })}
    </div>
  );
}

export default function RoutinePlanner() {
  const { state, dispatch } = usePlanner();
  const total = allMomentIds.length;
  const lesson = state.activeLesson;
  const ctx = LESSON_CONTEXT[lesson];
  const guidance = lessonGuidance.find(g => g.num === LESSONS.indexOf(lesson) + 1);

  // Contagem de momentos preenchidos na aula ativa
  const filled = allMomentIds.filter(id => state.plannedData[id]?.[lesson]?.atv?.trim()).length;

  return (
    <div className="animate-fade-in space-y-4">

      {/* Hero */}
      <div className="rounded-2xl bg-white border border-stone-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-soft">
        <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
          <ClipboardList className="w-6 h-6 text-brand-500" />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-lg font-bold text-stone-800 mb-0.5">Planejador de Rotina</h2>
          <p className="text-xs text-stone-400 font-bold">Unidade 1 — Amar a Escola · Maternal 2 · {total} momentos</p>
        </div>
        <div className="bg-gold-50 border border-gold-200 rounded-xl p-3 text-[11px] text-stone-500 font-bold max-w-[200px] leading-relaxed hidden lg:block">
          <span className="text-gold-700 font-black block text-xs mb-0.5">Como usar</span>
          Selecione a aula → clique num momento → preencha → salve → gere o plano
        </div>
      </div>

      {/* Seletor de Aula (D1) */}
      <div className="rounded-2xl bg-white border border-stone-200 p-4 shadow-soft flex items-center gap-3 flex-wrap">
        <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 flex-shrink-0">Planejando a aula:</span>
        <div className="flex gap-2 flex-1 flex-wrap">
          {LESSONS.map((l, i) => {
            const isActive = l === lesson;
            const lCtx = LESSON_CONTEXT[l];
            const lFilled = allMomentIds.filter(id => state.plannedData[id]?.[l]?.atv?.trim()).length;
            return (
              <button
                key={l}
                onClick={() => dispatch({ type: 'SET_LESSON', lesson: l })}
                className={`flex-1 min-w-[60px] py-2.5 px-3 rounded-xl text-sm font-bold transition-all duration-200 flex flex-col items-center gap-0.5 border-[1.5px] ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'bg-stone-50 text-stone-400 border-stone-200 hover:border-stone-400'
                }`}
                style={isActive ? { background: lCtx.color, borderColor: lCtx.color } : {}}
              >
                <span className="text-lg leading-none font-black">{i + 1}</span>
                <span className="text-[9px] uppercase tracking-wider opacity-70">{lFilled > 0 ? `${lFilled}/${total}` : 'Aula'}</span>
              </button>
            );
          })}
        </div>
        <span className="text-[10px] font-bold text-stone-400 flex-shrink-0">{filled}/{total} momentos</span>
      </div>

      {/* Contexto da aula (D3) */}
      {guidance && (
        <div
          className="flex items-center gap-3 rounded-xl p-3 pl-4 border-l-[3px]"
          style={{ background: `linear-gradient(90deg, ${ctx.color}12, white)`, borderLeftColor: ctx.color }}
        >
          <span
            className="text-[9px] font-black uppercase tracking-wider text-white px-2 py-1 rounded flex-shrink-0"
            style={{ background: ctx.color }}
          >
            Aula {LESSONS.indexOf(lesson) + 1}
          </span>
          <span className="text-sm font-bold" style={{ color: ctx.color }}>{ctx.label}</span>
        </div>
      )}

      {/* Grades dos momentos */}
      <BlockSection icon={<Sunrise className="w-4 h-4 text-white" />} title={BLOCK_A_LABEL} time={BLOCK_A_TIME} color="#4a9354">
        <MomentGrid ids={blockAIds} />
      </BlockSection>

      <BlockSection icon={<BookOpen className="w-4 h-4 text-white" />} title={BLOCK_B_LABEL} time={BLOCK_B_TIME} color="#5b9bd5">
        <MomentGrid ids={blockBIds} />
      </BlockSection>

      <BlockSection icon={<Moon className="w-4 h-4 text-white" />} title={BLOCK_C_LABEL} time={BLOCK_C_TIME} color="#d4880a">
        <MomentGrid ids={blockCIds} />
      </BlockSection>

      <PlanGenerator />
    </div>
  );
}
