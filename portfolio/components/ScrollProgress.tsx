'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setWidth(height > 0 ? (winScroll / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 origin-left transition-[transform] duration-150 ease-out"
      style={{ transform: `scaleX(${width / 100})` }}
      aria-hidden
    />
  );
}
