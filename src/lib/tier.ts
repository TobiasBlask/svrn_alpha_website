export const TIERS = [
  "free",
  "equities",
  "crypto",
  "commodities",
  "house",
  "elite",
  "circle",
] as const;
export type Tier = (typeof TIERS)[number];

const UNLOCKS: Record<Tier, Tier[]> = {
  free: ["free", "equities", "crypto", "commodities", "house", "elite", "circle"],
  equities: ["equities", "house", "elite", "circle"],
  crypto: ["crypto", "house", "elite", "circle"],
  commodities: ["commodities", "house", "elite", "circle"],
  house: ["house", "elite", "circle"],
  elite: ["elite", "circle"],
  circle: ["circle"],
};

/** Mirrors the Postgres tier_unlocks() function. */
export function tierUnlocks(userTier: Tier, required: Tier): boolean {
  return UNLOCKS[required].includes(userTier);
}
