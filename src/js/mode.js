
const toggleModeButton = document.querySelector('.toggle-mode');
const moonIcon = document.querySelector('.changeTheme[data-theme="light"]');
const sunIcon = document.querySelector('.changeTheme[data-theme="dark"]');

toggleModeButton.addEventListener('click', (event)=> {
    event.preventDefault();
    // Зміна теми сторінки
    document.body.classList.toggle('dark-mode');
    
    // Зміна видимості іконок
    moonIcon.style.display = moonIcon.style.display === 'none' ? 'block' : 'none';
    sunIcon.style.display = sunIcon.style.display === 'block' ? 'none' : 'block';
});