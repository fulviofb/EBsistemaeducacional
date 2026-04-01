import { Heart, Users, Activity, Music, BookOpen, Shapes, Monitor, AlertCircle } from 'lucide-react';

const fields = [
  {
    name: 'Intelecto-Moral-Espiritual',
    code: 'IME',
    color: '#2e9959',
    icon: Heart,
    exclusive: true,
    desc: 'Cultivar relacionamentos positivos com o(a) professor(a) e os(as) colegas. Campo exclusivo do IEE - integra espiritualidade ao curriculo normativo.',
    habs: [],
  },
  {
    name: 'O eu, o outro e o nos',
    code: 'EO',
    color: '#d95f0e',
    icon: Users,
    habs: [
      { code: 'EI02EO01', text: 'Demonstrar cuidado e solidariedade na interacao.' },
      { code: 'EI02EO03-06', text: 'Compartilhar objetos, comunicar-se, perceber diferencas fisicas.' },
    ],
  },
  {
    name: 'Corpo, gestos e movimentos',
    code: 'CG',
    color: '#1a7fc1',
    icon: Activity,
    habs: [
      { code: 'EI02CG01-03', text: 'Explorar gestos, movimentos e formas de deslocamento.' },
      { code: 'EI02CG04-05', text: 'Coordenacao motora fina: desenhar, colar, recortar.' },
    ],
  },
  {
    name: 'Tracos, sons, cores e formas',
    code: 'TS',
    color: '#b5174a',
    icon: Music,
    habs: [
      { code: 'EI02TS01-02', text: 'Criar sons, explorar materiais - texturas e volumes.' },
    ],
  },
  {
    name: 'Escuta, fala, pensamento',
    code: 'EF',
    color: '#228f7e',
    icon: BookOpen,
    habs: [
      { code: 'EI02EF01-09', text: 'Dialogar, expressar sentimentos, formular perguntas, manipular generos textuais.' },
    ],
  },
  {
    name: 'Espacos, tempos, quantidades, relacoes e transformacoes',
    code: 'ET',
    color: '#d4880a',
    icon: Shapes,
    habs: [
      { code: 'ET01', text: 'Semelhancas entre objetos.' },
      { code: 'ET04-05', text: 'Relacoes espaciais e temporais.' },
      { code: 'ET07-08', text: 'Contar e registrar quantidades.' },
    ],
  },
  {
    name: 'Pensamento Computacional',
    code: 'C',
    color: '#0277bd',
    icon: Monitor,
    isNew: true,
    habs: [
      { code: 'EI03C001', text: 'Reconhecer padroes de repeticao em sons e movimentos.' },
      { code: 'EI03C002-004', text: 'Expressar etapas, experienciar algoritmos, criar representacoes.' },
    ],
  },
];

export default function ExperienceFields() {
  return (
    <div className="animate-fade-in">
      <div className="rounded-2xl bg-white border border-stone-200 p-5 mb-5 shadow-soft">
        <h2 className="font-display text-lg font-bold text-stone-800 mb-0.5">Campos de Experiencia</h2>
        <p className="text-xs text-stone-400 font-bold">7 campos - Inclui Pensamento Computacional (EI03C001-011)</p>
      </div>

      <div className="space-y-3">
        {fields.map(field => {
          const Icon = field.icon;
          return (
            <div key={field.code} className={`rounded-2xl overflow-hidden shadow-soft border ${field.isNew ? 'border-gold-300 ring-1 ring-gold-200' : 'border-stone-200'}`}>
              <div className="px-4 py-3 flex items-center gap-3 bg-white border-b border-stone-100">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: field.color }}>
                  <Icon className="w-4.5 h-4.5 text-white" />
                </div>
                <h3 className="text-[13px] font-black text-stone-800 flex-1">{field.name}</h3>
                <span className={`text-[10px] font-black rounded-full px-2.5 py-1 whitespace-nowrap ${field.isNew ? 'bg-gold-100 text-gold-700 border border-gold-300' : 'bg-cream-100 text-stone-500 border border-stone-200'}`}>
                  {field.isNew && 'Novo - '}{field.code}{field.exclusive ? ' - Exclusivo IEE' : ''}
                </span>
              </div>
              <div className="bg-white p-4">
                {field.exclusive && (
                  <div className="bg-sage-50 border border-sage-200 rounded-xl p-3 text-[13px] text-sage-700 font-bold leading-relaxed">
                    {field.desc}
                  </div>
                )}
                {field.isNew && (
                  <div className="bg-brand-50 border border-brand-100 rounded-xl p-3 mb-3 text-xs text-brand-700 font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Campo adicionado na revisao de marco/2026.
                  </div>
                )}
                {field.habs.length > 0 && (
                  <div className="space-y-2">
                    {field.habs.map(hab => (
                      <div key={hab.code} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-cream-50 border border-stone-100" style={{ borderLeft: `3px solid ${field.color}` }}>
                        <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style={{ backgroundColor: field.color }}>
                          {hab.code}
                        </span>
                        <p className="text-[11.5px] text-stone-600 leading-relaxed">{hab.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
