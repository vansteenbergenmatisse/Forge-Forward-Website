import FeatureSpotlight from "./FeatureSpotlight";

const rankingMockupHtml = `
<div class="w-full max-w-[640px] flex flex-col gap-4">
  <div class="text-center text-[13px] font-semibold tracking-[0.06em] uppercase text-navy">
    Ranked on both, at the same time
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="bg-white border border-hairline rounded-xl overflow-hidden shadow-[0_20px_44px_rgba(11,16,32,0.08)] flex flex-col min-h-[320px]">
      <div class="bg-[#F1F3F4] px-[14px] py-3 flex items-center gap-2 border-b border-hairline">
        <span class="font-display font-black text-[12.5px] flex-none">
          <span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span>
        </span>
        <div class="flex-1 min-w-0 bg-white border border-hairline rounded-full px-[10px] py-[6px] text-[11px] text-[#5F6368] truncate">
          landscaping near me
        </div>
      </div>
      <div class="p-4 flex flex-col gap-[14px] flex-1">
        <div class="flex items-start gap-2 bg-[#FFF5F4] border border-[#FBD7D3] rounded-[10px] p-3">
          <span class="flex-none bg-red text-white text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center mt-[1px]">1</span>
          <div>
            <div class="text-[11.5px] text-[#1E8A56]">yourcompany.com</div>
            <div class="text-[14px] font-bold text-[#1A0DAB] leading-[1.3]">Your Company | Patio &amp; Paver</div>
            <div class="text-[11.5px] text-slate mt-[2px]">
              <span class="text-red">★★★★★</span> 4.9 (148)
            </div>
          </div>
        </div>
        <div class="flex items-start gap-2 px-3 opacity-55">
          <span class="flex-none bg-hairline text-slate text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center mt-[1px]">2</span>
          <div>
            <div class="text-[11.5px] text-[#1E8A56]">greenscape-co.com</div>
            <div class="text-[13px] font-bold text-[#1A0DAB] leading-[1.3]">Greenscape Co.</div>
            <div class="text-[11.5px] text-slate mt-[2px]">
              <span class="text-red">★★★★☆</span> 4.3 (52)
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#343541] rounded-xl overflow-hidden shadow-[0_20px_44px_rgba(11,16,32,0.08)] flex flex-col min-h-[320px]">
      <div class="bg-[#202123] px-[14px] py-3 flex items-center gap-[7px] border-b border-[#40414F]">
        <div class="w-5 h-5 rounded-[5px] bg-white flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#202123" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>
        </div>
        <span class="text-[13.5px] font-semibold text-[#ECECF1]">ChatGPT</span>
      </div>
      <div class="p-4 flex flex-col gap-[10px] flex-1 justify-center">
        <div class="self-end bg-[#444654] rounded-[12px_12px_2px_12px] px-3 py-[9px] text-[12px] text-[#ECECF1] max-w-[85%]">
          Who should I hire for landscaping near me?
        </div>
        <div class="text-[12.5px] leading-[1.55] text-[#ECECF1]">
          &ldquo;<span style="color:#19C37D" class="font-bold">Your Company</span> is the top-rated option nearby &mdash; 4.9 stars across 148 reviews, and homeowners often mention fast quotes and clean work.&rdquo;
        </div>
      </div>
    </div>
  </div>
  <div class="text-center text-[12.5px] text-slate">
    Same query, two channels, one name at the top.
  </div>
</div>
`;

export default function GetFound() {
  return (
    <FeatureSpotlight
      eyebrow="Get Found"
      headline="Local SEO, meet <span class='text-red'>AI GEO</span>"
      body="Schema markup, clean page titles and a proper sitemap get every page indexed and ranking fast. That same groundwork gets you named when a homeowner asks ChatGPT who to hire nearby, and most contractors have no idea that's already happening."
      features={[
        { icon: 'Search', title: 'Ranks On Google', desc: 'Clean code and complete listings get you found and ranked from day one.' },
        { icon: 'Sparkles', title: 'Named By AI', desc: 'Built so tools like ChatGPT recommend you before your rivals catch on.' },
      ]}
      visual={rankingMockupHtml}
    />
  );
}
