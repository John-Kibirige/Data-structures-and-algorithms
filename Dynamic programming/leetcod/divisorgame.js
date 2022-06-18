/* 
1025. Divisor Game
Easy

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

    Choosing any x with 0 < x < n and n % x == 0.
    Replacing the number n on the chalkboard with n - x.

Also, if a player cannot make a move, they lose the game.

Return true if and only if Alice wins the game, assuming both players play optimally.

*/

/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
   return n % 2 === 0 ? true : false;
};

console.log(100);
// All these players will want to play to win
/*
Because of this, they have the same strategy that is;
Look for all the numbers that will make the option loose and make smart moves 
*/
