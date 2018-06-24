function insertionSort(array) {
  // Loop over array.
  for (let i = 0; i < array.length; i++) {
    // Declare a temporary variable equal to the current item's value.
    let temp = array[i];
    // Declare a variable equal to one index lower than the current item's index.
    let j = i - 1;
    // As long as the current item isn't the first item in the array
    // and the previous item's value is bigger than the current item's value
    // set the previous item equal to the current item in the array.
    while (j >= 0 && array[j] > temp) {
      // Set the current item equal to the previous item,
      // which value was bigger than the current value. You don't override 
      // the current value, as that's still stored in the temp var.
      array[j + 1] = array[j];
      // Go to the previous item in the array, and check again whether this value
      // is bigger or smaller than the current item's value.
      j--;
    } 
    // As the current item just switched position, you need to redeclare 
    // the value of the temp variable, as it's no longer equal to array[i].
    array[j + 1] = temp;
  }
  return array;
}