import FeatureSpotlight from "./FeatureSpotlight";

const PIN = `<svg width="22" height="22" viewBox="0 0 24 24" fill="#EA4335" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
const PIN_L = `<svg width="40" height="40" viewBox="0 0 24 24" fill="#F6413E" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
const pinLabel = (name: string) => `<span style="font-size:11px;font-weight:600;color:#3C4043;background:white;border-radius:20px;padding:1px 8px;margin-top:-3px;box-shadow:0 1px 4px rgba(0,0,0,0.18);white-space:nowrap;display:block;">${name}</span>`;
const pin = (left: string, top: string, name: string) => `<div style="position:absolute;left:${left};top:${top};display:flex;flex-direction:column;align-items:center;">${PIN}${pinLabel(name)}</div>`;

const mapMockupHtml = `
<div style="background:white;border:1px solid #E5E0D8;border-radius:18px;box-shadow:0 20px 44px rgba(11,16,32,0.06);width:100%;max-width:480px;margin:0 auto;padding:14px;box-sizing:border-box;">
  <div style="position:relative;width:100%;padding-bottom:100%;overflow:hidden;border-radius:12px;background:#EAE7E1;">
    <div style="position:absolute;inset:0;">
      <div style="position:absolute;left:-18%;top:-12%;width:58%;height:68%;border-radius:45% 55% 60% 40%;background:#AAD3F5;transform:rotate(-8deg);"></div>
      <div style="position:absolute;right:2%;bottom:4%;width:24%;height:20%;border-radius:40% 60% 45% 55%;background:#C6E4AE;"></div>
      <div style="position:absolute;left:6%;bottom:16%;width:14%;height:12%;border-radius:50%;background:#C6E4AE;"></div>
      <div style="position:absolute;left:0;right:0;height:2px;background:white;top:16%;"></div>
      <div style="position:absolute;left:0;right:0;height:2px;background:white;top:38%;"></div>
      <div style="position:absolute;left:0;right:0;height:2px;background:white;top:60%;"></div>
      <div style="position:absolute;left:0;right:0;height:2px;background:white;top:82%;"></div>
      <div style="position:absolute;top:0;bottom:0;width:2px;background:white;left:24%;"></div>
      <div style="position:absolute;top:0;bottom:0;width:2px;background:white;left:47%;"></div>
      <div style="position:absolute;top:0;bottom:0;width:2px;background:white;left:70%;"></div>
      <div style="position:absolute;top:0;bottom:0;width:2px;background:white;left:88%;"></div>
      <div style="position:absolute;left:-5%;right:-5%;top:52%;height:8px;background:#FFCC80;transform:rotate(-4deg);"></div>
      <div style="position:absolute;left:14px;right:14px;top:14px;background:white;border-radius:10px;box-shadow:0 4px 14px rgba(11,16,32,0.16);padding:10px 14px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:13px;color:#5F6368;">&#128269;</span>
        <span style="font-size:13px;color:#3C4043;flex:1;">landscaper near me</span>
      </div>
      ${pin('14%','26%','Oakville')}
      ${pin('78%','22%','Fairview')}
      ${pin('10%','66%','Millbrook')}
      ${pin('66%','72%','Riverside')}
      ${pin('38%','88%','Elmwood')}
      <div style="position:absolute;left:47%;top:50%;transform:translate(-50%,-100%);z-index:20;">${PIN_L}</div>
      <div style="position:absolute;left:41%;top:42%;z-index:20;background:white;border-radius:10px;box-shadow:0 8px 20px rgba(11,16,32,0.18);padding:10px 14px;width:170px;box-sizing:border-box;">
        <div style="font-weight:700;font-size:13px;color:#0B1020;white-space:nowrap;">Your Company</div>
        <div style="font-size:11px;color:#6B6F78;margin-top:2px;white-space:nowrap;"><span style="color:#F6413E;">★★★★★</span> 4.9 · 148 reviews</div>
        <div style="font-size:10.5px;font-weight:600;color:#16a34a;margin-top:3px;">Open · Closes 6PM</div>
      </div>
      <div style="position:absolute;right:14px;bottom:44px;background:white;border-radius:8px;box-shadow:0 4px 12px rgba(11,16,32,0.16);overflow:hidden;">
        <div style="padding:6px 12px;font-size:16px;font-weight:600;color:#3C4043;border-bottom:1px solid #eee;">+</div>
        <div style="padding:6px 12px;font-size:16px;font-weight:600;color:#3C4043;">&minus;</div>
      </div>
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
