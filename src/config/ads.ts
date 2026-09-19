// Ad inventory + campaigns. Static config — no ad server, no database.
// See src/lib/promotionEngine.ts for how a slot resolves to a campaign.
// Graduate this to a database/admin UI only once editing this file by hand
// becomes the actual bottleneck (enough live campaigns that config edits
// are a nuisance) — not before.

export const AD_SLOTS = [
  // Homepage
  "homepage-hero-sponsor",
  "homepage-between-section",
  "homepage-featured-sponsor",
  // Article
  "article-after-intro",
  "article-mid",
  "article-end",
  "article-related-sponsor",
  // Department
  "department-section-sponsor",
  "department-native",
  // Newsletter
  "newsletter-primary",
  "newsletter-secondary",
  // Commerce
  "commerce-affiliate",
  "commerce-shopping-edit",
  "commerce-sponsored-recommendation"
] as const;

export type AdSlotId = (typeof AD_SLOTS)[number];

export type CampaignType = "sponsor" | "affiliate" | "house";

export interface Campaign {
  id: string;
  type: CampaignType;
  /** Which slot(s) this campaign is eligible to fill. */
  slots: AdSlotId[];
  /** Optional targeting — only fills the slot on this department. */
  department?: string;
  /** Higher wins when two campaigns of the same type are eligible for the same slot. */
  priority: number;
  /** Inclusive ISO dates. Omit either to run indefinitely in that direction. */
  startDate?: string;
  endDate?: string;
  headline: string;
  body?: string;
  cta: string;
  destinationUrl: string;
  image?: string;
}

// V1 has zero paying advertisers and zero affiliate deals. These "house"
// entries are the ecosystem-promotion fallback the flywheel needs: unsold
// inventory promotes the magazine's own newsletter/issues (or, later, any
// other property in the wider ecosystem — destinationUrl can point anywhere,
// no code change required) rather than sitting empty or showing a blank box.
export const campaigns: Campaign[] = [
  {
    id: "house-newsletter",
    type: "house",
    slots: ["homepage-between-section", "newsletter-primary"],
    priority: 1,
    headline: "Get the magazine in your inbox",
    body: "Editors' picks and the stories women are actually talking about — once a week.",
    cta: "Subscribe",
    destinationUrl: "/#newsletter"
  }
];
