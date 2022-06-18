/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
   let maxCount = -Infinity;

   for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
         let count = dfs(matrix, r, c, visited);
         console.log(` cordinates : ${r},${c} = ${count}`);
         if (count > maxCount) maxCount = count;
      }
   }

   return maxCount;
};

// Helper functions
function dfs(matrix, r, c, memo = {}) {
   // Base cases
   const rowBounds = r >= 0 && r < matrix.length;
   const colBounds = c >= 0 && c < matrix[0].length;
   if (!rowBounds || !colBounds) return 0;

   // we sort of memoize the pos and its value, so we check if it already exists in our memo
   let pos = r + "," + c;
   if (pos in memo) return memo[pos];

   let current = matrix[r][c];

   // declare these for all possible dirrections
   let top, bottom, left, right;

   // we want to return zero for a particular dirrection on conditon
   //  that it is less than our current and wheter is is less;

   top =
      r - 1 >= 0 && current <= matrix[r - 1][c]
         ? 0
         : dfs(matrix, r - 1, c, memo);

   bottom =
      r + 1 < matrix.length && current <= matrix[r + 1][c]
         ? 0
         : dfs(matrix, r + 1, c, memo);

   left =
      c - 1 >= 0 && current <= matrix[r][c - 1]
         ? 0
         : dfs(matrix, r, c - 1, memo);

   right =
      c + 1 < matrix[0].length && current <= matrix[r][c + 1]
         ? 0
         : dfs(matrix, r, c + 1, memo);

   const answer = Math.max(top, bottom, left, right) + 1;
   return (memo[pos] = answer);
}

matrix = [
   [9, 9, 4],
   [6, 6, 8],
   [2, 1, 1],
];

console.log(longestIncreasingPath(matrix));
