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
  Gauge: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',
  Target: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
  Zap: 'M7 2v11h3v9l7-12h-4l4-8z',
  Repeat: 'M7 7H17V10L21 6L17 2V5H5V11H7V7ZM17 17H7V14L3 18L7 22V19H19V13H17V17Z',
  Search: 'M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z',
  Sparkles: 'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z',
  MapPin: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
  TrendingUp: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
  Share2: 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98',
  HeartHandshake: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z',
};

function FeatureGrid({ features }: { features: FeatureItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-7 mt-11 w-full max-w-[480px]">
      {features.map(({ icon, title, desc }) => (
        <div key={title} className="flex flex-col gap-[10px] items-start">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy" aria-hidden="true">
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
  const textCol = (
    <Reveal className="flex flex-col items-start" delay={reverse ? 0.1 : 0}>
      <Label>{eyebrow}</Label>
      <h2 className="font-display font-black text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.01em] text-navy mt-4 mb-0 max-w-[16ch]" dangerouslySetInnerHTML={{ __html: headline }} />
      <p className="mt-4 text-[16px] leading-[1.6] text-slate max-w-[520px]">{body}</p>
      <FeatureGrid features={features} />
      <div className="mt-8">
        <Button href={BOOK_CALL_URL} external variant="dark" arrowBadge>Book a Call</Button>
      </div>
    </Reveal>
  );

  const visualCol = (
    <Reveal className="bg-white border border-hairline rounded-[18px] p-[clamp(28px,4vw,56px)] flex items-center justify-center min-h-[420px] ff-hover-lift" delay={reverse ? 0 : 0.1}>
      {/* w-full + centering gives the injected mockup a real width. Without it the
          slot shrink-wraps to its content, which collapses any visual whose
          children are all absolutely positioned (e.g. the LocalCoverage map). */}
      <div className="w-full flex justify-center" dangerouslySetInnerHTML={{ __html: visual }} />
    </Reveal>
  );

  return (
    <section className="bg-ivory">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(56px,7vw,96px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[clamp(32px,5vw,80px)] items-center">
        {reverse ? <>{visualCol}{textCol}</> : <>{textCol}{visualCol}</>}
      </div>
    </section>
  );
}
