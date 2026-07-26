import FeatureSpotlight from "./FeatureSpotlight";

const chatMockupHtml = `
<div class="bg-white border border-hairline rounded-2xl shadow-[0_20px_44px_rgba(11,16,32,0.08)] p-6 w-full max-w-[400px] flex flex-col gap-3 box-border">
  <div class="flex flex-col gap-[10px] mb-1">
    <div class="flex items-center gap-2 text-[13px] font-medium tracking-[0.06em] uppercase text-slate">
      <span class="ff-pulse-dot w-[7px] h-[7px] rounded-full bg-red flex-none"></span>
      Missed call · 2:14 PM
    </div>
    <div class="self-start bg-ivory rounded-[14px_14px_14px_4px] px-4 py-3 text-[14.5px] leading-[1.5] text-navy max-w-[88%]">
      Hey, this is the crew. Up on a job. What can we help you with?
    </div>
    <div class="self-end bg-red rounded-[14px_14px_4px_14px] px-4 py-3 text-[14.5px] leading-[1.5] text-white max-w-[88%]">
      Wow fast. Tomorrow at 8 works for me.
    </div>
    <div class="self-start bg-ivory rounded-[14px_14px_14px_4px] px-4 py-3 text-[14.5px] leading-[1.5] text-navy max-w-[88%]">
      Done. Confirmation text on its way.
    </div>
  </div>
  <div class="border-t border-hairline pt-3 flex flex-col gap-[10px]">
    <div class="flex items-center gap-[10px]">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red flex-none" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span class="text-[13px] text-slate">Also fires on website forms, live chat &amp; social DMs</span>
    </div>
    <div class="flex items-center gap-[10px]">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red flex-none" aria-hidden="true"><path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
      <span class="text-[13px] text-slate">Owner notified instantly so you can jump in</span>
    </div>
  </div>
</div>
`;

export default function MissedCall() {
  return (
    <FeatureSpotlight
      eyebrow="Instant Lead Response"
      headline="Every lead answered in <span class='text-red'>seconds</span>"
      body="Four automated tools fire the moment a lead comes in: missed call, website form, live chat, or a Facebook or Instagram message. Each one starts the conversation, reassures the customer and notifies you so you can close it when you're free."
      features={[
        { icon: 'Zap', title: '4 Channels Covered', desc: 'Missed calls, forms, live chat and social DMs all get an instant reply.' },
        { icon: 'Repeat', title: 'Auto Follow-Up', desc: 'Three follow-up texts per lead so no one goes cold waiting on you.' },
      ]}
      visual={chatMockupHtml}
      reverse
    />
  );
}
