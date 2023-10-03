const repeatString = function (str, num) {
  let result = str;
  if (num === 0) {
    return "";
  } else if (num < 0) {
    return "ERROR";
  }
  for (let i = 1; i <= num - 1; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
