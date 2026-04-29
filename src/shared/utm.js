const KEY = "pharmmaex_utm";
const FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "device",
  "gclid",
];

export function captureUtmFromUrl() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const incoming = {};
    FIELDS.forEach((f) => {
      const v = params.get(f);
      if (v) incoming[f] = v;
    });
    if (!Object.keys(incoming).length) return;

    const existing = JSON.parse(localStorage.getItem(KEY) || "{}");
    const merged = {
      ...existing,
      ...incoming,
      first_touch_at: existing.first_touch_at || new Date().toISOString(),
      last_touch_at: new Date().toISOString(),
      landing_page: existing.landing_page || window.location.pathname + window.location.search,
      referrer: existing.referrer || document.referrer || "",
    };
    localStorage.setItem(KEY, JSON.stringify(merged));
  } catch {}
}

export function getUtm() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}
