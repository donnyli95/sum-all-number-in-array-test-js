function sumItems(array) {
  // Sum all the numbers in the array

  if (Array.isArray(array[0])) { // checks first index of array and removes the rest
    return sumItems(array[0]) + sumItems(array.slice(1));
  } else {
    if (array.length > 1) { // recursive conditions
      return array[0] + sumItems(array.slice(1)); // adds values if not a nested array
    } else { // base conditions
        return array[0] === undefined ? 0 : array[0]; // check for empty array, return undefined if true
    }
  }
}

module.exports = sumItems;




