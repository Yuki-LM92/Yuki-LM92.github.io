/**
 * preview.js
 * ツールプレビューモーダルの共通ロジック
 * 使い方: <button onclick="openPreview('tools/foo/index.html', 'ツール名')">プレビュー</button>
 */

function openPreview(src, title) {
  const modal = document.getElementById('preview-modal');
  const iframe = document.getElementById('preview-iframe');
  const titleEl = document.getElementById('preview-title');
  const newTabLink = document.getElementById('preview-newtab');

  iframe.src = src;
  titleEl.textContent = title;
  newTabLink.href = src;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePreview() {
  const modal = document.getElementById('preview-modal');
  const iframe = document.getElementById('preview-iframe');
  modal.classList.remove('open');
  iframe.src = '';
  document.body.style.overflow = '';
}

// Escキーで閉じる
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePreview();
});
