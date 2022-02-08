// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.

function destroyer(arr) {
  let arr1 = Array.from(arguments[0]);
  let arr2 = Array.from(arguments);
  arr = arr1.filter(x => !arr2.includes(x));
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
