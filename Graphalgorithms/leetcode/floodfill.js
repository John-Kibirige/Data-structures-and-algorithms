/*
An image is represented by an m x n integer grid image where image[i][j] represents 
the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill 
on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally
 to the starting pixel of the same color as the starting pixel, plus any pixels connected
  4-directionally to those pixels (also with the same color), and so on. Replace the color
   of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.
*/

var floodFill = (image, sr, sc, newColor) => {
   const queue = [[sr, sc]];

   const visited = new Set();
   const originalVar = image[sr][sc];

   while (queue.length) {
      const [row, col] = queue.shift();
      visited.add(row + "," + col);
      const currentPos = image[row][col];
      if (currentPos === originalVar) {
         image[row][col] = newColor;
      }
      //   add left value
      pushAddress(row - 1, col);
      //   add right value
      pushAddress(row + 1, col);
      //   add top value
      pushAddress(row, col - 1);
      //   add bottom value
      pushAddress(row, col + 1);
   }

   function pushAddress(a, b) {
      if (a >= 0 && a < image.length && b >= 0 && b < image[0].length) {
         if (!visited.has(a + "," + b) && image[a][b] === originalVar) {
            queue.push([a, b]);
         }
      }
   }

   return image;
};

(image = [
   [0, 0, 0],
   [0, 0, 0],
]),
   (sr = 0),
   (sc = 0),
   (newColor = 2);
console.log(floodFill(image, sr, sc, newColor));
