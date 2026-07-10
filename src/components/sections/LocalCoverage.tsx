import FeatureSpotlight from "./FeatureSpotlight";

const PIN = `<svg width="22" height="22" viewBox="0 0 24 24" fill="#EA4335" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
const PIN_L = `<svg width="40" height="40" viewBox="0 0 24 24" fill="#F6413E" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
const pinLabel = (name: string) => `<span style="font-size:11px;font-weight:600;color:#3C4043;background:white;border-radius:20px;padding:1px 8px;margin-top:-3px;box-shadow:0 1px 4px rgba(0,0,0,0.18);white-space:nowrap;display:block;">${name}</span>`;
const pin = (left: string, top: string, name: string) => `<div style="position:absolute;left:${left};top:${top};z-index:12;display:flex;flex-direction:column;align-items:center;">${PIN}${pinLabel(name)}</div>`;

// Translucent red "we rank #1 here" coverage blob, centered on a city.
const cover = (left: string, top: string, size: string, a1: number, a2: number) =>
  `<div style="position:absolute;left:${left};top:${top};width:${size};height:${size};transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle, rgba(246,65,62,${a1}) 0%, rgba(246,65,62,${a2}) 50%, rgba(246,65,62,0) 72%);z-index:5;pointer-events:none;"></div>`;

const mapMockupHtml = `
<div style="background:white;border:1px solid #E5E0D8;border-radius:18px;box-shadow:0 20px 44px rgba(11,16,32,0.06);width:100%;max-width:480px;margin:0 auto;padding:14px;box-sizing:border-box;">
  <div style="position:relative;width:100%;padding-bottom:100%;overflow:hidden;border-radius:12px;background:#EAE7E1;">
    <div style="position:absolute;inset:0;">
      <!-- Map base: water, parks, road grid -->
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

      <!-- "Ranked #1" service area: dashed boundary + a red coverage blob per covered town -->
      <div style="position:absolute;left:45%;top:56%;width:88%;height:84%;transform:translate(-50%,-50%);border-radius:48% 52% 52% 48%;border:1.5px dashed rgba(246,65,62,0.55);background:rgba(246,65,62,0.045);z-index:4;pointer-events:none;"></div>
      ${cover('47%', '50%', '50%', 0.34, 0.15)}
      ${cover('17%', '31%', '30%', 0.26, 0.11)}
      ${cover('80%', '27%', '30%', 0.26, 0.11)}
      ${cover('13%', '70%', '28%', 0.24, 0.10)}
      ${cover('68%', '76%', '30%', 0.26, 0.11)}
      ${cover('40%', '90%', '26%', 0.22, 0.10)}

      <!-- Search bar -->
      <div style="position:absolute;left:14px;right:14px;top:14px;z-index:15;background:white;border-radius:10px;box-shadow:0 4px 14px rgba(11,16,32,0.16);padding:10px 14px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:13px;color:#5F6368;">&#128269;</span>
        <span style="font-size:13px;color:#3C4043;flex:1;">landscaper near me</span>
      </div>

      <!-- Covered cities -->
      ${pin('14%','26%','Oakville')}
      ${pin('78%','22%','Fairview')}
      ${pin('10%','66%','Millbrook')}
      ${pin('66%','72%','Riverside')}
      ${pin('38%','88%','Elmwood')}

      <!-- Home business: large pin + #1 badge + info card -->
      <div style="position:absolute;left:47%;top:50%;transform:translate(-50%,-100%);z-index:20;">${PIN_L}</div>
      <div style="position:absolute;left:52%;top:39%;transform:translate(-50%,-50%);z-index:21;width:23px;height:23px;border-radius:50%;background:#F6413E;color:white;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 7px rgba(0,0,0,0.28);border:2px solid white;">1</div>
      <div style="position:absolute;left:41%;top:41%;z-index:22;background:white;border-radius:10px;box-shadow:0 8px 20px rgba(11,16,32,0.18);padding:10px 14px;width:174px;box-sizing:border-box;">
        <div style="font-weight:700;font-size:13px;color:#0B1020;white-space:nowrap;">Your Company</div>
        <div style="font-size:11px;color:#6B6F78;margin-top:2px;white-space:nowrap;"><span style="color:#F6413E;">★★★★★</span> 4.9 · 148 reviews</div>
        <div style="display:inline-block;margin-top:5px;font-size:10px;font-weight:700;letter-spacing:0.02em;color:#F6413E;background:rgba(246,65,62,0.1);border-radius:20px;padding:2px 8px;">#1 in local results</div>
      </div>

      <!-- Legend -->
      <div style="position:absolute;left:14px;bottom:14px;z-index:22;background:white;border-radius:20px;box-shadow:0 2px 8px rgba(11,16,32,0.16);padding:5px 12px;display:flex;align-items:center;gap:7px;">
        <span style="width:12px;height:12px;border-radius:50%;background:rgba(246,65,62,0.28);border:1.5px solid #F6413E;display:inline-block;"></span>
        <span style="font-size:11px;font-weight:700;color:#3C4043;">Ranked #1 here</span>
      </div>

      <!-- Zoom control -->
      <div style="position:absolute;right:14px;bottom:44px;z-index:15;background:white;border-radius:8px;box-shadow:0 4px 12px rgba(11,16,32,0.16);overflow:hidden;">
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
