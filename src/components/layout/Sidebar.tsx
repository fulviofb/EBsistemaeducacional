import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Save, Lightbulb, Target } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';
import { moments, allMomentIds } from '../../data/moments';
import CampoChip from '../ui/CampoChip';

export default function Sidebar() {
  const { state, dispatch, showToast } = usePlanner();
  const m = state.activeMoment ? moments[state.activeMoment] : null;
  const isOpen = m !== null;

  const [atv, setAtv] = useState('');
  const [mat, setMat] = useState('');
  const [obs, setObs] = useState('');

  useEffect(() => {
    if (state.activeMoment) {
      const saved = state.plannedData[state.activeMoment];
      setAtv(saved?.atv || '');
      setMat(saved?.mat || '');
      setObs(saved?.obs || '');
    }
  }, [state.activeMoment, state.plannedData]);

  const save = () => {
    if (!state.activeMoment || !m) return;
    dispatch({ type: 'SAVE_MOMENT', id: state.activeMoment, data: { atv, mat, obs } });
    showToast(`Momento ${state.activeMoment} - ${m.name} salvo!`);
    nav(1);
  };

  const nav = (dir: number) => {
    if (!state.activeMoment) return;
    const idx = allMomentIds.indexOf(state.activeMoment);
    const next = allMomentIds[idx + dir];
    if (next) dispatch({ type: 'SET_MOMENT', id: next });
  };

  const close = () => dispatch({ type: 'SET_MOMENT', id: null });

  const currentIdx = state.activeMoment ? allMomentIds.indexOf(state.activeMoment) : -1;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[500] lg:hidden" onClick={close} />
      )}

      <aside
        className={`fixed top-14 right-0 h-[calc(100vh-56px)] w-full max-w-sm bg-white border-l border-stone-200
          shadow-soft z-[500] flex flex-col transition-transform duration-300 ease-out no-print
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {m && state.activeMoment && (
          <>
            <div className="px-5 py-4 border-b border-stone-100 flex-shrink-0 bg-cream-50">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center font-mono text-base text-white font-medium flex-shrink-0"
                  style={{ backgroundColor: m.color }}
                >
                  {String(state.activeMoment).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-black text-stone-800 leading-tight truncate">{m.name}</h3>
                  <span className="inline-flex items-center gap-1 mt-1 bg-brand-50 border border-brand-100 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold text-brand-600">
                    {m.duration}
                  </span>
                </div>
                <button onClick={close} className="p-1.5 rounded-xl hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="px-5 py-4 border-b border-stone-100 flex-shrink-0">
              <p className="text-xs text-stone-600 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: m.description }} />
              <div className="bg-gold-50 border border-gold-200 rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-gold-700 mb-1">
                  <Lightbulb className="w-3 h-3" />
                  Dica Pedagogica
                </div>
                <p className="text-xs text-gold-900 leading-relaxed" dangerouslySetInnerHTML={{ __html: m.tip }} />
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                {m.campos.map(c => <CampoChip key={c} campo={c} />)}
              </div>
            </div>

            <div className="flex-1 px-5 py-4 bg-cream-50/50 overflow-y-auto">
              <div className="text-[10px] font-black uppercase tracking-wider text-brand-600 mb-3 pb-2 border-b border-brand-100 flex items-center gap-1.5">
                <Target className="w-3 h-3" />
                O que voce ira fazer?
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">
                    Estrategia / Atividade planejada
                  </label>
                  <textarea
                    value={atv}
                    onChange={e => setAtv(e.target.value)}
                    placeholder="Descreva o que ira fazer: estrategia, historia, brincadeira, recurso visual..."
                    className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800
                      bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-50 outline-none
                      resize-y min-h-[80px] transition-all placeholder:text-stone-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">
                    Materiais necessarios
                  </label>
                  <input
                    type="text"
                    value={mat}
                    onChange={e => setMat(e.target.value)}
                    placeholder="Ex: cartaz, tinta, palitos de picole..."
                    className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800
                      bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-50 outline-none transition-all placeholder:text-stone-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">
                    Observacao / Adaptacao (opcional)
                  </label>
                  <textarea
                    value={obs}
                    onChange={e => setObs(e.target.value)}
                    placeholder="Adaptacao para alguma crianca ou observacao sobre o grupo..."
                    className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800
                      bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-50 outline-none
                      resize-y min-h-[54px] transition-all placeholder:text-stone-300"
                  />
                </div>

                <button
                  onClick={save}
                  className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600
                    text-white rounded-xl px-4 py-3 text-xs font-black transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-elevated active:translate-y-0"
                >
                  <Save className="w-4 h-4" />
                  Salvar e avancar para o proximo
                </button>
              </div>
            </div>

            <div className="flex gap-2 px-5 py-3 border-t border-stone-100 flex-shrink-0 bg-white">
              <button
                onClick={() => nav(-1)}
                disabled={currentIdx <= 0}
                className="flex-1 flex items-center justify-center gap-1 border-[1.5px] border-stone-200 bg-white
                  rounded-xl py-2 text-[11px] font-extrabold text-stone-500 hover:border-brand-400 hover:text-brand-600
                  transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Anterior
              </button>
              <button
                onClick={() => nav(1)}
                disabled={currentIdx >= allMomentIds.length - 1}
                className="flex-1 flex items-center justify-center gap-1 border-[1.5px] border-stone-200 bg-white
                  rounded-xl py-2 text-[11px] font-extrabold text-stone-500 hover:border-brand-400 hover:text-brand-600
                  transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Proximo
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}

        {!m && (
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 text-center bg-cream-50/50">
            <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-brand-300" />
            </div>
            <h3 className="font-display text-base text-stone-500 font-semibold mb-2">
              Selecione um momento
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-5">
              Clique em qualquer celula da rotina para ver a descricao e preencher seu planejamento.
            </p>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-left w-full shadow-soft">
              <div className="text-[10px] font-black uppercase tracking-wider text-brand-600 mb-2.5">
                Como funciona
              </div>
              {['Clique em um momento da rotina', 'Leia a descricao e dica pedagogica', 'Escreva o que planeja fazer', 'Salve — o card fica verde!', 'Gere o plano completo'].map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-stone-500 mb-2 last:mb-0 leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  {step}
                </div>
              ))}
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
