import type { ResourceType } from '@/lib/resources';

const typeColors: Record<ResourceType, string> = {
  pdf:          'bg-red-900/40 text-red-300 border-red-800',
  video:        'bg-blue-900/40 text-blue-300 border-blue-800',
  presentation: 'bg-purple-900/40 text-purple-300 border-purple-800',
  link:         'bg-green-900/40 text-green-300 border-green-800',
  document:     'bg-yellow-900/40 text-yellow-300 border-yellow-800',
};

const typeLabels: Record<ResourceType, string> = {
  pdf:          'PDF',
  video:        'Video',
  presentation: 'Presentación',
  link:         'Enlace',
  document:     'Documento',
};

interface BadgeProps {
  type: ResourceType;
}

export default function Badge({ type }: BadgeProps) {
  return (
    <span
      className={`
        inline-block px-2 py-0.5 text-xs font-semibold font-display
        rounded border ${typeColors[type]}
      `}
    >
      {typeLabels[type]}
    </span>
  );
}
