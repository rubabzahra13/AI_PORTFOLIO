'use client';

import { useEffect, useRef, ReactNode } from 'react';

export type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'blur';

type Props = {
  children: ReactNode;
  variant?: RevealVariant;
};

export function Reveal({ children, variant = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass = variant === 'up' ? 'reveal-up' : `reveal-${variant}`;

  return (
    <div ref={ref} className={`reveal ${variantClass}`}>
      {children}
    </div>
  );
}
