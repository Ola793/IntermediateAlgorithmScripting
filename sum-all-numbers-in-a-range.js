// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

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
