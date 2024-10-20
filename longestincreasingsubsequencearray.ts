{/*
Problem Description:
Write a function that finds the longest increasing subsequence in an array.

Test Cases:
Input: [10, 9, 2, 5, 3, 7, 101, 18], Output: 4 (subsequence: [2, 3, 7, 101])
Input: [0, 1, 0, 3, 2, 3], Output: 4 (subsequence: [0, 1, 2, 3])*/}

function lengthOfLIS(nums: number[]): number {
    const dp = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}
