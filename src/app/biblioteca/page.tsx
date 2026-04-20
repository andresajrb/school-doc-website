import type { Metadata } from 'next';
import { resourcesByYear } from '@/lib/resources';
import BookButton from '@/components/biblioteca/BookButton';

export const metadata: Metadata = {
  title: 'Banco de Recursos',
  description:
    'Biblioteca virtual del Complejo Educativo Stella Cechini. Selecciona tu año escolar para acceder a los recursos.',
};

export default function BibliotecaPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&q=80')",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-school-bg via-school-bg/70 to-school-bg" />

        <div className="relative container-max px-6 py-16 text-center">
          <p className="text-school-yellow font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Biblioteca Virtual
          </p>
          <h1
            className="font-display font-black text-school-yellow mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontFamily: 'var(--font-poppins)',
            }}
          >
            Banco de Recursos
          </h1>
          <p className="text-school-muted text-base md:text-lg max-w-2xl mx-auto mb-12">
            Selecciona tu año escolar y explora todos los recursos educativos disponibles
          </p>
        </div>
      </section>

      <section className="container-max px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 justify-items-center">
          {resourcesByYear.map((yr, i) => (
            <BookButton
              key={yr.slug}
              slug={yr.slug}
              label={yr.label}
              available={yr.available}
              index={i}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
