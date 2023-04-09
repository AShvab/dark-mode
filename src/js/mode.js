const toggleModeButton = document.querySelector('.toggle-mode');
const moonIcon = document.querySelector('.changeTheme[data-theme="light"]');
const sunIcon = document.querySelector('.changeTheme[data-theme="dark"]');

// Перевірка, чи є вже збережена тема
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark-mode') {
  document.body.classList.add('dark-mode');
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
}

toggleModeButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Зміна теми сторінки
  document.body.classList.toggle('dark-mode');
  
  // Зміна видимості іконок
  moonIcon.style.display = moonIcon.style.display === 'none' ? 'block' : 'none';
  sunIcon.style.display = sunIcon.style.display === 'block' ? 'none' : 'block';
  
  // Збереження  теми в локальному сховищі
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.setItem('theme', 'light-mode');
  }
});