// Question Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript 
// Solution Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/solutions/5424138/2-javascript-easy-solution-using-for-loop-and-foreach-loop/

/*
2635. Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:
Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.

Constraints:
0 <= arr.length <= 1000
-10^9 <= arr[i] <= 10^9
fn returns a number
*/



/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

 // 1st Approch: Using for Loop - TC = O(n), SC = O(n)
var map = function(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }

    return result;
};


// 2nd Approach: Using forEach Loop - TC = O(n), SC = O(n)
/*
var map = function(arr, fn) {
    let result = [];

    arr.forEach((val, index) => {
        result.push(fn(val, index));
    });

    return result;
};
*/
