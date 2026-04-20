import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { resourcesByYear, getYearBySlug } from '@/lib/resources';
import YearTabs from '@/components/biblioteca/YearTabs';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return resourcesByYear.map(y => ({ slug: y.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const year = getYearBySlug(slug);
  return {
    title: year ? `${year.label} · Banco de Recursos` : 'Año no encontrado',
  };
}

export default async function YearPage({ params }: Props) {
  const { slug } = await params;
  const year = getYearBySlug(slug);
  if (!year) notFound();

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <section className="border-b border-school-border bg-school-surface/30">
        <div className="container-max px-6 py-6">
          <Link
            href="/biblioteca"
            className="inline-flex items-center gap-1.5 text-school-muted hover:text-school-yellow text-sm font-display mb-3 transition-colors"
          >
            <ArrowLeft size={14} /> Volver al Banco de Recursos
          </Link>
          <nav className="flex items-center gap-1.5 text-sm text-school-muted mb-3 font-display">
            <Link href="/" className="hover:text-school-text transition-colors">
              Biblioteca Virtual
            </Link>
            <ChevronRight size={14} />
            <Link href="/biblioteca" className="hover:text-school-text transition-colors">
              Banco de Recursos
            </Link>
            <ChevronRight size={14} />
            <span className="text-school-yellow">{year.label}</span>
          </nav>
          <h1
            className="font-display font-black text-school-text leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {year.label}
          </h1>
        </div>
      </section>

      <section className="container-max px-6 py-10">
        {!year.available ? (
          <div className="rounded-xl border border-school-border bg-school-surface p-12 text-center">
            <h2 className="font-display font-bold text-xl text-school-text mb-2">
              Próximamente
            </h2>
            <p className="text-school-muted max-w-lg mx-auto">
              Estamos preparando los recursos de {year.label}. Muy pronto estarán
              disponibles en este espacio.
            </p>
          </div>
        ) : (
          <YearTabs year={year} />
        )}
      </section>
    </div>
  );
}
