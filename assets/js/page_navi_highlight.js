//console.log(window.location.href);
var page_stripped = window.location.href.split("/");
//console.log(page_stripped);
var element = document.getElementById("nav-bar-"+page_stripped[3]);
//console.log(element);
if(element !== null){
  element.classList.add("page-nav-highlight");
} else{
  console.log("The suburl string is "+page_stripped[3]+" and does not match with a link.")
}
