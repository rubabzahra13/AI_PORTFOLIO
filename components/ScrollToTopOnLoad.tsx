'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * When the site loads or user navigates to home, force scroll to top so the hero is visible.
 * Runs multiple times after mount to override any late scroll restoration or framework behavior.
 */
export function ScrollToTopOnLoad() {
  const pathname = usePathname();
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isHome = pathname === '/';
    const hasHash = window.location.hash && window.location.hash !== '#';
    if (!isHome || hasHash) return;

    function scrollTop() {
      window.scrollTo(0, 0);
    }

    scrollTop();
    requestAnimationFrame(scrollTop);

    // Keep forcing scroll to top; something (browser or React) is scrolling down after we run
    const delays = [0, 50, 150, 350, 600, 1000];
    timeoutsRef.current = delays.map((delay) =>
      setTimeout(scrollTop, delay)
    );

    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, [pathname]);

  return null;
}
