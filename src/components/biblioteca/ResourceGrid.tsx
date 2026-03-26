'use client';

import { useState, useMemo } from 'react';
import type { Resource, ResourceType } from '@/lib/resources';
import SearchBar from './SearchBar';
import ResourceCard from './ResourceCard';
import { PackageOpen } from 'lucide-react';

interface ResourceGridProps {
  resources: Resource[];
}

export default function ResourceGrid({ resources }: ResourceGridProps) {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<ResourceType | 'all'>('all');

  const filtered = useMemo(() => {
    return resources.filter(r => {
      const matchesType = typeFilter === 'all' || r.type === typeFilter;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.subject.toLowerCase().includes(q) ||
        r.tags?.some(t => t.toLowerCase().includes(q));
      return matchesType && matchesQuery;
    });
  }, [resources, query, typeFilter]);

  return (
    <div className="space-y-8">
      <SearchBar
        onSearch={setQuery}
        onFilterType={setTypeFilter}
        selectedType={typeFilter}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-school-muted">
          <PackageOpen size={40} className="mx-auto mb-3 opacity-40" />
          <p className="font-display font-medium">Sin resultados para tu búsqueda</p>
          <p className="text-sm mt-1">Intenta con otro término o elimina los filtros.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(r => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      )}
    </div>
  );
}
