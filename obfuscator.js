function obfuscate(code) {
    var obfuscatedCode = '';
    for (var i = 0; i < code.length; i++) {
      var charCode = code.charCodeAt(i);
      var obfuscatedCharCode = charCode + 1; // Add 1 to each character's Unicode value
      obfuscatedCode += String.fromCharCode(obfuscatedCharCode);
    }
    return obfuscatedCode;
  }
  
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
  var originalCode = 'console.log("Hello, World!");';
  var obfuscatedCode = obfuscate(originalCode);
  console.log('Obfuscated code: ' + obfuscatedCode);
  var deobfuscatedCode = deobfuscate(obfuscatedCode);
  console.log('Deobfuscated code: ' + deobfuscatedCode);
  