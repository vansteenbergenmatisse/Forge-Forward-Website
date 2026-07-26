import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Earnings Disclaimer",
  description: "ForgeForward earnings disclaimer: individual results from our marketing and website services will vary.",
  alternates: { canonical: "https://forgeforward.io/earnings-disclaimer" },
  robots: { index: false },
};

export default function EarningsDisclaimerPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-ivory">
          <div className="ff-doc">
            <h1>Earnings Disclaimer</h1>
            <p className="lead">ForgeForward<br />Effective Date: Jan 1st, 2026</p>

            <h2>No Earnings Projections or Guarantees</h2>
            <p>ForgeForward provides website design and digital marketing systems for contractors. We do not make any promises, guarantees, or warranties regarding the revenue, leads, or business growth you may achieve by using our services.</p>
            <p>Any figures or examples of client results shared on this website, in our marketing materials, or during sales conversations are illustrative examples only. They are not guarantees that you will achieve similar results. Individual outcomes depend on a wide range of factors outside our control.</p>

            <h2>Results Are Not Typical</h2>
            <p>The client results referenced on this website represent exceptional outcomes achieved by specific contracting businesses under specific circumstances. These results should not be interpreted as average or expected outcomes. Most clients will experience different results based on their unique situation, market, and effort.</p>
            <p>References to clients growing from a specific revenue level to a higher one are provided for illustrative purposes only and do not constitute a promise or guarantee that you will achieve the same.</p>

            <h2>Factors That Affect Your Results</h2>
            <p>Your results as a ForgeForward client will depend on many variables, including but not limited to:</p>
            <ul>
              <li>The size and competitiveness of your local market</li>
              <li>Your existing reputation, reviews, and word-of-mouth referrals</li>
              <li>The quality of your work and customer service</li>
              <li>Your sales skills and ability to close leads into paying clients</li>
              <li>Your advertising budget and willingness to invest in growth</li>
              <li>The amount of time and effort you dedicate to implementing our systems</li>
              <li>General economic conditions in your region</li>
              <li>Seasonal fluctuations in your industry</li>
              <li>Your capacity to fulfill increased demand (crew size, equipment, scheduling)</li>
            </ul>
            <p>Because these factors differ from business to business, ForgeForward cannot and does not predict or guarantee specific outcomes for any client.</p>

            <h2>Business Risk Acknowledgment</h2>
            <p>Running a contracting business and investing in marketing involves inherent risk. While our systems are designed to generate leads and grow your client base, there is no guarantee that any specific marketing investment will produce a positive financial return. You accept full responsibility for your business decisions, including the decision to work with ForgeForward.</p>
            <p>Digital marketing results can be affected by algorithm changes, platform policy updates, increased local competition, and other factors outside our control. We make no representations about the stability or permanence of any advertising platform or search ranking.</p>

            <h2>Forward-Looking Statements</h2>
            <p>Any statements on this website that refer to expected or projected outcomes, potential lead volume, anticipated revenue growth, or similar future results are forward-looking statements based on our experience and opinions. These statements reflect our genuine beliefs but are not guarantees of future performance. Actual results may differ materially from any projections or expectations expressed.</p>

            <h2>Due Diligence and Professional Advice</h2>
            <p>Before making any business or financial decisions based on information from ForgeForward, we encourage you to conduct your own due diligence. Consult with qualified professionals such as a business advisor, accountant, or attorney as appropriate for your situation. ForgeForward does not provide legal, financial, or accounting advice.</p>

            <h2>Pricing</h2>
            <p>The prices charged for ForgeForward services are set by ForgeForward and reflect the value of the work delivered. Our pricing bears no implied relationship to any expected return on investment or projected earnings outcome for your business.</p>

            <h2>Contact</h2>
            <p>If you have questions about this disclaimer, please contact us at <a href="mailto:hello@forgeforward.io">hello@forgeforward.io</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
