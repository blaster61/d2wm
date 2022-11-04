//---------------------------------------
// JavaScript - Asynchrone
//---------------------------------------

// Test système synchrone
// On peut voir que les instructions sont exécutées dans l'ordre
// console.log("1 - J'aime Bootstrap");
// console.log("2 - J'aime ajouter des classes dans le body");
// console.log("3 - Tu as oublié un ;");

// //Test asynchrone

// console.log("1 - Je n'aime Bootstrap");

// setTimeout(() => {
//     console.log("2 - Je n'aime les classes dans le bady");
    
// }, 2000);
// console.log("3 - Tu n'as pas oublié de ;");

//-------------------------------
// Exemple - Pizzaria
//-------------------------------

// REMEMBER

// #1 – Recevoir une commande 2s
// #2 – Sélectionner la pâte 2s 
// #3 - Sélectionner la base 1s
// #4 - Sélectionner les ingrédients 1s
// #5 – J'ajoute le fromage 1s
// #6 – Mettre la pizza au four 4s
// #7 – Délivrer la commander 2s

let stocks = {
    pates : ["classique", "fine", "epaisse"],
    base: ["tomate", "creme"],
    ingredient : ["4fromage", "poulet", "boeuf"],
    fromage: ["mozzarella", "emmmental","chevre"]

}


// let order = (pate_name,call_production) => {
// setTimeout( () =>{

//     console.log(`La pate ${stocks.pates[pate_name]} a bien été selectionnée`);
// //     call_production();

// // },2000)


// // };

// // let production = () => {

// //     console.log("La préparation de la pizza est en cours!");
// //         setTimeout(() => {
// //             console.log("La base a bien été sélectionné");
// //             setTimeout(() => {
// //                 console.log("Les ingrédients ont bien été ajouté à la pizza");
// //                 setTimeout(() => {
// //                     console.log("Le fromage a bien été parsemé sur la pizza");
// //                     setTimeout(() => {
// //                         console.log("La pizza est actuellement dans le four!");
// //                         setTimeout(() => {
// //                             console.log("Voici vôtre pizza");
                            
// //                         }, 2000);
                        
// //                     }, 4000);
                    
// //                 }, 1000);
// //             }, 1000);
// //         }, 1000);
   
// // };


// // order(0,production);

// //-----------------------------------
// // Promises // Promesse
// //-----------------------------------

// let isOpen = true;

// let order = (time, work) => {

// return new Promise( (resolve, reject) => {

//     if(isOpen){
//         setTimeout(() => {
//             resolve(work())
//         }, time);
        
//     }
//     else{
//         reject(console.log("Désolé notre pizzzeria est fermée"));
//     }
// })

// }
// order(2000, () => console.log("la pate a bien été sélectionné"))

// .then( () => {
//     return order(0000, () => console.log("La préparation est en cours"))

// })
// .then( () => {
//     return order(1000, () => console.log("La base de votre pizza a bien été sélectionné"))

// })
// .then( () => {
//     return order(1000, () => console.log("Les ingrédient ont été pris!"))

// })
// .then( () => {
//     return order(1000, () => console.log("Le fromage a bien été parsemé sur la pizza"))

// })
// .then( () => {
//     return order(4000, () => console.log("La pizza est actuellement dans le four"))

// })
// .then( () => {
//     return order(2000, () => console.log("Voici votre pizza")) 

// })
// .catch( (err) => {
    
//         console.log("Le client vient de quitter notre pizzzeria" + err)
// })
// .finally(() =>{
//     return console.log("La journée est terminée!");
// })

//---------------------------------------
// Async/Await
//---------------------------------------

// Avant
// let order = () => {

//     return new Promise( (resolve, reject) => {
//     // TU vas faire le boulot
// })
// }

// // Maintenant avec async/await

// async function order(){

//     // Je fais le boulot

// }

// Ancienne méthode

// function kitchen(){

//     new Promise ((resolve, reject) => {

//         if(true){

//             resolve("La promesse est complétée")
//         }else{
//             reject("Voici une erreur")
//         }


//     } )
// }
// kitchen()
// .then() // prochaine étape
// .then() // prochaine étape
// .catch() // l'erreur esdt affiché ici
// .finally() // fin de la Promise(optionnel)

// avec async / Await

// // function kitchen(){
// //     try{
// //     // je vais générer un problème
// //     await abc;
// // }
// //     catch(err){
// //     console.log("abc n'existe pas mon ami", err);
// // }
// //     finally{
// //     console.log("Fin du programme");
// // }

// // }

// // kitchen();

// // On va céer une petite Promise pour demande quel framage choisir

// function choixFromage(){

//     return new Promise((resolve, reject) => {

//      setTimeout(() => {
//         resolve(console.log("Quel fromage voulez vous ajoutez à votre pizza"))
//     },2000)
// })
// }

// // Maintenant nous allons créer une fonction async

// async function kitchen(){

//     console.log("1");
//     console.log("2");
//     console.log("3");

//     await choixFromage();

//     console.log("4");
//     console.log("5");
//     console.log("6");

// }


// kitchen();
//     console.log("7");
//     console.log("8");
//     console.log("9");


//     //

let isOpen = true;

function time(ms){

    return new Promise((resolve, reject) => {
        if (isOpen) {
            setTimeout(resolve, ms)
            
        }
        else{
            reject(console.log("Le magasin est fermé"))
        }
    })

}

async function kitchen(){

    try{ console.log(`Bonjour et bienvenu dans notre pizzeria `);
        // Le temps pour réaliser une tâche
        await time(2000)
        console.log(`la pate ${stocks.pates[1]} a été sélectionnée`);
        await time(1000)
        console.log(`la base ${stocks.base[0]} a été sélectionnée`);
        await time(2000)
        console.log(`l'ingrédient ${stocks.ingredient[1]} a été sélectionnée`);
        await time(2000)
        console.log(`fromage ${stocks.fromage[1]} a été sélectionnée`);
        await time(2000)
    }
    catch(error){
        console.log("Commande annulé, le client a quitté notre pizzeria");
    }
    finally{
        console.log("Journée terminée, pizzzeria fermée à demain");
    }

}
// Trigger = déclencher / déclencheur
kitchen();