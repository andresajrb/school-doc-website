'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface Props {
  slug: string;
  label: string;
  available: boolean;
  index: number;
}

export default function BookButton({ slug, label, available, index }: Props) {
  return (
    <Link
      href={`/biblioteca/${slug}`}
      aria-label={`Abrir ${label}`}
      className="group block focus:outline-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: -20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
        whileHover={{ y: -10, rotateY: 5, scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="relative"
        style={{ perspective: 800 }}
      >
        <div className="relative mx-auto w-[120px] sm:w-[140px] md:w-[160px]">
          <div
            className="relative rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden border-2 border-school-yellow/60 group-hover:border-school-yellow transition-colors"
            style={{
              aspectRatio: '3 / 4',
              background:
                'linear-gradient(145deg, #e8d9b0 0%, #d9c69a 45%, #b89968 100%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, rgba(120,80,40,0.2) 0px, rgba(120,80,40,0.2) 1px, transparent 1px, transparent 4px)',
              }}
            />
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-school-red/70 to-transparent" />

            <div className="relative h-full flex flex-col items-center justify-center px-3 text-center">
              <BookOpen
                size={32}
                className="text-school-red mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
              />
              <span className="font-display font-black text-school-red text-base sm:text-lg leading-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                {label}
              </span>
              {!available && (
                <span className="mt-2 text-[10px] font-display font-semibold uppercase tracking-wider text-school-red/70 bg-school-yellow/40 px-2 py-0.5 rounded">
                  Próximamente
                </span>
              )}
            </div>
          </div>
          <div
            className="absolute -bottom-1 left-2 right-2 h-2 rounded-b-sm bg-school-red/30 blur-sm"
            aria-hidden
          />
        </div>
      </motion.div>
    </Link>
  );
}
