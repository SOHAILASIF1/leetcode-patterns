// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
 

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
//brute force
// Brute Force Approach

// let nums = [4,3,2,7,8,2,3,1];

// let missing = [];

// for (let i = 1; i <= nums.length; i++) {
//     let found = false;

//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] === i) {
//             found = true;
//             break;
//         }
//     }

//     if (!found) {
//         missing.push(i);
//     }
// }

// console.log(missing);
// console.log(nums);

//


// using hashmap
let arr=[4,3,2,7,8,2,3,1];

let set=new Set(arr)
let map=new Map()
let index=0

   for (const val of set) {
    map.set(val,index)

    index++
    
   }

    
    

console.log(map);





