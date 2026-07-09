import FeatureSpotlight from "./FeatureSpotlight";

const mapMockupHtml = `
<div class="bg-white border border-hairline rounded-[18px] shadow-[0_20px_44px_rgba(11,16,32,0.06)] aspect-square w-full max-w-[520px] mx-auto p-[clamp(14px,2vw,20px)] box-border">
  <div class="relative w-full h-full overflow-hidden rounded-xl" style="background: #EAE7E1;">
    <div class="absolute" style="left: -18%; top: -12%; width: 58%; height: 68%; border-radius: 45% 55% 60% 40%; background: #AAD3F5; transform: rotate(-8deg);"></div>
    <div class="absolute" style="right: 2%; bottom: 4%; width: 24%; height: 20%; border-radius: 40% 60% 45% 55%; background: #C6E4AE;"></div>
    <div class="absolute" style="left: 6%; bottom: 16%; width: 14%; height: 12%; border-radius: 50%; background: #C6E4AE;"></div>
    <div class="absolute left-0 right-0 h-[2px] bg-white" style="top: 16%;"></div>
    <div class="absolute left-0 right-0 h-[2px] bg-white" style="top: 38%;"></div>
    <div class="absolute left-0 right-0 h-[2px] bg-white" style="top: 60%;"></div>
    <div class="absolute left-0 right-0 h-[2px] bg-white" style="top: 82%;"></div>
    <div class="absolute top-0 bottom-0 w-[2px] bg-white" style="left: 24%;"></div>
    <div class="absolute top-0 bottom-0 w-[2px] bg-white" style="left: 47%;"></div>
    <div class="absolute top-0 bottom-0 w-[2px] bg-white" style="left: 70%;"></div>
    <div class="absolute top-0 bottom-0 w-[2px] bg-white" style="left: 88%;"></div>
    <div class="absolute" style="left: -5%; right: -5%; top: 52%; height: 8px; background: #FFCC80; transform: rotate(-4deg);"></div>
    <div class="absolute bg-white rounded-[10px] shadow-[0_4px_14px_rgba(11,16,32,0.16)] px-[14px] py-[11px] flex items-center gap-[10px]" style="left: 14px; right: 14px; top: 14px;">
      <span class="text-[#5F6368] text-[13px]">&#128269;</span>
      <span class="text-[13px] text-[#3C4043] flex-1">landscaper near me</span>
    </div>
    <div class="absolute flex flex-col items-center" style="left: 14%; top: 26%;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#EA4335" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <span class="text-[11px] font-semibold text-[#3C4043] bg-white rounded-full px-2 py-[1.5px] mt-[-2px] shadow-sm whitespace-nowrap">Oakville</span>
    </div>
    <div class="absolute flex flex-col items-center" style="left: 78%; top: 22%;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#EA4335" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <span class="text-[11px] font-semibold text-[#3C4043] bg-white rounded-full px-2 py-[1.5px] mt-[-2px] shadow-sm whitespace-nowrap">Fairview</span>
    </div>
    <div class="absolute flex flex-col items-center" style="left: 10%; top: 66%;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#EA4335" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <span class="text-[11px] font-semibold text-[#3C4043] bg-white rounded-full px-2 py-[1.5px] mt-[-2px] shadow-sm whitespace-nowrap">Millbrook</span>
    </div>
    <div class="absolute flex flex-col items-center" style="left: 66%; top: 72%;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#EA4335" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <span class="text-[11px] font-semibold text-[#3C4043] bg-white rounded-full px-2 py-[1.5px] mt-[-2px] shadow-sm whitespace-nowrap">Riverside</span>
    </div>
    <div class="absolute flex flex-col items-center" style="left: 38%; top: 88%;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#EA4335" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <span class="text-[11px] font-semibold text-[#3C4043] bg-white rounded-full px-2 py-[1.5px] mt-[-2px] shadow-sm whitespace-nowrap">Elmwood</span>
    </div>
    <div class="absolute z-20" style="left: 47%; top: 50%; transform: translate(-50%,-100%);">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#F6413E" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
    </div>
    <div class="absolute z-20 bg-white rounded-[10px] shadow-[0_8px_20px_rgba(11,16,32,0.18)] px-[14px] py-[10px] w-[170px] box-border" style="left: 41%; top: 42%;">
      <div class="font-bold text-[13px] text-navy whitespace-nowrap">Your Company</div>
      <div class="text-[11px] text-slate mt-[2px] whitespace-nowrap">
        <span class="text-red">★★★★★</span> 4.9 · 148 reviews
      </div>
      <div class="text-[10.5px] font-semibold mt-[3px]" style="color: #16a34a;">Open · Closes 6PM</div>
    </div>
    <div class="absolute right-[14px] bottom-[44px] flex flex-col bg-white rounded-lg shadow-[0_4px_12px_rgba(11,16,32,0.16)] overflow-hidden">
      <div class="px-3 py-2 text-[16px] font-semibold text-[#3C4043] border-b border-[#eee]">+</div>
      <div class="px-3 py-2 text-[16px] font-semibold text-[#3C4043]">&minus;</div>
    </div>
  </div>
</div>
`;

export default function LocalCoverage() {
  return (
    <FeatureSpotlight
      eyebrow="Every Town You Serve"
      headline="Not just your city, the <span class='text-red'>next one</span> too"
      body="We build out your Google Business Profile and a dedicated page for every neighboring city you work in, so you show up wherever your customers are actually searching."
      features={[
        { icon: 'MapPin', title: 'Neighboring Cities Covered', desc: "A dedicated page for every town you serve, not just the one you're based in." },
        { icon: 'TrendingUp', title: 'Wherever Customers Look', desc: 'Maps, search and AI results all point back to you.' },
      ]}
      visual={mapMockupHtml}
      reverse
    />
  );
}
