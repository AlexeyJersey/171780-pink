
var link = document.querySelector(".nav__item-main-cross");
var menu = document.querySelector(".nav");

    link.addEventListener("click", function(event) {

        if  (menu.classList.contains("nav--closed")) {
            event.preventDefault();
            menu.classList.remove("nav--closed");
        }

        else {
            event.preventDefault();
            menu.classList.add("nav--closed");
        }

    });
