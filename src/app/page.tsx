import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import StellaBioSection from '@/components/home/StellaBioSection';
import MissionSection from '@/components/home/MissionSection';

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Sitio web oficial de la U.E.N. Complejo Educativo Stella Cechini. Biblioteca virtual y banco de recursos educativos.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StellaBioSection />
      <MissionSection />
    </>
  );
}
