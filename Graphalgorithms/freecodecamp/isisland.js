// island count problem
const grid = [
   "WLWWW".split(""),
   "WLWWW".split(""),
   "WWWLW".split(""),
   "WWLLW".split(""),
   "LWWLL".split(""),
   "LLWWW".split(""),
];

function isIsland(grid) {
   const visited = new Set();
   let count = 0;
   for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
         if (explore(grid, r, c, visited)) {
            count++;
         }
      }
   }
   return count;
}

function explore(grid, r, c, visited) {
   const rowInBounds = r >= 0 && r < grid.length;
   const colInBounds = c >= 0 && c < grid[0].length;
   if (!rowInBounds || !colInBounds) return false;

   if (grid[r][c] === "W") return false;

   let pos = c + "," + r;
   if (visited.has(pos)) return false;
   visited.add(pos);

   //    we now explore the current position's neighbors
   explore(grid, r - 1, c, visited);
   explore(grid, r + 1, c, visited);
   explore(grid, r, c - 1, visited);
   explore(grid, r, c + 1, visited);

   return true;
}

console.log(isIsland(grid));
