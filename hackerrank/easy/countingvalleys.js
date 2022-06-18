// https://www.hackerrank.com/contests/microverse-fast-track/challenges/counting-valleys

/**
 *
 * @param {Number} steps
 * @param {String} path
 */
function countingValleys(steps, path) {
   // convert the path into an array but use the same variable to store the formed array
   // then convert the characters into numbers 1 for 'U' and -1 for 'D'

   path = path.split("").map((char) => {
      if (char === "U") return 1;
      if (char === "D") return -1;
   });

   //  get the cumulative values at every index;
   for (let i = 1; i < path.length; i++) {
      path[i] += path[i - 1];
   }

   let counter = 0;
   const clone = [...path];

   let tot = 0;
   clone.forEach((elem) => {
      tot += elem;
      if (elem === 0) {
         if (tot < 0) counter++;
         tot = 0;
      }
   });

   return counter;
}

/* 
  go step by step while adding values and if you reach 0 ;
  see if all the summed values are less than 0 or more than ;
  if it is less than 0; count that valley after which you reset 
  the total counter to 0;
  and continue hence optimizing the whole solution 
*/
