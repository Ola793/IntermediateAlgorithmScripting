function sumAll(arr) {
  let min, max, sum = 0;

  if (arr[0] > arr [1]) {
    min = arr[1];
    max = arr[0];  
  } else {
    min = arr[0]; 
    max = arr[1]; 
  }

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);