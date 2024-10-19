{/*
    Problem Description:
Write a function that merges two sorted arrays into one sorted array.

Test Cases:
Input: [1, 3, 5], [2, 4, 6], Output: [1, 2, 3, 4, 5, 6]
Input: [5, 10], [3, 6, 8], Output: [3, 5, 6, 8, 10]
    */}

    function mergeSortedArrays(arr1:number[],arr2:number[]):number[]{
        return [...arr1,...arr2].sort((a,b)=>a-b)
    }