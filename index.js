let nav = document.getElementById('navbar')
window.onscroll = function() {scrollFunction()};
window.scrollTo(0,200);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-150px";
  }
}