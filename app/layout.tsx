import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTopOnLoad } from '@/components/ScrollToTopOnLoad';

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
    'Portfolio of Nuzhat Rubab Zahra, AI Engineer. Agentic AI, RAG, multi-LLM systems, ML pipelines. Full-stack and automations in separate showcase.',
  openGraph: {
    title: 'Nuzhat Rubab Zahra | AI Engineer',
    description: 'AI Engineer portfolio: agentic AI, RAG, multi-LLM systems. Psychology-Driven Decision Intelligence Agent, Content Strategy Agent, Video Transcription. Production AI that ships.',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  if (typeof window === 'undefined') return;
  if (window.history.scrollRestoration) window.history.scrollRestoration = 'manual';
  function goTop() {
    var p = window.location.pathname, h = window.location.hash;
    if ((p === '/' || p === '') && (!h || h === '#')) window.scrollTo(0, 0);
  }
  goTop();
  window.addEventListener('load', goTop);
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) goTop();
  });
})();
            `.trim(),
          }}
        />
        <ScrollToTopOnLoad />
        <ScrollProgress />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
