function getMin(array) {
   let lowest = Infinity;
   for (let element of array) {
      if (element < lowest) {
         lowest = element;
      }
   }
   return lowest;
}

function sortArray(array) {
   const sortedArray = [];
   while (array.length !== 0) {
      let min = getMin(array);
      sortedArray.push(min);
      array.splice(array.indexOf(min), 1);
   }
   return sortedArray;
}
