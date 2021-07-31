window.addEventListener( "scroll", function() {
    let header = document.querySelector("header");
    let rect = header.getBoundingClientRect();
    let y = rect.top + window.pageYOffset;
    if (y > 15) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/*
      var n = 0, length = headerLogo.length;
       for ( ; n < length; n++) {           
              headerLogo[n].style.fill="black";
       }
       */ 
