/*
 * Complete the 'bfs' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. 2D_INTEGER_ARRAY edges
 *  4. INTEGER s
 */

function bfs(n, m, edges, s) {
   const graph = genGraph(edges, m);
   const visited = new Set([s]);
   const queue = [[s, 0]];
   const memo = {};

   while (queue.length > 0) {
      const [node, distance] = queue.shift();
      memo[node] = distance;
      // go through the neighbors
      for (let neighbor of graph[node]) {
         if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push([neighbor, distance + 6]);
         }
      }
   }

   const resultArray = [];

   for (let i = 1; i <= n; i++) {
      let value = memo[i] ? memo[i] : memo[i] === 0 ? 0 : -1;
      if (value !== 0) {
         resultArray.push(value);
      }
   }

   return resultArray;
}

function genGraph(edges, m) {
   const visited = new Set();
   const G = {};
   for (let i = 0; i < m; i++) {
      const [a, b] = edges[i];
      if (!visited.has([a, b].toString())) {
         visited.add([a, b].toString());
         if (!(a in G)) G[a] = [];
         if (!(b in G)) G[b] = [];
         G[a].push(b);
         G[b].push(a);
      }
   }
   return G;
}
const edges = [
   [1, 2],
   [1, 3],
   [3, 4],
];
console.log(bfs(5, 3, edges, 1));
