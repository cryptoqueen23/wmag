import { campaigns, type AdSlotId, type Campaign } from "../config/ads";

// Fill priority: paid direct sponsor > affiliate offer > house promotion > nothing.
const TYPE_RANK: Record<Campaign["type"], number> = { sponsor: 3, affiliate: 2, house: 1 };

function isActive(c: Campaign, now: Date): boolean {
  if (c.startDate && now < new Date(c.startDate)) return false;
  if (c.endDate && now > new Date(c.endDate)) return false;
  return true;
}

/** Resolves one ad slot to the best-fit campaign, or null if nothing should render. */
export function resolveSlot(
  slot: AdSlotId,
  opts: { department?: string; now?: Date } = {}
): Campaign | null {
  const now = opts.now ?? new Date();
  const eligible = campaigns.filter(
    (c) =>
      c.slots.includes(slot) &&
      isActive(c, now) &&
      (!c.department || c.department === opts.department)
  );
  if (eligible.length === 0) return null;
  eligible.sort((a, b) => TYPE_RANK[b.type] - TYPE_RANK[a.type] || b.priority - a.priority);
  return eligible[0];
}
