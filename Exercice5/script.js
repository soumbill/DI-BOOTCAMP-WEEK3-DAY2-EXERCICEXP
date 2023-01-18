let mybtn = document.getElementById("mybtn");
let div = document.querySelector("div");

mybtn.addEventListener("click", clickEvent)
mybtn.addEventListener("mouseover", mouseoverEvent);
mybtn.addEventListener("mouseout", mouseoutEvent);

function clickEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    let text = document.createElement("h1");
    text.innerHTML = "Welcome To MARLIN'S GROUP !";
    text.style.color = "#" + randomColor;
    div.appendChild(text);
}

function mouseoutEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    div.style.background ="#" + randomColor

}

function mouseoverEvent(){
    div.style.background = "url(https://images.pexels.com/photos/12366627/pexels-photo-12366627.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)";
    div.style.backgroundSize = "cover";
}