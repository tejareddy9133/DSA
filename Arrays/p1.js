// Given an array arr[] of integers. Find a peak element i.e. an element that is not smaller than its neighbors.

// Note: For corner elements, we need to consider only one neighbor.

// Example:

// Input: array[]= {5, 10, 20, 15}
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

let arr = [5, 70, 20, 156, 30, 4];

for (let i = 1; i <= arr.length - 2; i++) {
  if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
    console.log(arr[i]);
  }
}
