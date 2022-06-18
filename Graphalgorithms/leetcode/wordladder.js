/*
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words 
beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words 
in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
   const graph = generateList(beginWord, wordList);
   const visited = new Set([beginWord]);
   const queue = [[beginWord, 1]];

   if (
      endWord.length === 1 &&
      beginWord.length === 1 &&
      wordList.includes(endWord)
   )
      return 2;

   while (queue.length) {
      const [node, distance] = queue.shift();
      if (node === endWord) return distance;

      for (let neighbor of graph[node]) {
         if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push([neighbor, distance + 1]);
         }
      }
   }

   return 0;
};

// function for generating our adjacency list
function generateList(beginWord, wordList) {
   const graph = {};
   const queue = [beginWord];

   while (queue.length) {
      let current = queue.shift();
      if (!(current in graph)) {
         graph[current] = [];
         for (let word of wordList) {
            if (oneCharDiffers(word, current) || word === current) {
               graph[current].push(word);
               queue.push(word);
            }
         }
      }
   }
   return graph;
}

// Helper functions
function oneCharDiffers(str1, str2) {
   let count = 0;
   for (let i = 0; i < str1.length; i++) {
      if (!str2.includes(str1[i])) {
         count++;
      }
   }
   return count === 1;
}

let beginWord = "a";
let endWord = "c";
let wordList = ["a", "b", "c"];

console.log(ladderLength(beginWord, endWord, wordList));

// ("leet");
// "code"[("lest", "leet", "lose", "code", "lode", "robe", "lost")];
// let beginWord = "lost";
// let endWord = "miss";
// let wordList = ["most", "mist", "miss", "lost", "fist", "fish"];
// console.log(ladderLength(beginWord, endWord, wordList));
