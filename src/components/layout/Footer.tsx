import Link from "next/link";
import { CONTACT, SOCIAL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-dark-divider">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(48px,6vw,80px)] pb-8 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10">
        <div className="flex flex-col gap-4 items-start">
          <img
            src="/logos/ff-horizontal-red.svg"
            alt="ForgeForward"
            width={168}
            height={53}
            loading="lazy"
          />
          <p className="text-[14px] leading-[1.6] text-gray-cool max-w-[280px] m-0">
            The client-getting machine for US contractors. Monthly or annual plans.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-[13px] font-medium tracking-[0.06em] uppercase text-gray-cool">Pages</div>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="text-white text-[15px] no-underline hover:text-gray-cool transition-colors">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-[13px] font-medium tracking-[0.06em] uppercase text-gray-cool">Contact</div>
          <a href={`mailto:${CONTACT.email}`} className="text-white text-[15px] no-underline hover:text-gray-cool transition-colors">
            {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone}`} className="text-white text-[15px] no-underline hover:text-gray-cool transition-colors">
            {CONTACT.phoneDisplay}
          </a>
          <address className="not-italic text-gray-cool text-[14px] leading-[1.6] mt-1">
            {CONTACT.address.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-[13px] font-medium tracking-[0.06em] uppercase text-gray-cool">Follow</div>
          <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-white text-[15px] no-underline hover:text-gray-cool transition-colors">Facebook</a>
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-white text-[15px] no-underline hover:text-gray-cool transition-colors">Instagram</a>
          <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-white text-[15px] no-underline hover:text-gray-cool transition-colors">YouTube</a>
        </div>
      </div>

      <div className="border-t border-dark-divider">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] py-5 flex justify-between gap-4 flex-wrap">
          <span className="text-[13px] text-gray-cool">&copy; 2026 ForgeForward. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/terms" className="text-[13px] text-gray-cool no-underline hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="text-[13px] text-gray-cool no-underline hover:text-white transition-colors">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
