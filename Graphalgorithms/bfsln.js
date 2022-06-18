// defining the graph
const graph = {
   A: ["B", "C"],
   B: ["A", "C"],
   C: ["A", "B", "Z"],
   D: ["C", "E", "F"],
   E: ["B", "F", "D"],
   F: ["E", "G", "D"],
   G: ["F", "Z"],
   Z: ["Z"],
};

const dfs = (graph, src, tgt, visited) => {
   if (visited.has(src)) return 0;
   if (src === tgt) return 0;

   visited.add(src);

   let arr = [];

   for (let neighbor of graph[src]) {
      const returned = dfs(graph, neighbor, tgt, visited);
      arr.push(returned);
   }

   return 1 + Math.max(...arr);
};

console.log(dfs(graph, "B", "G", new Set()));
