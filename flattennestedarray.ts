{/*
 Flatten a Nested Array
Problem Description:
Write a function that flattens a nested array.

Test Cases:
Input: [[1, 2], [3, 4], [5, [6, 7]]], Output: [1, 2, 3, 4, 5, 6, 7]
Input: [1, [2, [3, [4]]]], Output: [1, 2, 3, 4]

*/}

function flattenArray(arr: any[]): any[] {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}


