{/*
    Problem Description:
Write a function that checks if an array contains a specific value.

Test Cases:
Input: [1, 2, 3, 4, 5], 3, Output: true
Input: [1, 2, 3, 4, 5], 6, Output: false
    */}

function arrayContains(arr: number[], value: number): boolean {
        return arr.includes(value);
    }
    