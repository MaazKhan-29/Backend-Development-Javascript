//Conversions : Explicit and Implicit

let num = 42;
let str = "3.14";
let bool = true;
let invalidNumStr = "Hello";
let nul = null;
let undef; // undefined

// Explicit Conversions:

// 1. Number to String
let numToStr = String(num);
console.log("Number to String:", numToStr, "Type:", typeof numToStr);

// 2. String to Number
let strToNum = Number(str);
console.log("String to Number:", strToNum, "Type:", typeof strToNum);

// null to Number
let nullToNum = Number(nul);
console.log("Null to Number:", nullToNum, "Type:", typeof nullToNum);

// undefined to Number
let undefToNum = Number(undef);
console.log("Undefined to Number:", undefToNum, "Type:", typeof undefToNum);

// 3. Boolean to Number
let boolToNum = Number(bool);
console.log("Boolean to Number:", boolToNum, "Type:", typeof boolToNum);

// 4. String to Boolean
let strToBool = Boolean(str);
console.log("String to Boolean:", strToBool, "Type:", typeof strToBool);

// Number to Boolean
let numToBool = Boolean(num);
console.log("Number to Boolean:", numToBool, "Type:", typeof numToBool);

// 5. Invalid String to Number
let invalidStrToNum = Number(invalidNumStr);
console.log("Invalid String to Number:", invalidStrToNum, "Type:", typeof invalidStrToNum);

// 6. Using parseInt and parseFloat
let intStr = "100px";
let floatStr = "3.14abc";   
let parsedInt = parseInt(intStr);
let parsedFloat = parseFloat(floatStr);
console.log("Parsed Integer from '100px':", parsedInt, "Type:", typeof parsedInt);
console.log("Parsed Float from '3.14abc':", parsedFloat, "Type:", typeof parsedFloat);



// 7. Implicit Conversions

let implicitNumToStr = num + "";
console.log("Implicit Number to String:", implicitNumToStr, "Type:", typeof implicitNumToStr);
let implicitStrToNum = str * 1;
console.log("Implicit String to Number:", implicitStrToNum, "Type:", typeof implicitStrToNum);
let implicitBoolToNum = bool + 0;
console.log("Implicit Boolean to Number:", implicitBoolToNum, "Type:", typeof implicitBoolToNum);
let implicitStrToBool = "" || "default";
console.log("Implicit String to Boolean:", implicitStrToBool, "Type:", typeof implicitStrToBool);

// Note: Be cautious with implicit conversions as they can lead to unexpected results.

// Conclusion: Understanding type conversions in JavaScript is crucial for effective coding and avoiding bugs.


