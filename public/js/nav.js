// Animation du hamburger menu
// Hamburger to cross

const hamburger = document.querySelector(".hamburger");
const hamburgerline1 = document.querySelector(".hamburger-line1");
const hamburgerline2 = document.querySelector(".hamburger-line2");
const hamburgerline3 = document.querySelector(".hamburger-line3");
const hamburgervolet = document.querySelector(".hamburger-volet");

hamburger.addEventListener("click", () => {
    if(hamburger.classList.contains("hamburger--active")) {
        //FERMETURE
        hamburgerline2.style.opacity = 1;
        hamburgerline1.style.transform = "rotate(0deg) translate(0px, 0px)";
        hamburgerline3.style.transform = "rotate(0deg) translate(0px, 0px)";
        hamburgervolet.style.transform = "translateX(100%)";

        hamburger.classList.remove("hamburger--active");
    }
    else {
        //OUVERTURE
        hamburgerline2.style.opacity = 0;
        hamburgerline1.style.transform = "rotate(45deg) translate(8px, 7px)";
        hamburgerline3.style.transform = "rotate(-45deg) translate(5px, -5px)";
        hamburgervolet.style.transform = "translateX(40%)";
        hamburger.classList.add("hamburger--active");
        
    }
});
    

// --------------------------------------------------
