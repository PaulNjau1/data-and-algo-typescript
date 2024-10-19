{/*Problem Description:
Write a function that returns the sum of all elements in an array.

Test Cases:
Input: [1, 2, 3, 4, 5], Output: 15
Input: [5, 10, 15], Output: 30 */}

function sumArray1(arr: number[]): number {
    let sum = 0; // Initialize sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add each element to sum
    }
    return sum; // Return the total sum
}

function sumArray2(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num, 0);
}





