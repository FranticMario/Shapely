const burger = () => {
    const headerBurger = document.querySelector(".header__burger"); 
    const header = document.querySelector(".header"); 
    const menu = document.querySelector(".nav"); 

    const toggleMenu = () => {
        header.classList.toggle("open");
        document.documentElement.style.overflow = header.classList.contains("open") ? "hidden" : ""; 
    };

    const closeByLink = (e) => {
        if (e.target.closest('.menu__link')) { 
            toggleMenu(); 
        }
    };

    const closeByOverlay = (e) => {
        if (!e.target.closest('.nav') && !e.target.closest('.header__burger')) { 
            if (header.classList.contains("open")) {
                toggleMenu(); 
            }
        }
    };

    headerBurger.addEventListener("click", toggleMenu); 
    document.addEventListener("click", closeByOverlay); 
    menu.addEventListener("click", closeByLink); 
};

burger();
