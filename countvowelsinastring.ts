{/*
Problem Description:
Write a function that counts the number of vowels in a given string.

Test Cases:
Input: "hello", Output: 2
Input: "TypeScript", Output: 2  
    */}


function countVowels(str: string): number {
        return str.match(/[aeiou]/gi)?.length || 0;
    }



