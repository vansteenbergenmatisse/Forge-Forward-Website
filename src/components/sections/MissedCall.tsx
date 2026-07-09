import FeatureSpotlight from "./FeatureSpotlight";

const chatMockupHtml = `
<div class="bg-white border border-hairline rounded-2xl shadow-[0_20px_44px_rgba(11,16,32,0.08)] p-6 w-full max-w-[400px] flex flex-col gap-3 box-border">
  <div class="flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] uppercase text-slate">
    <span class="ff-pulse-dot w-[7px] h-[7px] rounded-full bg-red flex-none"></span>
    Missed call · 2:14 PM
  </div>
  <div class="self-start bg-ivory rounded-[14px_14px_14px_4px] px-4 py-3 text-[14.5px] leading-[1.5] text-navy max-w-[88%]">
    Hey, this is Dave&rsquo;s crew. Up on a job right now. What time works for a quick call about your project?
  </div>
  <div class="self-end bg-red rounded-[14px_14px_4px_14px] px-4 py-3 text-[14.5px] leading-[1.5] text-white max-w-[88%]">
    Wow, that was fast. Tomorrow at 8?
  </div>
  <div class="self-start bg-ivory rounded-[14px_14px_14px_4px] px-4 py-3 text-[14.5px] leading-[1.5] text-navy max-w-[88%]">
    Booked. You&rsquo;ll get a confirmation text in a second.
  </div>
  <div class="border-t border-hairline pt-3 flex flex-col gap-2">
    <div class="flex items-center gap-[10px]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red" aria-hidden="true"><path d="M7 7H17V10L21 6L17 2V5H5V11H7V7ZM17 17H7V14L3 18L7 22V19H19V13H17V17Z"/></svg>
      <span class="text-[13px] text-slate">Then we keep following up until it&rsquo;s booked</span>
    </div>
    <div class="flex items-center gap-[10px]">
      <span class="text-red text-[13px]">★</span>
      <span class="text-[13px] text-slate">3 weeks later: a 5-star review request</span>
    </div>
  </div>
</div>
`;

export default function MissedCall() {
  return (
    <FeatureSpotlight
      eyebrow="Missed Call Text-Back"
      headline="Every lead answered in <span class='text-red'>5 seconds</span>"
      body="Miss a call up on a roof? A text goes out before they can dial the next guy. From there we keep following up on your behalf until the job is booked, then ask for the 5-star review most contractors forget."
      features={[
        { icon: 'Zap', title: '5-Second Reply', desc: 'Replies fast, in seconds, before they call anyone else.' },
        { icon: 'Repeat', title: 'Automatic Follow-Up', desc: 'We keep reaching out so no lead goes cold waiting on you.' },
      ]}
      visual={chatMockupHtml}
      reverse
    />
  );
}
