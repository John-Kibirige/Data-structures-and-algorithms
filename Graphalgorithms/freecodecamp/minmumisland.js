// given
const grid = [
   "WLWWW".split(""),
   "WLWWW".split(""),
   "WWWLW".split(""),
   "WWLLW".split(""),
   "LWWLL".split(""),
   "LLWWW".split(""),
];

const minimumIsland = (grid) => {
   const visited = new Set();
   let min = Infinity;

   for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
         let size = exploreForSize(grid, r, c, visited);
         if (size > 0 && size < min) min = size;
      }
   }
   return min;
};

const exploreForSize = (grid, r, c, visited) => {
   const rowBounds = r >= 0 && r < grid.length;
   const colBounds = c >= 0 && c < grid[0].length;
   if (!rowBounds || !colBounds) return 0;
   if (grid[r][c] === "W") return 0;

   let pos = r + "," + c;
   if (visited.has(pos)) return 0;
   visited.add(pos);
   let size = 1;

   size += exploreForSize(grid, r - 1, c, visited);
   size += exploreForSize(grid, r + 1, c, visited);
   size += exploreForSize(grid, r, c - 1, visited);
   size += exploreForSize(grid, r, c + 1, visited);

   return size;
};

console.log(minimumIsland(grid));
