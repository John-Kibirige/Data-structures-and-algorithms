function search(array, item) {
   let min = 0,
      max = array.length;
   while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      let guess = array[mid];
      if (guess === item) {
         return mid;
      } else if (guess < item) {
         min = mid + 1;
      } else if (guess > item) {
         max = mid - 1;
      } else {
         return `Sorry the number ${item} does not exist in the array`;
      }
   }
}
