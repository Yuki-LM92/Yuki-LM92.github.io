// スクロール時にfade-inするアニメーション
// .card, .nav-card, .timeline-item などを自動でターゲットにする

(function () {
  const SELECTORS = [
    '.card',
    '.nav-card',
    '.timeline-item',
    '.philosophy-block',
    '.tool-card',
    '.contact-intro',
    '.lab-hero-note',
    '.add-guide',
    '.form-wrap',
  ].join(', ');

  const targets = document.querySelectorAll(SELECTORS);
  if (!targets.length) return;

  // 各要素に fade-in クラスと stagger delay を付与
  targets.forEach((el, i) => {
    el.classList.add('fade-in');
    // グリッド内で隣り合う要素は少し遅らせて cascade 感を出す
    el.style.transitionDelay = `${(i % 4) * 0.07}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
})();
