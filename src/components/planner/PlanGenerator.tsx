import { useState } from 'react';
import { FileText, Printer, ClipboardCheck } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';
import { moments, allMomentIds } from '../../data/moments';
import CampoChip from '../ui/CampoChip';

export default function PlanGenerator() {
  const { state, filledCount } = usePlanner();
  const total = allMomentIds.length;

  const [aula, setAula] = useState('1');
  const [data, setData] = useState('');
  const [turma, setTurma] = useState('Maternal 2');
  const [prof, setProf] = useState('');
  const [showPlan, setShowPlan] = useState(false);

  const filledIds = allMomentIds.filter(id => state.plannedData[id]?.atv?.trim());

  const generate = () => setShowPlan(true);

  const dataFormatted = data
    ? new Date(data + 'T12:00').toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
    : '—';

  let totalMin = 0;
  filledIds.forEach(id => {
    const mins = parseInt(moments[id].duration);
    if (!isNaN(mins)) totalMin += mins;
  });

  return (
    <>
      <div className="mt-5 bg-white rounded-2xl border border-stone-200 shadow-soft overflow-hidden">
        <div className="bg-cream-100 border-b border-stone-200 px-5 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center">
            <FileText className="w-5 h-5 text-brand-500" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-stone-800">
              Gerador de Plano de Aula
            </h3>
            <p className="text-[11px] text-stone-400 font-bold mt-0.5">
              Preencha os momentos, complete as informacoes e gere o plano
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2.5 bg-brand-50 border border-brand-100 rounded-xl p-3 mb-4">
            <ClipboardCheck className="w-5 h-5 text-brand-500" />
            <p className="text-xs text-brand-700 font-bold">
              Momentos planejados: <strong>{filledCount}</strong> de {total}
            </p>
          </div>

          {filledIds.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 mb-4 min-h-[28px]">
              {filledIds.map(id => (
                <span key={id} className="flex items-center gap-1 bg-sage-100 text-sage-700 border border-sage-200 rounded-full px-2.5 py-1 text-[11px] font-extrabold">
                  <ClipboardCheck className="w-3 h-3" />
                  {id}. {moments[id].name}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-stone-300 italic mb-4">Nenhum momento preenchido ainda...</p>
          )}

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">Aula n.</label>
              <input type="text" value={aula} onChange={e => setAula(e.target.value)}
                className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-50" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">Data</label>
              <input type="date" value={data} onChange={e => setData(e.target.value)}
                className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-50" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">Turma</label>
              <input type="text" value={turma} onChange={e => setTurma(e.target.value)}
                className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-50" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1">Professor(a)</label>
              <input type="text" value={prof} onChange={e => setProf(e.target.value)} placeholder="Nome completo"
                className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-50 placeholder:text-stone-300" />
            </div>
          </div>

          <button
            onClick={generate}
            className="w-full bg-brand-500 text-white rounded-xl px-4 py-3
              text-sm font-black flex items-center justify-center gap-2
              hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-elevated transition-all duration-200
              active:translate-y-0"
          >
            <FileText className="w-4 h-4" />
            Gerar Plano de Aula Completo
          </button>
        </div>
      </div>

      {showPlan && (
        <div className="mt-5 rounded-2xl overflow-hidden border-2 border-brand-200 shadow-soft animate-slide-up">
          <div className="bg-brand-50 px-4 py-3 border-b border-brand-100 flex items-center gap-2.5">
            <ClipboardCheck className="w-4 h-4 text-brand-500" />
            <span className="text-xs font-extrabold text-brand-700 flex-1">Plano gerado com sucesso!</span>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 bg-brand-500 text-white rounded-lg px-3 py-1.5 text-[11px] font-black hover:bg-brand-600 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Imprimir / PDF
            </button>
          </div>

          <div className="bg-white p-6 sm:p-8">
            <div className="border-b-[3px] border-brand-500 pb-4 mb-5 flex justify-between items-start">
              <div>
                <div className="font-display text-lg text-stone-800 font-bold">IEE Euripedes Barsanulfo</div>
                <div className="text-[11px] text-stone-400 font-bold mt-0.5">Guia do Educador - Educacao Infantil - Maternal 2</div>
              </div>
              <div className="text-[10px] text-stone-300">Gerado em {new Date().toLocaleDateString('pt-BR')}</div>
            </div>

            <h2 className="font-display text-xl text-stone-800 font-bold mb-4">
              Plano de Aula {aula} - Unidade 1: Amar a Escola
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
              {[
                { label: 'Data', value: dataFormatted },
                { label: 'Turma', value: turma },
                { label: 'Professor(a)', value: prof || '—' },
                { label: 'Carga horaria', value: `~${totalMin} min - ${filledIds.length} momentos` },
              ].map(item => (
                <div key={item.label} className="bg-cream-100 border border-stone-200 rounded-xl p-3">
                  <div className="text-[9px] font-black uppercase tracking-wider text-stone-400 mb-0.5">{item.label}</div>
                  <div className="text-xs font-extrabold text-stone-700">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mb-5">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-600 pb-1.5 border-b-2 border-brand-100 mb-3 flex items-center gap-1.5">
                <ClipboardCheck className="w-3.5 h-3.5" />
                Sequencia Planejada
              </h4>
              <div className="space-y-2.5">
                {filledIds.length > 0 ? filledIds.map(id => {
                  const m = moments[id];
                  const p = state.plannedData[id];
                  return (
                    <div key={id} className="flex gap-3 items-start bg-cream-50 rounded-xl p-3" style={{ borderLeft: `3px solid ${m.color}` }}>
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center font-mono text-sm text-white font-medium flex-shrink-0"
                        style={{ backgroundColor: m.color }}
                      >
                        {String(id).padStart(2, '0')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-black text-stone-800 mb-1 flex items-center gap-2">
                          {m.name}
                          <span className="text-[10px] text-stone-400 font-semibold">{m.duration}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {m.campos.map(c => <CampoChip key={c} campo={c} />)}
                        </div>
                        <div className="bg-gold-50 border border-gold-200 rounded-xl p-2.5">
                          <span className="text-[9px] font-black uppercase tracking-wider text-gold-700 block mb-0.5">
                            Planejamento do(a) professor(a)
                          </span>
                          <span className="text-xs text-stone-700 leading-relaxed">{p.atv}</span>
                        </div>
                        {p.mat && (
                          <div className="mt-1.5 text-[11px] text-sage-600 font-bold">
                            Materiais: {p.mat}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }) : (
                  <p className="text-xs text-stone-300 italic py-4">Nenhum momento foi planejado.</p>
                )}
              </div>
            </div>

            <div className="mb-5">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-600 pb-1.5 border-b-2 border-brand-100 mb-3">
                Referencias - Unidade 1
              </h4>
              <div className="text-xs text-stone-500 leading-relaxed space-y-1">
                <p><strong className="text-stone-700">Historia:</strong> A vida futura - A historia de Sheilinha e Joaquim - Editora Espirita Meimei, 1988</p>
                <p><strong className="text-stone-700">Quadrinha:</strong> "No mundo, em todo lugar... O nosso segundo lar" - Joao de Deus</p>
                <p><strong className="text-stone-700">Esperanto:</strong> Saluton! (Ola) - Bonan Matenon! (Bom dia)</p>
                <p><strong className="text-stone-700">Atitude a desenvolver:</strong> Companheirismo e auxiliar o(a) professor(a) em alguma atividade.</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-stone-100 text-[11px] text-stone-300 space-y-3">
              <p>Professor(a): ______________________________ Assinatura: ______________________</p>
              <p>Coordenacao: ______________________________ Visto: ______________________</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
