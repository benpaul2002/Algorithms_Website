function hideP(s) {
    var p = document.getElementById(s);
    if(p.style.display == "block") {
        p.style.display = "none";
    }
    else p.style.display = "block";
}
