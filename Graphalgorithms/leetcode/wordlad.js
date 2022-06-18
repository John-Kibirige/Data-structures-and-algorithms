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

function generateList(beginword, wordList) {
   wordList.push(beginword);
   const graph = {};
   for (let word of wordList) {
      for (let i of wordList) {
         if (!(word in graph)) graph[word] = [];
         if (compare(word, i) && compare(i, word)) {
            if (!graph[word].includes(i)) graph[word].push(i);
         }
      }
   }
   return graph;
}

// the task is to make sure that two strings have exactly two strings in common
// the strategy is to count all the similar characters and the different ones

function compare(wordOne, wordTwo) {
   let simCount = 0;
   let difCount = 0;

   // we make sure the two are of similar length;
   if (wordOne.length === wordTwo.length) {
      for (let char of wordTwo) {
         if (wordOne.includes(char)) simCount++;
         else difCount++;
      }
      return simCount === wordOne.length - 1 && difCount === 1;
   }
   return false;
}

// (beginWord = "hit"),
//    (endWord = "cog"),
//    (wordList = ["hot", "dot", "dog", "lot", "log", "cog"]);

beginWord = "lost";
endWord = "miss";
wordList = ["most", "mist", "miss", "lost", "fist", "fish"];

// beginWord = "leet";
// endWord = "code";
// wordList = ["lest", "leet", "lose", "code", "lode", "robe", "lost"];

// console.log(generateList(beginWord, wordList));

console.log(ladderLength(beginWord, endWord, wordList));
