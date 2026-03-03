import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nuzhat Rubab Zahra | AI Engineer',
  description:
    'Portfolio of Nuzhat Rubab Zahra — AI Engineer. Agentic AI, RAG, multi-LLM systems, ML pipelines. Full-stack and automations in separate showcase.',
  openGraph: {
    title: 'Nuzhat Rubab Zahra | AI Engineer',
    description: 'AI Engineer portfolio: agentic AI, RAG, multi-LLM systems. AI-Alchemist, Content Strategy Agent, Video Transcription. Production AI that ships.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-sans min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
