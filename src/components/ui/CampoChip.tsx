import { getCampoColor } from '../../utils/campos';

export default function CampoChip({ campo }: { campo: string }) {
  return (
    <span
      className="inline-flex text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded text-white"
      style={{ backgroundColor: getCampoColor(campo) }}
    >
      {campo}
    </span>
  );
}
