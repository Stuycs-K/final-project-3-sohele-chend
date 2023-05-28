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
  return {
      obfuscatedCode: obfuscatedCode,
      shifts: shifts
  };
}

