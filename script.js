document.addEventListener('DOMContentLoaded', function() {
  const typedNameElement = document.getElementById('typed-name');
  const toggleThemeButton = document.getElementById('toggle-theme');
  const body = document.body;

  const nameText = 'Mateus Henrique';
  let i = 0;

  function typeWriterName() {
    if (i < nameText.length) {
      typedNameElement.innerHTML += nameText.charAt(i);
      i++;
      setTimeout(typeWriterName, 100);
    } else {
      // Remove blinking cursor after typing is complete
      typedNameElement.style.borderRight = 'none';
    }
  }

  typeWriterName();

  // Theme toggle functionality
  function applyTheme(theme) {
    if (theme === 'light') {
      body.classList.add('light');
      toggleThemeButton.textContent = '🌙'; // Moon icon for light theme
    } else {
      body.classList.remove('light');
      toggleThemeButton.textContent = '☀️'; // Sun icon for dark theme
    }
    localStorage.setItem('theme', theme);
  }

  // Check for saved theme preference on load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Default to dark theme if no preference is saved
    applyTheme('dark');
  }

  toggleThemeButton.addEventListener('click', function() {
    const currentTheme = body.classList.contains('light') ? 'dark' : 'light';
    applyTheme(currentTheme);
  });

  // Scroll animation
  const scrollElements = document.querySelectorAll('.scroll');

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementHeight = el.getBoundingClientRect().height;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) - elementHeight / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('visible');
  };

  const hideScrollElement = (element) => {
    element.classList.remove('visible');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation(); // Initial check on page load
});

