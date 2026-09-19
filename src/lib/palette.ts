const plates = [
  { from: "#5a1738", to: "#2f0c1d" },
  { from: "#7a2e1f", to: "#3c150e" },
  { from: "#33463a", to: "#151f1a" },
  { from: "#8a6a34", to: "#3c2e17" }
];

export function plateFor(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return plates[hash % plates.length];
}
