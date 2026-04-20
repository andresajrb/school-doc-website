const DRIVE_ID_PATTERNS = [
  /\/file\/d\/([a-zA-Z0-9_-]+)/,
  /\/folders\/([a-zA-Z0-9_-]+)/,
  /[?&]id=([a-zA-Z0-9_-]+)/,
];

export function extractDriveId(url: string): string | null {
  for (const re of DRIVE_ID_PATTERNS) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}

export function getDriveViewUrl(idOrUrl: string): string {
  const id = extractDriveId(idOrUrl) ?? idOrUrl;
  return `https://drive.google.com/file/d/${id}/view`;
}

export function getDriveEmbedUrl(idOrUrl: string): string {
  const id = extractDriveId(idOrUrl) ?? idOrUrl;
  return `https://drive.google.com/file/d/${id}/preview`;
}

export function isDriveUrl(url: string): boolean {
  return /^https?:\/\/(drive|docs)\.google\.com\//.test(url);
}

export function isPlaceholder(url: string): boolean {
  return url === '#' || url === '' || url.startsWith('placeholder:');
}
