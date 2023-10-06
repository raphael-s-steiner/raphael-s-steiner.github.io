var page_stripped = window.location.href.replace("{{ site.url }}", "").replace("/", "").split("/");
console.log(page_stripped[0])
var element = document.getElementById("nav-bar-"+page_stripped[0]);
console.log(element)
element.classList.add("page-nav-highlight");
