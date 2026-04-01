import { BookOpen, Lock, Sparkles, GraduationCap, Sprout } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';
import { regularUnits, specialUnits } from '../../data/units';
import type { Unit } from '../../types';
import Confetti from '../ui/Confetti';

const unitImages = [
  'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&dpr=1',
  'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&dpr=1',
  'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&dpr=1',
  'https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&dpr=1',
  'https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&dpr=1',
  'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&dpr=1',
  'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&dpr=1',
  'https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&dpr=1',
];

const badgeStyles: Record<string, string> = {
  IME: 'bg-sage-200 text-sage-700 border border-sage-300',
  EO: 'bg-peach-100 text-peach-500 border border-peach-200',
  TS: 'bg-sky-100 text-sky-500 border border-sky-200',
  CG: 'bg-brand-100 text-brand-600 border border-brand-200',
  EF: 'bg-mint-100 text-mint-500 border border-mint-200',
  ET: 'bg-gold-100 text-gold-600 border border-gold-200',
};

function UnitCard({ unit, index, onClick }: { unit: Unit; index: number; onClick?: () => void }) {
  const isAvailable = unit.available;
  const isSpecial = unit.special;

  return (
    <div
      onClick={isAvailable ? onClick : undefined}
      className={`group relative rounded-3xl overflow-hidden transition-all duration-300
        ${isAvailable
          ? 'cursor-pointer hover:-translate-y-2 hover:shadow-elevated'
          : 'opacity-50 cursor-not-allowed'
        }
        bg-white shadow-card`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {!isSpecial && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={unitImages[index % unitImages.length]}
            alt={unit.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <div className={`relative ${isSpecial ? 'p-4' : 'p-5'}`}>
        <Confetti count={8} />

        <div className="relative z-10 flex items-start justify-between mb-2">
          <div className="font-mono text-3xl text-brand-200 leading-none font-medium">
            {isSpecial ? `E${unit.id - 100}` : String(unit.id).padStart(2, '0')}
          </div>
          {isAvailable ? (
            <span className="bg-gold-100 text-gold-700 text-[10px] font-black uppercase tracking-wide px-3 py-1 rounded-full border border-gold-300"
              style={{ fontVariant: 'small-caps' }}
            >
              Disponivel
            </span>
          ) : (
            <span className="flex items-center gap-1 bg-stone-100 text-stone-400 text-[9px] font-black uppercase tracking-wide px-2 py-1 rounded-full">
              <Lock className="w-2.5 h-2.5" />
              Em breve
            </span>
          )}
        </div>

        <h3 className={`relative z-10 font-bold text-brand-700 leading-tight mb-1 ${isSpecial ? 'text-sm' : 'text-lg'}`}>
          {unit.name}
        </h3>

        {unit.subtitle && (
          <p className="relative z-10 text-sm text-stone-400 font-semibold leading-snug mb-3">{unit.subtitle}</p>
        )}

        {unit.badges.length > 0 && (
          <div className="relative z-10 flex gap-1.5 flex-wrap">
            {unit.badges.map((b, i) => (
              <span key={i} className={`text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-lg
                ${isAvailable ? (badgeStyles[b.label] || 'bg-stone-100 text-stone-500') : 'bg-stone-100 text-stone-300 border border-stone-200'}`}>
                {b.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function UnitSelection() {
  const { dispatch } = usePlanner();

  return (
    <div className="fixed inset-0 z-[1000] bg-cream-100 overflow-y-auto">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-50/80 to-transparent" />
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-brand-100/40 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-48 h-48 bg-gold-100/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 py-12 md:py-20">
          <div className="text-center max-w-2xl mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-card flex items-center justify-center">
                  <Sprout className="w-10 h-10 text-sage-500" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gold-400 rounded-full flex items-center justify-center shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-2">
              Guia do{' '}
              <span className="font-display italic text-brand-500">Educador</span>
            </h1>

            <p className="text-base text-stone-400 font-semibold mb-5">
              IEE Euripedes Barsanulfo - Maternal 2 (3 anos)
            </p>

            <div className="inline-flex items-center gap-2.5 bg-white border border-stone-200 rounded-full px-5 py-2.5 shadow-soft">
              <GraduationCap className="w-4 h-4 text-brand-400" />
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-[1.5px]">
                Educacao Infantil
              </span>
            </div>
          </div>

          <div className="w-full max-w-6xl mb-10">
            <div className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-[1.5px] text-stone-400 mb-5">
              <BookOpen className="w-4 h-4 text-brand-400" />
              Aulas Regulares
              <span className="bg-brand-50 text-brand-500 rounded-full px-2.5 py-0.5 text-[10px]">8 unidades</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {regularUnits.map((unit, i) => (
                <UnitCard
                  key={unit.id}
                  unit={unit}
                  index={i}
                  onClick={() => dispatch({ type: 'SELECT_UNIT', unit: unit.id })}
                />
              ))}
            </div>
          </div>

          <div className="w-full max-w-6xl mb-10">
            <div className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-[1.5px] text-stone-400 mb-5">
              <Sparkles className="w-4 h-4 text-gold-400" />
              Aulas Especiais
              <span className="bg-gold-50 text-gold-600 rounded-full px-2.5 py-0.5 text-[10px]">9 unidades</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {specialUnits.map((unit, i) => (
                <UnitCard key={unit.id} unit={unit} index={i} />
              ))}
            </div>
          </div>

          <div className="text-center mt-6 text-xs text-stone-300 font-semibold">
            IEE Euripedes Barsanulfo - Sistema de Ensino Espirita - Maternal 2
          </div>
        </div>
      </div>
    </div>
  );
}
