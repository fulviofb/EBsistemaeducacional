import type { Unit } from '../types';

export const regularUnits: Unit[] = [
  {
    id: 1,
    name: 'Amar a Escola',
    subtitle: 'A escola, o(a) professor(a) e os(as) colegas · Aulas 1–4',
    badges: [
      { label: 'IME', color: 'bg-sage-700 text-white' },
      { label: 'EO',  color: 'bg-earth-500 text-white' },
      { label: 'TS',  color: 'bg-rose-500 text-white' },
    ],
    available: true,
  },
  {
    id: 2,
    name: 'Amar a Vida',
    subtitle: 'A gestação, o nascimento e a alegria de existir',
    badges: [
      { label: 'IME', color: 'bg-white/20 text-white/60' },
      { label: 'EO',  color: 'bg-white/20 text-white/60' },
    ],
    available: false,
  },
  {
    id: 3,
    name: 'Amar o Anjo do Meu Lar',
    subtitle: 'Papai, mamãe, irmãos e a família espiritual',
    badges: [
      { label: 'IME', color: 'bg-white/20 text-white/60' },
      { label: 'EF',  color: 'bg-white/20 text-white/60' },
    ],
    available: false,
  },
  {
    id: 4,
    name: 'Cuidar do Corpo e do Espírito',
    subtitle: 'Saúde, higiene e bem-estar espiritual',
    badges: [
      { label: 'CG',  color: 'bg-white/20 text-white/60' },
      { label: 'IME', color: 'bg-white/20 text-white/60' },
    ],
    available: false,
  },
  {
    id: 5,
    name: 'Amar Quem Cuida de Mim',
    subtitle: 'Gratidão pelos cuidadores e protetores',
    badges: [
      { label: 'EO',  color: 'bg-white/20 text-white/60' },
      { label: 'IME', color: 'bg-white/20 text-white/60' },
    ],
    available: false,
  },
  {
    id: 6,
    name: 'Amar Minha Família e o Próximo',
    subtitle: 'Convivência, partilha e fraternidade',
    badges: [
      { label: 'EO', color: 'bg-white/20 text-white/60' },
      { label: 'ET', color: 'bg-white/20 text-white/60' },
    ],
    available: false,
  },
  {
    id: 7,
    name: 'Amar a Deus',
    subtitle: 'A Paternidade Divina e a criação do universo',
    badges: [
      { label: 'IME', color: 'bg-white/20 text-white/60' },
      { label: 'ET',  color: 'bg-white/20 text-white/60' },
    ],
    available: false,
  },
  {
    id: 8,
    name: 'Jesus é o Amor e Alegria da Minha Vida',
    subtitle: 'O Mestre, o exemplo e o amor de Jesus',
    badges: [
      { label: 'IME', color: 'bg-white/20 text-white/60' },
      { label: 'EF',  color: 'bg-white/20 text-white/60' },
    ],
    available: false,
  },
];

export const specialUnits: Unit[] = [
  { id: 101, name: 'Acolhimento e Recepção',     subtitle: '', badges: [], available: false, special: true },
  { id: 102, name: 'Carnaval',                    subtitle: '', badges: [], available: false, special: true },
  { id: 103, name: 'Páscoa',                      subtitle: '', badges: [], available: false, special: true },
  { id: 104, name: 'Dia das Mães',                subtitle: '', badges: [], available: false, special: true },
  { id: 105, name: 'Escola, Presente de Deus',    subtitle: '', badges: [], available: false, special: true },
  { id: 106, name: 'Festejos Juninos',             subtitle: '', badges: [], available: false, special: true },
  { id: 107, name: 'Dia dos Pais',                subtitle: '', badges: [], available: false, special: true },
  { id: 108, name: 'Dia da Criança',              subtitle: '', badges: [], available: false, special: true },
  { id: 109, name: 'Natal',                       subtitle: '', badges: [], available: false, special: true },
];
