/*
There are n people, each person has a unique id between 0 and n-1. Given the arrays watchedVideos and friends, where watchedVideos[i] and friends[i] contain the list of watched videos and the list of friends respectively for the person with id = i.

Level 1 of videos are all watched videos by your friends, level 2 of videos are all watched videos by the friends of your friends and so on. In general, the level k of videos are all watched videos by people with the shortest path exactly equal to k with you. Given your id and the level of videos, return the list of videos ordered by their frequencies (increasing). For videos with the same frequency order them alphabetically from least to greatest. 

*/

/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
   const queue = [[id]];
   const visited = new Set();
   let count = 1;

   while (queue.length > 0) {
      const currArr = queue.shift(); //we have to loop through in order to get the values
      for (let node of currArr) {
         if (!visited.has(node)) {
            visited.add(node);
         }
         // we filter unvisited friends of each node;
         const fnds = friends[node].filter((elem) => !visited.has(elem));
         queue.push(fnds);
      }

      if (count === level) {
         return queue.flat().reduce((acc, curr) => {
            acc.push(watchedVideos[curr]);
            return acc.flat();
         }, []);
      }
      count++;
   }
};

const getFriendsAtLevel = (id, level, friends, watchedVideos) => {};

let friends = [
   [1, 2],
   [0, 3],
   [0, 3],
   [1, 2],
];

console.log(getFriendsAtLevel(0, 1, friends));
