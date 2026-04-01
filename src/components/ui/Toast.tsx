import { CheckCircle } from 'lucide-react';
import { usePlanner } from '../../context/PlannerContext';

export default function Toast() {
  const { toast } = usePlanner();

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[900] bg-white border border-stone-200 text-stone-800 rounded-2xl
        px-5 py-3 text-sm font-extrabold shadow-elevated flex items-center gap-2.5 pointer-events-none
        transition-all duration-300 ${toast ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
    >
      <CheckCircle className="w-4 h-4 text-sage-500" />
      {toast}
    </div>
  );
}
