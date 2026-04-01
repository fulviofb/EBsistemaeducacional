import { useState } from 'react';
import { Target, Clock, Package, Plus, Dumbbell, Paintbrush, MessageCircle, Brain, Leaf, Users } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';
import { activities, ACTIVITY_TYPES } from '../../data/activities';
import { moments } from '../../data/moments';
import CampoChip from '../ui/CampoChip';
import Modal from '../ui/Modal';
import type { Activity, ActivityType } from '../../types';

const typeIcons: Record<string, typeof Dumbbell> = {
  corpo: Dumbbell,
  arte: Paintbrush,
  linguagem: MessageCircle,
  cognitiva: Brain,
  espirita: Leaf,
  familia: Users,
};

export default function ActivityBank() {
  const { state, dispatch, showToast } = usePlanner();
  const [filter, setFilter] = useState<string>('todos');
  const [modalActivity, setModalActivity] = useState<Activity | null>(null);

  const [newTitle, setNewTitle] = useState('');
  const [newTipo, setNewTipo] = useState<ActivityType>('corpo');
  const [newDesc, setNewDesc] = useState('');
  const [newTempo, setNewTempo] = useState('');
  const [newMat, setNewMat] = useState('');

  const allActivities = [...activities, ...state.extraActivities];
  const filtered = filter === 'todos' ? allActivities : allActivities.filter(a => a.tipo === filter);

  const useActivity = (activity: Activity, momentId?: number) => {
    const target = momentId || state.activeMoment;
    if (target) {
      const existing = state.plannedData[target];
      dispatch({
        type: 'SAVE_MOMENT',
        id: target,
        data: {
          atv: (existing?.atv ? existing.atv + '\n\n' : '') + activity.titulo + ': ' + activity.desc,
          mat: existing?.mat || activity.mat,
          obs: existing?.obs || '',
        },
      });
      showToast(`Atividade adicionada ao momento ${target}`);
      setModalActivity(null);
    } else {
      setModalActivity(activity);
    }
  };

  const addCustom = () => {
    if (!newTitle.trim() || !newDesc.trim()) {
      showToast('Preencha o titulo e a descricao.');
      return;
    }
    dispatch({
      type: 'ADD_ACTIVITY',
      activity: {
        id: Date.now(),
        titulo: newTitle,
        tipo: newTipo,
        desc: newDesc,
        tempo: newTempo,
        mat: newMat,
        ca: [],
        mo: [],
      },
    });
    setNewTitle(''); setNewDesc(''); setNewTempo(''); setNewMat('');
    showToast(`Atividade "${newTitle}" adicionada ao banco!`);
  };

  return (
    <div className="animate-fade-in">
      <div className="rounded-2xl bg-white border border-stone-200 p-5 mb-5 flex items-center gap-4 shadow-soft">
        <div className="w-12 h-12 rounded-2xl bg-peach-100 border border-peach-200 flex items-center justify-center flex-shrink-0">
          <Target className="w-6 h-6 text-peach-500" />
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-stone-800">Banco de Atividades</h2>
          <p className="text-xs text-stone-400 font-bold">{allActivities.length} atividades sugeridas - Unidade 1</p>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-5 items-center">
        <span className="text-[10px] font-black uppercase tracking-wider text-stone-400">Filtrar:</span>
        {Object.entries(ACTIVITY_TYPES).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`border rounded-full px-3 py-1 text-[11px] font-extrabold transition-all duration-150
              ${filter === key
                ? 'bg-brand-500 text-white border-brand-500'
                : 'bg-white border-stone-200 text-stone-500 hover:border-brand-300 hover:text-brand-500'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {filtered.map(a => {
          const Icon = typeIcons[a.tipo] || Target;
          return (
            <div key={a.id} className="bg-white rounded-2xl border border-stone-200 shadow-soft overflow-hidden flex flex-col hover:shadow-card hover:-translate-y-0.5 transition-all duration-200">
              <div className="px-4 py-3 border-b border-stone-100">
                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-stone-400 mb-1.5">
                  <Icon className="w-3 h-3" />
                  {ACTIVITY_TYPES[a.tipo]?.label || a.tipo}
                  {a.tempo && (
                    <span className="ml-auto flex items-center gap-0.5 bg-cream-100 border border-stone-200 rounded-full px-1.5 py-0.5 text-stone-500">
                      <Clock className="w-2.5 h-2.5" />
                      {a.tempo}
                    </span>
                  )}
                </div>
                <h4 className="text-[13px] font-black text-stone-800 leading-tight mb-1.5">{a.titulo}</h4>
                <div className="flex flex-wrap gap-1">
                  {a.ca.map(c => <CampoChip key={c} campo={c} />)}
                </div>
              </div>
              <div className="px-4 py-3 flex-1">
                <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">{a.desc}</p>
                {a.mat && (
                  <div className="mt-2.5 bg-cream-50 border border-stone-100 rounded-xl p-2.5">
                    <div className="text-[9px] font-black uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      Material
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {a.mat.split(',').map((m, i) => (
                        <span key={i} className="bg-white border border-stone-200 rounded-full px-2 py-0.5 text-[10px] font-bold text-stone-500">
                          {m.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="px-4 py-2.5 border-t border-stone-100 bg-cream-50/50">
                <button
                  onClick={() => useActivity(a)}
                  className="w-full bg-brand-500 text-white rounded-xl py-2 text-xs font-black hover:bg-brand-600 transition-colors"
                >
                  + Usar no planejamento
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal open={!!modalActivity} onClose={() => setModalActivity(null)} title={modalActivity?.titulo || ''}>
        {modalActivity && (
          <div>
            <p className="text-[13px] text-stone-500 leading-relaxed mb-4">{modalActivity.desc}</p>
            {modalActivity.mat && (
              <div className="bg-cream-50 border border-stone-200 rounded-xl p-3 mb-4 text-xs text-stone-500">
                <strong className="text-stone-700 flex items-center gap-1 mb-1"><Package className="w-3 h-3" /> Material:</strong>
                {modalActivity.mat}
              </div>
            )}
            <div className="text-xs text-stone-400 mb-2.5 font-bold">Momentos sugeridos:</div>
            <div className="flex flex-wrap gap-2">
              {(modalActivity.mo || []).map(n => {
                const m = moments[n];
                if (!m) return null;
                return (
                  <button
                    key={n}
                    onClick={() => useActivity(modalActivity, n)}
                    className="text-white rounded-xl px-3 py-2 text-xs font-extrabold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: m.color }}
                  >
                    Momento {n} - {m.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </Modal>

      <div className="rounded-2xl border-2 border-dashed border-brand-200 p-5 bg-white">
        <h3 className="text-sm font-black text-stone-800 mb-1 flex items-center gap-2">
          <Plus className="w-4 h-4 text-brand-500" />
          Adicionar minha propria atividade
        </h3>
        <p className="text-xs text-stone-400 mb-4">Encontrou uma atividade interessante? Cadastre e ela ficara disponivel no banco.</p>
        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-wider text-stone-400 mb-1">Titulo</label>
            <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Ex: Roda dos Nomes"
              className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-50" />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-wider text-stone-400 mb-1">Tipo</label>
            <select value={newTipo} onChange={e => setNewTipo(e.target.value as ActivityType)}
              className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-400 bg-white">
              <option value="corpo">Corpo e movimento</option>
              <option value="arte">Arte e criacao</option>
              <option value="linguagem">Linguagem oral</option>
              <option value="cognitiva">Cognicao</option>
              <option value="espirita">Espirita</option>
              <option value="familia">Familia</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[10px] font-black uppercase tracking-wider text-stone-400 mb-1">Descricao</label>
            <textarea value={newDesc} onChange={e => setNewDesc(e.target.value)} placeholder="Descreva como realizar a atividade..."
              className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-50 min-h-[60px] resize-y" />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-wider text-stone-400 mb-1">Tempo estimado</label>
            <input type="text" value={newTempo} onChange={e => setNewTempo(e.target.value)} placeholder="Ex: 15 min"
              className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-50" />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-wider text-stone-400 mb-1">Materiais</label>
            <input type="text" value={newMat} onChange={e => setNewMat(e.target.value)} placeholder="Ex: papel, cola, tesoura"
              className="w-full border-[1.5px] border-stone-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-50" />
          </div>
          <div className="sm:col-span-2 text-right mt-1">
            <button onClick={addCustom} className="bg-brand-500 text-white rounded-xl px-5 py-2.5 text-xs font-black hover:bg-brand-600 transition-colors inline-flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              Adicionar ao Banco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
