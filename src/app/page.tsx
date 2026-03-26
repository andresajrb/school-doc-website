import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import QuickLinks from '@/components/home/QuickLinks';

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Sitio web oficial de la U.E.N. Complejo Educativo Stella Cechini. Biblioteca virtual, banco de recursos y más.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickLinks />
      <MissionSection />
    </>
  );
}
