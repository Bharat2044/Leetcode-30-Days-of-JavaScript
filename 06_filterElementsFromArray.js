// Question Link: https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Solution Link: https://leetcode.com/problems/filter-elements-from-array/solutions/5434736/2-javascript-easy-solution-using-for-loop-and-foreach-loop/

/*
2634. Filter Elements from Array

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
The fn function takes one or two arguments:
arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

Example 1:
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:
Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:
Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
 
Constraints:
0 <= arr.length <= 1000
-10^9 <= arr[i] <= 10^9
*/



/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// 1st Approch: Using for Loop - TC = O(n), SC = O(n)
/*
var filter = function(arr, fn) {
    let filteredArr = [];
    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            // filteredArr.push(arr[i]);
            filteredArr[x++] = arr[i];
        }
    }

    return filteredArr;
};
*/

// 2nd Approach: Using forEach Loop - TC = O(n), SC = O(n)
var filter = function(arr, fn) {
    let filteredArr = [];

    arr.forEach((val, index) => {
        if (fn(val, index)) {
            filteredArr.push(val);
        }
    });

    return filteredArr;
};
