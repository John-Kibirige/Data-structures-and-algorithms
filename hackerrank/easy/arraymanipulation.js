/* 
    given the size of the array and the number of queries to make 

*/

/**
 *
 * @param {Number} n
 * @param {Array} queries
 */
function arrayManipulation(n, queries) {
   const arr = new Array(n + 1).fill(0);
   let max = -Infinity;

   for (let q = 0; q < queries.length; q++) {
      let [a, b, k] = queries[q];

      for (let i = a; i <= b; i++) {
         arr[i] += k;
         if (arr[i] > max) max = arr[i];
      }
   }

   return max;
}

/* 
    gnerate the empty array of n elems filled with zeroes initially 

    then loop through the queries while extracting relevant data and 

    loop through the created array while tracking the maximum value;
*/

// https://www.hackerrank.com/challenges/crush/problem
