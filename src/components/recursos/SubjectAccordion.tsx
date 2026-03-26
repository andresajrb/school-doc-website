'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import type { Subject } from '@/lib/resources';
import ResourceCard from '@/components/biblioteca/ResourceCard';
import Card from '@/components/ui/Card';

interface SubjectAccordionProps {
  subject: Subject;
}

export default function SubjectAccordion({ subject }: SubjectAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-school-border/20 transition-colors"
      >
        <div className="flex items-center gap-3">
          {open
            ? <ChevronDown size={18} className="text-school-red-light shrink-0" />
            : <ChevronRight size={18} className="text-school-muted shrink-0" />
          }
          <span className="font-display font-semibold text-school-text">{subject.name}</span>
          <span className="text-xs text-school-muted">
            {subject.resources.length} recurso{subject.resources.length !== 1 ? 's' : ''}
          </span>
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-school-border/50">
          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subject.resources.map(r => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
