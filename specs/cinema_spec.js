const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    let expected = ["Moonlight", "Blade Runner 2049", "Dunkirk", "Black Panther", "T2 Trainspotting"];
    let actual = cinema.filmTitles();
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find a film by title', function () {
    assert.deepStrictEqual(cinema.findFilm("Dunkirk"), dunkirk);
  });

  it('should be able to filter films by genre', function () {
    let expected = [moonlight, trainspotting];
    // assert.deepStrictEqual(cinema.findByGenre("drama"), expected);
    // original test using specific findByGenre function
    assert.deepStrictEqual(cinema.filmsByProperty("genre", "drama"), expected);
    // Extensions test using generic filterByGenre function 
  });

  it('should be able to check whether there are some films from a particular year', function () {
    assert.deepStrictEqual(cinema.yearCheck(2017), true);
  });

  it('should be able to check whether there are no films from a particular year', function () {
    assert.deepStrictEqual(cinema.yearCheck(2015), false);
  });

  it('should be able to check whether all films are over a particular length', function () {
      assert.deepStrictEqual(cinema.allFilmsTimeCheck(90), true);
      assert.deepStrictEqual(cinema.allFilmsTimeCheck(100), false);
  });

  it('should be able to calculate total running time of all films', function () {
    assert.deepStrictEqual(cinema.totalTime(), 622);
  });

  it('Cinema should be able to filter films by year', function () {
    let expected = [bladeRunner, dunkirk, trainspotting];
    assert.deepStrictEqual(cinema.filmsByProperty("year", 2017), expected);
  });
});

module.exports = Cinema;
