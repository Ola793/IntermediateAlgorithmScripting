// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
// and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
// because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line

  let check = 0, countFalse = 0;

	for (let i = 0; i < collection.length; i++) {
  		for (let key1 in collection[i]) { 
    		for (let key2 in source) {
    			if (Object.keys(collection[i]).length >= Object.keys(source).length && key1 === key2 && collection[i][key1] === source[key2]) {
    				check = 1; 
    				}

      			if (Object.keys(collection[i]).length <= Object.keys(source).length && key1 !== key2 || key1 === key2 && collection[i][key1] !== source[key2]) {
      				check = 0; 
      				}
      				
      			if (Object.keys(collection[i]).length == Object.keys(source).length && key1 === key2 && collection[i][key1] !== source[key2]) {
      				check = 0; 
				countFalse++;
      				} 
    			}
  		}
  	check && !countFalse ? arr.push(collection[i]) : arr;
	}

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
