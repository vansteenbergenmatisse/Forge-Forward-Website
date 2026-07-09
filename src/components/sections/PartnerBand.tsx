import { partnerLogos } from "@/data/home";

export default function PartnerBand() {
  return (
    <div className="bg-navy px-[clamp(20px,4vw,64px)] pt-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]">
      <div className="flex items-center justify-center relative mb-[clamp(28px,3vw,40px)]">
        <h2 className="font-display font-extrabold text-[clamp(24px,2.4vw,32px)] leading-[1.1] text-white text-center m-0">
          Just so you know we&apos;re <span className="text-red">legit</span>, we partner with&hellip;
        </h2>
        <span className="absolute right-0 text-[13px] text-[#9A968F] hidden md:block">Hover to pause</span>
      </div>
      <div className="ff-marquee-wrap overflow-hidden">
        <div className="ff-marquee-reverse flex w-max">
          <div className="flex items-center gap-[clamp(20px,2.4vw,28px)] pr-[clamp(20px,2.4vw,28px)]">
            {partnerLogos.map((logo) => (
              <div key={logo.alt} className="flex-none h-[100px] px-[30px] rounded-2xl bg-white flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  width={190}
                  height={logo.height}
                  style={{ height: `${logo.height}px`, width: 'auto', maxWidth: '190px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[clamp(20px,2.4vw,28px)] pr-[clamp(20px,2.4vw,28px)]" aria-hidden="true">
            {partnerLogos.map((logo) => (
              <div key={logo.alt + '-dup'} className="flex-none h-[100px] px-[30px] rounded-2xl bg-white flex items-center justify-center">
                <img
                  src={logo.src}
                  alt=""
                  loading="lazy"
                  width={190}
                  height={logo.height}
                  style={{ height: `${logo.height}px`, width: 'auto', maxWidth: '190px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
