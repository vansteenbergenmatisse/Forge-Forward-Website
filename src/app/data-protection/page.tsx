import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Data Protection",
  description: "ForgeForward data protection policy: how we collect, store, and protect your personal information in compliance with GDPR and applicable law.",
  alternates: { canonical: "https://forgeforward.io/data-protection" },
  robots: { index: false },
};

export default function DataProtectionPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-ivory">
          <div className="ff-doc">
            <h1>Data Protection Policy</h1>
            <p className="lead">ForgeForward<br />Effective Date: Jan 1st, 2026</p>

            <h2>Our Commitment</h2>
            <p>ForgeForward is committed to protecting the personal data of our clients, prospects, and website visitors. This policy explains how we collect, use, store, and protect personal information in connection with our website design and digital marketing services for contractors.</p>
            <p>We operate offices in New York, USA and Antwerp, Belgium. As a result, we are subject to applicable data protection laws in both jurisdictions, including the General Data Protection Regulation (GDPR) for individuals in the European Economic Area (EEA).</p>

            <h2>What Personal Data We Collect</h2>
            <p>When you interact with ForgeForward, we may collect the following categories of personal data:</p>
            <ul>
              <li><strong>Contact information:</strong> name, email address, phone number</li>
              <li><strong>Business information:</strong> company name, service area, business type</li>
              <li><strong>Communication records:</strong> messages sent through our contact form, emails, and SMS</li>
              <li><strong>Usage data:</strong> pages visited, time spent on site, referring URLs, browser and device type</li>
              <li><strong>Cookies and tracking data:</strong> as described in our <a href="/privacy">Privacy Policy</a></li>
            </ul>

            <h2>How We Use Your Data</h2>
            <p>We use your personal data only for the following purposes:</p>
            <ul>
              <li>To respond to enquiries submitted through our contact form or booking system</li>
              <li>To deliver the website design and marketing services you have engaged us for</li>
              <li>To send appointment reminders, project updates, and service-related communications</li>
              <li>To send marketing messages where you have given consent (and you can opt out at any time)</li>
              <li>To improve our website and service offering based on usage analytics</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Legal Basis for Processing (GDPR)</h2>
            <p>For individuals in the EEA, we rely on the following legal bases to process your personal data:</p>
            <ul>
              <li><strong>Contract:</strong> processing necessary to deliver services you have engaged us for</li>
              <li><strong>Legitimate interests:</strong> analytics, fraud prevention, and improving our services</li>
              <li><strong>Consent:</strong> marketing communications, SMS messaging, and cookies where required</li>
              <li><strong>Legal obligation:</strong> compliance with applicable law</li>
            </ul>

            <h2>Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. Client project data is retained for a minimum of 5 years following the end of a client engagement for accounting and legal purposes. Marketing contact data is retained until you withdraw consent or request deletion.</p>

            <h2>Data Sharing</h2>
            <p>We do not sell your personal data. We may share data with trusted third-party service providers who assist us in delivering our services, including hosting providers, email platforms, CRM tools, and advertising platforms. All subprocessors are contractually required to protect your data and may only use it as directed by ForgeForward.</p>
            <p>We may disclose personal data where required by law, court order, or to protect the rights, property, or safety of ForgeForward, our clients, or the public.</p>

            <h2>International Data Transfers</h2>
            <p>Your data may be transferred to and processed in countries outside the EEA, including the United States. Where such transfers occur, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission, to maintain the same level of protection required by GDPR.</p>

            <h2>Your Rights</h2>
            <p>If you are located in the EEA or another jurisdiction with applicable data protection law, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data (right to erasure)</li>
              <li>Restrict or object to certain processing activities</li>
              <li>Receive your data in a portable format</li>
              <li>Withdraw consent at any time where processing is based on consent</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:hello@forgeforward.io">hello@forgeforward.io</a>. We will respond within 30 days.</p>

            <h2>Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. These include encrypted data transmission (HTTPS), access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>Cookies</h2>
            <p>Our website uses cookies and similar tracking technologies. For full details, please refer to our <a href="/privacy">Privacy Policy</a>. You can manage your cookie preferences through your browser settings at any time.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this Data Protection Policy from time to time. Material changes will be communicated via email or a notice on our website. The effective date at the top of this page will reflect the most recent revision.</p>

            <h2>Contact and Data Controller</h2>
            <p>ForgeForward is the data controller for personal data processed in connection with our services. If you have any questions about this policy or how your data is handled, please contact us:</p>
            <p>
              Email: <a href="mailto:hello@forgeforward.io">hello@forgeforward.io</a><br />
              Phone: <a href="tel:+16469517542">+1 (646) 951-7542</a><br />
              175 Varick Street, Suite 415, New York, NY 10014, United States<br />
              Londenstraat 3, 2000 Antwerpen, Belgium
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
