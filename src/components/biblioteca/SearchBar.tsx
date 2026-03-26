'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import type { ResourceType } from '@/lib/resources';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterType?: (type: ResourceType | 'all') => void;
  selectedType?: ResourceType | 'all';
}

const TYPES: { value: ResourceType | 'all'; label: string }[] = [
  { value: 'all',          label: 'Todos' },
  { value: 'pdf',          label: 'PDF' },
  { value: 'video',        label: 'Video' },
  { value: 'presentation', label: 'Presentación' },
  { value: 'document',     label: 'Documento' },
  { value: 'link',         label: 'Enlace' },
];

export default function SearchBar({ onSearch, onFilterType, selectedType = 'all' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-school-muted pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={e => handleChange(e.target.value)}
          placeholder="Buscar recursos por título, materia o etiqueta..."
          className="
            w-full pl-11 pr-11 py-3 rounded-[var(--radius-btn)]
            bg-school-surface border border-school-border
            text-school-text placeholder-school-muted text-sm
            focus:outline-none focus:border-school-red-light
            transition-colors
          "
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-school-muted hover:text-school-text transition-colors"
            aria-label="Limpiar búsqueda"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {onFilterType && (
        <div className="flex flex-wrap gap-2">
          {TYPES.map(t => (
            <button
              key={t.value}
              onClick={() => onFilterType(t.value)}
              className={`
                px-3 py-1.5 rounded-full text-xs font-display font-medium transition-all
                ${selectedType === t.value
                  ? 'bg-school-red-light text-white'
                  : 'bg-school-surface border border-school-border text-school-muted hover:text-school-text'
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
