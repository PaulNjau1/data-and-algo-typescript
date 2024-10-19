{/*
Problem Description:
Write a function that finds the union of two arrays (all unique elements).

Test Cases:
Input: [1, 2, 3], [2, 3, 4], Output: [1, 2, 3, 4]
Input: [5, 10], [10, 15], Output: [5, 10, 15] 
    */}

function unionofArrays (arr1:number[],arr2:number[]):number[]{
    return[...new Set([...arr1,...arr2])]
}