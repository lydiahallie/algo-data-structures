// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// top-down implementation
function mergeSortTopDown(array) {
  // If the array only has one value, return the array.
  if(array.length < 2) {
    return array;
  }

  // Find the middle item of the array, and the arrays with all the values left and right of the middle value.
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Keep on slicing the array(s) into smaller arrays, until you only have arrays containing one element.
  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

function mergeTopDown(left, right) {
  const array = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // Check which value is higher. If the left right's value is higher,
      // push the left item to the array, as lowest values come first in the array.
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  // Concatenate both left and right arrays to one sorted array.
  return array.concat(left.slice()).concat(right.slice());
}