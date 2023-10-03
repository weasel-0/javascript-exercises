const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const tmp = max;
    max = min;
    min = tmp;
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
  //[first,second]=arr;
  //if(first>second)
  //   let new2 = [...arr];
  //   let newArr = [];
  //   let sum = 0;
  //   for (let i = 1; i <= new2[new2.length - 1]; i++) {
  //     newArr.push(i);
  //   }
  //   for (let j = 0; j < newArr.length; j++) {
  //     sum += newArr[j];
  //   }
  //   console.log(arr);
  //   console.log(newArr);
  //   return sum;
};

// Do not edit below this line
module.exports = sumAll;
