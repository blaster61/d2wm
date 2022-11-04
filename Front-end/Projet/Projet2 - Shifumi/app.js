//------------------
// Projet 2 - shi fumi
//------------------

// hey pour ce projet nous allons avoir besoin de :
//queryselector() &  queryselectorAll
//forEach()
//e.target.id ou value
//Math
// innerText / textContent



     // Variables 

    const choixJoueurID = document.querySelector("#joueur-choix");
    const choixPcId = document.querySelector("#pc-choix");
    const resultat = document.querySelector("#resultat");
    const choixBtn = document.querySelectorAll(".btn");
    let choixPc;
    let choixJoueur;
    let result

    choixBtn.forEach(choix => choix.addEventListener("click", (e) =>{

         choixJoueur = e.target.value;
         choixJoueurID.textContent = choixJoueur
         choixOrdinateur();
         afficherResultat();

    }))

    function choixOrdinateur() {

        const random = Math.ceil(Math.random() * choixBtn.length);
        // console.log(random);
        if(random === 1){
            choixPc ="Pierre"
}
        if(random === 2){
            choixPc = "Feuille"
}
        if(random === 3) {
        choixPc = "Ciseaux"   
}
choixPcId.textContent = choixPc;

}

function afficherResultat() {

    if(choixPc === choixJoueur){
        result = "Egalité";
        document.body.style.background = 'url("12.jpg") no-repeat center /cover';
    }
    if (choixPc === "Pierre" && choixJoueur === "Feuille"){
        result = "Gagné!";
        document.body.style.background = 'url("13.jpg") no-repeat center /cover';
    }
    if(choixPc === "Pierre" && choixJoueur === "Ciseaux"){
        result = "Tu as perdu!";
        document.body.style.background = 'url("11.jpg") no-repeat center /cover';
    }
    if(choixPc === "Feuille" && choixJoueur === "Ciseaux"){
        result = "Gagné!";
        document.body.style.background = 'url("13.jpg") no-repeat center /cover';
    }
    if(choixPc === "Feuille" && choixJoueur === "Pierre"){
        result = "Tu as perdu!";
        document.body.style.background = 'url("11.jpg") no-repeat center /cover';

    }
    if(choixPc === "Ciseaux" && choixJoueur === "Pierre"){
        result = "Gagné!";
        document.body.style.background = 'url("13.jpg") no-repeat center /cover';
    }
    if(choixPc === "Ciseaux" && choixJoueur === "Feuille"){
        result = "Tu as perdu!";
        document.body.style.background = 'url("11.jpg") no-repeat center /cover';
    }
    resultat.textContent = result;
    
}


    

