'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  /** Delay in ms before the transition starts — use for staggered children */
  delay?: number;
  className?: string;
  /** Direction the element travels from as it fades in */
  direction?: 'up' | 'none';
  /** How far into view before triggering (0–1) */
  threshold?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  threshold = 0.12,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0px)'
          : direction === 'up'
          ? 'translateY(22px)'
          : 'translateY(0px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
