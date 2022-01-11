// 1
let outputArray = 0;
let inputArray = [2, 3, -5, -2, 4];
function adjacentElementsProduct(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > outputArray) {
      outputArray = inputArray[i] * inputArray[i + 1];
    }
  }
  return outputArray;
}
console.log(adjacentElementsProduct(inputArray));

// 2
function alternatingSums(array) {
  let resultsArray = [0, 0];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      resultsArray[0] += array[i];
    } else {
      resultsArray[1] += array[i];
    }
  }
  return resultsArray;
}
let nums = [60, 40, 55, 75, 64];
let result = alternatingSums(nums);
console.log("result: ", result);
