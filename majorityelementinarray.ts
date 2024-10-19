{/*
Problem Description:
Write a function that finds the majority element (appears more than half the time) in an array.

Test Cases:
Input: [3, 2, 3], Output: 3
Input: [2, 2, 1, 1, 1, 2, 2], Output: 2
    
    */}

    function majorityElement(nums: number[]): number {
        let count = 0;
        let candidate = 0;
    
        for (const num of nums) {
            if (count === 0) {
                candidate = num;
            }
            count += (num === candidate) ? 1 : -1;
        }
    
        return candidate;
    }
    