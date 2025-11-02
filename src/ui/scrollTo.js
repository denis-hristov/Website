export function scrollToId(hashOrId, { offset = 88 } = {}) {
  const id = String(hashOrId || '').replace(/^#/, '');
  const el = document.getElementById(id);
  if (!el) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  history.replaceState(null, '', `#${id}`);
}
