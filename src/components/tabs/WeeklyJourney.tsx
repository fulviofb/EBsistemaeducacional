import { Map, BookOpen, ChevronRight } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';
import { allMomentIds } from '../../data/moments';

const lessons = [
  { num: 1, color: '#1a5c3a', obj: 'Desenho de gratidao' },
  { num: 2, color: '#d95f0e', obj: 'Coracoes + rasgar papel' },
  { num: 3, color: '#1a7fc1', obj: 'Palitos de picole' },
  { num: 4, color: '#228f7e', obj: 'Desenho livre da semana' },
];

export default function WeeklyJourney() {
  const { state, dispatch, filledCount } = usePlanner();
  const total = allMomentIds.length;
  const pct = total > 0 ? Math.round((filledCount / total) * 100) : 0;

  const firstFilled = Object.values(state.plannedData).find(d => d.atv?.trim());

  return (
    <div className="animate-fade-in">
      <div className="rounded-2xl bg-white border border-stone-200 p-5 mb-5 flex items-center gap-4 shadow-soft">
        <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-200 flex items-center justify-center flex-shrink-0">
          <Map className="w-6 h-6 text-sky-500" />
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-stone-800">Jornada da Semana</h2>
          <p className="text-xs text-stone-400 font-bold">Visao do que foi planejado para cada aula - Clique para editar</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {lessons.map(lesson => (
          <div
            key={lesson.num}
            onClick={() => {
              dispatch({ type: 'SET_TAB', tab: 'rotina' });
              setTimeout(() => dispatch({ type: 'SET_MOMENT', id: lesson.num }), 100);
            }}
            className="bg-white rounded-2xl border border-stone-200 shadow-soft overflow-hidden cursor-pointer
              hover:shadow-card hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="p-4" style={{ backgroundColor: lesson.color }}>
              <div className="font-mono text-3xl text-white/30 leading-none font-medium mb-0.5">
                {String(lesson.num).padStart(2, '0')}
              </div>
              <h4 className="text-sm font-black text-white">Aula {lesson.num}</h4>
              <p className="text-[11px] text-white/60 mt-0.5">{lesson.obj}</p>
            </div>
            <div className="p-3">
              <div className="h-1 bg-stone-200 rounded-full overflow-hidden mb-2.5">
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: lesson.color }} />
              </div>
              <p className={`text-[11px] leading-relaxed ${firstFilled ? 'text-stone-500 italic' : 'text-stone-300'}`}>
                {firstFilled ? firstFilled.atv.slice(0, 70) + '...' : 'Clique para planejar esta aula'}
              </p>
            </div>
            <div className="px-3 py-2 border-t border-stone-100 bg-stone-50/50 flex items-center justify-between">
              <span className="text-[10px] text-stone-400 font-bold">
                {filledCount} momento(s) planejado(s)
              </span>
              <span className="text-[11px] font-black flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform" style={{ color: lesson.color }}>
                Editar <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 shadow-soft p-5">
        <div className="text-[11px] font-black uppercase tracking-wider text-brand-600 mb-3 pb-2 border-b-2 border-brand-100 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          Referencia da Unidade 1
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-xs text-stone-500 leading-relaxed">
          <p>
            <strong className="text-stone-700">Historia ancora:</strong> A vida futura - A historia de Sheilinha e Joaquim - Editora Espirita Meimei, 1988
          </p>
          <div>
            <p>
              <strong className="text-stone-700">Quadrinha:</strong> "No mundo, em todo lugar... O nosso segundo lar" - Joao de Deus
            </p>
            <p className="mt-1">
              <strong className="text-stone-700">Esperanto:</strong> Saluton! - Bonan Matenon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
