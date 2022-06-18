// https://www.hackerrank.com/challenges/candies/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function candies(n, arr) {
   const costR = new Array(n).fill(1);
   const costL = new Array(n).fill(1);
   const len = arr.length;

   let currR, prevR, currL, prevL;
   let total = 0;

   for (let i = 1; i < arr.length; i++) {
      currR = arr[i];
      prevR = arr[i - 1];
      if (currR > prevR) costR[i] = costR[i - 1] + 1;
      currL = arr[len - 1 - i];
      prevL = arr[len - i];
      if (currL > prevL) costL[len - 1 - i] = costL[len - i] + 1;
   }

   costR.forEach((el, ind) => {
      if (el > costL[ind]) {
         total += el;
      } else {
         total += costL[ind];
      }
   });

   return total;
}

let arr = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1];
arr = [12, 4, 3, 11, 34, 34, 1, 67];
console.log(candies(8, arr));

/*
 the logic is to look on the left while going to the right and 
 to look on the right while going to the left ;

 come up with two different arrays and compare their values while 
 considering the highest of the two at a given index;


*/
