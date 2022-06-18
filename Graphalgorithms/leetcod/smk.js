/**
 * @param {number[][]} matrix
 * @return {number}
 */

var longestIncreasingPath = function (matrix) {
   let rLen = matrix.length,
      cLen = matrix[0].length,
      maxCount = 0;

   let memo = new Array(rLen).fill(0).map(() => new Array(cLen).fill(0));
};

const matrix = [
   [9, 9, 4],
   [6, 6, 8],
   [2, 1, 1],
];

console.log(generateGraph(matrix));
