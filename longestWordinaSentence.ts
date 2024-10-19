{/*
Problem Description:
Write a function that returns the longest word in a given sentence.

Test Cases:
Input: "I love programming", Output: "programming"
Input: "TypeScript is awesome", Output: "TypeScript"  
    */}

function longestWord(sentence:string):string{
    const words = sentence.split('');
    return words.reduce((longest,word)=>word.length>longest.length?word:longest)
}