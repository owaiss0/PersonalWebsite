document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

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
    });
  }
});
