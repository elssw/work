var tem =document.getElementsByClassName("QxRIg-CrMAQ-a3u7w");
var bt =document.getElementsByTagName("button")
tem[0].addEventListener('click', myFunction2);
tem[1].addEventListener('click', myFunction);
tem[2].addEventListener('click', myFunction1);
for (var i = 0; i < bt.length; i++) {
    bt[i].addEventListener('click', myF);
}
function myF (){
    window.location.href = "https://165.npa.gov.tw/#/";
}
function myFunction() {
    var dots = document.getElementsByClassName("Wfune-RXjCk");
    if (dots[0].style.display === "none") {
        dots[0].style.display = "block";

    } else {
        dots[0].style.display = "none";

    }
}
function myFunction1() {
    var dot = document.getElementsByClassName("Wfune3");
    if (dot[0].style.display === "none") {
        dot[0].style.display = "block";

    } else {
        dot[0].style.display = "none";

    }
}
function myFunction2() {
    var dot = document.getElementsByClassName("Wfune-tOuu9");
    if (dot[0].style.display === "none") {
        dot[0].style.display = "block";

    } else {
        dot[0].style.display = "none";

    }
}
// function myFunction3() {
//     var dot = document.getElementsByClassName("Wfune-tOuu9");
//     if (dot[0].style.display === "none") {
//         dot[0].style.display = "block";
//
//     } else {
//         dot[0].style.display = "none";
//
//     }
// }