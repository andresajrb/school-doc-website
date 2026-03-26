import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';
import { SCHOOL, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-school-surface border-t border-school-border mt-auto">
      <div className="container-max px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://ik.imagekit.io/lx0ugzfpov/school-doc-website/logo-school.png"
                alt="Logo Stella Cechini"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-display font-bold text-school-text text-sm leading-tight">
                {SCHOOL.shortName}
              </span>
            </div>
            <p className="text-school-muted text-sm leading-relaxed">
              Formando ciudadanos críticos y participativos en Barquisimeto, Estado Lara.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-school-text mb-4">Navegación</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-school-muted hover:text-school-yellow text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-school-text mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-school-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-school-red-light" />
                <span>{SCHOOL.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-school-muted">
                <Mail size={16} className="shrink-0 text-school-red-light" />
                <a
                  href={`mailto:${SCHOOL.email}`}
                  className="hover:text-school-yellow transition-colors"
                >
                  {SCHOOL.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-school-border text-center text-school-muted text-xs">
          © {new Date().getFullYear()} {SCHOOL.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
