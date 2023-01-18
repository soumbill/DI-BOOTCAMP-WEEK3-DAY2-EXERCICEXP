//  Exercise 1 : Change The Article

// Using a DOM property, retrieve the h1 and console.log it.
let getH1 = document.querySelector('h1');
console.log(getH1);

// Using DOM methods, remove the last paragraph in the <article> tag.
let paragraph = document.getElementsByTagName('p');
let lastPara = paragraph[3];
lastPara.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let clickH2 = document.querySelector('h2');
clickH2.addEventListener('click', function onClick(event){clickH2.style.background = 'red'})

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let clickH3 = document.querySelector('h3');
clickH3.addEventListener('click', function onClick(event){clickH3.style.display = 'none'})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
button.addEventListener("click", infos);
function infos(){
        // let mybutton = document.getElementById("button");
        // mybutton.style.fontWeight = "bold";
    let myP = document.querySelectorAll('p');
        for(let p of myP){
            p.style.fontWeight = "bold";
        }
}

//6 
getH1.onmouseover = function(){
    this.style.fontSize = "50px";
}

//7
let para2 = document.getElementById('p2');
    para2.addEventListener('mouseover',() => {
        para2.style.animation = "fadeOut 1s";
    })

