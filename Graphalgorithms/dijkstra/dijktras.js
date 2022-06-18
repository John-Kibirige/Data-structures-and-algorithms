// the following is an implementation of dijkstra's algorithm

const allNodes = [
   { A: ["B", 5] },
   { A: ["C", 0] },
   { B: ["D", 15] },
   { B: ["E", 20] },
   { C: ["D", 30] },
   { C: ["E", 35] },
   { D: ["F", 20] },
   { E: ["F", 10] },
   { F: [null, 0] },
];

const visited = [];
const unvisited = "A B C D E F".split(" ");

const obj = {
   A: 0,
   B: Infinity,
   C: Infinity,
   D: Infinity,
   E: Infinity,
   F: Infinity,
};

const parent = {
   A: null,
   B: null,
   C: null,
   D: null,
   E: null,
   F: null,
};

let repo = [];

allNodes.forEach((nodeObject) => {
  
   if (nodeObject[lowestNode] && !visited.includes(lowestNode)) {
      let repo_distance = obj[lowestNode] + nodeObject[lowestNode][1];
      let original_distance =  obj[nodeObject[lowestNode][0]] ;
      if(repo_distance < original_distance) {
          obj[nodeObject[lowestNode][0]] = repo_distance;
      }
   }
});

console.log(obj)