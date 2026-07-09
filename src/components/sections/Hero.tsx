import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { heroReviews } from "@/data/home";
import { BOOK_CALL_URL } from "@/lib/constants";

const jobPhotos = [
  { id: 'job1', src: 'https://picsum.photos/seed/ff-job1/600/800', alt: 'Landscaping job 1' },
  { id: 'job2', src: 'https://picsum.photos/seed/ff-job2/600/800', alt: 'Landscaping job 2' },
  { id: 'job3', src: 'https://picsum.photos/seed/ff-job3/600/800', alt: 'Landscaping job 3' },
  { id: 'job4', src: 'https://picsum.photos/seed/ff-job4/600/800', alt: 'Landscaping job 4' },
];

const reviewAvatars = [
  'https://picsum.photos/seed/ff-avatar1/200/200',
  'https://picsum.photos/seed/ff-avatar2/200/200',
  'https://picsum.photos/seed/ff-avatar3/200/200',
];

export default function Hero() {
  return (
    <section style={{ background: 'radial-gradient(circle at 15% 0%,rgba(122,92,255,0.35),transparent 40%),radial-gradient(circle at 85% 0%,rgba(255,78,78,0.32),transparent 38%),radial-gradient(circle at 55% 0%,rgba(255,179,87,0.25),transparent 35%),#0B1020' }}>
      <div className="w-full">
        <div
          className="bg-ivory"
          style={{ backgroundImage: 'linear-gradient(#EDE7DF 1px,transparent 1px),linear-gradient(90deg,#EDE7DF 1px,transparent 1px)', backgroundSize: '44px 44px' }}
        >
          <div className="max-w-[1000px] mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(48px,6vw,76px)] pb-0 flex flex-col items-center text-center">
            <Reveal>
              <h1 className="font-display font-black text-[clamp(34px,4.6vw,62px)] leading-[1.1] tracking-[-0.01em] text-navy m-0 max-w-[17ch]">
                Website design and marketing systems <span className="text-red">for landscapers.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16} className="flex gap-6 mt-7 flex-wrap justify-center items-center">
              <Button href={BOOK_CALL_URL} external variant="dark" arrowBadge>Book a Call</Button>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {reviewAvatars.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="eager"
                      className="w-9 h-9 rounded-full object-cover border-2 border-ivory"
                      style={i > 0 ? { marginLeft: '-10px' } : undefined}
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-red text-[15px] tracking-[2px] leading-none">★★★★★</div>
                  <div className="text-[14px] text-slate mt-[3px]">Trusted by 40+ clients on Trustpilot</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-white border border-hairline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red flex-none" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span className="text-[13.5px] font-semibold text-navy">30-day money-back guarantee, any reason</span>
            </Reveal>
          </div>

          <Reveal delay={0.24} className="w-full mt-[clamp(28px,3vw,44px)]">
            <div className="flex items-center justify-between mb-4 max-w-[1000px] mx-auto px-[clamp(20px,4vw,64px)]">
              <span className="flex items-center gap-[10px] text-[13px] font-medium tracking-[0.08em] uppercase text-slate">
                <span className="w-6 h-px bg-slate inline-block"></span>
                Real jobs. Real reviews.
              </span>
              <span className="text-[13px] text-slate">Hover to pause</span>
            </div>
            <div className="ff-marquee-wrap overflow-hidden pb-7">
              <div className="ff-marquee-track flex w-max">
                <div className="flex gap-4 pr-4">
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] relative rounded-2xl overflow-hidden">
                    <img src={jobPhotos[0].src} alt={jobPhotos[0].alt} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] relative rounded-2xl overflow-hidden">
                    <img src={jobPhotos[1].src} alt={jobPhotos[1].alt} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] bg-white border border-hairline rounded-2xl p-[22px] flex flex-col justify-between text-left box-border">
                    <div>
                      <div className="text-red text-[16px] tracking-[2px]">★★★★★</div>
                      <p className="mt-[14px] text-[14.5px] leading-[1.55] text-navy font-medium">&ldquo;{heroReviews[0].quote}&rdquo;</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <img src={`https://picsum.photos/seed/ff-review-${heroReviews[0].author}/200/200`} alt={heroReviews[0].author} loading="lazy" className="w-[34px] h-[34px] rounded-full object-cover" />
                      <div>
                        <div className="font-semibold text-[13px] text-navy">{heroReviews[0].author}</div>
                        <div className="text-[12px] text-slate">{heroReviews[0].source}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] relative rounded-2xl overflow-hidden">
                    <img src={jobPhotos[2].src} alt={jobPhotos[2].alt} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] relative rounded-2xl overflow-hidden">
                    <img src={jobPhotos[3].src} alt={jobPhotos[3].alt} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] bg-navy rounded-2xl p-[22px] flex flex-col justify-between text-left box-border">
                    <div>
                      <div className="text-red text-[16px] tracking-[2px]">★★★★★</div>
                      <p className="mt-[14px] text-[14.5px] leading-[1.55] text-white font-medium">&ldquo;{heroReviews[1].quote}&rdquo;</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <img src={`https://picsum.photos/seed/ff-review-${heroReviews[1].author}/200/200`} alt={heroReviews[1].author} loading="lazy" className="w-[34px] h-[34px] rounded-full object-cover" />
                      <div>
                        <div className="font-semibold text-[13px] text-white">{heroReviews[1].author}</div>
                        <div className="text-[12px] text-gray-cool">{heroReviews[1].source}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex gap-4 pr-4" aria-hidden="true">
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] relative rounded-2xl overflow-hidden">
                    <img src={jobPhotos[0].src} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] relative rounded-2xl overflow-hidden">
                    <img src={jobPhotos[1].src} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] bg-white border border-hairline rounded-2xl p-[22px] flex flex-col justify-between text-left box-border">
                    <div>
                      <div className="text-red text-[16px] tracking-[2px]">★★★★★</div>
                      <p className="mt-[14px] text-[14.5px] leading-[1.55] text-navy font-medium">&ldquo;{heroReviews[0].quote}&rdquo;</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <img src={`https://picsum.photos/seed/ff-review-${heroReviews[0].author}/200/200`} alt="" loading="lazy" className="w-[34px] h-[34px] rounded-full object-cover" />
                      <div>
                        <div className="font-semibold text-[13px] text-navy">{heroReviews[0].author}</div>
                        <div className="text-[12px] text-slate">{heroReviews[0].source}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] relative rounded-2xl overflow-hidden">
                    <img src={jobPhotos[2].src} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] relative rounded-2xl overflow-hidden">
                    <img src={jobPhotos[3].src} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-none w-[clamp(230px,17vw,300px)] h-[clamp(340px,26vw,400px)] bg-navy rounded-2xl p-[22px] flex flex-col justify-between text-left box-border">
                    <div>
                      <div className="text-red text-[16px] tracking-[2px]">★★★★★</div>
                      <p className="mt-[14px] text-[14.5px] leading-[1.55] text-white font-medium">&ldquo;{heroReviews[1].quote}&rdquo;</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <img src={`https://picsum.photos/seed/ff-review-${heroReviews[1].author}/200/200`} alt="" loading="lazy" className="w-[34px] h-[34px] rounded-full object-cover" />
                      <div>
                        <div className="font-semibold text-[13px] text-white">{heroReviews[1].author}</div>
                        <div className="text-[12px] text-gray-cool">{heroReviews[1].source}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
