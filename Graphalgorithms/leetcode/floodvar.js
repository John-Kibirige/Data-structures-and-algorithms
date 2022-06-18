// this is the recursive variation of the flood fill problem and it is quite interesting
var floodFill = (image, sr, sc, newColor) => {
   const original = image[sr][sc];
   const visited = new Set();

   return exploreFill(image, sr, sc, newColor, visited, original);
};

function exploreFill(image, x, y, newColor, visited, original) {
   // all base cases
   const boundsForX = x >= 0 && x < image.length;
   const boundsForY = y >= 0 && y < image[0].length;

   if (!boundsForY || !boundsForX) return image;
   if (image[x][y] !== original) return image;

   let pos = x + "," + y;
   if (visited.has(pos)) return image;
   visited.add(pos);

   // all recursive cases
   if (image[x][y] === original) image[x][y] = newColor;

   exploreFill(image, x - 1, y, newColor, visited, original);
   exploreFill(image, x + 1, y, newColor, visited, original);
   exploreFill(image, x, y - 1, newColor, visited, original);
   exploreFill(image, x, y + 1, newColor, visited, original);

   return image;
}

(image = [
   [0, 0, 0],
   [0, 0, 0],
]),
   (sr = 0),
   (sc = 0),
   (newColor = 2);

console.log(floodFill(image, sr, sc, newColor));
