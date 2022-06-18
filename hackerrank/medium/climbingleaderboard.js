// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

/**
 *
 * @param {Array} ranked
 * @param {Array} player
 * @returns
 */
function climbingLeaderboard(ranked, player) {
   ranked = ranked.sort((a, b) => b - a);
   ranked = Array.from(new Set(ranked));

   return player.reduce((acc, curr) => {
      acc.push(search(ranked, curr) + 1);
      return acc;
   }, []);
}
// insertion sort algorithm for detecting where the target would be in case it was not part of the array
function search(array, target) {
   let min = 0,
      max = array.length - 1;
   while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      let guess = array[mid];
      if (guess === target) {
         return mid;
      } else if (guess > target) {
         min = mid + 1;
      } else {
         max = mid - 1;
      }
   }
   return min;
}

/*
  you first sort the array in descending order and then use a set to remove any repetition 
  then use the insertion sort algorithm 
*/
