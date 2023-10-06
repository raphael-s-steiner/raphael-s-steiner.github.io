console.log(window.location.href);
var page_stripped = window.location.href.split("/");
console.log(page_stripped);
console.log(page_stripped[2]);
var element = document.getElementById("nav-bar-"+page_stripped[2]);
console.log(element);
element.classList.add("page-nav-highlight");
