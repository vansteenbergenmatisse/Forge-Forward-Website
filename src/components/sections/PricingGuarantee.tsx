export default function PricingGuarantee() {
  return (
    <section className="bg-navy">
      <div className="max-w-[820px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(56px,7vw,88px)] flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-red flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="font-display font-black text-[clamp(26px,2.8vw,36px)] leading-[1.15] tracking-[-0.01em] text-white m-0">
          30 Days. Every Dollar Back.
        </h2>
        <p className="m-0 text-[16px] leading-[1.65] text-[#C9C5C0] max-w-[600px]">
          Take the annual plan and use it for 30 days. Want out for any reason? Send us one line by email and every dollar comes back. We carry the risk because the system books jobs or we eat the loss.
        </p>
        <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-gray-cool">
          Applies to the annual plan
        </span>
      </div>
    </section>
  );
}
