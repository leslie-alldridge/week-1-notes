/**
 * Objects, keys/properties and values
 */

// getGreeting should return a string containing 'Hello ' and the contents of `name`
getGreeting = (name) => 'Hello ' + name;

// ageOneYear should add one to the `age` property of `obj`
ageOneYear = (obj) => obj.age ++;

makeObject = (key, value) => {
  let obj = {};
  obj[key] = value;
  return obj;
}

// getValue should return the value of the property contained in `key`
getValue = (obj, key) => obj[key];

// addName should add a `name` property to the object with the value of the `name` argument
addName = (obj, name) => obj["name"] = name;

// deleteProperty should remove the property contained in `key` from `obj`
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
deleteProperty = (obj, key) => delete obj[key];

// returnErrorIfFalsy should return a JavaScript Error object with message:
//   'Oh no, an error!'
// if val evaluates to false
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
returnErrorIfFalsy = (val) => {
  if (!val) {
    return new Error(['Oh no, an error!']);
  }
}
// keys should return an array of the object's property names (keys)
// For example, given { foo: 1, bar: 2 } it would return ['foo', 'bar']
keys = (obj) => Object.keys(obj);

// values should return an array of the object's own values
// For example, given { foo: 1, bar: 2 } it would return [1, 2]
values = (obj) => Object.values(obj);

/**
 * Arrays
 */

// makeArrayOfItem should return an array that is `length` long, made up of `item`
// For example, makeArrayOfItem('foo', 2) would return:
// [ 'foo', 'foo' ]
makeArrayOfItem = (item, length) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(item);
  }
  return arr;
}

// makeArrayOfItems should return an array containing all arguments passed to it
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
function makeArrayOfItems () {
  return Array.from(arguments);
}

// hasItem should return true if `item` is present in `arr` at least once,
// otherwise it should return false.
hasItem = (arr, item) => arr.includes(item);

// getItemAtIndex should return arr[idx] but only if that index exists:
// if it doesn't, return a JavaScript Error object.
getItemAtIndex = (arr, idx) => !arr[idx] ?  new Error() : arr[idx];

// replaceItemAtIndex should replace the element at `idx` with `item`
replaceItemAtIndex = (arr, idx, item) => {
  arr[idx] = item;
  return arr;
}

// insertItemAtIndex should insert `item` at `idx` without overwriting
// any array values (the array should get longer)
insertItemAtIndex = (arr, item,  idx) => arr.splice(idx, 0, item);

// deleteItemAtIndex should remove the element at `idx` (the array
// should get shorter).
deleteItemAtIndex = (arr, idx) => arr.splice(idx, 1);
  

// deleteItem should return an array with every instance of `item` removed
deleteItem = (arr, item) => {
  return arr.filter(function (currentItem) {
    return currentItem !== item;
});
}

// zipObject should return an object built from two arrays
// For example, given ['foo', 'bar'] and [1, 2] it would return
// { foo: 1, bar: 2}
zipObject = (keys, values) => {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
}

// unzipObject should return an array of arrays, each one a pair of keys and values
// For example, given { foo: 1, bar: 2} it would return
// [ [ 'foo', 1 ], [ 'bar', 2 ] ]
unzipObject = (obj) => {
  let arr1 = [];
  for (let i = 0; i < Object.keys(obj).length; i++) {
    let arr2 = [];
    arr2[0] = Object.keys(obj)[i];
    arr2[1] = Object.values(obj)[i];
    arr1.push(arr2);
  }
  return arr1;
}

// findOneByProperty should return an object from `arr` that has the
// property AND value of `search`. For example, given:
//   [ { a: 1 }, { b: 2, c: 3 } ] and { b: 2 }
// it will return:
//   { b: 2, c: 3 }
findOneByProperty = (arr, search) => {
  let value = (Object.values(search)[0]);
  let keyID = (Object.keys(search)[0]);
  return arr.find( nameID => nameID[keyID] == value );
}

// findAll should return an array containing all objects in `arr` that
// have the property and value of `search`
findAll = (arr, search) => {
  let valueSearch = (Object.values(search)[0]); //232 logs
  let keySearch = (Object.keys(search)[0]); //age logs
  return arr.filter( name => name[keySearch] === valueSearch );
}

module.exports = {
  addName,
  ageOneYear,
  deleteItem,
  deleteItemAtIndex,
  deleteProperty,
  getGreeting,
  getItemAtIndex,
  getValue,
  findOneByProperty,
  findAll,
  hasItem,
  insertItemAtIndex,
  keys,
  makeArrayOfItem,
  makeArrayOfItems,
  makeObject,
  replaceItemAtIndex,
  returnErrorIfFalsy,
  unzipObject,
  values,
  zipObject
}
