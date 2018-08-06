/**
 * Objects, keys/properties and values
 */

// getGreeting should return a string containing 'Hello ' and the contents of `name`
function getGreeting (name) {
  return 'Hello ' + name;
}

// ageOneYear should add one to the `age` property of `obj`
function ageOneYear (obj) {
  return obj.age ++;
}

// makeObject should return an object that looks like this:
// (but using the arguments passed to the function)
// {
//   key: value
// }
function makeObject (key, value) {
  let obj = {};
  obj[key] = value;
  return obj;
}

// getValue should return the value of the property contained in `key`
function getValue (obj, key) {
  return obj[key];
}

// addName should add a `name` property to the object with the value of the `name` argument
function addName (obj, name) {
  return obj["name"] = name;
}

// deleteProperty should remove the property contained in `key` from `obj`
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
function deleteProperty (obj, key) {
  return delete obj[key];
}

// returnErrorIfFalsy should return a JavaScript Error object with message:
//   'Oh no, an error!'
// if val evaluates to false
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function returnErrorIfFalsy (val) {
  if (!val) {
    return new Error(['Oh no, an error!']);
  }
}

// keys should return an array of the object's property names (keys)
// For example, given { foo: 1, bar: 2 } it would return ['foo', 'bar']
function keys (obj) {
  return Object.keys(obj);
}

// values should return an array of the object's own values
// For example, given { foo: 1, bar: 2 } it would return [1, 2]
function values (obj) {
  return Object.values(obj);
}

/**
 * Arrays
 */

// makeArrayOfItem should return an array that is `length` long, made up of `item`
// For example, makeArrayOfItem('foo', 2) would return:
// [ 'foo', 'foo' ]
function makeArrayOfItem (item, length) {
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
function hasItem (arr, item) {
  return arr.includes(item);
}

// getItemAtIndex should return arr[idx] but only if that index exists:
// if it doesn't, return a JavaScript Error object.
function getItemAtIndex (arr, idx) {
  let index = arr.indexOf(idx);
  if (!arr[idx]){
    return new Error();
  } else {
    return arr[idx];
  }
}

// replaceItemAtIndex should replace the element at `idx` with `item`
function replaceItemAtIndex (arr, idx, item) {
  arr[idx] = item;
  return arr;
}

// insertItemAtIndex should insert `item` at `idx` without overwriting
// any array values (the array should get longer)
function insertItemAtIndex (arr, item,  idx) {
  arr.splice(idx, 0, item);
  return arr;
}

// deleteItemAtIndex should remove the element at `idx` (the array
// should get shorter).
function deleteItemAtIndex (arr, idx) {
  arr.splice(idx, 1);
  return arr;
}

// deleteItem should return an array with every instance of `item` removed
function deleteItem (arr, item) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] !== item) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

// zipObject should return an object built from two arrays
// For example, given ['foo', 'bar'] and [1, 2] it would return
// { foo: 1, bar: 2}
function zipObject (keys, values) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
}

// unzipObject should return an array of arrays, each one a pair of keys and values
// For example, given { foo: 1, bar: 2} it would return
// [ [ 'foo', 1 ], [ 'bar', 2 ] ]
function unzipObject (obj) {
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
function findOneByProperty (arr, search) {
  let valueSearch = (Object.values(search)[0]); //cthulhu logs
  let keySearch = (Object.keys(search)[0]); //name logs
  let result = arr.filter( name => name[keySearch] === valueSearch );
  return result[0]; // this can be improved because i knew only one result was coming back  
}

// findAll should return an array containing all objects in `arr` that
// have the property and value of `search`
function findAll (arr, search) {
  let valueSearch = (Object.values(search)[0]); //232 logs
  let keySearch = (Object.keys(search)[0]); //age logs
  return arr.filter( name => name[keySearch] === valueSearch );
}

module.exports = {
  addName: addName,
  ageOneYear: ageOneYear,
  deleteItem: deleteItem,
  deleteItemAtIndex: deleteItemAtIndex,
  deleteProperty: deleteProperty,
  getGreeting: getGreeting,
  getItemAtIndex : getItemAtIndex,
  getValue: getValue,
  findOneByProperty: findOneByProperty,
  findAll: findAll,
  hasItem : hasItem,
  insertItemAtIndex: insertItemAtIndex,
  keys: keys,
  makeArrayOfItem: makeArrayOfItem,
  makeArrayOfItems: makeArrayOfItems,
  makeObject: makeObject,
  replaceItemAtIndex: replaceItemAtIndex,
  returnErrorIfFalsy: returnErrorIfFalsy,
  unzipObject: unzipObject,
  values: values,
  zipObject: zipObject
}
