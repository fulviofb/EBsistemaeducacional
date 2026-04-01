import { BookOpen, Music, Star } from 'lucide-react';

const quotes = [
  {
    text: '"Recolhemo-la nos bracos, carregando-a como um fardo precioso e a levamos para o Posto de Socorro que, com imensa ternura, recebe as criancas recem desencarnadas da Terra."',
    source: 'MEIMEI (Espirito). A vida futura - A historia de Sheilinha e Joaquim. Editora Espirita Meimei, 1988.',
  },
  {
    text: '"A escola e o santuario da revelacao divina. Dentro dela a mente humana retoma os tesouros do passado e entra em contato com as grandes vozes da sabedoria para a sublime ascensao no amor."',
    source: 'AUTORES DIVERSOS (Espiritos). Dicionario da alma. Francisco Candido Xavier. FEB, 1990.',
  },
  {
    text: '"A escola e um centro de inducao espiritual, onde os mestres de hoje continuam as tarefas dos instrutores de ontem."',
    source: 'EMMANUEL (Espirito). Pensamento e vida. Francisco Candido Xavier. FEB, 1991.',
  },
  {
    text: '"A funcao das professoras e a de plasmar, com alegria, nas mentes que desabrocham, as proveitosas licoes do Chao de Rosas."',
    source: 'SCHEILLA (Espirito). Chao de rosas. Joao Nunes Maia. Editora Espirita Fonte Viva, 1986.',
  },
];

export default function SpiritualContent() {
  return (
    <div className="animate-fade-in">
      <div className="rounded-2xl bg-white border border-stone-200 p-5 mb-5 shadow-soft">
        <h2 className="font-display text-lg font-bold text-stone-800 mb-0.5">
          Conteudo Espirita - Unidade 1
        </h2>
        <p className="text-xs text-stone-400 font-bold">Citacoes, quadrinha e atitude a desenvolver</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        {quotes.map((q, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-2xl p-4 shadow-soft" style={{ borderLeft: '4px solid #4a9354' }}>
            <blockquote className="font-display text-sm text-stone-700 leading-relaxed italic mb-2">
              {q.text}
            </blockquote>
            <div className="flex items-start gap-1.5 text-[11px] text-stone-400 font-extrabold">
              <BookOpen className="w-3 h-3 flex-shrink-0 mt-0.5" />
              {q.source}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center mb-4 shadow-soft">
        <div className="flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-[1.5px] text-sage-600 mb-3">
          <Music className="w-3.5 h-3.5" />
          Quadrinha da Unidade - Joao de Deus
        </div>
        <p className="font-display text-base text-stone-700 leading-[2] italic">
          "No mundo, em todo lugar,<br />
          Seja no campo ou na vila,<br />
          Temos na escola tranquila<br />
          O nosso segundo lar."
        </p>
        <div className="text-[11px] text-gold-600 font-extrabold mt-3 flex items-center justify-center gap-1.5">
          <BookOpen className="w-3 h-3" />
          Jardim da Infancia - Francisco Candido Xavier - FEB, 1994
        </div>
      </div>

      <div className="bg-gold-50 border border-gold-200 rounded-2xl p-5 shadow-soft">
        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-gold-700 mb-2">
          <Star className="w-3.5 h-3.5" />
          Atitude a desenvolver - Meta da Unidade 1
        </div>
        <p className="text-[13px] text-gold-900 font-bold leading-relaxed">
          Brincar com os(as) colegas demonstrando <strong>companheirismo</strong> e auxiliar o(a) professor(a) em alguma <strong>atividade na escola</strong>.
        </p>
      </div>
    </div>
  );
}
