var parag = document.getElementById("paragraf");
var defaultP = document.getElementById("paragraf").innerHTML;

//button click
document.getElementById("buttonClick").addEventListener("click", clickButton);
var paragCycle = 0;
function clickButton(){
    if (paragCycle == 0){
        parag.style.backgroundColor = "blue";
        paragCycle++;
    } else if(paragCycle == 1){
        parag.style.backgroundColor = "red";
        paragCycle++;
    } else if(paragCycle == 2){
        parag.style.backgroundColor = "yellow";
        paragCycle++;
    } else if(paragCycle == 3){
        parag.style.backgroundColor = "grey";
        paragCycle = 0;
    }
}

//button hover
document.getElementById("buttonHover").addEventListener("mouseenter", function(){
    parag.innerHTML = "Hovering";

})
document.getElementById("buttonHover").addEventListener("mouseleave", function(){
    parag.innerHTML = defaultP;
})
var defaultP = document.getElementById("paragraf").innerHTML;


// //console 
console.log(document.getElementById("paragrafBlue"))
