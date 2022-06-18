/*
279. Perfect Squares
Medium

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
*/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
   const memo = { 0: 0 };

   for (let i = 1; i <= n; i++) {
      let min = Infinity;
      for (let j = 1; j ** 2 <= i; j++) {
         if (!(j ** 2 in memo)) memo[j ** 2] = 1;
         let cal = 1 + memo[i - j ** 2];
         if (cal < min) min = cal;
      }
      memo[i] = min;
   }
   return memo[n];
};

/* 
REMARKS

The best solution to this question was to use a bottom up approach while memoizing the previous based / answers 

*/
