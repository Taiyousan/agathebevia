const waviy = document.querySelector('.waviy');

// ANIMATION TITRE
    let isAnimationPlayed = false

    const playAnimation = () =>
    {
        waviy.style.top = "2vh";
        console.log('ok')
        isAnimationPlayed = true
        
    }

    window.onscroll = () => !isAnimationPlayed && playAnimation()

// DISPARITION TITRE
    const mainGallery = document.querySelector('.main-gallery');

    gsap.to(waviy, {
        scrollTrigger : {
            trigger : mainGallery,
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "+=500", // end after scrolling 500px beyond the start
        },
        opacity : 0
    })

    

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 499) {
            waviy.style.opacity = 1;
            return;
        }
        if (currentScroll > 500) {
            waviy.style.opacity = 0;
            return;
        }
    }
    )
