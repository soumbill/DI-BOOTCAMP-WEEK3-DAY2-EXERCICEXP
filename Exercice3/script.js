//1) Declare a global variable named allBoldItems.
let allBoldItems;

//2) Create a function called getBold_items() that takes no parameter
function getBold_items(){
    
     allBoldItems = document.querySelectorAll("strong");
}
// getBold_items();

//3) Create a function called highlight() that changes the color of all the bold text to blue
function highlight(){
    getBold_items()
   for(let item of allBoldItems){
    item.style.color = "blue";
   }
}
highlight();


//4) Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal(){
    getBold_items()
    highlight()

    for(let black of allBoldItems){
        black.style.color = "black";
    }
}
return_normal();

//5) Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout
highlight()
document.getElementById("myPara").addEventListener("mouseover",mouseOver);
function mouseOver(){
    document.getElementById("myPara").style.color = "red";
}

return_normal();
document.getElementById("myPara").addEventListener("mouseout",mouseOut);
function mouseOut(){
    document.getElementById("myPara").style.color = "black";
}