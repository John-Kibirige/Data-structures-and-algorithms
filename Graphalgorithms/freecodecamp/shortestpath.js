// we are given an array or edgest to work with so we have to first convert it to an adjacency list
const edges = [
   ["w", "x"],
   ["x", "y"],
   ["z", "y"],
   ["z", "v"],
   ["w", "v"],
];

function convert(edges) {
   const graph = {};
   for (let edge of edges) {
      const [a, b] = edge;
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
   }
   return graph;
}

function shortestPath(edges, nodeA, nodeB) {
   const graph = convert(edges);
   const visited = new Set([nodeA]);
   const queue = [[nodeA, 0]];

   while (queue.length) {
      const [node, distance] = queue.shift();
      if (node === nodeB) return distance;

      for (let neighbor of graph[node]) {
         if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push([neighbor, distance + 1]);
         }
      }
   }
   return -1;
}

console.log(shortestPath(edges, "w", "z"));

const graph = convert(edges);
function longestPath(graph, source, target, visited) {
   if (source === target) return 0;

   if (visited.has(source)) return 0;
   visited.add(source);

   let size = 1;
   for (let neighbor of graph[source]) {
      size += longestPath(graph, neighbor, target, visited);
   }
   return size;
}

console.log(longestPath(graph, "y", "v", new Set()));
