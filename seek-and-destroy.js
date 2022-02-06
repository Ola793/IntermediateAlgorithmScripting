function destroyer(arr) {
  let arr1 = Array.from(arguments[0]);
  let arr2 = Array.from(arguments);
  arr = arr1.filter(x => !arr2.includes(x));
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);