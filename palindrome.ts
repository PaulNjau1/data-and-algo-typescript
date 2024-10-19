{/*
    Problem Description:
Write a function that checks if a string is a palindrome (reads the same forward and backward).

Test Cases:
Input: "racecar", Output: true
Input: "hello", Output: false
    
    */}

    function isPalindrome(str: string): boolean {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    }
    

 