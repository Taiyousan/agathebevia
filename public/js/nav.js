const waviy = document.querySelector('.waviy');

    let isAnimationPlayed = false

    const playAnimation = () =>
    {
        waviy.style.top = "2vh";
        console.log('ok')
        isAnimationPlayed = true
    }


    window.onscroll = () => !isAnimationPlayed && playAnimation()
