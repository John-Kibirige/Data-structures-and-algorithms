/* 
Binary Tree Inorder Traversal
Easy

Given the root of a binary tree, return the inorder traversal of its nodes' values.
*/

//   Definition for a binary tree node.

class TreeNode {
   constructor(val) {
      this.val = val === undefined ? 0 : val;
      this.left = null;
      this.right = null;
   }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
   function traverse(rt) {
      if (!rt[0]) return [];
      if (rt.length === 1) return rt;

      const left = rt.slice(1, 2);
      const current = rt.slice(0, 1);
      const right = rt.slice(2);

      return [...traverse(left), ...traverse(current), ...traverse(right)];
   }

   return traverse(root);
};

Input: root = [1];
Output: [1, 3, 2];

console.log(inorderTraversal(root));
