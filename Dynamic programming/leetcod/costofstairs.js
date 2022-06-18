/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
   const memo = {};
   function minPath(n) {
      if (n in memo) return memo[n];
      if (n <= 1) return 0;

      let path1 = cost[n - 1] + minPath(n - 1);
      let path2 = cost[n - 2] + minPath(n - 2);

      let path = Math.min(path1, path2);

      return (memo[n] = path);
   }

   return minPath(cost.length);
};

console.log(minCostClimbingStairs([0, 0, 1, 1]));

// marking guide
var minCostClimbingStairs = function (cost) {
   for (let i = cost.length - 3; ~i; i--)
      cost[i] += Math.min(cost[i + 1], cost[i + 2]);
   return Math.min(cost[0], cost[1]);
};
