

export class fetchAPI{
    constructor(gamesURL, allGames, filteredGames){
        this.gamesURL = gamesURL;
        this.allGames = [];
        this.filteredGames = [];
    }
   

   async fetchGames(){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '86a6e87ef9msh1d665313c7123e9p17d3c9jsn62875240da97',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    // 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter'
        const url = this.gamesURL;
        this.allGames = await fetch(url, options);
        this.allGames = await this.allGames.json();
        console.log(this.allGames);
        
    }

    displayAllGames(){
      const gameClassSelector =  document.querySelector('.display-games');
      let gamesContainer = '';
      
      for (let i = 0; i < this.allGames.length; i++) {
        gamesContainer += 
        `
          <div class="col-md-3">
    <div class="card h-100 border-1 border-black" id="${this.allGames[i].id}">
      <img src="${this.allGames[i].thumbnail}" class="card-img-top filter" alt="game image">
      <div class="card-body card-bg">
        <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title text-white ">${this.allGames[i].title} </h5>
        <span class="badge text-bg-primary opacity-75">Free</span>
        </div>
        <p class="card-text font-family card-p opacity-50">${this.allGames[i].short_description}</p>
      </div>
      <div class="card-footer card-bg d-flex justify-content-between align-items-center">
        <small class=" badge badge-color font-family ">${this.allGames[i].genre}</small>
        <small class=" badge badge-color font-family">${this.allGames[i].platform}</small>

      </div>
    </div>
  </div>    
        `
        
      }
      gameClassSelector.innerHTML = gamesContainer;





    }


    async getCategory(category){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '86a6e87ef9msh1d665313c7123e9p17d3c9jsn62875240da97',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    this.filteredGames = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
    this.filteredGames = await this.filteredGames.json();
    const gameClassSelector =  document.querySelector('.display-games');
    let gamesContainer = '';
      
      for (let i = 0; i < this.filteredGames.length; i++) {
        gamesContainer += 
        `
          <div class="col-md-3">
    <div class="card h-100 border-1 border-black" id="${this.filteredGames[i].id}">
      <img src="${this.filteredGames[i].thumbnail}" class="card-img-top filter" alt="game image">
      <div class="card-body card-bg">
        <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title text-white ">${this.filteredGames[i].title} </h5>
        <span class="badge text-bg-primary opacity-75">Free</span>
        </div>
        <p class="card-text font-family card-p opacity-50">${this.filteredGames[i].short_description}</p>
      </div>
      <div class="card-footer card-bg d-flex justify-content-between align-items-center">
        <small class=" badge badge-color font-family ">${this.filteredGames[i].genre}</small>
        <small class=" badge badge-color font-family">${this.filteredGames[i].platform}</small>

      </div>
    </div>
  </div>    
        `
        
      }
      gameClassSelector.innerHTML = gamesContainer;

    
    }

}


