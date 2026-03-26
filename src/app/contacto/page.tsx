import type { Metadata } from 'next';
import { MapPin, Mail, Phone } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Dirección, correo y formulario de contacto del Complejo Educativo Stella Cechini.',
};

export default function ContactoPage() {
  return (
    <div className="pt-24 section-padding">
      <div className="container-max">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-900/30 flex items-center justify-center">
              <Phone size={22} className="text-green-400" />
            </div>
            <p className="text-school-muted text-sm font-display">Contacto</p>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-school-text mb-4">
            Comunícate con Nosotros
          </h1>
          <p className="text-school-muted text-lg max-w-2xl leading-relaxed">
            Estamos ubicados en Barquisimeto, Estado Lara. Puedes escribirnos por correo
            o visitar las instalaciones directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 space-y-4">
              <h2 className="font-display font-bold text-xl text-school-text">Información</h2>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-school-red/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-school-red-light" />
                </div>
                <div>
                  <p className="text-xs text-school-muted font-display mb-0.5">Dirección</p>
                  <p className="text-school-text text-sm">{SCHOOL.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-school-yellow/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-school-yellow" />
                </div>
                <div>
                  <p className="text-xs text-school-muted font-display mb-0.5">Correo electrónico</p>
                  <a
                    href={`mailto:${SCHOOL.email}`}
                    className="text-school-yellow hover:text-school-yellow-d text-sm transition-colors"
                  >
                    {SCHOOL.email}
                  </a>
                </div>
              </div>
            </Card>

            {/* Mapa (embed Google Maps) */}
            <Card className="overflow-hidden">
              <div className="aspect-video w-full bg-school-surface flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.0!2d-69.316!3d10.066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAzJzU3LjYiTiA2OcKwMTgnNTcuNiJX!5e0!3m2!1ses!2sve!4v1"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0"
                  style={{ minHeight: '240px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Complejo Educativo Stella Cechini"
                />
              </div>
            </Card>
          </div>

          {/* Formulario de contacto (Formspree) */}
          <Card className="p-6">
            <h2 className="font-display font-bold text-xl text-school-text mb-6">
              Enviar mensaje
            </h2>
            <form
              action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-display text-school-muted mb-1.5">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="
                    w-full px-4 py-3 rounded-[var(--radius-btn)]
                    bg-school-bg border border-school-border
                    text-school-text placeholder-school-muted text-sm
                    focus:outline-none focus:border-school-red-light transition-colors
                  "
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-display text-school-muted mb-1.5">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="
                    w-full px-4 py-3 rounded-[var(--radius-btn)]
                    bg-school-bg border border-school-border
                    text-school-text placeholder-school-muted text-sm
                    focus:outline-none focus:border-school-red-light transition-colors
                  "
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-display text-school-muted mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="
                    w-full px-4 py-3 rounded-[var(--radius-btn)]
                    bg-school-bg border border-school-border
                    text-school-text placeholder-school-muted text-sm
                    focus:outline-none focus:border-school-red-light transition-colors
                    resize-none
                  "
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="
                  w-full py-3 rounded-[var(--radius-btn)]
                  bg-school-red-light hover:bg-school-red-hover
                  text-white font-display font-semibold text-sm
                  transition-colors duration-200
                "
              >
                Enviar mensaje
              </button>

              <p className="text-xs text-school-muted text-center">
                Tu mensaje se enviará directamente a nuestro correo institucional.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
