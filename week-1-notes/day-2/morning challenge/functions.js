function callsProperty(newObj){
   newObj.increment();
   //because the test is passing through an object 
   // with a key named 'increment' and a value which is 
   // the function (this.n++)
   //we will need to call .increment as a function (using ())
}

function filter (arr , func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}
// if you code something like the above, use array.find instead :) 

function find(arr, func) {
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i])){
            return arr[i];
        }
    }
}

function map(arr, func){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i])){
            newArr.push(func(arr[i]))
        }
    }
    return newArr
}

module.exports = {
    callsFunction: (func) => func(), // shortcut for returning function es6
    callsProperty: callsProperty,
    filter: filter,
    find: find,
    map: map
}

