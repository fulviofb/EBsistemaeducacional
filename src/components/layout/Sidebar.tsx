import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Save, Lightbulb, Target, ChevronDown, ChevronUp, Clock, Package } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';
import { moments, allMomentIds, DIFFERENTIATOR_IDS } from '../../data/moments';
import { lessonGuidance, LESSON_CONTEXT } from '../../data/guidance';
import { activities, ACTIVITY_TYPES } from '../../data/activities';
import CampoChip from '../ui/CampoChip';
import type { LessonId } from '../../types';

export default function Sidebar() {
  const { state, dispatch, showToast } = usePlanner();
  const m = state.activeMoment ? moments[state.activeMoment] : null;
  const isOpen = m !== null;
  const lesson = state.activeLesson;
  const lessonNum = (['aula1','aula2','aula3','aula4'] as LessonId[]).indexOf(lesson) + 1;
  const isDiff = state.activeMoment ? DIFFERENTIATOR_IDS.includes(state.activeMoment) : false;
  const guidance = lessonGuidance.find(g => g.num === lessonNum);
  const sugestao = (isDiff && state.activeMoment && guidance)
    ? guidance.sugestoes[state.activeMoment]
    : null;

  const [atv, setAtv] = useState('');
  const [mat, setMat] = useState('');
  const [obs, setObs] = useState('');
  const [showActivities, setShowActivities] = useState(false);

  // Atividades filtradas para o momento atual
  const momentActivities = state.activeMoment
    ? activities.filter(a => a.mo.includes(state.activeMoment!))
    : [];

  useEffect(() => {
    if (state.activeMoment) {
      const saved = state.plannedData[state.activeMoment]?.[lesson];
      const pre = isDiff && guidance ? guidance.sugestoes[state.activeMoment] : '';
      setAtv(saved?.atv || pre || '');
      setMat(saved?.mat || '');
      setObs(saved?.obs || '');
      setShowActivities(false); // fecha o painel ao trocar de momento
    }
  }, [state.activeMoment, lesson, state.plannedData]);

  const save = () => {
    if (!state.activeMoment || !m) return;
    dispatch({
      type: 'SAVE_MOMENT',
      id: state.activeMoment,
      lesson,
      data: { atv, mat, obs },
    });
    showToast(`✓ Momento ${state.activeMoment} · Aula ${lessonNum} salvo!`);
    nav(1);
  };

  // Usa a atividade: preenche os campos automaticamente
  const usarAtividade = (titulo: string, materiais: string) => {
    setAtv(prev => prev ? `${prev}\n\n[Atividade sugerida] ${titulo}` : titulo);
    if (materiais && !mat) setMat(materiais);
    setShowActivities(false);
    showToast('✓ Atividade adicionada ao planejamento!');
  };

  const nav = (dir: number) => {
    if (!state.activeMoment) return;
    const idx = allMomentIds.indexOf(state.activeMoment);
    const next = allMomentIds[idx + dir];
    if (next) dispatch({ type: 'SET_MOMENT', id: next });
  };

  const close = () => dispatch({ type: 'SET_MOMENT', id: null });
  const currentIdx = state.activeMoment ? allMomentIds.indexOf(state.activeMoment) : -1;
  const lCtx = LESSON_CONTEXT[lesson];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[499] lg:hidden"
          onClick={close}
        />
      )}

      <aside
        className={`
          fixed right-0 z-[500] bg-white border-l border-stone-200 shadow-elevated
          flex flex-col no-print transition-transform duration-300 ease-out
          top-14 h-[calc(100vh-56px)] w-full lg:w-96
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {m && state.activeMoment ? (
          <>
            {/* Cabeçalho */}
            <div className="px-4 py-3 border-b border-stone-100 flex-shrink-0 bg-cream-50">
              <div
                className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider
                  text-white px-2 py-0.5 rounded-full mb-2"
                style={{ background: lCtx.color }}
              >
                Aula {lessonNum} · {isDiff ? 'Momento diferenciador' : 'Rotina base'}
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center font-mono
                    text-base text-white font-medium flex-shrink-0"
                  style={{ backgroundColor: m.color }}
                >
                  {String(state.activeMoment).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-black text-stone-800 leading-tight">{m.name}</h3>
                  <span className="inline-flex items-center gap-1 mt-0.5 bg-brand-50 border border-brand-100
                    rounded-full px-2.5 py-0.5 text-[10px] font-extrabold text-brand-600">
                    ⏱ {m.duration}
                  </span>
                </div>
                <button
                  onClick={close}
                  className="p-1.5 rounded-xl hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sugestão CEEE */}
            {sugestao && (
              <div
                className="mx-4 mt-3 flex-shrink-0 rounded-xl p-3 border-l-4 text-xs leading-relaxed font-semibold"
                style={{
                  background: `${lCtx.color}12`,
                  borderLeftColor: lCtx.color,
                  color: lCtx.color,
                }}
              >
                <div className="text-[9px] font-black uppercase tracking-wider mb-1 opacity-70">
                  🎯 Sugestão CEEE · Aula {lessonNum}
                </div>
                {sugestao}
              </div>
            )}

            {/* Descrição + dica */}
            <div className="px-4 py-3 border-b border-stone-100 flex-shrink-0">
              <p
                className="text-xs text-stone-600 leading-relaxed mb-3"
                dangerouslySetInnerHTML={{ __html: m.description }}
              />
              <div className="bg-gold-50 border border-gold-200 rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-gold-700 mb-1">
                  <Lightbulb className="w-3 h-3" />
                  Dica Pedagógica
                </div>
                <p
                  className="text-xs text-gold-900 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: m.tip }}
                />
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                {m.campos.map(c => <CampoChip key={c} campo={c} />)}
              </div>
            </div>

            {/* Campos de planejamento + atividades */}
            <div className="flex-1 px-4 py-4 bg-cream-50/50 overflow-y-auto">
              <div className="text-[10px] font-black uppercase tracking-wider text-brand-600 mb-3
                pb-2 border-b border-brand-100 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Target className="w-3 h-3" />
                  O que você irá fazer?
                </span>
                {/* Botão atividades sugeridas */}
                {momentActivities.length > 0 && (
                  <button
                    onClick={() => setShowActivities(!showActivities)}
                    className="flex items-center gap-1 text-[9px] font-black uppercase tracking-wider
                      text-earth-500 hover:text-earth-600 transition-colors"
                  >
                    Atividades sugeridas →
                    {showActivities
                      ? <ChevronUp className="w-3 h-3" />
                      : <ChevronDown className="w-3 h-3" />
                    }
                  </button>
                )}
              </div>

              {/* Painel de atividades sugeridas — expande ao clicar */}
              {showActivities && momentActivities.length > 0 && (
                <div className="mb-4 space-y-2.5">
                  <div className="text-[9px] font-black uppercase tracking-wider text-stone-400 mb-2">
                    {momentActivities.length} atividade{momentActivities.length > 1 ? 's' : ''} sugerida{momentActivities.length > 1 ? 's' : ''} para este momento
                  </div>
                  {momentActivities.map(act => {
                    const typeInfo = ACTIVITY_TYPES[act.tipo];
                    return (
                      <div
                        key={act.id}
                        className="bg-white border border-stone-200 rounded-xl p-3 hover:border-brand-300 transition-colors"
                      >
                        {/* Tipo + tempo */}
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className="text-[9px] font-black uppercase tracking-wider text-white px-2 py-0.5 rounded-full"
                            style={{ background: typeInfo?.color || '#888' }}
                          >
                            {typeInfo?.label || act.tipo}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] text-stone-400 font-bold">
                            <Clock className="w-2.5 h-2.5" />
                            {act.tempo}
                          </span>
                        </div>

                        {/* Título */}
                        <p className="text-xs font-bold text-stone-700 leading-snug mb-1.5">
                          {act.titulo}
                        </p>

                        {/* Descrição */}
                        <p className="text-[10.5px] text-stone-500 leading-relaxed mb-2 line-clamp-2">
                          {act.desc}
                        </p>

                        {/* Material */}
                        {act.mat && (
                          <div className="flex items-start gap-1.5 text-[10px] text-stone-400 mb-2">
                            <Package className="w-2.5 h-2.5 mt-0.5 flex-shrink-0" />
                            <span>{act.mat}</span>
                          </div>
                        )}

                        {/* Botão usar */}
                        <button
                          onClick={() => usarAtividade(act.titulo, act.mat)}
                          className="w-full text-[10px] font-black uppercase tracking-wider
                            bg-brand-50 hover:bg-brand-100 text-brand-600 border border-brand-200
                            rounded-lg py-1.5 transition-colors"
                        >
                          + Usar no planejamento
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Sem atividades para este momento */}
              {showActivities && momentActivities.length === 0 && (
                <div className="mb-4 bg-stone-50 rounded-xl p-4 text-center text-xs text-stone-400">
                  Nenhuma atividade cadastrada para este momento ainda.
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">
                    Estratégia / Atividade planejada
                  </label>
                  <textarea
                    value={atv}
                    onChange={e => setAtv(e.target.value)}
                    placeholder="Descreva o que irá fazer: estratégia, história, brincadeira, recurso visual..."
                    className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800
                      bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-50 outline-none
                      resize-y min-h-[80px] transition-all placeholder:text-stone-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">
                    Materiais necessários
                  </label>
                  <input
                    type="text"
                    value={mat}
                    onChange={e => setMat(e.target.value)}
                    placeholder="Ex: cartaz, tinta, palitos de picolé..."
                    className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800
                      bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-50 outline-none transition-all placeholder:text-stone-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">
                    Observação / Adaptação{' '}
                    <span className="normal-case tracking-normal font-semibold text-stone-300">(opcional)</span>
                  </label>
                  <textarea
                    value={obs}
                    onChange={e => setObs(e.target.value)}
                    placeholder="Adaptação para alguma criança ou observação sobre o grupo..."
                    className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800
                      bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-50 outline-none
                      resize-y min-h-[54px] transition-all placeholder:text-stone-300"
                  />
                </div>

                {/* Botão atividades sugeridas (versão inline, só se há atividades) */}
                {momentActivities.length > 0 && !showActivities && (
                  <button
                    onClick={() => setShowActivities(true)}
                    className="w-full flex items-center justify-center gap-2 border-[1.5px] border-earth-300
                      bg-earth-50 hover:bg-earth-100 text-earth-600 rounded-xl px-4 py-2.5
                      text-xs font-black transition-all"
                  >
                    🎯 Ver atividades sugeridas para este momento
                    <span className="bg-earth-200 text-earth-700 text-[9px] font-black px-1.5 py-0.5 rounded-full">
                      {momentActivities.length}
                    </span>
                  </button>
                )}

                <button
                  onClick={save}
                  className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600
                    text-white rounded-xl px-4 py-3 text-xs font-black transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-elevated active:translate-y-0"
                >
                  <Save className="w-4 h-4" />
                  Salvar e avançar
                </button>
              </div>
            </div>

            {/* Navegação */}
            <div className="flex gap-2 px-4 py-3 border-t border-stone-100 flex-shrink-0 bg-white">
              <button
                onClick={() => nav(-1)}
                disabled={currentIdx <= 0}
                className="flex-1 flex items-center justify-center gap-1 border-[1.5px] border-stone-200 bg-white
                  rounded-xl py-2 text-[11px] font-extrabold text-stone-500 hover:border-brand-400
                  hover:text-brand-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Anterior
              </button>
              <button
                onClick={() => nav(1)}
                disabled={currentIdx >= allMomentIds.length - 1}
                className="flex-1 flex items-center justify-center gap-1 border-[1.5px] border-stone-200 bg-white
                  rounded-xl py-2 text-[11px] font-extrabold text-stone-500 hover:border-brand-400
                  hover:text-brand-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Próximo <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 text-center bg-cream-50/50">
            <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-brand-300" />
            </div>
            <h3 className="font-display text-base text-stone-500 font-semibold mb-2">
              Selecione um momento
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-5">
              Clique em qualquer célula da rotina para ver a descrição e preencher seu planejamento.
            </p>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-left w-full shadow-soft">
              <div className="text-[10px] font-black uppercase tracking-wider text-brand-600 mb-2.5">
                Como funciona
              </div>
              {[
                'Selecione a aula (1, 2, 3 ou 4)',
                'Clique em um momento da rotina',
                'Leia a descrição e dica pedagógica',
                'Veja as atividades sugeridas para o momento',
                'Escreva o que planeja fazer',
                'Salve — o card fica verde!',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-stone-500 mb-2 last:mb-0 leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center
                    justify-center text-[9px] font-black flex-shrink-0 mt-0.5">
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
