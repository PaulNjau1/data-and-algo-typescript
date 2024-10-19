{/*
Problem Description:
Write a function that rotates an array to the right by k steps.
Test Cases:
Input: [1, 2, 3, 4, 5], 2, Output: [4, 5, 1, 2, 3]
Input: [7, 8, 9], 1, Output: [9, 7, 8]
    */}

function rotateArray(arr:number[],k:number):number[]{
    k = k % arr.length;
    return [...arr.slice(-k),...arr.slice(0,-k)]
}
