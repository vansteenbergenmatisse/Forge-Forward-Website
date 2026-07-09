"use client";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
  variant?: 'default' | 'faq';
  defaultOpen?: boolean;
}

export default function Accordion({ question, answer, variant = 'default', defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`ff-accordion-item border border-hairline rounded-xl overflow-hidden${open ? ' open' : ''}`}
      data-variant={variant}
    >
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className={`ff-accordion-trigger w-full flex items-center justify-between gap-4 text-left transition-colors duration-150 cursor-pointer ${
          variant === 'faq'
            ? 'px-[26px] py-[18px]'
            : 'px-5 py-[14px] hover:bg-ivory bg-white'
        }`}
      >
        {variant === 'faq' ? (
          <span className="font-bold text-[clamp(16px,1.6vw,19px)] tracking-[-0.005em] font-display leading-snug">
            {question}
          </span>
        ) : (
          <span className="text-[15.5px] font-semibold text-navy leading-snug">{question}</span>
        )}
        <span className={`ff-accordion-icon font-bold text-[22px] leading-none flex-none font-display ${variant === 'faq' ? '' : 'text-red'}`}></span>
      </button>
      {variant === 'faq' ? (
        <div className="answer bg-white px-[26px] py-[22px] text-[15px] leading-[1.7] text-navy whitespace-pre-line">
          {answer}
        </div>
      ) : (
        <div className="answer px-5 pb-[18px] bg-white">
          <div className="text-[14px] leading-[1.6] text-slate">{answer}</div>
        </div>
      )}
    </div>
  );
}
