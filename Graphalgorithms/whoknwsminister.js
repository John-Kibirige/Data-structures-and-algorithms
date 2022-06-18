// const people =
//    "you bob claire alice duke anuj peggy jonny thom gav pete dan kia brian".split(
//       " "
//    );
// const connections = [
//    ["you", "bob"],
//    ["you", "claire"],
//    ["you", "alice"],
//    ["bob", "anuj"],
//    ["bob", "gav"],
//    ["bob", "peggy"],
//    ["anuj", "duke"],
//    ["alice", "peggy"],
//    ["gav", "pete"],
//    ["gav", "dan"],
//    ["claire", "gav"],
//    ["claire", "thom"],
//    ["claire", "jonny"],
//    ["thom", "kia"],
//    ["dan", "kia"],
//    ["kia", "brian"],
// ];

// // the adjacency list
// const adjacencyList = new Map();

// // add node or person in this context
// function addPerson(person) {
//    if (!adjacencyList.has(person)) {
//       adjacencyList.set(person, []);
//    }
// }

// add an edge(s) or in this context a connection
// function addEdge(source, destination) {
//    if (adjacencyList.has(source) && adjacencyList.has(destination)) {
//       adjacencyList.get(source).push(destination);
//       adjacencyList.get(destination).push(source);
//    }
// }

// // fill up our list with all the nodes and edges
// people.forEach((person) => addPerson(person));
// connections.forEach((connection) => {
//    addEdge(...connection);
// });

// at this point our list is populated and thus testing can be done
// console.log(adjacencyList);

const adjacencyList = new Map();
adjacencyList.set("you", ["bob", "claire", "alice"]);
adjacencyList.set("bob", ["anuj", "gav", "peggy"]);
adjacencyList.set("anuj", ["duke"]);
adjacencyList.set("alice", ["peggy"]);
adjacencyList.set("gavi", ["pet", "dan"]);
adjacencyList.set("dan", ["kia"]);
adjacencyList.set("claire", ["gavi", "thom", "jonny"]);
adjacencyList.set("thom", ["kia"]);
adjacencyList.set("kia", ["brian"]);
adjacencyList.set("duke", []);
adjacencyList.set("peggy", []);
adjacencyList.set("jonny", []);
adjacencyList.set("brian", []);
adjacencyList.set("pet", []);

// now let us look for brian using the shortest path possible
function bfs(start) {
   const completed = new Set();
   const queue = [start];
   while (queue.length > 0) {
      const person = queue.shift();
      const personNeighbors = adjacencyList.get(person);
      // looping through the person neighbors to see if one of them is brian becausen brian knows the minister
      if (personNeighbors) {
         for (const neighbor of personNeighbors) {
            if (neighbor === "brian") {
               console.log("brian reached !!! ");
               break;
            }

            if (!completed.has(neighbor)) {
               completed.add(neighbor);
               queue.push(neighbor);
               console.log(neighbor);
            }
         }
      }
   }
}

bfs("you");
