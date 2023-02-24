const character = document.querySelector("#character");
const circle = document.querySelector("circle");
let urlAPI = 'https://www.breakingbadapi.com/api/characters/';
let url = document.location.href;
console.log(url);
if(url === "http://127.0.0.1:5500/"){
    urlAPI = 'https://breakingbadapi.com/api/characters?page=2';

}


const API = fetch(urlAPI)
.then( response => response.json() )
.then(data =>{
     data.map(perso => {

        let article = document.createElement('article');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let status = document.createElement('div');
        let birthday = document.createElement('div');
        let nickname = document.createElement('div')
        let occupation = document.createElement('div')
        let appearance = document.createElement('div')
        let portrayed = document.createElement('div')
        let category = document.createElement('div')
    let span = document.createElement('span');

        status.setAttribute('id','status');
        // location.setAttribute('id', 'location');
        article.classList.add('single-character');
        img.setAttribute('src', `${perso.img}`);

        character.append(article);
        article.append(img);
        article.append(h3);
        article.append(status);
        article.append(birthday);
        article.append(nickname);
        article.append(occupation);
        article.append(appearance);
        article.append(portrayed)
        article.append(category)

        h3.textContent = `${perso.name}`;
        status.textContent = `Status:${perso.status}`
        birthday.textContent = `Date de Naissance:${perso.birthday}`
        nickname.textContent = `Surnom:${perso.nickname}`
        occupation.textContent = `Occupation:${perso.occupation}`
        appearance.textContent = `Apparition:${perso.appearance}`
        portrayed.textContent = `portrait:${perso.portrayed}`
        category.textContent = `category:${perso.category}`
        // location.textContent = `localisation: ${perso.location.name}`

        status.append(span)
        span.classList.add('circle')

        if(perso.status === "Alive"){
            span.style.background = "green";
            
        }
        if(perso.status === "Deceased"){
            span.style.background = "red";
            
        }



     })
} 
    )
    .catch(error => console.log(error));
