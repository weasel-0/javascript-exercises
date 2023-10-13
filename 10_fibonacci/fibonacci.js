const fibonacci = function (num) {
  let x = 0;
  let y = 1;
  let term;
  num = Number(num);
  if (num > 0) {
    for (let i = 2; i <= num; i++) {
      z = x + y;
      x = y;
      y = z;
    }
  } else {
    return "OOPS";
  }

  return y;
};

// Do not edit below this line
module.exports = fibonacci;
