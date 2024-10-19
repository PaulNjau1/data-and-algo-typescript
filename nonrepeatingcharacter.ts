{/*Problem Description:
Write a function that returns the first non-repeating character in a string.

Test Cases:
Input: "aabbccddeff", Output: "e"
Input: "abcabcdd", Output: null*/}

function firstNonRepeatingChar(str: string): string | null {
    const charCount: { [key: string]: number } = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCount[char] === 1) return char;
    }

    return null;
}

function firstnonrepeatingchar (str:string):string|null{
    const charcount:{[key:string]:number} = {}
    for (const char of str){
        charcount[char]=(charcount[char]||0) +1
    }

    for (const char of str){
        if(charcount[char]===1) return char;
    }

    return null
}
