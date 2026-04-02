import { Target, User, Volume2, BookOpen, Printer } from 'lucide-react';
import { lessonGuidance } from '../../data/guidance';
import { usePlanner } from '../../context/PlannerContext';
import type { LessonId } from '../../types';

// Dados do Caderno de Atividades por aula (Unidade 1)
const CADERNO: Record<string, {
  titulo: string;
  citacao: string;
  fonte: string;
  instrucaoAluno: string;
  instrucaoProf: string;
  materiais: string;
}> = {
  aula1: {
    titulo: 'Atividade 1 — Desenho de Gratidão',
    citacao: '"SOU TIA BERNADETE! VELAREI PELA PEQUENA SHEILA COM IMENSO CARINHO."',
    fonte: '(A vida futura — A história de Sheilinha e Joaquim)',
    instrucaoAluno: 'COMO TIA BERNADETE, O(A) PROFESSOR(A) CUIDA DE VOCÊ COM CARINHO. FAÇA UM DESENHO PARA O(A) PROFESSOR(A) EXPRESSANDO SUA GRATIDÃO.',
    instrucaoProf: 'A criança realiza a preensão do instrumento de desenho para ocupar o espaço em branco da folha, realizando riscos, garatujas ou formas que representem sua intenção.',
    materiais: 'Lápis de cor, giz de cera ou canetinha; folha do caderno de atividades',
  },
  aula2: {
    titulo: 'Atividade 2 — Corações',
    citacao: '"A ESCOLA É O NOSSO SEGUNDO LAR, UM LUGAR DE AMOR E APRENDIZADO."',
    fonte: '(Quadrinha — João de Deus / Jardim da Infância)',
    instrucaoAluno: 'PINTE OS CORAÇÕES E RASGUE PEDACINHOS DE PAPEL COLORIDO PARA COLAR DENTRO DELES. CADA CORAÇÃO É UM ABRAÇO PARA A SUA ESCOLA!',
    instrucaoProf: 'A criança expressa afetividade ao colorir os corações e exercita a coordenação motora fina pelo rasgar e colar pedacinhos de papel.',
    materiais: 'Papel colorido para rasgar, cola, lápis de cor; folha do caderno com corações impressos',
  },
  aula3: {
    titulo: 'Atividade 3 — Escola de Palitos',
    citacao: '"SHEILINHA OLHOU PARA AQUELA ESCOLA DE LUZ E SORRIU, FELIZ POR ESTAR ALI."',
    fonte: '(A vida futura — A história de Sheilinha e Joaquim)',
    instrucaoAluno: 'USE OS PALITOS DE PICOLÉ PARA CONSTRUIR A SUA ESCOLA ESPÍRITA. DEPOIS, FAÇA UM DESENHO DE VOCÊ DENTRO DELA!',
    instrucaoProf: 'A criança constrói livremente a estrutura da escola com palitos e cola, exercitando manipulação de materiais e autopercepção ao se representar no desenho.',
    materiais: 'Palitos de picolé, cola branca, canetinha ou lápis; folha do caderno',
  },
  aula4: {
    titulo: 'Atividade 4 — Desenho Livre da Semana',
    citacao: '"CADA DIA NA ESCOLA É UMA SEMENTE PLANTADA NO CORAÇÃO DA CRIANÇA."',
    fonte: '(Equipe CEEE — IEE Eurípedes Barsanulfo)',
    instrucaoAluno: 'DESENHE O MOMENTO MAIS FELIZ DA SUA SEMANA NA ESCOLA. USE MUITAS CORES!',
    instrucaoProf: 'A criança recorda as experiências da semana, seleciona um momento de felicidade e o representa com diferentes cores e formas, comunicando sentimentos e preferências.',
    materiais: 'Lápis de cor, giz de cera, canetinha; folha do caderno com espaço livre',
  },
};

export default function TeacherGuidance() {
  const { state } = usePlanner();
  const lesson = state.activeLesson as LessonId;
  const lessonNum = (['aula1','aula2','aula3','aula4'] as LessonId[]).indexOf(lesson) + 1;
  const caderno = CADERNO[lesson];

  return (
    <div className="animate-fade-in space-y-5">

      {/* Cabeçalho */}
      <div className="rounded-2xl bg-white border border-stone-200 p-5 shadow-soft">
        <h2 className="font-display text-lg font-bold text-stone-800 mb-0.5">
          Orientações ao(à) Professor(a)
        </h2>
        <p className="text-xs text-stone-400 font-bold">
          Objetivos, ação esperada da criança e consciência fonológica por aula
        </p>
      </div>

      {/* ══ CADERNO DE ATIVIDADES ══════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden border-2 border-blue-200 shadow-soft">
        <div className="px-4 py-3 flex items-center gap-3 border-b border-blue-200" style={{ background: 'linear-gradient(90deg, #1a3a7a, #2a5ab0)' }}>
          <BookOpen className="w-5 h-5 text-white flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-sm font-black text-white">Caderno de Atividades — Material Impresso</h3>
            <p className="text-[10px] text-white/60 font-bold mt-0.5">
              Momento 16 · Cada aluno recebe o caderno físico · Aula {lessonNum} de 4
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg px-3 py-1.5 text-[10px] font-black transition-colors"
          >
            <Printer className="w-3 h-3" />
            PDF em breve
          </button>
        </div>

        <div className="bg-blue-50 p-4 space-y-4">

          {/* Aviso sobre o material */}
          <div className="bg-blue-100 border border-blue-200 rounded-xl p-3 flex items-start gap-2.5">
            <span className="text-lg flex-shrink-0">📋</span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-blue-700 mb-1">O que é o Caderno de Atividades</p>
              <p className="text-xs text-blue-800 leading-relaxed">
                O Caderno de Atividades é um <strong>material impresso e ilustrado</strong> entregue a cada aluno.
                Contém 4 atividades — uma por aula — com a citação âncora da unidade, a instrução ao aluno e
                o espaço para realizar a atividade. A equipe CEEE está finalizando o design gráfico final.
              </p>
            </div>
          </div>

          {/* Preview da atividade da aula atual */}
          <div>
            <p className="text-[9px] font-black uppercase tracking-wider text-blue-600 mb-2">
              📖 Prévia da {caderno.titulo}
            </p>

            {/* Simulação visual da página do caderno */}
            <div className="rounded-xl overflow-hidden border-2 border-blue-300 shadow-md">
              {/* Cabeçalho azul estilo caderno */}
              <div className="px-4 py-3 text-center" style={{ background: 'linear-gradient(180deg, #1a3a7a, #2a5ab0)' }}>
                <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1">AULA {lessonNum}</p>
                <p className="text-xs font-black text-white">{caderno.titulo}</p>
              </div>

              {/* Corpo do caderno */}
              <div className="bg-white px-5 py-4 space-y-3">
                {/* Citação âncora */}
                <div className="text-center">
                  <p className="text-[11px] font-black text-stone-700 leading-relaxed italic">{caderno.citacao}</p>
                  <p className="text-[9px] text-stone-400 font-semibold mt-1">{caderno.fonte}</p>
                </div>

                {/* Linha divisória */}
                <div className="border-t border-stone-200" />

                {/* Instrução ao aluno */}
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-[10px] font-black text-blue-800 leading-relaxed text-center">
                    {caderno.instrucaoAluno}
                  </p>
                </div>

                {/* Espaço da atividade */}
                <div className="border-2 border-dashed border-stone-300 rounded-xl h-24 flex items-center justify-center">
                  <p className="text-[10px] text-stone-300 font-bold italic">[ espaço para a atividade da criança ]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instrução pedagógica para o professor */}
          <div className="bg-white border border-blue-200 rounded-xl p-3">
            <p className="text-[9px] font-black uppercase tracking-wider text-blue-600 mb-2">👩‍🏫 Instrução para o(a) professor(a)</p>
            <p className="text-xs text-stone-600 leading-relaxed mb-2">{caderno.instrucaoProf}</p>
            <div className="flex items-start gap-1.5 text-[10px] text-stone-500">
              <span className="font-black flex-shrink-0">📦</span>
              <span><strong>Materiais:</strong> {caderno.materiais}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══ ORIENTAÇÕES POR AULA ══════════════════════════════════ */}
      <div className="space-y-4">
        {lessonGuidance.map(lesson => (
          <div key={lesson.num} className="rounded-2xl overflow-hidden shadow-soft border border-stone-200">
            <div className="px-4 py-3 flex items-center gap-3 bg-white border-b border-stone-100">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-mono text-sm text-white font-medium flex-shrink-0"
                style={{ backgroundColor: lesson.color }}
              >
                {String(lesson.num).padStart(2, '0')}
              </div>
              <h3 className="text-sm font-black text-stone-800 flex-1">{lesson.title}</h3>
              <span className="text-[10px] font-bold text-stone-400 flex items-center gap-1 bg-cream-100 border border-stone-200 rounded-full px-2 py-0.5">
                <Volume2 className="w-3 h-3" />
                {lesson.fono.sound}
              </span>
            </div>

            <div className="bg-white p-4 space-y-4">
              {lesson.objectives && lesson.objectives.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-600 mb-2.5 pb-1.5 border-b-2 border-brand-100 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" />
                    Objetivos de Aprendizagem
                  </h4>
                  <ul className="space-y-2">
                    {lesson.objectives.map(obj => (
                      <li key={obj.code} className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
                        <span className="text-brand-500 font-black flex-shrink-0 mt-0.5">→</span>
                        <span>
                          <strong className="text-stone-700">{obj.code}</strong> — {obj.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-wider text-brand-600 mb-2.5 pb-1.5 border-b-2 border-brand-100 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  Ação Esperada da Criança
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">{lesson.action}</p>
              </div>

              <div className="bg-brand-50 border border-brand-100 rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-brand-700 mb-1.5">
                  <Volume2 className="w-3 h-3" />
                  Consciência Fonológica — {lesson.fono.sound}
                </div>
                <p className="text-xs text-brand-900 leading-relaxed">{lesson.fono.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
