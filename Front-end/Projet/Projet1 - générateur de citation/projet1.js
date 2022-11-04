//-------------------
// Projet 1 - Générateur de citation
//-------------------

// Ce project necéssite des connaissance sur : 
// querySelector()
// addEventListener
// L'objet Math
// innerText - textContent

//-------------------
//####################
//-------------------

const btn = document.querySelector("#new-citation");
const citation = document.querySelector(".citation");
const auteur = document.querySelector(".auteur");


 
const citations = [
        {
            citation: `"Dans une certaine mesure, si vous avez vu un bidonville, vous les avez tous vus."`,
            auteur:  `Spiro Theodore Agnew`,
            img: "/assets/img/1.jpg",
    
    
    },  {
        citation: `"L'expérience qui rend le plus heureux est celle qui a rendu le plus de gens heureux."`,
        auteur:  `Karl Marx`,
        img: "/assets/img/2.jpg",
    
    
    },  {
        citation: `"Les dîners de famille sont le plus souvent une épreuve d'indigestion nerveuse, précédée d'un ressentiment et d'un ennui cachés et accompagnée de tremblements psychosomatiques."`,
        auteur:  `M. F. K. Fisher`,
        img: "/assets/img/3.jpg",
    
    
    },  {
        citation: `"Nous voterions tous pour le meilleur homme, mais il n'est jamais candidat."`,
        auteur:  `Will Rogers`,
        img: "/assets/img/4.jpg",
    
    
    },  {
        citation: `"La seule chose qui cloche avec l'immortalité, c'est qu'elle a tendance à s'éterniser."`,
        auteur:  `Herb Caen`,
        img: "/assets/img/5.jpg",
    
    
    },  {
        citation: `"Tout le monde ne fait pas confiance aux peintures, mais les gens croient aux photographies."`,
        auteur:  `Ansel Adams`,
        img: "/assets/img/6.jpg",
    
    
    },  {
        citation: `"Apprendre, c'est découvrir ce que vous savez déjà. Faire, c'est démontrer que vous le savez. Enseigner, c'est rappeler aux autres qu'ils le savent tout aussi bien que vous. Vous êtes tous des apprenants, des exécutants et des enseignants."`,
        auteur:  `Richard David Bach`,
        img: "/assets/img/7.jpg",
    
    
    },  {
        citation: `"J'aime mieux être exposé aux inconvénients d'une trop grande liberté qu'à ceux d'un trop petit degré de liberté."`,
        auteur:  `Thomas Jefferson`,
        img: "/assets/img/8.jpg",
    
    
    },  {
        citation: `"Une hirondelle ne fait pas un été, mais un écheveau d'oies, fendant le brouillard du dégel de mars, c'est le printemps."`,
        auteur:  `Aldo Leopold`,
        img: "/assets/img/9.jpg",
    
    
    },  {
        citation: `"Lorsque je vais dans mon jardin avec une bêche et que je creuse un lit, je ressens une telle exaltation et une telle santé que je découvre que je me suis trompé pendant tout ce temps en laissant les autres faire pour moi ce que j'aurais dû faire de mes propres mains."`,
        auteur:  `Ralph Waldo Emerson`,
        img: "/assets/img/10.jpg"
    
    
    }
];

btn.addEventListener("click", () =>{

    let random = Math.floor(Math.random() * citations.length);

    citation.innerText = citations[random].citation;
    auteur.innerText = citations[random].auteur;
    document.body.style.background = `url("${citations[random].img}" )no-repeat center /cover`;



});

