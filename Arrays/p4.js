// Given an array of 1s and 0s which has all 1s first followed by all 0s. Find the number of 0s. Count the number of zeroes in the given array.
// Examples :

// Input: arr[] = {1, 1, 1, 1, 0, 0}
// Output: 2

// Input: arr[] = {1, 0, 0, 0, 0}
// Output: 4

// Input: arr[] = {0, 0, 0}
// Output: 3

// Input: arr[] = {1, 1, 1, 1}
// Output: 0

function countZeroes(arr1) {
  let count = 0;
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] == 0) {
      count++;
    }
  }
  console.log(count);
}

let arr1 = [1, 1, 1, 1, 0, 0];
countZeroes(arr1);
