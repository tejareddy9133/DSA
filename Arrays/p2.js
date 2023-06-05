// Given an array arr of N elements,  A majority element in an array arr of size N is an element that appears more than N/2 times in the array. The task is to write a function say isMajority() that takes an array (arr[] ), array’s size (n) and a number to be searched (x) as parameters and returns true if x is a majority element (present more than n/2 times).

// Examples:

// Input: arr[] = {1, 2, 3, 3, 3, 3, 10}, x = 3
// Output: True (x appears more than n/2 times in the given array)

// Input: arr[] = {1, 1, 2, 4, 4, 4, 6, 6}, x = 4
// Output: False (x doesn't appear more than n/2 times in the given array)

// Input: arr[] = {1, 1, 1, 2, 2}, x = 1
// Output: True (x appears more than n/2 times in the given array)

function majority(arr) {
  let obj = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  let max = -Infinity;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }
  if (max > arr.length / 2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
let arr1 = [1, 2, 3, 3, 3, 3, 10];
let arr2 = [1, 1, 2, 4, 4, 4, 6, 6];
majority(arr1);
majority(arr2);
