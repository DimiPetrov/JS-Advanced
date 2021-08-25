const { assert } = require("chai");

const cinema = {
    showMovies: function(movieArr) {
 
         if (movieArr.length == 0) {
             return 'There are currently no movies to show.';
         } else {
             let result = movieArr.join(', ');
             return result;
         }
 
     },
     ticketPrice: function(projectionType) {
 
         const schedule = {
             "Premiere": 12.00,
             "Normal": 7.50,
             "Discount": 5.50
         }
         if (schedule.hasOwnProperty(projectionType)) {
             let price = schedule[projectionType];
             return price;
         } else {
             throw new Error('Invalid projection type.');
         }
 
     },
     swapSeatsInHall: function(firstPlace, secondPlace) {
 
         if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
         !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
             return "Unsuccessful change of seats in the hall.";
         } else {
             return "Successful change of seats in the hall.";
         }
 
     }
  };

describe('cinema', function() {
    describe('showMovies', function() {
        it('Should return empty array when called with empty arrays', function() {
            assert.strictEqual(cinema.showMovies([]), "There are currently no movies to show.");
        });
        it('Should return a list of movies separated by comma and space', function(){
            assert.strictEqual(cinema.showMovies(['It', 'Cinderella']), 'It, Cinderella'); 
        });
    });

    describe('ticketPrice', function() {
        it('Should return a premiere price', function() {
            assert.strictEqual(cinema.ticketPrice('Premiere'), 12.00);
        });
        it('Should return a normal price', function() {
            assert.strictEqual(cinema.ticketPrice('Normal'), 7.50);
        });
        it('Should return a discount price', function() {
            assert.strictEqual(cinema.ticketPrice('Discount'), 5.50);
        });
        it('Should throw an error if an invalid projection type is given.', function() {
            assert.throw(() => cinema.ticketPrice('abc'), Error, 'Invalid projection type.');
        });
    });

    describe('swapSeatsInHall', function() {
        it('Both seats should be integers', function(){
            assert.strictEqual(cinema.swapSeatsInHall(2.4, 3.3), 'Unsuccessful change of seats in the hall.');
            assert.strictEqual(cinema.swapSeatsInHall(2, 3), 'Successful change of seats in the hall.');
        });
        it('Both seats should be between 1 and 20', function(){
            assert.strictEqual(cinema.swapSeatsInHall(22,5), 'Unsuccessful change of seats in the hall.');
            assert.strictEqual(cinema.swapSeatsInHall(2, 19), 'Successful change of seats in the hall.');
            assert.strictEqual(cinema.swapSeatsInHall(0, 4), 'Unsuccessful change of seats in the hall.');
            assert.strictEqual(cinema.swapSeatsInHall(2, 23), 'Unsuccessful change of seats in the hall.');
            assert.strictEqual(cinema.swapSeatsInHall(2, -4), 'Unsuccessful change of seats in the hall.');
        });
    });
});