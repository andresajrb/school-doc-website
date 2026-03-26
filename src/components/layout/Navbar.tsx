'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SCHOOL } from '@/lib/constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="container-max px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="https://ik.imagekit.io/lx0ugzfpov/school-doc-website/logo-school.png"
            alt="Logo Stella Cechini"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-display font-bold text-school-text text-sm leading-tight hidden sm:block">
            {SCHOOL.shortName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-[var(--radius-btn)] text-sm font-display font-medium transition-colors ${
                pathname === link.href
                  ? 'text-school-yellow bg-school-surface'
                  : 'text-school-muted hover:text-school-text hover:bg-school-surface'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(prev => !prev)}
          className="md:hidden p-2 rounded-lg text-school-muted hover:text-school-text hover:bg-school-surface transition-colors"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-school-border">
          <nav className="container-max px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-[var(--radius-btn)] text-sm font-display font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-school-yellow bg-school-surface'
                    : 'text-school-muted hover:text-school-text hover:bg-school-surface'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
