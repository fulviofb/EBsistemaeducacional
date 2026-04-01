import type { MomentTemplate } from '../types';

export const BLOCK_A_LABEL = 'Bloco A — Rotina Inicial';
export const BLOCK_A_TIME = '~83 min';
export const BLOCK_B_LABEL = 'Bloco B — Campos de Experiência + Intervalo';
export const BLOCK_B_TIME = '~89 min';
export const BLOCK_C_LABEL = 'Bloco C — Rotina Final';
export const BLOCK_C_TIME = '~15 min';

export const DIFFERENTIATOR_IDS = [16, 21, 22];

export const moments: Record<number, MomentTemplate> = {
  1:  { id:1,  name:'Alegria Cristã',                        duration:'10 min',            color:'#1a5c3a', description:'As crianças são recepcionadas no pátio. Momento coletivo de acolhimento com alegria, canto e celebração cristã. O educador cumprimenta em Esperanto: <strong>Saluton, Bonan Matenon!</strong>', tip:'Utilize músicas e movimentos corporais para envolver todas as crianças desde o primeiro momento. Inclua a saudação em Esperanto de forma lúdica.', campos:['IME','EO01','TS01'], badge:{ label:'Pátio', color:'#1a5c3a' } },
  2:  { id:2,  name:'Saudação em Esperanto',                 duration:'2 min',             color:'#1a7fc1', description:'As crianças aprendem e repetem a saudação em Esperanto de forma lúdica e rítmica.', tip:'<strong>Saluton</strong> (Olá) · <strong>Bonan Matenon</strong> (Bom dia). Pronuncie devagar e peça que repitam em coro com palmas.', campos:['EF01','EF02','IME'], badge:{ label:'Saluton!', color:'#1a7fc1' } },
  3:  { id:3,  name:'Relaxamento, Meditação e Prece',        duration:'8 min',             color:'#1a5c3a', description:'Momento sagrado de harmonia e paz interior. Relaxamento guiado, meditação suave e prece coletiva de elevado teor moral.', tip:'Utilize voz suave e música ambiente calma. Mantenha o ambiente tranquilo e acolhedor.', campos:['IME'] },
  4:  { id:4,  name:'Culto do Evangelho de Lucas',           duration:'10 min',            color:'#1a5c3a', description:'Leitura de um trecho do Evangelho de Lucas (Editora Auta de Souza), com comentários breves e aplicação à vida.', tip:'Selecione trechos curtos adaptados à faixa etária. Pergunte o que entenderam e como podem aplicar no dia a dia.', campos:['IME','EF04','EF08'] },
  5:  { id:5,  name:'Hora das Novidades',                    duration:'10 min',            color:'#1a5c3a', description:'As crianças relatam oralmente, de maneira espontânea, alguma novidade. Estimula o hábito de ouvir e compartilhar.', tip:'Use um microfone de papelão para indicar quem fala. Respeite o tempo de cada criança.', campos:['EF01','EF05','EO04'] },
  6:  { id:6,  name:'Autoavaliação',                         duration:'15 min',            color:'#d4880a', description:'Condução coletiva de autorreflexão sobre as atitudes. Perguntas: <em>Busquei meu anjo guardião? Respeitei meus pais? Cumpri minhas tarefas?</em>', tip:'Faça atividade paralela (massa de modelar) enquanto pequenos grupos realizam a autoavaliação individual no quadro.', campos:['IME','EO01','EO04'], badge:{ label:'★ Espírita', color:'#b07a0a' } },
  7:  { id:7,  name:'Astronomia: Descortinando o Céu',       duration:'10 min',            color:'#1a4a7a', description:'Aplicação do curso Astronomia — Descortinando o Céu. Para 3–5 anos é uma percepção sensorial e espiritual, não abstração científica.', tip:'Conecte à história de Sheilinha: o Portal de Luz e as estrelas que ela via.', campos:['ET01','ET04','IME'] },
  8:  { id:8,  name:'Exploração do Calendário',              duration:'5 min',             color:'#1a4a7a', description:'Trabalho lúdico com o calendário: dia da semana, mês, estações. Integrado ao Pilar de Astronomia.', tip:'Utilize calendário grande e visual na parede. Pergunte: "Hoje é segunda ou terça?"', campos:['ET06','ET07','C001'] },
  9:  { id:9,  name:'Alfabeto e Numerais',                   duration:'5 min',             color:'#1a5c3a', description:'Exploração lúdica do alfabeto e numerais — reconhecimento visual por músicas e padrões.', tip:'Aproveite a quadrinha para destacar letras iniciais. Conecte com a consciência fonológica.', campos:['EF02','ET07','C001','C002'] },
  10: { id:10, name:'Cabeçalho',                             duration:'6 min',             color:'#1a5c3a', description:'O(A) professor(a) transpõe para o quadro os dados do dia (data, escola, turma).', tip:'Escreva lentamente, verbalizando cada letra. As crianças observam e participam oralmente.', campos:['EF09','ET06','C002'] },
  11: { id:11, name:'Chamada',                               duration:'7 min',             color:'#1a5c3a', description:'Momento que aproveita o nome da criança para explorar identidade, pertencimento e contagem.', tip:'Use crachás com fotos. Conte meninos e meninas. Trabalhe posições: quem está na frente? atrás?', campos:['EO05','ET07','ET08','C001'] },
  12: { id:12, name:'Ajudantes do Dia',                      duration:'2 min',             color:'#1a5c3a', description:'Escala entre as crianças para desenvolver responsabilidade, auxílio mútuo e organização coletiva.', tip:'Defina funções claras: merenda, material, fila. Valorize e reconheça cada ajudante publicamente.', campos:['EO03','IME','C003'] },
  13: { id:13, name:'Programa do Dia',                       duration:'3 min',             color:'#1a5c3a', description:'Apresentação da rotina diária por cartazes, detalhando todas as atividades previstas.', tip:'Use imagens e ícones. Pergunte: "O que vem primeiro? E depois?"', campos:['ET06','EF08','C002'] },
  14: { id:14, name:'Quadrinha',                             duration:'5 min',             color:'#1a3a6a', description:'Atividade exclusiva para 3 anos. Trabalha a quadrinha com estratégias: corporal, rítmica, escondida, na lata de histórias.', tip:'Unidade 1: <em>"No mundo, em todo lugar... O nosso segundo lar"</em> — João de Deus. Use gestos para cada verso.', campos:['EF02','TS01','C001'], badge:{ label:'3 anos', color:'#1a7fc1' } },
  15: { id:15, name:'História',                              duration:'12 min',            color:'#d95f0e', description:'Contação da história âncora: <em>A vida futura — A história de Sheilinha e Joaquim</em>. Use estratégias variadas.', tip:'Pause para perguntas sobre personagens, fatos e cenários. Relacione Tia Bernadete ao(à) professor(a) real.', campos:['EF04','EF05','EF08','IME'], badge:{ label:'Sheilinha', color:'#d95f0e' } },
  16: { id:16, name:'Caderno de Atividades',                 duration:'Conf. planejamento', color:'#d4880a', description:'Momento fixo do Caderno de Atividades. <strong>DIFERENCIADOR</strong> — cada aula tem sua atividade específica definida pela CEEE.', tip:'Cada aula tem uma atividade diferente — veja as sugestões no painel lateral.', campos:['TS02','CG05','EF09','C004'], badge:{ label:'📓 Livre', color:'#d4880a' }, isDifferentiator:true },
  17: { id:17, name:'Esperanto — Palavra Foco',              duration:'2 min',             color:'#1a7fc1', description:'Apresentação visual e pronuncia rítmica da palavra do dia em Esperanto.', tip:'Palavra da Unidade 1: <strong>Saluton!</strong> Repita em diferentes ritmos: rápido, devagar, cantado.', campos:['EF01','EF02','IME'], badge:{ label:'Saluton!', color:'#1a7fc1' } },
  18: { id:18, name:'Lanche',                                duration:'15 min',            color:'#d4880a', description:'Momento de alimentação saudável, educação alimentar, higiene e convivência respeitosa.', tip:'Aproveite para trabalhar contagem, cores e texturas dos alimentos. Estimule autonomia.', campos:['EO03','ET01','ET07'] },
  19: { id:19, name:'Recreio',                               duration:'15 min',            color:'#d4880a', description:'Brincadeira livre e socialização no espaço externo. Fundamental para o desenvolvimento motor e social.', tip:'Observe as interações. Intervenha apenas para mediar conflitos. O brincar livre tem valor pedagógico.', campos:['CG01','CG02','CG03','EO03'] },
  20: { id:20, name:'Higiene',                               duration:'15 min',            color:'#d4880a', description:'Práticas de higiene pessoal: lavar as mãos, escovar os dentes, usar o banheiro com autonomia.', tip:'Transforme em ritual com músicas. Molhar → ensaboar → esfregar → enxaguar → secar — é um algoritmo!', campos:['CG04','C002','C003'] },
  21: { id:21, name:'Atividades Artísticas',                 duration:'25 min',            color:'#b5174a', description:'Materialização criativa do aprendizado por desenho, pintura e modelagem. <strong>DIFERENCIADOR</strong> — em consonância com o conteúdo da aula.', tip:'Cada aula tem sua atividade artística específica — veja as sugestões no painel lateral.', campos:['TS02','CG05','EF09','C004'], badge:{ label:'Caderno', color:'#b5174a' }, isDifferentiator:true },
  22: { id:22, name:'Atividades Lúdicas',                    duration:'25 min',            color:'#5e35b1', description:'Brincar direcionado com relação direta ao conteúdo da aula. <strong>DIFERENCIADOR</strong> — planejado para objetivos pedagógicos.', tip:'Cada aula tem suas atividades lúdicas específicas — veja as sugestões no painel lateral.', campos:['CG01','CG02','EO03','C003','C004'], badge:{ label:'Planejado', color:'#5e35b1' }, isDifferentiator:true },
  23: { id:23, name:'Organização da Sala e Harmonização',    duration:'5 min',             color:'#3d2070', description:'As crianças e ajudantes organizam materiais e carteiras, exercitando o zelo pelo ambiente compartilhado.', tip:'Faça em clima tranquilo. Celebre a organização coletiva. Transição para o encerramento.', campos:['EO03','IME','C002'] },
  24: { id:24, name:'Cultivo de Virtudes — Hora do Conto',   duration:'10 min',            color:'#3d2070', description:'Encerramento do dia com leitura e cultivo de sentimentos elevados. Uma obra infantil semeia uma virtude específica.', tip:'Pergunte: "Qual virtude a personagem mostrou?" Encerre com prece coletiva.', campos:['IME','EF04','EF05','EF08'], badge:{ label:'Encerr.', color:'#3d2070' } },
};

export const blockAIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export const blockBIds = [14, 15, 16, 17, -1, 18, 19, 20, 21, 22];
export const blockCIds = [23, 24];
export const allMomentIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

export const CAMPO_COLORS: Record<string, string> = {
  IME: '#2e9959',
  EO:  '#d95f0e',
  CG:  '#1a7fc1',
  TS:  '#b5174a',
  EF:  '#5e35b1',
  ET:  '#d4880a',
  C:   '#0277bd',
};
