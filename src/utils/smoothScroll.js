export function smoothScroll(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  if (!href?.startsWith('#')) return;
  
  const targetId = href.replace('#', '');
  const elem = document.getElementById(targetId);
  
  elem?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}