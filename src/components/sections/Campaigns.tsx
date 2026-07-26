import FeatureSpotlight from "./FeatureSpotlight";

const campaignsMockupHtml = `
<div class="bg-white border border-hairline rounded-2xl shadow-[0_20px_44px_rgba(11,16,32,0.08)] p-6 w-full max-w-[400px] flex flex-col gap-5 box-border">

  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <span class="w-[7px] h-[7px] rounded-full bg-red flex-none"></span>
      <span class="text-[11.5px] font-bold tracking-[0.07em] uppercase text-slate">Old Lead Revival</span>
    </div>
    <div class="bg-ivory rounded-xl px-4 py-3 flex flex-col gap-2">
      <div class="text-[11px] text-slate">Text to Sarah M. &middot; 4 months after quote</div>
      <div class="self-start bg-[#E9E9EB] rounded-[14px_14px_14px_4px] px-3 py-[9px] text-[13px] text-[#0B1020] leading-[1.45] max-w-[92%]">
        Hey Sarah, it&rsquo;s Dave. You got a quote from us last spring. Running a deal this week for past contacts. Want to lock it in?
      </div>
      <div class="self-end bg-red rounded-[14px_14px_4px_14px] px-3 py-[9px] text-[13px] text-white leading-[1.45] max-w-[70%]">
        Yes please!
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <span class="w-[7px] h-[7px] rounded-full bg-red flex-none"></span>
      <span class="text-[11.5px] font-bold tracking-[0.07em] uppercase text-slate">Past Customer Review</span>
    </div>
    <div class="bg-ivory rounded-xl px-4 py-3 flex flex-col gap-2">
      <div class="text-[11px] text-slate">Text to Mike T. &middot; After job completion</div>
      <div class="self-start bg-[#E9E9EB] rounded-[14px_14px_14px_4px] px-3 py-[9px] text-[13px] text-[#0B1020] leading-[1.45] max-w-[92%]">
        Hey Mike! Loved working on your yard. Mind leaving a quick Google review? Takes less than a minute. [link]
      </div>
      <div class="self-end flex items-center gap-1">
        <span class="text-red text-[13px] leading-none">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span class="text-[12px] text-slate">Review posted</span>
      </div>
    </div>
  </div>

</div>
`;

export default function Campaigns() {
  return (
    <FeatureSpotlight
      eyebrow="Lead Revival and Review Campaigns"
      headline="Turn old leads into booked jobs, <span class='text-red'>automatically</span>"
      body="You already paid for those leads and already have happy customers who never left a review. We text and email every old contact with a strong offer so dead leads become quotes again, and we send past customers a direct link to your Google profile so old jobs become fresh reviews."
      features={[
        { icon: 'Share2', title: 'Old Lead Revival', desc: 'Dead leads get a strong offer that gives them a reason to book now, no new ad spend.' },
        { icon: 'Star', title: 'Past Customer Reviews', desc: 'Old jobs become fresh Google reviews in under a minute.' },
      ]}
      visual={campaignsMockupHtml}
    />
  );
}
