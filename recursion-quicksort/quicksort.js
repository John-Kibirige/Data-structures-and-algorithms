function quicksort(arr) {
   if (arr.length < 2) {
      return arr; // this is our base sort for an empty array and an array with only one element
   } else {
      let less = [],
         greater = [],
         pivot = arr[0];

      for (let i = 1; i < arr.length; i++) {
         arr[i] <= pivot ? less.push(arr[i]) : greater.push(arr[i]);
      }
      return quicksort(less).concat([pivot].concat(quicksort(greater)));
   }
}

// Note: you must always start with index 1 otherwise you will enter into an infinite loop 