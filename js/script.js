var link = document.querySelector(".nav__item-main-cross"),
menu = document.querySelector(".nav"),
button = document.querySelector(".form__send-btn"),
popup = document.querySelector(".form__modal-sent"),
close = document.querySelector(".form__modal-btn");

window.onload = function() {
menu.className = 'nav nav--closed';
};

link.addEventListener("click", function(e) {
menu.classList.contains("nav--closed") ? (e.preventDefault(), menu.classList.remove("nav--closed")) : (e.preventDefault(), menu.classList.add("nav--closed"))
}), button.addEventListener("click", function(e) {
e.preventDefault(), popup.classList.add("form__modal--opened")
}), close.addEventListener("click", function(e) {
e.preventDefault(), popup.classList.remove("form__modal--opened")
});
