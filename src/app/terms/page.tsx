import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "ForgeForward's terms and conditions: the rules governing your use of our website and services.",
  alternates: { canonical: "https://forgeforward.io/terms" },
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
            <p className="lead">ForgeForward<br />Effective Date: Jan 1st, 2026</p>

            <p>Your Terms of Service must identify the sender, provide opt-out and support instructions, disclose frequency, and reference your Privacy Policy. Ensure the following clauses are included:</p>

            <h2>TnC: Business Identity Clause</h2>
            <p>Clearly insert your business name and a brief description of the messages users can expect. This clause gives users an idea of who you are and what you do.</p>

            <h2>TnC: Opt-Out &amp; Support Mechanisms</h2>
            <p>This must cover how users can opt out of messaging and explain how they can get support.</p>
            <p>&ldquo;You can cancel the SMS service at any time. Just text &ldquo;STOP&rdquo; to the +1 (646) 951-7542. After you send the SMS message &ldquo;STOP&rdquo; to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again. If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at hello@forgeforward.io.&rdquo;</p>

            <h2>TnC: Carrier Liability Clause</h2>
            <p>&ldquo;Carriers are not liable for delayed or undelivered messages.&rdquo;</p>

            <h2>TnC: Message Frequency Clause</h2>
            <p>This clause must cover the frequency in which you receive messages as a user.</p>
            <p>&ldquo;As always, message and data rates may apply for any messages sent to you from us and to us from you. You will receive messages related to your appointments, service updates, and customer support. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.&rdquo;</p>

            <h2>TnC: Privacy Policy Link</h2>
            <p>You must have a cross-link to your privacy policy within the Terms of Service.</p>
            <p>&ldquo;If you have any questions regarding privacy, please read our privacy policy: <a href="/privacy">forgeforward.io/privacy</a>&rdquo;</p>

            <h2>SMS Messaging Terms &amp; Compliance</h2>

            <h3>1. Program Description</h3>
            <p>This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with ForgeForward through our website at forgeforward.io, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.</p>

            <h3>2. Cancellation Instructions</h3>
            <p>You can cancel the SMS service at any time. Simply text &ldquo;STOP&rdquo; to the same number that sent you messages. Upon sending &ldquo;STOP,&rdquo; we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</p>

            <h3>3. Support Information</h3>
            <p>If you experience issues with the messaging program, reply with the keyword &ldquo;HELP&rdquo; for more assistance, or reach out directly to <a href="mailto:hello@forgeforward.io">hello@forgeforward.io</a> or call <a href="tel:+16469517542">+1 (646) 951-7542</a> during business hours.</p>

            <h3>4. Carrier Liability</h3>
            <p>Carriers are not liable for delayed or undelivered messages.</p>

            <h3>5. Message &amp; Data Rates</h3>
            <p>Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.</p>

            <h3>6. Supported Carriers</h3>
            <p>Our SMS program works with all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, Sprint, and most regional carriers.</p>

            <h3>7. Age Restriction</h3>
            <p>You must be 18 years or older to participate in our SMS program.</p>

            <h3>8. Privacy Policy</h3>
            <p>For privacy-related inquiries, please refer to our Privacy Policy at <a href="/privacy">forgeforward.io/privacy</a></p>
            <p>We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.</p>

            <h2>General Terms</h2>
            <p>This website (the &ldquo;Site&rdquo;) is owned and operated by ForgeForward (&ldquo;COMPANY,&rdquo; &ldquo;we&rdquo; or &ldquo;us&rdquo;). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from ForgeForward.</p>
            <p>Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.</p>
            <p>We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.</p>

            <h2>Intellectual Property Rights</h2>
            <h3>Our Limited License to You</h3>
            <p>This Site and all the materials available on the Site are the property of ForgeForward and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.</p>
            <p>You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.</p>
            <p>Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.</p>
            <h3>Your License to Us</h3>
            <p>By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.</p>

            <h2>Subscriptions and Billing</h2>
            <h3>Subscription Plans</h3>
            <p>Our Services are offered on a subscription basis. By purchasing a subscription, you authorize us to charge your payment method on a recurring basis (monthly or annually) until you cancel.</p>
            <h3>Pricing</h3>
            <p>All prices are listed in US dollars. We reserve the right to change our pricing at any time. Price changes will be communicated to existing subscribers at least 30 days in advance.</p>
            <h3>Cancellation</h3>
            <p>You may cancel your subscription at any time by contacting us at <a href="mailto:hello@forgeforward.io">hello@forgeforward.io</a>. Cancellation takes effect at the end of the current billing period. We do not provide prorated refunds for cancellations mid-period, except as described in our Money-Back Guarantee.</p>

            <h2>Money-Back Guarantee</h2>
            <p>Annual plan subscribers are eligible for a full refund within 30 days of purchase. To request a refund, email <a href="mailto:hello@forgeforward.io">hello@forgeforward.io</a> within 30 days of your initial payment. No questions asked. This guarantee applies to the annual plan only and does not apply to monthly subscriptions or renewal payments.</p>

            <h2>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our Services for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to gain unauthorized access to our systems or other users&rsquo; accounts</li>
              <li>Reverse engineer, decompile, or disassemble any part of our software</li>
              <li>Use our Services to transmit spam, malware, or other harmful content</li>
              <li>Resell, sublicense, or redistribute our Services without our express written permission</li>
              <li>Engage in any activity that disrupts or interferes with the proper operation of our Services</li>
            </ul>

            <h2>Disclaimers</h2>
            <p>Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.</p>
            <p>The information, products, and services offered on or through the Site are provided &ldquo;as is&rdquo; and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.</p>
            <p>You agree at all times to indemnify and hold harmless ForgeForward, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.</p>

            <h2>Online Commerce</h2>
            <p>Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.</p>
            <p>Your participation in any dealings with third-party vendors is solely between you and the third party. ForgeForward shall not be responsible for any loss or damage incurred as a result of such dealings.</p>

            <h2>Registration &amp; Passwords</h2>
            <p>To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.</p>
            <p>If you suspect unauthorized use of your account, notify us immediately at <a href="mailto:hello@forgeforward.io">hello@forgeforward.io</a>. We are not liable for any loss or damage arising from your failure to comply with this obligation.</p>

            <h2>Termination</h2>
            <p>We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.</p>

            <h2>Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the state in which ForgeForward operates. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.</p>

            <h2>Changes to Terms of Service</h2>
            <p>We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.</p>
            <p>For any questions regarding these Terms of Service, please contact us at:</p>
            <p>
              ForgeForward<br />
              Phone: <a href="tel:+16469517542">+1 (646) 951-7542</a><br />
              Email: <a href="mailto:hello@forgeforward.io">hello@forgeforward.io</a><br />
              Website: <a href="https://forgeforward.io">forgeforward.io</a>
            </p>
            <p>By using our website and services, you consent to these Terms of Service.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
