// Promp: given an undirected graph,  return a boolean to
// indicate the presence of a path from a source node to the target or dstinationi

const edges = [
   ["i", "j"],
   ["k", "i"],
   ["m", "k"],
   ["k", "l"],
   ["o", "n"],
];

const undirectedPath = (edges, nodeA, nodeB) => {
   const adjacencyList = toAdjList(edges);
   return hasPath(adjacencyList, nodeA, nodeB, new Set()); // created during calling
};

function hasPath(graph, source, target, visited) {
   // base case
   if (source === target) return true;
   if (visited.has(source)) return false;

   visited.add(source);
   for (let neighbor of graph[source]) {
      if (hasPath(graph, neighbor, target, visited)) {
         return true;
      }
   }
   return false;
}

function toAdjList(edges) {
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

console.log(undirectedPath(edges, "j", "m"));
