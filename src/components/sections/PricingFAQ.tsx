import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";
import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/data/pricing";

export default function PricingFAQ() {
  return (
    <section className="bg-ivory">
      <div className="max-w-[980px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(56px,7vw,88px)] pb-[clamp(64px,8vw,112px)]">
        <Reveal className="text-center">
          <Label>FAQ</Label>
          <h2 className="font-display font-black text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.01em] text-navy mt-[14px] mb-0">
            Straight <span className="text-red">questions</span>, straight answers
          </h2>
        </Reveal>
        <div className="flex flex-col gap-[14px] mt-11">
          {faqItems.map((item) => (
            <Accordion key={item.q} question={item.q} answer={item.a} variant="faq" />
          ))}
        </div>
      </div>
    </section>
  );
}
