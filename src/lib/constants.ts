// Book a Call CTAs point to the on-site contact page (was an iClosed booking link).
export const BOOK_CALL_URL = "/contact";

export const CONTACT = {
  email: "hello@forgeforward.io",
  phone: "+16469517542",
  phoneDisplay: "+1 (646) 951-7542",
  address: ["175 Varick Street, Suite 415", "New York, NY 10014", "United States"],
  address2: ["Londenstraat 3", "2000 Antwerpen", "Belgium"],
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61591336385319",
  instagram: "https://www.instagram.com/forgeforward.io/",
  youtube: "https://youtube.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;
