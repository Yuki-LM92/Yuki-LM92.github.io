// ハンバーガーメニュー制御
function toggleNav() {
  const links = document.querySelector('.nav-links');
  const btn   = document.querySelector('.nav-toggle');
  const open  = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
  btn.textContent = open ? '✕' : '☰';
}

// リンクをタップしたらメニューを閉じる
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('open');
      const btn = document.querySelector('.nav-toggle');
      if (btn) { btn.textContent = '☰'; btn.setAttribute('aria-expanded', false); }
    });
  });
});
