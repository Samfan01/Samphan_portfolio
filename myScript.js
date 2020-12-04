var tabButtons=document.querySelectorAll(".menu .menuitem button");
var itempanel=document.querySelectorAll(".menu .itempanel");

function showpanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
    node.style.backgroundColor="";
    node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundcolor=colorCode;
    tabButtons[panelIndex].style.color="white";

    itempanel.forEach(function(node){
        node.style.display="none";
});

    itempanel[panelIndex].style.display="block";
    itempanel[panelIndex].style.backgroundcolor=colorCode;
}
    showpanel(0,'#000000')

 