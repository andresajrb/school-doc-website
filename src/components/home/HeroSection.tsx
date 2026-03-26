'use client';

import Link from 'next/link';
import { ArrowRight, Library, BookMarked } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lx0ugzfpov/school-doc-website/school-image.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-school-dark/80 via-school-bg/70 to-school-bg" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-school-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-school-yellow/5 rounded-full blur-3xl" />

      <div className="relative container-max px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-school-border bg-school-surface/60 text-school-muted text-sm font-display mb-8">
          <span className="w-2 h-2 rounded-full bg-school-yellow animate-pulse" />
          Barquisimeto, Estado Lara · Venezuela
        </div>

        <h1
          className="font-display font-black mb-6 text-school-text leading-none"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
        >
          Complejo Educativo
          <br />
          <span className="text-gradient-red">Stella Cechini</span>
        </h1>

        <p className="text-school-muted text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Formación integral con principios humanistas y pedagógicos para el desarrollo intelectual,
          moral y social de nuestra comunidad.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SCHOOL.levels.map(level => (
            <span
              key={level}
              className="px-3 py-1 rounded-full text-xs font-display font-medium border border-school-border text-school-muted bg-school-surface/40"
            >
              {level}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/biblioteca"
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-btn)]
              bg-school-red-light hover:bg-school-red-hover text-white
              font-display font-semibold text-base transition-all duration-200
              hover:shadow-glow hover:-translate-y-0.5
            "
          >
            <Library size={20} />
            Ver Biblioteca
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/recursos"
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-btn)]
              border border-school-border hover:border-school-yellow text-school-muted hover:text-school-yellow
              font-display font-semibold text-base transition-all duration-200
            "
          >
            <BookMarked size={20} />
            Banco de Recursos
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-school-muted animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
