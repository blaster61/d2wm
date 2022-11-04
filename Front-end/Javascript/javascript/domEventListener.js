// -------------------------
// Event Listeners
//--------------------------

//  addEventListener( "click, function(){})

// const btn2 = document.querySelector(".btn-2");

// btn2.addEventListener("click",()=>{
//     alert("J'aime manippuler le DOM");

// })


// mouseover

// const changerBackground = document.querySelector(".box3")

// function changerBgColor() {
//     changerBackground.style.backgroundColor= "red";
   
// }


// function retirerBgColor() {
//     changerBackground.style.backgroundColor = "transparent";
   
// }

// changerBackground.addEventListener("mouseover", changerBgColor);
// changerBackground.addEventListener("mouseout", retirerBgColor);

// -- Deuxième exemple : Afficher du contenu masqué

const revelerBtn = document.querySelector(".reveler-btn");
const contenuMasque = document.querySelector(".contenu-masque");

function revelerContenu(){
    // Syntaxe classique

    // if (contenuMasque.classList.contains('contenu-masque')) {
    //     // ça m'affiche le texe caché
    //     contenuMasque.classList.remove("contenu-masque");
        
    // }else {
    //     // ça masque le texte
        contenuMasque.classList.add("contenu-masque");
    }
    // Syntaxe: opération ternaire
    // contenuMasque.classList.contains("contenu-masque") ?
    // contenuMasque.classList.remove("contenu-masque") :
    // contenuMasque.classList.add("contenu-masque")

//     // Version optimsée
    contenuMasque.classList.toggle("contenu-masque");

}

revelerBtn.addEventListener("click", revelerContenu);
// revelerBtn.style.color = "red";


