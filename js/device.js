var writeBtn = document.querySelector(".contacts-button");
var formWrite = document.querySelector(".form-write-us");
var closeWrite = formWrite.querySelector(".popup-form-close");

var mapBtn = document.querySelector(".map");
var map = document.querySelector(".popup-map");
var closeMap = map.querySelector(".popup-form-close");

var name = formWrite.querySelector("input#name");
var email = formWrite.querySelector("input#email");

console.log(mapBtn);

writeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    formWrite.classList.remove("modal-hide");
    formWrite.classList.add("modal-show");
});

closeWrite.addEventListener("click", function(event) {
    event.preventDefault();
    formWrite.classList.remove("modal-show");
    formWrite.classList.add("modal-hide");
    formWrite.classList.remove("form-error");
});

mapBtn.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.remove("modal-hide");
    map.classList.add("modal-show");
});

closeMap.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.remove("modal-show");
    map.classList.add("modal-hide");
});

formWrite.addEventListener("submit", function(evt) {
    if (!name.value || !email.value) {
        evt.preventDefault();
        formWrite.classList.remove("form-error");
        formWrite.offsetWidth = formWrite.offsetWidth;
        formWrite.classList.add("form-error");
    }
});