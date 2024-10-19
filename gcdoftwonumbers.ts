{/*
Write a function that finds the greatest common divisor (GCD) of two numbers.

Test Cases:
Input: 12, 15, Output: 3
Input: 14, 28, Output: 14
    */}
    
    
    function gcd(a:number,b:number):number{
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    

    function lcm(a: number, b: number): number {
        return (a * b) / gcd(a, b);
    }
    








   