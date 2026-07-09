import type { RoadmapStep, PartnerLogo } from "@/types";

export const partnerLogos: PartnerLogo[] = [
  { src: "/logos/localfalcon.png", alt: "LocalFalcon", height: 40 },
  { src: "/logos/meta.png", alt: "Meta", height: 34 },
  { src: "/logos/godaddy.png", alt: "GoDaddy", height: 58 },
  { src: "/logos/openai.png", alt: "OpenAI", height: 68 },
  { src: "/logos/google-business-profile.png", alt: "Google Business Profile", height: 48 },
  { src: "/logos/ahrefs.png", alt: "Ahrefs", height: 38 },
  { src: "/logos/google-analytics.png", alt: "Google Analytics", height: 40 },
  { src: "/logos/semrush.png", alt: "Semrush", height: 52 },
  { src: "/logos/twilio.png", alt: "Twilio", height: 50 },
  { src: "/logos/google-search-console.png", alt: "Google Search Console", height: 46 },
  { src: "/logos/leadconnector.png", alt: "LeadConnector", height: 46 },
  { src: "/logos/google-ads.png", alt: "Google Ads", height: 58 },
  { src: "/logos/n8n.png", alt: "n8n", height: 40 },
];

export const roadmapSteps: RoadmapStep[] = [
  {
    number: "01",
    title: "Intro Call",
    duration: "15 mins",
    description:
      "We answer your questions, show you the system running on live client accounts, and take a look at your town. If it's not a fit, we'll tell you that too.",
    stat: "15 MIN",
    statLabel: "Your total time",
  },
  {
    number: "02",
    title: "Onboarding Call",
    duration: "15 mins",
    description:
      "You hop on a short call and fill out one onboarding form with your business details together. Then the website, location pages, map profile, calendar, text-back and review engine get built while you stay on the tools.",
    stat: "1 FORM",
    statLabel: "All we need from you",
  },
  {
    number: "03",
    title: "Launch Call",
    duration: "When it's done",
    description:
      "We walk you through your new website and system, flip it live together, and hand you the keys. From there it runs while you work.",
    stat: "15 MIN",
    statLabel: "Then it runs itself",
  },
];

export const trustStats = [
  { value: "7 Days", description: "From kickoff call to your system live and taking leads." },
  { value: "30 Days", description: "Money-back guarantee, any reason, on the annual plan." },
  { value: "$4,985", description: "In bonuses included free when you pay for the year." },
];

export const heroReviews = [
  {
    quote: "Found them on Google, booked online in two minutes. Crew showed up on time and the patio looks unreal.",
    author: "Mike Sanders",
    source: "Google review",
  },
  {
    quote: "Missed their call, got a text back before I could try anyone else. Booked the same day.",
    author: "Jenna Cole",
    source: "Google review",
  },
];
