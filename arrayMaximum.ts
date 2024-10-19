{/*
    Write a function that finds the maximum value in an array.

Test Cases:
Input: [1, 2, 3, 4, 5], Output: 5
Input: [5, 10, 15], Output: 15
    */}

    function findMax(arr: number[]): number {
        return Math.max(...arr);
    }

{/*Write a function that finds the minimum value in an array.

Test Cases:
Input: [1, 2, 3, 4, 5], Output: 1
Input: [5, 10, 15], Output: 5*/}

function findMin(arr: number[]): number {
    return Math.min(...arr);
}
