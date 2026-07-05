function setGiscusTheme(theme) {
  const iframe = document.querySelector('iframe.giscus-frame');
  if (iframe) {
    iframe.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
  }
}

function getTheme() {
  if (document.body.classList.contains('dark-theme')) return 'dark';
  if (document.body.classList.contains('light-theme')) return 'light';
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function loadGiscus() {
  const giscus = document.createElement('script');
  giscus.src = 'https://giscus.app/client.js';
  giscus.setAttribute('data-repo', 'owaiss0/PersonalWebsite');
  giscus.setAttribute('data-repo-id', 'R_kgDOS4Vwag');
  giscus.setAttribute('data-category', 'Announcements');
  giscus.setAttribute('data-category-id', 'DIC_kwDOS4Vwas4DAh1c');
  giscus.setAttribute('data-mapping', 'pathname');
  giscus.setAttribute('data-strict', '0');
  giscus.setAttribute('data-reactions-enabled', '1');
  giscus.setAttribute('data-emit-metadata', '0');
  giscus.setAttribute('data-input-position', 'bottom');
  giscus.setAttribute('data-theme', getTheme());
  giscus.setAttribute('data-lang', 'en');
  giscus.setAttribute('crossorigin', 'anonymous');
  giscus.async = true;
  document.body.appendChild(giscus);
}

document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  loadGiscus();

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      const isDark = document.body.classList.contains('dark-theme');
      if (isDark) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        document.documentElement.className = 'light-theme';
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        document.documentElement.className = 'dark-theme';
        localStorage.setItem('theme', 'dark');
      }
      setGiscusTheme(getTheme());
    });
  }
});
