//console.log(window.location.href);
var page_stripped = window.location.href.split("/");
//console.log(page_stripped);
var element = document.getElementById("nav-bar-"+page_stripped[3]);
//console.log(element);
element.classList.add("page-nav-highlight");
