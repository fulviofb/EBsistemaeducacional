import { BookOpen, Lock, Sparkles } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';
import { regularUnits, specialUnits } from '../../data/units';
import type { Unit } from '../../types';
import Confetti from '../ui/Confetti';

const unitImages: string[] = [
  '/images/u1.png','/images/u2.png','/images/u3.png','/images/u4.png',
  '/images/u5.png','/images/u6.png','/images/u7.png','/images/u8.png',
];

const unitGradients: string[] = [
  'linear-gradient(135deg, #eef7f2 0%, #c8e6d0 100%)',
  'linear-gradient(135deg, #fef0f5 0%, #fde0ea 100%)',
  'linear-gradient(135deg, #f0f5fe 0%, #d8e8fc 100%)',
  'linear-gradient(135deg, #eef7f2 0%, #d0eadc 100%)',
  'linear-gradient(135deg, #fff8ee 0%, #fde8c8 100%)',
  'linear-gradient(135deg, #fef0f5 0%, #fde0ea 100%)',
  'linear-gradient(135deg, #f5f0fe 0%, #e8d8fc 100%)',
  'linear-gradient(135deg, #fff8ee 0%, #fde8c8 100%)',
];

const unitEmojis = ['🏫','🌸','🏡','🌿','🤗','👨‍👩‍👧','⭐','💛'];

const badgeStyles: Record<string, string> = {
  IME: 'bg-sage-200 text-sage-700 border border-sage-300',
  EO:  'bg-peach-100 text-peach-500 border border-peach-200',
  TS:  'bg-sky-100 text-sky-500 border border-sky-200',
  CG:  'bg-brand-100 text-brand-600 border border-brand-200',
  EF:  'bg-mint-100 text-mint-500 border border-mint-200',
  ET:  'bg-gold-100 text-gold-600 border border-gold-200',
};

function UnitCard({ unit, index, onClick }: { unit: Unit; index: number; onClick?: () => void }) {
  const isAvailable = unit.available;
  const isSpecial = unit.special;
  const imgSrc = unitImages[index % unitImages.length];
  const gradient = unitGradients[index % unitGradients.length];
  const emoji = unitEmojis[index % unitEmojis.length];

  return (
    <div
      onClick={isAvailable ? onClick : undefined}
      className={`group relative rounded-3xl overflow-hidden transition-all duration-300
        ${isAvailable
          ? 'cursor-pointer hover:-translate-y-2 hover:shadow-elevated'
          : 'opacity-50 cursor-not-allowed'
        } bg-white shadow-card`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {!isSpecial && (
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <img
            src={imgSrc}
            alt={unit.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div
            className="absolute inset-0 items-center justify-center text-6xl"
            style={{ display: 'none', background: gradient }}
          >
            {emoji}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
        </div>
      )}

      <div className={`relative ${isSpecial ? 'p-4' : 'p-5'}`}>
        <Confetti count={8} />
        <div className="relative z-10 flex items-start justify-between mb-2">
          <div className="font-mono text-3xl text-brand-200 leading-none font-medium">
            {isSpecial ? `E${unit.id - 100}` : String(unit.id).padStart(2, '0')}
          </div>
          {isAvailable ? (
            <span
              className="bg-gold-100 text-gold-700 text-[10px] font-black uppercase tracking-wide px-3 py-1 rounded-full border border-gold-300"
              style={{ fontVariant: 'small-caps' }}
            >
              Disponível
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
          <p className="relative z-10 text-sm text-stone-400 font-semibold leading-snug mb-3">
            {unit.subtitle}
          </p>
        )}
        {unit.badges.length > 0 && (
          <div className="relative z-10 flex gap-1.5 flex-wrap">
            {unit.badges.map((b, i) => (
              <span
                key={i}
                className={`text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-lg
                  ${isAvailable
                    ? (badgeStyles[b.label] || 'bg-stone-100 text-stone-500')
                    : 'bg-stone-100 text-stone-300 border border-stone-200'
                  }`}
              >
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

          {/* Hero — logo completa */}
          <div className="text-center max-w-2xl mb-12">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/images/logo_v1_vertical.png"
                alt="Eurípedes Barsanulfo — Sistema de Educação"
                className="h-56 w-auto drop-shadow-md"
                onError={(e) => {
                  // Fallback se a imagem não carregar ainda
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = 'flex';
                }}
              />
              {/* Fallback enquanto imagem não está disponível */}
              <div className="hidden flex-col items-center justify-center gap-2">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-card flex items-center justify-center">
                  <span className="text-4xl">🌱</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-2">
              Guia do{' '}
              <span className="font-display italic text-brand-500">Educador</span>
            </h1>

            <p className="text-sm text-stone-400 font-medium mb-6">
              Educação Infantil · A partir de 3 anos
            </p>

            <div className="inline-flex items-center gap-2.5 bg-white border border-stone-200 rounded-full px-5 py-2.5 shadow-soft">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-[1.5px]">
                📖 Educação Infantil
              </span>
            </div>
          </div>

          {/* Aulas Regulares */}
          <div className="w-full max-w-6xl mb-10">
            <div className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-[1.5px] text-stone-400 mb-5">
              <BookOpen className="w-4 h-4 text-brand-400" />
              Unidades Regulares
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

          {/* Aulas Especiais */}
          <div className="w-full max-w-6xl mb-10">
            <div className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-[1.5px] text-stone-400 mb-5">
              <Sparkles className="w-4 h-4 text-gold-400" />
              Unidades Especiais
              <span className="bg-gold-50 text-gold-600 rounded-full px-2.5 py-0.5 text-[10px]">9 unidades · Datas comemorativas</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {specialUnits.map((unit, i) => (
                <UnitCard key={unit.id} unit={unit} index={i} />
              ))}
            </div>
          </div>

          <div className="text-center mt-6 text-xs text-stone-300 font-semibold">
            Eurípedes Barsanulfo · Sistema Educacional · Educação Infantil
          </div>
        </div>
      </div>
    </div>
  );
}
