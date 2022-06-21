// https://www.hackerrank.com/challenges/beautiful-triplets/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function beautifulTriplets(d, arr) {
   let arrLength = arr.length;

   const visited = new Set();

   for (let i = 0; i < arrLength; i++) {
      let start = arr[i];
      let temp = [i];

      for (let j = 1; j <= 2; j++) {
         start += d;
         let ind = arr.indexOf(start);
         if (ind >= 0) temp.push(ind);
      }

      if (temp.length === 3) {
         temp = temp.toString();
         visited.add(temp);
      }
   }

   return visited.size;
}

/* 
  loop through the values using the first for loop 
  use a for loop to get the next 2 values starting with a value at index i
  do this while capturing and pushing the indexes into temp array 
  after store this in a set and get its final size 
  this is the desired or required answer 
*/
