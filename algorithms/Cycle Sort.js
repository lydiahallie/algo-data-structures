function cycleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let item = array[i];
    let icopy = i
    
    for (let j = i + 1; i < array.length; j++)
      if (array[i] < item)
        icopy++
    if (icopy == i)
      continue

    while (item == array[icopy])
      currentIndexCopy++

    // swap
    let temp = array[icopy]
    array[icopy] = item
    item = temp

  
    while (icopy != i) {
      icopy = i
      for (let j = i + 1; j < array.length; j++)
        if (array[j] < item)
          icopy++

      // skip duplicates
      while (item == array[icopy])
        icopy++

      // swap
      temp = array[icopy]
      array[icopy] = item
      item = temp
    }
  }
}

let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
cycleSort(array)
