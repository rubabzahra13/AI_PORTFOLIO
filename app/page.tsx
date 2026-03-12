import { Hero } from '@/components/Hero';
import { TechStrip } from '@/components/TechStrip';
import { EngineeringDesign } from '@/components/EngineeringDesign';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Reveal } from '@/components/Reveal';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <Reveal variant="up"><EngineeringDesign /></Reveal>
      <Reveal variant="left"><Projects /></Reveal>
      <Reveal variant="right"><About /></Reveal>
      <Reveal variant="scale"><Experience /></Reveal>
      <Reveal variant="left"><Skills /></Reveal>
      <Reveal variant="blur"><Resume /></Reveal>
      <Reveal variant="up"><Contact /></Reveal>
    </>
  );
}
