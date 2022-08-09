function merge_sort_animation() {
    let id = null;
    let time = 0;
    const elem1 = document.getElementById("egelem1");
    const elem2 = document.getElementById("egelem2");
    const elem3 = document.getElementById("egelem3");
    const elem4 = document.getElementById("egelem4");
    const elem5 = document.getElementById("egelem5");
    const elem6 = document.getElementById("egelem6");
    const elem7 = document.getElementById("egelem7");
    const elem8 = document.getElementById("egelem8");
    clearInterval(id);
    id = setInterval(frame, 300);
    function frame() {
        time++;
        if(time==5) {
            elem1.style.backgroundColor = "#8fe5f2";
            elem2.style.backgroundColor = "#8fe5f2";
            elem3.style.backgroundColor = "#8fe5f2";
            elem4.style.backgroundColor = "#8fe5f2";
            elem5.style.backgroundColor = "#8fe5f2";
            elem6.style.backgroundColor = "#8fe5f2";
            elem7.style.backgroundColor = "#8fe5f2";
            elem8.style.backgroundColor = "#8fe5f2";
        }
        else if(time==10) {
            elem4.style.marginRight = "5px";
            elem1.style.marginLeft = "35.35%";

            elem1.style.backgroundColor = "#8ff2f0";
            elem2.style.backgroundColor = "#8ff2f0";
            elem3.style.backgroundColor = "#8ff2f0";
            elem4.style.backgroundColor = "#8ff2f0";
            elem5.style.backgroundColor = "#8fd3f2";
            elem6.style.backgroundColor = "#8fd3f2";
            elem7.style.backgroundColor = "#8fd3f2";
            elem8.style.backgroundColor = "#8fd3f2";
        }
        else if(time==15) {
            elem4.style.marginRight = "20px";
            elem1.style.marginLeft = "34.6%";

            elem2.style.marginRight = "5px";
            elem1.style.marginLeft = "34.55%";
            elem6.style.marginRight = "5px";
            elem1.style.marginLeft = "34.50%";

            elem1.style.backgroundColor = "#8ff2b8";
            elem2.style.backgroundColor = "#8ff2b8";
            elem3.style.backgroundColor = "#8ff2ce";
            elem4.style.backgroundColor = "#8ff2ce";
            elem5.style.backgroundColor = "#8fb8f2";
            elem6.style.backgroundColor = "#8fb8f2";
            elem7.style.backgroundColor = "#8f94f2";
            elem8.style.backgroundColor = "#8f94f2";
        }
        else if(time==20) {
            elem4.style.marginRight = "50px";
            elem1.style.marginLeft = "34%";
            elem2.style.marginRight = "20px";
            elem1.style.marginLeft = "33.25%";
            elem6.style.marginRight = "20px";
            elem1.style.marginLeft = "33.20%";

            elem1.style.marginRight = "5px";
            elem1.style.marginLeft = "33.15%";
            elem3.style.marginRight = "5px";
            elem1.style.marginLeft = "33.10%";
            elem5.style.marginRight = "5px";
            elem1.style.marginLeft = "32.05%";
            elem7.style.marginRight = "5px";
            elem1.style.marginLeft = "32%";

            elem1.style.backgroundColor = "#eff28f";
            elem2.style.backgroundColor = "#dbf28f";
            elem3.style.backgroundColor = "#baf28f";
            elem4.style.backgroundColor = "#8ff296";
            elem5.style.backgroundColor = "#bd8ff2";
            elem6.style.backgroundColor = "#d48ff2";
            elem7.style.backgroundColor = "#f28fb3";
            elem8.style.backgroundColor = "#f28f8f";
        }
        else if(time==25) {
            document.getElementById("egtd1").innerHTML = 2;
            document.getElementById("egtd2").innerHTML = 8;
        }
        else if(time==30) {
            document.getElementById("egtd7").innerHTML = 4;
            document.getElementById("egtd8").innerHTML = 7;
        }
        else if(time==35) {
            elem1.style.marginLeft = "33.30%";
            elem1.style.marginRight = "0%";
            elem2.style.marginRight = "0.5%";
            elem3.style.marginLeft = "0%";
            elem3.style.marginRight = "0%";
            elem5.style.marginRight = "0%";
            elem5.style.marginLeft = "0.2%";
            elem6.style.marginRight = "0.5%";
            elem7.style.marginRight = "0%";
            elem7.style.marginLeft = "0%";

            elem1.style.backgroundColor = "#8ff2b8";
            elem2.style.backgroundColor = "#8ff2b8";
            elem3.style.backgroundColor = "#8ff2ce";
            elem4.style.backgroundColor = "#8ff2ce";
            elem5.style.backgroundColor = "#8fb8f2";
            elem6.style.backgroundColor = "#8fb8f2";
            elem7.style.backgroundColor = "#8f94f2";
            elem8.style.backgroundColor = "#8f94f2";
        }
        else if(time==40) {
            document.getElementById("egtd1").innerHTML = 1;
            document.getElementById("egtd2").innerHTML = 2;
            document.getElementById("egtd3").innerHTML = 5;
            document.getElementById("egtd4").innerHTML = 8;
        }
        else if(time==45) {
            document.getElementById("egtd5").innerHTML = 3;
            document.getElementById("egtd6").innerHTML = 4;
            document.getElementById("egtd7").innerHTML = 6;
            document.getElementById("egtd8").innerHTML = 7;
        }
        else if(time==50) {
            elem1.style.marginLeft = "33.9%";
            elem2.style.marginRight = "0%";
            elem6.style.marginRight = "0%";

            elem1.style.backgroundColor = "#8ff2f0";
            elem2.style.backgroundColor = "#8ff2f0";
            elem3.style.backgroundColor = "#8ff2f0";
            elem4.style.backgroundColor = "#8ff2f0";
            elem5.style.backgroundColor = "#8fd3f2";
            elem6.style.backgroundColor = "#8fd3f2";
            elem7.style.backgroundColor = "#8fd3f2";
            elem8.style.backgroundColor = "#8fd3f2";
        }
        else if(time==55) {
            document.getElementById("egtd3").innerHTML = 3;
            document.getElementById("egtd4").innerHTML = 4;
            document.getElementById("egtd5").innerHTML = 5;
            document.getElementById("egtd6").innerHTML = 6;
            document.getElementById("egtd7").innerHTML = 7;
            document.getElementById("egtd8").innerHTML = 8;
        }
        else if(time==60) {
            elem1.style.marginLeft = "35.5%";
            elem4.style.marginRight = "0%";
            elem5.style.marginLeft = "0%";

            elem1.style.backgroundColor = "#8fe5f2";
            elem2.style.backgroundColor = "#8fe5f2";
            elem3.style.backgroundColor = "#8fe5f2";
            elem4.style.backgroundColor = "#8fe5f2";
            elem5.style.backgroundColor = "#8fe5f2";
            elem6.style.backgroundColor = "#8fe5f2";
            elem7.style.backgroundColor = "#8fe5f2";
            elem8.style.backgroundColor = "#8fe5f2";
        }
        else if(time==75) {
            clearInterval(id);
            document.getElementById("egtd1").innerHTML = 8;
            document.getElementById("egtd2").innerHTML = 2;
            document.getElementById("egtd3").innerHTML = 1;
            document.getElementById("egtd4").innerHTML = 5;
            document.getElementById("egtd5").innerHTML = 3;
            document.getElementById("egtd6").innerHTML = 6;
            document.getElementById("egtd7").innerHTML = 7;
            document.getElementById("egtd8").innerHTML = 4;
            
            elem1.style.backgroundColor = "blanchedalmond";
            elem2.style.backgroundColor = "blanchedalmond";
            elem3.style.backgroundColor = "blanchedalmond";
            elem4.style.backgroundColor = "blanchedalmond";
            elem5.style.backgroundColor = "blanchedalmond";
            elem6.style.backgroundColor = "blanchedalmond";
            elem7.style.backgroundColor = "blanchedalmond";
            elem8.style.backgroundColor = "blanchedalmond";
        }
    }
}

function hideP() {
    var p = document.getElementById("hiddenP");
    if(p.style.display == "block") {
        p.style.display = "none";
    }
    else p.style.display = "block";
}
