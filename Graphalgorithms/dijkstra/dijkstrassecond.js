// this is the breaking down of the data from the problem;
const nodes = new Map();
nodes.set("A", { B: 5, C: 0 });
nodes.set("B", { D: 15, E: 20 });
nodes.set("C", { D: 30, E: 35 });
nodes.set("D", { F: 20 });
nodes.set("E", { F: 10 });
nodes.set("F", null);

// both visited and unvisited nodes are initially empty
const visited = [];
const unvisited = [];

// an object showing all the distance inform of dist and parentNodes in form of parent;
const shortDistAndParent = {
   A: { dist: 0, parent: "A" },
   B: { dist: Infinity, parent: null },
   C: { dist: Infinity, parent: null },
   D: { dist: Infinity, parent: null },
   E: { dist: Infinity, parent: null },
   F: { dist: Infinity, parent: null },
};

// implementation of the find shortest distance method with its parameter being the start node;
function findShortestDist(start) {
   unvisited.push(start);
   while (unvisited.length > 0) {
      if (
         unvisited.length === 1 &&
         !checkIfNodeHasNeighbors(unvisited[0], nodes)
      ) {
         visited.push(unvisited.shift());
      } else {
         // get the first element in the unvisited array ;
         let currentNode = unvisited.shift();
         // using our nodes map get the object value of the current node;
         let currentNodeValue = nodes.get(currentNode);
       
         // loop through the values of this object value of the map 
         for (let [k, v] of Object.entries(currentNodeValue)) {
            let shortestDistance = v + shortDistAndParent[currentNode].dist;
            if (shortestDistance < shortDistAndParent[k].dist) {
               shortDistAndParent[k].dist = shortestDistance;
               shortDistAndParent[k].parent = currentNode;
               if (!unvisited.includes(k)) {
                  unvisited.push(k);
               }
            }
         }
         if (!visited.includes(currentNode)) {
            visited.push(currentNode);
         }
      }
   }
   
   return shortDistAndParent;
}

// for checking if node has neighbor
function checkIfNodeHasNeighbors(node, allNodes) {
   return Boolean(allNodes.get(node));
}

// to return a string route
let result = findShortestDist("A");
function generatePath(node, result) {
   const route = [];
   while (true) {
      route.unshift(node);
      let parent = result[node].parent;
      if (parent === "A") {
         route.unshift(parent);
         break;
      }
      node = parent;
   }
   return route;
}
