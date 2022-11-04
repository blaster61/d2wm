//Intéraction avec l'utilisateur

// alert("Message");
// prompt("quel âge as-tu?")
// confirm("Voulez-vous supprimer ce message");

//----------------------
//      VARIABLES
//----------------------

// On va créer la variable âge et on va lui donner la valeur 3

// let age = 3; // => Pour définir une variable - Première déclaration
// console.log(age);
// age = 25;

// let message ="Hello there!"

// // // Ecrire dans la console
// // console.log("Bonjour")
// // console.log(age);
// // console.log(message);

// //---------------------
// //    CONSTANTES
// //---------------------

// // const prenom = "Bakari";
// // console.log(prenom);

// //---------------------
// //  MANIPULATION DES NOMBRES
// //---------------------

// // Les opérations de bases +, -, /, % 

// // let nombre1 = 12;
// // let nombre2 = 30;
// // let nombre = nombre1 = nombre2;

// // nombre = nombre1 - nombre2;
// // nombre = nombre1 + nombre2;
// // nombre = nombre1 / nombre2;
// // nombre = nombre1 % nombre2;

// // nombre = 8 + 3 * 5;
// // // nombre = (8 + 3) * 5;



// // //Incrémentation
// // let nombre = 1;
// // // nombre = nombre + 4; // Première syntaxe
// // nombre += 4; // Deuxième syntaxe -- ça fait exactement la même chose
// // nombre + 4; // ce calcul n'est stocké dans aucune variable donc INTERDIT 


// // // //Incrémentation de 1

// // nombre++; // Ajout différé de la valeur + 1
// // ++nombre;// Ajout immédiat de la valeur + 1
 
// // // Décrémentation 

// // nombre = nombre - 4;
// // nombre-= 4;

// // // Décrémentation de 1

// // nombre--; // Retrait différé de la valeur - 1
// // --nombre; // Retrait immédiat de la valeur + 1

// // // nombre += 5;
// // // nombre /= 2;
// // // nombre %= 3;

// // console.log(nombre);

// //-----------------------
// //   Manipuler les chaîne de caractères
// //-----------------------

// let texte = "J'aime bien bootstrap";
// let texte2 = 'Une autre syntaxe';
// let texte3 = `Encore une autre syntaxe`;

// console.log(texte);
// console.log(texte2);
// console.log(texte3);

// //-----------------------
// //   CONCATENATION
// //-----------------------

// let prenom = "Armand"
// let nom = "Duplantis"

// let phrase = "Bonjour" + prenom + " " + nom; // Première syntaxe
// let phrase2 = `Bonjour"${prenom} et toi ${nom}`; // Deuxième syntaxe -- Je conseille

// phrase2.toUpperCase();
// console.log(phrase2);
// console.log(phrase2.length);// permet de savoir la longueur d'une chaîne de caractère
// console.log(phrase2.indexOf("Armand"));//Permet de voir si le paramètre correspond //-1
// console.log(phrase2.slice(8,15));// Découpe une chaîne de caractères
// console.log(phrase2.toUpperCase());// mettre le texte en majuscule
// console.log(phrase2.toLowerCase());// mettre le texte en minuscule
// console.log(phrase2.replace("Armand", "Mondo"));// Permetde remplacer un caractère

// // //---------------------
// // MANIPULER LES TABLEAUX
// //---------------------

// let tableau = [20,"Test", true, 18.25];

// // // Pour inverser l'ordre du tableau
// // // tableau.reverse();
// // // console.log(tableau);

// // //Ajouter une valeur dans un tableau
// // //Au début de mon tableau 

// // tableau.unshift("Coucou ici",2022)
// // console.log(tableau);

// // //à la fin
// // tableau.push("Fin du tablaeu");
// // console.log (tableau);

// //Retirer une valeur du tableau
// //Au début

// // tableau.shift();
// // let valeur = tableau.shift(); // Permet de stoker la valeur retirée
// // console.log(valeur);

// // à la fin
// // tableau.pop();
// // console.log(tableau);

// //modifier les valeurs d'un tableau
// //le premier paramètre défini l'emplacement 
// //le deuxième défini combien d'elements on veut supprimer,après l'insertion

// // tableau.splice(2,0, "Inséré");
// // console[0] = "benoit";
// // console.log(tableau);

// //---------------------
// // CONDITIONS ET OPERATEURS DE COMPARAISON 
// //---------------------


// /* Exemple:

// si il y a du soleil à Alençon 
//  je met un short 
// sinon 
//  je met un jean 
//  */
 
// let nombre = 12;
// console.log(typeof(nombre));// Typeof permet de savoir le type de la variable

// // // on pose une question
// // // Egalité "faible" == 

// // if (nombre == 12) {
// //     // La condition est respectée
// //     console.log("le nombre est égal à 12");
// // }else{
// //     // La condition n'est pas respectée
// //     console.log("le nombre n'est pas égal à 12");
// // }

// // // // Inégalité (différent de) "faible" !=

// // // if (nombre != 12) {
// // //     // La condition est respectée
// // //     console.log("le nombre est égal à 12");
// // // }else{
// // //     // La condition n'est pas respectée
// // //     console.log("le nombre n'est pas égal à 12");
// // // }

// // // Inférieur <

// // if (nombre < 12) {
// //     // la condition est respetéé
// //     console.log("Le nombre est inférieur à 12");
// // }else{
// //     //la condition n'est pas respectée
// //     console.log("le nombre n'est pas inférieur à 12"); 
// // }

// // //Superieur
// // //Superieur ou égal >=

// // if (nombre < 12) {
// //     // la condition est respetéé
// //     console.log("Le nombre est superieur à 12");

// // }else{
// //     //la condition n'est pas respectée
// //     console.log("le nombre n'est pas surperieur à 12"); 
// // }

// // Booléen (true/false)
// let bool = true

// if (bool){

// console.log("le booléen est à true");

// }else{
//     console.log("le booléen est à false");
// }


// Conditions
// ET avec && esperluette
// OU avec || pipe
// Condition else if

// let destination = prompt("où souhaitez-vous aller?")
// const gares = ["Surdon", "Caen", "Le Mans", "Paris"]; 


// if (destination === gares[0]  ){
//     console.log("Ton train se trouve sur le quai numéro 1");

// }

// else if (destination === gares[1]  ){
//     console.log("Ton train se trouve sur le quai numéro 3");
// }

// else if (destination === gares[2]  ){
//     console.log("Ton train se trouve sur le quai numéro 2");
// }

// else if (destination === gares[3]  ){
//     console.log("Pas de départ pour Paris aujourd'hui");

// }
// else{
//     console.log(`Tu ne peux pas partir à ${destination} à partir d'Alençon`);
// }


//--------------------
// BOUCLES
//--------------------

// Les boucles permettent de répéter les instructions 

// BOUCLE FOR (pour)
// La boucle for avec cette syntaxe prend 3 paramètre
// 1er param: inilialisation
// 2er param: la condition;
// 3er param: incrémentation/décrémentation => itération
// une boucle est une loupe

// for (let compteur = 0; compteur <= 10; compteur++){
//     console.log(compteur);
// }

// Faites très attention aux boucles infinies |

// let eleves = ["Benoit", "Clement", "Marie-amelie", "Corentin","Quentin","Thomas", "Cédric","Christopher","Nhu","Bakari"];

// console.log(eleves);
// console.table(eleves);
// console.error("Voici une erreur");
// console.war("Voici un warning");

// Première syntaxe, un peu ancienne

// for(let ligne = 0; ligne < eleves.length; ligne++){

//     console.log(eleves[ligne]);
// }
// // Deuxième syntaxe

// for(let ligne in eleves){
    
//     console.log(eleves[ligne]);

// }

// Troisième syntaxe -- celle que j'utilise le plus


// for(let ligne of eleves){

//     console.log(ligne);
// }


// BOUCLE WHILE (Tant que)

//Attention il s'agit d'un exemple, on utilise jamais de JS-in browser pour les mots

// let pass = "";

// while(pass !=="azerty"){

//     pass = prompt("Entrez le mot de passe");
// }

// Autre syntaxe exclusive au tableau
//forEach

// eleves.forEach( (valeur,index,tablaeu)=> {

// console.table(index , valeur);

    
// // });

// //--------------------------
// // PORTEE DES VARIABLE (VAR)
// //--------------------------

// // let test = "eferagdd";

// // let nom = "Jean";
// // var nom2 = "Robert";

// // if (test === test) {

// //     let nom = "Pierre";
// //     console.log(nom);

// //     var nom2 = "John";
// //     console.log(nom2);

// // }
// // // 
// // console.log(`La variable nom contenant ${nom2} marche ||| `);
// // console.log(`La variable nom contenant ${nom} ne marche pas `);



// //Exercice pratique

// // let age = prompt("Quel âge avez-vous");

// // if (age >= 18 && age <= 26) {
// //     console.log("Tu as l'âge requis");
// //     console.log("bravo tu as le droit a la carte" );
	
// // } else if (age>26) {
	
// //     console.log("Tu n'as pas l'âge requis");
// //     console.log("Désolé tu es trop vieux" );
    
// // }else {

// //     console.log("Tu n'as pas l'âge requis");
// //     console.log("Désolé tu es trop jeune" );
// // }
// //---------------------
// // CONDITIONS: Switch
// // //---------------------


// //         let mois = prompt("Entrez un mois (en chiffre)")
// //         console.log(typeof(mois)); // Permet de savoir le type de la variable
// //         mois = parseInt(mois); // Permet de convertir une chaîne de caractère en Number
// //         console.log(typeof(mois)); 

// // switch (mois){      

// //     case 1:
// //     console.log("Janvier");
// //     break;
// //     case 2:
// //     console.log("Février");

// //     case 4:
// //     case 5:
// //     case 6:        
// //     console.log("Avril","Mai","Juin");
// //     break;

// //     case 7:
// //     console.log("Juillet");
// //     break;

// //     case 8:
// //     console.log("Août");
// //     break;

// //     case 9:
// //     console.log("Septembre");
// //     break;

// //     case 10:
// //     console.log("Octobre");
// //     break;

// //     case 11:
// //     console.log("Novembre");
// //     break;

// //     case 12:
// //     console.log("Décembre");
// //     break;

// //     default:
// //     console.log("Le mois renseigné n'existe pas");
// //     while(mois > 12 || mois <= 0){
// //         mois = prompt("Entrez un mois (en chiffre)");
// //     }
// //     break;


// // }
// //--------------------
// // OBJETS: INTRO
// //--------------------

// Un Objet : Prend une clé et une valeur séparé par :

// let voiture = [{
//     couleur: "orange",
//     marque:"Peugeot",
//     puissance: "10cv",
//     carburant: "gazole",
//     annee: 1970

// }, {   couleur: "rouge",
//     marque:"Renault",
//     puissance: "5 cv",
//     carburant: "gazole",
//     annee: 2000

// }];

// let avion = Object.assign(voiture);



// console.log(voiture[0].marque, voiture[1].marque );



//---------------------
// RAPPEL LES TYPES
//---------------------

// String: chaîne de caractères
// Number: nombre entier
// Booléan (vrai ou faux)
// null: rempli un champ vide 
// undefined: non défini
// Array = [] // liste - un tableau
// Object = {} // objet

//------------------------
// LES FONCTIONS
// Les fonctions sont blocs de code qui sont rassembles sous un même
// nom pour permettre d'exécuter le bloc de code en appelant le nom de la fonction
//------------------------

// function direBonjour() {
//     console.log("Bonjour");
    
// }
// // Comment affiché t-on bonjour?

// direBonjour()+ "Serge";

// function direBonjour(prenom) {
//     console.log(`Bonjour ${prenom}`);
    
// }
// let prenomUser = prompt("Veuillez entrer votre prénom")
// direBonjour(prenomUser);


// Faire une fonction qui demande à l'utlisateur un prénom et un nom


/**
 * Cette fonction permet de dire Bonjour à l'utilisateur selon son prénom et nom
 * @param {string} prenom prénom de l'utilisateur
 * @param {string} nom Nom de l'utilisateur
//  */

// Première syntaxe
// function direBonjour(prenom, nom) {
//     console.log(`Bonjour ${prenom} ${nom}`);
    
// }
// let prenomUser = prompt("Veuillez entrer votre prénom")
// let nomUser = prompt  ("Veuillez entrer votre nom")
// direBonjour(prenomUser, nomUser);


// Deuxième syntaxe
/**
 * 
 * @param {number} nb1 nombre 1
 * @param {number} nbr2 nombre 2
 * @returns resultat de l'addition
 */

// let addition = function (nb1, nbr2){

//     let total = nb1 + nbr2;
//     console.log(total);
//     return total;
//     // le mot clé return permet de ressotir une information
//     // Return stoppé la fonction /!\ Dernière instruction 
    
// }

// addition(1920,1980);
// addition(10,190);
// addition(120,80);
// addition(192,1980);

// Troisième syntaxe
// Fonction flechée // Arrox function


//,function direBonjour(){

//}

// let direBonjour = (prenom, nom) => {
//     console.log(`Bonjour ${prenom} ${nom}`);

// direBonjour("john", "Doe")

// // Faire une fonction qui calcul le nombre carré d'un nombre
// // Demandez à un utilisateur via le prompt un nombre
// // Utilisez les fonctions flechées

// let carre = () => {

//     nbre = prompt("Veuillez choisir un nombre");
//     let res = nbre * nbre
//     console.log(res);
//     return res;
// }
 
//------------------------
// // L'opérateur de décomposition
// // Très utile pour les tableaux et les boucles
// //------------------------

// // Façon classique

// const nombres = [25, 12, 8, 55, 20, 35];

// function addition (nb1, nb2, nb3, nb4){
//     return nb1 + nb2 + nb3 + nb4;
// }

// // let resultat = addition(nombres[0]), nombres[1], nombre[2]);


// // //console.log(resultat);

// // //Avec l'opération de décomposition
// // let resultat = addition(...nombres);
// // console.log(resultat);
// // console.log(...nombres);


// // const tableau1 = ["a","b","c"]
// // const tableau2 = ["d","e","f"];
// // const tableau3 = [tableau1,...tableau2]; //Avec opérateur de décomposition
// // const tableau4 = [tableau1,tableau2]; //Syntaxe classique
// // console.log(tableau3);
// // console.log(tableau4);

// // Faire une fonction qui permet de calculer une moyenne
// // Avec 3 nombres -- utilisez les paramètres

// // function moyenne (nb1,nb2,nb3){
// //     return res =  (nb1 + nb2 + nb3)/3;
// // }
// // moyenne(2,8,9);
// // console.log(res);

// //Correction de l' exercice faire une moyenne

// // function moyenne (nb1,nb2,nb3){

// //     let resultat = (nb1 + nb2 + nb3)/3
// // //     return console.log(resultat);
// // // }
// // // // moyenne(2,8,9);

// // // // // 2èmè méthode
// // // let notes = [15, 12, 5, 20, 18, 13];
// // // let dwwm = [];
// // // for (let j = 0; j < 10; j++){
// // //     question = prompt("Veuillez entrer la note: " + j);
// // //     question = parseInt(question);
// // //     dwwm.push(question);

// // // }
// // // console.log(dwwm);
// // // // // resultat = resultat / notes.length
// // // // // console.log(resultat);
// // // // }

// // // let resultats = 0;
// // // function moyenne(){
// // //     for (let i = 0; i < dwwm.length; i++) {
    
    
// // //     resultat += dwwm[i];
    
// // //     }
// // // resultat = resultat / dwwm.length
// // // return console.log(`la moyenne est de: ${resultat}` );
// // // };

// // // moyenne();

// // // ----------------
// // //  La fonction
// // // ----------------
// // // Math.round permet d'arrondir ou floor permet d'arondir en dessous
// // let calcul = 10-0.05;// donne 4.95
// // calcul = Math.round(calcul)
// // console.log(calcul);

// // console.log(Math);

// // let chiffre = (Math.round(random() * 100)) ; // pour arondir le chiffre aléatoire entre 0 et plus le nombre défini exemple * 100 ou *1000 etc
// // chiffre = (Math.round(random() * 100)) ;

// // console.log(chiffre); 


// //  Faire le jeu à deviner

// function chiffre(){
//     let aDeviner = Math.floor(Math.random() * 100);
//     console.log(aDeviner);
    
//     question = prompt("Veuillez entrer un chiffre"); 
//     console.log(typeof(question)); 
//     while (question != aDeviner){
//         if(question < aDeviner){
//             console.log("Ton chiffre est trop petit");
        

//         }else if(question > aDeviner){
//         console.log(question);
//         console.log(typeof(question)); 
//         console.log("Ton chiffre est trop grand");
      
//     }


//     question = prompt("Veuillez entrer un chiffre");

           
//     }
//    console.log("Bingo bravo champion");
//    return
// }
// chiffre();

//----------------------
// MANIPULER LES DATES
//---------------------


// Déclarer la date du jour

// let maDate = new Date();

// console.log(maDate);

// // let autreDate = new Date(2022, 6, 29, 16,30,00) // Prémière syntaxe
// let autreDate = new Date("2022-07-29 16:30:00");// Deuxième syntaxe format ISO

// console.log(autreDate);
// // Pour changer l'année d'une date, on utilise Set pour définir
// autreDate.setFullYear(2023);
// // Pour obtenir l'année, le mois ou le jour // GET 
// console.log(autreDate.get);

// Temps écoulé entre 2 dates 
let temps = autreDate - maDate;
console.log(temps);


// Dans 1 jour il y a 24h * 60m * 60s * 1000  = 86 400 000 ms

let jours = Math.floor(temps / 86400000);

console.log(jours);

// Reste temps - (jours * durée)

let reste = (temps - jours ) * 86400000;
console.log(reste);

// Heures : 60 mn * 60s * 1000 = 3 600 000ms

let heures = Math.floor(reste / 3600000); 
console.log(heures);

//

console.log(`Jours: ${jours}, Heures: ${heures} `);






        
        

































