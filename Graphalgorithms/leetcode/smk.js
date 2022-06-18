let graph = { fwwxot: 2, dt: 2, feingsx: 3 };

function checkIfAllAreEqual(graph) {
   const base = Object.entries(graph)[0][1];
   const response = [];
   for (let [k, v] of Object.entries(graph)) {
      if (v === base) response.push(true);
      else response.push(false);
   }
   return !response.includes(false);
}

console.log(checkIfAllAreEqual(graph));
