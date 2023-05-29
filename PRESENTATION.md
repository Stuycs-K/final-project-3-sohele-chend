# JavaScript Obfuscation and Deobfuscation: A Comprehensive Guide

## Introduction to JavaScript and Obfuscation

JavaScript is a high-level, interpreted scripting language primarily used to create dynamic and interactive elements on web pages. From enhancing user interfaces with animations to handling server requests in the background via AJAX, JavaScript is an integral part of the modern web.

(Nota bene: Javascript is not in any way related to Java. The name was simply chosen to capitalize on the popularity of Java at the time. Though the two languages share some similarities in syntax, they are fundamentally different.)

Obfuscation, on the other hand, is the practice of making something hard to understand or interpret. In the context of JavaScript, obfuscation involves transforming the code into a version that is functionally equivalent but much harder to read and understand.

Example of Obfuscation:

```javascript
// Before Obfuscation:
function greet(name) {
  let greeting = "Hello, " + name + "!";
  console.log(greeting);
}

greet("John");

// After Obfuscation:

// the string array that the obfuscated code will use
var _0x5eb2 = ["\x48\x65\x6c\x6c\x6f\x2c\x20", "\x21", "\x6c\x6f\x67"];
(function (_0x2e8f05, _0x5eb293) {
  var _0x4a2acc = function (_0x4f5c22) {
    while (--_0x4f5c22) {
      _0x2e8f05["\x70\x75\x73\x68"](_0x2e8f05["\x73\x68\x69\x66\x74"]());
    }
  };
  _0x4a2acc(++_0x5eb293);
})(_0x5eb2, 0x1b3);
var _0x4a2a = function (_0x2e8f05, _0x5eb293) {
  _0x2e8f05 = _0x2e8f05 - 0x0;
  var _0x4a2acc = _0x5eb2[_0x2e8f05];
  return _0x4a2acc;
};
function _0x4f5c22(_0x4a2a2c) {
  var _0x2e8f05 = _0x4a2a("\x30") + _0x4a2a2c + _0x4a2a("\x31");
  console[_0x4a2a("\x32")](_0x2e8f05);
}

// the actual function call
_0x4f5c22("\x4a\x6f\x68\x6e");
```

## Understanding Obfuscation Techniques

JavaScript obfuscation techniques vary in complexity and effectiveness. Let's explore some of the commonly used techniques:

### 1. Variable and Function Renaming

One of the primary techniques in JavaScript obfuscation is renaming variables and functions to meaningless labels. This makes the code harder to understand, as the original purpose of each identifier is lost. While it significantly decreases readability, it's relatively easy to reverse with careful analysis.

#### Example

```javascript
// Before obfuscation
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// After obfuscation
function _0x2e87(_0x5a22d3) {
  if (_0x5a22d3 === 0) {
    return 1;
  } else {
    return _0x5a22d3 * _0x2e87(_0x5a22d3 - 1);
  }
}
```

### 2. String Encryption

String encryption involves converting string literals in the code into an encrypted or encoded format. This adds an extra layer of complexity, as the actual string values are not immediately visible in the obfuscated code. The encrypted strings are decrypted at runtime, which makes it more difficult for an attacker to extract sensitive information.

```javascript
// Before obfuscation
function sayHello() {
  console.log("Hello, world!");
}

// After obfuscation
function _0x2ee7() {
  // a lot of obfuscated code utilize an array to store the strings in the code
  var _0x4b81b6 = ["\x48\x65\x6c\x6c\x6f\x2c\x20\x77\x6f\x72\x6c\x64\x21"];
  console.log(_0x4b81b6[0]);
}
```

Hexadecimal to Ascii converter: https://www.rapidtables.com/convert/number/hex-to-ascii.html

### 3. Dead Code Insertion and False Paths

Another obfuscation technique is the introduction of dead code or false paths. This involves adding redundant statements, conditionals, or loops that do not affect the program's functionality. It creates confusion and makes it harder for someone to understand the actual logic flow of the code.

```javascript
// Before obfuscation
function add(a, b) {
  return a + b;
}

// After obfuscation
function _0x4b81(_0x2ee7a, _0x2ee7b) {
  var _0x4b81a = false;
  // false because the above variable is already set to false and will circumvent this route
  if (_0x4b81a) {
    console.log("This is a false path");
  } else {
    var _0x4b81b = true;
    while (_0x4b81b) {
      _0x4b81b = false;
      console.log("This is a false path");
    }
  }
  return _0x2ee7a + _0x2ee7b;
}
```

## Impact of Obfuscation

While it significantly decreases readability and maintainability, obfuscation can also affect performance due to the additional computational steps introduced. However, obfuscation plays a critical role in code security, especially for code that runs on the client-side like JavaScript.

Examples include:

- preventing attackers from reverse engineering the code to find vulnerabilities
- protecting intellectual property and proprietary algorithms
- preventing code tampering and modification

## Deobfuscation Techniques

Just as there are many ways to obfuscate code, there are also various techniques to deobfuscate it. Some of these include:

### 1. Lexical Analysis

Lexical analysis is breaking down code into its building blocks to understand it better. It's like identifying words and their roles in a sentence. By doing this, we can get a clearer picture of what the code is intended to do.

#### Example

Here's an example of a simple lexical analysis of the obfuscated code we saw earlier:

```javascript
// the string array that the obfuscated code will use
var _0x5eb2 = ["\x48\x65\x6c\x6c\x6f\x2c\x20", "\x21", "\x6c\x6f\x67"];
// the function that will be called
function _0x4f5c22(_0x4a2a2c) {
  // the string that will be printed
  var _0x2e8f05 = _0x5eb2[0] + _0x4a2a2c + _0x5eb2[1];
  // print the string
  console[_0x5eb2[2]](_0x2e8f05);
}

// the actual function call
_0x4f5c22("\x4a\x6f\x68\x6e");
```

Lexical analysis could be performed with the help of a tool like [jsnice.org](https://jsnice.org/).

#### Output

```javascript
"use strict";
/** @type {!Array} */
var _0x5eb2 = ["Hello, ", "!", "log"];
/**
 * @param {string} value
 * @return {undefined}
 */
function _0x4f5c22(value) {
  var previousState = _0x5eb2[0] + value + _0x5eb2[1];
  console[_0x5eb2[2]](previousState);
}
_0x4f5c22("John");
```

### 2. Pattern Recognition

Pattern recognition techniques can be used to identify common obfuscation patterns and replace them with their original counterparts. This can include recognizing encrypted strings and decrypting them, or identifying and removing unnecessary code inserted for obfuscation purposes.

### 3. Deobfuscation Tools

There are also online tools that deobfuscate javascript code for you.

- https://deobfuscate.io
- https://deobfuscate.relative.im
- https://lelinhtinh.github.io/de4js/
