const edges = [
   [1, 2],
   [2, 3],
   [3, 4],
   [4, 5],
   [5, 6],
   [6, 7],
   [7, 4],
   [4, 1],
   [1, 7],
];

// The  main function where the shortest distance from node to node will be calculated

function getShortestCycle(edges, n) {
   const graph = getGraph(edges);
   let min = Infinity;

   for (let i = 1; i <= n; i++) {
      let result = getDistance(graph, i, i);
      if (result < min) min = result;
   }

   return min;
}

// Helper functions

// For calculating the shortest distance from node to node
function getDistance(graph, src, tgt) {
   const vis = new Set();
   const queue = [[src, 0]];

   while (queue.length > 0) {
      const [node, distance] = queue.shift();
      if (vis.size > 0 && node === tgt) return distance;

      for (let neighbor of graph[node]) {
         if (!vis.has(neighbor)) {
            vis.add(neighbor);
            queue.push([neighbor, distance + 1]);
         }
      }
   }
}

function getGraph(edges) {
   const graph = {};
   const visited = new Set();

   for (let edge of edges) {
      const [a, b] = edge;
      if (!visited.has(a)) graph[a] = [];
      visited.add(a);
      graph[a].push(b);
   }

   return graph;
}
console.log(getShortestCycle(edges, 7));
