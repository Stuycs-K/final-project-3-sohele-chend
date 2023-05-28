/**
 * This function takes a string of code as input and "obfuscates" it by adding 1 to the Unicode value of each character.
 * Unicode is a standard that assigns a unique number to every character used in written languages, allowing computers to use
 * these numbers to represent all of the characters. In JavaScript, you can get the Unicode value of a character using the 
 * `charCodeAt` method and create a character from a Unicode value using the `fromCharCode` method.
 * 
 * @param {string} code - The code to obfuscate
 * @returns {string} - The obfuscated code
 */
function obfuscate(code) {
    var obfuscatedCode = '';
    for (var i = 0; i < code.length; i++) {
        var charCode = code.charCodeAt(i);
        var obfuscatedCharCode = charCode + 1; // Add 1 to each character's Unicode value
        obfuscatedCode += String.fromCharCode(obfuscatedCharCode);
    }
    return obfuscatedCode;
}

/**
 * This function does the opposite of the `obfuscate` function, taking obfuscated code as input and "deobfuscating" it by 
 * subtracting 1 from the Unicode value of each character.
 * 
 * @param {string} obfuscatedCode - The obfuscated code to deobfuscate
 * @returns {string} - The deobfuscated code
 */
function deobfuscate(obfuscatedCode) {
    var code = '';
    for (var i = 0; i < obfuscatedCode.length; i++) {
        var obfuscatedCharCode = obfuscatedCode.charCodeAt(i);
        var charCode = obfuscatedCharCode - 1; // Subtract 1 from each character's Unicode value
        code += String.fromCharCode(charCode);
    }
    return code;
}

// Example usage:

// Here is some original JavaScript code that we want to obfuscate.
var originalCode = 'console.log("Hello, World!");';
console.log('Original code: ' + originalCode);

// We obfuscate the code and print out the obfuscated version. This should be a string of characters that doesn't look like the original code.
var obfuscatedCode = obfuscate(originalCode);
console.log('Obfuscated code: ' + obfuscatedCode);

// Now we deobfuscate the code and print it out. This should give us back the original code.
var deobfuscatedCode = deobfuscate(obfuscatedCode);
console.log('Deobfuscated code: ' + deobfuscatedCode);
