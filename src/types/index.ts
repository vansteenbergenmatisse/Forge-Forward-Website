export interface AccordionItem {
  title: string;
  body: string;
}

export interface BonusItem extends AccordionItem {
  value: string;
}

export interface UpsellItem {
  title: string;
  lead: string;
  bullets: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RoadmapStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface PartnerLogo {
  src: string;
  alt: string;
  height: number;
  width?: number;
}
