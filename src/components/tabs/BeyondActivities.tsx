import { Rocket, Package, Smartphone, Video, Globe, Wrench } from 'lucide-react';

const beyondCards = [
  {
    num: 1,
    cat: 'Quem cuida de mim?',
    title: 'Meu Album da Escola',
    color: 'from-earth-500 to-earth-400',
    desc: 'Em casa, as familias reunem com a crianca fotos, bilhetinhos e lembrancas da escola. Montam juntos um pequeno album - reforcando o sentido de pertencimento e memoria afetiva.',
    desc2: 'Na escola, as criancas apresentam seu album em uma roda de mostra, praticando expressao oral e escuta ativa.',
    mat: ['Papel sulfite', 'Fotos impressas', 'Cola', 'Canetinhas'],
  },
  {
    num: 2,
    cat: 'O que fazemos na escola?',
    title: 'Mural Coletivo: Nossa Escola',
    color: 'from-sage-700 to-sage-500',
    desc: 'As criancas criam em conjunto um grande painel representando a escola espirita: sala, patio, biblioteca, horta. Cada crianca responsavel por um ambiente.',
    desc2: 'O mural e exposto no corredor. As criancas apresentam sua parte para outras turmas - linguagem oral e colaboracao.',
    mat: ['Papel Kraft', 'Tinta guache', 'Papeis coloridos', 'Cola'],
  },
  {
    num: 3,
    cat: 'Familia na escola',
    title: 'Conversa com Amor',
    color: 'from-teal-600 to-teal-400',
    desc: 'Oriente as familias: "O que aconteceu de mais bonito na escola hoje?" Oucam com atencao - isso fortalece a confianca e o vinculo.',
    desc2: 'Extensao espirita: prece juntos antes de dormir, agradecendo pelo dia de escola e por quem cuida da crianca.',
  },
  {
    num: 4,
    cat: 'Astronomia integrada',
    title: 'O Ceu da Escola Espirita',
    color: 'from-ocean-500 to-ocean-400',
    desc: 'Conecte o momento 7 de Astronomia a unidade: a estrela que brilha pode ser um espirito bom que cuida de nos - como o anjo da guarda.',
    desc2: 'Criancas desenham seu proprio ceu, relacionando ao Portal de Luz da Sheilinha.',
    mat: ['Papel preto', 'Giz de cera branco', 'Tinta branca'],
  },
  {
    num: 5,
    cat: 'Registro da semana',
    title: 'Mural da Semana',
    color: 'from-rose-500 to-rose-400',
    desc: 'Ao final de cada semana, a turma monta coletivamente um mural de memorias: o que aprendemos? Qual o momento mais especial? Qual virtude praticamos?',
    desc2: 'Cada crianca contribui com um desenho ou frase ditada. O mural fica exposto e e atualizado semanalmente.',
  },
  {
    num: 6,
    cat: 'Projeto integrador',
    title: 'Quem Somos Nos?',
    color: 'from-teal-700 to-teal-500',
    desc: 'Conecta Unidade 1 (Amar a Escola) com Unidade 2 (Amar a Vida): cada crianca cria seu "retrato espirita" - foto, nome, caracteristicas, o que gosta na escola e uma estrela que a representa.',
    desc2: 'Os retratos formam uma galeria da turma reforcando identidade e pertencimento.',
  },
];

const digitalItems = [
  { icon: Video, title: 'Narrativa audiovisual', desc: 'Video da historia de Sheilinha para rever em casa de forma original e divertida.' },
  { icon: Globe, title: 'Atividade socioemocional', desc: 'Dinamica em familia incentivando trocas de afeto e gratidao baseadas na trama.' },
  { icon: Wrench, title: 'Atividade maker', desc: 'Atividade manual para fazer em casa com habilidades trabalhadas em aula.' },
];

export default function BeyondActivities() {
  return (
    <div className="animate-fade-in">
      <div className="rounded-2xl bg-white border border-stone-200 p-5 mb-5 flex items-center gap-4 shadow-soft">
        <div className="w-12 h-12 rounded-2xl bg-gold-100 border border-gold-200 flex items-center justify-center flex-shrink-0">
          <Rocket className="w-6 h-6 text-gold-600" />
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-stone-800">Para ir Alem</h2>
          <p className="text-xs text-stone-400 font-bold">Atividades complementares para sala e familia - criatividade e aplicacao pratica</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3 mb-5">
        {beyondCards.map(card => (
          <div key={card.num} className="bg-white rounded-2xl border border-stone-200 shadow-soft overflow-hidden">
            <div className="p-4 border-b border-stone-100">
              <div className="font-mono text-2xl text-brand-200 leading-none font-medium">{card.num}</div>
              <div className="text-[9px] font-black uppercase tracking-wider text-stone-400 mt-1.5 mb-0.5">{card.cat}</div>
              <h4 className="text-sm font-black text-stone-800">{card.title}</h4>
            </div>
            <div className="p-4">
              <p className="text-xs text-stone-500 leading-relaxed mb-2">{card.desc}</p>
              <p className="text-xs text-stone-500 leading-relaxed">{card.desc2}</p>
              {card.mat && (
                <div className="mt-3 bg-cream-50 border border-stone-100 rounded-xl p-3">
                  <div className="text-[9px] font-black uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1">
                    <Package className="w-3 h-3" />
                    Materiais
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {card.mat.map(m => (
                      <span key={m} className="bg-white border border-stone-200 rounded-full px-2 py-0.5 text-[10px] font-bold text-stone-500">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 shadow-soft overflow-hidden">
        <div className="px-5 py-4 flex items-center gap-3 border-b border-stone-100">
          <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-brand-500" />
          </div>
          <div>
            <h3 className="font-display text-[15px] text-stone-800 font-bold">Camada Digital - Extensao em Casa</h3>
            <p className="text-[11px] text-stone-400 font-bold mt-0.5">Conteudo multimidia para complementar a unidade em familia</p>
          </div>
        </div>
        <div className="p-4 grid sm:grid-cols-3 gap-3">
          {digitalItems.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-cream-50 border border-stone-100 rounded-xl p-3.5">
                <Icon className="w-5 h-5 text-brand-400 mb-2" />
                <h5 className="text-xs font-black text-stone-700 mb-1">{item.title}</h5>
                <p className="text-[11px] text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
