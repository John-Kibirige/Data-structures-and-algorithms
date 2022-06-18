// https://www.hackerrank.com/challenges/encryption/problem
/**
 *
 * @param {String} s
 */
function encryption(s) {
   // split and join to remove the spaces
   s = s.split(" ").join("");
   let length = s.length;
   //  get the columns
   let col = Math.ceil(Math.sqrt(length));
   //  create the result array for the answers initialize with empty strings
   let result = new Array(col).fill("");

   //  loop through the string with intentions of slicing the string and storing the individual characters int
   // their places
   for (let i = 0; i < length; i += col) {
      let subString = s.slice(i, i + col);
      result = result.map((el, ind) => {
         return subString[ind] ? el + subString[ind] : el;
      });
   }
   return result.join(" ");
}

//  for this problem, most of the things rotate around the colum
