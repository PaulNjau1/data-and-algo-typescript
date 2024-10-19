{/*
Write a function that checks if a number is a power of two.

Test Cases:
Input: 16, Output: true
Input: 18, Output: false 
    */}

    function isPowerOfTwo(n: number): boolean {
        return (n > 0) && (n & (n - 1)) === 0;
    }

    