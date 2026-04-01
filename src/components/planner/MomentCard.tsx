import { Check, Clock, Pause } from 'lucide-react';

interface MomentCardProps {
  id: number;
  name: string;
  duration: string;
  color: string;
  badge?: { label: string; color: string };
  isActive: boolean;
  isFilled: boolean;
  isBreak?: boolean;
  onClick?: () => void;
}

export default function MomentCard({ id, name, duration, badge, isActive, isFilled, isBreak, onClick }: MomentCardProps) {
  if (isBreak) {
    return (
      <div className="border-2 border-dashed border-brand-200 bg-brand-50/50 rounded-2xl p-3 min-h-[100px] flex flex-col justify-center items-center">
        <Pause className="w-5 h-5 text-brand-300 mb-1" />
        <span className="text-xs font-black text-brand-500 uppercase">Intervalo</span>
        <span className="text-[10px] text-brand-300 font-bold">45 min</span>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`relative group rounded-2xl border-2 p-3.5 min-h-[100px] cursor-pointer
        transition-all duration-200 select-none
        ${isActive
          ? 'bg-brand-500 border-brand-500 shadow-elevated ring-2 ring-brand-300/30 -translate-y-0.5'
          : isFilled
            ? 'bg-mint-50 border-mint-300 hover:border-mint-400 hover:shadow-card hover:-translate-y-0.5'
            : 'bg-white border-stone-200 hover:border-brand-300 hover:shadow-card hover:-translate-y-0.5'
        }`}
    >
      <div className={`absolute top-2.5 right-2.5 w-5 h-5 rounded-full border-2 flex items-center justify-center
        transition-all duration-200
        ${isFilled || isActive
          ? 'bg-gold-400 border-gold-400 text-white'
          : 'bg-white border-stone-300'
        }`}
      >
        {(isFilled || isActive) && <Check className="w-3 h-3" />}
      </div>

      <div className={`font-mono text-xl leading-none font-medium mb-1.5 ${isActive ? 'text-white/40' : isFilled ? 'text-mint-400' : 'text-brand-200'}`}>
        {String(id).padStart(2, '0')}
      </div>

      <div className={`text-[11px] font-extrabold leading-tight mb-2 ${isActive ? 'text-white' : 'text-stone-700'}`}>
        {name}
      </div>

      <div className={`flex items-center gap-1 text-[10px] font-bold ${isActive ? 'text-white/60' : 'text-stone-400'}`}>
        <Clock className="w-3 h-3" />
        {duration}
      </div>

      {badge && (
        <span
          className={`inline-block mt-2 text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full
            ${isActive ? 'bg-white/20 text-white' : 'text-white'}`}
          style={isActive ? undefined : { backgroundColor: badge.color }}
        >
          {badge.label}
        </span>
      )}
    </div>
  );
}
