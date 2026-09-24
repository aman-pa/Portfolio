import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            setTimeout(() => setIsRevealed(true), delayMs);
          } else {
            setIsRevealed(true);
          }
        } else {
          // Reset so it re-animates and throws up every time you scroll back into view
          setIsRevealed(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${isRevealed ? 'is-revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
