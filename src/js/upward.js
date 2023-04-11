
const scrollEl = document.querySelector('.upward');
scrollEl.addEventListener('click', scrollTopTop);

window.addEventListener('scroll', function () {    
    scrollEl.classList.toggle('active', window.scrollY > 500);
});

function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
