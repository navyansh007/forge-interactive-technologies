const BASE = "https://calendly.com/forgeinteractivetechnologies/30min";

const PARAMS = new URLSearchParams({
  background_color: "0a0a0a",
  text_color:       "f0ede6",
  primary_color:    "f5a623",
  hide_gdpr_banner: "1",
}).toString();

export const CALENDLY_POPUP_URL = `${BASE}?${PARAMS}`;
export const CALENDLY_EMBED_URL = `${BASE}?${PARAMS}`;
