const palindromes = function (str) {
  const regex = /[^a-z0-9]/gi;
  let newStr = str.replace(regex, "").toLowerCase();
  let arr = newStr.split("").reverse().join("").toLowerCase();
  return newStr === arr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
