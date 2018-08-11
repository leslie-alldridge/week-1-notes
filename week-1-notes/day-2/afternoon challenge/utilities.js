getType = (thing) => typeof thing;

isNumber = (thing) => typeof thing === 'number' ? true : false;

toNumber = (str) => parseInt(str);

isStringNumber = (str) => parseInt(str) ? true : false;

add = (a, b) => a + b

addStrings = (a, b) => String(add(parseInt(b), a)); //uses the add function above

addStringsOrNumbers = (a, b) => typeof (a) && typeof (b) === 'number' ? a + b :
    String(parseInt(a) + parseInt(b));
    
isEmail = (str) => String(str)
	.match(
		/^\s*[\w\-\+_]+(?:\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(?:\.[\w\-\+_]+)*\s*$/
    ) ? true : false;
    
countIf = (array, fn) => {
	let numCount = 0;
	for (let i = 0; i < array.length; i++)
		if (fn(array[i])) {
			numCount++;
		}
	return numCount;
}

filter = (array, fn) => {
	let count = [];
	for (let i = 0; i < array.length; i++) {
		if (fn(array[i])) {
			count.push(array[i]);
		}
	}
	return count;
}

map = (array, fn) => {
	let arrayResult = [];
	for (let i = 0; i < array.length; i++) {
		arrayResult.push(fn(array[i]))
	}
	return arrayResult;
}

filterStringsWithCommas = (str) => {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i].includes(',')) {
			count++
		}
	}
	return count;
}
splitStringByCommas = (str) => str.split(',')

module.exports = {
	getType,
	isNumber,
	toNumber,
	isStringNumber,
	add,
	addStrings,
	addStringsOrNumbers,
	isEmail,
	countIf,
	filter,
	map,
	filterStringsWithCommas,
	splitStringByCommas
}
