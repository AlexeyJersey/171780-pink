// var link = document.querySelector(".nav__item-main-cross");

// var popup = document.querySelector(".nav");
// // var close = popup.querySelector(".modal-content-close");

// link.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup.classList.add("nav--closed");
// });

// close.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup.classList.remove("modal-content-show");
// });

///

var link = document.querySelector(".nav__item-main-cross");
var popup = document.querySelector(".nav");

    link.addEventListener("click", function(event) {

        if  (popup.classList.contains("nav--closed")) {
            event.preventDefault();
            popup.classList.remove("nav--closed");
        }

        else {
            event.preventDefault();
            popup.classList.add("nav--closed");
        }

    });
