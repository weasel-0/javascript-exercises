const removeFromArray = function (arr, ...numtoDelete) {
  let newArr = [];
  let nums = [...numtoDelete];
  nums.forEach((element) => {
    if (arr.includes(element)) {
      newArr = arr.splice(arr.indexOf(element), 1);
    }
  });
  return arr;
};

// for (let i = 0; i < arr.length; i++) {
//     for (const numbers of numtoDelete) {
//       if (arr[i] === numtoDelete) {
//         continue;
//       } else {
//         newArr.push(arr[i]);
//       }
//     }
//   }

// Do not edit below this line
module.exports = removeFromArray;
