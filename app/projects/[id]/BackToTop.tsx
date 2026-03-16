'use client';

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
    >
      Back to top ↑
    </button>
  );
}
