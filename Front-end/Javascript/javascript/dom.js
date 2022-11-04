//----------------------
// DOM - Manipulation
//----------------------

// Le DOM est utilisé pour manipuler le contenu, le style et la structure d'une page

//getElementById
// const title  = document.getElementById("title-container")

// console.log(title);

// //getElementByClassName()

// const listItems = document.getElementsByClassName("list-items")

// console.log(listItems);

//getElementsByTagName()

// const listItems = document.getElementsByTagName("li")
// console.log(listItems);

//querySelector -- ça récupère un saul élément

// const container = document.querySelector(".list-items");

// console.log(container);

// querySelectorAll

// const listItems = document.querySelectorAll(".list-items")

// console.log(listItems);

// CSS 

// const title = document.querySelector("#title-container");

// title.style.color = "red";

// console.log(title);

// Quand on veut apppliquer un style à querySelectorALLL()
// C'est à dire toutes nos balises, IL FAUT OBLIGATOIREMENT BOUCLER

// const listItems = document.querySelectorAll(".list-items");

// // Syntaxe avec for of

// for(let item of listItems){
//     item.style.fontSize = "2rem";
// }
// // Syntaxe classique

// for( let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = "2rem";
// }

// console.log(listItems);

//-------------------------
// Créer un élément
//-------------------------

const ul = document.querySelector("ul");
const li = document.createElement("li");

// Ajouter un élément

ul.append(li); // append => ajouter

li.innerText = "Dexter";

const firstListItem = document.querySelector(".list-items");

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML); // ATTENTION a ne pas utiliser

// Modifier les attribut et classes

li.setAttribute("id", "list-items");
li.setAttribute("style", "font-size: 2rem")
li.removeAttribute("style"); li.removeAttribute("id")

li.classList.add('list-items')

console.log(li.classList.contains("list-items"));

// Supprimer un élément
// li.remove();

// //---------------------------
// // Naviguer à travers le Dom
// //---------------------------

// // const ul = document.querySelector("ul");

// // console.log(ul.parentNode.parentNode);
// // console.log(ul.parentElement.parentElement);

// // différence entre les 2

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

// Naviger à travers un noeud enfant (Childnode)

// 1ère syntaxe
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

// 2ème syntaxe -- à utiliser
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Attention avec la ère syntaxe: Les espaces et les sauts de ligness 
// sont considérés comme des noeuds Commentaire aussi 

ul.firstElementChild.style.backgroundColor = "blue";
ul.children[1].style.backgroundColor = "red";