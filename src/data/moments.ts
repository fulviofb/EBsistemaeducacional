import type { MomentTemplate } from '../types';

export const BLOCK_A_LABEL = 'Bloco A - Rotina Inicial';
export const BLOCK_A_TIME = '~83 min';
export const BLOCK_B_LABEL = 'Bloco B - Campos de Experiencia + Intervalo';
export const BLOCK_B_TIME = '~89 min';
export const BLOCK_C_LABEL = 'Bloco C - Rotina Final';
export const BLOCK_C_TIME = '~15 min';

export const moments: Record<number, MomentTemplate> = {
  1: { id: 1, name: 'Alegria Crista', duration: '10 min', color: '#1a5c3a', description: 'As criancas sao recepcionadas no patio. Momento coletivo de acolhimento com alegria, canto e celebracao crista. O educador cumprimenta em Esperanto: <strong>Saluton, Bonan Matenon!</strong>', tip: 'Utilize elementos visuais, musicas e movimentos corporais para envolver todas as criancas desde o primeiro momento.', campos: ['IME', 'EO01', 'TS01'], badge: { label: 'Patio', color: '#1a5c3a' } },
  2: { id: 2, name: 'Saudacao em Esperanto', duration: '2 min', color: '#1a7fc1', description: 'As criancas aprendem e repetem a saudacao em Esperanto de forma ludica e ritmica.', tip: '<strong>Saluton</strong> (Ola) - <strong>Bonan Matenon</strong> (Bom dia). Pronuncie devagar e peca que repitam em coro.', campos: ['EF01', 'EF02', 'IME'], badge: { label: 'Saluton!', color: '#1a7fc1' } },
  3: { id: 3, name: 'Relaxamento, Meditacao e Prece', duration: '8 min', color: '#1a5c3a', description: 'Momento sagrado de harmonia e paz interior. Relaxamento guiado, meditacao suave e prece coletiva.', tip: 'Utilize voz suave e musica ambiente calma. Momento de conexao espiritual - mantenha o ambiente tranquilo.', campos: ['IME'] },
  4: { id: 4, name: 'Culto do Evangelho de Lucas', duration: '10 min', color: '#1a5c3a', description: 'Leitura de um trecho do Evangelho de Lucas (Editora Auta de Souza), com comentarios breves.', tip: 'Selecione trechos curtos adaptados a faixa etaria. Pergunte o que entenderam e como aplicar no dia a dia.', campos: ['IME', 'EF04', 'EF08'] },
  5: { id: 5, name: 'Hora das Novidades', duration: '10 min', color: '#1a5c3a', description: 'As criancas relatam oralmente, de maneira espontanea, alguma novidade.', tip: 'Use um microfone de papelao para indicar quem fala. Respeite o tempo de cada crianca.', campos: ['EF01', 'EF05', 'EO04'] },
  6: { id: 6, name: 'Autoavaliacao', duration: '15 min', color: '#d4880a', description: 'Autorreflexao coletiva: Busquei meu anjo guardiao? Respeitei meus pais? Cumpri minhas tarefas?', tip: 'Faca atividade paralela (massa de modelar) enquanto pequenos grupos se dirigem ao quadro individualmente.', campos: ['IME', 'EO01', 'EO04'], badge: { label: 'Espirita', color: '#b07a0a' } },
  7: { id: 7, name: 'Astronomia: Descortinando o Ceu', duration: '10 min', color: '#1a4a7a', description: 'Aplicacao do curso Astronomia - Descortinando o Ceu. Para 3-5 anos e percepcao sensorial e espiritual.', tip: 'Conecte a historia de Sheilinha: o Portal de Luz e as estrelas que ela via.', campos: ['ET01', 'ET04', 'IME'] },
  8: { id: 8, name: 'Exploracao do Calendario', duration: '5 min', color: '#1a4a7a', description: 'Trabalho ludico com o calendario: dia da semana, mes, estacoes. Integrado ao Pilar de Astronomia.', tip: 'Utilize calendario grande e visual na parede. Pergunte: "Hoje e segunda ou terca?"', campos: ['ET06', 'ET07', 'C001'] },
  9: { id: 9, name: 'Alfabeto e Numerais', duration: '5 min', color: '#1a5c3a', description: 'Exploracao ludica do alfabeto e numerais - nao e aula formal. Reconhecimento visual por musicas e padroes.', tip: 'Aproveite a quadrinha da unidade para destacar letras iniciais. Conecte com a consciencia fonologica.', campos: ['EF02', 'ET07', 'C001', 'C002'] },
  10: { id: 10, name: 'Cabecalho', duration: '6 min', color: '#1a5c3a', description: 'O(A) professor(a) transpoe para o quadro os dados do dia (data, escola, turma). Estimula percepcao grafica.', tip: 'Escreva lentamente, verbalizando cada letra. As criancas observam e participam oralmente.', campos: ['EF09', 'ET06', 'C002'] },
  11: { id: 11, name: 'Chamada', duration: '7 min', color: '#1a5c3a', description: 'Momento que aproveita o nome da crianca para explorar identidade, pertencimento e contagem.', tip: 'Use crachas com fotos. Conte meninos e meninas. Trabalhe posicoes: quem esta na frente? atras?', campos: ['EO05', 'ET07', 'ET08', 'C001'] },
  12: { id: 12, name: 'Ajudantes do Dia', duration: '2 min', color: '#1a5c3a', description: 'Escala entre as criancas para desenvolver responsabilidade e organizacao coletiva.', tip: 'Defina funcoes claras: merenda, material, fila. Valorize e reconheca cada ajudante publicamente.', campos: ['EO03', 'IME', 'C003'] },
  13: { id: 13, name: 'Programa do Dia', duration: '3 min', color: '#1a5c3a', description: 'Apresentacao da rotina diaria por cartazes, detalhando todas as atividades previstas.', tip: 'Use imagens e icones. Pergunte: "O que vem primeiro? E depois?" - trabalhando sequencia e tempo.', campos: ['ET06', 'EF08', 'C002'] },
  14: { id: 14, name: 'Quadrinha', duration: '5 min', color: '#1a3a6a', description: 'Atividade exclusiva para 3 anos. Trabalha a quadrinha com estrategias: corporal, ritmica, escondida.', tip: 'Unidade 1: "No mundo, em todo lugar... O nosso segundo lar" - Joao de Deus. Use gestos para cada verso.', campos: ['EF02', 'TS01', 'C001'], badge: { label: '3 anos', color: '#1a7fc1' } },
  15: { id: 15, name: 'Historia', duration: '12 min', color: '#d95f0e', description: 'Contacao da historia ancora: A vida futura - A historia de Sheilinha e Joaquim.', tip: 'Pause para perguntas: personagens, fatos, cenarios. Relacione Tia Bernadete ao(a) professor(a) real.', campos: ['EF04', 'EF05', 'EF08', 'IME'], badge: { label: 'Sheilinha', color: '#d95f0e' } },
  16: { id: 16, name: 'Caderno de Atividades', duration: 'Conforme plan.', color: '#d4880a', description: 'Momento fixo do Caderno de Atividades - pode ser aplicado em qualquer periodo do dia. Cada aula tem sua atividade especifica.', tip: 'Aula 1: desenho de gratidao. Aula 2: coracoes + rasgar papel. Aula 3: palitos de picole. Aula 4: desenho livre.', campos: ['TS02', 'CG05', 'EF09', 'C004'], badge: { label: 'Livre', color: '#d4880a' } },
  17: { id: 17, name: 'Esperanto', duration: '2 min', color: '#1a7fc1', description: 'Apresentacao visual e pronuncia ritmica da palavra do dia.', tip: 'Palavra da Unidade 1: <strong>Saluton!</strong> Repita em ritmos diferentes: rapido, devagar, cantado.', campos: ['EF01', 'EF02', 'IME'], badge: { label: 'Saluton!', color: '#1a7fc1' } },
  18: { id: 18, name: 'Lanche', duration: '15 min', color: '#d4880a', description: 'Alimentacao saudavel e educacao alimentar. Momento de higiene, autonomia e convivencia respeitosa.', tip: 'Aproveite para trabalhar contagem, cores e texturas dos alimentos. Estimule autonomia.', campos: ['EO03', 'ET01', 'ET07'] },
  19: { id: 19, name: 'Recreio', duration: '15 min', color: '#d4880a', description: 'Brincadeira livre e socializacao. Fundamental para desenvolvimento motor, emocional e social.', tip: 'Observe as interacoes. Intervenha apenas para mediar conflitos. O brincar livre tem valor pedagogico.', campos: ['CG01', 'CG02', 'CG03', 'EO03'] },
  20: { id: 20, name: 'Higiene', duration: '15 min', color: '#d4880a', description: 'Lavar as maos, escovar os dentes, usar o banheiro com autonomia.', tip: 'Transforme em ritual com musicas. Molhar > ensaboar > esfregar > enxaguar > secar - e um algoritmo!', campos: ['CG04', 'C002', 'C003'] },
  21: { id: 21, name: 'Atividades Artisticas', duration: '25 min', color: '#b5174a', description: 'Materializacao criativa do aprendizado por desenho, pintura e modelagem - em consonancia com o conteudo da aula.', tip: 'Este momento pode ser combinado com o Caderno de Atividades (momento 16). Planeje qual atividade usara.', campos: ['TS02', 'CG05', 'EF09', 'C004'], badge: { label: 'Caderno', color: '#b5174a' } },
  22: { id: 22, name: 'Atividades Ludicas', duration: '25 min', color: '#228f7e', description: 'Brincar direcionado com relacao direta ao conteudo. Diferente do brincar livre - e planejado para objetivos pedagogicos.', tip: 'Unidade 1: "Adivinha o que eu fiz", circuito com objetos, quebra-cabeca, coral espirita, dobradura do caozinho Lorde.', campos: ['CG01', 'CG02', 'EO03', 'C003', 'C004'], badge: { label: 'Planejado', color: '#228f7e' } },
  23: { id: 23, name: 'Organizacao da Sala e Harmonizacao', duration: '5 min', color: '#1a7365', description: 'As criancas e ajudantes organizam materiais e carteiras, exercitando o zelo pelo ambiente compartilhado.', tip: 'Faca em clima tranquilo. Celebre a organizacao coletiva. Transicao para o momento final de serenidade.', campos: ['EO03', 'IME', 'C002'] },
  24: { id: 24, name: 'Cultivo de Virtudes - Hora do Conto', duration: '10 min', color: '#1a7365', description: 'Encerramento com leitura e cultivo de sentimentos elevados. Uma obra infantil semeia uma virtude especifica.', tip: 'Selecione livros alinhados ao tema. Pergunte: "Qual virtude a personagem mostrou?" Encerre com prece.', campos: ['IME', 'EF04', 'EF05', 'EF08'], badge: { label: 'Encerr.', color: '#1a7365' } },
};

export const blockAIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export const blockBIds = [14, 15, 16, 17, -1, 18, 19, 20, 21, 22];
export const blockCIds = [23, 24];
export const allMomentIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

export const CAMPO_COLORS: Record<string, string> = {
  IME: '#2e9959',
  EO: '#d95f0e',
  CG: '#1a7fc1',
  TS: '#b5174a',
  EF: '#228f7e',
  ET: '#d4880a',
  C: '#0277bd',
};
