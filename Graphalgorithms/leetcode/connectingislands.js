/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
 return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or
 vertically. You may assume all four edges of the grid are all surrounded by water.

*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
   const visited = new Set();
   let count = 0;

   for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
         if (exploreForBoolean(grid, r, c, visited)) {
            count++;
         }
      }
   }
   return count;
};

const exploreForBoolean = (grid, r, c, visited) => {
   const rowBounds = r >= 0 && r < grid.length;
   const colBounds = c >= 0 && c < grid[0].length;
   if (!rowBounds || !colBounds) return false;
   if (grid[r][c] === "0") return false;

   let pos = r + "," + c;
   if (visited.has(pos)) return false;
   visited.add(pos);

   exploreForBoolean(grid, r - 1, c, visited);
   exploreForBoolean(grid, r + 1, c, visited);
   exploreForBoolean(grid, r, c - 1, visited);
   exploreForBoolean(grid, r, c + 1, visited);

   return true;
};
grid = [
   ["1", "1", "0", "0", "0"],
   ["1", "1", "0", "0", "0"],
   ["0", "0", "1", "0", "0"],
   ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
