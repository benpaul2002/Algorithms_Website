window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    var pos = navbar.offsetTop;
    if(window.pageYOffset>=pos) {
        navbar.classList.add("pos");
    }
    else navbar.classList.remove("pos");
}

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}
