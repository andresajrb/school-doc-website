import Link from 'next/link';
import { ExternalLink, FileText, Video, Presentation, Link2, File } from 'lucide-react';
import type { Resource, ResourceType } from '@/lib/resources';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const TYPE_ICONS: Record<ResourceType, React.ElementType> = {
  pdf:          FileText,
  video:        Video,
  presentation: Presentation,
  link:         Link2,
  document:     File,
};

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = TYPE_ICONS[resource.type];

  return (
    <Card className="p-5 flex flex-col gap-3 hover:-translate-y-0.5 hover:border-school-border/80 transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="w-9 h-9 rounded-lg bg-school-surface flex items-center justify-center shrink-0 border border-school-border">
          <Icon size={18} className="text-school-muted" />
        </div>
        <Badge type={resource.type} />
      </div>

      <div>
        <h3 className="font-display font-semibold text-sm text-school-text leading-snug mb-1">
          {resource.title}
        </h3>
        <p className="text-xs text-school-muted">
          {resource.subject} · {resource.year}° Año
        </p>
      </div>

      {resource.description && (
        <p className="text-xs text-school-muted leading-relaxed line-clamp-2">
          {resource.description}
        </p>
      )}

      {resource.tags && resource.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {resource.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-school-bg border border-school-border text-school-muted text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <Link
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-auto inline-flex items-center gap-1.5 text-xs font-display font-semibold
          text-school-red-light hover:text-school-red-hover transition-colors
        "
      >
        Abrir recurso
        <ExternalLink size={12} />
      </Link>
    </Card>
  );
}
