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
            <h1>Terms of Service</h1>
            <p className="lead">ForgeForward &mdash; Effective Date: January 1st, 2026</p>

            {/* ── SMS Compliance ── */}
            <h2>SMS Messaging Terms &amp; Compliance</h2>

            <h3>1. Program Description</h3>
            <p>This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with ForgeForward through our website at forgeforward.com, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.</p>

            <h3>2. Cancellation Instructions</h3>
            <p>You can cancel the SMS service at any time. Simply text &ldquo;STOP&rdquo; to the same number that sent you messages (+1 (646) 951-7542). Upon sending &ldquo;STOP,&rdquo; we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</p>

            <h3>3. Support Information</h3>
            <p>If you experience issues with the messaging program, reply with the keyword &ldquo;HELP&rdquo; for more assistance, or reach out directly to <a href="mailto:hello@forgeforward.com">hello@forgeforward.com</a> or call <a href="tel:+16469517542">+1 (646) 951-7542</a> during business hours.</p>

            <h3>4. Carrier Liability</h3>
            <p>Carriers are not liable for delayed or undelivered messages.</p>

            <h3>5. Message &amp; Data Rates</h3>
            <p>Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.</p>

            <h3>6. Supported Carriers</h3>
            <p>Our SMS program works with all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, Sprint, and most regional carriers.</p>

            <h3>7. Age Restriction</h3>
            <p>You must be 18 years or older to participate in our SMS program.</p>

            <h3>8. Privacy Policy</h3>
            <p>For privacy-related inquiries, please refer to our <a href="/privacy">Privacy Policy</a>.</p>
            <p>We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.</p>

            {/* ── General Terms ── */}
            <h2>General Terms</h2>
            <p>This website (the &ldquo;Site&rdquo;) is owned and operated by ForgeForward (&ldquo;COMPANY,&rdquo; &ldquo;we&rdquo; or &ldquo;us&rdquo;). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our <a href="/privacy">Privacy Policy</a>, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from ForgeForward.</p>
            <p>Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.</p>
            <p>We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.</p>

            {/* ── IP ── */}
            <h2>Intellectual Property Rights</h2>
            <h3>Our Limited License to You</h3>
            <p>This Site and all the materials available on the Site are the property of ForgeForward and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.</p>
            <p>You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us. Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.</p>
            <h3>Your License to Us</h3>
            <p>By posting or submitting any material (including comments, photos, and business information) to us via the Site, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material solely for the purpose of delivering our Services.</p>

            {/* ── Subscriptions ── */}
            <h2>Subscriptions and Billing</h2>
            <h3>Subscription Plans</h3>
            <p>Our Services are offered on a subscription basis. By purchasing a subscription, you authorize us to charge your payment method on a recurring basis (monthly or annually) until you cancel.</p>
            <h3>Pricing</h3>
            <p>All prices are listed in US dollars. We reserve the right to change our pricing at any time. Price changes will be communicated to existing subscribers at least 30 days in advance.</p>
            <h3>Cancellation</h3>
            <p>You may cancel your subscription at any time by contacting us at <a href="mailto:hello@forgeforward.com">hello@forgeforward.com</a>. Cancellation takes effect at the end of the current billing period. We do not provide prorated refunds for cancellations mid-period, except as described in our Money-Back Guarantee below.</p>

            {/* ── Guarantee ── */}
            <h2>Money-Back Guarantee</h2>
            <p>Annual plan subscribers are eligible for a full refund within 30 days of purchase. To request a refund, email <a href="mailto:hello@forgeforward.com">hello@forgeforward.com</a> within 30 days of your initial payment. No questions asked. This guarantee applies to the annual plan only and does not apply to monthly subscriptions or renewal payments.</p>

            {/* ── Disclaimers ── */}
            <h2>Disclaimers</h2>
            <p>Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites, or the information, products, or services offered on or through them.</p>
            <p>The information, products, and services offered on or through the Site are provided &ldquo;as is&rdquo; and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose. We make no guarantees regarding specific results, including leads generated, revenue earned, or search engine rankings.</p>
            <p>You agree at all times to indemnify and hold harmless ForgeForward, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.</p>

            {/* ── Online Commerce ── */}
            <h2>Online Commerce</h2>
            <p>Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.</p>
            <p>Your participation in any dealings with third-party vendors is solely between you and the third party. ForgeForward shall not be responsible for any loss or damage incurred as a result of such dealings.</p>

            {/* ── Registration ── */}
            <h2>Registration &amp; Passwords</h2>
            <p>To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.</p>
            <p>If you suspect unauthorized use of your account, notify us immediately at <a href="mailto:hello@forgeforward.com">hello@forgeforward.com</a>. We are not liable for any loss or damage arising from your failure to comply with this obligation.</p>

            {/* ── Termination ── */}
            <h2>Termination</h2>
            <p>We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.</p>

            {/* ── Governing Law ── */}
            <h2>Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York. Any dispute arising under these Terms shall be resolved exclusively in the state or federal courts located in New York County, New York.</p>

            {/* ── Changes ── */}
            <h2>Changes to Terms of Service</h2>
            <p>We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.</p>

            {/* ── Contact ── */}
            <h2>Contact Us</h2>
            <p>For any questions regarding these Terms of Service, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:hello@forgeforward.com">hello@forgeforward.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+16469517542">+1 (646) 951-7542</a></li>
              <li><strong>Address:</strong> 175 Varick Street, Suite 415, New York, NY 10014</li>
              <li><strong>Website:</strong> <a href="https://forgeforward.com">forgeforward.com</a></li>
            </ul>
            <p>By using our website and services, you consent to these Terms of Service.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
