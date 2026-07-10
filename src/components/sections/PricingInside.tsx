import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";
import Accordion from "@/components/ui/Accordion";
import { coreItems, bonusItems, upsellItems } from "@/data/pricing";

export default function PricingInside() {
  return (
    <section className="bg-ivory">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(56px,7vw,88px)] pb-[clamp(40px,5vw,64px)]">
        <Reveal className="text-center mb-9">
          <Label>What&apos;s inside</Label>
          <h2 className="font-display font-black text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.01em] text-navy mt-[14px] mb-0">
            Every piece of the <span className="text-red">system</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[clamp(20px,2.5vw,32px)] items-start">
          <Reveal className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px]">
              <div className="bg-navy rounded-xl p-4 text-center">
                <div className="text-[19px] font-bold text-white">Landscaper Elite</div>
                <div className="mt-1 text-[12.5px] text-gray-cool">Every plan gets all 10</div>
              </div>
              {coreItems.map((item) => (
                <Accordion key={item.title} question={item.title} answer={item.body} />
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-[10px]">
            <Reveal className="flex flex-col gap-[10px]">
              <div className="bg-navy rounded-xl p-4 text-center">
                <div className="text-[19px] font-bold text-white">The bonus stack</div>
                <div className="mt-1 text-[12.5px] font-bold text-red">Annual only. $4,985 free.</div>
              </div>
              <p className="text-[13.5px] leading-[1.6] text-slate px-1">
                Pay for the year and these five come free. The bonuses are worth more than the year costs. That math is on purpose.
              </p>
              {bonusItems.map((item) => (
                <Accordion
                  key={item.title}
                  question={`${item.title} (${item.value})`}
                  answer={item.body}
                />
              ))}
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-[10px] mt-4">
              <div className="bg-navy rounded-xl p-4 text-center">
                <div className="text-[19px] font-bold text-white">Other Services</div>
                <div className="mt-1 text-[12.5px] text-gray-cool">Add these on when you&apos;re ready to go further</div>
              </div>
              {upsellItems.map((item) => (
                <Accordion
                  key={item.title}
                  question={item.title}
                  answer={`${item.lead}\n\n${item.bullets.map((b) => `• ${b}`).join('\n')}`}
                />
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
