import FeatureSpotlight from "./FeatureSpotlight";

const websiteMockupHtml = `
<div style="background:white;border:1px solid #E5E0D8;border-radius:16px;box-shadow:0 20px 44px rgba(11,16,32,0.08);width:100%;max-width:440px;overflow:hidden;box-sizing:border-box;">
  <div style="display:flex;align-items:center;gap:8px;padding:10px 14px;background:#F1EDE6;border-bottom:1px solid #E5E0D8;">
    <span style="width:10px;height:10px;border-radius:50%;background:#FC6058;display:inline-block;"></span>
    <span style="width:10px;height:10px;border-radius:50%;background:#FEC02F;display:inline-block;"></span>
    <span style="width:10px;height:10px;border-radius:50%;background:#2ACA44;display:inline-block;"></span>
    <div style="flex:1;margin-left:8px;background:white;border:1px solid #E5E0D8;border-radius:20px;padding:4px 14px;font-size:11px;color:#6B6F78;text-align:center;">yourcompany.com</div>
  </div>
  <div style="position:relative;height:148px;background:linear-gradient(155deg,#0B1020 0%,#161C2C 52%,#2A3350 100%);">
    <div style="position:absolute;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:10px 16px;background:rgba(0,0,0,0.18);">
      <div style="width:72px;height:9px;background:rgba(255,255,255,0.9);border-radius:4px;"></div>
      <div style="display:flex;gap:12px;">
        <div style="width:32px;height:6px;background:rgba(255,255,255,0.5);border-radius:3px;"></div>
        <div style="width:32px;height:6px;background:rgba(255,255,255,0.5);border-radius:3px;"></div>
        <div style="width:32px;height:6px;background:rgba(255,255,255,0.5);border-radius:3px;"></div>
      </div>
      <div style="background:#F6413E;border-radius:20px;padding:4px 12px;font-size:9px;font-weight:700;color:white;">Book a Call</div>
    </div>
    <div style="position:absolute;bottom:0;left:0;right:0;padding:16px 16px 14px;background:linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 100%);">
      <div style="width:72%;height:10px;background:rgba(255,255,255,0.95);border-radius:4px;margin-bottom:5px;"></div>
      <div style="width:50%;height:10px;background:#F6413E;border-radius:4px;margin-bottom:10px;"></div>
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.95);border-radius:20px;padding:5px 14px;">
        <div style="width:34px;height:6px;background:#0B1020;border-radius:3px;"></div>
        <div style="width:8px;height:8px;background:#F6413E;border-radius:50%;flex-shrink:0;"></div>
      </div>
    </div>
  </div>
  <div style="background:#0B1020;padding:7px 16px;display:flex;align-items:center;justify-content:center;gap:14px;">
    <div style="display:flex;align-items:center;gap:4px;">
      <span style="color:#F6413E;font-size:11px;letter-spacing:1px;">★★★★★</span>
      <span style="font-size:10px;font-weight:600;color:white;">4.9 · 148 reviews</span>
    </div>
    <div style="width:1px;height:12px;background:rgba(255,255,255,0.2);"></div>
    <span style="font-size:10px;color:rgba(255,255,255,0.6);">Serving 12+ towns</span>
    <div style="width:1px;height:12px;background:rgba(255,255,255,0.2);"></div>
    <span style="font-size:10px;color:rgba(255,255,255,0.6);">40+ clients</span>
  </div>
  <div style="padding:14px;background:#FCF8F3;display:flex;flex-direction:column;gap:8px;">
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#6B6F78;margin-bottom:2px;">Our Services</div>
    <div style="display:flex;gap:7px;">
      <div style="flex:1;background:white;border:1px solid #E5E0D8;border-radius:10px;padding:10px;box-sizing:border-box;">
        <div style="width:14px;height:14px;background:#F6413E;border-radius:4px;margin-bottom:6px;"></div>
        <div style="width:75%;height:6px;background:#0B1020;border-radius:3px;margin-bottom:5px;"></div>
        <div style="width:100%;height:4px;background:#E5E0D8;border-radius:2px;margin-bottom:3px;"></div>
        <div style="width:65%;height:4px;background:#E5E0D8;border-radius:2px;"></div>
      </div>
      <div style="flex:1;background:white;border:1px solid #E5E0D8;border-radius:10px;padding:10px;box-sizing:border-box;">
        <div style="width:14px;height:14px;background:#F6413E;border-radius:4px;margin-bottom:6px;"></div>
        <div style="width:60%;height:6px;background:#0B1020;border-radius:3px;margin-bottom:5px;"></div>
        <div style="width:100%;height:4px;background:#E5E0D8;border-radius:2px;margin-bottom:3px;"></div>
        <div style="width:80%;height:4px;background:#E5E0D8;border-radius:2px;"></div>
      </div>
      <div style="flex:1;background:white;border:1px solid #E5E0D8;border-radius:10px;padding:10px;box-sizing:border-box;">
        <div style="width:14px;height:14px;background:#F6413E;border-radius:4px;margin-bottom:6px;"></div>
        <div style="width:80%;height:6px;background:#0B1020;border-radius:3px;margin-bottom:5px;"></div>
        <div style="width:100%;height:4px;background:#E5E0D8;border-radius:2px;margin-bottom:3px;"></div>
        <div style="width:55%;height:4px;background:#E5E0D8;border-radius:2px;"></div>
      </div>
    </div>
    <div style="display:flex;gap:7px;margin-top:2px;">
      <div style="flex:1;height:50px;border-radius:8px;background:linear-gradient(135deg,#2A3145,#454E68);"></div>
      <div style="flex:1;height:50px;border-radius:8px;background:linear-gradient(135deg,#3B4358,#5A6480);"></div>
      <div style="flex:1;height:50px;border-radius:8px;background:linear-gradient(135deg,#222839,#3C4560);"></div>
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
