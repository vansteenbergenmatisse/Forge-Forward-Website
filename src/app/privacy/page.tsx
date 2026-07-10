import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ForgeForward's privacy policy: how we collect, use, and protect your information.",
  alternates: { canonical: "https://forgeforward.com/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-ivory">
          <div className="ff-doc">
            <h1>Privacy Policy</h1>
            <p className="lead">Last updated: January 1, 2025</p>

            <p>
              ForgeForward (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>We may collect information that you voluntarily provide when you:</p>
            <ul>
              <li>Fill out a contact or booking form</li>
              <li>Subscribe to our newsletter or marketing emails</li>
              <li>Purchase a subscription or service</li>
              <li>Communicate with us by phone, email, or chat</li>
            </ul>
            <p>This information may include your name, email address, phone number, business name, billing address, and payment details.</p>

            <h3>Information Collected Automatically</h3>
            <p>When you visit our website, we automatically collect certain information, including:</p>
            <ul>
              <li><strong>Log data:</strong> IP address, browser type, pages visited, referring URLs, and the date and time of your visit.</li>
              <li><strong>Cookies and similar technologies:</strong> We use cookies to remember your preferences, understand how you use our site, and deliver relevant advertising.</li>
              <li><strong>Analytics data:</strong> We use third-party analytics tools (such as Google Analytics) to collect aggregated information about how visitors use our site.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (you can opt out at any time)</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Monitor and analyze usage trends to improve user experience</li>
              <li>Detect, investigate, and prevent fraudulent or illegal activity</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li><strong>Service providers:</strong> Trusted vendors who assist us in operating our website and delivering our services (e.g., payment processors, email platforms, hosting providers). These parties are contractually obligated to keep your information confidential.</li>
              <li><strong>Legal requirements:</strong> If required by law or in response to a valid legal process.</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
            </ul>

            <h2>4. Cookies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our website and to hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our service may not function properly.</p>

            <h2>5. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law. When we no longer need your information, we securely delete or anonymize it.</p>

            <h2>6. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information (subject to certain exceptions)</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:hello@forgeforward.com">hello@forgeforward.com</a>.</p>

            <h2>8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites, and we encourage you to review their privacy policies before providing any personal information.</p>

            <h2>9. Children&rsquo;s Privacy</h2>
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete it.</p>

            <h2>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of our services after any changes constitutes your acceptance of the revised policy.</p>

            <h2>11. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:hello@forgeforward.com">hello@forgeforward.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+16469517542">+1 (646) 951-7542</a></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
