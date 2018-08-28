// 1.

function findType(x){
    return typeof x
} 

// 2.

function forEach(arr, func) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(func(arr[i]));
	}
	return result;
}

// 3. 

function map(arr, func) {
	const arrCopy = arr.slice();
	return forEach(arrCopy, func);
}

// 4. 

function filter(arr, condition) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];
		if (condition(value)) {
			result.push(value);
		}
	}
	return result;
}

// 5.

function getAdultAppleLovers(data) {
    return map(filter(data, function(el){
        return el.age >= 18 && el.favoriteFruit === 'apple'
    }), function(el) {
        return el.name
    })
}

// 6.

function keys(obj) {
  if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
    throw new TypeError('Object.keys called on non-object');
  }
  const hasOwnProperty = Object.prototype.hasOwnProperty;

  const result = [];

  for (let prop in obj) {
    if (hasOwnProperty.call(obj, prop)) {
      result.push(prop);
    }
  }

  return result;
}

// 7.

function values(obj) {
  if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
    throw new TypeError('Object.keys called on non-object');
  }
  const hasOwnProperty = Object.prototype.hasOwnProperty;

  const result = [];

  for (let prop in obj) {
    if (hasOwnProperty.call(obj, prop)) {
      result.push(obj[prop]);
    }
  }

  return result;
}

// 8. 

function showFormattedDate(d) {
    const monthNames = ['January', 
                        'February', 
                        'March', 
                        'April', 
                        'May', 
                        'June', 
                        'July', 
                        'August', 
                        'September', 
                        'October', 
                        'November', 
                        'December'];
	return `It is ${d.getDate()} of ${monthNames[d.getMonth()]}, ${d.getFullYear()}`
}
