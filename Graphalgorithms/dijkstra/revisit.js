const G = {
   A: [
      ["B", 6],
      ["D", 1],
   ],
   B: [
      ["E", 2],
      ["C", 5],
   ],
   D: [
      ["B", 2],
      ["E", 1],
   ],
   E: [["C", 5]],
};

function dijkstra(G, src) {
   // create an object to capture the distance and the parents of nodes ;
   const distPrev = {
      A: [Infinity, null],
      B: [Infinity, null],
      C: [Infinity, null],
      D: [Infinity, null],
      E: [Infinity, null],
   };

   //  capture the contents of the queue in that you capture the node, distance and previous node;
   const queue = [[src, 0, null]];

   while (queue.length > 0) {
      const [node, distance, previous] = queue.shift();

      if (node) {
         // if the node is real;
         let apparentDist = distPrev[node][0];
         if (distance < apparentDist) {
            distPrev[node][0] = distance;
            distPrev[node][1] = previous;
         }
      }

      if (G[node]) {
         for (let neighbor of G[node]) {
            let nib = [...neighbor];
            nib[1] = nib[1] + distance; // we alter the value of the distance for a given node to include the value of the distance from the src node ;
            queue.push([...nib, node]);
         }
      }
   }
   return distPrev;
}

console.log(dijkstra(G, "A"));
