// animation au clic sur les catégories de l'accueil

const categories = document.querySelectorAll('.category');
const menuCategorie = document.querySelector('.home-menu');

categories.forEach(category => {
category.addEventListener('click', function(){
    // anim au click
    category.querySelector('p').style.transform = "translate(-30vw)";
    category.style.backgroundSize = "120%";

    //anim reset si on clique ailleurs
    menuCategorie.addEventListener('click', function(e){   
        if (category.contains(e.target)){
        } else{
            category.querySelector('p').style.transform = "translate(0vw)";
            category.style.backgroundSize = "100%";
        }
      });
})
}
)