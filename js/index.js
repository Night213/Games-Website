import { fetchAPI } from "./ui.js"; 
import {GamesDetails} from "./details.js";

const api = new fetchAPI('https://free-to-play-games-database.p.rapidapi.com/api/games?', null, null);
    
async function getGames(){
    await api.fetchGames();

    await api.displayAllGames();
    clickedGame();
}

getGames();


let mmo = document.querySelector('.mmo');
let shooter = document.querySelector('.shooter');
let sailing = document.querySelector('.sailing');
let permadeath = document.querySelector('.permadeath');
let superhero = document.querySelector('.superhero');
let pixel = document.querySelector('.pixel');

mmo.addEventListener('click', async function(){
    await api.getCategory('mmorpg');
    clickedGame();
    removeActive();          
    mmo.classList.add('myActive');  

});

shooter.addEventListener('click', async function(){
    await api.getCategory('shooter');
    clickedGame();
    removeActive();
    shooter.classList.add('myActive');
    
});

sailing.addEventListener('click', async function(){
    await api.getCategory('sailing');
    clickedGame();
    removeActive();
    sailing.classList.add('myActive');
});

permadeath.addEventListener('click', async function(){
    await api.getCategory('permadeath');
    clickedGame();
    removeActive();
    permadeath.classList.add('myActive');
});

superhero.addEventListener('click', async function(){
    await api.getCategory('superhero');
    clickedGame();
    removeActive();
    superhero.classList.add('myActive');
});

pixel.addEventListener('click', async function(){
    await api.getCategory('pixel');
    clickedGame();
    removeActive();
    pixel.classList.add('myActive');
});

function removeActive(){
    mmo.classList.remove('myActive');
    shooter.classList.remove('myActive');
    sailing.classList.remove('myActive');
    permadeath.classList.remove('myActive');
    superhero.classList.remove('myActive');
    pixel.classList.remove('myActive');

}



function clickedGame(){
    const allCards =  document.querySelectorAll('.card');

    for (let i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', async function (e) {
        let clickedId = e.currentTarget.id; 
        let game = new GamesDetails();
        await game.fetchDetails(clickedId);
       close();

    });
    }
}




function close(){
    const xclose = document.querySelector('.fa-xmark')
    xclose.addEventListener('click', function(){

    const gameClassSelector =  document.querySelector('.display-games');
    const navbar =  document.querySelector('.navbar');
    let detailsSelect = document.querySelector('.details');

    gameClassSelector.classList.remove('d-none');
    navbar.classList.remove('d-none');
    detailsSelect.classList.add('d-none');

    })

}
