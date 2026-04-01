import { Calendar, Target, Compass, Map, Heart, GraduationCap, Sparkles, ArrowRight, Sprout } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';
import type { TabId } from '../../types';
import { allMomentIds } from '../../data/moments';

const tabs: { id: TabId; label: string; icon: typeof Calendar; highlight?: boolean }[] = [
  { id: 'rotina',   label: 'Planejador',         icon: Calendar },
  { id: 'banco',    label: 'Banco de Atividades', icon: Target },
  { id: 'campos',   label: 'Campos de Exp.',      icon: Compass },
  { id: 'jornada',  label: 'Jornada da Semana',   icon: Map },
  { id: 'espirita', label: 'Conteúdo Espírita',   icon: Heart },
  { id: 'orient',   label: 'Orientações',          icon: GraduationCap },
  { id: 'alem',     label: 'Para ir Além',         icon: Sparkles, highlight: true },
];

export default function Header() {
  const { state, dispatch, filledCount } = usePlanner();
  const total = allMomentIds.length;
  const pct = Math.round((filledCount / total) * 100);

  return (
    <nav className="sticky top-0 z-[600] no-print">
      <div className="bg-white border-b border-stone-200/80 shadow-soft">
        <div className="flex items-center h-14 px-4 gap-0 max-w-[1600px] mx-auto">

          {/* Logo + nome */}
          <div className="flex items-center gap-2.5 pr-4 border-r border-stone-200 flex-shrink-0">
            <div className="w-8 h-8 bg-brand-500 rounded-xl flex items-center justify-center">
              <Sprout className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[11px] text-stone-800 font-extrabold leading-tight tracking-tight">
                Eurípedes Barsanulfo
              </h1>
              <p className="text-[9px] text-stone-400 font-bold uppercase tracking-[1.2px]">
                Sistema Educacional
              </p>
            </div>
          </div>

          {/* Badge da unidade */}
          <button
            onClick={() => dispatch({ type: 'BACK_TO_UNITS' })}
            className="mx-3 bg-brand-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full
              flex items-center gap-1.5 hover:bg-brand-600 transition-colors flex-shrink-0 uppercase tracking-wide"
          >
            Unidade {state.selectedUnit}
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Tabs de navegação */}
          <div className="flex flex-1 overflow-x-auto scrollbar-none">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const active = state.activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => dispatch({ type: 'SET_TAB', tab: tab.id })}
                  className={`flex items-center gap-1.5 px-3 h-14 whitespace-nowrap text-[11px] font-extrabold uppercase tracking-wider
                    border-b-2 transition-all duration-150
                    ${tab.highlight && !active
                      ? 'bg-gold-400 text-white rounded-full !h-7 my-auto mx-1 !border-b-0 shadow-sm hover:bg-gold-500'
                      : active
                        ? 'text-brand-500 border-brand-500'
                        : 'text-stone-400 border-transparent hover:text-stone-600'
                    }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Progresso */}
          <div className="flex items-center gap-2.5 pl-3 border-l border-stone-200 flex-shrink-0">
            <div className="w-16 h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-400 rounded-full transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-[11px] font-black text-brand-500 min-w-[34px]">
              {filledCount}/{total}
            </span>
            <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center ml-1">
              <GraduationCap className="w-4 h-4 text-brand-500" />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
