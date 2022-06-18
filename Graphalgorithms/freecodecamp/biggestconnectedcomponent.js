// write a function, connected component count that takes in the adjacency list of an undirected
// graph. The function should return the number of connected components within the graph

const graph = {
   0: [8, 1, 5],
   1: [0],
   5: [0, 8],
   8: [0, 5],
   2: [3, 4],
   3: [2, 4],
   4: [3, 2],
};

const longestConnectedComponent = (graph) => {
   const visited = new Set();
   let longest = 0;
   for (let node in graph) {
      let size = explore(graph, node, visited);
      if (size > longest) longest = size;
   }
   return longest;
};

const explore = (graph, current, visited) => {
   if (visited.has(String(current))) return 0;

   let size = 1; // represents the node we are on
   visited.add(String(current));
   for (let neighbor of graph[current]) {
      size += explore(graph, neighbor, visited);
   }
   return size;
};

console.log(longestConnectedComponent(graph));
