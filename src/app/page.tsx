'use client';

import { Navbar, Footer } from '@/components/layout';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  CertificatesSection,
  GallerySection,
  ContactSection,
} from '@/components/sections';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />
      <main className="relative min-h-screen overflow-hidden noise-overlay">
        <Navbar />

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <GallerySection />
        <ContactSection />

        <Footer />
      </main>
    </>
  );
}
