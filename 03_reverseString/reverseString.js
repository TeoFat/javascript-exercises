const reverseString = function(string) {
    const reverse = new Array(string.length);
    for (let i = 0; i < string.length; i++) {
        reverse[string.length - i] = string[i];
    }
    return reverse.join('')
};

// Do not edit below this line
module.exports = reverseString;
