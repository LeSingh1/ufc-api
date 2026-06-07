const SITE = "https://site.api.espn.com/apis/site/v2/sports/mma/ufc";
const WEB  = "https://site.web.api.espn.com/apis/common/v3/sports/mma/ufc";

function qs(params) {
  const e = Object.entries(params || {}).filter(([, v]) => v != null);
  return e.length ? "?" + e.map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&") : "";
}
async function get(url) {
  const res = await fetch(url, { headers: { "user-agent": "ufc-api (github.com/LeSingh1/ufc-api)" } });
  if (!res.ok) throw new Error(`ESPN ${res.status} for ${url}`);
  return res.json();
}

// UFC is mma/ufc on ESPN.
export const scoreboard = (params) => get(`${SITE}/scoreboard${qs(params)}`);   // ?dates=YYYYMMDD
export const teams      = () => get(`${SITE}/teams`);
export const team       = (id) => get(`${SITE}/teams/${id}`);
export const roster     = (id) => get(`${SITE}/teams/${id}/roster`);
export const athlete    = (id) => get(`${WEB}/athletes/${id}`);
export const gamelog    = (id) => get(`${WEB}/athletes/${id}/gamelog`);          // per-game log, the prop-model input
export const splits     = (id) => get(`${WEB}/athletes/${id}/splits`);
export const news       = (params) => get(`${SITE}/news${qs(params)}`);
export const summary    = (eventId) => get(`${SITE}/summary${qs({ event: eventId })}`);
export const standings  = () => get(`${SITE}/standings`);
