{/*Problem Description:
Write a function that checks whether a given number is prime.

Test Cases:
Input: 7, Output: true
Input: 10, Output: false */}

function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
