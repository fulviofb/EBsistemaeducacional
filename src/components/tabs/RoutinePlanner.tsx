import { Sunrise, BookOpen, Moon, ClipboardList } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';
import { moments, blockAIds, blockBIds, blockCIds, allMomentIds, BLOCK_A_LABEL, BLOCK_A_TIME, BLOCK_B_LABEL, BLOCK_B_TIME, BLOCK_C_LABEL, BLOCK_C_TIME } from '../../data/moments';
import BlockSection from '../planner/BlockSection';
import MomentCard from '../planner/MomentCard';
import PlanGenerator from '../planner/PlanGenerator';

function MomentGrid({ ids }: { ids: number[] }) {
  const { state, dispatch } = usePlanner();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {ids.map(id => {
        if (id === -1) {
          return <MomentCard key="break" id={0} name="Intervalo" duration="45 min" color="" isActive={false} isFilled={false} isBreak />;
        }
        const m = moments[id];
        if (!m) return null;
        const isFilled = !!state.plannedData[id]?.atv?.trim();
        const isActive = state.activeMoment === id;
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
            onClick={() => dispatch({ type: 'SET_MOMENT', id })}
          />
        );
      })}
    </div>
  );
}

export default function RoutinePlanner() {
  const total = allMomentIds.length;

  return (
    <div className="animate-fade-in">
      <div className="rounded-2xl bg-white border border-stone-200 p-5 mb-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-soft">
        <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
          <ClipboardList className="w-6 h-6 text-brand-500" />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-lg font-bold text-stone-800 mb-0.5">
            Planejador de Rotina
          </h2>
          <p className="text-xs text-stone-400 font-bold">
            Unidade 1 - Amar a Escola - Maternal 2 - {total} momentos
          </p>
        </div>
        <div className="bg-gold-50 border border-gold-200 rounded-xl p-3 text-[11px] text-stone-500 font-bold max-w-[200px] leading-relaxed hidden lg:block">
          <span className="text-gold-700 font-black block text-xs mb-0.5">Como usar</span>
          Clique num momento, leia, escreva o que fara, salve e gere o plano
        </div>
      </div>

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
