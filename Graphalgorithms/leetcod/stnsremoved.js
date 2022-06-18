/*
947. Most Stones Removed with Same Row or Column
Medium

On a 2D plane, we place n stones at some integer coordinate points. Each coordinate point may have at most one stone.

A stone can be removed if it shares either the same row or the same column as another stone that has not been removed.

Given an array stones of length n where stones[i] = [xi, yi] represents the location of the ith stone, return the largest possible number of stones that can be removed.

*/

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
   const graph = generateList(stones);
   let connectedComponents = 0;
   const removed = new Set();

   for (let stone of stones) {
      if (explore(stone.toString(), graph, removed)) {
         connectedComponents++;
      }
   }
   return stones.length - connectedComponents;
};

function explore(start, graph, removed) {
   if (removed.has(start)) return false;
   removed.add(start);

   for (let neighbor of graph[start]) {
      explore(neighbor, graph, removed);
   }

   return true;
}

function generateList(stones) {
   const graph = {};

   for (let stone of stones) {
      const [a, b] = stone;
      let pos = a + "," + b;
      if (!(pos in graph)) graph[pos] = [];

      stones.forEach((cord) => {
         let [r, c] = cord;
         if (r === a || c === b) graph[pos].push(cord.toString());
      });
   }
   return graph;
}

stones = [
   [0, 0],
   [0, 2],
   [1, 1],
   [2, 0],
   [2, 2],
];
console.log(removeStones(stones));
