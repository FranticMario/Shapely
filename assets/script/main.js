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



const swipe = () => {
    const costumersContainer = document.querySelectorAll(".costumers__container");
    const swipeIcon = document.querySelectorAll(".swipe__icon");

    const showCostumers = (e) => {

        costumersContainer.forEach(item=> {
            if(item.classList.contains("costumers__show")) {
              return  item.classList.toggle("costumers__show");
            } else {

               return item.classList.toggle("costumers__show" )
            }
        })
    }

    swipeIcon.forEach(item =>  item.addEventListener("click", (e) => {

        showCostumers(e)
    } ))
  
}

swipe()

const sliderLine = document.querySelector(".slider__line");
const sliderWrapper = document.querySelector(".slider");
const styles = window.getComputedStyle(sliderLine); 

// Преобразуем строковое значение gap в числовое, убрав 'px'
const gap = parseFloat(styles.gap) || 0;  
let offset = 0;

// Считаем ширину с учётом gap
const sliderWidth = gap + 60;

const maxOffset = sliderLine.scrollWidth - sliderWrapper.clientWidth;
console.log(maxOffset)
const slider = () => {
    offset -= sliderWidth; 

    if (offset < -maxOffset) {
        offset = 0; 
    }

    sliderLine.style.left = offset + "px";
}

setInterval(slider, 2000);
