import FeatureSpotlight from "./FeatureSpotlight";

const campaignsMockupHtml = `
<div class="bg-white border border-hairline rounded-2xl shadow-[0_20px_44px_rgba(11,16,32,0.08)] p-6 w-full max-w-[400px] flex flex-col gap-[10px] box-border">
  <div class="text-[13px] font-medium tracking-[0.06em] uppercase text-slate mb-[6px]">
    Active campaigns
  </div>
  <div class="flex items-center gap-3 bg-ivory rounded-xl px-4 py-3">
    <span class="text-[14px] text-navy flex-1">Refer a friend, get $50 off</span>
    <span class="text-[11px] font-bold tracking-[0.04em] uppercase border rounded-full px-[10px] py-[3px]" style="color: #16a34a; border-color: #16a34a;">Live</span>
  </div>
  <div class="flex items-center gap-3 bg-ivory rounded-xl px-4 py-3">
    <span class="text-[14px] text-navy flex-1">Spring cleanup, past customers</span>
    <span class="text-[11px] font-bold tracking-[0.04em] uppercase border rounded-full px-[10px] py-[3px]" style="color: #16a34a; border-color: #16a34a;">Live</span>
  </div>
  <div class="text-[13px] text-slate mt-1">Both launched with one click.</div>
</div>
`;

export default function Campaigns() {
  return (
    <FeatureSpotlight
      eyebrow="One-Click Marketing Campaigns"
      headline="Referrals and repeat business, on <span class='text-red'>autopilot</span>"
      body="Referrals and repeat customers are the cheapest jobs you'll ever land. Launch a pre-built campaign with one click and we handle nudging happy customers to send friends your way, bringing past customers back for the next job, and more."
      features={[
        { icon: 'Share2', title: 'Referral Campaigns', desc: 'One click nudges happy customers to send friends your way.' },
        { icon: 'HeartHandshake', title: 'Repeat Business Campaigns', desc: 'Special offers bring past customers back for the next job.' },
      ]}
      visual={campaignsMockupHtml}
    />
  );
}
