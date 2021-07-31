const arrowTop = document.getElementsByClassName('Arrow');
arrowTop[0].addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/*
const arrowTop = document.querySelectorAll('.Arrow');
var length = arrowTop.length;
for ( let i = 1; n < length; n++) {           
  arrowTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, false);
};*/