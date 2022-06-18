/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//    let memo = { 1: 1, 2: 2 };
//    for (let i = 3; i <= n; i++) {
//       memo[i] = memo[i - 1] + memo[i - 2];
//    }
//    return memo[n];
// };

var climbStairs = (n, memo = {}) => {
   if (n in memo) return memo[n];
   if (n === 1) return 1;
   if (n === 2) return 2;
   return (memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo));
};

console.log(climbStairs(45));

// This number resembles the fibonacci sequence
