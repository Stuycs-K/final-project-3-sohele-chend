/**
 * This function takes a string of code as input and "obfuscates" it by adding a random number between 1 and 10 to the Unicode value of each character.
 * @param {string} code - The code to obfuscate
 * @returns {object} - An object containing the obfuscated code and the shift values used for obfuscation
 */
function complexObfuscate(code) {
  var obfuscatedCode = '';
  var shifts = []; // This will store the shift value for each character
  for (var i = 0; i < code.length; i++) {
      var shift = Math.floor(Math.random() * 10) + 1; // Generate a random shift between 1 and 10
      shifts.push(shift);
      var charCode = code.charCodeAt(i);
      var obfuscatedCharCode = charCode + shift;
      obfuscatedCode += String.fromCharCode(obfuscatedCharCode);
  }
  // return an object containing the obfuscated code and the shift values used for obfuscation
  return {
      obfuscatedCode: obfuscatedCode,
      shifts: shifts
  };
}

/**
* This function does the opposite of the `complexObfuscate` function, taking obfuscated code and shift values as input and "deobfuscating" it.
* @param {string} obfuscatedCode - The obfuscated code to deobfuscate
* @param {Array<number>} shifts - The shift values used for obfuscation
* @returns {string} - The deobfuscated code
*/
function complexDeobfuscate(obfuscatedCode, shifts) {
  var code = '';
  // loop through each character in the obfuscated code and deobfuscate it using the shift value
  for (var i = 0; i < obfuscatedCode.length; i++) {
      var obfuscatedCharCode = obfuscatedCode.charCodeAt(i);
      var charCode = obfuscatedCharCode - shifts[i]; // Subtract the shift value from each character's Unicode value
      code += String.fromCharCode(charCode);
  }
  return code;
}

// Example usage:

var originalCode = 'console.log("Hello, World!");';
console.log('Original code: ' + originalCode);

// We obfuscate the code and print out the obfuscated version.
var obfuscationResult = complexObfuscate(originalCode);
console.log('Obfuscated code: ' + obfuscationResult.obfuscatedCode);

// Now we deobfuscate the code and print it out.
var deobfuscatedCode = complexDeobfuscate(obfuscationResult.obfuscatedCode, obfuscationResult.shifts);
console.log('Deobfuscated code: ' + deobfuscatedCode);
