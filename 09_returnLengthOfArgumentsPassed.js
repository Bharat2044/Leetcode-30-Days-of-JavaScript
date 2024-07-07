// Question Link: https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript
// Solution Link: https://leetcode.com/problems/return-length-of-arguments-passed/solutions/5434940/3-javascript-easy-solution-using-one-line-for-loop-and-foreach-loop/

/*
2703. Return Length of Arguments Passed

Write a function argumentsLength that returns the count of arguments passed to it.
 
Example 1:
Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1
One value was passed to the function so it should return 1.

Example 2:
Input: args = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3
Three values were passed to the function so it should return 3.

Constraints:
args is a valid JSON array
0 <= args.length <= 100
*/


/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

/*
// Approach 1: Using for Loop - TC = O(n), SC = O(1)
var argumentsLength = function(...args) {
    let count = 0;

    for (let i = 0; i < args.length; i++) {
        count++;
    }

    return count;
};
*/

// Approach 2: Using forEach Loop - TC = O(n), SC = O(1)
var argumentsLength = function(...args) {
    let count = 0;

    args.forEach((num) => {
        count++;
    });
    
    return count;
};


/*
// Approach 3: Using Predefined `length` Method - TC = O(n), SC = O(1)
var argumentsLength = function(...args) {
    return args.length;
};
*/

/**
 * argumentsLength(1, 2, 3); // 3
 */
