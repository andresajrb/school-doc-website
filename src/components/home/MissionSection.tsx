import { Target, Eye } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';
import Card from '@/components/ui/Card';

export default function MissionSection() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-school-text mb-3">
            Misión & Visión
          </h2>
          <p className="text-school-muted max-w-xl mx-auto">
            Los valores que guían nuestra labor educativa cada día.
          </p>
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
    </section>
  );
}
