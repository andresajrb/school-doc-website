'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookMarked, Library } from 'lucide-react';
import type { YearData } from '@/lib/resources';
import BicentenariaGrid from './BicentenariaGrid';
import ResourceExplorer from './ResourceExplorer';

type Tab = 'bicentenaria' | 'academicos';

interface Props {
  year: YearData;
}

export default function YearTabs({ year }: Props) {
  const [tab, setTab] = useState<Tab>('bicentenaria');

  return (
    <div>
      <div className="inline-flex rounded-lg border border-school-border bg-school-surface p-1 mb-8">
        <TabButton active={tab === 'bicentenaria'} onClick={() => setTab('bicentenaria')}>
          <Library size={16} /> Colección Bicentenaria
        </TabButton>
        <TabButton active={tab === 'academicos'} onClick={() => setTab('academicos')}>
          <BookMarked size={16} /> Recursos Académicos
        </TabButton>
      </div>

      <AnimatePresence mode="wait">
        {tab === 'bicentenaria' ? (
          <motion.div
            key="bicentenaria"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <BicentenariaGrid books={year.bicentenariaBooks} />
          </motion.div>
        ) : (
          <motion.div
            key="academicos"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ResourceExplorer moments={year.moments} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-display font-semibold transition-colors ${
        active
          ? 'bg-school-yellow text-school-red'
          : 'text-school-muted hover:text-school-text'
      }`}
    >
      {children}
    </button>
  );
}
