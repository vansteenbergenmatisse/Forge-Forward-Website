import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "ForgeForward's terms and conditions: the rules governing your use of our website and services.",
  alternates: { canonical: "https://forgeforward.com/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-ivory">
          <div className="ff-doc">
            <h1>Terms &amp; Conditions</h1>
            <p className="lead">Last updated: January 1, 2025</p>

            <p>Please read these Terms and Conditions (&ldquo;Terms&rdquo;) carefully before using the ForgeForward website or any of our services. By accessing or using our services, you agree to be bound by these Terms.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing our website at forgeforward.com or purchasing any of our services, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be bound by them. If you do not agree, you may not use our services.</p>

            <h2>2. Services</h2>
            <p>ForgeForward provides marketing systems and digital services designed for landscaping contractors, including but not limited to website design, local SEO, missed call text-back automation, and marketing campaigns (&ldquo;Services&rdquo;). We reserve the right to modify, suspend, or discontinue any part of the Services at any time with reasonable notice.</p>

            <h2>3. Subscriptions and Billing</h2>
            <h3>Subscription Plans</h3>
            <p>Our Services are offered on a subscription basis. By purchasing a subscription, you authorize us to charge your payment method on a recurring basis (monthly or annually) until you cancel.</p>
            <h3>Pricing</h3>
            <p>All prices are listed in US dollars. We reserve the right to change our pricing at any time. Price changes will be communicated to existing subscribers at least 30 days in advance.</p>
            <h3>Cancellation</h3>
            <p>You may cancel your subscription at any time by contacting us at hello@forgeforward.com. Cancellation takes effect at the end of the current billing period. We do not provide prorated refunds for cancellations mid-period, except as described in our Money-Back Guarantee.</p>

            <h2>4. Money-Back Guarantee</h2>
            <p>Annual plan subscribers are eligible for a full refund within 30 days of purchase. To request a refund, email hello@forgeforward.com within 30 days of your initial payment. No questions asked. This guarantee applies to the annual plan only and does not apply to monthly subscriptions or renewal payments.</p>

            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our Services for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to gain unauthorized access to our systems or other users&rsquo; accounts</li>
              <li>Reverse engineer, decompile, or disassemble any part of our software</li>
              <li>Use our Services to transmit spam, malware, or other harmful content</li>
              <li>Resell, sublicense, or redistribute our Services without our express written permission</li>
              <li>Engage in any activity that disrupts or interferes with the proper operation of our Services</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>All content, features, and functionality of our Services &mdash; including text, graphics, logos, software, and design &mdash; are the exclusive property of ForgeForward and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
            <p>You retain ownership of any content you provide to us. By submitting content (such as photos or business information), you grant us a non-exclusive, worldwide license to use, reproduce, and display that content solely for the purpose of delivering the Services.</p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>Our Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted, error-free, or free of viruses. We make no guarantees regarding specific results, including leads generated, revenue earned, or search engine rankings.</p>

            <h2>8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, ForgeForward shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our Services, even if we have been advised of the possibility of such damages. Our total liability to you for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.</p>

            <h2>9. Indemnification</h2>
            <p>You agree to indemnify and hold harmless ForgeForward and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable attorneys&rsquo; fees) arising out of your use of our Services, your violation of these Terms, or your infringement of any third-party rights.</p>

            <h2>10. Third-Party Services</h2>
            <p>Our Services may integrate with or link to third-party platforms (such as Google, Facebook, or payment processors). Your use of those platforms is governed by their own terms and privacy policies. We are not responsible for the content, practices, or reliability of any third-party services.</p>

            <h2>11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in New York County, New York.</p>

            <h2>12. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of our Services after changes are posted constitutes acceptance of the revised Terms.</p>

            <h2>13. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
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
