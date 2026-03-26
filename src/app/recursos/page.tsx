import type { Metadata } from 'next';
import { BookMarked } from 'lucide-react';
import { resourcesByYear } from '@/lib/resources';
import YearTabs from '@/components/recursos/YearTabs';

export const metadata: Metadata = {
  title: 'Banco de Recursos',
  description: 'Material educativo organizado por año escolar y materia para Primaria y Media.',
};

export default function RecursosPage() {
  return (
    <div className="pt-24 section-padding">
      <div className="container-max">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-school-yellow/10 flex items-center justify-center">
              <BookMarked size={22} className="text-school-yellow" />
            </div>
            <p className="text-school-muted text-sm font-display">Banco de Recursos</p>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-school-text mb-4">
            Recursos por Año
          </h1>
          <p className="text-school-muted text-lg max-w-2xl leading-relaxed">
            Selecciona tu año escolar y explora el material educativo disponible
            por materia. Todos los recursos abren en una nueva pestaña.
          </p>
        </div>

        <YearTabs yearResources={resourcesByYear} />
      </div>
    </div>
  );
}
