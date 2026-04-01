const shapes = [
  { type: 'circle', color: '#f88a5a', size: 6 },
  { type: 'circle', color: '#5bade6', size: 5 },
  { type: 'circle', color: '#7acda0', size: 7 },
  { type: 'circle', color: '#f9d56b', size: 5 },
  { type: 'circle', color: '#e88ba5', size: 6 },
  { type: 'star', color: '#f0b429', size: 10 },
  { type: 'star', color: '#5b9bd5', size: 8 },
  { type: 'star', color: '#e87341', size: 9 },
  { type: 'leaf', color: '#6aad70', size: 10 },
  { type: 'leaf', color: '#8cc493', size: 8 },
  { type: 'diamond', color: '#fdac84', size: 7 },
  { type: 'diamond', color: '#8ac5ef', size: 6 },
];

function StarSvg({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill={color}>
      <path d="M6 0l1.5 4.5L12 6l-4.5 1.5L6 12 4.5 7.5 0 6l4.5-1.5z" />
    </svg>
  );
}

function LeafSvg({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 10 6" fill={color}>
      <ellipse cx="5" cy="3" rx="5" ry="3" transform="rotate(-30 5 3)" />
    </svg>
  );
}

function DiamondSvg({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 8 8" fill={color}>
      <rect x="1" y="1" width="6" height="6" rx="1" transform="rotate(45 4 4)" />
    </svg>
  );
}

interface ConfettiProps {
  count?: number;
  className?: string;
}

export default function Confetti({ count = 12, className = '' }: ConfettiProps) {
  const items = Array.from({ length: count }, (_, i) => {
    const shape = shapes[i % shapes.length];
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const rotate = Math.random() * 360;
    const opacity = 0.3 + Math.random() * 0.4;

    return { ...shape, top, left, rotate, opacity, key: i };
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {items.map(item => (
        <div
          key={item.key}
          className="absolute"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            transform: `rotate(${item.rotate}deg)`,
            opacity: item.opacity,
          }}
        >
          {item.type === 'circle' && (
            <div
              className="rounded-full"
              style={{ width: item.size, height: item.size, backgroundColor: item.color }}
            />
          )}
          {item.type === 'star' && <StarSvg color={item.color} size={item.size} />}
          {item.type === 'leaf' && <LeafSvg color={item.color} size={item.size} />}
          {item.type === 'diamond' && <DiamondSvg color={item.color} size={item.size} />}
        </div>
      ))}
    </div>
  );
}
