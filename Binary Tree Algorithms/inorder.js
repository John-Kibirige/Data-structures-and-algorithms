// Binary tree order traversal problem 94

var inorderTraversal = function (root) {
   if (root === null) return [];
   if (root.right === null && root.left === null) return [root.val];

   return [
      ...inorderTraversal(root.left),
      root.val,
      ...inorderTraversal(root.right),
   ];
};
