function huffman_change(s) {
    var num = s.charAt(s.length-5);
    var oldnum;
    num = num-'0';
    oldnum = num;
    num = num+1;
    if(num === 6) {
        num = 1;
    }
    s = "../img/huffman/" + num + ".png";
    document.getElementById('huffman_img').src = s;

    var oldp = "huffman_p" + oldnum;
    var newp = "huffman_p" + num;
    document.getElementById(oldp).style.display = "none";
    document.getElementById(newp).style.display = "block";
}

function hideP() {
    var p = document.getElementById("hiddenP");
    if(p.style.display == "block") {
        p.style.display = "none";
    }
    else p.style.display = "block";
}
