
//menu

var link = document.querySelector(".nav__item-main-cross");
var menu = document.querySelector(".nav");

//modal form

var button = document.querySelector(".form__send-btn");
var popup = document.querySelector(".form__modal-sent");
var close = document.querySelector(".form__modal-btn");



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

// MODAL-CONTENT

button.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("form__modal--opened");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("form__modal--opened");
});
