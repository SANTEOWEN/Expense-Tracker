export function hexWithAlpha(hex: string, alpha: number): string {
  const raw = hex.replace('#', '');
  const len = raw.length;

  const r = parseInt(len === 3 ? raw[0] + raw[0] : raw.slice(0, 2), 16);
  const g = parseInt(len === 3 ? raw[1] + raw[1] : raw.slice(2, 4), 16);
  const b = parseInt(len === 3 ? raw[2] + raw[2] : raw.slice(4, 6), 16);

  const a = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0')
    .toLowerCase();

  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}${a}`;
}

export function lighten(hex: string, alpha = 0.18): string {
  return hexWithAlpha(hex, alpha);
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';

    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}
