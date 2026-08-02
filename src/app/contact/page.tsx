"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MARKETING_CONSENT =
  "I consent to receive recurring marketing text messages from ForgeForward about special offers, discounts, and promotions at the phone number provided. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out. Consent is not a condition of purchase.";

const NONMARKETING_CONSENT =
  "I consent to receive recurring non-marketing text messages from ForgeForward about responses to my inquiry, requested follow-ups, appointment confirmations, reminders, rescheduling updates, and customer support. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out.";

function SmsCheckbox({
  id,
  checked,
  onChange,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-colors select-none ${
        checked
          ? "border-red bg-red/5"
          : "border-hairline bg-white hover:border-gray-cool"
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        className={`mt-[2px] flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
          checked ? "bg-red border-red" : "border-hairline bg-white"
        }`}
      >
        {checked && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="text-[14px] leading-[1.65] text-slate">{children}</span>
    </label>
  );
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [consentNonMarketing, setConsentNonMarketing] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!agreedToTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy to continue.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, consentMarketing, consentNonMarketing, agreedToTerms }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-hairline bg-white text-navy text-[15px] placeholder:text-gray-cool focus:outline-none focus:border-red transition-colors";

  return (
    <>
      <Navbar />
      <main>
        {/* Hero band */}
        <div className="bg-navy pt-[clamp(72px,9vw,120px)] pb-[clamp(48px,6vw,72px)] text-center px-5">
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-red mb-4">Get in touch</p>
          <h1 className="text-[clamp(34px,5vw,58px)] font-black leading-[1.08] text-ivory mb-4">
            Let&rsquo;s talk about<br />growing your business
          </h1>
          <p className="text-[16px] text-gray-cool max-w-[440px] mx-auto leading-[1.6]">
            Fill out the form and we&rsquo;ll reach out to show you how ForgeForward works for your landscaping business.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-ivory py-[clamp(48px,7vw,96px)] px-5">
          <div className="max-w-[580px] mx-auto">
            {success ? (
              <div className="bg-white rounded-3xl p-[clamp(32px,5vw,56px)] text-center shadow-sm border border-hairline">
                <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12L10 17L19 7" stroke="#1E8A56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-[24px] font-black text-navy mb-3">You&rsquo;re on the list</h2>
                <p className="text-[15px] text-slate leading-[1.65]">
                  Thanks, {name.split(" ")[0]}. We&rsquo;ll be in touch shortly. Keep an eye on your phone.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-[clamp(28px,5vw,52px)] shadow-sm border border-hairline flex flex-col gap-5"
              >
                {/* Contact fields */}
                <div>
                  <label htmlFor="name" className="block text-[13px] font-semibold text-navy mb-1.5">
                    Full name <span className="text-red">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[13px] font-semibold text-navy mb-1.5">
                    Phone number <span className="text-red">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] font-semibold text-navy mb-1.5">
                    Email address <span className="text-red">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="john@yourcompany.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>

                {/* Divider */}
                <div className="h-px bg-hairline" />

                {/* Optional SMS consent */}
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-[13px] font-semibold text-navy">SMS consent</p>
                    <p className="text-[12px] text-gray-cool mt-0.5">Optional. Select any that apply.</p>
                  </div>
                  <SmsCheckbox id="consent-marketing" checked={consentMarketing} onChange={setConsentMarketing}>
                    {MARKETING_CONSENT}
                  </SmsCheckbox>
                  <SmsCheckbox id="consent-nonmarketing" checked={consentNonMarketing} onChange={setConsentNonMarketing}>
                    {NONMARKETING_CONSENT}
                  </SmsCheckbox>
                </div>

                {/* Divider */}
                <div className="h-px bg-hairline" />

                {/* Required terms agreement */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setAgreedToTerms((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === " " || e.key === "Enter") {
                      e.preventDefault();
                      setAgreedToTerms((v) => !v);
                    }
                  }}
                  className={`flex gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-colors select-none ${
                    agreedToTerms
                      ? "border-navy bg-navy/5"
                      : "border-hairline bg-white hover:border-gray-cool"
                  }`}
                >
                  <span
                    className={`mt-[2px] flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                      agreedToTerms ? "bg-navy border-navy" : "border-hairline bg-white"
                    }`}
                  >
                    {agreedToTerms && (
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className="text-[14px] leading-[1.65] text-navy font-medium">
                    I agree to the{" "}
                    <a
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-red hover:text-red-hover underline underline-offset-2"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-red hover:text-red-hover underline underline-offset-2"
                    >
                      Privacy Policy
                    </a>
                    . <span className="text-red">*</span>
                  </span>
                </div>

                {error && (
                  <p className="text-[13.5px] text-red font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 w-full bg-red hover:bg-red-hover disabled:opacity-60 text-white font-bold text-[16px] py-4 rounded-full transition-colors"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
