/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
   const nodesAtLevel = levelNodes(level, id, friends);
   let results = nodesAtLevel.reduce((videos, node) => {
      videos.push(watchedVideos[node]);
      return videos;
   }, []);

   return handleResults(results.flat());
};

// a helper function that will generate the nodes at a certain level;
function levelNodes(level, id, friends) {
   const queue = [[id]];
   const visited = new Set();
   let count = 0;

   while (queue.length) {
      count++;
      let repo = [];
      let nodes = queue.shift();
      for (let i of nodes) {
         if (!visited.has(i)) {
            visited.add(i);
            repo.push(...friends[i]);
         }
      }
      queue.push(repo);
      if (count === level) {
         return queue[0].filter((elem) => !visited.has(elem));
      }
   }
}

// a helper function to help us decode the abstract result into what is needed.
function handleResults(results) {
   let storage = {};
   for (let result of results) {
      if (!(result in storage)) storage[result] = 1;
      else storage[result] += 1;
   }
   if (checkIfAllEqual(storage)) {
      return Object.entries(storage).reduce((acc, curr) => {
         acc.push(curr[0]);
         return acc.sort();
      }, []);
   } else {
      // we then convert the object to a sorted array of arrays and then filter out
      // only the keys which will gives us the final answer
      return Object.entries(storage)
         .sort(([, a], [, b]) => a - b)
         .map((element) => element[0]);
   }
}

// handling object sorting
function checkIfAllEqual(object) {
   let ofObject = Object.entries(object);
   let bools = [];
   const base = ofObject[0][1];
   for (let [k, v] of ofObject) {
      if (v === base) bools.push(true);
      else bools.push(false);
   }
   return !bools.includes(false);
}

let watchedVideos = [
   ["hkpv", "hwnkrtxu", "uhbcy", "fqyzgj"],
   ["fwwxot", "dt", "feingsx"],
   ["vmwulmqf"],
   ["zi"],
];
let friends = [
   [2, 3],
   [3, 2],
   [0, 1],
   [1, 0],
];
let id = 0;
let level = 2;

console.log(watchedVideosByFriends(watchedVideos, friends, id, level));

// [
//    ["xk", "qvgjjsp", "sbphxzm"],
//    ["rwyvxl", "ov"],
// ][([1], [0])];
// 0;
// 1;
