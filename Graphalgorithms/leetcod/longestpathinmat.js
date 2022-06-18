/**
 * @param {number[][]} matrix
 * @return {number}
 */

var longestIncreasingPath = function (M) {
   let ylen = M.length,
      xlen = M[0].length,
      ans = 0,
      memo = Array.from({ length: ylen }, (el) => new Uint16Array(xlen));
   const dfs = (y, x) => {
      if (memo[y][x]) return memo[y][x];
      let val = M[y][x];
      memo[y][x] =
         1 +
         Math.max(
            y < ylen - 1 && M[y + 1][x] < val ? dfs(y + 1, x) : 0,
            y > 0 && M[y - 1][x] < val ? dfs(y - 1, x) : 0,
            x < xlen - 1 && M[y][x + 1] < val ? dfs(y, x + 1) : 0,
            x > 0 && M[y][x - 1] < val ? dfs(y, x - 1) : 0
         );
      return memo[y][x];
   };
   for (let i = 0; i < ylen; i++)
      for (let j = 0; j < xlen; j++) ans = Math.max(ans, dfs(i, j));
   return ans;
};

matrix = [
   [9, 9, 4],
   [6, 6, 8],
   [2, 1, 1],
];

console.log(longestIncreasingPath(matrix));

// this solution looks at the longests sequence up to the current node ;
