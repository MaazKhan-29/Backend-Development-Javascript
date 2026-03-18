//Operations with numbers
let a = 10;
let b = 3;      
console.log("Basic Arithmetic Operations:");
console.log("Addition (a + b):", a + b);    
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus (a % b):", a % b);
console.log("Exponentiation (a ** b):", a ** b+"\n");

console.log("Increment and Decrement Operations:");
let incrementVar = 5;
console.log("Initial Value:", incrementVar);
console.log("Post-Increment (incrementVar++):", incrementVar++);
console.log("After Post-Increment:", incrementVar);
incrementVar = 5; // Resetting value
console.log("Pre-Increment (++incrementVar):", ++incrementVar);
console.log("After Pre-Increment:", incrementVar+"\n"); 
let decrementVar = 5;
console.log("Initial Value:", decrementVar);
console.log("Post-Decrement (decrementVar--):", decrementVar--);
console.log("After Post-Decrement:", decrementVar);
decrementVar = 5; // Resetting value
console.log("Pre-Decrement (--decrementVar):", --decrementVar);
console.log("After Pre-Decrement:", decrementVar+"\n");

console.log("Compound Assignment Operations:");
let compVar = 10;
console.log("Initial Value:", compVar);
compVar += 5;  //it means compVar = compVar + 5
console.log("After Addition Assignment (compVar += 5):", compVar);
compVar -= 3;
console.log("After Subtraction Assignment (compVar -= 3):", compVar);
compVar *= 2;
console.log("After Multiplication Assignment (compVar *= 2):", compVar);
compVar /= 4;
console.log("After Division Assignment (compVar /= 4):", compVar);
compVar %= 3;
console.log("After Modulus Assignment (compVar %= 3):", compVar+"\n");

console.log("Comparison Operations:");
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("a === b:", a === b);
console.log("a !== b:", a !== b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b+"\n");

console.log("Logical Operations:");
let bool1 = true;
let bool2 = false;
console.log("bool1 && bool2:", bool1 && bool2);
console.log("bool1 || bool2:", bool1 || bool2);
console.log("!bool1:", !bool1);
console.log("!bool2:", !bool2+"\n");

console.log("Type Coercion in Operations:");
let num1 = 5;
let str1 = "10";
console.log("num1 + str1 (String Concatenation):", num1 + str1); //Rule 1: For + operator : If one value is a string, JavaScript converts the other value to a string
// Rule 2: For - , * , / operators : These are math operators, so JavaScript tries to convert strings to numbers.
console.log("num1 * str1 (Numeric Multiplication):", num1 * str1); 
console.log("num1 - str1 (Numeric Subtraction):", num1 - str1);
console.log("num1 / str1 (Numeric Division):", num1 / str1+"\n");

//Coercion with 3 values
let val1 = "5";
let val2 = 10;
let val3 = true;    
console.log("val1 + val2 + val3:", val1 + val2 + val3); // "5" + 10 + true => "510" + true => "510true"
console.log("val2 + val3 + val1:", val2 + val3 + val1); // 10 + true + "5" => 10 + 1 + "5" => 11 + "5" => "115"
console.log("val1 - val2 + val3:", val1 - val2 + val3); // "5" - 10 + true => 5 - 10 + 1 => -5 + 1 => -4

/*Type Coercion in JavaScript

JavaScript automatically converts data types depending on the operator.

✔️ Rule A: + (addition)

If any one operand is a string, JS converts the others to string → string concatenation

Example:
5 + "10" → "510"

✔️ Rule B: - , * , /

These are purely numeric operators

JS converts values to numbers

Example:
"10" - 5 → 10 - 5 = 5

✔️ Rule C: Boolean Conversion

true → 1

false → 0


Operator Precedence (only important parts)

() evaluated first

* and / next

+ and - after that

+ and - have same precedence
→ Evaluated left to right (left associativity)*/

console.log("Operator Precedence:");
let precedenceResult = 5 + 3 * 2 - (8 / 4);
console.log("5 + 3 * 2 - (8 / 4) =", precedenceResult);
// Explanation: Multiplication and Division have higher precedence than Addition and Subtraction. Parentheses have the highest precedence.

// Conclusion: Understanding these operations is fundamental to effectively using JavaScript for various programming tasks.