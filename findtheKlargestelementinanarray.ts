{/*
Write a function that finds the Kth largest element in an array.

Test Cases:
Input: [3, 2, 1, 5, 6, 4], 2, Output: 5
Input: [3, 2, 3, 1, 2, 4, 5, 5, 6], 4, Output: 4
    
    */}

    function findKthLargest(nums: number[], k: number): number {
        return nums.sort((a, b) => b - a)[k - 1];
    }
    