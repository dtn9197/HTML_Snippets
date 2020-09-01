var button = document.querySelector("#button");
var content = document.querySelector(".content");

//toggle the .content class which either hides or show the active tab
button.addEventListener("click", function() {
    content.classList.toggle("content");
})