const toggleButton = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const darkModeBtn = document.getElementById('dark-mode-btn');

    toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('show'));
    });

    // Dark Mode
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark');
      darkModeBtn.textContent = '☀️';
    }

    darkModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      if (document.body.classList.contains('dark')) {
        darkModeBtn.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
      } else {
        darkModeBtn.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
      }
    });