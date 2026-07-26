/**
 * Cancellation reason taxonomy for the offboarding funnel.
 * Each category (the main dropdown option) carries its own set of sub-reasons,
 * revealed as radio options once the category is chosen.
 * Copy is verbatim from the client's approved list.
 */
export type OffboardingReason = {
  /** Stable value stored / sent to the webhook. */
  id: string;
  /** Main reason label shown in the dropdown. */
  label: string;
  /** Sub-reasons shown as radio options once this category is selected. */
  subReasons: string[];
};

export const OFFBOARDING_REASONS: OffboardingReason[] = [
  {
    id: "price",
    label: "The price no longer makes sense for my business",
    subReasons: [
      "The price is currently outside my budget",
      "I am not receiving enough value for the price",
      "I only need part of what is included",
      "My business revenue or marketing budget has decreased",
      "I found a similar solution at a lower price",
    ],
  },
  {
    id: "results",
    label: "I am not getting the results I expected",
    subReasons: [
      "I am not generating enough leads or opportunities",
      "I am not generating enough appointments or customers",
      "The results are taking longer than expected",
      "The leads or opportunities are lower quality than expected",
      "I cannot clearly see a return on my investment",
    ],
  },
  {
    id: "usage",
    label: "I am not using the system enough",
    subReasons: [
      "I do not have enough time to use or manage it",
      "My team is not using it consistently",
      "We do not have enough leads or activity to justify it",
      "I only use a small part of what is included",
      "The system is not part of our normal daily workflow",
    ],
  },
  {
    id: "onboarding",
    label: "The setup or onboarding was not completed properly",
    subReasons: [
      "The account or system was never fully launched",
      "The onboarding process took longer than expected",
      "I was not clear about what I needed to do next",
      "Important features or automations were never activated",
      "My team did not receive enough implementation support",
    ],
  },
  {
    id: "difficulty",
    label: "The system is too difficult or time-consuming to use",
    subReasons: [
      "The dashboard or CRM is confusing",
      "The workflows or automations are difficult to understand",
      "Managing the system requires too much manual work",
      "The system does not fit our existing workflow",
      "My team has difficulty using it correctly",
    ],
  },
  {
    id: "missing_feature",
    label: "It is missing a feature, integration, or service I need",
    subReasons: [
      "I need an integration that is not available",
      "I need better reporting or clearer analytics",
      "I need more automation capabilities",
      "I need more customization or control",
      "I need a feature or managed service that is not included",
    ],
  },
  {
    id: "technical",
    label: "I experienced a technical or reliability problem",
    subReasons: [
      "Forms, calls, messages, or notifications did not work correctly",
      "An automation or workflow failed",
      "The website, CRM, or platform was unreliable",
      "I experienced repeated technical problems",
      "A technical problem affected my leads or customers",
    ],
  },
  {
    id: "support",
    label: "I was not satisfied with the support or service",
    subReasons: [
      "Support took too long to respond",
      "My issue was not fully resolved",
      "Requested changes took too long to complete",
      "Communication and updates were not frequent enough",
      "I did not receive enough proactive help or guidance",
    ],
  },
  {
    id: "switching",
    label: "I am switching to another solution",
    subReasons: [
      "Another provider offers a lower price",
      "Another provider includes more of what I need",
      "Another solution is easier to use",
      "Another provider offers better support or service",
      "We are moving to an internal team, agency, or all-in-one platform",
    ],
  },
  {
    id: "seasonal",
    label: "My need is seasonal or temporarily paused",
    subReasons: [
      "My business is entering a slower season",
      "We are temporarily pausing marketing or operations",
      "We are currently fully booked and do not need more leads",
      "I will not need the system for the next few months",
      "I expect to need the system again later",
    ],
  },
  {
    id: "business_change",
    label: "My business situation or priorities have changed",
    subReasons: [
      "The business is closing or being sold",
      "We have reduced our staff or operating capacity",
      "We currently cannot handle additional leads or customers",
      "We are no longer offering the service this system supports",
      "Our marketing strategy or business priorities have changed",
    ],
  },
  {
    id: "billing",
    label: "I have a billing or contract concern",
    subReasons: [
      "The billing frequency does not work for my business",
      "I was charged an amount I did not expect",
      "The renewal terms were not clear to me",
      "I need a more flexible payment arrangement",
      "I have a concern about the cancellation or contract terms",
    ],
  },
  {
    id: "other",
    label: "Another reason",
    subReasons: [
      "My reason is not listed above",
      "Several of the listed reasons apply",
      "I prefer to explain the reason in writing",
    ],
  },
];
