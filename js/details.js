import { fetchAPI } from "./ui.js"; 

export class GamesDetails {
  
    constructor(){
        this.gamesDetails = [];
    }

   async fetchDetails(id){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '86a6e87ef9msh1d665313c7123e9p17d3c9jsn62875240da97',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    

    this.gamesDetails = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);

    this.gamesDetails = await this.gamesDetails.json();
    console.log(this.gamesDetails);
    

    let detailsSelect = document.querySelector('.details');
    let detailsContainer = '';
    detailsContainer = 
       `
       <div class="container">
       <div class="d-flex justify-content-between">
        <h2 class="text-white">Game Details</h2>
        <i  class="fa-solid fa-xmark text-white fa-2xl"></i>
       </div>


        <div class="row">

        <div class="col-md-4">
        <div>
        <img src="${this.gamesDetails.thumbnail}" class="w-100" alt="game image">
        </div>
        </div>


        <div class="col-md-6">
        <div>
        <h2 class="text-white font-family">Title: ${this.gamesDetails.title}</h2>
        <p  class="text-white">Category: <span class="badge bg-primary">${this.gamesDetails.genre}</span></p>
        <p  class="text-white">Platform: <span class="badge bg-primary">${this.gamesDetails.platform}</span></p>
        <p  class="text-white">Status: <span class="badge bg-primary">${this.gamesDetails.status}</span></p>
        <p class="text-white">
            ${this.gamesDetails.description}
        </p>

        <button class="btn btn-color text-white font-family ">
        <a class="text-white text-decoration-none"  target="_blank" href="${this.gamesDetails.game_url}">Show Game </a>
        </button>

        </div>
        </div>



        </div>

        </div>

       `

    detailsSelect.innerHTML = detailsContainer;


    const gameClassSelector =  document.querySelector('.display-games');
    const navbar =  document.querySelector('.navbar');
    gameClassSelector.classList.add('d-none')
    navbar.classList.add('d-none')
    document.querySelector('.details').classList.remove('d-none');

    }


}