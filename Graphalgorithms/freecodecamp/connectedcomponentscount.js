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

const connectedComponentCount = (graph) => {
   const visited = new Set();
   let count = 0;
   for (let node in graph) {
      if (explore(graph, node, visited)) {
         count++;
      }
   }
   return count;
};

const explore = (graph, current, visited) => {
   if (visited.has(String(current))) return false;

   visited.add(String(current));
   for (let neighbor of graph[current]) {
      explore(graph, neighbor, visited);
   }
   console.log("current size of visited", visited.size);
   return true;
};

console.log(connectedComponentCount(graph));
// Ensure to convert the current values to strings as the key
//  values will be misinterpreted as numbers intead of numbers hence resulting to issues
