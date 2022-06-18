const graph = {
   f: ["g", "i"],
   g: ["h"],
   h: [],
   i: ["g", "k"],
   j: ["i"],
   k: [],
};

// the task is to return true if the path exists or false if it doesnot
function hasPath(graph, source, destination) {
   if (source === destination) return true;

   for (let neighbor of graph[source]) {
      if (hasPath(graph, neighbor, destination)) {
         return true;
      }
   }
   return false;
}

// console.log(hasPath(graph, "f", "j"));

// using breath first search
function breathHasPath(graph, source, dest) {
   if (source === dest) return true;

   const queue = [source];
   while (queue.length) {
      const current = queue.shift();
      if (current === dest) return true;
      for (let i of graph[current]) {
         queue.push(i);
      }
   }
   return false;
}

console.log(breathHasPath(graph, "f", "j"));
