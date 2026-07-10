import type { AccordionItem, BonusItem, UpsellItem, FaqItem } from "@/types";

export const PRICES = {
  monthly: { amount: "$297", unit: "/mo", note: "Billed every 4 weeks. Plus a $197 one-time setup fee. Cancel anytime." },
  annual: { amount: "$238", unit: "/mo", note: "$3,564, billed one year at a time. Includes 12 weeks free." },
} as const;

export const coreItems: AccordionItem[] = [
  {
    title: "Functional Website (15 to 20 pages)",
    body: "Homepage, service pages and up to 15 pages for the towns you serve. It loads in 2 seconds and shows your best work up top. A homeowner lands and books a quote because the page does the selling for you.",
  },
  {
    title: "Google My Business Optimization",
    body: "We build your profile from A to Z. Hours, services and booking links get set. Photos, prices and keyword descriptions name your city. You climb the map because your profile answers every question Google asks.",
  },
  {
    title: "On-Site SEO",
    body: "Schema markup, clean page titles and a proper sitemap on every page. Google reads your site clean and ranks it because every technical box gets checked. You get listed on Google and Bing from day one.",
  },
  {
    title: "AI Search Ranking (ChatGPT)",
    body: "A homeowner asks ChatGPT for a landscaper near them. Your name comes up. We build your site in the exact format AI search tools read and cite. Most contractors have no clue this exists yet, so you take the top spot before they wake up.",
  },
  {
    title: "Command Center (your CRM)",
    body: "You get your own private CRM. Every lead, text and email lands in one inbox. You stop digging through five apps to find one phone number.",
  },
  {
    title: "Self-Booking Calendar (AI)",
    body: "New jobs land on your calendar on their own. You open your phone on Monday and the week sits booked. Your crew sees a full board before the coffee is done.",
  },
  {
    title: "Missed Call Text Back (AI)",
    body: 'You miss a call up on a job. Five seconds later a text fires: "Sorry, I\'m on a job right now. Tell me what you need and I\'ll get you a price." Our AI answers like a real person. It knows your services and your prices. It gives the caller a real range and books the job straight into your calendar.',
  },
  {
    title: "Automated Lead Follow-Up (AI)",
    body: "One text rarely closes a job. Every lead gets three follow-ups because most contractors quit after one try. Every booked job gets three reminder texts so the homeowner shows up ready.",
  },
  {
    title: "5-Star Review Funnel (Automation)",
    body: "The job wraps and a text asks your happy customer for a review. The ask lands while the yard still smells like fresh mulch. Your stars pile up week after week until you sit above every shop in town.",
  },
  {
    title: "One-Click Marketing Campaigns",
    body: "Done-for-you referral and repeat-business campaigns, run for you every month and built into your plan. One click launches a pre-built campaign that nudges happy customers to send friends your way and pulls past customers back for the next job.",
  },
];

export const bonusItems: BonusItem[] = [
  {
    title: "Maps Multiplier",
    value: "$997 value",
    body: "We add you to Apple Maps, Bing Places and Yelp. iPhone users and Yelp shoppers find you on day one.",
  },
  {
    title: "Citation Cascade",
    value: "$497 value",
    body: "We list you on YellowPages, Manta and the big lead sites like Thumbtack and Nextdoor. We optimize those profiles too. More listings tell Google you are the real deal, so you climb higher.",
  },
  {
    title: "Pipeline Pilot",
    value: "$1,497 value",
    body: "Leads drop into your CRM on their own. Automations watch every stage and fire the right message at the right moment. The pipeline runs while you run the crew.",
  },
  {
    title: "Review Responder",
    value: "$997 value",
    body: "It replies to every Google review for you. Each reply names your service and your city, so even your replies help you rank.",
  },
  {
    title: "Profile Poster",
    value: "$997 value",
    body: "It posts to your Google profile 2 to 3 times a week and names nearby towns. Your profile looks alive while your rival's sits frozen since 2022.",
  },
];

export const upsellItems: UpsellItem[] = [
  {
    title: "Google Ads",
    lead: "So that people don't just find your business, but they find it for the right reasons",
    bullets: ["PPC Ads", "LSA Ads"],
  },
  {
    title: "Advanced SEO",
    lead: "The real deal when it comes to getting your website to the top of Google.",
    bullets: [
      "Backlinks",
      "Directories",
      "Cloudstacks",
      "Press Releases",
      "Heavy Keyword Research",
      "Consistent Blogposts & New Content",
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    q: "Do I pay for ads too?",
    a: "The core system runs on zero ad spend. Google Ads is an add-on and the spend goes on your own card.",
  },
  {
    q: "Do monthly plans get the bonuses?",
    a: "The bonus stack comes with the annual plan. Monthly covers the full core system.",
  },
  {
    q: "Who owns the website and domain?",
    a: "We buy the domain together on the sales call, so the domain sits in your name. Contact us for details on what happens if you ever decide to cancel.",
  },
  {
    q: "How fast am I live?",
    a: "Contact us on the sales call and we'll give you the exact timeline for your market.",
  },
  {
    q: "What is the $197 setup fee for?",
    a: "It covers your website build and system setup in week one. The annual plan skips this fee.",
  },
  {
    q: "Do you work with other landscapers in my town?",
    a: "We keep our client count limited per area. Book a call and we'll check availability in your town.",
  },
  {
    q: "What happens after the first 30 days?",
    a: "The annual plan keeps running for the full year, one year at a time, with your 12 free weeks included. The guarantee covers your first 30 days of risk.",
  },
];
