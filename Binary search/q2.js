// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
function squareRoot(target) {
   let array = [];
   let count = 1;
   while (count <= target) {
      array.push(count);
      count++;
   }

   let low = 0;
   let high = array.length - 1;

   while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let guess = array[mid] ** 2;

      if (guess === target) {
         return array[mid];
      } else if (guess < target) {
         low = mid + 1;
      } else {
         high = mid - 1;
      }
   }
   return array[low - 1];
}
