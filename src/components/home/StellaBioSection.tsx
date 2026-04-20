import Image from 'next/image';
import { Star } from 'lucide-react';
import { STELLA_BIO } from '@/lib/constants';
import Card from '@/components/ui/Card';

export default function StellaBioSection() {
  return (
    <section id="historia" className="section-padding bg-school-surface/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-school-yellow font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestra Historia
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-school-text mb-3">
            ¿Quién fue Stella Cechini?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Card glass className="aspect-[4/3] overflow-hidden order-2 md:order-1">
            <Image
              src="https://ik.imagekit.io/lx0ugzfpov/school-doc-website/stella-photo.png"
              alt="Stella Cechini"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </Card>

          <div className="space-y-5 order-1 md:order-2">
            <div className="flex items-center gap-3">
              <Star size={20} className="text-school-yellow" />
              <h3 className="font-display font-bold text-xl text-school-text">
                Una figura influyente de la educación larense
              </h3>
            </div>
            <p className="text-school-muted leading-relaxed text-base">{STELLA_BIO}</p>
            <p className="text-school-muted leading-relaxed text-base">
              Su legado pedagógico sigue vivo en cada estudiante que pasa por las aulas de la
              institución que orgullosamente lleva su nombre, formando generaciones de ciudadanos
              comprometidos con los valores éticos y el amor por el conocimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
