"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BOOK_CALL_URL } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-ivory border-b border-hairline-warm transition-shadow duration-200${scrolled ? ' shadow-md' : ''}`}>
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] h-[84px] flex items-center gap-[clamp(16px,3vw,40px)]">
        <Link href="/" className="flex items-center gap-2 flex-none">
          <img
            src="/logos/ff-horizontal-charcoal.svg"
            alt="ForgeForward"
            width={168}
            height={56}
            loading="eager"
          />
        </Link>

        <nav className="ff-nav-links flex gap-[clamp(16px,2.5vw,32px)] ml-auto items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium text-[15px] no-underline transition-colors ${href === pathname ? 'text-navy' : 'text-slate'}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto max-[760px]:hidden inline-flex items-center gap-[10px] rounded-full font-semibold whitespace-nowrap flex-shrink-0 transition-[background,transform,box-shadow] duration-150 ease-out active:scale-[0.98] cursor-pointer bg-navy text-white shadow-[0_10px_24px_rgba(11,16,32,0.28)] hover:bg-navy-deep px-[22px] py-3 text-sm"
        >
          Book a Call
        </a>

        <button
          onClick={() => setMenuOpen(o => !o)}
          className="ff-nav-toggle hidden flex-none items-center justify-center w-10 h-10 rounded-[10px] bg-white border border-hairline transition-[background,transform] duration-150 hover:bg-ivory-hover active:scale-[0.94] cursor-pointer"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} color="#0B1020" /> : <Menu size={20} color="#0B1020" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-hairline-warm bg-ivory px-[clamp(20px,4vw,64px)] pt-4 pb-6 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 px-1 no-underline border-b border-hairline text-base transition-colors ${href === pathname ? 'font-bold text-navy' : 'font-medium text-navy'}`}
            >
              {label}
            </Link>
          ))}
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full font-semibold bg-navy text-white px-[22px] py-3 text-sm"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
