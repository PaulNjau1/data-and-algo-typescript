{/*Problem Description:
Write a function that returns the nth Fibonacci number.

Test Cases:
Input: 5, Output: 5
Input: 10, Output: 55*/}



function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
