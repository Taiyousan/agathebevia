const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('click', e => {
        const photo = e.target;
        const photoSrc = photo.getAttribute('src');
        const photoAlt = photo.getAttribute('alt');

        const modal = document.querySelector('.modal');
        const modalImg = document.querySelector('.modal-img');

        modalImg.setAttribute('src', photoSrc);
        modalImg.setAttribute('alt', photoAlt);

        modal.classList.add('modal--active');
        const modalClose = document.querySelector('.modal-close');
        modalClose.style.display = 'block';
    });
});
const modalImg = document.querySelector('.modal-img');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

modalClose.addEventListener('click', e => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal--active');
    modalClose.style.display = 'none';
});



