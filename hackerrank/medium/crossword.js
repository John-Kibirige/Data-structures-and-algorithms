// https://www.hackerrank.com/challenges/crossword-puzzle/problem
/**
 *
 * @param {Array} crossword
 * @param {string} words
 */
function crosswordPuzzle(crossword) {
   let graph = {};
   const visited = new Set();

   for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
         console.log(exploreHor(crossword, r, c, visited));
         console.log(exploreVertical(crossword, r, c, visited));
      }
   }
}

// helper functions

// function for getting th vertical number of valid places and indexes
function exploreHor(grid, r, c) {
   const visited = new Set();
   const stack = [[r, c]];
   let count = 0;

   while (stack.length > 0) {
      const [row, col] = stack.pop();
      let pos = row + "," + col;
      if (col >= 0 && col < 10) {
         if (grid[row][col] === "-" && !visited.has(pos)) {
            visited.add(pos);
            count++;
         }

         if (col + 1 >= 0 && col < 10) {
            stack.push([row, col + 1]);
         }

         if (col - 1 >= 0 && col < 10) {
            stack.push([row, col - 1]);
         }
      }
   }

   return count;
}

function exploreVertical(grid, r, c, visited) {
   const bounds = c >= 0 && c < 0;
   if (!bounds) return 0;
   if (grid[r][c] === "+") return 0;

   let pos = r + "," + c;
   if (visited.has(pos)) return 0;
   visited.add(pos);

   let size = 1;
   size += exploreHor(grid, r - 1, c, visited);
   size += exploreHor(grid, r + 1, c + 1, visited);

   return size;
}

const crossword = [
   "+-++++++++",
   "+-++++++++",
   "+-++++++++",
   "+-----++++",
   "+-+++-++++",
   "+-+++-++++",
   "+++++-++++",
   "++------++",
   "+++++-++++",
   "+++++-++++",
];

console.log(exploreHor(crossword, 3, 1));
console.log("this is pretty interesting");
