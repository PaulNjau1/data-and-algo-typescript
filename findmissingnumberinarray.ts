{/*Write a function that finds the missing number in a given array of 0 to n.

Test Cases:
Input: [3, 0, 1], Output: 2
Input: [9,6,4,2,3,5,7,0,1], Output: 8*/}


function missingNumber(nums: number[]): number {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
