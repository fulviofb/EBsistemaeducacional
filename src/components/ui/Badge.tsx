interface BadgeProps {
  label: string;
  color?: string;
  style?: React.CSSProperties;
}

export default function Badge({ label, color, style }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${color || ''}`}
      style={style}
    >
      {label}
    </span>
  );
}
