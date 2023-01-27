function productIndex(arrOfNums) {
  let arr = [];
  for (let i = 0; i < arrOfNums.length; i++) {
    let newIndex = arrOfNums[i] * (i + 1);
    arr[newIndex] = arrOfNums[i];
  }

  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      finalArr.push(arr[i]);
    }
  }
  console.log("\nOld Array: ");
  console.log(arrOfNums);
  console.log("-----------------");
  console.log("New Array: ");
  console.log(finalArr);
  console.log("-----------------");
}

productIndex([23, 2, 3, 4, 5]);
