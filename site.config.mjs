const DEFAULT_DEV_SITE_URL = 'http://localhost:4321';

function normalizeSiteUrl(value) {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

const rawSiteUrl = process.env.SITE_URL?.trim();

export const siteUrl = normalizeSiteUrl(rawSiteUrl || DEFAULT_DEV_SITE_URL);
