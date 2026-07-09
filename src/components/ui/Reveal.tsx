"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Reveal({ children, delay, className = '', style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    document.documentElement.classList.add('ff-armed');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (delay) el.style.transitionDelay = `${delay}s`;
        el.classList.add('ff-in');
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (delay) el.style.transitionDelay = `${delay}s`;
      el.classList.add('ff-in');
    } else {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`ff-reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
