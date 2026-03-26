'use client';

import { useState } from 'react';
import type { YearResources } from '@/lib/resources';
import SubjectAccordion from './SubjectAccordion';

interface YearTabsProps {
  yearResources: YearResources[];
}

export default function YearTabs({ yearResources }: YearTabsProps) {
  const [activeYear, setActiveYear] = useState<number>(yearResources[0]?.year ?? 1);
  const current = yearResources.find(y => y.year === activeYear);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-school-border pb-4">
        {yearResources.map(yr => (
          <button
            key={yr.year}
            onClick={() => setActiveYear(yr.year)}
            className={`
              px-5 py-2.5 rounded-[var(--radius-btn)] font-display font-semibold text-sm
              transition-all duration-200
              ${activeYear === yr.year
                ? 'bg-school-red-light text-white'
                : 'bg-school-surface border border-school-border text-school-muted hover:text-school-text hover:border-school-red-light'
              }
            `}
          >
            {yr.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="space-y-4">
          <p className="text-school-muted text-sm">
            {current.subjects.length} materia{current.subjects.length !== 1 ? 's' : ''} disponible{current.subjects.length !== 1 ? 's' : ''}
          </p>
          {current.subjects.map(subject => (
            <SubjectAccordion key={subject.name} subject={subject} />
          ))}
        </div>
      )}
    </div>
  );
}
