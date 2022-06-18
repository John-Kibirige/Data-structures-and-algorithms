// https://www.hackerrank.com/challenges/magic-square-forming/problem

function formingMagicSquare(s) {
   let min = Infinity;
   for (let table of getMagicTables()) {
      let tot = 0;
      for (let i = 0; i < 3; i++) {
         // we compare s[i] with table[i]
         let v1 = Math.abs(s[i][0] - table[i][0]);
         let v2 = Math.abs(s[i][1] - table[i][1]);
         let v3 = Math.abs(s[i][2] - table[i][2]);
         tot += v1 + v2 + v3;
      }
      console.log(table);
      console.log(tot);
      if (tot < min) min = tot;
   }

   return min;
}

// getting all magic tables
function getMagicTables() {
   const magicTables = [];
   let count = 0;
   let baseTable = [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
   ];
   while (count < 4) {
      magicTables.push(baseTable);

      magicTables.push(reverseArr(baseTable));

      baseTable = rotate(baseTable);
      count++;
   }
   return magicTables;
}

function rotate(arr) {
   const r1 = [],
      r2 = [],
      r3 = [];
   for (let row of arr) {
      r1.unshift(row[0]);
      r2.unshift(row[1]);
      r3.unshift(row[2]);
   }
   return [r1, r2, r3];
}
const reverseArr = (arr) => [arr[2], arr[1], arr[0]];

const arr = [
   [5, 3, 4],
   [1, 5, 8],
   [6, 4, 2],
];

console.log(formingMagicSquare(arr));

/* 
The main thing was about getting all the 8 possible magic tables and comparing our current array to it then after 
we get the min after a comparison between each one of the standard equations

*/
