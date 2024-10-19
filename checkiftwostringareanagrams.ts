{
      /*
    Write a function that checks if two strings are anagrams (contain the same characters in a different order).
    Test Cases:
    Input: "listen", "silent", Output: true
    Input: "hello", "world", Output: false 
     */
}

function areAnagrams(str1:string,str2:string):boolean{
    const sortedString1 = str1.split('').sort().join('');
    const sortedString2 = str2.split('').sort().join('');
    return sortedString1 === sortedString2


}

