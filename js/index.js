function searchfn() {
    var data = document.getElementById("searchsubmit").value.toLowerCase();
    data = data.replace(/ /g,"");
    let curURL = window.location.href;
    let i = curURL.lastIndexOf("/");
    curURL = curURL.substring(0,i);
    if(data=="divideandconqueralgorithms" || data=="divideandconqueralgorithm" || data=="divide&conqueralgorithms" 
    || data=="divide&conqueralgorithm" || data=="divide&conquer" || data=="divideandconquer" || data=="dncalgorithm"
    || data=="dnc") {
        window.location = curURL+"/DnC.html#DnC";
    }
    else if(data=="mergesort" || data=="mergesortalgorithm") {
        window.location = curURL+"/DnC.html#mergesort";
    }
    else if(data=="mastertheorem") {
        window.location = curURL+"/DnC.html#mastertheorem";
    }
    else if(data=="strassenalgorithm" || data=="strassen") {
        window.location = curURL+"/DnC.html#strassen";
    }
    else if(data=="selectionalgorithm" || data=="selection" || data=="medianalgorithm" || data=="median") {
        window.location = curURL+"/DnC.html#selection";
    }
    else if(data=="fftalgorithm" || data=="fft" || data=="fastfouriertransformalgorithm" || data=="fastfouriertransform") {
        window.location = curURL+"/DnC.html#fft";
    }

    else if(data=="greedyalgorithm" || data=="greedyalgorithms" || data=="greedy") {
        window.location = curURL+"/Greedy.html#greedy";
    }
    else if(data=="activityselectionalgorithm" || data=="activityselection") {
        window.location = curURL+"/Greedy.html#activity";
    }
    else if(data=="huffmancodes" || data=="huffmancode" || data=="huffmanencoding" || data=="huffman"
    || data=="huffmancodealgorithm" || data=="huffmanalgorithm" || data=="huffmanencodingalgorithm") {
        window.location = curURL+"/Greedy.html#huffman";
    }
    else if(data=="setcover" || data=="setcoveralgorithm" || data=="setcoverproblem") {
        window.location = curURL+"/Greedy.html#set_cover";
    }

    else if(data=="dynamicprogramming" || data=="dp" || data=="dynamicprogrammingalgorithms" 
    || data=="dynamicprogrammingalgorithm") {
        window.location = curURL+"/DP.html#dp";
    }
    else if(data=="fibonaccinumbers" || data=="fibonacci" || data=="nthfibonacci" || data=="nthfibonaccci" 
    || data=="nthfibonaccinumber" || data=="nthfibonaccinumberalgorithm") {
        window.location = curURL+"/DP.html#fibonacci";
    }
    else if(data=="shortestpath" || data=="shortestpathalgorithm" || data=="shortestpathindag" 
    || data=="shortestpathindagalgorithm" || data=="shortestpathinadag" || data=="shortestpathinadagalgorithm") {
        window.location = curURL+"/DP.html#shortest_path";
    }
    else if(data=="longestincreasingsubsequence" || data=="longestincreasingsubsequencealgorithm") {
        window.location = curURL+"/DP.html#lis";
    }
    else if(data=="shortestreliablepath" || data=="shortestreliablepathalgorithm") {
        window.location = curURL+"/DP.html#shortest_r_path";
    }

    else {
        alert("Algorithm not found!");
        document.getElementById("searchsubmit").style.borderColor = "red";
    }
}
