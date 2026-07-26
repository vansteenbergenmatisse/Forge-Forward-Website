import type { AccordionItem, BonusItem, UpsellItem, FaqItem } from "@/types";

export const PRICES = {
  monthly: { amount: "$297", unit: "/mo", note: "Billed every 4 weeks. Plus a $197 one-time Google My Business fee. Cancel anytime." },
  annual: { amount: "$238", unit: "/mo", note: "$3,564 billed for the full year, then 12 weeks free after." },
} as const;

export const coreItems: AccordionItem[] = [
  {
    title: "Functional Website (15 to 20 pages)",
    lead: "A homeowner lands and books a quote because the page does the selling for you.",
    bullets: [
      "Homepage, service and location pages, up to 20 for the towns you serve",
      "Loads in 2 seconds",
      "Shows your best work up top",
    ],
  },
  {
    title: "Google My Business Optimization",
    lead: "We build your profile from A to Z, so you climb the map because it answers every question Google asks.",
    bullets: [
      "Hours, services and booking links all set",
      "Photos, prices and keyword descriptions that name your city",
    ],
  },
  {
    title: "On-Site SEO",
    lead: "Google reads your site clean and ranks it because every technical box gets checked. You get listed on Google and Bing from day one.",
    bullets: [
      "Schema markup on every page",
      "Clean page titles",
      "A proper sitemap",
    ],
  },
  {
    title: "AI Search Ranking (ChatGPT)",
    lead: "A homeowner asks ChatGPT for a landscaper near them and your name comes up.",
    bullets: [
      "Built in the exact format AI search tools read and cite",
      "Most contractors have no clue this exists yet, so you take the top spot before they wake up",
    ],
  },
  {
    title: "Command Center (your CRM)",
    lead: "You get your own private CRM, so you stop digging through five apps to find one phone number.",
    bullets: [
      "Every lead, text and email lands in one inbox",
      "One place for everything",
    ],
  },
  {
    title: "Missed Call Text Back",
    lead: "Four automated tools instantly follow up so no lead goes cold while you are on the tools.",
    bullets: [
      "Covers website forms, live chat, missed calls and Facebook or Instagram messages",
      "Starts the conversation and reassures the customer",
      "Notifies you so you can respond quickly",
    ],
  },
  {
    title: "Automated Lead Follow-Up",
    lead: "One text rarely closes a job, so the system keeps following up where most contractors quit after one try.",
    bullets: [
      "Three follow-ups on every lead",
      "Three reminder texts on every booked job so the homeowner knows you are coming",
    ],
  },
  {
    title: "5-Star Review Funnel",
    lead: "The job wraps and a text asks your happy customer for a review while the yard still smells like fresh mulch.",
    bullets: [
      "Automatic review request the moment a job is done",
      "Your stars pile up week after week until you sit above every shop in town",
    ],
  },
  {
    title: "More Lead Marketing Campaigns",
    lead: "Three automated campaigns run in the background long after the job is done.",
    bullets: [
      "Old Lead Revival: we text and email every old contact with a strong offer so leads you already paid for turn back into quotes",
      "Past Customer Review Campaign: past customers get a direct link to your Google profile, turning old jobs into fresh reviews",
      "Seasonal Promotion Campaigns: holiday and seasonal offers go out every month or quarter so new jobs land whenever the schedule looks empty",
    ],
  },
];

export const bonusItems: BonusItem[] = [
  {
    title: "Maps Multiplier",
    value: "$1,497 value",
    body: "We create and optimize your listings on Apple Maps, Bing Places, Yelp and Facebook Recommendations, plus your Better Business Bureau and local Chamber of Commerce profiles if you want. Nearly 6 in 10 U.S. mobile users are on Apple devices, and Bing handles about 1 in 9 U.S. desktop searches, so more homeowners can find you.",
  },
  {
    title: "Citation Cascade",
    value: "$997 value",
    body: "We list your business on YellowPages, Manta and trusted local directories, then optimize your profiles on Thumbtack, HomeAdvisor and Nextdoor. You get found in more places, and consistent listings help Google trust your business.",
  },
  {
    title: "Pipeline Pilot",
    value: "$497 value",
    body: "Every lead enters your CRM, moves into the right stage and gets the correct follow-up. Fewer leads get lost, and more quote requests become booked jobs.",
  },
  {
    title: "Review Responder",
    value: "$997 value",
    body: "We automatically reply to every Google review with a professional, personalized response. Your profile stays active and shows homeowners that you care about your customers.",
  },
  {
    title: "Profile Poster",
    value: "$997 value",
    body: "We publish two to three Google Business Profile posts each week about your services, completed jobs, offers and nearby towns. Homeowners see fresh proof that you are active in their area.",
  },
];

export const upsellItems: UpsellItem[] = [
  {
    title: "Google Ads: PPC",
    lead: "Pay-per-click ads that put you at the top of Google the moment they go live, for when you want leads faster than SEO ramps up.",
    bullets: [
      "Search ads on your highest-intent keywords",
      "You only pay when someone clicks",
      "Every dollar of spend stays on your card, we never touch your budget",
    ],
  },
  {
    title: "Google Ads: LSA",
    lead: "Local Services Ads with the Google Guaranteed badge, the green-check calls that sit at the very top of search.",
    bullets: [
      "Google Guaranteed badge",
      "Pay per lead, not per click",
      "Shows above the regular search ads",
    ],
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
  {
    title: "AI Chat & Calendar Booking Agent",
    lead: "An AI agent that replies the second a lead messages, answers their questions, and books the appointment straight into your calendar, day or night. It goes beyond the text-back in your core system by holding the full conversation and closing the booking across every channel.",
    bullets: [
      "Works across Facebook, Instagram, WhatsApp, website live chat and text",
      "Answers common questions and FAQs instantly",
      "Books appointments into your calendar automatically, 24/7",
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    q: "Do I pay for ads too?",
    a: "No. The entire system (website, SEO, AI tools, automations) runs with zero ad spend. You rank on Google Maps and show up in ChatGPT through the work we put in, not a monthly charge from Google. If you ever want to layer paid ads on top to accelerate growth, Google Ads is an optional add-on and every dollar of spend goes directly on your card. We never touch your ad budget.",
  },
  {
    q: "Do monthly plans get the bonuses?",
    a: "The bonus stack, Maps Multiplier, Citation Cascade, Pipeline Pilot, Review Responder, and Profile Poster ($4,985 combined value), is exclusive to the annual plan. Monthly gives you the full core system: website, SEO, CRM, automated lead response, follow-up, review funnel, and marketing campaigns. The bonuses are there to reward the commitment of going annual and they stack on top of everything the core system already does.",
  },
  {
    q: "Who owns the website and domain?",
    a: "You do. We buy the domain together on the sales call, registered in your name from day one. The site is built on hosting you control. If you ever cancel, you keep the domain. Reach out on the call and we'll walk you through exactly what that looks like for the site itself.",
  },
  {
    q: "How fast am I live?",
    a: "Most clients are fully live within 2 to 3 weeks of the kickoff call. Week one is intake, setup, and system access. Week two is build and review. Week three is launch. Markets with more complexity sometimes take a day or two longer, we'll give you the exact timeline for your market on the call.",
  },
  {
    q: "What is the $197 Google My Business fee for?",
    a: "It's a one-time charge to set up and optimize your Google My Business profile in week one: claiming and verifying your listing, dialing in your categories and service areas, loading photos and posts, and wiring it into your review system so you start showing up in the map pack. It's a one-time charge, not recurring. On the annual plan it's waived entirely. On the monthly plan, think of it this way: your plan is $297/mo, so by month seven the extra revenue the profile has brought in has more than paid it back. It's front-loaded because the setup work is front-loaded, and it keeps us from raising the monthly price for everyone just to absorb that week-one cost.",
  },
  {
    q: "When am I going to start seeing results?",
    a: "The AI tools, missed call text back, automated follow-up and review funnel go live on day one and start working the moment a lead hits your number. SEO and Google Maps take longer. Expect to see movement in search rankings within 60 to 90 days and meaningful map visibility within 90 to 120 days, depending on your market and current review count. Results also depend on your commitment to the system: responding to leads, collecting reviews, and showing up for the jobs it brings in. We give you the engine, you still have to drive. Contractors who stay consistent past the first season consistently see their pipeline full heading into the next year.",
  },
  {
    q: "What happens after the first 30 days?",
    a: "The guarantee covers your first 30 days, if the system isn't working, you get your money back, no fight. After that, it keeps running: automations firing, reviews stacking, your site ranking higher week after week. Monthly plans bill every 4 weeks and can be cancelled at any time. Annual plans run for one full year, with your 12 weeks free already baked into the $238/mo rate. No surprise charges, no hidden fees, no long-term lock-in beyond the plan you signed up for.",
  },
];
