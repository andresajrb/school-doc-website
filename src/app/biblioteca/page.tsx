import type { Metadata } from 'next';
import { Library } from 'lucide-react';
import { allResources } from '@/lib/resources';
import ResourceGrid from '@/components/biblioteca/ResourceGrid';

export const metadata: Metadata = {
  title: 'Biblioteca Virtual',
  description: 'Explora nuestra colección de recursos educativos digitales: PDFs, videos, presentaciones y más.',
};

export default function BibliotecaPage() {
  return (
    <div className="pt-24 section-padding">
      <div className="container-max">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-school-red/20 flex items-center justify-center">
              <Library size={22} className="text-school-red-light" />
            </div>
            <p className="text-school-muted text-sm font-display">Biblioteca Virtual</p>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-school-text mb-4">
            Recursos Digitales
          </h1>
          <p className="text-school-muted text-lg max-w-2xl leading-relaxed">
            Accede a nuestra colección completa de material educativo. Usa el buscador para
            encontrar exactamente lo que necesitas.
          </p>
          <div className="mt-4 inline-block px-3 py-1 rounded-full bg-school-surface border border-school-border text-school-muted text-sm">
            {allResources.length} recursos disponibles
          </div>
        </div>

        <ResourceGrid resources={allResources} />
      </div>
    </div>
  );
}
