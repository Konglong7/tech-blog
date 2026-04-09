export function normalizeTag(tag: string) {
  return tag.trim().toLowerCase();
}

export function getTagSlug(tag: string) {
  return normalizeTag(tag);
}

export function getTagPath(tag: string) {
  return `/blog/tag/${getTagSlug(tag)}/`;
}

export function matchesTag(tag: string, slug: string) {
  return normalizeTag(tag) === decodeURIComponent(slug).toLowerCase();
}
