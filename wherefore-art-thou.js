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