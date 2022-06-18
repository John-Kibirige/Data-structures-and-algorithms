/**
 * @param {number} n
 * @return {number}
 */
// var numTrees = function (n) {
//    return fact(2 * n) / (fact(n + 1) * fact(n));
// };

// // helper function

// function fact(n) {
//    if (n === 1) return 1;
//    return n * fact(n - 1);
// }

// console.log(numTrees(5));

// // after a thorough walk through of the question and the break down, it is evident that this is a catalan number with a spec
// // ific expansion or equation

function numTrees(n, memo = {}) {
   if (n in memo) return memo[n];
   if (n === 0 || n === 1) return 1;

   let trees = 0;
   for (let i = 1; i <= n; i++) {
      trees += numTrees(n - i, memo) * numTrees(i - 1, memo);
   }
   return (memo[n] = trees);
}

console.log(numTrees(3));
