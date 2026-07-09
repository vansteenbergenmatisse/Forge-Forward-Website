import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { BOOK_CALL_URL } from "@/lib/constants";

interface Props {
  showPricingLink?: boolean;
  showPriceNote?: boolean;
}

export default function CTA({ showPricingLink = false, showPriceNote = false }: Props) {
  return (
    <section className="bg-navy">
      <Reveal className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(64px,8vw,112px)] flex flex-col items-center text-center">
        <h2 className="font-display font-black text-[clamp(32px,3.6vw,48px)] leading-[1.1] tracking-[-0.01em] text-white m-0">
          Start getting <span className="text-red">booked</span>
        </h2>
        <p className="mt-[18px] text-[17px] leading-[1.6] text-gray-cool max-w-[560px]">
          One 20-minute call. We show you exactly what we&apos;d build for your company. No pitch deck, no contract.{showPriceNote ? ' $297/mo. No setup fee. Cancel anytime.' : ''}
        </p>
        {showPriceNote && (
          <div className="mt-4 text-[14px] font-semibold text-red">
            30-day money-back guarantee, any reason
          </div>
        )}
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <Button href={BOOK_CALL_URL} external variant="light" arrowBadge>Book a Call</Button>
          {showPricingLink && (
            <Link
              href="/pricing"
              className="inline-flex items-center gap-[10px] rounded-full border border-white/25 text-white bg-transparent px-6 py-[14px] text-[15px] font-semibold no-underline hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          )}
        </div>
      </Reveal>
    </section>
  );
}
