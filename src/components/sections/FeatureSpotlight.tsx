import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import { BOOK_CALL_URL } from "@/lib/constants";

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

interface Props {
  eyebrow: string;
  headline: string;
  body: string;
  features: FeatureItem[];
  visual: string;
  reverse?: boolean;
}

const iconPaths: Record<string, string> = {
  Gauge: 'M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z',
  Target: 'M13.64 21.97c-.5.24-1.1.03-1.33-.47l-2.18-4.74-2.51 2.02C7.45 18.92 7.28 19 7 19c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1 .26 0 .5.09.7.26l12 9.09c.52.3.69.94.39 1.46-.13.28-.37.48-.64.62l-3.76 1.43 2.18 4.74c.23.5-.01 1.1-.24 1.37z',
  Zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  Repeat: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
  Search: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
  Sparkles: 'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z',
  MapPin: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z',
  TrendingUp: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
  Share2: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z',
  HeartHandshake: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  Star: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
};

function FeatureGrid({ features }: { features: FeatureItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-7 mt-11 w-full max-w-[480px]">
      {features.map(({ icon, title, desc }) => (
        <div key={title} className="flex flex-col gap-[10px] items-start">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-navy" aria-hidden="true">
            <path d={iconPaths[icon] ?? ''} />
          </svg>
          <div className="font-bold text-[16px] text-navy">{title}</div>
          <div className="text-[14px] leading-[1.5] text-slate">{desc}</div>
        </div>
      ))}
    </div>
  );
}

export default function FeatureSpotlight({ eyebrow, headline, body, features, visual, reverse = false }: Props) {
  return (
    <section className="bg-ivory">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(56px,7vw,96px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[clamp(32px,5vw,80px)] items-start md:items-center">

          {/* Text: label + headline + body. On desktop also shows feature grid + CTA. */}
          <Reveal
            className={`flex flex-col items-start ${reverse ? 'md:order-2' : 'md:order-1'}`}
            delay={reverse ? 0.1 : 0}
          >
            <Label>{eyebrow}</Label>
            <h2
              className="font-display font-black text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.01em] text-navy mt-4 mb-0 max-w-[16ch]"
              dangerouslySetInnerHTML={{ __html: headline }}
            />
            <p className="mt-4 text-[16px] leading-[1.6] text-slate max-w-[520px]">{body}</p>
            {/* Desktop: feature grid + CTA live inside the text column */}
            <div className="hidden md:flex md:flex-col md:items-start">
              <FeatureGrid features={features} />
              <div className="mt-8">
                <Button href={BOOK_CALL_URL} variant="dark" arrowBadge>Book a Call</Button>
              </div>
            </div>
          </Reveal>

          {/* Visual mockup */}
          <Reveal
            className={`bg-white border border-hairline rounded-[18px] p-[clamp(28px,4vw,56px)] flex items-center justify-center min-h-[420px] ff-hover-lift ${reverse ? 'md:order-1' : 'md:order-2'}`}
            delay={reverse ? 0 : 0.1}
          >
            <div className="w-full flex justify-center" dangerouslySetInnerHTML={{ __html: visual }} />
          </Reveal>

          {/* Mobile only: feature grid + CTA appear after the visual */}
          <div className="md:hidden flex flex-col items-start">
            <FeatureGrid features={features} />
            <div className="mt-8">
              <Button href={BOOK_CALL_URL} variant="dark" arrowBadge>Book a Call</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
