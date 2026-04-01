import { type ReactNode } from 'react';
import { Clock } from 'lucide-react';

interface BlockSectionProps {
  icon: ReactNode;
  title: string;
  time: string;
  color: string;
  children: ReactNode;
}

export default function BlockSection({ icon, title, time, color, children }: BlockSectionProps) {
  return (
    <div className="mb-4 rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-soft">
      <div className="px-4 py-3 flex items-center gap-2.5 bg-white border-b border-stone-100">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <h3 className="text-[11.5px] font-black text-stone-700 uppercase tracking-wider flex-1">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-[10px] font-extrabold text-stone-400 bg-cream-100 border border-stone-200 rounded-full px-2.5 py-1">
          <Clock className="w-3 h-3" />
          {time}
        </div>
      </div>
      <div className="bg-cream-50 p-2.5">
        {children}
      </div>
    </div>
  );
}
