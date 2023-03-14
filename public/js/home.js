//LIENS ARGENTIQUE OU NUMERIQUE
const lienLeft = document.querySelector('.home-cat-left');
const lienRight = document.querySelector('.home-cat-right');
const textLeft = document.querySelector('.home-cat-text-left');
const textRight = document.querySelector('.home-cat-text-right');
const voirLeft = document.querySelector('.home-cat-voir-left');
const voirRight = document.querySelector('.home-cat-voir-right');

lienLeft.addEventListener('click', function(){
    lienLeft.style.width = "60%";
    lienRight.style.width = "40%";
    lienRight.style.letterSpacing = "0";
    lienRight.style.backdropFilter = "blur(8px)";
    textLeft.style.opacity = "0";
    textRight.style.opacity = "1";
    voirRight.style.opacity = "0";
    voirRight.style.bottom = "0"
    setTimeout(function(){
        voirLeft.style.opacity = "1";
        voirLeft.style.bottom = "48%"
    }, 200)
})

lienRight.addEventListener('click', function(){
    lienLeft.style.width = "40%";
    lienRight.style.width = "60%";
    lienLeft.style.letterSpacing = "0";
    textRight.style.opacity = "0";
    textLeft.style.opacity = "1";
    voirLeft.style.opacity = "0";
    voirLeft.style.bottom = "0"

    setTimeout(function(){
        voirRight.style.opacity = "1";
        voirRight.style.bottom = "48%"
    }, 200)
})