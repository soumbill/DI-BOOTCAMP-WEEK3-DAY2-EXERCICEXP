//1) Retrieve the form and console.log it.
let elementForm = document.forms;
console.log(elementForm);

//2) Retrieve the inputs by their id and console.log them.
let elementInput1 = document.getElementById("fname");
    console.log(elementInput1);

let elementInput2 = document.getElementById("lname");
    console.log(elementInput2);

//3) Retrieve the inputs by their name attribute and console.log them.
// let elementForm1 = document.forms[0];

 let elemInputName1 = document.getElementsByName("fname");
     console.log(elemInputName1);

let elemInputName2 = document.getElementsByName("lname");
     console.log(elemInputName2);

//4)  When the user submits the form (ie. submit event listener)

document.querySelector("#submit").addEventListener("click", function(event) {
    alert("pourquoi ?")
    event.preventDefault();
  }, false); 

  function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    let input = document.getElementById("fname").value;
    let input1 = document.getElementById("lname").value;
    // Afficher la valeur
   console.log(input);
   console.log(input1);
}
getValue()


let afficheUl = document.getElementsByClassName("ul");


let addLi = document.createElement("li");
let deplacerLiDansUl = document.getElementsByTagName("ul")[0].appendChild(addLi);
let phrase1 = document.createTextNode("first name of the user");
let ajoutPhrase1Li=  addLi.appendChild(phrase1);

let addLi1 = document.createElement("li");
let deplacerLiDansUl1 = document.getElementsByTagName("ul")[0].appendChild(addLi1);
let phrase2 = document.createTextNode("last name of the user");
let ajoutPhrase1L2 = addLi1.appendChild(phrase2);
