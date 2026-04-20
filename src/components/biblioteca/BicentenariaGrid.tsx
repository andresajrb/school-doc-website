'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import type { BicentenariaBook } from '@/lib/resources';
import { isPlaceholder } from '@/lib/drive';

interface Props {
  books: BicentenariaBook[];
}

export default function BicentenariaGrid({ books }: Props) {
  if (books.length === 0) {
    return (
      <div className="py-16 text-center">
        <FileText className="mx-auto mb-4 text-school-muted" size={48} />
        <p className="text-school-muted">
          Próximamente: los libros de la Colección Bicentenaria para este año.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
      {books.map((book, i) => {
        const unavailable = isPlaceholder(book.pdfUrl);
        return (
          <motion.a
            key={book.id}
            href={unavailable ? undefined : book.pdfUrl}
            target={unavailable ? undefined : '_blank'}
            rel={unavailable ? undefined : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={!unavailable ? { y: -6, scale: 1.03 } : undefined}
            className={`group relative block rounded-md overflow-hidden bg-school-surface border border-school-border ${
              unavailable ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:border-school-yellow/60'
            } transition-colors`}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                className="object-cover"
              />
              {!unavailable && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-school-yellow text-school-red font-display font-semibold text-xs">
                    <ExternalLink size={12} />
                    Abrir libro
                  </span>
                </div>
              )}
              {unavailable && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-school-red/80 text-school-text text-[10px] font-display font-semibold uppercase tracking-wider">
                  Pendiente
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="font-display font-semibold text-school-text text-sm leading-snug mb-0.5 line-clamp-2">
                {book.title}
              </h3>
              {book.subtitle && (
                <p className="text-school-muted text-xs">{book.subtitle}</p>
              )}
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
