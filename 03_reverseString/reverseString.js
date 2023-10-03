const reverseString = function (str) {
  let reverseStr;
  let strArray = str.split("").reverse();
  reverseStr = strArray.join("");
  return reverseStr;
};

//can be a one liner

// Do not edit below this line
module.exports = reverseString;
