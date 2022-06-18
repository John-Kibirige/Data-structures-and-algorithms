/**
 *
 * @param {Array} array
 * @param {number} target
 * @returns
 */
function search(array, target) {
   let min = 0,
      max = array.length - 1;
   while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      let guess = array[mid];
      if (guess === target) {
         return mid;
      } else if (guess < target) {
         min = mid + 1;
      } else {
         max = mid - 1;
      }
   }
   return min;
}

let test = [90, 2, 1];
console.log(search(test, 3));
console.log(search(test, 100));
