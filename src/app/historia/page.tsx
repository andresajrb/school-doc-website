import type { Metadata } from 'next';
import Image from 'next/image';
import { Clock, Target, Eye, Star } from 'lucide-react';
import { SCHOOL, STELLA_BIO } from '@/lib/constants';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Historia Institucional',
  description: 'Conoce la historia de Stella Cechini y la trayectoria de nuestro complejo educativo en Barquisimeto.',
};

const TIMELINE = [
  { year: '1891', event: 'Nace Stella Cechini en Aroa, Yaracuy, de padres italianos.' },
  { year: '~1910', event: 'Inicia su vocación docente, dedicando 37 años a la educación larense.' },
  { year: 'S. XX', event: 'Se convierte en una de las figuras más influyentes de la educación en el Estado Lara.' },
  { year: 'Hoy',   event: 'La institución que lleva su nombre sigue formando ciudadanos críticos y participativos.' },
];

export default function HistoriaPage() {
  return (
    <div className="pt-24 section-padding">
      <div className="container-max space-y-16">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center">
              <Clock size={22} className="text-purple-400" />
            </div>
            <p className="text-school-muted text-sm font-display">Historia</p>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-school-text mb-4">
            Nuestra Historia
          </h1>
          <p className="text-school-muted text-lg max-w-2xl leading-relaxed">
            Conoce a la maestra que dio nombre a nuestra institución y la trayectoria
            del Complejo Educativo en Barquisimeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Star size={20} className="text-school-yellow" />
              <h2 className="font-display font-bold text-2xl text-school-text">
                ¿Quién fue Stella Cechini?
              </h2>
            </div>
            <p className="text-school-muted leading-relaxed text-base">{STELLA_BIO}</p>
            <p className="text-school-muted leading-relaxed text-base">
              Su legado pedagógico sigue vivo en cada estudiante que pasa por las aulas de la
              institución que orgullosamente lleva su nombre, formando generaciones de ciudadanos
              comprometidos con los valores éticos y el amor por el conocimiento.
            </p>
          </div>

          <Card glass className="aspect-[4/3] overflow-hidden">
            <Image
              src="https://ik.imagekit.io/lx0ugzfpov/school-doc-website/stella-photo.png"
              alt="Stella Cechini"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </Card>
        </div>

        <div>
          <h2 className="font-display font-bold text-2xl text-school-text mb-8">
            Línea de Tiempo
          </h2>
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-school-red-light mt-1.5 shrink-0" />
                  {i < TIMELINE.length - 1 && (
                    <div className="w-px flex-1 bg-school-border mt-1" />
                  )}
                </div>
                <div className={`pb-8 ${i === TIMELINE.length - 1 ? 'pb-0' : ''}`}>
                  <span className="font-display font-bold text-school-yellow text-sm">{item.year}</span>
                  <p className="text-school-muted text-sm mt-1 leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-school-red/20 flex items-center justify-center">
                <Target size={22} className="text-school-red-light" />
              </div>
              <h3 className="font-display font-bold text-xl text-school-text">Misión</h3>
            </div>
            <p className="text-school-muted leading-relaxed">{SCHOOL.mission}</p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-school-yellow/10 flex items-center justify-center">
                <Eye size={22} className="text-school-yellow" />
              </div>
              <h3 className="font-display font-bold text-xl text-school-text">Visión</h3>
            </div>
            <p className="text-school-muted leading-relaxed">{SCHOOL.vision}</p>
          </Card>
        </div>

      </div>
    </div>
  );
}
