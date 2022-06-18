function binSearch(arr, item, min = 0, max = arr.length) {
   let mid = Math.floor((max + min) / 2);
   let guess = arr[mid];
   if (guess === item) {
      return mid;
   } else if (guess < item) {
      return binSearch(arr, item, mid + 1, max);
   } else if (guess > item) {
      return binSearch(arr, item, min, mid - 1);
   } else {
      return "cannot be found";
   }
}
// And this works well as search
