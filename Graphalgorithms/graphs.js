// Given the airports problem below
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
const routes = [
   ["PHX", "LAX"],
   ["PHX", "JFK"],
   ["JFK", "OKC"],
   ["JFK", "HEL"],
   ["JFK", "LOS"],
   ["MEX", "LAX"],
   ["MEX", "EZE"],
   ["MEX", "BKK"],
   ["MEX", "LIM"],
   ["LIM", "BKK"],
];

const adjacencyList = new Map();
function addNode(airport) {
   adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
   adjacencyList.get(origin).push(destination);
   adjacencyList.get(destination).push(origin);
}

airports.forEach((airport) => addNode(airport));
routes.forEach((route) => addEdge(...route));

// Now let us implement the bfs algorithm to search for 'BKK' algorithm

function bfs(start) {
   const visited = new Set();
   const queue = [start];

   while (queue.length > 0) {
      const airport = queue.shift();
      const destinations = adjacencyList.get(airport);

      for (const destination of destinations) {
         if (destination === "BKK") {
            console.log("we have reached the destination");
         }
         if (!visited.has(destination)) {
            queue.push(destination);
            visited.add(destination);
            console.log(destination);
         }
      }
   }
}

bfs("PHX");
