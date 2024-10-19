{/*
 Problem Description:
Write a function that removes duplicate elements from an array.

Test Cases:
Input: [1, 2, 2, 3, 4, 4, 5], Output: [1, 2, 3, 4, 5]
Input: [10, 10, 20, 20], Output: [10, 20]   
    */}

    function removeDuplicates (arr:number[]):number[]{
        return [...new Set(arr)];
    }