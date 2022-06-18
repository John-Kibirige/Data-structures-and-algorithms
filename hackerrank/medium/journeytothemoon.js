// https://www.hackerrank.com/challenges/journey-to-the-moon/problem

/*
 * Complete the 'journeyToMoon' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY astronaut
 */
function journeyToMoon(n, astronaut) {
   const graph = genGraph(astronaut);
   const visited = new Set();
   let collect = [];

   for (let i = 0; i < n; i++) {
      if (!visited.has(i)) {
         let r = explore(graph, i, visited);
         if (r > 0) collect.push(r);
      }
   }

   //  we modify our collect to include the singly astronauts from other countries ;
   const remainder = collect.reduce((acc, curr) => {
      return (acc += curr);
   }, 0);

   const bal = n - remainder;

   // add the total of these astronauts to the collect array
   let newCol = [...collect, bal];

   return possibleComb(newCol) + handle(bal);
}

// for all the one's or the ungrouped
function possibleComb(arr, total = 0) {
   for (let i = 0; i < arr.length; i++) {
      total += arr.slice(i + 1).reduce((acc, curr) => {
         acc += arr[i] * curr;
         return acc;
      }, 0);
   }
   return total;
}

// handle repeating ones
function handle(n) {
   let total = 0;
   for (let i = n - 1; i >= 1; i--) {
      total += i;
   }
   return total;
}

// logic for computing the number of astronauts from a given country
function explore(graph, src, visited) {
   if (visited.has(src)) return 0;
   visited.add(src);

   let size = 1;
   if (graph[src]) {
      for (let neighbor of graph[src]) {
         size += explore(graph, neighbor, visited);
      }
      return size;
   }
}

// we do this by generating a normal graph;
function genGraph(astronaut) {
   const G = {};
   for (let ast of astronaut) {
      const [a, b] = ast;
      if (!(a in G)) G[a] = [];
      if (!(b in G)) G[b] = [];
      G[a].push(b);
      G[b].push(a);
   }
   return G;
}

let astronaut = [[0, 1]];

console.log(journeyToMoon(1000, astronaut));

// ACCEPTED SOLUTION WITH THE MAIN CONCERN BEING ON THE OPTIMIZATION OF THE CODE;
