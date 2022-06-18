/*** Evaluate division problem
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
   const graph = generateList(equations, values);
   return queries.reduce((result, query) => {
      const [source, target] = query;
      result.push(exploreForDiv(graph, source, target));
      return result;
   }, []);
};

// explore helper function for the generating the dist moved
function exploreForDiv(graph, source, target) {
   const visited = new Set([source]);

   const queue = [[source, 1]];

   if (!(source in graph) || !(target in graph)) return -1;

   while (queue.length) {
      const [node, distance] = queue.shift();
      if (node === target) return distance;

      for (let neighbor of graph[node]) {
         const [currNode, dist] = neighbor;

         if (!visited.has(currNode)) {
            visited.add(currNode);
            queue.push([currNode, distance * dist]);
         }
      }
   }
   return -1;
}

// method for generating an adjacency list
function generateList(equations, values) {
   const graph = {};
   for (let i = 0; i < equations.length; i++) {
      const [numerator, denominator] = equations[i];
      if (!(numerator in graph)) graph[numerator] = [];
      if (!(denominator in graph)) graph[denominator] = [];
      graph[numerator].push([denominator, values[i]]);
      graph[denominator].push([numerator, 1 / values[i]]);
   }
   return graph;
}

let equations = [
   ["a", "b"],
   ["b", "c"],
];

let values = [2.0, 3.0];

let queries = [
   ["a", "c"],
   ["b", "a"],
   ["a", "e"],
   ["a", "a"],
   ["x", "x"],
];
console.log(calcEquation(equations, values, queries));
// let graph = generateList(equations, values);
// console.log(exploreForDiv(graph, "cd", "bc"));
