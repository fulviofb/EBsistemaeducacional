import { useState } from 'react';
import { Heart, Users, Activity, Music, BookOpen, Shapes, Monitor, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

const fields = [
  {
    name: 'Intelecto-Moral-Espiritual',
    code: 'IME',
    color: '#2e9959',
    icon: Heart,
    exclusive: true,
    desc: 'Campo exclusivo do IEE — integra a dimensão espiritual ao currículo normativo da BNCC. Promove o cultivo de virtudes, a conexão com o(a) professor(a) e os(as) colegas, e o desenvolvimento da consciência moral e espiritual da criança.',
    habs: [
      { code: 'IME-01', text: 'Cultivar relacionamentos positivos com o(a) professor(a) e os(as) colegas, demonstrando afeto, respeito e cuidado.' },
      { code: 'IME-02', text: 'Participar dos momentos de prece, meditação e cultivo de virtudes com atenção e serenidade.' },
      { code: 'IME-03', text: 'Reconhecer a escola como um ambiente de aprendizado, espiritualidade e convivência amorosa.' },
      { code: 'IME-04', text: 'Desenvolver a autopercepção e a autorregulação por meio da autoavaliação guiada.' },
    ],
    momentos: [1, 3, 4, 6, 12, 15, 24],
  },
  {
    name: 'O eu, o outro e o nós',
    code: 'EO',
    color: '#d95f0e',
    icon: Users,
    habs: [
      { code: 'EI02EO01', text: 'Demonstrar atitudes de cuidado e solidariedade na interação com crianças e adultos.' },
      { code: 'EI02EO02', text: 'Demonstrar imagem positiva de si e confiança em sua capacidade para enfrentar dificuldades e desafios.' },
      { code: 'EI02EO03', text: 'Compartilhar os objetos e os espaços com crianças da mesma faixa etária e adultos.' },
      { code: 'EI02EO04', text: 'Comunicar-se com os colegas e os adultos, buscando compreensão mútua.' },
      { code: 'EI02EO05', text: 'Perceber que as pessoas têm características físicas diferentes, respeitando essas diferenças.' },
      { code: 'EI02EO06', text: 'Respeitar regras básicas de convívio social nas interações e brincadeiras.' },
    ],
    momentos: [5, 11, 12, 18, 19],
  },
  {
    name: 'Corpo, gestos e movimentos',
    code: 'CG',
    color: '#1a7fc1',
    icon: Activity,
    habs: [
      { code: 'EI02CG01', text: 'Apropriar-se de gestos e movimentos de sua cultura no cuidado de si e nos jogos e brincadeiras.' },
      { code: 'EI02CG02', text: 'Deslocar seu corpo no espaço, orientando-se por noções como em frente, atrás, no alto, embaixo, dentro, fora etc.' },
      { code: 'EI02CG03', text: 'Explorar formas de deslocamento no espaço (pular, saltar, dançar), combinando movimentos e seguindo orientações.' },
      { code: 'EI02CG04', text: 'Demonstrar progressiva independência no cuidado do seu corpo.' },
      { code: 'EI02CG05', text: 'Desenvolver progressivamente as habilidades manuais, adquirindo controle para desenhar, pintar, rasgar, folhear, entre outros.' },
    ],
    momentos: [16, 19, 20, 21, 22],
  },
  {
    name: 'Traços, sons, cores e formas',
    code: 'TS',
    color: '#b5174a',
    icon: Music,
    habs: [
      { code: 'EI02TS01', text: 'Criar sons com materiais, objetos e instrumentos musicais, para acompanhar diversos ritmos de música.' },
      { code: 'EI02TS02', text: 'Utilizar materiais variados com possibilidades de manipulação (argila, massa de modelar), explorando cores, texturas, superfícies, planos, formas e volumes ao criar objetos tridimensionais.' },
      { code: 'EI02TS03', text: 'Utilizar diferentes fontes sonoras disponíveis no ambiente em brincadeiras cantadas, canções, músicas e melodias.' },
    ],
    momentos: [1, 14, 16, 21],
  },
  {
    name: 'Escuta, fala, pensamento e imaginação',
    code: 'EF',
    color: '#228f7e',
    icon: BookOpen,
    habs: [
      { code: 'EI02EF01', text: 'Dialogar com crianças e adultos, expressando seus desejos, necessidades, sentimentos e opiniões.' },
      { code: 'EI02EF02', text: 'Identificar e criar diferentes sons e reconhecer rimas e aliterações em cantigas de roda e textos poéticos.' },
      { code: 'EI02EF03', text: 'Demonstrar interesse e atenção ao ouvir a leitura de histórias e outros textos, diferenciando escrita de ilustrações, e acompanhando com orientação do adulto-leitor a direção da leitura.' },
      { code: 'EI02EF04', text: 'Formular e responder perguntas sobre fatos da história narrada, identificando cenários, personagens e principais acontecimentos.' },
      { code: 'EI02EF05', text: 'Relatar experiências e fatos acontecidos, histórias ouvidas, filmes ou peças teatrais assistidos etc.' },
      { code: 'EI02EF06', text: 'Criar e contar histórias oralmente, com base em imagens ou temas sugeridos.' },
      { code: 'EI02EF07', text: 'Manusear diferentes portadores textuais, demonstrando reconhecer seus usos sociais.' },
      { code: 'EI02EF08', text: 'Manipular textos e livros infantis e de outros gêneros textuais de diferentes suportes.' },
      { code: 'EI02EF09', text: 'Representar sua imagem corporal de forma livre em diferentes suportes.' },
    ],
    momentos: [4, 5, 9, 10, 14, 15, 17],
  },
  {
    name: 'Espaços, tempos, quantidades, relações e transformações',
    code: 'ET',
    color: '#d4880a',
    icon: Shapes,
    habs: [
      { code: 'EI02ET01', text: 'Explorar e descrever semelhanças e diferenças entre as características e propriedades dos objetos (textura, massa, tamanho).' },
      { code: 'EI02ET02', text: 'Observar, relatar e descrever incidentes do cotidiano e fenômenos naturais (luz solar, vento, chuva etc.).' },
      { code: 'EI02ET03', text: 'Compartilhar, com outras crianças, situações de cuidado de plantas e animais nos espaços da instituição e fora dela.' },
      { code: 'EI02ET04', text: 'Identificar relações espaciais (dentro e fora, em cima, embaixo, acima, abaixo, entre e do lado) e temporais (antes, durante e depois).' },
      { code: 'EI02ET05', text: 'Classificar objetos, considerando determinado atributo (tamanho, peso, cor, forma etc.).' },
      { code: 'EI02ET06', text: 'Utilizar conceitos básicos de tempo (agora, antes, durante, depois, ontem, hoje, amanhã, lento, rápido, depressa, devagar).' },
      { code: 'EI02ET07', text: 'Contar oralmente objetos, pessoas, livros etc., em contextos diversos.' },
      { code: 'EI02ET08', text: 'Registrar com números a quantidade de crianças (meninas e meninos, presentes e ausentes) e a quantidade de objetos da mesma natureza (livros, bolas etc.).' },
    ],
    momentos: [7, 8, 9, 11, 13],
  },
  {
    name: 'Pensamento Computacional',
    code: 'C',
    color: '#0277bd',
    icon: Monitor,
    isNew: true,
    habs: [
      { code: 'EI03C001', text: 'Reconhecer padrões de repetição em sons, movimentos e sequências do cotidiano.' },
      { code: 'EI03C002', text: 'Expressar, por meio de linguagem verbal e não verbal, as etapas de uma atividade realizada.' },
      { code: 'EI03C003', text: 'Experienciar situações que envolvam sequências de ações (algoritmos simples) em brincadeiras e rotinas.' },
      { code: 'EI03C004', text: 'Criar representações simples de situações e histórias utilizando desenhos, objetos ou movimentos corporais.' },
    ],
    momentos: [8, 9, 10, 12, 13, 20],
  },
];

function FieldCard({ field }: { field: typeof fields[0] }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = field.icon;

  return (
    <div className={`rounded-2xl overflow-hidden shadow-soft border ${
      field.isNew ? 'border-gold-300 ring-1 ring-gold-200' : 'border-stone-200'
    }`}>
      {/* Cabeçalho */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center gap-3 bg-white border-b border-stone-100 hover:bg-stone-50 transition-colors text-left"
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: field.color }}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[13px] font-black text-stone-800">{field.name}</h3>
          <p className="text-[10px] text-stone-400 font-bold mt-0.5">
            {field.habs.length} habilidade{field.habs.length !== 1 ? 's' : ''}
            {field.momentos ? ` · Momentos: ${field.momentos.join(', ')}` : ''}
          </p>
        </div>
        <span className={`text-[10px] font-black rounded-full px-2.5 py-1 whitespace-nowrap mr-2 ${
          field.isNew
            ? 'bg-gold-100 text-gold-700 border border-gold-300'
            : 'bg-cream-100 text-stone-500 border border-stone-200'
        }`}>
          {field.isNew && '★ Novo · '}{field.code}{field.exclusive ? ' · Exclusivo IEE' : ''}
        </span>
        {expanded
          ? <ChevronUp className="w-4 h-4 text-stone-400 flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
        }
      </button>

      {/* Conteúdo expandido */}
      {expanded && (
        <div className="bg-white p-4 space-y-3">
          {field.exclusive && (
            <div className="bg-sage-50 border border-sage-200 rounded-xl p-3 text-[13px] text-sage-700 font-semibold leading-relaxed">
              🌿 {field.desc}
            </div>
          )}

          {field.isNew && (
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-3 text-xs text-brand-700 font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              Campo adicionado na revisão de março/2026.
            </div>
          )}

          {field.habs.length > 0 && (
            <div className="space-y-2">
              <p className="text-[9px] font-black uppercase tracking-wider text-stone-400 mb-2">
                Habilidades e objetivos de aprendizagem
              </p>
              {field.habs.map(hab => (
                <div
                  key={hab.code}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-cream-50 border border-stone-100"
                  style={{ borderLeft: `3px solid ${field.color}` }}
                >
                  <span
                    className="text-[9px] font-black px-1.5 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: field.color }}
                  >
                    {hab.code}
                  </span>
                  <p className="text-[11.5px] text-stone-600 leading-relaxed">{hab.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* Momentos da rotina que trabalham este campo */}
          {field.momentos && field.momentos.length > 0 && (
            <div className="pt-2 border-t border-stone-100">
              <p className="text-[9px] font-black uppercase tracking-wider text-stone-400 mb-2">
                Momentos da rotina que desenvolvem este campo
              </p>
              <div className="flex flex-wrap gap-1.5">
                {field.momentos.map(m => (
                  <span
                    key={m}
                    className="text-[10px] font-black text-white px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: field.color }}
                  >
                    {String(m).padStart(2, '0')}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ExperienceFields() {
  return (
    <div className="animate-fade-in">
      <div className="rounded-2xl bg-white border border-stone-200 p-5 mb-5 shadow-soft">
        <h2 className="font-display text-lg font-bold text-stone-800 mb-0.5">
          Campos de Experiência
        </h2>
        <p className="text-xs text-stone-400 font-bold">
          7 campos · BNCC Educação Infantil + Pensamento Computacional (EI03C001–011) · Clique para expandir
        </p>
      </div>

      <div className="space-y-3">
        {fields.map(field => (
          <FieldCard key={field.code} field={field} />
        ))}
      </div>
    </div>
  );
}
