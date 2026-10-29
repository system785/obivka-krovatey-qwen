AOS.init({ duration: 800, once: true, offset: 100 });

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if(burger) {
    burger.addEventListener('click', () => nav.classList.toggle('active'));
}

const modal = document.getElementById('modal');
const openModalBtns = document.querySelectorAll('.open-modal');
const closeModalBtn = document.getElementById('modalClose');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => modal.classList.add('active'));
});
if(closeModalBtn) {
    closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
}
if(modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
        form.reset();
        if(modal) modal.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if(nav) nav.classList.remove('active');
        }
    });
});