# Homework Assignment: JavaScript Deobfuscation

## Objective

This assignment is designed to test your understanding of JavaScript obfuscation and deobfuscation techniques. 

## Part 1: Instructions

1. **Deobfuscation**: The following JavaScript code has been obfuscated. Your task is to find the portion of the code that contains the factorial function. 

    ```javascript
    var _0x12cd=['\x72\x65\x74\x75\x72\x6E'];(function(_0x5a22d3,_0x12cd55){var _0x2e8787=function(_0x287a22){while(--_0x287a22){_0x5a22d3['\x70\x75\x73\x68'](_0x5a22d3['\x73\x68\x69\x66\x74']());}};_0x2e8787(++_0x12cd55);}(_0x12cd,0x1a3));var _0x2e87=function(_0x5a22d3,_0x12cd55){_0x5a22d3=_0x5a22d3-0x0;var _0x2e8787=_0x12cd[_0x5a22d3];return _0x2e8787;};function _ffgqw12(_0x287a22){if(_0x287a22===0x0){return 0x1;}else{return _0x287a22*_ffgqw12(_0x287a22-0x1);}}

    ```

Deliverable: A text file containing the obfuscated factorial function. 

(hint: paste the above code into a code editor and lint it to make it more readable. Also consider beautifying the code first.)

## Part 2: Instructions:
1. Analyze the given obfuscated Javascript code.
2. Identify the obfuscation techniques used in the code.
3. Decode the obfuscated code step by step.
4. Find the hidden flag in the decoded code.

Obfuscated Javascript Code:

```javascript
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return c.toString(a)
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('0 3() {1.2("4 5!")} 3();', 6, 6, 'function|document|write|helloWorld|Hello|World'.split('|'), 0, {}));
```

### Hints:
1. Think console functions, whatever that means...
2. The obfuscation technique used is a combination of string manipulation and character encoding.
3. Pay attention to the split() function and how it is used to create an array of strings.

Deliverable: The secret message in the same text file as problem one. 