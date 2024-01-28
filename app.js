const readline = require("readline");


const movies = [
  { id: 101, name: " Friends" },
  { id: 102, name: " The office" },
  { id: 103, name: " The big bang theory" },
  { id: 104, name: " Seinfield" },
  { id: 105, name: " Two and a half men" },
  { id: 106, name: " How i met your mother" },
  { id: 107, name: " 2 broke girls" },
  { id: 108, name: " Working moms" },
  { id: 109, name: " Mom" },
  { id: 110, name: " Young Sheldon" },
];

class Movie {
  constructor(title, moviesList) {
    this.title = title;
    this.moviesList = moviesList;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  displayMovies() {
    console.log("Here is a list of available sitcom movies:");
    
    this.moviesList.forEach((movie) => {
      console.log(`${movie.id}. ${movie.name}`);
    });
    
  }

  rent() {
    this.rl.question(
      "Enter the ID of the movie you want to rent out: ",
      (movieId) => {
        const id = parseInt(movieId);
        const movieToRent = this.moviesList.find((movie) => movie.id === id);
        if (movieToRent) {
            console.log(`You rented "${movieToRent.name}" thank you for choosing sitcom aven.`);
          this.rl.close();
        } else {
          console.log("The movie not available at the moment.");
        }
      }
    );
  }
}


const movieStore = new Movie("Sitcom haven", movies);


movieStore.displayMovies();


movieStore.rent();
