import FeatureSpotlight from "./FeatureSpotlight";

const websiteMockupHtml = `
<div class="bg-white border border-hairline rounded-2xl shadow-[0_20px_44px_rgba(11,16,32,0.08)] w-full max-w-[440px] overflow-hidden box-border">
  <div class="flex items-center gap-2 px-[14px] py-3 bg-[#F1EDE6] border-b border-hairline">
    <span class="w-[10px] h-[10px] rounded-full bg-hairline inline-block"></span>
    <span class="w-[10px] h-[10px] rounded-full bg-hairline inline-block"></span>
    <span class="w-[10px] h-[10px] rounded-full bg-hairline inline-block"></span>
    <div class="flex-1 ml-2 bg-white border border-hairline rounded-full px-[14px] py-[5px] text-[11.5px] text-slate text-center">
      yourcompany.com
    </div>
  </div>
  <div class="px-6 py-7 flex flex-col items-start gap-[10px] box-border">
    <div class="w-[78%] h-4 bg-navy rounded"></div>
    <div class="w-[52%] h-4 bg-red rounded"></div>
    <div class="w-[88%] h-2 bg-hairline rounded mt-2"></div>
    <div class="w-[64%] h-2 bg-hairline rounded"></div>
    <div class="mt-[14px] bg-navy text-white text-[12.5px] font-bold px-5 py-[10px] rounded-full self-start">
      Book a Call
    </div>
    <div class="flex gap-2 mt-5 w-full">
      <div class="flex-1 h-[72px] rounded-lg" style="background: linear-gradient(135deg,#E5E0D8,#FCF8F3);"></div>
      <div class="flex-1 h-[72px] rounded-lg" style="background: linear-gradient(135deg,#E5E0D8,#FCF8F3);"></div>
      <div class="flex-1 h-[72px] rounded-lg" style="background: linear-gradient(135deg,#E5E0D8,#FCF8F3);"></div>
    </div>
    <div class="flex items-center gap-2 mt-[10px]">
      <span class="text-red text-[13px] tracking-[1px]">★★★★★</span>
      <span class="text-[12px] text-slate">4.9 · 148 reviews</span>
    </div>
  </div>
</div>
`;

export default function WebWeapon() {
  return (
    <FeatureSpotlight
      eyebrow="The Web Weapon"
      headline="A website that does the <span class='text-red'>selling</span> for you"
      body="Homepage, 10 service pages, 10 local-area pages and a contact page, live fast and fully optimized to convert. A homeowner lands, sees your best work up top, and books a quote before they click away."
      features={[
        { icon: 'Gauge', title: '2-Second Load', desc: 'Fast pages rank higher and keep homeowners on them.' },
        { icon: 'Target', title: 'Built To Convert', desc: 'Every layout and word is built to turn visitors into booked jobs.' },
      ]}
      visual={websiteMockupHtml}
    />
  );
}
