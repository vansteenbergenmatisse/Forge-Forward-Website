"use client";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { BOOK_CALL_URL } from "@/lib/constants";
import { coreItems, bonusItems, PRICES } from "@/data/pricing";

/**
 * Per-service display metadata (icon + a short one-line blurb + a tidy label).
 * Keyed by the exact title in data/pricing.ts so the row set and its
 * monthly/yearly inclusion stay single-sourced there — this map only adds the
 * icon and the compact copy the matrix needs. The in-depth explanation behind
 * the eye icon comes straight from each item's `body` in data/pricing.ts.
 */
const META: Record<string, { label: string; blurb: string; icon: string }> = {
  "Functional Website (15 to 20 pages)": { label: "Functional Website", blurb: "A fast site that sells and books quotes for you.", icon: "Monitor" },
  "Google My Business Optimization": { label: "Google Business Profile", blurb: "A fully built profile so you climb the map.", icon: "MapPin" },
  "On-Site SEO": { label: "On-Site SEO", blurb: "Schema, titles and a sitemap Google reads clean.", icon: "Search" },
  "AI Search Ranking (ChatGPT)": { label: "AI Search Ranking", blurb: "You get named when homeowners ask AI.", icon: "Sparkles" },
  "Command Center (your CRM)": { label: "Command Center (CRM)", blurb: "Every lead, text and email in one inbox.", icon: "Inbox" },
  "Self-Booking Calendar (AI)": { label: "Self-Booking Calendar", blurb: "Jobs land on your calendar on their own.", icon: "Calendar" },
  "Missed Call Text Back (AI)": { label: "Missed-Call Text Back", blurb: "AI texts back in 5 seconds, quotes and books.", icon: "MessageSquare" },
  "Automated Lead Follow-Up (AI)": { label: "Automated Lead Follow-Up", blurb: "Three follow-ups per lead, three reminders per job.", icon: "Repeat" },
  "5-Star Review Funnel (Automation)": { label: "5-Star Review Funnel", blurb: "Auto-asks happy customers the moment jobs wrap.", icon: "Star" },
  "One-Click Marketing Campaigns": { label: "One-Click Marketing Campaigns", blurb: "Referral and repeat-business campaigns we run for you.", icon: "Megaphone" },
  "Maps Multiplier": { label: "Maps Multiplier", blurb: "Apple Maps, Bing Places and Yelp, added day one.", icon: "Map" },
  "Citation Cascade": { label: "Citation Cascade", blurb: "Listed on YellowPages, Thumbtack, Nextdoor and more.", icon: "List" },
  "Pipeline Pilot": { label: "Pipeline Pilot", blurb: "Automations move every lead through your pipeline.", icon: "GitBranch" },
  "Review Responder": { label: "Review Responder", blurb: "Every Google review answered, naming your city.", icon: "MessageCircle" },
  "Profile Poster": { label: "Profile Poster", blurb: "Posts to your Google profile 2 to 3 times a week.", icon: "Send" },
};

const ICON_PATHS: Record<string, string> = {
  Monitor: "M3 4h18v12H3z M8 20h8 M12 16v4",
  MapPin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  Search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.35-4.35",
  Sparkles: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z",
  Inbox: "M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
  Calendar: "M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M16 2v4 M8 2v4 M3 10h18",
  MessageSquare: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  Repeat: "M17 1l4 4-4 4 M3 11V9a4 4 0 0 1 4-4h14 M7 23l-4-4 4-4 M21 13v2a4 4 0 0 1-4 4H3",
  Star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  Megaphone: "M3 11l18-5v12L3 14v-3z M11.6 16.8a3 3 0 1 1-5.8-1.6",
  Map: "M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z M8 2v16 M16 6v16",
  List: "M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01",
  GitBranch: "M6 3v12 M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M15 6a9 9 0 0 1-9 9",
  MessageCircle: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
  Send: "M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z",
  Eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
};

function ServiceIcon({ name }: { name: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-navy flex-none" aria-hidden="true">
      <path d={ICON_PATHS[name] ?? ""} />
    </svg>
  );
}

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red/10" aria-label="Included">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

function Dash() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7" aria-label="Not included">
      <span className="w-3 h-[2px] rounded-full bg-slate/30" aria-hidden="true"></span>
    </span>
  );
}

interface Item { title: string; body: string; }

function Row({ item, monthly, open, onToggle }: { item: Item; monthly: boolean; open: boolean; onToggle: () => void }) {
  const meta = META[item.title] ?? { label: item.title, blurb: "", icon: "" };
  const detailId = `feat-detail-${item.title.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`;
  return (
    <>
      <tr className="border-t border-hairline">
        <td className="py-4 pr-3">
          <div className="flex items-start gap-3">
            <ServiceIcon name={meta.icon} />
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-[15px] text-navy leading-tight">{meta.label}</span>
              {meta.blurb && <span className="mt-0.5 text-[13px] leading-snug text-slate hidden sm:block">{meta.blurb}</span>}
            </div>
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={open}
              aria-controls={detailId}
              aria-label={`${open ? "Hide" : "Show"} details for ${meta.label}`}
              className={`ml-1 flex-none inline-flex items-center justify-center w-7 h-7 rounded-full border transition-colors duration-200 cursor-pointer ${open ? "bg-navy border-navy text-white" : "bg-white border-hairline text-slate hover:text-navy hover:border-navy/40"}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={ICON_PATHS.Eye} />
              </svg>
            </button>
          </div>
        </td>
        <td className="py-4 text-center align-middle">{monthly ? <Check /> : <Dash />}</td>
        <td className="py-4 text-center align-middle bg-red/[0.035]"><Check /></td>
      </tr>
      {open && (
        <tr>
          <td colSpan={3} className="pb-4 pt-0">
            <div id={detailId} className="ff-detail-in rounded-xl bg-ivory border border-hairline px-4 py-3 text-[13.5px] leading-[1.6] text-slate">
              {item.body}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

function BandRow({ label }: { label: string }) {
  return (
    <tr>
      <td className="pt-8 pb-2">
        <span className="text-[12px] font-bold tracking-[0.08em] uppercase text-red">{label}</span>
      </td>
      <td className="pt-8 pb-2 bg-transparent"></td>
      <td className="pt-8 pb-2 bg-red/[0.035]"></td>
    </tr>
  );
}

export default function FeatureMatrix() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const toggle = (key: string) => setOpenKey((cur) => (cur === key ? null : key));

  return (
    <section className="bg-ivory">
      <div className="max-w-[920px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(48px,6vw,88px)]">
        <Reveal className="bg-white border border-hairline rounded-[20px] shadow-[0_20px_44px_rgba(11,16,32,0.06)] px-[clamp(16px,3vw,36px)] pb-[clamp(20px,3vw,32px)] pt-2 overflow-x-auto">
          <table className="w-full border-collapse min-w-[460px]">
            <colgroup>
              <col />
              <col className="w-[84px] sm:w-[132px]" />
              <col className="w-[84px] sm:w-[132px]" />
            </colgroup>
            <thead>
              <tr>
                <th className="sticky top-0 z-10 bg-white text-left pt-6 pb-4 align-bottom">
                  <span className="font-display font-black text-[clamp(20px,2.4vw,28px)] leading-[1.1] tracking-[-0.01em] text-navy">
                    Everything you get
                  </span>
                  <span className="block mt-1 text-[12.5px] font-normal text-slate normal-case tracking-normal">Tap the eye on any line for the full detail.</span>
                </th>
                <th className="sticky top-0 z-10 bg-white pt-6 pb-4 text-center align-bottom">
                  <span className="block text-[13px] font-bold tracking-[0.04em] uppercase text-slate">Monthly</span>
                  <span className="block mt-1 font-display font-extrabold text-[20px] text-navy leading-none">{PRICES.monthly.amount}</span>
                  <span className="block text-[12px] font-semibold text-slate">{PRICES.monthly.unit}</span>
                </th>
                <th className="sticky top-0 z-10 bg-red/[0.06] rounded-t-xl pt-6 pb-4 text-center align-bottom">
                  <span className="inline-block mb-1 rounded-full bg-red text-white px-2.5 py-0.5 text-[10px] font-bold tracking-[0.06em] uppercase">Best value</span>
                  <span className="block text-[13px] font-bold tracking-[0.04em] uppercase text-slate">Yearly</span>
                  <span className="block mt-1 font-display font-extrabold text-[20px] text-navy leading-none">{PRICES.annual.amount}</span>
                  <span className="block text-[12px] font-semibold text-slate">{PRICES.annual.unit}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <BandRow label="Core system · in every plan" />
              {coreItems.map((item) => (
                <Row key={item.title} item={item} monthly={true} open={openKey === item.title} onToggle={() => toggle(item.title)} />
              ))}
              <BandRow label="Annual bonus stack · yearly only" />
              {bonusItems.map((item) => (
                <Row key={item.title} item={item} monthly={false} open={openKey === item.title} onToggle={() => toggle(item.title)} />
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-[14px] text-slate">
            Go yearly and the whole bonus stack comes free. {PRICES.annual.note}
          </p>
          <Button href={BOOK_CALL_URL} external variant="dark" arrowBadge>Book a Call</Button>
        </Reveal>
      </div>
    </section>
  );
}
