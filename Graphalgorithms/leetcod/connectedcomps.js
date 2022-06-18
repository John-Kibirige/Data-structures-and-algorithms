//  n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.

function getConnectedComponents(edges) {
   const graph = generateGraph(edges);
   const visited = new Set();
   let max = 0;

   let array = edges.flat();

   for (let node of array) {
      if (dfs(node.toString(), graph, visited)) {
         max++;
      }
   }

   return max;
}

function dfs(start, graph, visited) {
   if (visited.has(start)) return false;

   visited.add(start);

   for (let neighbor of graph[start]) {
      dfs(neighbor, graph, visited);
   }

   return true;
}

function generateGraph(edges) {
   const graph = {};

   for (let edge of edges) {
      const [a, b] = edge;

      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];

      graph[a].push(b.toString());
      graph[b].push(a.toString());
   }

   return graph;
}
let edges = [
   [0, 1],
   [1, 2],
   [3, 4],
];

console.log(getConnectedComponents(edges));
