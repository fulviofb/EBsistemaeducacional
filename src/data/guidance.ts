import type { LessonGuidance, UnitReference, LessonId } from '../types';

// Contexto resumido por aula (para exibir no seletor)
export const LESSON_CONTEXT: Record<LessonId, { label: string; color: string }> = {
  aula1: { label: 'Desenho de gratidão ao professor · Fonologia /b/ — Bernadete',          color: '#1a5c3a' },
  aula2: { label: 'Corações + rasgar e colar papel · Fonologia /E/ — EEEEEE-scola',        color: '#d95f0e' },
  aula3: { label: 'Palitos de picolé + autopercepção · Fonologia EEEEEE-scola Espírita',   color: '#1a7fc1' },
  aula4: { label: 'Desenho livre da semana (memória afetiva) · Fonologia /E/ alegria',     color: '#5e35b1' },
};

export const lessonGuidance: LessonGuidance[] = [
  {
    num: 1,
    title: 'Aula 01 — Desenho de Gratidão · Som /b/ Bernadete',
    color: '#1a5c3a',
    contexto: 'Desenho de gratidão ao(à) professor(a) · Fonologia /b/ — Bernadete',
    objectives: [
      { code: 'EI02EO01', text: 'Demonstrar atitudes de cuidado e solidariedade na interação.' },
      { code: 'EI02CG05', text: 'Coordenação motora fina: desenhar, pintar, rasgar, folhear.' },
      { code: 'EI02TS02', text: 'Explorar materiais variados com diferentes texturas e volumes.' },
    ],
    action: 'A criança realiza a preensão do instrumento de desenho para ocupar o espaço em branco da folha, realizando riscos, garatujas ou formas que representem sua intenção.',
    fono: {
      sound: 'Som /b/ — Bernadete',
      text: 'Peça para as crianças sentirem como os lábios "explodem" ao dizer Bernadete. Repita: "Bernadete, Bala, Boneca, Beijo". Incentive-as a mandar um "Beijo" (com o som /b/) para o(a) professor(a) enquanto dizem a palavra.',
    },
    sugestoes: {
      16: 'Caderno Atividade 1 — Folha de gratidão: a criança faz o desenho do(a) professor(a). Explorar preensão do lápis, riscos e garatujas no espaço da folha.',
      21: 'Painel coletivo com guache: pintar um grande Sol nascendo, marcando o primeiro acolhimento. Cada criança assina com a impressão digital.',
      22: 'Cantigas de roda de apresentação — cada criança canta seu nome no ritmo. "Adivinha o que eu fiz": movimentos corporais para apresentação.',
    },
  },
  {
    num: 2,
    title: 'Aula 02 — Corações + Rasgar Papel · Som /E/ EEEEEE-scola',
    color: '#d95f0e',
    contexto: 'Corações + rasgar e colar papel · Fonologia /E/ — EEEEEE-scola',
    objectives: [
      { code: 'EI02TS02', text: 'Utilizar materiais variados com possibilidades de manipulação.' },
      { code: 'EI02CG05', text: 'Coordenação motora fina: rasgar, colar pedacinhos de papel.' },
      { code: 'EI02ET04', text: 'Identificar relações espaciais (dentro e fora, acima, abaixo).' },
    ],
    action: 'A criança expressa afetividade ao colorir os corações, exercitando a coordenação motora fina pelo rasgar e colar pedacinhos de papel, criando o elo de ligação entre si e o(a) professor(a), reconhecendo a escola como espaço de acolhimento.',
    fono: {
      sound: 'Som /E/ — ESCOLA',
      text: 'Peça para as crianças abrirem a boca em "sorriso largo" e soltarem o som de forma contínua: "EEEEEE-scola", comparando-o ao brilho de uma Estrela. Para trabalhar o ritmo, incentive-as a dar um pulinho ou bater uma palma para cada pedaço da palavra: ES-CO-LA.',
    },
    sugestoes: {
      16: 'Caderno Atividade 2 — Corações para colorir + rasgar e colar pedacinhos de papel dentro dos corações. Trabalhar coordenação motora fina e expressão afetiva.',
      21: 'Dobradura simples de uma janela (Portal de Luz). Colorir por dentro o que imaginam ser a luz do amor e da escola espírita.',
      22: 'Quebra-cabeça mamãe e professora (6–8 peças). Caixa surpresa com objetos da rotina da professora — identificar pelo toque usando venda.',
    },
  },
  {
    num: 3,
    title: 'Aula 03 — Palitos de Picolé · EEEEEE-scola Espírita',
    color: '#1a7fc1',
    contexto: 'Palitos de picolé + autopercepção · Fonologia EEEEEE-scola Espírita',
    objectives: [
      { code: 'EI02TS02', text: 'Utilizar materiais variados de manipulação (palitos, cola).' },
      { code: 'EI02EO03', text: 'Compartilhar os objetos e os espaços com crianças da mesma faixa etária.' },
      { code: 'EI02CG05', text: 'Desenvolver progressivamente as habilidades manuais.' },
    ],
    action: 'A criança deverá participar ativamente da escuta sonora, demonstrar curiosidade e prazer em manipular os materiais (palitos e cola), construir de maneira livre e criativa a estrutura da "Escola" e representar-se através do desenho no espaço destinado, exercitando sua autopercepção e identidade.',
    fono: {
      sound: 'EEEEEE-scola · EEEEEE-spírita',
      text: 'Relacionar ao brilho da luz — como a luz que Sheilinha viu no Portal de Luz. Peça para as crianças repetirem EEEEEE-scola EEEEEE-spírita, sentindo a vibração dos lábios.',
    },
    sugestoes: {
      16: 'Caderno Atividade 3 — Palitos de picolé: construção da "Escola Espírita" sobre o papel. Cole os palitos formando a estrutura. No espaço reservado, desenhe a si mesmo dentro da escola criada.',
      21: 'Desenho da professora em papel pardo tamanho gigante, sendo pintado coletivamente com esponja e guache.',
      22: 'Circuito de movimentos com objetos da sala. Dobradura do cãozinho Lorde. Fantoches simples com meias para encenar a chegada de Sheilinha.',
    },
  },
  {
    num: 4,
    title: 'Aula 04 — Desenho Livre · Encerramento da Semana',
    color: '#5e35b1',
    contexto: 'Desenho livre da semana (memória afetiva) · Fonologia /E/ alegria na escola',
    objectives: [
      { code: 'EI02EO04', text: 'Comunicar-se com os colegas e adultos, buscando fazê-se compreender.' },
      { code: 'EI02TS02', text: 'Explorar materiais variados com possibilidades de manipulação.' },
      { code: 'EI02CG05', text: 'Desenvolver habilidades manuais com controle progressivo.' },
    ],
    action: 'A criança recorda as experiências vivenciadas na escola durante a semana, seleciona um momento de felicidade e o representa por meio do desenho livre, utilizando diferentes cores e formas para comunicar seus sentimentos e preferências.',
    fono: {
      sound: 'Som /E/ — Alegria na Escola',
      text: 'Peça para as crianças abrirem a boca em "sorriso largo" e soltarem o som de forma prolongada: "EEEEEE-scola", relacionando-o à alegria de estar no ambiente escolar. Bater palma para cada pedaço: ES-CO-LA.',
    },
    sugestoes: {
      16: 'Caderno Atividade 4 — Desenho livre representando o momento favorito da semana na escola. Explore cores, formas e texturas com liberdade.',
      21: 'Massinha de modelar caseira: fazer os personagens da história (Joaquim, Sheilinha e Tia Bernadete). Cada criança apresenta seu personagem.',
      22: 'Coral Infantil Espírita: ensaio no "palco" com as crianças cantando e fazendo a coreografia de Saudação.',
    },
  },
];

// Referências da Unidade 1
export const REF_UNIDADE1: UnitReference = {
  historia: 'A vida futura — A história de Sheilinha e Joaquim · Editora Espírita Meimei, 1988',
  quadrinha: '"No mundo, em todo lugar, / Seja no campo ou na vila, / Temos na escola tranquila / O nosso segundo lar." — João de Deus',
  quadrinhaFonte: 'Jardim da Infância · Francisco Cândido Xavier · FEB, 1994',
  esperanto: 'Saluton! (Olá) · Bonan Matenon! (Bom dia)',
  atitude: 'Brincar com os(as) colegas demonstrando companheirismo e auxiliar o(a) professor(a) em alguma atividade na escola.',
  citacoes: [
    { texto: '"Recolhemo-la nos braços, carregando-a como um fardo precioso e a levamos para o Posto de Socorro que, com imensa ternura, recebe as crianças recém desencarnadas da Terra."', fonte: 'MEIMEI (Espírito). A vida futura. Editora Espírita Meimei, 1988.' },
    { texto: '"A escola é um centro de indução espiritual, onde os mestres de hoje continuam as tarefas dos instrutores de ontem."', fonte: 'EMMANUEL (Espírito). Pensamento e vida. FEB, 1991.' },
    { texto: '"A função das professoras é a de plasmar, com alegria, nas mentes que desabrocham, as proveitosas lições do Chão de Rosas."', fonte: 'SCHEILLA (Espírito). Chão de rosas. Editora Espírita Fonte Viva, 1986.' },
  ],
};
