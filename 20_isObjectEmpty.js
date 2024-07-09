// Question Link: https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Solution Link: https://leetcode.com/problems/is-object-empty/solutions/5446306/2-easy-one-line-javascript-solution-using-loops-and-predefined-function/

/*
2727. Is Object Empty

Given an object or an array, return if it is empty.
An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

Example 1:
Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.

Example 2:
Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.

Example 3:
Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
 
Constraints:
obj is a valid JSON object or array
2 <= JSON.stringify(obj).length <= 10^5 

Can you solve it in O(1) time?
*/



/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

// 1st Approach
var isEmpty = function(obj) {
    for (const _ in obj) {
        return false;
    }

    return true;
};

/*
// 2nd Approach
var isEmpty = function(obj) {
    let result = Object.keys(obj).length === 0;

    return result;
};
*/
