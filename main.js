const cards = document.querySelectorAll('.cha');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
            card.classList.add('show');
        }
    });
});
