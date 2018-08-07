// function getType (thing) {
//     return typeof thing;
// }

getType = (thing) => typeof thing;

// function isNumber (thing) {
//     console.log(typeof thing);
//     if (typeof thing === 'number'){
//         return true;
//     } else {
//         return false;
//     }
// }
isNumber = (thing) => typeof thing === 'number' ? true : false;

// function toNumber (str) {
//     return parseInt(str);
// }

toNumber = (str) => parseInt(str);

// function isStringNumber (str) {
//     if (parseInt(str)) {
//         return true;
//     } else {
//         return false;
//     }
// }

isStringNumber = (str) => parseInt(str) ? true : false;

// function add (a, b) {
//     return a + b;
// }

add = (a, b) => a + b

// function addStrings (a, b) {
//     console.log(a, b)
//     let n = parseInt(b)
//     let total = a + n
//     return total.toString()
// }

addStrings = (a, b) => String(add(parseInt(b), a)); //uses the add function above^

function addStringsOrNumbers (a, b) {
    // assigning types to variables and console logging to test
    let aType = typeof(a)
    console.log(aType);
    let bType = typeof(b)
    console.log(bType);

    // if we have two numbers , add them
    if (aType && bType === 'number'){
        return a + b;
    } 
    //otherwise convert both to numbers and add, convert output to string
    else {
        let num = parseInt(a)
        num += parseInt(b)
        return num.toString();
    }
}

function isEmail (str) {
    let arr = (str.split("@"));
    console.log(arr)
    if (arr.length < 2){
        return false;
    } else if (arr[1] === ''){
        return false;
    } else {
        return true;
    }
}

function countIf (array, fn) {
    // we both need to practice this more.
    let numCount = 0;
    //console.log(fn(array[0]))
    for (let i = 0; i < array.length; i++)
        if (fn(array[i])){
            numCount ++;  
    }
    return numCount;
}

function filter (array, fn) {
    let count = [];
    for (let i = 0; i < array.length; i++){
    if(fn(array[i])){
        count.push(array[i]);
    } 
}
    return count;
}

function map (array, fn) {
    console.log(fn(array[0]))
    let arrayResult = [];
    for (let i = 0; i < array.length; i ++){
        arrayResult.push(fn(array[i]))
    }
    return arrayResult;
}

function filterStringsWithCommas (str) {
    let count = 0;
    //str.filter(",");
   for (let i = 0; i < str.length; i ++){
       if(str[i].includes(',')){
           count ++
       }
   }
   return count;
}


//using split creates a new array!!!
function splitStringByCommas (str) {
    return str.split(',')
}



module.exports = {
    getType: getType,
    isNumber: isNumber,
    toNumber: toNumber,
    isStringNumber: isStringNumber,
    add: add,
    addStrings: addStrings,
    addStringsOrNumbers: addStringsOrNumbers,
    isEmail: isEmail,
    countIf: countIf,
    filter: filter,
    map: map,
    filterStringsWithCommas: filterStringsWithCommas,
    splitStringByCommas: splitStringByCommas
  }