const Cinema = function (films) {
  this.films = films;
};

// wherever possible the functions have been reduced to arrow functions

Cinema.prototype.filmTitles = function() {
  return this.films.map(film => film.title);

  // return this.films.map(function (film) {
  //   return film.title;
  // });
}

Cinema.prototype.findFilm = function(title) {
  return this.films.find(function (film) {
    return film.title === title;
  });

  // return this.films.find(function(film){
  //   if (film.title === title){
  //     return film;
  //   }
  // });

  return this.films.find(film => film.title === title);
}

Cinema.prototype.findByGenre = function(genre) {
  // return this.films.filter(function (film) {
  //   return film.genre === genre;
  // });

  // return this.films.filter(function(film){
  //   if (film.genre === genre){
  //     return film;
  //   }
  // });

  return this.films.filter(film => film.genre === genre);
}

Cinema.prototype.yearCheck = function(year) {
  // let result = false;
  // let search = this.films.filter(film => film.year === year);
  // if (search.length > 0) {
  //   result = true;
  // }
  // return result;

  // let check = function(currentValue) {
  // return currentValue === year
  // }
  // let search = this.films.map(function (film) {
  //   return film.year;
  // });
  // return search.some(check);

  // return this.films.some(function(film){
  //   if (film.year === year){
  //     return film;
  //   }
  // });

  return this.films.some(film => film.year === year);
}

Cinema.prototype.allFilmsTimeCheck = function(time) {
  // let isBelowThreshold = function (currentValue) {
  //   return currentValue > time;
  // }
  // let times = this.films.map(function (film) {
  //   return film.length;
  // });
  // return times.every(isBelowThreshold);

  // return this.films.every(function(film){
  //   if (film.length > time){
  //     return film;
  //   }
  // });

  return this.films.every(film => film.length > time);
}

Cinema.prototype.totalTime = function() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let times = this.films.map(function (film) {
    return film.length;
  });
  return times.reduce(reducer);
}

Cinema.prototype.filmsByProperty = function(property, search) {
  // return this.films.filter(function(film){
  //   if (film[property] === search){
  //     return film;
  //   }
  // });
  
  return this.films.filter(film => film[property] === search);
}

module.exports = Cinema;
