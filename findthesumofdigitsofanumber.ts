{/*
Problem Description:
Write a function that returns the sum of digits of a given number.

Test Cases:
Input: 123, Output: 6
Input: 456, Output: 15
    */}

function sumOfDigits (num:number){
    return num.toString().split('').reduce((sum,digit)=>sum+parseInt(digit),0)
}