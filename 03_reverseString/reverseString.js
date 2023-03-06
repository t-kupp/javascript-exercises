const reverseString = function(string) {
    const letterArray = Array.from(string);
    letterArray.reverse();
    return letterArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
