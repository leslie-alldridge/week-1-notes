function getFunction() {
    let func = function(){
    }
    return func;
}

function getNull() {
    return null;
}

function getNumber() {
    let num = 10;
    return num;
}

function getObject(){
    let obj = {};
    return obj;
}

function getString(){
    let str = '';
    return str;
}

module.exports = {
    getBoolean: () => true,   //shortcut for exporting a function that evaluates to true
    getFunction: getFunction,
    getNull: getNull,
    getNumber: getNumber,
    getObject: getObject,
    getString: getString
};

