// Modeling the question - case for undirected graphs
const graph = new Map();
graph.set("A", { B: 1, C: 3, F: 10 });
graph.set("B", { A: 1, C: 1, G: 2, D: 7, E: 5 });
graph.set("C", { A: 3, B: 1, E: 3, D: 9 });
graph.set("G", { B: 2, D: 12 });
graph.set("D", { B: 7, G: 12, C: 9, E: 2, F: 1 });
graph.set("E", { C: 3, B: 5, D: 2, F: 2 });
graph.set("F", { A: 10, E: 2, D: 1 });

// we create an object for storing the shortest distance and the parent node of a given node
const distanceParent = {
   A: { distance: Infinity, parent: null },
   B: { distance: Infinity, parent: null },
   C: { distance: Infinity, parent: null },
   D: { distance: Infinity, parent: null },
   E: { distance: Infinity, parent: null },
   F: { distance: Infinity, parent: null },
   G: { distance: Infinity, parent: null },
};

// We also create two empty arrays for storing the visited and the unvisited nodes
const visited = [];
const unvisited = [];

function findShortestDistance(startNode) {
   // set the distance of the start node to zero and the previous to that very node
   distanceParent[`${startNode}`].distance = 0;
   distanceParent[startNode].parent = startNode;
   // we shall add this node to the unvisited nodes
   unvisited.push(startNode);

   while (true) {
      // then we shall look at its neighbors and update the distances and the parent node accordingly
      let currentNode = unvisited.shift();
      let currentNodeValue = graph.get(currentNode); // this will be an object that has all the neighbours and their distances, thus to access these we ought to loop through this;
      for (let [key, value] of Object.entries(currentNodeValue)) {
         //   our neighbors are the keys
         let shortestOfKey = distanceParent[currentNode].distance + value;
         if (shortestOfKey < distanceParent[key].distance) {
            //  updating the distance and the parent
            distanceParent[key].distance = shortestOfKey;
            distanceParent[key].parent = currentNode;
         }
         // pushing all neighbors to the unvisited nodes
         if (!unvisited.includes(key)) {
            unvisited.push(key);
         }
      }
      // pushing the current visited node to the visted array.
      if (!visited.includes(currentNode)) {
         visited.push(currentNode);
      }
      // finding a way of breaking off the loop, if all nodes are visted then break of the loop
      if (visited.length === graph.size) {
         break;
      }
   }
   return distanceParent;
}

const start = "A";
const result = findShortestDistance(start);
function generatePathArray(result, target) {
   // get the parent of the target using result
   // push the parent into a path array
   // then in a while loop get the parent of the parent until you reach the start node
   // while unshifting the values got
   let parent = result[target].parent;
   const path = [parent, target];
   while (parent !== start) {
      parent = result[parent].parent;
      path.unshift(parent);
   }
   return path;
}
