// https://www.hackerrank.com/challenges/torque-and-development/problem?isFullScreen=true

function roadsAndLibraries(n, c_lib, c_road, cities) {
   const components = getComps(cities);
   const result = components.reduce((acc, curr) => {
      acc += getCost(curr, c_lib, c_road);
      return acc;
   }, 0);

   let citiesWithRoads = Object.keys(generateGraph(cities)).length;

   return (n - citiesWithRoads) * c_lib + result;
}

// helper functions
// compute cost per component;
function getCost(comp, c_lib, c_road) {
   let min = Infinity;
   for (let lib = comp; lib >= 1; lib--) {
      let r = comp - lib;
      let cost = lib * c_lib + r * c_road;
      if (cost < min) min = cost;
   }
   return min;
}

// function for calculating the number of nodes in each of the component(s)
function getComps(cities) {
   const G = generateGraph(cities);
   const repo = [];
   const visited = new Set();
   for (let i of new Set(cities.flat())) {
      let res = traverse(G, i, visited);
      repo.push(res);
   }
   return repo.filter((elem) => elem > 0);
}

// get the size of a particular component;
function traverse(G, src, visited) {
   if (visited.has(src)) return 0;
   visited.add(src);
   let size = 1;

   for (let neighbor of G[`${src}`]) {
      size += traverse(G, neighbor, visited);
   }

   return size;
}

// A function that that converts the routes between cities to a graph
const generateGraph = (cities) => {
   const G = {};
   for (let city of cities) {
      const [a, b] = city;
      if (!(a in G)) G[`${a}`] = [];
      if (!(b in G)) G[`${b}`] = [];
      G[a].push(b);
      G[b].push(a);
   }
   return G;
};

// Note that we ought to add the cost of disconnected cities ;

// PASSED ALL TEST CASES
