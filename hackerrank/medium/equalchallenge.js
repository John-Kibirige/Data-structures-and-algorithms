// https://www.hackerrank.com/challenges/equal/problem

function equal(arr) {
   const queue = [[arr, 0]];

   while (queue.length) {
      const [arrayReceived, distance] = queue.shift();
      if (arrayReceived.every((el) => el === arrayReceived[0])) {
         return distance;
      }

      //  get all the possible outcomes and push them to the queue with updated distance of one

      for (let j of [1, 2, 5]) {
         const arraysPerValue = generateAllPossible(arrayReceived, j);
         for (let arrayVal of arraysPerValue) {
            queue.push([arrayVal, distance + 1]);
         }
      }
   }
}

function generateAllPossible(arr, num) {
   const finalArr = [];

   for (let i = 0; i < arr.length; i++) {
      let addNumReturn = addNum(arr, i, num);
      finalArr.push(addNumReturn);
   }

   return finalArr;
}

function addNum(arr, ind, v) {
   const array = [...arr];
   let storedVal = arr[ind];
   for (let i = 0; i < arr.length; i++) {
      array[i] += v;
   }
   array[ind] = storedVal;
   return array;
}

let arr = [53, 361, 188, 665];
console.log(equal(arr));
