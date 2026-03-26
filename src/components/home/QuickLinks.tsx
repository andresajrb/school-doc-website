import Link from 'next/link';
import { Library, BookMarked, Clock, Phone, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';

const SECTIONS = [
  {
    href:        '/biblioteca',
    icon:        Library,
    title:       'Biblioteca Virtual',
    description: 'Accede a nuestra colección de recursos digitales organizados por categoría.',
    accent:      'text-school-red-light',
    bg:          'bg-school-red/10',
  },
  {
    href:        '/recursos',
    icon:        BookMarked,
    title:       'Banco de Recursos',
    description: 'Material educativo organizado por año escolar y materia.',
    accent:      'text-school-yellow',
    bg:          'bg-school-yellow/10',
  },
  {
    href:        '/historia',
    icon:        Clock,
    title:       'Nuestra Historia',
    description: 'Conoce a Stella Cechini y la trayectoria de nuestra institución.',
    accent:      'text-purple-400',
    bg:          'bg-purple-900/20',
  },
  {
    href:        '/contacto',
    icon:        Phone,
    title:       'Contacto',
    description: 'Ubicación, correo y formulario para comunicarte con nosotros.',
    accent:      'text-green-400',
    bg:          'bg-green-900/20',
  },
];

export default function QuickLinks() {
  return (
    <section className="section-padding bg-school-surface/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-school-text mb-3">
            ¿Qué estás buscando?
          </h2>
          <p className="text-school-muted max-w-xl mx-auto">
            Accede rápidamente a las secciones principales del sitio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SECTIONS.map(section => {
            const Icon = section.icon;
            return (
              <Link key={section.href} href={section.href} className="group block">
                <Card className="p-6 h-full hover:border-school-border/80 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-card">
                  <div
                    className={`w-10 h-10 rounded-lg ${section.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon size={20} className={section.accent} />
                  </div>
                  <h3 className={`font-display font-semibold text-base mb-2 ${section.accent}`}>
                    {section.title}
                  </h3>
                  <p className="text-school-muted text-sm leading-relaxed mb-4">
                    {section.description}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-xs font-display font-medium ${section.accent}`}>
                    Explorar <ArrowRight size={12} />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
