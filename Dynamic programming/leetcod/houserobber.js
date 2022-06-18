/* 
198. House Robber
Medium

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
   //    extend the size by adding a zero at index 0
   nums.splice(0, 0, 0);

   //    create a memo array with 0 and the first value as this will be the store of our operations
   const memo = [0, nums[1]];

   for (let i = 2; i < nums.length; i++) {
      // our new maximum = the maximum ofthe previous maximum and the sum of the current val and the two steps back maximum
      memo[i] = Math.max(memo[i - 1], nums[i] + memo[i - 2]);
   }

   return memo[nums.length - 1];
};

// Using the bottom up method

/*

*/
