var page_stripped = window.location.href.replace("{{ site.url }}", "").replace("/", "").split("/");
var element = document.getElementById("nav-bar-"+page_stripped[0]);
element.classList.add("page-nav-highlight");
